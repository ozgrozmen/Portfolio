/* ------------------------------------------------------------------
   Özgür Özmen portfolyo sitesi
   Fotoğraf: public/profil.jpg dosyasına koy (sitede "/profil.jpg" olarak okunur).
   İçerik: aşağıdaki sabitlerden değiştirilir.
------------------------------------------------------------------- */

const PROFILE = {
  name: "Özgür Özmen",
  role: "Bilgisayar mühendisi",
  intro:
    "Python ile veri analizi ve makine öğrenimi, .NET ile gerçek zamanlı veri akışı üzerine çalışıyorum.",
  email: "ozgrozmen7@gmail.com",
  phone: "0 (553) 285 51 77",
  phoneHref: "tel:+905532855177",
  github: "https://github.com/ozgrozmen",
  location: "Muratpaşa, Antalya",
  about: [
    "Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği mezunuyum. Yapay zeka ve veri bilimi alanında çalışmalar yürütmekte olup, Python ekosisteminde veri ön işleme, veri analizi ve makine öğrenimi modelleme süreçlerinde pratik projeler geliştiriyorum.",
    "Eğitim ve staj süreçlerimde .NET, C# mimarileri, Python, web teknolojileri ve PostgreSQL ilişkisel veritabanları üzerinde uzmanlaştım. Elektrikli araç teknolojilerinde MQTT tabanlı gerçek zamanlı veri akışı ve telemetri sistemleri deneyimine sahibim.",
    "Analitik problem çözme yetkinliğine ve yüksek takım çalışması uyumuna sahip bir mühendis olarak teknik birikimimi kurumsal hedeflere aktarmayı amaçlıyorum.",
  ],
};

const PROJECTS = [
  {
    id: "hizlisepet",
    title: "HizliSepet",
    kind: "Modern e-ticaret platformu",
    status: "Canlı",
    text: "React ve Mantine UI mimarisi üzerinde inşa edilen HızlıSepet; yüksek performanslı, akıcı ve kullanıcı odaklı bir modern e-ticaret deneyimi sunar. Veri yönetiminde Supabase (PostgreSQL) ile güvenli ve ölçeklenebilir bir altyapı kurgulanmış; müşteri etkileşimini ve satış dönüşümünü artırmak amacıyla sisteme yapay zeka destekli interaktif bir sohbet robotu (chat-bot) entegre edilmiştir.",
    tags: ["React", "Mantine UI", "Supabase", "Chat-bot"],
    href: "", // Canlı site adresini buraya yaz, örn. "https://hizlisepet.com"
    linkLabel: "Siteyi aç",
    art: "shop",
  },
  {
    id: "ml",
    title: "Veri analizi ve makine öğrenimi çalışmaları",
    kind: "Kişisel Ar-Ge, açık kaynak",
    status: "",
    text: "Keşifçi veri analizi, eksik ve aykırı veri temizleme ve özellik mühendisliği pipeline'ları geliştirdim. Farklı veri setlerinde sınıflandırma ve regresyon modelleri eğitip doğruluk ve hata metrikleriyle başarımı iyileştirdim.",
    tags: ["Python", "EDA", "Sınıflandırma", "Regresyon"],
    href: "https://github.com/ozgrozmen",
    linkLabel: "GitHub'da incele",
    art: "ml",
  },
];

const EXPERIENCE = [
  {
    date: "Aralık 2025 – Ocak 2026",
    title: "Yazılım stajyeri",
    org: "IMECAR, Antalya",
    points: [
      "Elektrikli araçlar için gerçek zamanlı telemetri ve veri akış mimarileri üzerinde çalıştım.",
      "Python ile ürettiğim sensör simülasyon verilerini düşük gecikmeli MQTT protokolüyle sisteme akıttım.",
      "Verileri .NET backend'inde karşılayıp PostgreSQL'de sakladım; uçtan uca IoT haberleşme altyapısının optimizasyonuna katıldım.",
    ],
    flow: ["Python sensör simülasyonu", "MQTT", ".NET backend", "PostgreSQL"],
  },
  {
    date: "Eylül 2025 – Ekim 2025",
    title: "Donanım stajyeri",
    org: "EfeTechnik, Muratpaşa",
    points: [
      "G20 Zirvesi, LDC5 Konferansı ve Dünya İnsani Zirvesi için yürütülen IT ve ağ altyapı çalışmalarına operasyonel ve teknik destek verdim.",
      "Kurumsal ağ bileşenlerinin kurulumunda, periyodik donanım bakımında ve hata ayıklamada yer aldım.",
    ],
  },
];

