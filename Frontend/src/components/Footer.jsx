import React from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-regulatory-2d" aria-label="Portal Footer">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-columns-grid">
          {/* Col 1: Identity & SIH Project Summary */}
          <div className="footer-col-brand">
            <div className="footer-brand-header">
              <div className="footer-brand-emblem">
                <svg viewBox="0 0 28 28" width="24" height="24" fill="none">
                  <rect x="2" y="2" width="24" height="24" rx="5" fill="#142B4A" />
                  <path d="M7 8H17M7 13H21M7 18H14" stroke="#8BDCF0" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="6" fill="#356AE6" />
                  <path d="M15.5 18L17.5 20L20.5 16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="footer-brand-name">PRAGYAN-AICTE</span>
            </div>
            <p className="footer-brand-mission">
              AI-Powered Application Validation, Document Authentication and Regulatory Compliance Verification for Technical Education Scrutiny.
            </p>
            <div className="footer-sih-badges">
              <span className="footer-pill">SIH 2026 · Problem Statement 26261</span>
              <span className="footer-pill">Theme: Smart Automation</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col-nav">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-list">
              <li>
                <button type="button" onClick={() => handleNavClick('#hero-section')} className="footer-link-btn">
                  Overview
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick('#workflow')} className="footer-link-btn">
                  Workflow
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick('#regulatory-dashboard')} className="footer-link-btn">
                  Applications Queue
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick('#regulatory-dashboard')} className="footer-link-btn">
                  Document Verification
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick('#regulatory-dashboard')} className="footer-link-btn">
                  Compliance Review
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick('#regulatory-dashboard')} className="footer-link-btn">
                  Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory References */}
          <div className="footer-col-nav">
            <h4 className="footer-heading">Statutory References</h4>
            <ul className="footer-list">
              <li><span className="footer-text-item">AICTE Act (Act No. 52 of 1987)</span></li>
              <li><span className="footer-text-item">Approval Process Handbook (APH 2026-27)</span></li>
              <li><span className="footer-text-item">National Building Code (NBC 2016 Part 4)</span></li>
              <li><span className="footer-text-item">7th CPC Faculty Cadre Norms</span></li>
            </ul>
          </div>

          {/* Col 4: Back to top action */}
          <div className="footer-col-action">
            <button
              type="button"
              className="btn-secondary footer-back-btn"
              onClick={scrollToTop}
              aria-label="Back to top of page"
            >
              <ArrowUp size={15} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Disclaimer & Copyright */}
        <div className="footer-bottom-divider" />
        <div className="footer-disclaimer-row">
          <p className="footer-disclaimer-text">
            <strong>STATUTORY DISCLAIMER:</strong> This platform is an academic research prototype engineered for Smart India Hackathon 2026 (Problem Statement ID: 26261). It does not represent the official Government of India or live AICTE public portal. All application identifiers, institutions, and document records displayed are synthetic demo data. In accordance with the AICTE Act 1987, all regulatory decisions remain exclusively with competent AICTE authorities.
          </p>
          <div className="footer-copyright-text">
            <span>© 2026 PRAGYAN-AICTE · Regulation Bureau Prototype</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
