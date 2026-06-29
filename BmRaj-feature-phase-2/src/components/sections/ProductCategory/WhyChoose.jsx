'use client';

import Accordion from '@/components/ui/Accordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';


export default function WhyChooseUs({whyChooseData}) {
    const { ref: imageRef, isInView: imageInView } = useScrollAnimation({ threshold: 0.2 });
    const { ref: contentRef, isInView: contentInView } = useScrollAnimation({ threshold: 0.2 });

    return (

        <section className="bg-[#f6f6ef]">
            <div className="pad max py-12">

                <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">

                    <div
                        ref={imageRef}
                        className={`relative w-full md:w-[450px] lg:w-[450px] flex-shrink-0 scroll-fade-left ${imageInView ? 'in-view' : ''}`}
                    >
                        <img
                            src="/category/why-choose.png"
                            alt="BMRaj factory operations"
                            className="rounded-xl shadow-lg w-full hover:shadow-2xl transition-shadow duration-500"
                        />

                    </div>

                    <div
                        ref={contentRef}
                        className={`w-full md:flex-1 scroll-fade-right ${contentInView ? 'in-view' : ''}`}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#23322E] mb-8">
                            {whyChooseData.title}
                        </h2>

                        <div className="space-y-2">
                            <Accordion data={whyChooseData.points} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}