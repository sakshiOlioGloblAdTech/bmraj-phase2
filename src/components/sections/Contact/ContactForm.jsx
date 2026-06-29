"use client";

import { useState } from "react";
import { getAllProductOptions } from "@/data/products";

const PRODUCT_OPTIONS = getAllProductOptions();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Allow optional +, then 10–15 digits (after stripping spaces, dashes, parens).
const phoneDigitsRegex = /^\+?\d{10,15}$/;

const REQUIRED_LABEL = (label) => (
  <>
    {label} <span className="text-red-500">*</span>
  </>
);

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!values.companyName.trim()) errors.companyName = "Company name is required.";

  const phoneClean = values.phoneNumber.replace(/[\s\-()]/g, "");
  if (!phoneClean) {
    errors.phoneNumber = "Phone number is required.";
  } else if (!phoneDigitsRegex.test(phoneClean)) {
    errors.phoneNumber = "Enter a valid phone number (10–15 digits, optional + prefix).";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

const baseInputClass =
  "w-full px-1 py-3 border-b text-[14px] text-gray-700 placeholder:text-gray-400 focus:outline-none bg-transparent";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    product: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear this field's error as the user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Could not send your message.");
      }

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        companyName: "",
        phoneNumber: "",
        email: "",
        product: "",
        message: "",
      });
      setFieldErrors({});
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (name) =>
    `${baseInputClass} ${fieldErrors[name] ? "border-red-500" : "border-primary"}`;

  return (
    <div className="flex-1 bg-white rounded-2xl shadow-soft p-6 lg:p-8">
      <h2 className="text-[22px] lg:text-[26px] font-bold text-[#183F34] mb-6">
        Get an Instant Quote
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[13px] font-medium text-gray-600 mb-1.5">
              {REQUIRED_LABEL("Full Name")}
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter Your Full Name"
              className={inputClass("fullName")}
              aria-invalid={!!fieldErrors.fullName}
            />
            {fieldErrors.fullName && (
              <p className="text-[12px] text-red-600 mt-1">{fieldErrors.fullName}</p>
            )}
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-600 mb-1.5">
              {REQUIRED_LABEL("Company Name")}
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Your Company Name"
              className={inputClass("companyName")}
              aria-invalid={!!fieldErrors.companyName}
            />
            {fieldErrors.companyName && (
              <p className="text-[12px] text-red-600 mt-1">{fieldErrors.companyName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[13px] font-medium text-gray-600 mb-1.5">
              {REQUIRED_LABEL("Phone Number")}
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              className={inputClass("phoneNumber")}
              aria-invalid={!!fieldErrors.phoneNumber}
            />
            {fieldErrors.phoneNumber && (
              <p className="text-[12px] text-red-600 mt-1">{fieldErrors.phoneNumber}</p>
            )}
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-600 mb-1.5">
              {REQUIRED_LABEL("Email")}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email Address"
              className={inputClass("email")}
              aria-invalid={!!fieldErrors.email}
            />
            {fieldErrors.email && (
              <p className="text-[12px] text-red-600 mt-1">{fieldErrors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-medium text-gray-600 mb-1.5">
            Product
          </label>
          <select
            name="product"
            value={formData.product}
            onChange={handleInputChange}
            className={`${baseInputClass} border-primary appearance-none cursor-pointer`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.5rem center",
              backgroundSize: "1.5rem",
            }}
          >
            <option value="">Select a Product</option>
            {PRODUCT_OPTIONS.map((group) => (
              <optgroup key={group.category} label={group.category}>
                {group.items.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[13px] font-medium text-gray-600 mb-1.5">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write Your Message"
            rows={3}
            className={`${baseInputClass} border-primary resize-none`}
          />
        </div>

        {isSubmitted && (
          <p className="text-[14px] text-[#139C57] font-medium">
            Thanks — your enquiry has been received. We&apos;ll be in touch shortly.
          </p>
        )}

        {serverError && (
          <p className="text-[14px] text-red-600 font-medium">{serverError}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#183F34] hover:bg-[#0f2a24] text-white py-4 rounded-xl font-semibold text-[15px] transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-2"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Enquiry"
          )}
        </button>
      </form>
    </div>
  );
}
