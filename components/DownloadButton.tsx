'use client';

import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

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
      className={`btn btn-primary gap-1.5 text-xs py-2 px-3.5 rounded-lg shadow-sm ${className}`}
    >
      {downloading ? (
        <>
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
          <span>Downloading...</span>
        </>
      ) : (
        <>
          <Download className="w-3.5 h-3.5" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
