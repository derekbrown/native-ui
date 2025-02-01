// src/components/buttons/Button.tsx
import { motion } from "framer-motion";
function Button({ caption, isSelected, onClick }) {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: `relative flex bg-stone-50 text-stone-600 font-mono uppercase text-xs shadow-md rounded-lg items-center justify-center overflow-hidden gap-4 group h-8 px-6 my-2 duration-200 hover:scale-90 active:scale-90 active:shadow-inner ${isSelected ? "scale-90 shadow-inner" : "hover:scale-90 active:scale-90"}`,
      onClick
    },
    /* @__PURE__ */ React.createElement(
      motion.div,
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
export {
  Button
};
