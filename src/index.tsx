import React from "react";
import ReactDOM, { unstable_createRoot } from "react-dom";
import { App } from "./App";

const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

if (root) {
  unstable_createRoot(root).render(<App />);
}
