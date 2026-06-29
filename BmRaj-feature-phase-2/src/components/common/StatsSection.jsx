'use client'

import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';

export default function StatsSection({
  stats = [],
  containerClassName = 'mx-auto pad max py-12',
  gridClassName = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6',
  cardClassName = 'flex flex-col items-center text-center',
  titleClassName = 'text-2xl md:text-3xl lg:text-[32px] font-bold text-[#139C57] mb-2',
  subtitleClassName = 'text-[#687975] text-base md:text-lg',
  showBorders = true,
  borderClassName = 'lg:border-r border-gray-300 px-2'
}) {
  const { setRef, inViewStates } = useStaggeredAnimation(stats.length, { staggerDelay: 100 });

  if (!stats || stats.length === 0) {
    return null;
  }

  return (
    <section className={containerClassName}>
      <div className="rounded-2xl">
        <div className={gridClassName}>
          {stats.map((stat, index) => (
            <div
              ref={setRef(index)}
              key={stat.id || index}
              className={`${cardClassName} ${
                showBorders && index < stats.length - 1 ? borderClassName : ''
              } scroll-fade-up ${inViewStates[index] ? 'in-view' : ''}`}
            >
              {stat.icon && (
                <div className="mb-4">
                  {stat.icon}
                </div>
              )}
              <h3 className={`${titleClassName} number-highlight text-[#139C57]`}>
                {stat.title}
              </h3>
              <p className={subtitleClassName}>
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
