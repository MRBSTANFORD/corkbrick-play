
import React, { useMemo, useRef } from 'react';
import { X, Printer, Leaf, Euro, Weight, Box, FileDown, Clock } from 'lucide-react';
import { PlacedBrock, BrockType } from '../types';
import { BROCK_SPECS, APP_CONFIG, AppConfigService } from '../constants';

interface BOMModalProps {
  blocks: PlacedBrock[];
  onClose: () => void;
}

export const BOMModal: React.FC<BOMModalProps> = ({ blocks, onClose }) => {
  const printRef = useRef<HTMLDivElement>(null);

  const data = useMemo(() => {
    const groups: Record<string, { 
      type: BrockType; 
      count: number; 
      unitPrice: number; 
      totalPrice: number; 
      unitWeight: number; 
      totalWeight: number; 
      unitSDG: number; 
      totalSDG: number; 
      totalCarbon: number;
      spec: any;
      materialName: string;
    }> = {};

    let grandTotalCost = 0;
    let grandTotalWeight = 0;
    let grandTotalSDG = 0;
    let grandTotalCarbonRevenue = 0;

    blocks.forEach(b => {
      const spec = BROCK_SPECS[b.type];
      let cost = APP_CONFIG.prices[b.type];
      let weight = APP_CONFIG.weights[b.type];
      const sdg = APP_CONFIG.sdgImpacts[b.type];
      
      const c = b.color?.toUpperCase() || spec.color.toUpperCase();
      let factor = 0; let price = 0;
      let matName = 'Unknown Material';
      const configuredMaterial = APP_CONFIG.materials?.find(m => m.color.toUpperCase() === c);
      if (configuredMaterial) {
          factor = configuredMaterial.carbonFactor || 0;
          price = configuredMaterial.carbonPrice || 0;
          matName = configuredMaterial.name;
          
          if (configuredMaterial.density) {
             const corkDensity = 152.5;
             weight = (weight / corkDensity) * configuredMaterial.density;
          }
          if (configuredMaterial.pricePerKg) {
             cost = weight * configuredMaterial.pricePerKg;
          }
      }
      const carbon = (weight / 1000) * factor * price;

      const groupKey = `${b.type}-${c}`;

      if (!groups[groupKey]) {
        groups[groupKey] = {
          type: b.type,
          count: 0,
          unitPrice: cost,
          totalPrice: 0,
          unitWeight: weight,
          totalWeight: 0,
          unitSDG: sdg,
          totalSDG: 0,
          totalCarbon: 0,
          spec: spec,
          materialName: matName
        };
      }

      groups[groupKey].count++;
      groups[groupKey].totalPrice += cost;
      groups[groupKey].totalWeight += weight;
      groups[groupKey].totalSDG += sdg;
      groups[groupKey].totalCarbon += carbon;

      grandTotalCost += cost;
      grandTotalWeight += weight;
      grandTotalSDG += sdg;
      grandTotalCarbonRevenue += carbon;
    });

    return {
      items: Object.values(groups).sort((a, b) => a.spec.name.localeCompare(b.spec.name)),
      grandTotalCost,
      grandTotalWeight,
      grandTotalSDG,
      grandTotalCarbonRevenue
    };
  }, [blocks]);

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;
    
    const win = window.open('', '', 'height=800,width=800');
    if (win) {
      win.document.write('<html><head><title>Corkbrick Bill of Materials</title>');
      win.document.write('<script src="https://cdn.tailwindcss.com"></script>'); 
      win.document.write('</head><body class="p-8 bg-white text-gray-900">');
      win.document.write(printContent.innerHTML);
      win.document.write('</body></html>');
      win.document.close();
      win.setTimeout(() => {
          win.print();
      }, 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <div className="flex items-center gap-3">
             <div className="bg-green-100 p-2 rounded-lg text-green-700">
                <Box size={24} />
             </div>
             <div>
                <h2 className="text-xl font-bold text-gray-800">Bill of Materials</h2>
                <p className="text-xs text-gray-500">Project Inventory & Impact Analysis</p>
             </div>
          </div>
          <div className="flex gap-2">
            <button onClick={handlePrint} className="flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-sm text-sm font-medium">
                <Printer size={16} /> Print / PDF
            </button>
            <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-lg text-gray-500 transition">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-white" ref={printRef}>
            
            {/* Document Header (Visible in print) */}
            <div className="flex justify-between items-end mb-8 pb-4 border-b-2 border-gray-800">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Corkbrick<span className="font-light text-gray-500">Solution</span></h1>
                    <p className="text-sm text-gray-500 mt-1">Sustainable Modular Furniture</p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">DATE: <span className="font-normal">{new Date().toLocaleDateString()}</span></p>
                    <p className="text-sm font-bold text-gray-900">ITEMS: <span className="font-normal">{blocks.length}</span></p>
                </div>
            </div>

            {/* Table */}
            <table className="w-full text-sm text-left">
                <thead>
                    <tr className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
                        <th className="p-3 font-bold rounded-l-lg">Item / Description</th>
                        <th className="p-3 font-bold">Material</th>
                        <th className="p-3 font-bold text-center">Qty</th>
                        <th className="p-3 font-bold text-right">Unit Price</th>
                        <th className="p-3 font-bold text-right">Total Price</th>
                        <th className="p-3 font-bold text-right">Weight (kg)</th>
                        <th className="p-3 font-bold text-right text-emerald-600">Carbon Credit</th>
                        <th className="p-3 font-bold text-right rounded-r-lg text-green-700">SDG Impact</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {data.items.map((item, idx) => (
                        <tr key={`${item.type}-${idx}`} className="hover:bg-gray-50 transition-colors">
                            <td className="p-3">
                                <div className="font-bold text-gray-800">{item.spec.name}</div>
                                <div className="text-xs text-gray-400">{item.spec.description}</div>
                            </td>
                            <td className="p-3 text-gray-600 font-medium text-xs">{item.materialName}</td>
                            <td className="p-3 text-center font-mono">{item.count}</td>
                            <td className="p-3 text-right text-gray-600">€{item.unitPrice.toFixed(2)}</td>
                            <td className="p-3 text-right font-medium">€{item.totalPrice.toFixed(2)}</td>
                            <td className="p-3 text-right text-gray-600">{item.totalWeight.toFixed(2)}</td>
                            <td className="p-3 text-right text-emerald-600 font-mono font-medium">€{item.totalCarbon.toFixed(2)}</td>
                            <td className="p-3 text-right font-medium text-green-700">{item.totalSDG.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Totals Section */}
            <div className="mt-8 flex justify-end">
                <div className="w-full max-w-sm space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-100 text-gray-600">
                        <span className="flex items-center gap-2"><Weight size={14}/> Total Weight</span>
                        <span className="font-mono">{data.grandTotalWeight.toFixed(2)} kg</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 text-gray-600">
                        <span className="flex items-center gap-2" title="Estimated assembly time"><Clock size={14}/> Assembly Time</span>
                        <span className="font-mono">{Math.ceil(blocks.length / (AppConfigService.get().assemblySpeedBlocksPerMinute || 4))} m</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 text-green-700 font-medium">
                        <span className="flex items-center gap-2"><Leaf size={14}/> Total SDG Impact</span>
                        <span className="font-mono">{data.grandTotalSDG.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 text-emerald-700 font-medium">
                        <span className="flex items-center gap-2" title="Estimated Carbon Credit Revenue (€)"><Leaf size={14}/> Carbon Credits Revenue</span>
                        <span className="font-mono">€{data.grandTotalCarbonRevenue.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-4 border-t-2 border-gray-900 text-xl font-bold text-gray-900">
                        <span className="flex items-center gap-2">Total (Excl. Tax)</span>
                        <span>€{data.grandTotalCost.toFixed(2)}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 text-right mt-2">
                        * Prices exclude VAT and shipping. SDG Impact represents the calculated sustainable development value generated. Carbon Credits Revenue is an estimation based on material volume and market offsets.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
