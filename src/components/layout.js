import React from "react";
import { Header } from "./header";
export function Layout({ children }) {
  return (
    <div class="light">
      <Header />
      {children}
    </div>
  );
}
