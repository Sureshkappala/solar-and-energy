# Stackly Energy – Technical Project Documentation

## 1. Project Title
**Stackly Energy – Renewable Energy Grid Telemetry Platform Website**

---

## 2. Project Description
**Stackly Energy** is a premium, responsive renewable energy grid monitoring and telemetry platform website developed using HTML, CSS, and JavaScript. The website provides information about smart grid integration, utility-scale solar and wind services, local savings calculations, carbon offsets, and specialized dashboards for consumers and platform administrators.

---

## 3. Technologies Used

### Frontend
- **HTML5**: Semantic document structuring and inline SVG vector diagrams.
- **CSS3**: Variable-driven layout styling, neon color tokens, custom scrollbars, keyframe animations, and glassmorphic panels.
- **JavaScript (ES6)**: Real-time form validations, search filter algorithms, interactive hamburger toggles, and live telemetry rendering loop timers.

### Libraries & Design Assets
- **Font Awesome Icons**: Lightweight iconography for navigation links.
- **Google Fonts (Outfit)**: Premium, modern sans-serif typography.

### Deployment & Versioning
- **GitHub**: Repository management, tracking history, and branching.
- **GitHub Pages**: Static hosting of the production environment.
- **Browser Cache Invalidation**: Dynamic query parameter versioning (`?v=2.4`).

---

## 4. Project Modules

### Public Website (Marketing)
- **Home Page**: Main hero landing area featuring neon glow backdrops, key benefit grids, and animated loading fade-slides.
- **About Page**: Mission history, environmental offset metrics, and key milestones timeline.
- **Services Page**: Sizing calculator (local utility savings estimator) and clean energy service catalogs.
- **Blog Page**: Technical publications detailing predictive ML grids, line loss audits, and PV element recycling.
- **Contact Page**: Interactive contact inquiry form, office location coordinates, and support routing.
- **Support Pages**: FAQs, Team roster, Testimonials, Statistics, and a custom **404 page**.

### Authentication
- **Login Page**: Secure login gateway to access consumer/administrator control panels.
- **Register Page**: User registration form to sign up for telemetry monitoring access.

### User Dashboard (Consumer)
- **Dashboard Overview**: Telemetry node registries, live battery storage statistics, and real-time load consumption.
- **My Projects**: Installed panel counts, system capacity indicators, and active node grids.
- **Energy Reports**: Environmental offset logs, carbon credits tracking, and historic generation grids.
- **Profile Settings**: First and Last Name adjustments, email, and phone number modifications.
- **Help Support**: Support ticket submissions, helpdesk records, and status lists.

### Admin Dashboard (Operator)
- **Dashboard Overview**: Overall grid capacity, active node counters, and active system operations event logs.
- **User Management**: Consumer accounts list, carbon credit approvals, and user growth trackers.
- **Services Management**: Service catalog additions, publishing controls, and popularity demand meters.
- **Projects Management**: Grid station latencies, substation logs, and operational capacity meters.
- **Settings Management**: Tariff base adjustments, database cloud backup frequencies, API tokens, and sync rates.

---

## 5. Module Descriptions

### 1. Home Module
Serves as the entry point of the Stackly Energy platform. It introduces clean energy solutions, presents high-contrast interactive call-to-actions, lists platform capabilities, and guides user flow to secondary pages.
*   **Features**: Dynamic split-grid Hero section, stats counters, clean layout, responsive menu drawer.

### 2. About Module
Presents the technical lineage, mission statement, environmental progress metrics, and key organizational history milestones.
*   **Features**: "GRID/SOL/WND/BAT" satellite SVG layout, mission features list, environmental statistics offsets.

### 3. Services Module
Highlights localized domestic and industrial solutions. Contains a smart calculator that processes regional tariffs and utility averages.
*   **Features**: Sizing savings calculator (interactive JS logic), customized consulting anchors.

