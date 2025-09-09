import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// ✅ Wrapper to handle route-based background + hash scrolling
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // 🔥 Smooth scroll to #hash even when navigating
  useEffect(() => {
    const { hash } = location;
    if (!hash) return;

    let attempts = 0;
    const maxAttempts = 10;
    const interval = setInterval(() => {
      attempts += 1;
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        clearInterval(interval);
      } else if (attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [location.pathname, location.hash]);

  return (
    <>
      {/* Show protons only on home */}
      {isHomePage && (
        <div className="protons-bg">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="proton"></div>
          ))}
        </div>
      )}

      {/* 🚀 App Routes */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

