/**
 * @class       : index
 * @author      : DevEkla (ekla@ArchLinuxEkla)
 * @created     : jeudi janv. 19, 2023 17:49:14 CET
 * @description : index
 */

import React from "react";
import App from "./App.js";
import { createRoot } from "react-dom/client"

const container = document.getElementById("root"); 
const root = createRoot(container);
root.render(<App />);

