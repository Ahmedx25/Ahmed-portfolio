import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import RevealWrapper from './RevealWrapper';
import { personalInfo } from '../data/portfolioData';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  Terminal,
  FileText,
  Download,
  Loader2,
  AlertCircle
} from 'lucide-react';

// ── EmailJS config ──────────────────────────────────────────────
// Sign up free at https://www.emailjs.com → Email Services → Add Gmail
// Then create an Email Template with variables: {{from_name}}, {{from_contact}}, {{message}}
const EMAILJS_SERVICE_ID  = 'service_ahmed_port';   // ← your Service ID
const EMAILJS_TEMPLATE_ID = 'template_ahmed_port';  // ← your Template ID
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';      // ← your Public Key
// ───────────────────────────────────────────────────────────────

export default function ContactSection({ onSoundTrigger }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeTab, setActiveTab] = useState('sh');

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    if (onSoundTrigger) onSoundTrigger();
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (onSoundTrigger) onSoundTrigger();
    setSending(true);
    setFormError(false);

    // If EmailJS isn't configured yet → fallback to mailto
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name / Org: ${formData.name}\nContact: ${formData.email}\n\n${formData.message}`
      );
      window.open(`mailto:ahmedabdelfattah5655@gmail.com?subject=${subject}&body=${body}`, '_blank');
      setSending(false);
      setFormSent(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormSent(false);
      }, 4500);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_contact: formData.email,
          message:      formData.message,
          to_name:      'Ahmed',
        },
        EMAILJS_PUBLIC_KEY
      );
      setSending(false);
      setFormSent(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormSent(false);
      }, 4500);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSending(false);
      setFormError(true);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20 relative">
      <RevealWrapper>
        <div className="font-mono text-xs tracking-[0.3em] uppercase mb-3 font-semibold text-[#F59E0B]">
          06 · ping me
        </div>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-2 text-slate-50"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Let's build something with data.
        </h2>
        <p className="mb-10 font-mono text-sm text-slate-400">
          response_time ≈ faster than a Power BI refresh 😉
        </p>
      </RevealWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: contact.sh Terminal Card */}
        <RevealWrapper className="lg:col-span-7 w-full">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900/90 font-mono text-xs sm:text-sm backdrop-blur-md relative">
            {/* Ambient Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-sky-400 to-amber-500"></div>

            {/* Terminal Header */}
            <div className="flex items-center justify-between px-3 py-2.5 bg-slate-800 border-b border-slate-700 select-none gap-2">
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-500 shadow-sm shadow-red-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px] min-w-0 overflow-hidden">
                <Terminal size={12} className="text-amber-400 shrink-0" />
                <span className="text-slate-200 font-semibold truncate">ahmed-contact.sh</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] text-emerald-400 hidden sm:inline">ONLINE</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6 bg-[#08101E]/95">
              {/* Location */}
              <div className="hover:bg-slate-800/30 p-2.5 rounded-xl transition-colors">
                <div className="text-slate-400 text-xs mb-1">
                  <span className="text-amber-400 font-bold">$</span> echo $LOCATION
                </div>
                <div className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
                  <MapPin size={16} className="text-red-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Role */}
              <div className="hover:bg-slate-800/30 p-2.5 rounded-xl transition-colors">
                <div className="text-slate-400 text-xs mb-1">
                  <span className="text-amber-400 font-bold">$</span> echo $ROLE
                </div>
                <div className="text-white font-semibold flex items-start gap-2 text-sm sm:text-base">
                  <Clock size={16} className="text-sky-400 shrink-0 mt-0.5" />
                  <span>{personalInfo.role} · Business Intelligence & Statistics</span>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="hover:bg-slate-800/30 p-2.5 rounded-xl transition-colors">
                <div className="text-slate-400 text-xs mb-1">
                  <span className="text-amber-400 font-bold">$</span> echo $PHONE / $WHATSAPP
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onSoundTrigger && onSoundTrigger()}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-2 text-base transition-colors group"
                  >
                    <Phone size={16} className="group-hover:rotate-12 transition-transform" />
                    <span>{personalInfo.phone}</span>
                    <span className="text-xs text-emerald-500/80 font-normal">↗ chat on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs border border-slate-700 transition-colors cursor-pointer active:scale-95"
                    title="Copy phone number"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="hover:bg-slate-800/30 p-2.5 rounded-xl transition-colors">
                <div className="text-slate-400 text-xs mb-1">
                  <span className="text-amber-400 font-bold">$</span> echo $EMAIL
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    onClick={() => onSoundTrigger && onSoundTrigger()}
                    className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-2 text-base transition-colors break-all group"
                  >
                    <Mail size={16} className="group-hover:scale-110 transition-transform" />
                    <span>{personalInfo.email}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs border border-slate-700 transition-colors cursor-pointer active:scale-95"
                    title="Copy email address"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Socials */}
              <div className="hover:bg-slate-800/30 p-2.5 rounded-xl transition-colors">
                <div className="text-slate-400 text-xs mb-1">
                  <span className="text-amber-400 font-bold">$</span> echo $SOCIALS
                </div>
                <div className="flex items-center gap-5 pt-1">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onSoundTrigger && onSoundTrigger()}
                    className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors group"
                  >
                    <Linkedin size={15} className="group-hover:scale-110 transition-transform" />
                    <span>LinkedIn ↗</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onSoundTrigger && onSoundTrigger()}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors group"
                  >
                    <Github size={15} className="group-hover:scale-110 transition-transform" />
                    <span>GitHub ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Right: Direct Interactive Dispatch Form */}
        <RevealWrapper delay={150} className="lg:col-span-5 w-full">
          <div className="p-6 md:p-8 rounded-2xl bg-[#0E1B33]/90 border border-slate-700/80 shadow-2xl backdrop-blur-md relative group">
            {/* Top Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-amber-500 rounded-t-2xl"></div>

            <h3
              className="text-xl font-bold text-white mb-2 flex items-center gap-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <MessageSquare size={18} className="text-sky-400" />
              <span>Send Direct Inquiry</span>
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-6">
              Need a Power BI dashboard, SSIS ETL pipeline, or analytical data consultation? Drop a message directly.
            </p>

            {formSent ? (
              <div className="p-8 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-center animate-in zoom-in-95 duration-300 shadow-xl">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 shadow-inner">
                  <Check size={28} />
                </div>
                <h4 className="text-white font-bold text-lg mb-1">Message Dispatched!</h4>
                <p className="text-xs font-mono text-emerald-300 leading-relaxed">
                  Thank you! Ahmed has received your inquiry and will reach out promptly.
                </p>
                <div className="mt-4 font-mono text-[11px] text-emerald-400/80">
                  ⚡ Status: Sent to ahmedabdelfattah5655@gmail.com
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
                {formError && (
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-red-950/70 border border-red-500/50 text-red-300 text-xs">
                    <AlertCircle size={14} className="shrink-0 text-red-400" />
                    <span>Failed to send. Please email directly: <a href="mailto:ahmedabdelfattah5655@gmail.com" className="underline text-red-200">ahmedabdelfattah5655@gmail.com</a></span>
                  </div>
                )}

                <div>
                  <label className="block text-slate-300 mb-1">Your Name / Organization</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Vance (Enterprise Labs)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Email or Phone</label>
                  <input
                    type="text"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@enterpriselabs.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Project Details or Requirements</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your dataset, Power BI dashboard goals, or database architecture..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 hover:shadow-blue-500/50"
                >
                  {sending ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Execute Send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
