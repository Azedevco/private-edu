// Çarx: AZEDEV Learn's small companion. It is AZEDEV's own gear (the same eight teeth as the mark) drawn as a hairline,
// with a face where the </> sits. It appears where a person would help: hints, the introduction, empty states and
// finished paths. Moods: 'hello' (default), 'think' (a hint or a question), 'happy' (something done).
// One colour (currentColor), no fills beyond the eyes; blinking stops under reduced motion (global CSS rule).
const C = 32;
const polar = (r, a) => [C + r * Math.cos(a), C + r * Math.sin(a)];
const gear = (() => {
    const step = Math.PI / 4;
    const pts = [];
    for (let i = 0; i < 8; i++) {
        const a = i * step - Math.PI / 2;
        [[22.5, -0.3], [28, -0.17], [28, 0.17], [22.5, 0.3]].forEach(([r, o]) => pts.push(polar(r, a + step * o)));
    }
    return `M${pts.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join('L')}Z`;
})();

const FACES = {
    hello: '<g class="ln-mascot__eyes"><circle cx="26.5" cy="30" r="1.9"/><circle cx="37.5" cy="30" r="1.9"/></g><path d="M27.5 36.5q4.5 3.6 9 0" fill="none"/>',
    think: '<g class="ln-mascot__eyes"><circle cx="27" cy="29" r="1.9"/><circle cx="38" cy="29" r="1.9"/></g><path d="M29.5 37.5h5" fill="none"/>',
    happy: '<path d="M24.5 30.5q2-2.6 4 0M35.5 30.5q2-2.6 4 0" fill="none"/><path d="M26.5 35q5.5 5 11 0" fill="none"/>'
};

// Mascot({ mood: 'happy', cls: 'size-12', label: '' }) → an inline SVG. Decorative unless a label is given.
export const Mascot = ({ mood = 'hello', cls = 'size-10', label = '' } = {}) => `
    <svg viewBox="0 0 64 64" class="ln-mascot ${cls}" ${label ? `role="img" aria-label="${label}"` : 'aria-hidden="true" focusable="false"'}
        fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="${gear}" stroke-opacity="0.9"/>
        <circle cx="32" cy="32" r="16.5" stroke-opacity="0.45"/>
        <g fill="currentColor" stroke="currentColor">${FACES[mood] || FACES.hello}</g>
    </svg>`;
