// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import { AnimatePresence } from 'motion/react';

// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// }

// export default function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow">
//           <AnimatePresence mode="wait">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </AnimatePresence>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }


export default function App() {
  return (
<>
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          maxWidth: "540px",
        }}
      >
        <h1 style={{ color: "#dc3545", marginBottom: "20px",  fontSize: "26px",}}>
        Scam Alert  Website Closed
        </h1>

        <p style={{ fontSize: "16px", color: "#333", marginBottom: "15px" }}>
          This website has been temporarily suspended due to non-payment by
<b>Before starting work with Dunga Technology, check their reviews and ask for their website and LinkedIn profile. They do not have these because they are scammers. They have been scamming both developers and clients.</b>        </p>

        <p style={{ fontSize: "15px", color: "#555", marginBottom: "10px" }}>
          To restore access or for further information, please contact:
        </p>

        <p style={{ fontSize: "16px", fontWeight: "bold", color: "#000" }}>
          m13ali1000@gmail.com
        </p>
      </div>
    </div>
</>
  );
}