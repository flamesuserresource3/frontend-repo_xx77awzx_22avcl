import React from 'react';
import Spline from '@splinetool/react-spline';
import { Zap, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const openAuth = () => window.dispatchEvent(new Event('open-auth'));

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:pt-16 lg:pt-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-3 py-1.5 text-xs font-semibold shadow"
          >
            <Zap className="h-3.5 w-3.5" />
            <span>Next-gen expense splitting</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Split smarter. Settle faster.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed"
          >
            Create groups, scan receipts, and let our algorithm minimize who pays whom. Beautiful insights, live currency conversion, and delightful UX built for modern life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <button onClick={openAuth} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-5 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition">
              Get started free
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={openAuth} className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition">
              <Shield className="h-4 w-4" />
              Sign in securely
            </button>
          </motion.div>
          <div className="mt-6 text-xs text-slate-500 dark:text-slate-400">
            OAuth-ready • Email sign-in demo • Deploy to Vercel
          </div>
        </div>

        <div className="relative h[360px] sm:h-[440px] md:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl h-[360px] sm:h-[440px] md:h-[520px] lg:h-[560px]">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/10 dark:from-slate-900/70 dark:via-transparent dark:to-slate-900/20" />
        </div>
      </div>
    </section>
  );
}
