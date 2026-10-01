// The learning route in particles (azedevhub's technique, components/site/art/Particles.jsx): dots sit on
// the route (art/route.js) on a faint map grid; the gear at its end turns; a learner travels the road, lights each
// station on arrival and reaches AZEDEV's </>. The pointer pushes dots away. Decorative: the text beside it carries the
// meaning. Runs only while visible; reduced motion draws the finished route once.
import { W, H, STATIONS, STATION_R, GEAR_C, road, roadAt, roadSamples, gearOutline, gearRim, gearCode } from './route.js';

const sampleLine = (pts, step, closed) => {
    const out = [];
    const list = closed ? [...pts, pts[0]] : pts;
    for (let i = 0; i < list.length - 1; i++) {
        const [x1, y1] = list[i];
        const [x2, y2] = list[i + 1];
        const n = Math.max(1, Math.round(Math.hypot(x2 - x1, y2 - y1) / step));
        for (let k = 0; k < n; k++) out.push([x1 + ((x2 - x1) * k) / n, y1 + ((y2 - y1) * k) / n]);
    }
    if (!closed) out.push(list[list.length - 1]);
    return out;
};
const ring = ([cx, cy], r, step) => {
    const n = Math.max(6, Math.round((2 * Math.PI * r) / step));
    return Array.from({ length: n }, (_, i) => [cx + r * Math.cos((i / n) * 2 * Math.PI), cy + r * Math.sin((i / n) * 2 * Math.PI)]);
};

// Each dot: base position, alpha, size and a role: grid, road, ring (+ station index), core (+ index), gear (turns),
// rim (turns back), code (still, bright).
const buildDots = () => {
    const dots = [];
    const add = (pts, a, size, role, idx = -1) => pts.forEach(([x, y]) => dots.push({ bx: x, by: y, a, size, role, idx }));
    const grid = [];
    for (let x = 24; x < W; x += 48) for (let y = 20; y < H; y += 48) grid.push([x, y]);
    add(grid, 0.12, 2.2, 'grid');
    const near = (p) => STATIONS.some(([sx, sy]) => Math.hypot(p[0] - sx, p[1] - sy) < STATION_R + 4);
    add(roadSamples(9).filter((p) => !near(p)), 0.45, 2.8, 'road');
    STATIONS.slice(0, 4).forEach((s, i) => {
        add(ring(s, STATION_R, 6.2), 0.5, 2.8, 'ring', i);
        add([s], 0.6, 6, 'core', i);
    });
    add(sampleLine(gearOutline(), 6, true), 0.8, 2.8, 'gear');
    add(ring(GEAR_C, gearRim(), 7), 0.45, 2.6, 'rim');
    add(gearCode().flatMap((p) => sampleLine(p, 3.6, false)), 1, 3.6, 'code');
    return dots;
};

// The learner's timetable: travel between stops, pause at each station, hold at the gear, then start again.
const MOVE = 1.35;
const PAUSE = 0.55;
const HOLD = 1.8;
const LEG = MOVE + PAUSE;
const CYCLE = 4 * LEG + HOLD;
const ease = (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);
const learnerAt = (time) => {
    const { stops } = road();
    const t = time % CYCLE;
    const leg = Math.min(3, Math.floor(t / LEG));
    const inLeg = t - leg * LEG;
    if (t >= 4 * LEG) return { u: 1, reached: 4 };
    const u = stops[leg] + (stops[leg + 1] - stops[leg]) * ease(Math.min(1, inLeg / MOVE));
    return { u, reached: inLeg >= MOVE ? leg + 1 : leg };
};

let sys = null;

const create = () => ({
    dots: buildDots().map((d) => {
        return { ...d, x: d.bx, y: d.by, vx: 0, vy: 0, seed: Math.random() * 6.28 };
    }),
    t: 0, angle: 0, lit: -1, el: null, ctx: null, scale: 1, running: false, frame: 0, last: 0,
    visible: false, ready: false, pointer: { x: -9999, y: -9999 }, cleanup: null
});

const labels = () => sys.el.parentElement?.querySelectorAll('[data-station]') || [];

