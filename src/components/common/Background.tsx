import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Background({ children }: Props) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#FFF9FC] via-[#FFEAF3] to-[#FFD8E8]">

      {/* Soft Glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/20 blur-3xl" />

      {/* Top Glow */}
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-200/30 blur-3xl" />

      {children}
    </div>
  );
}