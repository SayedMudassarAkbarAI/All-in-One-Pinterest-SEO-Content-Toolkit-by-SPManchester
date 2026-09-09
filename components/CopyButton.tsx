'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export default function CopyButton({
  text,
  label = 'Copy',
  copiedLabel = 'Copied!',
  className = '',
  variant = 'secondary',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const variantClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'ghost'
      ? 'btn-ghost'
      : 'btn-secondary';

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`btn ${variantClass} text-xs py-1.5 px-2.5 rounded-md transition-all ${className}`}
      aria-label={copied ? copiedLabel : label}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-emerald-700 font-semibold">{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-slate-500" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
