import React from 'react';
import CopyButton from './CopyButton';

interface ResultCardProps {
  title?: string;
  badge?: string;
  copyText?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ResultCard({
  title,
  badge,
  copyText,
  children,
  className = '',
}: ResultCardProps) {
  return (
    <div className={`glass-card p-5 relative border border-slate-800/90 rounded-xl bg-slate-900/40 backdrop-blur-md ${className}`}>
      {(title || badge || copyText) && (
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 gap-3">
          <div className="flex items-center gap-2">
            {title && (
              <h4 className="text-sm font-semibold text-white tracking-wide">
                {title}
              </h4>
            )}
            {badge && (
              <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                {badge}
              </span>
            )}
          </div>
          {copyText && <CopyButton text={copyText} />}
        </div>
      )}
      <div className="text-sm text-slate-300">{children}</div>
    </div>
  );
}
