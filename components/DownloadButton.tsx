'use client';

import React, { useState } from 'react';

interface DownloadButtonProps {
  url: string;
  filename: string;
  label?: string;
  className?: string;
}

export default function DownloadButton({
  url,
  filename,
  label = 'Download HD Media',
  className = '',
}: DownloadButtonProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      // Fetch file blob to trigger browser direct save
      const res = await fetch(url);
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(blobUrl);
      document.body.removeChild(a);
    } catch {
      // Direct link fallback in new window
      window.open(url, '_blank');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      type="button"
      className={`btn btn-primary gap-2 ${className}`}
    >
      {downloading ? (
        <>
          <span className="spinner w-4 h-4 border-white border-t-transparent" />
          <span>Downloading...</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