const draw = (reduce) => {
    const { ctx, dots, scale, pointer } = sys;
    ctx.clearRect(0, 0, sys.el.width, sys.el.height);
    const cos = Math.cos(sys.angle), sin = Math.sin(sys.angle);
    const cosB = Math.cos(-sys.angle * 0.6), sinB = Math.sin(-sys.angle * 0.6);
    const learner = reduce ? { u: 1, reached: 4 } : learnerAt(sys.t);
    if (learner.reached !== sys.lit) {
        sys.lit = learner.reached;
        labels().forEach((el) => el.toggleAttribute('data-lit', Number(el.dataset.station) <= sys.lit));
    }
    for (const p of dots) {
        let tx = p.bx, ty = p.by;
        if (p.role === 'gear') {
            tx = GEAR_C[0] + (p.bx - GEAR_C[0]) * cos - (p.by - GEAR_C[1]) * sin;
            ty = GEAR_C[1] + (p.bx - GEAR_C[0]) * sin + (p.by - GEAR_C[1]) * cos;
        } else if (p.role === 'rim') {
            tx = GEAR_C[0] + (p.bx - GEAR_C[0]) * cosB - (p.by - GEAR_C[1]) * sinB;
            ty = GEAR_C[1] + (p.bx - GEAR_C[0]) * sinB + (p.by - GEAR_C[1]) * cosB;
        }
        if (!reduce) {
            tx += Math.sin(sys.t * 0.8 + p.seed) * 0.7;
            ty += Math.cos(sys.t * 0.7 + p.seed) * 0.7;
            const dx = p.x - pointer.x, dy = p.y - pointer.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 4900) {
                const force = (1 - d2 / 4900) * 6;
                const d = Math.sqrt(d2) || 1;
                p.vx += (dx / d) * force;
                p.vy += (dy / d) * force;
            }
            p.vx = (p.vx + (tx - p.x) * 0.022) * 0.87;
            p.vy = (p.vy + (ty - p.y) * 0.022) * 0.87;
            p.x += p.vx;
            p.y += p.vy;
        } else {
            p.x = tx;
            p.y = ty;
        }
        const on = (p.role === 'ring' || p.role === 'core') && p.idx <= sys.lit;
        const a = on ? 1 : p.role === 'code' && sys.lit === 4 ? 1 : p.a * (p.role === 'code' ? 0.8 : 1);
        // Reached stations and the goal are full paper; the rest of the drawing stays a dimmer warm grey.
        ctx.fillStyle = on || (p.role === 'code' && sys.lit === 4) ? `rgba(239,230,212,${a})` : `rgba(201,193,179,${a})`;
        const s = (on && p.role === 'core' ? p.size + 2 : p.size) * scale;
        ctx.fillRect(p.x * scale - s / 2, p.y * scale - s / 2, s, s);
    }
    // The learner: a bright head and a short fading trail along the road.
    if (!reduce && learner.u < 1) {
        for (let k = 7; k >= 0; k--) {
            const [x, y] = roadAt(learner.u - k * 0.0065);
            ctx.fillStyle = `rgba(239,230,212,${k === 0 ? 1 : 0.5 - k * 0.055})`;
            const s = (k === 0 ? 7 : 4) * scale;
            ctx.fillRect(x * scale - s / 2, y * scale - s / 2, s, s);
        }
    }
};

const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = sys.el.clientWidth;
    sys.el.width = Math.round(w * dpr);
    sys.el.height = Math.round(w * (H / W) * dpr);
    sys.scale = (w * dpr) / W;
};

// Attach to the canvas of the current render. The app re-renders with innerHTML, so the dots live on between renders
// and a new canvas continues the drawing instead of flying in again.
export const mountRoute = (el) => {
    if (!el || (sys && sys.el === el)) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!sys) sys = create();
    sys.cleanup?.();
    sys.el = el;
    sys.ctx = el.getContext('2d');
    sys.lit = -2;
    resize();
    draw(true);

    const loop = (now) => {
        if (!el.isConnected) { stop(); sys.cleanup?.(); return; }
        const dt = sys.last ? Math.min((now - sys.last) / 1000, 0.05) : 1 / 60;
        sys.last = now;
        sys.t += dt;
        sys.angle += dt * 0.12;
        draw(false);
        sys.frame = requestAnimationFrame(loop);
    };
    const start = () => {
        if (sys.running || reduce) return;
        sys.running = true;
        sys.frame = requestAnimationFrame(loop);
    };
    const stop = () => {
        sys.running = false;
        sys.last = 0;
        cancelAnimationFrame(sys.frame);
    };
    const begin = () => {
        sys.ready = true;
        if (reduce) draw(true);
        else if (sys.visible && !document.hidden) start();
    };

    const io = new IntersectionObserver(([entry]) => {
        sys.visible = entry.isIntersecting;
        if (sys.visible && sys.ready && !document.hidden) start(); else stop();
    }, { threshold: 0.05 });
    io.observe(el);
    const ro = new ResizeObserver(() => { resize(); if (sys.ready && !sys.running) draw(reduce); });
    ro.observe(el);
    const onVisibility = () => (document.hidden || !sys.ready || !sys.visible ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);
    const onMove = (e) => {
        sys.pointer.x = (e.offsetX / el.clientWidth) * W;
        sys.pointer.y = (e.offsetY / el.clientHeight) * H;
    };
    const onLeave = () => { sys.pointer.x = sys.pointer.y = -9999; };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);

    sys.cleanup = () => {
        stop();
        io.disconnect();
        ro.disconnect();
        document.removeEventListener('visibilitychange', onVisibility);
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
        sys.cleanup = null;
    };

    // The first flight waits until the page has loaded and the browser is idle, so it never competes with the content.
    if (sys.ready) { draw(reduce); if (!reduce) start(); return; }
    const idle = () => (window.requestIdleCallback ? window.requestIdleCallback(begin, { timeout: 1200 }) : setTimeout(begin, 200));
    if (document.readyState === 'complete') idle(); else window.addEventListener('load', idle, { once: true });
};

// Called after every render: attach to whatever route canvas the new markup contains (there is at most one on screen).
export const hydrateArt = () => {
    // An open dialog (the onboarding welcome) takes the drawing; otherwise the page's own canvas.
    const canvas = document.querySelector('[role="dialog"] canvas[data-art="route"]') || document.querySelector('canvas[data-art="route"]');
    if (canvas) mountRoute(canvas);
    else if (sys?.cleanup) sys.cleanup();
};
