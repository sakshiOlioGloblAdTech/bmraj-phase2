// Product galleries normally hold plain path strings. An entry can instead be
// an object:
//
//   { src, label }                  a badged photo that is still the product,
//                                   e.g. "HDPE Agro Cap" vs "PET Agro Cap"
//   { src, label, related: true }   a badged photo of something else, e.g. the
//                                   bottle blown from a preform
//
// `related` is what excludes a photo from structured data, not the label —
// variants of the product belong in Product.image, related items don't.

/** The path for a gallery entry, whether it's a string or a labelled object. */
export function imageSrc(image) {
  if (!image) return '';
  return typeof image === 'string' ? image : image.src || '';
}

/** The badge text for a gallery entry, or null when it has none. */
export function imageLabel(image) {
  if (!image || typeof image === 'string') return null;
  return image.label || null;
}

/** Flatten a gallery to plain paths (for metadata, search results, etc.). */
export function imageSrcList(images) {
  if (!Array.isArray(images)) return [];
  return images.map(imageSrc).filter(Boolean);
}

/** True when the entry shows something other than the product being sold. */
export function isRelatedImage(image) {
  return Boolean(image && typeof image === 'object' && image.related);
}

/**
 * Only the entries that depict the product itself.
 *
 * Related photography is excluded from structured data — Product.image should
 * show what's being sold, not an accessory or an end product made from it.
 */
export function productImageList(images) {
  if (!Array.isArray(images)) return [];
  return images.filter((i) => !isRelatedImage(i)).map(imageSrc).filter(Boolean);
}
