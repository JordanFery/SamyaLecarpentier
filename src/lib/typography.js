const NBSP = " ";
const NARROW_NBSP = " ";

/** Any language: never separate a number from its unit ("15 s", "0,01 €", "250 g"). */
function commonTypography(text) {
  return text.replace(/(\d) (€|%|s|h|g|kg|cl|ml)(?=$|[\s.,;:!?)])/g, `$1${NBSP}$2`);
}

/**
 * French: narrow no-break space before ; : ! ? and as thousands separator
 * ("10 000"), typographic apostrophes.
 */
function frenchTypography(text) {
  return text
    .replace(/(\d) (?=\d{3}(?!\d))/g, `$1${NARROW_NBSP}`)
    .replace(/ ([:;!?])/g, `${NARROW_NBSP}$1`)
    .replace(/'/g, "’");
}

function typeset(text, lang) {
  const common = commonTypography(text);
  return lang === "fr" ? frenchTypography(common) : common;
}

/** Applies locale typography to every string of a content object (not to keys). */
export function withTypography(value, lang) {
  if (typeof value === "string") return typeset(value, lang);
  if (Array.isArray(value)) return value.map((item) => withTypography(item, lang));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, withTypography(item, lang)]));
  }
  return value;
}

/**
 * Keeps hyphenated words and arrow pairs ("e-commerce", "2 → 3") from breaking
 * across lines in large display type.
 */
export function keepTogether(text) {
  return text.split(/(\S+-\S+|\S+ → \S+)/g).map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
