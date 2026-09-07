import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium text-foreground/80 transition-colors hover:text-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
}
