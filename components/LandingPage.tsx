import React from 'react';
import { Play, Leaf, Layers, ShieldCheck, FileBox, Cuboid, ChevronRight, Globe2, Hammer } from 'lucide-react';

interface LandingPageProps {
    onStart: () => void;
    onGoToFood4Thought: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart, onGoToFood4Thought }) => {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
            {/* Header */}
            <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-indigo-600 font-black tracking-tighter text-2xl">
                        <Leaf className="text-green-600" size={28} /> 
                        CORKBRICK<span className="font-light text-gray-400">Play</span>
                    </div>
                    <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                        <a href="https://corkbrick.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">Philosophy</a>
                        <button onClick={onGoToFood4Thought} className="hover:text-indigo-600 transition-colors">Food 4 Thought</button>
                        <a href="https://github.com/corkbrick" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">GitHub</a>
                    </nav>
                    <button 
                        onClick={onStart}
                        className="bg-gray-900 hover:bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md active:scale-95"
                    >
                        Launch App
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-bold tracking-wide mb-6">
                            <Leaf size={14} /> Sustainable Modular Architecture
                        </div>
                        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Physical World</span> from your Browser.
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                            CORKBRICK Play is a digital laboratory for real-world structures. Design modular furniture and walls, simulate physics, calculate SDG impact, and order the exact pieces directly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={onStart}
                                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-xl shadow-indigo-600/20"
                            >
                                <Play size={20} fill="currentColor" /> Open Simulator
                            </button>
                            <button 
                                onClick={onGoToFood4Thought}
                                className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
                            >
                                Read Articles <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-gradient-to-tr from-indigo-100 to-blue-50 rounded-full absolute -inset-4 blur-3xl opacity-50"></div>
                        <div className="relative bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                            {/* Abstract Graphic representing blocks */}
                            <div className="grid grid-cols-3 gap-2 p-10 transform rotate-12 scale-110">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className={`rounded-xl shadow-md ${i % 2 === 0 ? 'bg-amber-700 w-24 h-24' : 'bg-amber-600 w-16 h-16'} opacity-90 transition-transform hover:scale-110`}></div>
                                ))}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur border border-white/50 rounded-2xl p-4 shadow-lg flex justify-around">
                                <div className="text-center"><div className="font-bold text-2xl text-gray-900">7</div><div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Broch Blocks</div></div>
                                <div className="w-px bg-gray-200"></div>
                                <div className="text-center"><div className="font-bold text-2xl text-green-600 flex items-center justify-center gap-1"><Leaf size={16}/> 14</div><div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">SDG Impact</div></div>
                                <div className="w-px bg-gray-200"></div>
                                <div className="text-center"><div className="font-bold text-2xl text-gray-900">0</div><div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Tools Needed</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Banners */}
            <section className="bg-gray-50 py-24 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">A Sandbox for Positive Gamification</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Technology should empower creativity without isolating the creator. We use software to encourage physical, collaborative, and sustainable problem solving.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                                <Globe2 size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Sustainable Engine</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Every part you place accurately calculates weight, cost, and structural viability. Track your design's real-world footprint and specific Sustainable Development Goals contributions live.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <FileBox size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">CAD Interoperability</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Connect with your existing tools. Import structural foundations from SketchUp or AutoCAD (.OBJ, .GLTF, .DAE) directly into the app, and export your Corkbrick layouts back into your 3D workflow.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                                <Hammer size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Instant Translation</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                When your digital masterpiece is complete, automatically generate a Bill of Materials (BOM) and order the physical Corkbrick pieces to build your design in reality—with no glue or tools required.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / CTA */}
            <section className="py-24 px-6 max-w-4xl mx-auto text-center">
                <Leaf className="mx-auto text-green-500 mb-6" size={48} />
                <h2 className="text-4xl font-extrabold tracking-tight mb-6 text-gray-900">Ready to start building?</h2>
                <p className="text-xl text-gray-600 mb-10">Join our open-source movement and redefine the relationship between digital gamification and sustainable physical spaces.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button onClick={onStart} className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-gray-900/20 transition-transform hover:-translate-y-1">Launch Applicaton</button>
                    <a href="https://github.com/corkbrick" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg transition-colors">Contribute on GitHub</a>
                </div>
            </section>
        </div>
    );
};
