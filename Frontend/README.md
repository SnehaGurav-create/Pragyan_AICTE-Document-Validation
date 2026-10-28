# PRAGYAN-AICTE — Smart Automation Prototype
### SIH 2026 Problem Statement ID: 26261
**Organization:** All India Council for Technical Education (AICTE)<br/>
**Department:** Regulation Bureau<br/>
**Problem Statement:** AI-Powered Application Validation, Document Authentication and Regulatory Compliance Verification<br/>
**Theme:** Smart Automation<br/>
**Branch:** `Frontend`

---

## 1. Executive Summary

**PRAGYAN-AICTE** is a decision-support platform engineered for the preliminary validation of technical institution applications, multi-document authentication, discrepancy detection, and regulatory compliance review under the statutory framework of the **AICTE Act, 1987**.

> **Statutory Notice:** Automated findings are preliminary indicators. Statutory scrutiny, required inspections, and final regulatory decisions remain exclusively with authorized AICTE officials and competent Scrutiny Committees.

---

## 2. Architecture & Page Flow

The application is engineered as a lightweight, high-performance, single-page regulatory portal:

1. **Sticky Institutional Navigation Bar**
   - Custom geometric document-check logo in pure vector SVG.
   - Institutional branding: `PRAGYAN-AICTE` · `Regulation Bureau · Smart Scrutiny`.
   - Direct section navigation: `Overview`, `Applications`, `Verification`, `Compliance`, `Dashboard`.
   - Live Role Switcher (Scrutiny Officer, Principal, Regional Director) and Notification Drawer.

2. **2D Animated Hero Section & Vector Document Intelligence**
   - **Eyebrow:** `AICTE · REGULATION BUREAU · SIH 2026`
   - **Headline:** *"Bring clarity to every application."*
   - **Supporting Lead:** *"Intelligent document validation, verification and regulatory compliance assistance for technical institution approvals."*
   - **Core Principles:** Evidence-linked findings · Traceable verification · Human-led decisions.
   - **Vector Motion Canvas:** Layered institutional documents, animated scanning laser sweep, verification node anchors, floating shield of compliance, and real-time verification telemetry panel. 100% 2D SVG & CSS, zero WebGL overhead.

3. **Four-Step Verification Workflow Stepper**
   - Title: *"From submission to evidence-led scrutiny."*
   - **01 — Application Intake:** Ingest institutional application details and supporting documents.
   - **02 — Intelligent Validation:** Extract information, check completeness, identify expired documents, and cross-compare records.
   - **03 — Source Verification:** Compare document details with authorized issuing-authority sources wherever available.
   - **04 — Regulatory Review:** Present evidence-linked discrepancies and compliance observations to authorized reviewers.

4. **The Regulatory Scrutiny Dashboard**
   A comprehensive regulatory scrutiny cockpit featuring an institutional sidebar with **8 core modules in exact required order**.

---

## 3. The 8 Dashboard Modules

| # | Module | Core Functionality | Data Source |
|---|---|---|---|
| **1** | **Overview** | Summary KPI cards (Total Applications, Verified Documents, Applications Requiring Review, Open Deficiencies) + 4 detail lists (Recent Applications, Pending Verification, Critical Discrepancies, Recent Audit Activity). | Synthetic Demo Dataset (`DEMO_APPLICATIONS`) |
| **2** | **Applications** | Application queue with ID, Institution Name, Category, Submission Date, Documents, Status, Pending Issues, and *"Open Scrutiny"* action. Full search and status filters. | Synthetic Demo Dataset |
| **3** | **Document Validation** | Extraction status, completeness checklist by category, missing fields, inconsistencies, and PDF upload entry point with simulated extraction progress. | Prototype State & Demo Records |
| **4** | **Authority Verification** | Issuing authority verification table with Reference Number, Method (API, Portal, QR, Digital Signature, Repository, Manual), Timestamp, and Status. | Labeled *"Demo Verification Source"* |
| **5** | **Compliance Review** | Structured compliance matrix (Requirement, Rule, Evidence, Observed, Expected, Result, Reviewer Action) + Infrastructure Evidence Area (photo/blueprint advisory indicators). | Codified Sample Rules (APH 2026-27) |
| **6** | **Alerts and Deficiencies** | Focused queue of unresolved issues (Missing, Expired, Inconsistent, Potential Anomaly, Verification Pending) with live reviewer actions (*"Under Review"*, *"Request Evidence"*, *"Resolve"*). | Prototype Interactive State |
| **7** | **Audit Trail** | Chronological, read-only event history (Timestamp, App ID, Event, Rule Checked, Finding, Action, Actor Role). Appends new events when reviewer takes actions. | Prototype Audit Log (Local State) |
| **8** | **Regulatory Rules** | Configurable regulatory rules matrix. Allows editing demo threshold values and toggling rule status with session persistence. | Illustrative Sample Rules |

---

## 4. Split-Screen Reviewer Scrutiny Experience

Clicking *"Open Scrutiny"* on any application (e.g. featured case **Apex Institute #AICTE-2026-NRO-8841**) opens the comprehensive reviewer interface:

- **Left Panel:**
  - Multi-page document viewer (`Page 1 to 4`) with toolbar navigation.
  - Page 4 displays an **interactive highlighted anomaly box** (`Bounding Coordinates: x:72, y:340, w:420, h:65`) citing the CSE Professor cadre shortfall against APH Table 7.1.
- **Right Panel:**
  - Findings summary and direct citation link (`"Navigate to Page 4 Citation"`).
  - Cross-document validation checklist outcomes.
  - Reviewer observation notes textarea.
  - Reviewer action buttons (*"Mark Under Review"*, *"Request Additional Evidence"*, *"Record Observation"*, *"Resolve Finding"*).
  - Reviewer actions update the prototype state and automatically append a new entry to the Prototype Audit Log.

---

## 5. Development & Running Locally

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open **http://localhost:5173/** (or active port shown in terminal) in your browser.

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```
