import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Phone, Calendar } from "lucide-react";
const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToBooking = () => {
    var _a;
    if (typeof document === "undefined") return;
    (_a = document.querySelector("#rezerwacja")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  if (!visible) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border px-4 py-3 safe-area-bottom", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "tel:+48722765101",
        className: "flex-1 btn-outline !py-3 !px-3 !text-xs inline-flex items-center justify-center gap-2",
        children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
          " Zadzwoń"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: scrollToBooking,
        className: "flex-1 btn-primary !py-3 !px-3 !text-xs inline-flex items-center justify-center gap-2",
        children: [
          /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
          " Rezerwuj"
        ]
      }
    )
  ] }) });
};
export {
  StickyMobileCTA as default
};
