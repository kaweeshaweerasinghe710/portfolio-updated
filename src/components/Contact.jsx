import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Terminal, Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      console.error('Status:', error.status);
      console.error('Text:', error.text);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Initiate <span className="text-primary">Connection</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6 font-mono"
          >
            <div className="bg-[#0b0f15] border border-slate-800 rounded-xl p-6 space-y-8">
  <p className="text-primary text-xs tracking-widest uppercase">// reach me at</p>

  <div className="flex items-start gap-4">
    <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-primary shrink-0">
      <Mail size={18} />
    </div>
    <div>
      <p className="text-slate-500 text-xs mb-1">Email</p>
      <a href="mailto:kaweeshaweerasinghe2002@gmail.com" className="text-white text-sm hover:text-primary transition-colors break-all">
        kaweeshaweerasinghe2002@gmail.com
      </a>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-primary shrink-0">
      <Phone size={18} />
    </div>
    <div>
      <p className="text-slate-500 text-xs mb-1">Phone</p>
      <a href="tel:+94XXXXXXXXX" className="text-white text-sm hover:text-primary transition-colors">
        +94 778682365
      </a>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-primary shrink-0">
      <MapPin size={18} />
    </div>
    <div>
      <p className="text-slate-500 text-xs mb-1">Location</p>
      <p className="text-white text-sm">Moratuwa,Western Province, Sri Lanka</p>
    </div>
  </div>
</div>
          </motion.div>

          {/* Right: Terminal Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0b0f15] border border-slate-800 rounded-xl overflow-hidden shadow-2xl"
            >
              {/* Terminal Header Bar */}
              <div className="bg-slate-950 border-b border-slate-800 px-4 py-2 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-primary mb-0"></div>
                </div>
                <div className="font-mono text-slate-500 text-xs tracking-wider flex items-center gap-2">
                  <Terminal size={14} /> guest@portfolio: ~/contact
                </div>
                <div className="w-12"></div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 md:p-8 font-mono text-sm md:text-base text-slate-300 min-h-[400px] ">
                <div className="mb-6 space-y-2">
                  <p className="text-primary">Loading secure envelope protocol...</p>
                  <p className="text-slate-400">$ ./transmit_message.sh</p>
                </div>

                <AnimatePresence mode="wait">
                  {status === 'idle' || status === 'sending' || status === 'error' ? (
                    <motion.form
                      key="form"
                      ref={formRef}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                        <label className="text-blue-400 w-24 shrink-0 font-bold">Name_</label>
                        <span className="hidden sm:block text-slate-600">❯</span>
                        <input
                          required
                          type="text"
                          name="from_name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-transparent border-b border-slate-800 flex-1 outline-none text-white focus:border-primary placeholder:text-slate-700 pb-1 transition-colors"
                          placeholder="Enter your designator"
                          disabled={status === 'sending'}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                        <label className="text-blue-400 w-24 shrink-0 font-bold">Email_</label>
                        <span className="hidden sm:block text-slate-600">❯</span>
                        <input
                          required
                          type="email"
                          name="from_email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-transparent border-b border-slate-800 flex-1 outline-none text-white focus:border-primary placeholder:text-slate-700 pb-1 transition-colors"
                          placeholder="Enter routing address"
                          disabled={status === 'sending'}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4">
                        <label className="text-blue-400 w-24 shrink-0 font-bold mt-1">Payload_</label>
                        <span className="hidden sm:block text-slate-600 mt-1">❯</span>
                        <textarea
                          required
                          rows="3"
                          name="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-transparent border-l border-slate-800 flex-1 outline-none text-white focus:border-primary placeholder:text-slate-700 pl-3 py-1 transition-colors resize-none"
                          placeholder="Enter string sequence..."
                          disabled={status === 'sending'}
                        ></textarea>
                      </div>

                      {status === 'error' && (
                        <p className="text-red-400 text-xs">❌ Transmission failed. Check console and retry.</p>
                      )}

                      <div className="flex items-center gap-4 mt-8 pt-4">
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="flex items-center gap-2 px-6 py-2 bg-slate-900 border border-slate-700 text-primary font-bold hover:bg-slate-800 hover:text-white transition-colors disabled:opacity-50"
                        >
                          <span className="text-slate-500">$</span> {status === 'sending' ? 'Transmitting...' : 'Execute'}
                          {status !== 'sending' && <Send size={16} />}
                        </button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-12"
                    >
                      <p className="text-primary text-xl font-bold mb-2">&gt; TRANSMISSION SUCCESSFUL</p>
                      <p className="text-slate-400">Connection closed gracefully. I will respond to your packet shortly.</p>
                      <div className="mt-8 animate-pulse w-4 h-6 bg-slate-400"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}