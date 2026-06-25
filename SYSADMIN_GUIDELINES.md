# CORKBRICK Play - System Administrator & Developer Guidelines

This document provides a comprehensive overview of the inner workings, architecture, and configuration logic of **CORKBRICK Play**. It is designed for system administrators, developers, and product managers who need to understand the platform's mechanics, perform fine-tuning, or onboard new team members.

---

## 1. Architecture & Tech Stack Overview

CORKBRICK Play is a fully client-side single-page application (SPA).
* **Framework:** React 19 + Vite + TypeScript.
* **3D Engine:** Three.js wrapped in `@react-three/fiber` (R3F) and `@react-three/drei`.
* **Styling:** Tailwind CSS for all UI overlays, menus, and modals.
* **State Management:** A lightweight custom Publisher-Subscriber (Pub-Sub) pattern is used for global configuration (`AppConfigService` and `GeometryConfigService`). Scene state (placed blocks) and interaction states are managed locally via React `useState` and `useRef` in `App.tsx`.

### Core Data Structures
All primary interfaces and types are located in `types.ts`.
* `BrockType`: Enum representing the 7 standard CORKBRICK components (BASE, DOUBLE, CONN_1D, etc.).
* `PlacedBrock`: Represents an instance of a block in the 3D scene (includes type, position, rotation, and color).
* `MaterialDef`: Defines a material's name, color, carbon factor (offset), carbon market price, density, and physical price per kg.
* `AppConfig`: The global configuration state containing prices, weights, SDG impact scores, and available materials.

---

## 2. Global Configuration & The Admin Dashboard

The hidden "engine" of CORKBRICK Play is the `AdminDashboard`. It allows for real-time tweaking of physical and financial properties without recompiling the app.

### A. Material & Carbon Configuration (Style/Materials Tab)
Stored within `APP_CONFIG.materials`, this governs the materials users can choose from in the sidebar.
* **Density (kg/m³):** The core physical property. The system knows the volume of a standard Corkbrick. By defining a new density (e.g., 2700 for Marble vs. 152.5 for Cork), the system automatically scales the weight of every block in the BOM.
* **Price (€/kg):** Replaces static block prices. The cost of a structure is dynamically calculated: `Volume * Density * PricePerKg`.
* **Carbon Factor:** The environmental impact. Represents tons of CO₂ offset per ton of this material used.
* **Market Price (€/ton):** The current financial value of one Carbon Credit. The system calculates: `Total Carbon Revenue = (Total Weight in Tons) * Carbon Factor * Market Price`.

*Tip: If you add a new material, ensure you provide realistic density values, as wildly incorrect densities will result in physics simulation issues or absurd BOM costs.*

### B. Geometry & Physics Tuning (Phys Tab)
Handled by `GeoConfig` (`services/geometryConfig.ts`).
* **Clearances & Tolerances:** Variables like `SNAP_TOLERANCE` define how close a block needs to be to snap to another.
* **Grid Sizing:** Defines the base unit of the CORKBRICK system (usually 0.20m or 200mm).
* *Tip: If users complain that snapping is too "sticky" or "loose", adjust the `SNAP_TOLERANCE` slightly. Never change the `BASE_GRID` size unless the physical manufacturing dimensions of CORKBRICK change.*

### C. App Settings (App Tab)
Defines the base weights, baseline prices, and SDG (Sustainable Development Goal) impact points per block type.

---

## 3. Core Functionalities & Flows

### 3D Building Engine (`App.tsx` & `services/builder.ts`)
* **Raycasting:** The app uses R3F's raycaster (`onPointerMove`, `onPointerDown`) against a hidden grid plane and existing block meshes to determine placement coordinates.
* **Snapping Logic:** When a user drags a block, `calculateSnap` rounds the continuous 3D coordinates to the nearest discrete CORKBRICK grid interval.
* **Collision Detection:** Before placing a block, the system checks for intersections with existing `PlacedBrocks`.

### Import / Export & File Handling
* **Native JSON (`.json`):** The standard save format. It stores an array of `PlacedBrock` objects. Fast, lossless, and reliable for resuming work.
* **CAD Export (`.obj`):** The system manually constructs an OBJ string by iterating through placed blocks and their dimensions. This is crucial for professional architects who want to import CORKBRICK designs into SketchUp, AutoCAD, or Blender.
* **CAD Import (`.dae`, `.obj`, `.gltf`):** Allows users to bring in external 3D models (e.g., a room's floor plan or an obstacle) into the scene to build *around* them.

### Bill of Materials (BOM) & Checkout
* The `BOMModal` iterates through the current `blocks` state.
* It calculates grouping (by type and material/color).
* It aggregates weight, cost, carbon credits, and SDG impacts using the rules defined in `AppConfig`.

### Gamification & Challenges
* Defined in `constants.ts` (e.g., `Category 1: Emergency & Relief`).
* Challenges load a pre-defined JSON array of "obstacles" (e.g., rubble, a wall) and set specific success criteria (e.g., "Must use at least 10 blocks", "Stay under 50kg").
* This acts as an onboarding mechanism and a community engagement tool.

---

## 4. Maintenance Tips & Best Practices

1. **Adding New Block Types:**
   If a new physical CORKBRICK shape is manufactured:
   * Add it to the `BrockType` enum in `types.ts`.
   * Define its physical dimensions, base cost, and base weight in `BROCK_SPECS` (`constants.ts`).
   * Add a rendering definition for it inside the 3D canvas (update the switch statement or component map that renders geometries based on `type`).

2. **Managing Carbon & SDG Rules:**
   * Environmental regulations and market prices fluctuate. The System Administrator should routinely verify the `Carbon Market Price (€/ton)` and `Carbon Factor` against current EU ETS (Emissions Trading System) or voluntary market data to ensure the BOM revenue estimates remain credible.

3. **Performance Optimization:**
   * **Draw Calls:** Currently, R3F renders each block as a separate mesh. If users start building massive structures (10,000+ blocks), the app may slow down. In the future, consider migrating to `InstancedMesh` for rendering blocks of the same type and color to reduce draw calls.
   * **Shadows:** Shadows are computationally expensive. They are enabled for realism, but if mobile performance drops, consider disabling `castShadow` and `receiveShadow` on the blocks.

4. **Updating Documentation:**
   * User-facing explanations are stored in the `HelpModal.tsx`. When adding new variables to the Admin Dashboard, ensure you also update the Help Menu so users understand the new concepts (e.g., Density, Carbon Factors).

---

## 5. Roadmap: The Jump to Unity 3D
As documented in the `SHAREHOLDER_UPDATE.md` and Press Releases, the future strategy involves migrating the core logic to Unity 3D for a gamified "Paradise Island" experience.
* **What stays:** The physics logic, grid snapping math, carbon calculations, and JSON save structure should remain exactly the same. They are the mathematical truth of the CORKBRICK system.
* **What changes:** The rendering engine (React Three Fiber) will be replaced by Unity. The UI layer will shift from HTML/Tailwind to Unity UI Toolkit. This current React application will likely remain as the lightweight, purely utilitarian "B2B web builder," while the Unity version will serve as the heavy B2C/Gamified client.

---
*Created for internal use only. Protect the modular paradigm.*
