export default function TrustedCertifications({ title, certifications = [], note }) {
  return (
    <section className="bg-[#F6F6EF] py-12">
      <div className="pad max mx-auto">
        {/* Outer Card */}
        <div className="bg-[#FBFBF6] border border-[#DFDFD3] rounded-3xl p-6 md:p-10">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#183F34] mb-8">
            {title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-[#F6F6EF] border border-[#DFDFD3] rounded-xl p-5"
              >
                <span className="block w-2.5 h-2.5 rounded-full bg-[#139C57] mb-4" />
                <p className="text-[15px] md:text-[16px] text-[#5D6865] leading-[1.5]">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        {note && (
          <p className="text-[13px] md:text-[14px] text-[#8A938F] mt-6">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
