// The route drawing as markup: the particle canvas plus the station names over it (in the drawing's coordinates).
// Station names use the learner's words: yol, resurs, praktika, layihə, AZEDEV.
import { W, H, STATIONS, GEAR_TIP } from './route.js'

const LABELS = ['Yol', 'Resurs', 'Praktika', 'Layihə', 'AZEDEV'];
const AT = [
    { at: [STATIONS[0][0] - 18, STATIONS[0][1] + 30], align: '' },
    { at: [STATIONS[1][0], STATIONS[1][1] + 30], align: '-translate-x-1/2' },
    { at: [STATIONS[2][0] - 32, STATIONS[2][1]], align: '-translate-x-full -translate-y-1/2' },
    { at: [STATIONS[3][0], STATIONS[3][1] + 30], align: '-translate-x-1/2' },
    { at: [STATIONS[4][0], STATIONS[4][1] + GEAR_TIP + 16], align: '-translate-x-1/2' }
];

// RouteArt({ cls }) → a decorative block; hydrateArt() in art/particles.js brings it to life after render.
export const RouteArt = ({ cls = '' } = {}) => `
    <div class="relative w-full ${cls}" aria-hidden="true">
        <canvas data-art="route" class="block aspect-[720/520] w-full touch-none"></canvas>
        ${LABELS.map((label, i) => `
        <span data-station="${i}" class="az-station absolute whitespace-nowrap ${AT[i].align}" style="left:${(AT[i].at[0] / W) * 100}%;top:${(AT[i].at[1] / H) * 100}%"><span class="text-text-dim">0${i + 1}</span> ${label}</span>`).join('')}
    </div>`;
