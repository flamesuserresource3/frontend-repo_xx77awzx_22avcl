import React from 'react';
import { Github, Shield, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} SplitlyX • Built for Vercel with love
        </p>
        <div className="flex items-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            <Github className="h-4 w-4" />
            Star us
          </a>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            <Shield className="h-4 w-4" />
            Privacy
          </a>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
