"use client";

import { createContext, useContext } from "react";
import { Toast, ToastAction } from "@/components/ui/toast";
import { ToastProvider } from "@/components/ui/toast";
import { ToastViewport } from "@/components/ui/toast";

const ToastContext = createContext<{
  toast: (props: { title: string; description?: string; variant?: "default" | "destructive" }) => void;
} | null>(null);

export function useToast() {
  return useContext(ToastContext) || {
    toast: () => {},
  };
}

export { ToastProvider, Toast, ToastAction, ToastViewport, ToastContext };

export function toast(props: { title: string; description?: string; variant?: "default" | "destructive" }) {
  console.log("Toast:", props);
}
