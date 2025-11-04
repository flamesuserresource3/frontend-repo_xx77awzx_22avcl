import React from 'react';
import { Wallet, Users, Receipt, PieChart } from 'lucide-react';

function NavItem({ icon: Icon, label }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg">
            <Wallet className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">SplitlyX</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Modern expense splitting</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <NavItem icon={Users} label="Groups" />
          <NavItem icon={Receipt} label="Expenses" />
          <NavItem icon={PieChart} label="Insights" />
        </nav>
        <div className="flex items-center gap-2">
          <button className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition">
            Log in
          </button>
          <button className="rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
