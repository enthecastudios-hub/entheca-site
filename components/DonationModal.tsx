"use client";

import { useState } from "react";

const presetAmounts = [1, 5, 10, 25];

export default function DonationModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<number | null>(5);
  const [customAmount, setCustomAmount] = useState("");

  const finalAmount = customAmount ? Number(customAmount) : selected;

  const handleDonate = () => {
    // TODO: replace with real payment link once PayPal / merchant-of-record is set up.
    // For now, this just logs what would have been sent.
    console.log(`Donation flow would start here for $${finalAmount}`);
    alert(`Placeholder: this would send you to pay $${finalAmount}. Payment isn't wired up yet.`);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        <span className="eyebrow eyebrow-light"><span className="spark"></span> support the studio</span>
        <h3 className="modal-heading">Choose an amount</h3>

        <div className="amount-grid">
          {presetAmounts.map((amount) => (
            <button
              key={amount}
              className={selected === amount && !customAmount ? "amount-btn selected" : "amount-btn"}
              onClick={() => {
                setSelected(amount);
                setCustomAmount("");
              }}
            >
              ${amount}
            </button>
          ))}
        </div>

        <label className="custom-amount-label">
          Or enter a custom amount
          <input
            type="number"
            min="1"
            placeholder="e.g. 15"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="custom-amount-input"
          />
        </label>

        <button
          className="btn btn-primary modal-donate-btn"
          onClick={handleDonate}
          disabled={!finalAmount || finalAmount <= 0}
        >
          Donate ${finalAmount || 0}
        </button>
      </div>
    </div>
  );
}