# CORKBRICK Play - Technical Architecture & Developer Guide

## 1. Project Objectives & Benefits
**Objective:** To provide a digital sandbox (CORKBRICK Play) where users can construct sustainable structures using the 7 standard CORKBRICK blocks, experiment with different materials, and visualize both the physical and environmental impacts of their designs.

**Benefits:** 
- Acts as a bridge between physical construction and digital prototyping.
- Teaches sustainable construction and carbon footprint concepts through gamification.
- Serves as a sales funnel and partnership platform for other sustainable material vendors.
- Provides architects and designers with exportable 3D formats (.obj) for professional CAD pipelines.

## 2. Technology Stack
The application is a Single-Page Application (SPA) built with modern frontend web technologies.
- **Framework:** React 19 + TypeScript.
- **Build Tool:** Vite.
- **3D Engine:** Three.js wrapped with `@react-three/fiber` (R3F) and `@react-three/drei` for declarative 3D scene management in React.
- **Styling:** Tailwind CSS for all UI overlays, dashboards, and modals.
- **Icons:** `lucide-react`.
- **State Management:** A custom lightweight Publisher-Subscriber (Pub-Sub) pattern is used for global configurations, avoiding the overhead of Redux. Local state and 3D scene state are managed via React Hooks (`useState`, `useRef`).

## 3. Core Architecture & Features

### A. The 3D Engine & Scene Logic
The core of the application resides in `App.tsx` and the `services/builder.ts`.
- **Raycasting & Placement:** R3F's raycaster handles pointer events on a hidden ground plane and existing blocks. It uses continuous 3D coordinates and snaps them to a discrete grid based on CORKBRICK manufacturing dimensions (e.g., 200mm base unit).
- **Collision Detection:** Before a block is added to the scene, bounding box logic checks for intersections with already placed blocks.
- **Camera Controls:** Uses `OrbitControls` from `@react-three/drei` for panning, zooming, and rotating the scene.

### B. Dynamic Material & Carbon Intelligence
The app calculates real-time physical and environmental metrics based on global configurations.
- **Material Library (`AppConfig`):** Users can swap the material of their structures (e.g., Cork, Marble, Wood, Hemp). 
- **Density & Cost:** Each material has a defined density (`kg/m³`) and price (`€/kg`). The total weight and cost are calculated dynamically: `Volume * Density * PricePerKg`.
- **Carbon Offset (`Carbon Factor`):** Materials define a carbon factor (Tons of CO₂ offset per Ton of material). Multiplying this by the total weight gives the total carbon offset.
- **Carbon Revenue:** By tracking the current `Market Price` of carbon credits, the app estimates the financial value of the structure's carbon offset.

### C. System Administration & Configuration
- **Admin Dashboard:** A hidden overlay allowing system administrators to modify global variables (tolerances, densities, prices, carbon factors, SDG impacts) on the fly without changing code.
- **Pub/Sub Services:** `AppConfigService` and `GeometryConfigService` manage these variables and notify subscribers (React components) to re-render when values change.

### D. File Interoperability
- **JSON Import/Export:** Saves the exact state of placed blocks (position, rotation, type, color) for loss-less resuming.
- **OBJ Export:** Procedurally generates `.obj` strings from the placed blocks, allowing users to import their CORKBRICK designs into professional software like SketchUp or AutoCAD.
- **External Import:** Users can import `.dae`, `.obj`, or `.gltf` files to serve as reference geometry (e.g., floor plans or existing furniture) in the scene.

## 4. Migration & Future Extensibility
- **Separation of Concerns:** The mathematical logic for snapping, volume calculation, and collision is decoupled from the rendering layer. This makes it straightforward to migrate to other 3D engines (e.g., Unity 3D or Unreal Engine) in the future.
- **Unity 3D Horizon:** The overarching vision is to migrate this logic into a Unity-powered "Paradise Island" gamified experience. The React application will remain the lightweight web B2B builder, while the Unity version will leverage the exact same grid mathematics and JSON structure for a heavier, immersive B2C experience.
