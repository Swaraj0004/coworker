"use client";

import App from "../client/src/App";
import { ThemeProvider } from "../client/src/context/ThemeContext";

export default function LegacySpa() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
