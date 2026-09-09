import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({
  message = 'Analyzing Pinterest trends & generating content...',
}: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-slate-200/90 shadow-xs my-8 animate-fade-in">
      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E60023] mb-4">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
      <p className="text-sm font-semibold text-slate-900 mb-1">{message}</p>
      <p className="text-xs text-slate-500">Processing live search queries & semantic clusters</p>
    </div>
  );
}
