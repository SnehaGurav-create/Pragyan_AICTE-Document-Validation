import React from 'react';

export function WorkflowSection() {
  const steps = [
    {
      stepNumber: '01',
      title: 'Application Intake',
      description: 'Receive institutional application details and supporting documents.',
      details: 'Ingests land deeds, municipal approvals, faculty rolls, and financial deposits submitted by applicant institutions.',
      icon: (
        <svg viewBox="0 0 32 32" width="24" height="24" fill="none" className="step-svg-icon">
          <rect x="5" y="4" width="22" height="24" rx="4" stroke="#356AE6" strokeWidth="2" fill="#EAF1FF" />
          <path d="M10 10H22M10 15H18M10 20H22" stroke="#142B4A" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="21" cy="21" r="5" fill="#356AE6" />
          <path d="M19.5 21L21 22.5L23.5 19.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      stepNumber: '02',
      title: 'Intelligent Validation',
      description: 'Extract information, check completeness, identify expired documents and compare relevant records.',
      details: 'Performs layout-aware extraction, detects missing mandatory declarations, verifies validity periods and flags anomalies.',
      icon: (
        <svg viewBox="0 0 32 32" width="24" height="24" fill="none" className="step-svg-icon">
          <circle cx="15" cy="15" r="9" stroke="#356AE6" strokeWidth="2" fill="#EAF1FF" />
          <path d="M22 22L28 28" stroke="#142B4A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 15L14.5 17.5L18.5 12.5" stroke="#17835D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="8" y1="8" x2="22" y2="8" stroke="#8BDCF0" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      ),
    },
    {
      stepNumber: '03',
      title: 'Source Verification',
      description: 'Compare document details with authorized issuing-authority sources wherever supported and available.',
      details: 'Cross-verifies registration numbers, revenue records, and safety clearances against authorized digital sources.',
      icon: (
        <svg viewBox="0 0 32 32" width="24" height="24" fill="none" className="step-svg-icon">
          <rect x="4" y="8" width="24" height="18" rx="3" stroke="#356AE6" strokeWidth="2" fill="#EAF1FF" />
          <path d="M4 14H28" stroke="#356AE6" strokeWidth="1.5" />
          <circle cx="9" cy="11" r="1.5" fill="#142B4A" />
          <path d="M16 18L18.5 20.5L23 16" stroke="#17835D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 20H12" stroke="#142B4A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      stepNumber: '04',
      title: 'Regulatory Review',
      description: 'Present evidence-linked discrepancies and compliance observations to authorized reviewers.',
      details: 'Generates structured compliance findings with page-level citations to empower authorized scrutiny committees in formal decision-making.',
      icon: (
        <svg viewBox="0 0 32 32" width="24" height="24" fill="none" className="step-svg-icon">
          <path d="M16 4L27 8V16C27 22 22 27 16 28C10 27 5 22 5 16V8L16 4Z" stroke="#356AE6" strokeWidth="2" fill="#EAF1FF" />
          <path d="M12 16L15 19L21 13" stroke="#142B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="workflow" className="workflow-section-2d" aria-labelledby="workflow-section-heading">
      <div className="container">
        {/* Section Header */}
        <div className="workflow-header-block">
          <div className="workflow-eyebrow">
            <span className="eyebrow-pill">DECISION-SUPPORT PROTOCOL</span>
          </div>
          <h2 id="workflow-section-heading" className="workflow-main-title">
            From submission to evidence-led scrutiny.
          </h2>
          <p className="workflow-lead-paragraph">
            A structured, repeatable pre-scrutiny workflow designed to surface verified facts, eliminate manual oversights, and maintain auditability.
          </p>
        </div>

        {/* Stepper Grid (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="workflow-stepper-container">
          {/* Animated Connecting Vector Track (Desktop) */}
          <div className="stepper-horizontal-track" aria-hidden="true">
            <div className="stepper-track-line" />
          </div>

          <div className="workflow-steps-grid">
            {steps.map((step) => (
              <div key={step.stepNumber} className="workflow-step-card">
                <div className="step-badge-row">
                  <div className="step-number-bubble">
                    <span className="step-num-text">{step.stepNumber}</span>
                  </div>
                  <div className="step-icon-box">
                    {step.icon}
                  </div>
                </div>

                <div className="step-content-box">
                  <h3 className="step-card-title">{step.title}</h3>
                  <p className="step-card-summary">{step.description}</p>
                  <div className="step-divider" />
                  <p className="step-card-details">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Governance Note */}
        <div className="workflow-regulatory-strip">
          <div className="strip-icon-circle">
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
              <circle cx="10" cy="10" r="9" stroke="#356AE6" strokeWidth="1.8" fill="#EAF1FF" />
              <path d="M10 6V10M10 14H10.01" stroke="#356AE6" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="strip-text">
            <strong>STATUTORY PROTOCOL NOTICE:</strong> Automated findings are preliminary indicators. Statutory scrutiny, inspections where required and final regulatory decisions remain with competent AICTE authorities.
          </p>
        </div>
      </div>
    </section>
  );
}
