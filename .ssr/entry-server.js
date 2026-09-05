import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderToPipeableStream } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { Link, Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server.mjs";
import * as React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import { X } from "lucide-react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
const Toaster$1 = ({ ...props }) => {
  const [mounted, setMounted] = useState(false);
  const { theme = "system" } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const COOKIE_KEY = "cookie_consent";
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = window.localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);
  const accept = () => {
    if (typeof window !== "undefined") window.localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };
  const reject = () => {
    if (typeof window !== "undefined") window.localStorage.setItem(COOKIE_KEY, "rejected");
    setVisible(false);
  };
  if (!visible) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 inset-x-0 z-50 animate-in slide-in-from-bottom-4 duration-500", children: /* @__PURE__ */ jsx("div", { className: "bg-card/95 backdrop-blur-sm border-t border-border shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground flex-1", children: [
      'Ta strona używa cookies, aby zapewnić najlepszą jakość usług. Klikając „Akceptuję\\", wyrażasz zgodę na ich użycie.',
      " ",
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/polityka-prywatnosci",
          className: "underline hover:text-foreground transition-colors",
          children: "Polityka prywatności i cookies"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: accept,
          className: "bg-forest text-primary-foreground text-sm px-5 py-2 hover:opacity-90 transition-opacity",
          children: "Akceptuję"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: reject,
          className: "border border-border text-sm px-4 py-2 hover:bg-secondary transition-colors text-muted-foreground",
          children: "Odrzuć"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: reject,
          className: "p-1.5 text-muted-foreground hover:text-foreground transition-colors",
          "aria-label": "Zamknij",
          children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
        }
      )
    ] })
  ] }) }) });
};
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const routeDefinitions = [
  { path: "/", load: () => import("./assets/Index-P5RrnN8F.js").then((n) => n.I) },
  { path: "/noclegi-suprasl", load: () => import("./assets/NoclegiSuprasl-DDNvWP5k.js") },
  { path: "/dom-w-lesie-suprasl", load: () => import("./assets/DomWLesieSuprasl-DU7phpBn.js") },
  { path: "/weekend-suprasl", load: () => import("./assets/WeekendSuprasl-SY17CvoN.js") },
  { path: "/atrakcje-suprasl", load: () => import("./assets/AtrakcjeSuprasl-DfkCz0qv.js") },
  { path: "/puszcza-knyszynska-nocleg", load: () => import("./assets/PuszczaKnyszynskaNocleg-DWwxvZYp.js") },
  { path: "/informator", load: () => import("./assets/Informator-DvnDJ68H.js") },
  { path: "/domek-suprasl", load: () => import("./assets/DomekSuprasl-CSVcbsot.js") },
  { path: "/domek-z-jacuzzi-podlasie", load: () => import("./assets/DomekZJacuzziPodlasie-v51CN1fQ.js") },
  { path: "/wieczor-panienski-suprasl", load: () => import("./assets/WieczorPanienskiSuprasl-pwv316yh.js") },
  { path: "/blog", load: () => import("./assets/Blog-DBa2cImx.js") },
  { path: "/blog/supraski-system-wodny", load: () => import("./assets/SupraskiSystemWodny-BDBGBymv.js") },
  {
    path: "/blog/szlak-powstania-styczniowego-suprasl",
    load: () => import("./assets/SzlakPowstaniaStyczniowego-D2wv6-tQ.js")
  },
  {
    path: "/blog/suprasl-atrakcje-national-geographic",
    load: () => import("./assets/SupraslAtrakcje-aEfSEGUg.js")
  },
  {
    path: "/blog/szlaki-piesze-rowerowe-suprasl",
    load: () => import("./assets/SzlakiPieszeRowerowe-BuhnADjt.js")
  },
  {
    path: "/blog/szlak-bioroznorodnosci-suprasl",
    load: () => import("./assets/SzlakBioroznorodnosci-C4P0wPHe.js")
  },
  {
    path: "/blog/kruszyniany-tatarska-wies",
    load: () => import("./assets/KruszynianyTatarskaWies-C9VGttXT.js")
  },
  {
    path: "/blog/suprasl-atrakcje-uzdrowisko",
    load: () => import("./assets/SupraslAtrakcjeUzdrowisko-BHpKaXwT.js")
  },
  { path: "/blog/kajaki-suprasl", load: () => import("./assets/KajakiSuprasl-BbRLeai1.js") },
  { path: "/blog/rykowisko-jeleni-puszcza-knyszynska", load: () => import("./assets/RykowiskoJeleni-fyP_7XRN.js") },
  { path: "/blog/restauracje-suprasl", load: () => import("./assets/RestauracjeSuprasl-DUVQWqjk.js") },
  { path: "/blog/co-robic-suprasl", load: () => import("./assets/CoRobicSuprasl-D_nuTbBm.js") },
  { path: "/blog/weekend-suprasl-plan", load: () => import("./assets/WeekendSupraslPlan-CKOeavUy.js") },
  {
    path: "/blog/najlepsze-miejsca-puszcza-knyszynska",
    load: () => import("./assets/NajlepszeMiejscaPuszcza-BQhLkO9S.js")
  },
  {
    path: "/blog/puszcza-knyszynska-historie",
    load: () => import("./assets/PuszczaKnyszynskaHistorie-CGSxZupC.js")
  },
  { path: "/blog/wydarzenia-suprasl-2026", load: () => import("./assets/WydarzeniaSupra2026-DjawvbEX.js") },
  { path: "/blog/aktywny-wypoczynek-suprasl", load: () => import("./assets/AktywnyWypoczynek-DrhEtu2E.js") },
  { path: "/blog/uzdrowisko-spa-suprasl", load: () => import("./assets/UzdrowiSkoSPA-Dsn7cChO.js") },
  {
    path: "/blog/przewodnik-kulinarny-suprasl",
    load: () => import("./assets/PrzewodnikKulinarny-BzoHNgd5.js")
  },
  { path: "/blog/szlaki-puszcza-knyszynska", load: () => import("./assets/SzlakiPuszczaKnyszynska-Brx8VVKW.js") },
  { path: "/blog/suprasl-na-weekend", load: () => import("./assets/SupraslNaWeekend-DVqxuMzm.js") },
  { path: "/blog/suprasl-z-dziecmi", load: () => import("./assets/SupraslZDziecmi-kPx_mh3T.js") },
  {
    path: "/blog/romantyczny-weekend-podlasie",
    load: () => import("./assets/RomantycznyWeekendPodlasie-BmwumH1l.js")
  },
  { path: "/blog/cyfrowy-detoks-las", load: () => import("./assets/CyfrowyDetoksLas-BCi6u_XU.js") },
  {
    path: "/blog/grzybobranie-puszcza-knyszynska",
    load: () => import("./assets/GrzybobraniePuszczaKnyszynska-RXlqOLPT.js")
  },
  { path: "/blog/workation-podlasie", load: () => import("./assets/WorkationPodlasie-dJ_3uRD-.js") },
  { path: "/blog/podlasie-z-psem", load: () => import("./assets/PodlasieZPsem-ChRIxi85.js") },
  {
    path: "/blog/kraina-otwartych-okiennic",
    load: () => import("./assets/KrainaOtwartychOkiennic-Bwo7Ea4x.js")
  },
  {
    path: "/blog/puszcza-knyszynska-przewodnik",
    load: () => import("./assets/PuszczaKnyszynskaPrzewodnik-DevBa7CM.js")
  },
  { path: "/dom", load: () => import("./assets/Dom-BDi6aeXv.js") },
  { path: "/galeria", load: () => import("./assets/Galeria-z0Si9IUL.js") },
  { path: "/dokumenty", load: () => import("./assets/Dokumenty-CD-lGmMq.js") },
  { path: "/platnosc-sukces", load: () => import("./assets/PlatnoscSukces-BeF9whOB.js") },
  { path: "/polityka-prywatnosci", load: () => import("./assets/PolitykaPrywatnosci-CsnyCF9W.js") },
  { path: "/admin/login", load: () => import("./assets/AdminLogin-BYaNeJAY.js"), prerender: false },
  { path: "/admin", load: () => import("./assets/AdminDashboard-CmfNQU73.js"), prerender: false },
  { path: "*", load: () => import("./assets/NotFound-DAMKqDh1.js"), prerender: false }
];
const prerenderRoutes = routeDefinitions.filter((route) => route.prerender !== false && route.path !== "*").map((route) => route.path);
function renderApp(app) {
  return new Promise((resolve, reject) => {
    let html = "";
    let settled = false;
    let firstError;
    const stream = new PassThrough();
    stream.setEncoding("utf8");
    stream.on("data", (chunk) => {
      html += chunk;
    });
    stream.on("end", () => {
      if (settled) return;
      settled = true;
      if (firstError) {
        reject(firstError);
        return;
      }
      resolve(html);
    });
    stream.on("error", (error) => {
      if (settled) return;
      settled = true;
      reject(error);
    });
    const { pipe, abort } = renderToPipeableStream(app, {
      onAllReady() {
        pipe(stream);
      },
      onShellError(error) {
        if (settled) return;
        settled = true;
        reject(error);
      },
      onError(error) {
        firstError ?? (firstError = error);
      }
    });
    setTimeout(() => {
      abort();
    }, 1e4);
  });
}
async function render(url) {
  var _a;
  const queryClient = new QueryClient();
  const helmetContext = {};
  const loadedRoutes = await Promise.all(
    routeDefinitions.map(async (route) => ({
      path: route.path,
      Component: (await route.load()).default
    }))
  );
  const appHtml = await renderApp(
    /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
      /* @__PURE__ */ jsx(Toaster, {}),
      /* @__PURE__ */ jsx(Toaster$1, {}),
      /* @__PURE__ */ jsxs(StaticRouter, { location: url, children: [
        /* @__PURE__ */ jsx(Routes, { children: loadedRoutes.map(({ path, Component }) => /* @__PURE__ */ jsx(Route, { path, element: /* @__PURE__ */ jsx(Component, {}) }, path)) }),
        /* @__PURE__ */ jsx(CookieConsent, {})
      ] })
    ] }) }) })
  );
  const helmet = helmetContext.helmet;
  return {
    appHtml,
    headTags: [
      (helmet == null ? void 0 : helmet.title.toString()) ?? "",
      ((_a = helmet == null ? void 0 : helmet.priority) == null ? void 0 : _a.toString()) ?? "",
      (helmet == null ? void 0 : helmet.meta.toString()) ?? "",
      (helmet == null ? void 0 : helmet.link.toString()) ?? "",
      (helmet == null ? void 0 : helmet.script.toString()) ?? ""
    ].filter(Boolean).join("\n"),
    htmlAttributes: (helmet == null ? void 0 : helmet.htmlAttributes.toString()) ?? "",
    bodyAttributes: (helmet == null ? void 0 : helmet.bodyAttributes.toString()) ?? ""
  };
}
export {
  Tooltip as T,
  TooltipTrigger as a,
  TooltipContent as b,
  cn as c,
  prerenderRoutes,
  render,
  useToast as u
};