const EDUCATION = [
  { date: "2021 – 2025", title: "Lisans, Bilgisayar Mühendisliği", org: "Süleyman Demirel Üniversitesi" },
  { date: "Sertifika", title: "AI4Future temel seviye", org: "IBM ile Kodluyoruz" },
  { date: "Sertifika", title: "Mobil Uygulama Geliştirme Atölyesi", org: "Kodluyoruz" },
];

const SKILLS = [
  ["Yapay zeka ve veri bilimi", "Makine öğrenimi, veri ön işleme ve temizleme, keşifçi veri analizi, model değerlendirme ve metrikler"],
  ["Programlama dilleri", "Python, C#, C, Java, JavaScript, SQL"],
  ["Backend ve mimari", ".NET / ASP.NET Core, MQTT, RESTful API, IoT veri entegrasyonları"],
  ["Veritabanı ve web", "PostgreSQL, Supabase, React JS, Mantine UI, HTML5, CSS3"],
  ["Diller", "İngilizce (B1), Türkçe (anadil)"],
];

/* ------------------------------------------------------------------
   Proje görselleri (SVG çizimler). İstersen gerçek ekran görüntüleriyle
   değiştir: <img src="/hizlisepet.png" alt="..." />
------------------------------------------------------------------- */

function ShopArt() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="HizliSepet arayüzünü anlatan çizim">
      <rect width="400" height="300" fill="#d9d0c1" />
      <rect x="30" y="28" width="340" height="244" fill="#eceef3" />
      <rect x="30" y="28" width="340" height="28" fill="#1a1d33" />
      {[46, 60, 74].map((x) => <circle key={x} cx={x} cy="42" r="4" fill="#eceef3" />)}
      <rect x="250" y="37" width="100" height="10" fill="#3a3f66" />
      {[48, 148, 248].map((x, i) => (
        <g key={x}>
          <rect x={x} y="74" width="84" height="72" fill={["#c7cfe8", "#d9d0c1", "#bfd0c6"][i]} />
          <rect x={x} y="154" width="60" height="6" fill="#1a1d33" />
          <rect x={x} y="166" width="36" height="6" fill="#8b90a8" />
          <rect x={x} y="180" width="84" height="18" fill="#2b45f5" />
        </g>
      ))}
      <rect x="262" y="214" width="96" height="44" fill="#1a1d33" />
      <polygon points="330,258 346,258 346,272" fill="#1a1d33" />
      {[284, 310, 336].map((x) => <circle key={x} cx={x} cy="236" r="5" fill="#eceef3" />)}
    </svg>
  );
}

function MlArt() {
  const pts = Array.from({ length: 30 }, (_, i) => [48 + i * 10.5, 240 - i * 5.4 + (((i * 37) % 13) - 6) * 4.5]);
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Regresyon doğrusu ve veri noktalarını gösteren çizim">
      <rect width="400" height="300" fill="#1a1d33" />
      <path d="M40 40V260H372" stroke="#eceef3" strokeOpacity=".4" fill="none" strokeWidth="2" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.5" fill={i % 9 === 4 ? "#d9d0c1" : "#eceef3"} />
      ))}
      <line x1="48" y1="240" x2="352" y2="83" stroke="#7d8dff" strokeWidth="4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */

