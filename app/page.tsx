"use client";

import { useState } from "react";
import DesktopLanding from "../components/DesktopLanding";
import MobileLanding from "../components/MobileLanding";

export default function Home() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);

  return (
    <>
      <div className="desktopOnly">
        <DesktopLanding />
      </div>

      <div className="mobileOnly">
        <MobileLanding />
      </div>
    </>
  );
}