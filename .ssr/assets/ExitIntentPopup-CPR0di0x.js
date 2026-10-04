import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { X, Phone, ArrowRight } from "lucide-react";
import { s as supabase } from "./client-BI8YE9oH.js";
import "@supabase/supabase-js";
const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleMouseLeave = useCallback(
    (e) => {
      if (e.clientY <= 5 && !dismissed && !sessionStorage.getItem("exit_popup_shown")) {
        setShow(true);
        sessionStorage.setItem("exit_popup_shown", "true");
      }
    },
    [dismissed]
  );
  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);
  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };
  const handleSubmit = async (e) => {
    var _a, _b, _c, _d;
    e.preventDefault();
    const phoneRegex = /^\+?[0-9\s\-]{7,20}$/;
    if (!phone || !phoneRegex.test(phone)) return;
    try {
      const { data: result, error } = await supabase.functions.invoke("rate-limit-submit", {
        body: { type: "callback", phone, source: "exit_intent" }
      });
      const body = result ?? (error == null ? void 0 : error.context) ? await ((_b = (_a = error == null ? void 0 : error.context) == null ? void 0 : _a.json) == null ? void 0 : _b.call(_a).catch(() => null)) : null;
      if ((_d = (_c = body == null ? void 0 : body.error) == null ? void 0 : _c.includes) == null ? void 0 : _d.call(_c, "Too many")) {
        return;
      }
      if (error) throw error;
    } catch (err) {
      console.error("Callback save error:", err);
    }
    setSubmitted(true);
    setTimeout(() => {
      setShow(false);
      setDismissed(true);
    }, 3e3);
  };
  if (!show) return null;
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-foreground/60 backdrop-blur-sm",
        onClick: handleClose,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative bg-background rounded-xl shadow-2xl max-w-md w-full p-8 animate-fade-up",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Zostaw numer telefonu",
        style: { animationDelay: "0s" },
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleClose,
              className: "absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors",
              "aria-label": "Zamknij okno",
              children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
            }
          ),
          submitted ? /* @__PURE__ */ jsxs("div", { className: "text-center py-4 space-y-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Phone, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-semibold", children: "Dziękujemy!" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Oddzwonimy w ciągu 15 minut w godzinach pracy." })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3 mb-6", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.2em] uppercase text-primary font-medium", children: "Zanim wyjdziesz" }),
              /* @__PURE__ */ jsxs("h3", { className: "font-heading text-2xl font-semibold leading-tight", children: [
                "Zostaw numer —",
                /* @__PURE__ */ jsx("br", {}),
                "oddzwonimy w 15 minut"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Chętnie odpowiemy na pytania o dostępność, cenę i pobyt w In The Woods." })
            ] }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
                  /* @__PURE__ */ jsx(
                    Phone,
                    {
                      className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "tel",
                      value: phone,
                      onChange: (e) => setPhone(e.target.value),
                      placeholder: "Twój numer telefonu",
                      "aria-label": "Numer telefonu",
                      className: "w-full pl-10 pr-4 py-3 bg-secondary border border-border text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/30",
                      required: true,
                      maxLength: 15
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    className: "btn-primary py-3 px-5 !text-xs",
                    "aria-label": "Wyślij numer telefonu",
                    children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-muted-foreground", children: "Bez zobowiązań. Dzwonimy raz, nie spamujemy." })
            ] })
          ] })
        ]
      }
    )
  ] });
};
export {
  ExitIntentPopup as default
};
