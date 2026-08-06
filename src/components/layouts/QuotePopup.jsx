"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getAllProductOptions } from "@/data/products";
import FormSuccess from "@/components/common/FormSuccess";

const PRODUCT_OPTIONS = getAllProductOptions();

const quantityOptions = [
  "Select Quantity",
  "1-100 units",
  "100-500 units",
  "500-1000 units",
  "1000-5000 units",
  "5000+ units"
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Allow optional +, then 10–15 digits (after stripping spaces, dashes, parens).
const phoneDigitsRegex = /^\+?\d{10,15}$/;

const REQUIRED_LABEL = (label) => (
  <>
    {label} <span className="text-red-500">*</span>
  </>
);

function validateForm(values) {
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

const QuotePopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    product: "",
    quantity: "",
    isPrintingRequired: true,
    message: ""
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const popupRef = useRef(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Reset form on close
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        fullName: "",
        companyName: "",
        phoneNumber: "",
        email: "",
        product: "",
        quantity: "",
        isPrintingRequired: true,
        message: ""
      });
      setFieldErrors({});
      setError("");
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Could not send your request.");
      }

      // Confirm on the spot rather than closing the popup — otherwise the
      // dialog just disappears and there's nothing to say it worked.
      setIsSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (name) =>
    `w-full px-1 py-3 border-b text-[14px] text-gray-700 placeholder:text-gray-400 focus:outline-none bg-transparent ${
      fieldErrors[name] ? "border-red-500" : "border-primary"
    }`;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      style={{
        animation: "fadeIn 0.2s ease-out forwards",
      }}
    >
      {/* Quote Popup Container */}
      <div
        ref={popupRef}
        className="w-full max-w-[900px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "searchPopupScale 0.3s ease-out forwards",
        }}
      >
        {/* Left Side - Form, or the confirmation once submitted */}
        <div className="flex-1 p-6 lg:p-8">
          {isSubmitted ? (
            <FormSuccess
              message="Your quote request has been received. Our team will review it and get back to you shortly."
              actionLabel="Close"
              onAction={onClose}
            />
          ) : (
          <>
          <h2 className="text-[22px] lg:text-[26px] font-bold text-[#183F34] mb-6">
            Get an Instant Quote for
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Row 1: Full Name & Company Name */}
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

            {/* Row 2: Phone Number & Email */}
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

            {/* Row 3: Product */}
            <div>
              <label className="block text-[13px] font-medium text-gray-600 mb-1.5">
                Product
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleInputChange}
                className="w-full px-1 py-3 border-b border-primary text-[14px] text-gray-700 focus:outline-none bg-transparent appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1.5rem'
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

            {/* Row 4: Quantity */}
            <div>
              <label className="block text-[13px] font-medium text-gray-600 mb-1.5">
                Quantity
              </label>
              <select
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="w-full px-1 py-3 border-b border-primary text-[14px] text-gray-700 focus:outline-none bg-transparent appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1.5rem'
                }}
              >
                {quantityOptions.map((option, index) => (
                  <option key={index} value={index === 0 ? "" : option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 4: Printing Required */}
            <div>
              <label className="block text-[13px] font-medium text-gray-600 mb-3">
                Is printing required?
              </label>
              <div className="flex items-center gap-6">
                <div
                  onClick={() => setFormData(prev => ({ ...prev, isPrintingRequired: true }))}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      formData.isPrintingRequired
                        ? 'border-primary bg-primary'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    {formData.isPrintingRequired && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[14px] text-gray-700">Yes, Required</span>
                </div>
                <div
                  onClick={() => setFormData(prev => ({ ...prev, isPrintingRequired: false }))}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      !formData.isPrintingRequired
                        ? 'border-primary bg-primary'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    {!formData.isPrintingRequired && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[14px] text-gray-700">No</span>
                </div>
              </div>
            </div>

            {/* Row 5: Message */}
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
                className="w-full px-1 py-3 border-b border-primary text-[14px] text-gray-700 placeholder:text-gray-400 focus:outline-none bg-transparent resize-none"
              />
            </div>

            {error && (
              <p className="text-[14px] text-red-600 font-medium">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#183F34] hover:bg-[#0f2a24] text-white py-4 rounded-xl font-semibold text-[15px] transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Enquiry"
              )}
            </button>
          </form>
          </>
          )}
        </div>

        {/* Right Side - Contact Info with Background Image */}
        <div className="relative w-full lg:w-[380px] min-h-[300px] lg:min-h-full">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/get-quote.png"
              alt="Get in Touch"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col justify-between">
            {/* Top Content */}
            <div>
              <h3 className="text-[32px] lg:text-[36px] font-[700] text-white leading-tight mb-2">
                Have<br />Questions?
              </h3>
              <p className="text-white/90 text-[20px] font-[500]">Get in Touch</p>
            </div>

            {/* Contact Info - Bottom */}
            <div className="space-y-4 mt-8">
              <a href="tel:02602640244" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#139C57] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#183F34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[15px] font-medium">0260-2640244</span>
              </a>

              <a href="tel:+919377115444" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#139C57] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#183F34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[15px] font-medium">+91-9377115444</span>
              </a>

              <a href="mailto:info@bmraj.co.in" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#139C57] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#183F34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[15px] font-medium">info@bmraj.co.in</span>
              </a>

              <div className="flex items-start gap-3 text-white">
                <div className="w-10 h-10 min-w-10 rounded-xl bg-[#139C57] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#183F34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-[14px] font-medium leading-tight">Plot No. 4 & 5, Survey No.113/2/4 & 5, Tirupati Ind. Estate, 66 KVA Road, Amli SILVASSA - 396230 Dadra and Nagar Haveli & Daman & Diu, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePopup;
