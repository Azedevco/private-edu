// AZEDEV Learn's own mark: a short route with three stations (start, a step, the goal), ink on a paper tile.
// AZEDEV's gear stays AZEDEV's; Learn shows it only in the "by AZEDEV" line, as the design system asks of products.
export const LEARN_MARK_SVG = (size = 32) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}">
    <rect width="32" height="32" rx="8" fill="#efe6d4"/>
    <path d="M9 23c5 0 7-2 7-7s2-7 7-7" fill="none" stroke="#15120e" stroke-width="2" stroke-linecap="round" stroke-dasharray="0.1 3.6" opacity="0.9"/>
    <circle cx="9" cy="23" r="2.4" fill="#15120e"/>
    <circle cx="16" cy="16" r="2.4" fill="#15120e"/>
    <circle cx="23" cy="9" r="3.6" fill="none" stroke="#15120e" stroke-width="2"/>
    <circle cx="23" cy="9" r="1.2" fill="#15120e"/>
</svg>`;

// Inline mark for the interface (decorative: the wordmark next to it names the product).
export const LearnMark = (size = 24) => LEARN_MARK_SVG(size).replace('<svg ', '<svg aria-hidden="true" focusable="false" class="shrink-0" ');
