const fs = require("fs");

const html = fs.readFileSync("out/en/index.html", "utf8");
const m = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!m) {
  console.log("NO JSON-LD FOUND");
  process.exit(1);
}
const data = JSON.parse(m[1]); // throws if invalid
console.log("JSON-LD valid. Types:", data["@graph"].map((n) => n["@type"]).join(", "));
const person = data["@graph"].find((n) => n["@type"] === "Person");
console.log("jobTitle:", person.jobTitle);
console.log("sameAs:", person.sameAs.join(" | "));
const serialized = JSON.stringify(data);
console.log("all-URLs-production:", serialized.includes("https://aisalotfi.ir") && !serialized.includes("http://"));

// Check every HTML file for JSON-LD validity + lang/dir attributes
const files = [];
function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = `${d}/${f}`;
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".html")) files.push(p);
  }
}
walk("out");
let bad = 0;
for (const f of files) {
  const c = fs.readFileSync(f, "utf8");
  const ld = c.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (ld) {
    try { JSON.parse(ld[1]); } catch (e) { console.log("INVALID JSON-LD in", f); bad++; }
  }
  const htmlTag = c.match(/<html[^>]*>/)[0];
  const lang = (htmlTag.match(/lang="([^"]+)"/) || [])[1];
  const dir = (htmlTag.match(/dir="([^"]+)"/) || [])[1];
  const expected = f.includes("/fa") || f.startsWith("out/fa") || f.includes("\\fa")
    ? { lang: "fa-IR", dir: "rtl" }
    : f.includes("de") ? { lang: "de", dir: "ltr" } : null;
  if (f.includes("/fa") || f.startsWith("out/fa") || f.includes("\\fa")) {
    if (lang !== "fa-IR" || dir !== "rtl") { console.log("BAD FA attrs in", f, lang, dir); bad++; }
  }
}
console.log(`checked ${files.length} HTML files, problems: ${bad}`);
