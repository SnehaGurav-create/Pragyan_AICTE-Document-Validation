import React from 'react';
import { ShieldCheck, Eye, Lock, Scale } from 'lucide-react';

export function GovernanceNotice() {
  return (
    <section id="governance" className="governance-section-2d" aria-labelledby="governance-heading">
      <div className="container">
        <div className="governance-card-container">
          {/* Header */}
          <div className="governance-header-group">
            <div className="governance-badge">
              <Scale size={16} className="text-primary-blue" />
              <span>REGULATORY FRAMEWORK & GOVERNANCE</span>
            </div>
            <h2 id="governance-heading" className="governance-title">
              Human-in-the-Loop Regulatory Mandate
            </h2>
          </div>

          {/* Mandatory Governance Statement */}
          <div className="governance-highlight-card">
            <div className="quote-accent-bar" />
            <div className="governance-statement-content">
              <p className="governance-primary-statement">
                <strong>"PRAGYAN-AICTE provides AI-assisted decision support. Statutory scrutiny, inspections where required and final regulatory decisions remain with competent AICTE authorities."</strong>
              </p>
              <p className="governance-secondary-statement">
                The platform does not automatically approve or reject any technical institution application. All findings, discrepancy alerts, and ratio evaluations are evidentiary recommendations prepared for the consideration of authorized Scrutiny and Hearing Committees under the All India Council for Technical Education Act, 1987.
              </p>
            </div>
          </div>

          {/* Three Core Governance Pillars */}
          <div className="governance-pillars-row">
            <div className="gov-pillar-card">
              <div className="gov-pillar-icon-box">
                <ShieldCheck size={20} className="pillar-icon-green" />
              </div>
              <h3 className="gov-pillar-title">Evidence-Anchored Findings</h3>
              <p className="gov-pillar-desc">
                Every observation is referenced directly to document page coordinates, cadastral records, and cryptographic hashes without heuristic speculation.
              </p>
            </div>

            <div className="gov-pillar-card">
              <div className="gov-pillar-icon-box">
                <Eye size={20} className="pillar-icon-blue" />
              </div>
              <h3 className="gov-pillar-title">Explainable Scrutiny (XAI)</h3>
              <p className="gov-pillar-desc">
                Transparent side-by-side citations present submitted claims directly against codified clauses from the Approval Process Handbook (APH 2026-27).
              </p>
            </div>

            <div className="gov-pillar-card">
              <div className="gov-pillar-icon-box">
                <Lock size={20} className="pillar-icon-navy" />
              </div>
              <h3 className="gov-pillar-title">Sovereign Data Protection</h3>
              <p className="gov-pillar-desc">
                All institutional applications, municipal NOCs, and faculty records are processed within sandboxed environments adhering to Government of India data localization principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
