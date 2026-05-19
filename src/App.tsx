import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { AnimatePresence } from 'motion/react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// import CEO from "./assets/CEO.jpeg";
// import Before from "./assets/Before.PNG";
// import HisPromise from "./assets/HisPromise.png";
// import After from "./assets/after1.PNG";

// function Section({ title, children, dark }) {
//   return (
//     <div style={{
//       background: dark ? "#111" : "#fff",
//       padding: "60px 24px",
//     }}>
//       <div style={{ maxWidth: 780, margin: "0 auto" }}>
//         {title && (
//           <h2 style={{
//             fontSize: 28,
//             fontWeight: 700,
//             color: dark ? "#fff" : "#111",
//             marginBottom: 32,
//             paddingBottom: 16,
//             borderBottom: "2px solid #dc3545",
//           }}>
//             {title}
//           </h2>
//         )}
//         {children}
//       </div>
//     </div>
//   );
// }

// function EvidenceImage({ src, alt, caption }) {
//   return (
//     <div style={{ marginBottom: 48 }}>
//       <p style={{ fontSize: 16, color: "#555", marginBottom: 12, fontStyle: "italic" }}>
//         {caption}
//       </p>
//       <img
//         src={src}
//         alt={alt}
//         style={{
//           width: "100%",
//           borderRadius: 8,
//           border: "1px solid #ddd",
//           display: "block",
//         }}
//       />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div style={{ fontFamily: "'Georgia', serif", color: "#111", background: "#fff" }}>

//       {/* Header */}
//       <div style={{
//         background: "#dc3545",
//         color: "#fff",
//         padding: "60px 24px",
//         textAlign: "center",
//       }}>
//         <p style={{ fontSize: 13, letterSpacing: "0.15em", marginBottom: 16, opacity: 0.85 }}>
//           PUBLIC COMPLAINT — UNPAID FREELANCE WORK
//         </p>
//         <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, marginBottom: 20 }}>
//           Scam Alert
//         </h1>
//         <p style={{ fontSize: 18, maxWidth: 600, margin: "0 auto", lineHeight: 1.7, opacity: 0.9 }}>
//           Over 50 days of unpaid work, false excuses, and broken payment promises
//           by Dunga HariKrishna Prasad of Dunga Technology.
//         </p>
//       </div>

//       {/* Who */}
//       <Section title="Who Is This About?">
//         <div style={{ display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>

//           {/* CEO photo + note below */}
//           <div style={{ flexShrink: 0, width: 380 }}>
//             <img
//               src={CEO}
//               alt="Dunga HariKrishna Prasad"
//               style={{ width: "100%", borderRadius: 8, border: "1px solid #ddd", display: "block" }}
//             />
//             <div style={{
//               marginTop: 12,
//               background: "#fff8f8",
//               border: "1px solid #f5c6cb",
//               borderRadius: 8,
//               padding: "12px 14px",
//               fontSize: 14,
//               color: "#7a0000",
//               lineHeight: 1.6,
//             }}>
//               <strong>Does this man have any common sense?</strong>
//               <br /><br />
//               First he said his father was admitted to the hospital. Then he said his father died —
//               and he repeated the same story again and again.
//               When I called him, he never picked up the phone.
//             </div>
//           </div>

//           {/* Text */}
//           <div style={{ flex: 1, minWidth: 220 }}>
//             <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>
//               Dunga HariKrishna Prasad
//             </h3>
//             <p style={{ color: "#dc3545", fontSize: 15, marginBottom: 20 }}>CEO, Dunga Technology</p>
//             <p style={{ fontSize: 16, lineHeight: 1.8, color: "#333" }}>
//               I completed professional work for this company and waited patiently for payment.
//               I provided every possible payment method — Binance, Fiverr, Upwork, Stripe, and
//               an international bank account. More than 50 days have passed and no payment
//               has been sent.
//             </p>
//           </div>

//         </div>
//       </Section>

//       {/* Demand */}
//       <Section dark>
//         <div style={{
//           borderLeft: "4px solid #dc3545",
//           paddingLeft: 28,
//         }}>
//           <p style={{ fontSize: 17, lineHeight: 1.9, color: "#ddd" }}>
//             <strong style={{ color: "#fff" }}>Dunga HariKrishna Prasad,</strong> pay my salary immediately.
//             More than 50 days have passed since I completed the work. I offered payment through
//             Binance, Fiverr, Upwork, Stripe, and an international bank account — yet you still
//             have not paid. Emotional excuses and repeated promises without follow-through
//             are not acceptable. Freelancers work hard and deserve to be paid on time.
//             Stop scamming developers and clients.
//           </p>
//         </div>
//       </Section>

//       {/* Evidence */}
//       <Section title="Evidence">

//         <EvidenceImage
//           src={Before}
//           alt="Screenshot of first excuse"
//           caption="First excuse — He said his father is died and delay payment."
//         />

//         <EvidenceImage
//           src={After}
//           alt="Screenshot of the same excuse repeated"
//           caption="Same excuse again — weeks later he claimed his father had died. The same story, repeated."
//         />

//         <EvidenceImage
//           src={HisPromise}
//           alt="Screenshot of payment promises"
//           caption="Broken promises — He promised payment multiple times but never followed through."
//         />

//       </Section>

//       {/* Warning */}
//       <Section title="Protect Yourself" dark>
//         <p style={{ fontSize: 16, lineHeight: 1.8, color: "#ccc", marginBottom: 28 }}>
//           Before working with Dunga Technology, always ask for:
//         </p>
//         <ul style={{ paddingLeft: 20, fontSize: 16, lineHeight: 2, color: "#ccc" }}>
//           <li>An official, verifiable website</li>
//           <li>Verified reviews from past clients</li>
//           <li>A LinkedIn profile with real history</li>
//           <li>Direct references you can contact</li>
//         </ul>
//           <p style={{ fontSize: 16, lineHeight: 1.8, color: "#ccc", marginBottom: 28 }}>
//           They don't have any of these. If you see a company with no online presence, no reviews, and no verifiable history, be very cautious. Don't let yourself become another victim of their scams.
//         </p>
//       </Section>

//       {/* Footer */}
//       <div style={{
//         background: "#f7f7f7",
//         padding: "48px 24px",
//         textAlign: "center",
//         borderTop: "1px solid #e0e0e0",
//       }}>
//         <p style={{ fontSize: 16, color: "#555", marginBottom: 8 }}>
//           Want to recover your website? Contact:
//         </p>
//         <a
//           href="mailto:m13ali1000@gmail.com"
//           style={{ fontSize: 20, color: "#dc3545", fontWeight: 700, textDecoration: "none" }}
//         >
//           m13ali1000@gmail.com
//         </a>
//       </div>

//     </div>
//   );
// }