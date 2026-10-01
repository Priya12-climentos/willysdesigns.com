const fs = require('fs'), path = require('path');

const pages = fs.existsSync('pages')
  ? fs.readdirSync('pages').filter(f => f.endsWith('.html')).map(f => 'pages/' + f) : [];
const htmlFiles = ['index.html', 'testing.html', ...pages].filter(f => fs.existsSync(f));

const re = /(?:https?:)?\/\/((?:xinterio-demo\.pbminfotech\.com\/demo4\/wp-(?:content|includes)|maxcdn\.bootstrapcdn\.com)\/[^\s"'()<>?#]+)/g;
const seen = new Set();

async function grab(hostPath) {
  if (seen.has(hostPath)) return;
  seen.add(hostPath);
  const dest = path.join('assets', 'vendor', ...hostPath.split('/'));
  if (!fs.existsSync(dest)) {
    const res = await fetch('https://' + hostPath);
    if (!res.ok) return console.log('FAILED', res.status, hostPath);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    console.log('saved ', hostPath);
  }
  if (dest.endsWith('.css')) {
    const css = fs.readFileSync(dest, 'utf8');
    for (const m of css.matchAll(/url\(\s*['"]?(?!data:|https?:|\/\/)([^'")?#]+)/g)) {
      const resolved = new URL(m[1], 'https://' + hostPath).href.replace('https://', '');
      await grab(resolved);
    }
  }
}

(async () => {
  for (const f of htmlFiles) {
    const txt = fs.readFileSync(f, 'utf8');
    for (const m of txt.matchAll(re)) await grab(m[1]);
  }
  console.log('done');
})();