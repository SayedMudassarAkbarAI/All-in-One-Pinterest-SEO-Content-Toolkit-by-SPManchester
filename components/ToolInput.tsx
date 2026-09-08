'use client';

import React from 'react';

interface ToolInputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  placeholder?: string;
  buttonLabel?: string;
  loading?: boolean;
  disabled?: boolean;
  helperText?: string;
  iconType?: 'search' | 'url' | 'topic';
}

export default function ToolInput({
  value,
  onChange,
  onSubmit,
  placeholder = 'Enter topic, niche, or keyword...',
  buttonLabel = 'Generate',
  loading = false,
  disabled = false,
  helperText,
  iconType = 'search',
}: ToolInputProps) {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl mx-auto space-y-2">
      <div className="relative flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl bg-[#0a1628]/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl focus-within:border-red-500/70 transition-all">
        {/* Input Field with Icon */}
        <div className="relative flex-1 w-full flex items-center">
          <div className="absolute left-3.5 text-slate-400 pointer-events-none">
            {iconType === 'url' ? (
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            )}
          </div>
          <input
            type={iconType === 'url' ? 'url' : 'text'}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled || loading}
            className="w-full bg-transparent pl-11 pr-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none"
            required
          />
          {value && (
            <button
              type="button"
              onClick={() => onChange('')}
              className="text-slate-500 hover:text-slate-300 pr-3 focus:outline-none"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Submit Action Button */}
        <button
          type="submit"
          disabled={disabled || loading || !value.trim()}
          className="btn btn-primary w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold shrink-0 shadow-lg disabled:opacity-50"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <span className="spinner w-4 h-4 border-white border-t-transparent" />
              <span>Processing...</span>
            </div>
          ) : (
            <span>{buttonLabel}</span>
          )}
        </button>
      </div>

      {helperText && (
        <p className="text-center text-xs text-slate-400 pt-1">
          {helperText}
        </p>
      )}
    </form>
  );
}
