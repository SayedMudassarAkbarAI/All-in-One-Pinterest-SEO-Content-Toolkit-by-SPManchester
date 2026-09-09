import React from 'react';
import { Loader2, CircleDot } from 'lucide-react';

/**
 * LoadingState component – premium, configurable loading indicator.
 *
 * Props:
 * - `message` – optional descriptive text (default provided).
 * - `size` – visual size: 'sm' | 'md' | 'lg' (default: 'md').
 * - `variant` – animation style: 'spinner' (default) | 'dots'.
 *
 * The component uses glass‑morphism background, subtle shadows and
 * adheres to the project's design tokens (red accent #E60023).
 * It is fully accessible with `role="status"` and `aria-live="polite"`.
 */
interface LoadingStateProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots';
}

export default function LoadingState({
  message = 'Analyzing Pinterest trends & generating content...',
  size = 'md',
  variant = 'spinner',
}: LoadingStateProps) {
  // Size‑based utility classes
  const sizeMap = {
    sm: {
      container: 'p-6 text-sm',
      icon: 'w-5 h-5',
      text: 'text-sm',
    },
    md: {
      container: 'p-12 text-base',
      icon: 'w-6 h-6',
      text: 'text-base',
    },
    lg: {
      container: 'p-16 text-lg',
      icon: 'w-8 h-8',
      text: 'text-lg',
    },
  }[size];

  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center ${sizeMap.container} bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-lg my-8 animate-fade-in`}
    >
      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4 text-[#E60023]">
        {variant === 'spinner' ? (
          <Loader2 className={`${sizeMap.icon} animate-spin`} />
        ) : (
          <CircleDot className={`${sizeMap.icon} animate-pulse`} />
        )}
      </div>
      <p className={`font-semibold text-slate-900 mb-1 ${sizeMap.text}`}>{message}</p>
      <p className="text-xs text-slate-500">Processing live search queries & semantic clusters</p>
    </div>
  );
}
