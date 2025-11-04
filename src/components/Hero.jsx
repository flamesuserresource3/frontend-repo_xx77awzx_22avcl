import React from 'react';
import Spline from '@splinetool/react-spline';
import { Zap, Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:pt-16 lg:pt-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-3 py-1.5 text-xs font-semibold shadow">
            <Zap className="h-3.5 w-3.5" />
            <span>Next-gen expense splitting</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Split smarter. Settle faster.
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
            Create groups, scan receipts, and let our algorithm minimize who pays whom. Beautiful insights, live currency conversion, and delightful UX built for modern life.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-5 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition">
              Get started free
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition">
              <Shield className="h-4 w-4" />
              Sign in securely
            </button>
          </div>
          <div className="mt-6 text-xs text-slate-500 dark:text-slate-400">
            OAuth with Google/Apple • Supabase Auth • Deploy-ready for Vercel
          </div>
        </div>

        <div className="relative h-[360px] sm:h-[440px] md:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/10 dark:from-slate-900/70 dark:via-transparent dark:to-slate-900/20" />
        </div>
      </div>
    </section>
  );
}
