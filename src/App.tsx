/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home"; // Eagerly loaded for fast LCP & SSG

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App({ url }: { url?: string }) {
  const isServer = typeof window === 'undefined';
  
  const content = (
    <Suspense fallback={<div className="min-h-screen bg-background flex justify-center items-center">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );

  if (isServer && url) {
    return <StaticRouter location={url}>{content}</StaticRouter>;
  }

  return <BrowserRouter>{content}</BrowserRouter>;
}
