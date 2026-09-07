"use client";
import { useState, createContext, useContext, useCallback } from "react";

type Toast = { id: string; title?: React.ReactNode; description?: React.ReactNode };

interface ToastContextType {
  toasts: Toast[];
  toast: (props: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);
let count = 0;
function genId() { return (++count % Number.MAX_SAFE_INTEGER).toString(); }

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  const toast = useCallback(({ title, description }: Omit<Toast, "id">) => {
    const id = genId();
    setToasts((prev) => [{ id, title, description }, ...prev].slice(0, 1));
    setTimeout(() => removeToast(id), 3000);
  }, [removeToast]);
  return (
    <ToastContext.Provider value={{ toasts, toast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext) || { toasts: [], toast: () => {}, removeToast: () => {} };
}
export { ToastContext };