export default function App() {
  return (
    <>
      <style>{css}</style>

      <header className="top">
        <a href="#basla" className="brand">{PROFILE.name}</a>
        <nav aria-label="Ana menü">
          <a href="#basla">Hakkımda</a>
          <a href="#projeler">Projeler</a>
          <a href="#deneyim">Deneyim</a>
          <a href="#iletisim">İletişim</a>
        </nav>
      </header>

      <main id="basla">
        <section className="hero">
          <div className="hero-top">
            <div className="hero-media">
              <img className="hero-photo" src="/profil.jpg" alt={`${PROFILE.name} portresi`} width="1000" height="1235" />
              <div className="hero-card">
                <strong>Süleyman Demirel Üniversitesi</strong>
                <span>Bilgisayar Mühendisliği, 2021 – 2025</span>
              </div>
            </div>
            <div className="hero-text">
              <h1>
                {PROFILE.name.split(" ").map((w) => (
                  <span key={w}>{w}</span>
                ))}
              </h1>
              <p className="hero-role">{PROFILE.role}</p>
              <div className="hero-about">
                {PROFILE.about.map((t) => (
                  <p key={t} className="lead">{t}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-skills">
            <h3>Yetkinlikler</h3>
            <dl className="skills">
              {SKILLS.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="projeler" className="block">
          <h2>Projeler</h2>
          <div className="projects">
            {PROJECTS.map((p) => (
              <article key={p.id} className="proj">
                <div className="art">{p.art === "shop" ? <ShopArt /> : <MlArt />}</div>
                <div className="proj-body">
                  <p className="kind">
                    {p.kind}
                    {p.status && <span className="badge">{p.status}</span>}
                  </p>
                  <h3>{p.title}</h3>
                  <p className="lead">{p.text}</p>
                  <ul className="tags">
                    {p.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  {p.href && (
                    <a className="btn" href={p.href} target="_blank" rel="noreferrer">{p.linkLabel}</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="deneyim" className="block">
          <h2>Deneyim</h2>
          <ul className="rows">
            {EXPERIENCE.map((e) => (
              <li key={e.title} className="row">
                <p className="date">{e.date}</p>
                <div>
                  <h3>{e.title}</h3>
                  <p className="org">{e.org}</p>
                  <ul className="points">
                    {e.points.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  {e.flow && (
                    <ol className="flow" aria-label="Veri akışı">
                      {e.flow.map((f) => <li key={f}>{f}</li>)}
                    </ol>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <h2 className="sub">Eğitim ve sertifikalar</h2>
          <ul className="rows">
            {EDUCATION.map((e) => (
              <li key={e.title} className="row">
                <p className="date">{e.date}</p>
                <div>
                  <h3>{e.title}</h3>
                  <p className="org">{e.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="iletisim" className="contact">
          <h2>İletişim bilgileri</h2>
          <dl className="contact-list">
            <div>
              <dt>E-posta</dt>
              <dd><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href={PROFILE.phoneHref}>{PROFILE.phone}</a></dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd><a href={PROFILE.github} target="_blank" rel="noreferrer">{PROFILE.github.replace("https://", "")}</a></dd>
            </div>
            <div>
              <dt>Konum</dt>
              <dd>{PROFILE.location}</dd>
            </div>
          </dl>
        </section>
      </main>

      <footer className="foot">© {new Date().getFullYear()} {PROFILE.name}</footer>
    </>
  );
}

/* ------------------------------------------------------------------ */

const css = `
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Newsreader:opsz,wght@6..72,400..600&display=swap");

:root{
  --chalk:#eceef3; --ink:#1a1d33; --cobalt:#2b45f5; --sand:#d9d0c1;
  --sans:"Bricolage Grotesque",system-ui,sans-serif;
  --serif:"Newsreader",Georgia,serif;
  --pad:clamp(1.25rem,4vw,3.5rem);
  /* Geniş ekranlarda içerik en fazla 76rem genişliğinde kalır */
  --gutter:max(var(--pad),calc((100vw - 76rem) / 2));
}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{background:var(--chalk);color:var(--ink);font-family:var(--sans);line-height:1.5;-webkit-font-smoothing:antialiased;overflow-wrap:break-word}
img,svg{display:block;max-width:100%}
ul,ol{list-style:none;padding:0}
a{color:inherit}
[id]{scroll-margin-top:5rem}
:focus-visible{outline:3px solid var(--cobalt);outline-offset:3px}
h2{font-size:clamp(1.6rem,3.2vw,2.5rem);font-weight:700;letter-spacing:-.02em;line-height:1.1}
h3{font-size:clamp(1.15rem,2vw,1.35rem);font-weight:700;letter-spacing:-.01em;line-height:1.2}
.block{padding:clamp(2.5rem,6vw,4rem) var(--gutter)}
.lead{font-family:var(--serif);font-size:clamp(1.1rem,1.6vw,1.25rem);line-height:1.6;max-width:56ch}

/* Üst bar */
.top{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;align-items:center;gap:.5rem 1.5rem;
  padding:.9rem var(--gutter);background:color-mix(in srgb,var(--chalk) 88%,transparent);backdrop-filter:blur(8px)}
.brand{font-weight:700;text-decoration:none;white-space:nowrap}
.top nav{display:flex;gap:1.5rem}
.top nav a{text-decoration:none;font-size:.95rem;padding:.4rem 0;white-space:nowrap}
.top nav a:hover{color:var(--cobalt)}

/* Giriş */
.hero{padding:clamp(2rem,5vw,3.5rem) var(--gutter) clamp(2.5rem,5vw,4rem)}
.hero-top{display:flex;align-items:center;justify-content:center;gap:clamp(2rem,5vw,4.5rem)}
.hero-skills{max-width:64rem;margin:clamp(2.5rem,5vw,3.5rem) auto 0}
.hero-skills h3{margin-bottom:.9rem}
.hero h1{font-size:clamp(2.5rem,6vw,5rem);line-height:.92;font-weight:800;letter-spacing:-.04em}
.hero h1 span{display:block}
.hero h1 span:nth-child(2){color:var(--cobalt);margin-left:.4em}
.hero-role{font-size:1.15rem;font-weight:600;margin-top:1.25rem;max-width:34ch}
.hero-text{max-width:42rem}
.hero-about{margin-top:1rem}
.hero-about .lead{font-size:clamp(1rem,1.5vw,1.1rem);line-height:1.6;max-width:none;margin-top:.7rem}
.hero-media{position:relative;flex:none;padding-bottom:1.75rem}
.hero-photo{width:clamp(11rem,20vw,17rem);height:auto;aspect-ratio:1;border-radius:50%;object-fit:cover;object-position:50% 18%;background:var(--ink);box-shadow:0 0 0 6px var(--chalk),0 0 0 9px var(--cobalt);animation:wipe 1.1s cubic-bezier(.7,0,.2,1) both}
.hero-card{position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:max-content;max-width:calc(100vw - 2 * var(--pad));display:flex;flex-direction:column;gap:.15rem;text-align:center;
  background:var(--ink);color:var(--chalk);padding:.7rem 1.1rem;border:5px solid var(--chalk);animation:wipe 1.1s .35s cubic-bezier(.7,0,.2,1) both}
.hero-card span{font-size:.9rem;opacity:.8}
@keyframes wipe{from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0)}}

/* Projeler */
.projects{display:flex;flex-direction:column;gap:clamp(2.5rem,5vw,3.5rem);margin-top:2.25rem}
.proj{display:grid;grid-template-columns:1.1fr .9fr;gap:var(--pad);align-items:center}
.proj:nth-child(even) .art{order:2}
.art svg{width:100%;height:auto}
.kind{display:flex;flex-wrap:wrap;align-items:center;gap:.75rem;font-size:.95rem;opacity:.8;margin-bottom:.4rem}
.badge{background:var(--cobalt);color:var(--chalk);padding:.1rem .65rem;border-radius:999px;font-size:.85rem;font-weight:600;opacity:1}
.proj h3{font-size:clamp(1.35rem,2.6vw,2rem);margin-bottom:.8rem}
.tags{display:flex;flex-wrap:wrap;gap:.5rem;margin:1.1rem 0 1.4rem}
.tags li{border:1.5px solid var(--ink);padding:.2rem .8rem;border-radius:999px;font-size:.9rem}
.btn{display:inline-block;background:var(--ink);color:var(--chalk);padding:.75rem 1.4rem;border-radius:999px;text-decoration:none;font-weight:600}
.btn:hover{background:var(--cobalt)}

/* Deneyim ve eğitim */
.rows{margin-top:1.75rem;border-top:1.5px solid var(--ink)}
.row{display:grid;grid-template-columns:12rem 1fr;gap:1.5rem;padding:1.5rem 0;border-bottom:1px solid color-mix(in srgb,var(--ink) 25%,transparent)}
.date{font-weight:600;opacity:.75}
.org{opacity:.75;margin-top:.15rem}
.points{margin-top:.9rem;display:flex;flex-direction:column;gap:.5rem;max-width:62ch}
.points li{padding-left:1.1rem;position:relative}
.points li::before{content:"";position:absolute;left:0;top:.65em;width:.5rem;height:2px;background:var(--cobalt)}
.sub{margin-top:clamp(2.5rem,6vw,4rem)}
.flow{display:flex;flex-wrap:wrap;align-items:center;gap:.6rem 1.75rem;margin-top:1.4rem}
.flow li{position:relative;background:var(--ink);color:var(--chalk);padding:.4rem .9rem;font-size:.9rem;font-weight:600}
.flow li:nth-child(odd){background:var(--cobalt)}
.flow li + li::before{content:"";position:absolute;left:-1.75rem;top:50%;width:1.75rem;height:2px;background:var(--ink)}

/* Yetkinlikler */
.skills{border-top:1.5px solid var(--ink)}
.skills div{display:grid;grid-template-columns:minmax(10rem,15rem) 1fr;gap:1rem;padding:.9rem 0;border-bottom:1px solid color-mix(in srgb,var(--ink) 25%,transparent)}
.skills dt{font-weight:700}

/* İletişim */
.contact{background:var(--cobalt);color:var(--chalk);padding:clamp(2.25rem,5vw,3rem) var(--gutter)}
.contact-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(14rem,100%),1fr));gap:1.25rem 2rem;margin-top:1.5rem}
.contact-list dt{font-size:.9rem;opacity:.8}
.contact-list dd{font-weight:600;font-size:1.1rem;word-break:break-word}
.contact-list a:hover{text-decoration:underline;text-underline-offset:.2em}
.contact :focus-visible{outline-color:var(--chalk)}

.foot{padding:1.5rem var(--gutter);font-size:.9rem;opacity:.7}

/* Tablet (yatay) */
@media (max-width:1024px){
  .hero-top{gap:2rem}
  .proj{gap:1.75rem}
}

/* Tablet (dikey) ve altı: giriş ve projeler alt alta */
@media (max-width:900px){
  .hero-top{flex-direction:column;align-items:flex-start}
  .hero-media{align-self:center}
  .hero-photo{width:min(62vw,16rem)}
  .hero-text{max-width:none}
  .proj{grid-template-columns:1fr}
  .proj:nth-child(even) .art{order:0}
  .row{grid-template-columns:9rem 1fr}
}

/* Veri akışı kutuları alt alta */
@media (max-width:820px){
  .flow{flex-direction:column;align-items:flex-start;gap:1.1rem}
  .flow li + li::before{left:1.1rem;top:-1.1rem;width:2px;height:1.1rem}
}

/* Büyük telefon */
@media (max-width:700px){
  .row{grid-template-columns:1fr;gap:.4rem}
  .skills div{grid-template-columns:1fr;gap:.2rem}
}

/* Küçük telefon */
@media (max-width:560px){
  .top{flex-direction:column;align-items:flex-start;gap:0}
  .top nav{width:100%;overflow-x:auto;gap:1.25rem}
  .contact-list{grid-template-columns:1fr}
}

@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .hero-photo,.hero-card{animation:none}
}
`;
