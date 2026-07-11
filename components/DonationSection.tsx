"use client";

import { useState } from "react";
import DonationModal from "@/components/DonationModal";

export default function DonationSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="donation" id="donate">
      <div className="donation-inner">
        <span className="eyebrow eyebrow-light"><span className="spark"></span> support the studio</span>
        <h2 className="donation-heading">Enjoy what we make?</h2>
        <p className="donation-text">Donations go directly toward development time, no platform taking a cut in between.</p>
        <button className="btn btn-primary donation-btn" onClick={() => setModalOpen(true)}>Donate</button>
      </div>

      {modalOpen && <DonationModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}