### 4. Blog Module
Hosts technical news, engineering logs, and research articles concerning renewable grid development.
*   **Features**: 6 comprehensive blog grids, filter navigation bar, read-time calculators.

### 5. Contact Module
Provides communication channels to the consulting team. Real-time inputs restrict characters to guarantee clean contact details.
*   **Features**: Inquiry form, contact info details, location coordinates map.

### 6. Authentication Module
Safeguards access controls, validates entries, and routes users to their matching administrative dashboard.
*   **Features**: Role-based access redirect, password visibility controls, registration validations.

---

## 6. Features

### User Features
- **User Registration & Login**: Role-based authentication routes.
- **Telemetry Node Tracking**: Live indicators of battery levels and active load consumption.
- **Energy Generation Metrics**: Daily generation curves and carbon displacement tracking.
- **Support Desk Access**: Instant ticket submissions and real-time status trackers.

### Admin Features
- **Substation Monitoring**: Live database counters of operational grid load.
- **Service Sizing Publishing**: Form to release new services directly to user grids.
- **Global Tariff Adjustment**: Controls to modify base electricity rates and battery alert limits.
- **Access & Sync Frequencies**: Configuration panel for cloud backups and API access tokens.

### Website Features
- **Frosted Glassmorphism**: Semi-transparent dark panels with frosted blur shadows.
- **Scroll Lock Navigation**: Freezes underlying background scrolling when mobile menu drawer is open.
- **Real-Time Input Sanitizers**: Blocks letters in numeric inputs and numbers in alphabetical inputs.
- **Proportional Logo Scaling**: Auto-scales the Stackly logo branding on all viewport resolutions.

---

## 7. Folder Structure

```text
Stackly-Solar-Energy/
├── index.html
├── about.html
├── services.html
├── blog.html
├── contact.html
├── login.html
├── register.html
├── 404.html
├── admin-dashboard.html
├── admin-messages.html
├── admin-projects.html
├── admin-services.html
├── admin-settings.html
├── admin-users.html
├── user-dashboard.html
├── user-profile.html
├── user-projects.html
├── user-reports.html
├── user-support.html
├── css/
│   ├── main.css
│   ├── pages.css
│   └── dashboards.css
├── js/
│   ├── main.js
│   ├── pages.js
│   └── dashboards.js
└── images/
    ├── logo.png
    └── [assets].webp
```

---

## 8. Security
- **Client-Side Sanitizers**: Real-time input filters strip illegal characters (digits/letters) automatically on key inputs.
- **Stacking Index Isolation**: Fixed overlay layering (`z-index: 999` and `1000`) prevents overlay clicks from bypassing active control menus.
- **Session-Based Navigation Routing**: Segregates admin controls from standard consumer paths.

---

## 9. Responsive Design
The platform supports standard device resolutions:
- **Desktop Devices**: Full grid grids, wide dual-columns.
- **Tablets & Mobile Devices**: Single-column vertical stacking, left/right collapsible drawers.
- **Responsive Breakpoints**:
  - `1200px` (Desktop grid boundary)
  - `991px` (Mobile menu activation threshold)
  - `768px` (Tablet vertical columns collapse)
  - `576px` (Mobile input forms vertical collapse)

---

## 10. Future Enhancements
- **Real-Time Solar Weather API**: Integrates weather forecasting algorithms to predict grid output deflection.
- **Payment Gateway Integration**: Net billing tariff invoice payment channels for active consumers.
- **Database Authentication Backend**: Dynamic user records handling using server-side databases (NodeJS/Express/PostgreSQL).
- **Automated Carbon Certificate Generation**: Programmatically issues downloadable offset credentials to consumers.

---

## 11. Conclusion
**Stackly Energy** represents a state-of-the-art, high-aesthetic clean energy administration platform. Built on responsive UI/UX principles, glassmorphism design styles, interactive validation structures, and scroll locking, it demonstrates robust frontend execution tailored to renewable energy tracking and services catalog management.
