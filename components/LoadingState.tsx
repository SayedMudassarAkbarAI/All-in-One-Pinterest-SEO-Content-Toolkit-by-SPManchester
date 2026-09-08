import React from 'react';

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({
  message = 'Analyzing Pinterest trends & generating content...',
}: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 glass-card rounded-2xl border border-slate-800/80 my-8 animate-fade-in">
      <div className="relative w-14 h-14 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
        <div className="absolute inset-0 rounded-full border-4 border-red-500 border-t-transparent animate-spin" />
      </div>
      <p className="text-sm font-semibold text-white mb-1">{message}</p>
      <p className="text-xs text-slate-400">Processing live search queries & semantic clusters</p>
    </div>
  );
}
