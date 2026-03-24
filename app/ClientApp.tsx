"use client";

import { useEffect, useState } from "react";
import App from "../src/App";
import { ThemeProvider } from "../src/context/ThemeContext";

export default function ClientApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
