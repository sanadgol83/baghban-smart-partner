# 🌱 Baghban Smart — Smart Agriculture Platform

A modern **Persian RTL Smart Agriculture Platform** designed for farmers, orchards, and agricultural experts.

**Baghban Smart** is a frontend product concept for transforming a traditional agricultural website into a digital agricultural ecosystem combining:

* 🌾 Farmer & Orchard Management
* 👨‍🌾 Farmer CRM
* 🤖 AI-assisted Agricultural Analysis
* 🌦️ Weather Intelligence
* 📋 Expert Recommendations
* 🛒 Agricultural Products
* 📚 Agricultural Knowledge & Magazine

The core idea is simple:

> **Baghban is not just an agricultural store — it is a digital agricultural partner that understands farmers, farms, and orchards.**

---

## 🎯 Product Concept

Traditional agricultural websites are usually **product-centric**:

```text
Product
   ↓
Product Page
   ↓
Cart
   ↓
Purchase
```

Baghban Smart introduces a **problem-centric** experience:

```text
Farmer Problem
      ↓
Farmer Data
      ↓
Farm / Orchard Data
      ↓
Weather + Soil + History
      ↓
AI + Expert Analysis
      ↓
Recommendation
      ↓
Action
      ↓
Product / Service / Consultation
```

This concept allows the platform to connect agricultural products and services directly to the real problems and needs of farmers.

---

## ✨ Features

### 🌐 Marketing Website

* Premium agricultural landing page
* Persian RTL interface
* Responsive navigation
* Problem-first service presentation
* Agricultural services showcase
* Featured agricultural products
* Agricultural magazine section
* Trust and expertise section
* Responsive call-to-action sections

### 📊 Smart Dashboard

The `/smart` route provides a SaaS-style agricultural management dashboard with:

* Active farmers
* Orchards and farms
* Active alerts
* Farm health score
* Weather information
* AI recommendations
* Farm health visualization
* Recent activities
* Upcoming tasks
* Recent field visits

The dashboard is designed to feel like a practical **Agricultural ERP / CRM interface**, rather than a generic analytics dashboard.

### 👨‍🌾 Farmer CRM

The `/smart/farmers` page provides a farmer management interface with:

* Farmer search
* Filtering
* Sorting
* Farmer status
* Region
* Main crop
* Number of orchards
* Last visit
* Farmer profile navigation

Example farmer records are represented using realistic mock data.

### 👤 Farmer Profile

The dynamic farmer profile route:

```text
/smart/farmers/:farmerId
```

provides an overview of an individual farmer including:

* Farmer information
* Contact information
* Region
* Number of orchards
* Farm health score
* Last visit
* Latest recommendation
* Orchard information
* Agricultural history
* Recommendations
* Messages

The profile also includes orchard-level information such as health status, irrigation, disease status, expert visits, and recommendations.

---

## 🤖 AI Agricultural Analysis

One of the main interactions of the demo is the **Smart Orchard Analysis** experience.

The user can trigger:

> **تحلیل هوشمند باغ**

The interface then simulates an agricultural analysis process:

```text
✓ بررسی اطلاعات کشاورز
✓ بررسی سوابق باغ
✓ بررسی شرایط آب‌وهوا
✓ بررسی وضعیت خاک
✓ تحلیل شرایط فعلی
```

After processing, the interface presents:

### نتیجه تحلیل

and:

### اقدامات پیشنهادی

Possible recommendations include:

* بررسی وضعیت بیماری
* بررسی برنامه تغذیه
* کنترل آفات
* بررسی آبیاری

The analysis is **simulated on the frontend** and does not connect to a real AI API.

---

## 🌦️ Weather Intelligence

The platform includes a weather intelligence concept that connects weather conditions to agricultural decision-making.

Example data:

```text
جهرم
31°C
آفتابی
رطوبت: 38%
باد: 12 km/h
```

Instead of presenting weather as isolated information, the interface connects it to agricultural recommendations such as irrigation planning.

The current implementation uses **mock data** rather than a live weather API.

---

## 🔔 Smart Notifications

The dashboard includes an interactive notification experience.

Example notifications:

* ⚠️ افزایش دمای جهرم
* 🌱 توصیه جدید برای باغ آلبالو
* 👨‍🌾 گزارش بازدید آقای حسینی
* 💧 بررسی وضعیت آبیاری

Notifications are presented as part of the product interaction model and use a selective glass-style interface.

---

## ⌘ Command Palette

The application includes a keyboard-driven command interface.

### Shortcut

```text
Ctrl + K
```

or:

```text
⌘ + K
```

Available actions include:

* جستجوی کشاورز
* جستجوی باغ
* ثبت بازدید
* افزودن باغ
* ایجاد توصیه
* مشاهده هشدارها
* مشاهده محصولات

This interaction is designed to make the platform feel closer to a modern professional SaaS application.

---

## 🛒 Agricultural Product Store

The concept retains the agricultural e-commerce functionality of the original Baghban experience.

Featured product categories include:

* کودهای کشاورزی
* سموم دفع آفات
* بذر
* ادوات و ابزار

Products are intentionally presented as:

> **راهکارهای پیشنهادی برای باغ شما**

rather than simply a conventional online product catalog.

This reinforces the platform's problem-first product philosophy.

---

## 📚 Agricultural Magazine

The landing page also includes an agricultural knowledge section covering topics such as:

* آفات و بیماری‌ها
* برنامه تغذیه
* مدیریت باغ
* آبیاری
* آموزش کشاورزی

The purpose is to position Baghban as an agricultural knowledge and consulting platform in addition to an online store.

---

## 🎨 Design System

The visual identity combines:

**Premium Agriculture + Modern SaaS + AI**

