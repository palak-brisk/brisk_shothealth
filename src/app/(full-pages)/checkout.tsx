"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_..."); // Your publishable key

export default function CheckoutPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    const res = await fetch("http://localhost:4000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 500, customerEmail: email }),
    });

    const data = await res.json();

    const stripe = await stripePromise;
    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: data.id });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* stripe listen --forward-to localhost:4000/webhook */}
      <h1 className="text-2xl font-bold mb-4">Checkout Page</h1>
      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 rounded mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Redirecting..." : "Pay $5"}
      </button>
    </div>
  );
}
