import React from 'react';

/**
 * Renders a JSON-LD structured data block.
 *
 * `<` is escaped so a stray "</script>" inside any string can't break out of
 * the tag. Renders nothing when the builder returned null, so callers can pass
 * a schema straight through without guarding.
 */
export default function JsonLd({ data }) {
  if (!data) return null;

  const json = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
