"use client";

import { toast as toastManager, Toaster } from "@/components/ui/toast";

export interface ToastProps {
  title: string;
  description?: string;
}

export function toast({ title, description }: ToastProps) {
  toastManager.add({ title, description });
}

export function useToast() {
  return { toast };
}

export { Toaster };
