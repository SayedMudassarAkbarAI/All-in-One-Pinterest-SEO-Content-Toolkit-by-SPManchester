'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} />

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="badge">Get in Touch</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Contact <span className="text-red-500">SPManchester</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Have feedback on our Pinterest tools, need technical support, or want to discuss enterprise IT consulting and web development services? We are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Company Details</h3>
            <p className="text-xs text-slate-400">
              SPManchester Private Limited Company
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-red-400 font-bold uppercase block mb-1">Customer & Client Helpline</span>
              <p className="text-sm font-semibold text-white">+92 306 4350580</p>
              <p className="text-[11px] text-slate-400 mt-1">Direct Call & WhatsApp Support</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-blue-400 font-bold uppercase block mb-1">Official Inquiries</span>
              <p className="text-sm font-semibold text-white">info@spmanchester.com</p>
              <p className="text-[11px] text-slate-400 mt-1">Typically answered within 24 business hours</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-emerald-400 font-bold uppercase block mb-1">Global Website</span>
              <p className="text-sm font-semibold text-white">https://spmanchester.com/</p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-slate-800">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Message Dispatched</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Thank you for contacting SPManchester Private Limited Company. Our team has received your communication.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">Send an Inquiry</h3>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full bg-[#0a1628]/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full bg-[#0a1628]/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Feedback on Pinterest Tool / Partnership Inquiry"
                  className="w-full bg-[#0a1628]/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can SPManchester help you?"
                  className="w-full bg-[#0a1628]/90 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full py-3.5 rounded-xl font-semibold text-sm shadow-xl"
              >
                Send Message to SPManchester
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
