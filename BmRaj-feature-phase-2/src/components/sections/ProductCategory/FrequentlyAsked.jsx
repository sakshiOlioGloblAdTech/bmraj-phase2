'use client';

import Accordion from '@/components/ui/Accordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FrequentlyAsked({faqData}) {
    const { ref: titleRef, isInView: titleInView } = useScrollAnimation({ threshold: 0.2 });
    const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 0.2 });

    return (

        <section className="bg-[#E3EAD9]">
            <div className="pad max py-16 md:py-20">

                <div className="flex flex-col md:flex-row gap-12 lg:gap-16">

                    <div
                        ref={titleRef}
                        className={`relative w-full mt-5 md:w-[450px] lg:w-[450px] scroll-fade-left ${titleInView ? 'in-view' : ''}`}
                    >
                       <h2 className='text-2xl sm:text-3xl md:text-4xl font-[600] text-[#23322E]'>Frequently Asked <br/> Questions</h2>
                    </div>

                    <div
                        ref={contentRef}
                        className={`w-full md:flex-1 scroll-fade-right ${contentInView ? 'in-view' : ''}`}
                    >

                        <div className="space-y-2">
                            <Accordion data={faqData} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}