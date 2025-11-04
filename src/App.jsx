import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.10),transparent_60%),linear-gradient(to_bottom,rgba(236,253,245,0.6),rgba(255,255,255,0.6))] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent_60%),linear-gradient(to_bottom,rgba(2,6,23,0.6),rgba(2,6,23,0.6))]">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
