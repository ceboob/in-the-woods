import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { s as supabase } from "./client-BI8YE9oH.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, I as Input, B as Button } from "./card-Bv7qocd1.js";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { c as cn, u as useToast } from "../entry-server.js";
import { Lock } from "lucide-react";
import { S as SEOHead } from "./SEOHead-CuqvaMLz.js";
import "@supabase/supabase-js";
import "@radix-ui/react-slot";
import "node:stream";
import "@tanstack/react-query";
import "react-dom/server";
import "react-helmet-async";
import "react-router-dom/server.mjs";
import "next-themes";
import "sonner";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      const { data: roles, error: roleError } = await supabase.from("user_roles").select("role").eq("user_id", data.user.id).eq("role", "admin");
      if (roleError || !roles || roles.length === 0) {
        await supabase.auth.signOut();
        throw new Error("Brak uprawnień administratora");
      }
      navigate("/admin");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Nieprawidłowe dane logowania";
      toast({
        title: "Błąd logowania",
        description: message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Admin Login | In The Woods",
        description: "Panel administracyjny In The Woods",
        noindex: true,
        canonical: "https://www.suprasl.online/admin/login"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs(Card, { className: "w-full max-w-sm", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2", children: /* @__PURE__ */ jsx(Lock, { className: "w-6 h-6 text-primary" }) }),
        /* @__PURE__ */ jsx(CardTitle, { className: "font-heading text-xl", children: "Panel administracyjny" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "E-mail" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "email",
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Hasło" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "password",
              type: "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: loading, children: loading ? "Logowanie…" : "Zaloguj się" })
      ] }) })
    ] }) })
  ] });
};
export {
  AdminLogin as default
};
