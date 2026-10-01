// AZEDEV Learn - a small, safe Markdown reader for Konspektlər: headings, paragraphs, fenced code, tables, lists, bold,
// inline code and http(s) links. Everything is escaped first; only the tags written here come out, so community
// uploads render safely too.
const escape = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const inline = (text) => escape(text)
    .replace(/`([^`]+)`/g, '<code class="rounded bg-alpha-6 px-1.5 py-0.5 font-mono text-[0.9em] text-text">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-medium text-text">$1</strong>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-text underline decoration-alpha-25 underline-offset-4 hover:decoration-text">$1</a>');

export const renderMarkdown = (src = '') => {
    const lines = String(src).replace(/\r\n/g, '\n').split('\n');
    const out = [];
    let i = 0;
    const para = [];
    const flush = () => {
        if (para.length) out.push(`<p class="mt-3 text-[15px] leading-relaxed text-text-soft">${inline(para.join(' '))}</p>`);
        para.length = 0;
    };
    while (i < lines.length) {
        const line = lines[i];
        const fence = line.match(/^```(\w*)/);
        if (fence) {
            flush();
            const code = [];
            i++;
            while (i < lines.length && !lines[i].startsWith('```')) code.push(lines[i++]);
            i++;
            out.push(`<div class="az-code mt-3"><pre class="overflow-x-auto !text-[13px] !leading-[1.65]"><code>${escape(code.join('\n'))}</code></pre></div>`);
            continue;
        }
        const h = line.match(/^(#{1,3})\s+(.*)/);
        if (h) {
            flush();
            const level = h[1].length;
            out.push(level === 1
                ? `<h2 class="ln-h1 mt-2 !text-[26px]">${inline(h[2])}</h2>`
                : level === 2
                    ? `<h3 class="t-title mt-8 border-t border-line pt-5">${inline(h[2])}</h3>`
                    : `<h4 class="t-item mt-5">${inline(h[2])}</h4>`);
            i++;
            continue;
        }
        if (/^\|.*\|\s*$/.test(line)) {
            flush();
            const rows = [];
            while (i < lines.length && /^\|.*\|\s*$/.test(lines[i])) rows.push(lines[i++]);
            const cells = (r) => r.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
            const body = rows.filter((r) => !/^\|[\s:|-]+\|\s*$/.test(r));
            const [head, ...rest] = body;
            out.push(`<div class="az-table-wrap mt-3"><table class="az-table"><thead><tr>${cells(head).map((c) => `<th scope="col">${inline(c)}</th>`).join('')}</tr></thead><tbody>${rest.map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
            continue;
        }
        const bullet = line.match(/^\s*[-*]\s+(.*)/);
        const numbered = line.match(/^\s*\d+[.)]\s+(.*)/);
        if (bullet || numbered) {
            flush();
            const ordered = Boolean(numbered);
            const items = [];
            while (i < lines.length) {
                const m = ordered ? lines[i].match(/^\s*\d+[.)]\s+(.*)/) : lines[i].match(/^\s*[-*]\s+(.*)/);
                if (!m) break;
                items.push(m[1]);
                i++;
            }
            out.push(`<${ordered ? 'ol' : 'ul'} class="mt-3 grid gap-1.5 pl-5 text-[15px] leading-relaxed text-text-soft ${ordered ? 'list-decimal' : 'list-disc'} marker:text-text-mute">${items.map((t) => `<li>${inline(t)}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>`);
            continue;
        }
        if (!line.trim()) { flush(); i++; continue; }
        para.push(line.trim());
        i++;
    }
    flush();
    return out.join('\n');
};

// Reading time in minutes (about 180 words a minute, code counts too).
export const readingMinutes = (src = '') => Math.max(1, Math.round(String(src).split(/\s+/).filter(Boolean).length / 180));
