"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { StaggerContainer, staggerItem } from "@/components/ui/animations";
import SectionHeading from "@/components/ui/SectionHeading";

const plans = [
  {
    name: "Basic",
    price: 4.99,
    description: "For a single passport or visa photo.",
    features: [
      "1 digital passport photo",
      "AI background removal",
      "Compliance check",
      "Instant download",
      "Email delivery",
    ],
    cta: "Get started",
    featured: false,
    badge: null,
  },
  {
    name: "Standard",
    price: 9.99,
    description: "Most popular for individuals.",
    features: [
      "4 digital photos (print-ready)",
      "AI background removal",
      "Compliance + human review",
      "Instant download",
      "Printable 4×6 sheet",
      "100% acceptance guarantee",
      "Priority support",
    ],
    cta: "Get Standard",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Family",
    price: 19.99,
    description: "Best value for multiple people.",
    features: [
      "Up to 5 people or documents",
      "AI + expert review",
      "Any document type",
      "Instant download for all",
      "Print sheets included",
      "100% acceptance guarantee",
      "24/7 dedicated support",
    ],
    cta: "Get Family",
    featured: false,
    badge: "Best value",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="One payment. No subscriptions."
          description="Pay once, get your compliant photo instantly. If it gets rejected, you get your money back — every plan, every time."
        />

        <StaggerContainer
          className="mt-16 grid md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto"
          staggerDelay={0.08}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900"
                  : "bg-white border border-slate-200 shadow-card hover:shadow-card-hover"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                    plan.featured
                      ? "bg-amber-400 text-amber-950"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <p
                  className={`text-[11px] font-semibold uppercase tracking-[0.15em] mb-3 ${
                    plan.featured ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1.5 mb-3">
                  <span
                    className={`font-display text-5xl font-semibold tracking-tight ${
                      plan.featured ? "text-white" : "text-slate-900"
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-sm mb-2 ${
                      plan.featured ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    one-time
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    plan.featured ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div
                className={`h-px ${plan.featured ? "bg-slate-800" : "bg-slate-100"} mb-6`}
              />

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                        plan.featured ? "bg-blue-500" : "bg-emerald-500"
                      }`}
                    >
                      <Check
                        className="w-2.5 h-2.5 text-white"
                        strokeWidth={3}
                      />
                    </div>
                    <span
                      className={
                        plan.featured ? "text-slate-200" : "text-slate-700"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://mysnappass.com/upload"
                className={`group flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-white text-slate-900 hover:bg-blue-50"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </StaggerContainer>

        <p className="text-center text-sm text-slate-500 mt-10 max-w-md mx-auto">
          All plans include our money-back guarantee. If your photo is rejected,
          we refund you in full — no questions asked.
        </p>
      </div>
    </section>
  );
}