The design uses a restrained agricultural palette:

* 🌲 Deep Forest Green
* 🌿 Natural Green
* 🤍 Warm Off-White / Cream
* 🖤 Deep Navy / Charcoal
* 🟡 Subtle Amber / Warm Gold

The interface is intentionally **not entirely green**. Neutral surfaces are used to maintain clarity and professionalism while green communicates agriculture, nature, growth, and trust.

---

## 🧊 Selective Liquid Glass

Liquid Glass is used as an **interaction layer**, not as the primary visual language.

The project follows approximately:

```text
80% Clean / Solid UI
20% Selective Liquid Glass
```

Glass effects are primarily used for:

* Mobile navigation
* Notification panel
* AI analysis modal
* Command palette
* User profile popover
* Dashboard filter popovers

Core content such as statistics, tables, product cards, service cards, and main backgrounds intentionally use clean solid surfaces.

---

## 📱 Responsive UX

The interface is designed for:

### Desktop

* Wide layouts
* RTL sidebar dashboard
* Multi-column content
* Data visualization

### Tablet

* Compact layouts
* Adaptive grids
* Reduced spacing

### Mobile

* RTL mobile navigation
* Drawer-based dashboard navigation
* Responsive cards
* Mobile-friendly tables
* Responsive charts
* No horizontal overflow

The dashboard sidebar is designed to transition into a drawer or mobile navigation experience on smaller screens.

---

## 🛠️ Tech Stack

### Core

* **React 19**
* **TypeScript**
* **Vite 8**
* **Tailwind CSS 4**

### Routing & Application

* **TanStack Router**
* **TanStack Start**
* **TanStack React Query**

### UI

* **Radix UI**
* **Lucide React**
* **Tailwind Merge**
* **Class Variance Authority**
* **CMDK**

### Forms & Validation

* **React Hook Form**
* **Zod**

### Data Visualization

* **Recharts**

### Utilities

* **date-fns**
* **Sonner**
* **Embla Carousel**
* **Vaul**

These technologies are reflected in the project's actual `package.json` dependencies.

---

## 🗺️ Application Routes

The project currently includes the following primary routes:

| Route                      | Purpose                          |
| -------------------------- | -------------------------------- |
| `/`                        | Baghban Smart marketing homepage |
| `/smart`                   | Smart agriculture dashboard      |
| `/smart/farmers`           | Farmer CRM                       |
| `/smart/farmers/:farmerId` | Individual farmer profile        |

The routes follow the file-based routing architecture of TanStack Start.

---

## 📁 Project Structure

```text
demo-baghban-smart/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   │
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── smart.tsx
│   │   ├── smart.index.tsx
│   │   ├── smart.farmers.index.tsx
│   │   └── smart.farmers.$farmerId.tsx
│   │
│   ├── routeTree.gen.ts
│   ├── router.tsx
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

The source structure separates assets, reusable components, hooks, utilities, and routes.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm

### 1. Clone the repository

```bash
git clone https://github.com/sanadgol83/demo-baghban-smart.git
```

### 2. Navigate to the project

```bash
cd demo-baghban-smart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will start the development server and provide the local URL in the terminal.

---

## 📦 Available Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the development server     |
| `npm run build`     | Create a production build        |
| `npm run build:dev` | Create a development-mode build  |
| `npm run preview`   | Preview the production build     |
| `npm run lint`      | Run ESLint                       |
| `npm run format`    | Format the project with Prettier |

These commands are defined in the project's `package.json`.

---

## 🧪 Demo Architecture

This repository is intentionally a **frontend prototype**.

It uses realistic mock data to simulate how a future production platform could behave.

### Included

* UI interactions
* Routing
* Dashboard navigation
* CRM interactions
* Responsive layouts
* Charts
* Filters
* Modals
* Notifications
* Command palette
* Simulated AI analysis
* Mock weather intelligence

### Not Included

* ❌ Real backend
* ❌ Real database
* ❌ Real authentication
* ❌ Real AI API
* ❌ Real weather API
* ❌ Real payment processing
* ❌ Production data persistence

The project specification explicitly defines these limitations so the demo can focus on **frontend UX, product design, and interaction quality**.

---

## 🎯 Project Goals

The primary goal of Baghban Smart is to demonstrate how an existing agricultural business could evolve from:

**Agricultural Store**

into:

```text
Agricultural Website
        ↓
E-Commerce
        ↓
Farmer CRM
        ↓
Farm & Orchard Management
        ↓
Expert Services
        ↓
Weather Intelligence
        ↓
AI Recommendations
        ↓
Smart Agriculture Platform
```

The concept is designed to communicate business value as well as frontend capability.

---

## 💡 UX Philosophy

The project follows four core principles:

> **Clarity > Beauty**

> **Usability > Effects**

> **Business Value > Decoration**

> **Trust > Futuristic Visuals**

The goal is to make the platform feel like a product that farmers and agricultural experts could realistically use, rather than simply creating a visually impressive AI dashboard.

---

## 📌 Project Status

**Frontend Demo — Smart Agriculture Product Concept**

The current version focuses on:

* Product design
* Frontend architecture
* Persian RTL UX
* Responsive implementation
* CRM experience
* Dashboard design
* Agricultural data visualization
* AI interaction simulation
* Modern micro-interactions

A production version could later integrate real backend services, authentication, databases, AI models, weather services, agricultural data, and e-commerce infrastructure.

---

## 👨‍💻 Author

**Mohammad Sanadgol**

GitHub: [@sanadgol83](https://github.com/sanadgol83)

---

## 📄 License

No separate open-source license is currently specified for this repository.

If you plan to distribute or reuse this project publicly, consider adding an appropriate `LICENSE` file.
