import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { AuthModal } from './components/AuthModal';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorkflowSection } from './components/WorkflowSection';
import { RegulatoryDashboard } from './components/RegulatoryDashboard/RegulatoryDashboard';
import { GovernanceNotice } from './components/GovernanceNotice';
import { Footer } from './components/Footer';
import './App.css';

export function App() {
  // Respect system reduced-motion preference by default, and allow manual toggle
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const [activeNavSection, setActiveNavSection] = useState('overview');
  const [dashboardActiveModule, setDashboardActiveModule] = useState('overview');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleNavigate = (sectionId, targetModule) => {
    setActiveNavSection(sectionId);
    if (targetModule) {
      setDashboardActiveModule(targetModule);
    }
  };

  const handleOpenDashboard = () => {
    handleNavigate('dashboard', 'overview');
    const el = document.getElementById('regulatory-dashboard');
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  const handleExploreWorkflow = () => {
    handleNavigate('overview', null);
    const el = document.getElementById('workflow');
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <AuthProvider>
      <div className={`app-root ${reducedMotion ? 'reduced-motion-mode' : ''}`}>
        {/* GLOBAL ROLE-BASED LOGIN & AUTHENTICATION MODAL */}
        <AuthModal />

        {/* 1. STICKY NAVIGATION BAR */}
        <Navbar
          activeSection={activeNavSection}
          onNavigate={handleNavigate}
          reducedMotion={reducedMotion}
          setReducedMotion={setReducedMotion}
        />

        {/* 2. 2D HERO SECTION WITH ANIMATED VECTOR INTELLIGENCE ILLUSTRATION */}
        <HeroSection
          onOpenDashboard={handleOpenDashboard}
          onExploreWorkflow={handleExploreWorkflow}
          reducedMotion={reducedMotion}
        />

        {/* 3. 4-STAGE PIPELINE WORKFLOW SECTION */}
        <WorkflowSection />

        {/* 4. ACTUAL REGULATORY SCRUTINY DASHBOARD */}
        <RegulatoryDashboard
          activeModule={dashboardActiveModule}
          onModuleChange={setDashboardActiveModule}
          reducedMotion={reducedMotion}
        />

        {/* 5. STATUTORY REGULATORY GOVERNANCE STATEMENT */}
        <GovernanceNotice />

        {/* 6. INSTITUTIONAL FOOTER */}
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
