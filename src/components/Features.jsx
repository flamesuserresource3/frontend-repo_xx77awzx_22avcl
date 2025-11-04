import React, { useEffect, useMemo, useState } from 'react';
import { Users, Receipt, PieChart, Shuffle, Camera, Globe, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

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

function useBackendUrl() {
  return useMemo(() => {
    const env = import.meta.env.VITE_BACKEND_URL;
    if (env) return env.replace(/\/$/, '');
    // Fallback for local preview: replace 3000 with 8000
    try {
      const url = new URL(window.location.href);
      if (url.port === '3000') {
        url.port = '8000';
        return url.origin;
      }
      return `${url.protocol}//${url.hostname}:8000`;
    } catch {
      return 'http://localhost:8000';
    }
  }, []);
}

export default function Features() {
  const backend = useBackendUrl();
  const [status, setStatus] = useState({ ok: false, message: 'Checking backend…' });
  const [groups, setGroups] = useState([]);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch(`${backend}/test`).then(r => r.json()).then((res) => {
      if (!mounted) return;
      setStatus({ ok: (res.database || '').includes('Connected'), message: res.database });
    }).catch(() => setStatus({ ok: false, message: 'Backend not reachable' }));

    fetch(`${backend}/groups`).then(r => r.json()).then((res) => {
      if (!mounted) return;
      if (Array.isArray(res)) setGroups(res);
    }).catch(() => {});

    return () => { mounted = false; };
  }, [backend]);

  const createDemoGroup = async () => {
    const email = localStorage.getItem('auth_email');
    if (!email) {
      window.dispatchEvent(new Event('open-auth'));
      return;
    }
    setBusy(true);
    try {
      const body = {
        name: 'Weekend Trip',
        created_by: email,
        members: [email],
        default_currency: 'USD',
      };
      const res = await fetch(`${backend}/groups`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const list = await fetch(`${backend}/groups`).then(r => r.json());
        if (Array.isArray(list)) setGroups(list);
      } else {
        const t = await res.text();
        alert(`Failed to create group: ${t}`);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Everything you need to split perfectly</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Beautiful UI with real backend connectivity. Sign in with your email to try a live group demo.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              key={title}
              className="group rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/90 to-fuchsia-600/90 text-white shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/90 to-cyan-600/90 text-white shadow">
              <Rocket className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">Live Backend</h3>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">
              Status: <span className={status.ok ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}>{status.message}</span>
            </p>
            <div className="mt-3 flex items-center gap-3">
              <button onClick={createDemoGroup} disabled={busy} className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition disabled:opacity-60">
                {busy ? 'Creating…' : 'Create demo group'}
              </button>
              <span className="text-xs text-slate-500 dark:text-slate-400">Groups: {groups.length}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
