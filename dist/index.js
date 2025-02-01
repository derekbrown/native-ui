"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(index_exports);

// src/components/buttons/Button.tsx
var import_framer_motion = require("framer-motion");
function Button({ caption, isSelected, onClick }) {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: `relative flex bg-stone-50 text-stone-600 font-mono uppercase text-xs shadow-md rounded-lg items-center justify-center overflow-hidden gap-4 group h-8 px-6 my-2 duration-200 hover:scale-90 active:scale-90 active:shadow-inner ${isSelected ? "scale-90 shadow-inner" : "hover:scale-90 active:scale-90"}`,
      onClick
    },
    /* @__PURE__ */ React.createElement(
      import_framer_motion.motion.div,
      {
        className: "absolute left-0 flex h-8 rounded-l-lg",
        style: {
          width: `10%`,
          backgroundImage: `radial-gradient(circle, #239821 1px, transparent 1px)`,
          backgroundSize: "4px 4px"
        },
        initial: { width: 0 },
        animate: { width: `10%` },
        transition: { duration: 0.3, ease: "easeOut" }
      }
    ),
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, caption)
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
