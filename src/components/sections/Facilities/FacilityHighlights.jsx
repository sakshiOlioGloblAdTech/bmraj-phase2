const CheckIcon = () => (
  <svg
    className="w-5 h-5 flex-shrink-0"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="31" height="31" rx="15.5" fill="#139C57" />
    <path
      d="M9 15.5C11.5 17 12.1994 19.9022 12.4905 19.8175C12.7798 19.7333 16 13.5 22 11"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function FacilityHighlights({ title, description, highlights = [] }) {
  return (
    <section className="bg-[#F6F6EF] py-12 md:py-16">
      <div className="pad max mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#183F34] mb-4 leading-[1.15]">
            {title}
          </h2>
          {description && (
            <p className="text-[#687975] text-[15px] md:text-[16px] leading-[1.7]">
              {description}
            </p>
          )}
        </div>

        {/* Highlight Pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2.5 bg-white rounded-full px-5 py-3 shadow-soft"
            >
              <CheckIcon />
              <p className="text-[14px] md:text-[15px] text-[#183F34] font-medium leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
