'use client';

import { createContext, useContext, useState } from 'react';
import QuotePopup from '@/components/layouts/QuotePopup';

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);

  return (
    <QuoteContext.Provider value={{ isQuoteOpen, openQuote, closeQuote }}>
      {children}
      <QuotePopup isOpen={isQuoteOpen} onClose={closeQuote} />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
