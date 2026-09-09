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
    <div className={`saas-card-static p-5 sm:p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs ${className}`}>
      {(title || badge || copyText) && (
        <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100 gap-3">
          <div className="flex items-center gap-2">
            {title && (
              <h4 className="text-sm font-semibold text-slate-900 tracking-tight">
                {title}
              </h4>
            )}
            {badge && (
              <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-red-50 text-[#E60023] border border-red-100">
                {badge}
              </span>
            )}
          </div>
          {copyText && <CopyButton text={copyText} />}
        </div>
      )}
      <div className="text-sm text-slate-700">{children}</div>
    </div>
  );
}
