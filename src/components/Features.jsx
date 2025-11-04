import React from 'react';
import { Users, Receipt, PieChart, Shuffle, Camera, Globe } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Smart Groups',
    desc: 'Trips, roommates, teams — organize expenses with roles and permissions.',
  },
  {
    icon: Receipt,
    title: 'Receipt OCR',
    desc: 'Scan receipts to auto-extract totals, dates, and merchants with OCR.',
  },
  {
    icon: PieChart,
    title: 'Actionable Insights',
    desc: 'Understand spending by category, person, and time with beautiful charts.',
  },
  {
    icon: Shuffle,
    title: 'Debt Simplification',
    desc: 'Minimize the number of transactions needed to settle up in a group.',
  },
  {
    icon: Camera,
    title: 'Clean UX',
    desc: 'Dark mode, smooth animations, optimistic updates, and useful toasts.',
  },
  {
    icon: Globe,
    title: 'Multi-currency',
    desc: 'Live conversion support so everyone can pay in their own currency.',
  },
];

export default function Features() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Everything you need to split perfectly</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Built with Supabase, TypeScript, and Next.js best practices — deploy straight to Vercel.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/90 to-fuchsia-600/90 text-white shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
