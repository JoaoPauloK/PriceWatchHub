# Design Guidelines: Mercado Livre Price Monitor

## Design Approach: Hybrid Modern

**Primary Inspiration:** Linear's precise typography + Stripe's clean layouts + Aceternity UI's signature animations
**Philosophy:** Professional monitoring tool wrapped in an engaging, kinetic interface that commands attention through motion, not chaos.

---

## Typography

**Font Families:**
- Primary: Inter (400, 500, 600, 700) for UI and body text
- Accent: Space Grotesk (500, 700) for hero headlines and pricing callouts

**Hierarchy:**
- Hero Headlines: 3xl to 6xl, Space Grotesk Bold
- Section Headers: 2xl to 4xl, Inter Semibold
- Feature Titles: lg to xl, Inter Semibold
- Body Text: base to lg, Inter Regular
- UI Labels: sm to base, Inter Medium
- Price Values: xl to 3xl, Space Grotesk Medium (tabular numbers)

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 24
- Component padding: p-6, p-8
- Section spacing: py-16, py-24
- Card gaps: gap-6, gap-8
- Consistent rhythm throughout

**Container Strategy:**
- Landing sections: max-w-7xl with px-6
- Dashboard content: max-w-screen-2xl
- Forms/modals: max-w-2xl
- Price cards: Responsive grid (1/2/3 columns)

---

## Component Library

### Navigation
**Landing Header:** Glassmorphic navbar with blur backdrop, floating effect with subtle shadow. Logo left, language switcher and theme toggle mid-right, CTA button far right.

**Dashboard Header:** Solid themed background, persistent monitoring stats in header (total items, active alerts), quick-add button prominently placed.

### Cards
**Product Monitor Cards:** Rounded-2xl with subtle border, hover lift effect (translate-y-1), gradient border accent on hover. Display: product image thumbnail, title, current price (large, accent color), target price (comparison), price change indicator (arrow + percentage), action buttons (edit/delete).

**Price History Cards:** Glass-effect background, embedded animated line chart showing 30-day trend, sparkline micro-chart variant for dashboard grid view.

### Forms
**Add Product Form:** Clean vertical layout, Mercado Livre URL input with auto-detect animation, target price with currency formatting, floating labels, smooth validation states with micro-animations.

### Data Displays
**Dashboard Grid:** Masonry-style layout for varied card heights, stagger-in animations on load, filter/sort controls with pill-style buttons.

**Notification Center:** Slide-in panel from right, chronological feed with timestamps, categorized alerts (price drop, target reached, new low), dismissible with swipe gesture.

### CTAs
**Primary Buttons:** Gradient backgrounds (purple-to-blue or orange-to-red based on theme), hover scale effect (scale-105), magnetic cursor effect on landing page, glass-blur backgrounds when overlaying images.

**Secondary Buttons:** Border-only with themed colors, subtle fill on hover.

---

## Animations & Effects

**Landing Page Signature Effects:**
1. **Hero Gradient Orbs:** Floating, slowly morphing gradient spheres behind content (similar to Aceternity's aurora background)
2. **Parallax Scroll:** Hero text layers move at different speeds
3. **Magnetic Hover:** CTA buttons subtly follow cursor within boundary
4. **Stagger Reveals:** Feature cards animate in sequentially with fade-up
5. **Price Ticker Animation:** Infinite horizontal scroll showing sample price drops

**Dashboard Interactions:**
1. **Card Hover Glow:** Subtle gradient border glow on product cards
2. **Price Update Pulse:** Brief scale + glow animation when mock prices refresh
3. **Chart Draws:** Line charts animate drawing from left to right on load
4. **Notification Pop:** Smooth slide-in with bounce effect for new alerts

**Transitions:**
- Theme switch: 300ms smooth color transition across all elements
- Language switch: Fade-out/fade-in text swap (200ms)
- Page navigation: Subtle fade + slide (250ms)

---

## Images

**Hero Section:** Large, high-quality image of a laptop/phone displaying the Mercado Livre interface with price graphs overlaid, positioned right side, taking 40-50% width on desktop. Overlay subtle gradient mesh for depth.

**Feature Sections:** 
- Screenshots of dashboard showing product cards with real Mercado Livre product examples
- Mockup of mobile notifications showing price alerts
- Illustration of price graph trending downward with savings highlighted

**Trust Indicators:** Small logos/icons representing security and reliability (shield icon, notification bell, chart icons).

**Background Elements:** Abstract gradient shapes, subtle grid patterns, floating price tag graphics as decorative accents.

---

## Theme System

**Dark Theme:**
- Background: Near-black (slate-950)
- Surfaces: Dark gray (slate-900, slate-800)
- Text: White to gray-300
- Accents: Vibrant purple-500, blue-500, green-500 for positive price changes, red-500 for increases
- Glass effects: rgba(255,255,255,0.05) with backdrop-blur

**Light Theme:**
- Background: Off-white (slate-50)
- Surfaces: White with subtle gray borders
- Text: Slate-900 to slate-600
- Accents: Deeper purples, blues (600-700 range)
- Glass effects: rgba(255,255,255,0.8) with backdrop-blur

**Theme Toggle:** Smooth animated sun/moon icon switch with rotation effect.

---

## Landing Page Structure

1. **Hero Section (100vh):** Large headline "Never Miss a Deal on Mercado Livre" (PT: "Nunca Perca uma Oferta no Mercado Livre"), subheadline explaining instant price tracking, dual CTA buttons (Start Monitoring Free + See How It Works), gradient orb animations, hero image right-aligned.

2. **Features Grid (3-column):** Real-time monitoring, instant notifications, price history charts, custom alerts - each with icon and description.

3. **How It Works (3-step visual):** Add URL → Set Target → Get Notified, with animated progression indicators.

4. **Social Proof:** Testimonial cards showing savings examples (e.g., "Saved R$450 on new phone"), statistics banner (items tracked, average savings).

5. **Pricing/CTA Section:** Free to start message, prominent signup form with email + password, trust badges below.

6. **Footer:** Logo, navigation links, language/theme toggles, social links, copyright.

---

## Bilingual Implementation

**Language Toggle:** Flag icons (BR/US) or text toggle (PT/EN) in header, smooth content swap animation. Default language detection from browser.

**Selling Copy Principles:**
- Portuguese: Emphasize "economia" (savings), "alertas instantâneos" (instant alerts), "grátis" (free)
- English: Focus on "never overpay", "smart monitoring", "instant notifications"
- Maintain emotional resonance and urgency in both languages