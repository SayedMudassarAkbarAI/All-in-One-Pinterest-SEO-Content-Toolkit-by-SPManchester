'use client';

import React from 'react';
import { Search, Link as LinkIcon, X, Loader2 } from 'lucide-react';

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
    <form onSubmit={onSubmit} className="w-full max-w-2xl mx-auto space-y-2.5">
      <div className="relative flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm focus-within:border-[#E60023] focus-within:ring-4 focus-within:ring-red-500/10 transition-all duration-200">
        {/* Input Field with Icon */}
        <div className="relative flex-1 w-full flex items-center">
          <div className="absolute left-3.5 text-slate-400 pointer-events-none">
            {iconType === 'url' ? (
              <LinkIcon className="w-4 h-4 text-slate-400" />
            ) : (
              <Search className="w-4 h-4 text-slate-400" />
            )}
          </div>
          <input
            type={iconType === 'url' ? 'url' : 'text'}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled || loading}
            className="w-full bg-transparent pl-10 pr-8 py-3 text-slate-900 placeholder-slate-400 focus:outline-none"
            style={{
              /* 16px prevents iOS Safari auto-zoom on focus */
              fontSize: '16px',
              touchAction: 'manipulation',
              WebkitAppearance: 'none',
            }}
            required
          />
          {value && (
            <button
              type="button"
              onClick={() => onChange('')}
              className="text-slate-400 hover:text-slate-600 p-1 mr-2 focus:outline-none rounded"
              aria-label="Clear input"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Action Button */}
        <button
          type="submit"
          disabled={disabled || loading || !value.trim()}
          className="btn btn-primary w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold shrink-0 shadow-sm disabled:opacity-50"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Processing...</span>
            </div>
          ) : (
            <span>{buttonLabel}</span>
          )}
        </button>
      </div>

      {helperText && (
        <p className="text-center text-xs text-slate-500">
          {helperText}
        </p>
      )}
    </form>
  );
}
