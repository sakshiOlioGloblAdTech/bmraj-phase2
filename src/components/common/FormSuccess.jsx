import React from 'react';

/**
 * Confirmation panel shown in place of a form once it has been submitted.
 *
 * Replaces the form rather than sitting alongside it, so there's no doubt the
 * submission went through and no way to send the same enquiry twice by
 * accident.
 */
export default function FormSuccess({
  title = 'Thank you!',
  message = "Your enquiry has been received. Our team will get back to you shortly.",
  actionLabel,
  onAction,
}) {
  return (
    <div
      className="flex flex-col items-center text-center py-10 px-6"
      role="status"
      aria-live="polite"
    >
      <div className="w-16 h-16 rounded-full bg-[#D1EEAE] flex items-center justify-center mb-5">
        <svg
          className="w-8 h-8 text-[#139C57]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h3 className="text-[22px] font-[700] text-[#183F34] mb-2">{title}</h3>

      <p className="text-[15px] text-[#66726F] leading-relaxed max-w-sm mb-6">
        {message}
      </p>

      <div className="text-[14px] text-[#66726F]">
        <p className="mb-1">Need to speak to someone sooner?</p>
        <a
          href="tel:+919377115444"
          className="font-semibold text-[#139C57] hover:underline"
        >
          +91-9377115444
        </a>
        <span className="mx-2 text-gray-300">|</span>
        <a
          href="mailto:info@bmraj.co.in"
          className="font-semibold text-[#139C57] hover:underline"
        >
          info@bmraj.co.in
        </a>
      </div>

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-7 bg-[#183F34] hover:bg-[#0f2a24] text-white px-7 py-3 rounded-xl font-semibold text-[15px] transition-all hover:shadow-md"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
