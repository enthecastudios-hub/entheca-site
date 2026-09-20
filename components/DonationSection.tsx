"use client";

import { useState } from "react";
import DonationModal from "@/components/DonationModal";

export default function DonationSection() {
  return (
    <section className="donation" id="donate">
      <div className="donation-inner">
        <span className="eyebrow eyebrow-light"><span className="spark"></span> support the studio</span>
        <h2 className="donation-heading">Enjoy what we make?</h2>
        <p className="donation-text">Donations go directly toward development time, no platform taking a cut in between.</p>
        <span className="btn btn-primary donation-btn btn-disabled">Currently unavailable</span>
      </div>
    </section>
  );
}