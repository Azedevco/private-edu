// AZEDEV Learn's drawing: the learning route. One road through five stations (roadmap, resources, practice, project,
// contribution) that ends at AZEDEV's gear with </>. Pure geometry, no DOM: the particle drawing reads it.
// Drawing space: W × H.
export const W = 720;
export const H = 520;

// Station centres, bottom-left to top-right. The fifth is the gear.
export const STATIONS = [[92, 438], [256, 410], [300, 272], [470, 236], [590, 112]];

// AZEDEV's mark (azedevhub components/site/art/geometry.js), scaled down around the last station.
const MARK_R = { tip: 228, root: 186, rim: 150, inner: 118 };
const MARK_CODE = [
    [[262, 258], [224, 300], [262, 342]],
    [[338, 258], [376, 300], [338, 342]],
    [[314, 244], [286, 356]]
];
export const GEAR_SCALE = 0.3;
export const GEAR_C = STATIONS[4];
export const GEAR_TIP = MARK_R.tip * GEAR_SCALE;
export const STATION_R = 18;

const polarAt = ([cx, cy], r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];

export const gearOutline = () => {
    const step = Math.PI / 4;
    return Array.from({ length: 8 }, (_, i) => {
        const a = i * step - Math.PI / 2;
        return [[MARK_R.root, -0.3], [MARK_R.tip, -0.17], [MARK_R.tip, 0.17], [MARK_R.root, 0.3]]
            .map(([r, o]) => polarAt(GEAR_C, r * GEAR_SCALE, a + step * o));
    }).flat();
};
export const gearRim = () => MARK_R.rim * GEAR_SCALE;
export const gearCode = () => MARK_CODE.map((line) => line.map(([x, y]) => [GEAR_C[0] + (x - 300) * GEAR_SCALE, GEAR_C[1] + (y - 300) * GEAR_SCALE]));

// Catmull-Rom through the stations, sampled densely, then cut where it enters the gear.
const catmull = (p0, p1, p2, p3, t) => {
    const t2 = t * t;
    const t3 = t2 * t;
    return [0, 1].map((k) => 0.5 * ((2 * p1[k]) + (-p0[k] + p2[k]) * t + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t2 + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * t3));
};

let cached = null;
// The road as a polyline with cumulative lengths, and each station's position along it (0..1).
export const road = () => {
    if (cached) return cached;
    const s = STATIONS;
    const ext = [[2 * s[0][0] - s[1][0], 2 * s[0][1] - s[1][1]], ...s, [2 * s[4][0] - s[3][0], 2 * s[4][1] - s[3][1]]];
    const pts = [];
    const stationIdx = [0];
    for (let i = 1; i < ext.length - 2; i++) {
        for (let k = 0; k < 60; k++) pts.push(catmull(ext[i - 1], ext[i], ext[i + 1], ext[i + 2], k / 60));
        stationIdx.push(pts.length);
    }
    pts.push(s[4]);
    // Stop at the gear's teeth: the road arrives at AZEDEV, it does not run through it.
    const end = pts.findIndex((p) => Math.hypot(p[0] - GEAR_C[0], p[1] - GEAR_C[1]) < GEAR_TIP + 10);
    const lens = [0];
    for (let i = 1; i < pts.length; i++) lens.push(lens[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    const endLen = lens[end];
    cached = {
        points: pts.slice(0, end + 1),
        lens: lens.slice(0, end + 1),
        total: endLen,
        stops: stationIdx.slice(0, 4).map((i) => lens[i] / endLen).concat(1)
    };
    return cached;
};

// Point at fraction u (0..1) of the road's length.
export const roadAt = (u) => {
    const { points, lens, total } = road();
    const target = Math.max(0, Math.min(1, u)) * total;
    let lo = 0;
    let hi = lens.length - 1;
    while (hi - lo > 1) {
        const mid = (lo + hi) >> 1;
        if (lens[mid] < target) lo = mid; else hi = mid;
    }
    const span = lens[hi] - lens[lo] || 1;
    const f = (target - lens[lo]) / span;
    return [points[lo][0] + (points[hi][0] - points[lo][0]) * f, points[lo][1] + (points[hi][1] - points[lo][1]) * f];
};

// Evenly spaced samples along the road.
export const roadSamples = (step) => {
    const { total } = road();
    const n = Math.round(total / step);
    return Array.from({ length: n + 1 }, (_, i) => roadAt(i / n));
};
