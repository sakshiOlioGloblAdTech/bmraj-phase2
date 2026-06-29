"use client";

import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-zinc-300">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-3 text-left focus:outline-none group hover:opacity-80 transition-all duration-300"
      >
        <span className={`text-[18px] font-semibold transition-colors duration-300 ${
          isOpen ? 'text-[#00A86B]' : 'text-[#23322E]'
        }`}>
          {title}
        </span>
        <span className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'text-[#00A86B]' : 'text-[#23322E]'
        }`}>
          {isOpen ? (
            <Minus size={20} className="transition-transform duration-300" />
          ) : (
            <Plus size={20} className="transition-transform duration-300" />
          )}
        </span>
      </button>

      {/* Collapsible content area with smooth animation */}
      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="pt-0 pb-5">
          <p className="text-[#66726F] leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {data?.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
