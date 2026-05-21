export const metadata = {
  title: "Bello Bar + Kitchen — Downtown Tampa",
  description:
    "New York lounge energy. Caribbean & Latin soul. Late-night cocktails, DJ Brunch, and a room that earns its reputation. 903 N Franklin St, Tampa FL.",
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Jost:wght@300;400;500;600&display=swap');

  .bello *, .bello *::before, .bello *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .bello {
    --bg:          #080604;
    --bg-2:        #0E0B07;
    --bg-3:        #181410;
    --bg-card:     #1E1913;
    --text:        #F0E5D0;
    --text-muted:  #9A8A72;
    --text-faint:  #5A4E40;
    --crimson:     #B52228;
    --crimson-d:   #8C1A1E;
    --gold:        #C8A040;
    --gold-l:      #E0BA60;
    --gold-d:      #7A5F1E;
    --border:      rgba(200,160,64,.18);
    --border-f:    rgba(200,160,64,.07);
    --serif: 'Cormorant Garamond', Georgia, serif;
    --sans:  'Jost', system-ui, sans-serif;

    font-family: var(--sans);
    background: var(--bg);
    color: var(--text);
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  .bello img { display: block; max-width: 100%; }
  .bello a   { text-decoration: none; color: inherit; }

  /* NAV */
  .bello .b-nav {
    position: fixed;
    inset: 0 0 auto;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 4rem;
    background: linear-gradient(to bottom, rgba(8,6,4,.96) 0%, rgba(8,6,4,0) 100%);
  }
  .bello .b-nav-logo {
    font-family: var(--serif);
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: .22em;
    color: var(--gold);
    text-transform: uppercase;
  }
  .bello .b-nav-links { display: flex; gap: 2.75rem; list-style: none; }
  .bello .b-nav-links a {
    font-size: .72rem; font-weight: 500; letter-spacing: .16em;
    text-transform: uppercase; color: var(--text-muted); transition: color .2s;
  }
  .bello .b-nav-links a:hover { color: var(--text); }
  .bello .b-nav-cta {
    display: inline-flex; align-items: center;
    padding: .6rem 1.5rem; background: var(--crimson); border-radius: 100px;
    font-size: .72rem; font-weight: 500; letter-spacing: .1em;
    text-transform: uppercase; color: var(--text); transition: background .2s, transform .15s;
  }
  .bello .b-nav-cta:hover { background: var(--crimson-d); transform: scale(1.02); }

  /* HERO */
  .bello .b-hero {
    position: relative; min-height: 100vh;
    display: flex; flex-direction: column;
    justify-content: flex-end; padding: 0 4rem 5.5rem; overflow: hidden;
  }
  .bello .b-hero-bg {
    position: absolute; inset: 0;
    background-image: url('https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1920&q=85');
    background-size: cover; background-position: center 40%; background-color: #1A1008;
  }
  .bello .b-hero-bg::after {
    content: ''; position: absolute; inset: 0;
    background:
      linear-gradient(to top, rgba(8,6,4,1) 0%, rgba(8,6,4,.82) 35%, rgba(8,6,4,.35) 65%, rgba(8,6,4,.55) 100%),
      radial-gradient(ellipse at 75% 55%, rgba(181,34,40,.14) 0%, transparent 55%);
  }
  .bello .b-hero-eyebrow {
    position: relative; font-size: .72rem; font-weight: 400;
    letter-spacing: .22em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 1.5rem;
  }
  .bello .b-hero-headline {
    position: relative; font-family: var(--serif);
    font-size: clamp(4rem, 11vw, 8rem); font-weight: 400;
    line-height: .95; letter-spacing: -.01em; color: var(--text);
    margin-bottom: 1.75rem; max-width: 14ch;
  }
  .bello .b-hero-headline em { font-style: italic; color: var(--crimson); }
  .bello .b-hero-sub {
    position: relative; font-family: var(--serif);
    font-size: clamp(1.1rem, 2vw, 1.35rem); font-weight: 300;
    color: var(--text-muted); max-width: 46ch; margin-bottom: 2.5rem; line-height: 1.55;
  }
  .bello .b-hero-actions { position: relative; display: flex; gap: 1rem; align-items: center; }

  .bello .b-btn-primary {
    display: inline-flex; align-items: center; padding: .9rem 2.1rem;
    background: var(--text); color: var(--bg); border-radius: 100px;
    font-size: .72rem; font-weight: 600; letter-spacing: .13em;
    text-transform: uppercase; transition: background .2s, transform .15s;
  }
  .bello .b-btn-primary:hover { background: var(--gold-l); transform: scale(1.02); }

  .bello .b-btn-outline {
    display: inline-flex; align-items: center; padding: .9rem 2.1rem;
    border: 1px solid rgba(240,229,208,.28); border-radius: 100px;
    font-size: .72rem; font-weight: 500; letter-spacing: .13em;
    text-transform: uppercase; color: var(--text); transition: border-color .2s, background .2s;
  }
  .bello .b-btn-outline:hover { border-color: var(--text); background: rgba(240,229,208,.06); }

  .bello .b-hero-hours-bar {
    position: absolute; bottom: 0; left: 0; right: 0;
    border-top: 1px solid var(--border);
    display: flex; justify-content: space-around; padding: 1.35rem 4rem;
  }
  .bello .b-hero-hours-item {
    font-size: .72rem; letter-spacing: .12em; text-transform: uppercase;
    color: var(--text-muted); text-align: center;
  }
  .bello .b-hero-hours-item strong { display: block; color: var(--text); font-weight: 500; margin-bottom: .15rem; }

  /* MARQUEE */
  .bello .b-marquee {
    background: var(--bg-2);
    border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
    padding: .9rem 0; overflow: hidden; white-space: nowrap;
  }
  .bello .b-marquee-track { display: inline-flex; animation: b-ticker 32s linear infinite; }
  .bello .b-marquee-item {
    font-size: .7rem; font-weight: 400; letter-spacing: .16em;
    text-transform: uppercase; color: var(--text-muted); padding: 0 2rem;
  }
  .bello .b-marquee-dot { color: var(--gold); padding: 0 .5rem; }
  @keyframes b-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* SHARED */
  .bello .b-section { padding: clamp(6rem, 10vw, 10rem) 4rem; }
  .bello .b-section-label {
    font-size: .7rem; font-weight: 500; letter-spacing: .22em;
    text-transform: uppercase; color: var(--gold); margin-bottom: 1.25rem;
  }
  .bello .b-section-heading {
    font-family: var(--serif); font-size: clamp(2.75rem, 6vw, 5rem);
    font-weight: 400; line-height: 1.05; letter-spacing: -.01em; margin-bottom: 2rem;
  }
  .bello .b-section-heading em { font-style: italic; color: var(--crimson); }
  .bello .b-link-arrow {
    display: inline-flex; align-items: center; gap: .4rem;
    font-size: .72rem; font-weight: 500; letter-spacing: .18em; text-transform: uppercase;
    color: var(--gold); border-bottom: 1px solid var(--gold-d); padding-bottom: .18rem;
    transition: color .2s, border-color .2s;
  }
  .bello .b-link-arrow:hover { color: var(--gold-l); border-color: var(--gold); }

  /* ABOUT */
  .bello .b-about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start; }
  .bello .b-about-copy {
    font-family: var(--serif); font-size: clamp(1.05rem, 2vw, 1.2rem); font-weight: 300;
    color: var(--text-muted); line-height: 1.85; margin: 2rem 0 3.5rem;
  }
  .bello .b-about-copy p + p { margin-top: 1.5rem; }
  .bello .b-hours-table { border-top: 1px solid var(--border); padding-top: 2.5rem; }
  .bello .b-hours-label {
    font-size: .7rem; letter-spacing: .2em; text-transform: uppercase;
    color: var(--text-faint); margin-bottom: 1.25rem;
  }
  .bello .b-hours-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: .9rem 0; border-bottom: 1px solid var(--border-f);
  }
  .bello .b-hours-row:last-child { border-bottom: none; }
  .bello .b-day { font-size: .7rem; letter-spacing: .06em; text-transform: uppercase; color: var(--text-muted); }
  .bello .b-time { font-family: var(--serif); font-size: 1.05rem; color: var(--text); }
  .bello .b-time.gold { color: var(--gold); }
  .bello .b-about-photos { display: grid; grid-template-rows: 1.1fr .9fr; gap: 1rem; height: 580px; }
  .bello .b-about-photo { border-radius: 3px; overflow: hidden; background: var(--bg-3); position: relative; }
  .bello .b-about-photo img { width: 100%; height: 100%; object-fit: cover; opacity: .88; transition: opacity .4s, transform .6s; }
  .bello .b-about-photo:hover img { opacity: 1; transform: scale(1.03); }
  .bello .b-badge {
    position: absolute; bottom: 1.25rem; right: 1.25rem; background: var(--crimson);
    color: var(--text); font-family: var(--serif); font-size: 1rem;
    font-style: italic; padding: .4rem 1.1rem; border-radius: 2px;
  }

  /* EXPERIENCE */
  .bello .b-experience { background: var(--bg-2); border-top: 1px solid var(--border-f); border-bottom: 1px solid var(--border-f); }
  .bello .b-experience-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4rem; }
  .bello .b-experience-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: var(--border-f); }
  .bello .b-exp-card { background: var(--bg-2); padding: 3.5rem; position: relative; }
  .bello .b-exp-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; }
  .bello .b-exp-card.brunch::before { background: var(--gold); }
  .bello .b-exp-card.ladies::before { background: var(--crimson); }
  .bello .b-exp-card.late::before   { background: linear-gradient(90deg, var(--crimson), var(--gold)); }
  .bello .b-exp-label { font-size: .7rem; letter-spacing: .2em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 1.25rem; }
  .bello .b-exp-title { font-family: var(--serif); font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 500; line-height: 1.2; margin-bottom: 1.75rem; }
  .bello .b-exp-title em { font-style: italic; color: var(--gold); }
  .bello .b-exp-desc { font-size: .9rem; color: var(--text-muted); line-height: 1.75; margin-bottom: 2.5rem; }
  .bello .b-exp-when {
    display: flex; align-items: center; gap: .75rem;
    font-size: .7rem; letter-spacing: .1em; text-transform: uppercase;
    color: var(--text-faint); border-top: 1px solid var(--border-f); padding-top: 2rem;
  }
  .bello .b-exp-when span { color: var(--text-muted); }

  /* HAPPY HOUR */
  .bello .b-happy-hour {
    background: linear-gradient(145deg, #1A1108 0%, #0C0904 50%, #1A1108 100%);
    border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
    text-align: center; padding: 8rem 4rem;
  }
  .bello .b-happy-hour .b-section-label { display: block; margin-bottom: 1.5rem; }
  .bello .b-happy-hour .b-section-heading { font-size: clamp(2.5rem, 5vw, 4.25rem); margin-bottom: 2rem; }
  .bello .b-happy-hour p {
    font-family: var(--serif); font-size: clamp(1.05rem, 2vw, 1.25rem); font-weight: 300;
    color: var(--text-muted); margin-bottom: 3rem; max-width: 48ch; margin-left: auto; margin-right: auto;
  }

  /* MENU */
  .bello .b-menu-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4rem; }
  .bello .b-menu-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2.5rem; }
  .bello .b-menu-card-img {
    width: 100%; aspect-ratio: 3/4; background: var(--bg-3); border-radius: 3px;
    overflow: hidden; margin-bottom: 1.25rem; position: relative;
  }
  .bello .b-menu-card-img img { width: 100%; height: 100%; object-fit: cover; opacity: .82; transition: opacity .3s, transform .5s; }
  .bello .b-menu-card:hover .b-menu-card-img img { opacity: 1; transform: scale(1.05); }
  .bello .b-price-badge {
    position: absolute; top: .8rem; right: .8rem; background: var(--bg);
    color: var(--text); font-size: .7rem; font-weight: 600;
    padding: .3rem .7rem; border-radius: 100px; letter-spacing: .04em;
  }
  .bello .b-menu-cat { font-size: .68rem; letter-spacing: .14em; text-transform: uppercase; color: var(--text-faint); margin-bottom: .5rem; }
  .bello .b-menu-name { font-family: var(--serif); font-size: clamp(1.1rem, 2vw, 1.35rem); font-weight: 500; line-height: 1.2; margin-bottom: .6rem; }
  .bello .b-menu-desc { font-size: .82rem; color: var(--text-muted); line-height: 1.55; }

  /* SOCIAL PROOF */
  .bello .b-social-proof { background: var(--bg-2); border-top: 1px solid var(--border-f); }
  .bello .b-stats-row { display: flex; border: 1px solid var(--border); margin-bottom: 5rem; }
  .bello .b-stat-block { flex: 1; padding: 3.5rem 2.5rem; text-align: center; border-right: 1px solid var(--border); }
  .bello .b-stat-block:last-child { border-right: none; }
  .bello .b-stat-number { font-family: var(--serif); font-size: clamp(2.75rem, 5vw, 4rem); font-weight: 300; color: var(--gold); line-height: 1; margin-bottom: .75rem; }
  .bello .b-stat-label { font-size: .7rem; letter-spacing: .16em; text-transform: uppercase; color: var(--text-faint); }
  .bello .b-reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: var(--border-f); }
  .bello .b-review-card { background: var(--bg-2); padding: 3.25rem; }
  .bello .b-review-stars { color: var(--gold); font-size: .9rem; letter-spacing: .1rem; margin-bottom: 1.5rem; }
  .bello .b-review-text { font-family: var(--serif); font-size: clamp(1.05rem, 2vw, 1.2rem); font-weight: 300; font-style: italic; color: var(--text); line-height: 1.75; margin-bottom: 2.25rem; }
  .bello .b-review-meta { display: flex; align-items: center; gap: .75rem; }
  .bello .b-review-avatar {
    width: 38px; height: 38px; border-radius: 50%; background: var(--bg-3);
    border: 1px solid var(--border); display: flex; align-items: center; justify-content: center;
    font-family: var(--serif); font-size: 1.1rem; color: var(--gold); flex-shrink: 0;
  }
  .bello .b-review-name { font-size: .85rem; font-weight: 500; }
  .bello .b-review-platform { font-size: .72rem; color: var(--text-faint); margin-top: .1rem; }

  /* PRIVATE EVENTS */
  .bello .b-private-events {
    background: var(--bg-3); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
    padding: 8rem 4rem; display: grid; grid-template-columns: 1fr 1fr; gap: 7rem; align-items: center;
  }
  .bello .b-pe-copy { font-family: var(--serif); font-size: clamp(1.05rem, 2vw, 1.25rem); font-weight: 300; color: var(--text-muted); line-height: 1.85; margin: 2rem 0 3rem; }
  .bello .b-pe-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid var(--border); }
  .bello .b-pe-cell { padding: 2.25rem; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .bello .b-pe-cell:nth-child(2n) { border-right: none; }
  .bello .b-pe-cell:nth-child(3), .bello .b-pe-cell:nth-child(4) { border-bottom: none; }
  .bello .b-pe-cell-label { font-size: .68rem; letter-spacing: .18em; text-transform: uppercase; color: var(--text-faint); margin-bottom: .75rem; }
  .bello .b-pe-cell-value { font-family: var(--serif); font-size: clamp(1rem, 2vw, 1.25rem); font-weight: 400; color: var(--text); }

  /* LOCATION */
  .bello .b-location { display: grid; grid-template-columns: 1fr 1.3fr; min-height: 520px; }
  .bello .b-location-info { padding: clamp(6rem, 10vw, 10rem) 4rem; border-right: 1px solid var(--border); }
  .bello .b-location-info .b-section-heading { font-size: clamp(2.25rem, 4vw, 3.5rem); margin-top: 1.75rem; margin-bottom: 4rem; }
  .bello .b-loc-group { border-top: 1px solid var(--border-f); padding-top: 2rem; margin-bottom: 2.5rem; }
  .bello .b-loc-label { font-size: .7rem; letter-spacing: .18em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 1rem; }
  .bello .b-loc-address { font-family: var(--serif); font-size: clamp(1.2rem, 2.5vw, 1.6rem); line-height: 1.4; }
  .bello .b-directions-btn {
    display: inline-flex; align-items: center; gap: .5rem; margin-top: 2.25rem;
    padding: .8rem 1.75rem; background: var(--crimson); color: var(--text);
    border-radius: 2px; font-size: .72rem; font-weight: 500; letter-spacing: .12em;
    text-transform: uppercase; transition: background .2s;
  }
  .bello .b-directions-btn:hover { background: var(--crimson-d); }
  .bello .b-location-map { background: var(--bg-2); overflow: hidden; }
  .bello .b-location-map iframe { width: 100%; height: 100%; min-height: 520px; border: none; filter: grayscale(1) invert(1) contrast(.8) brightness(.65) sepia(.15); }

  /* FOOTER */
  .bello .b-footer { background: var(--bg-2); border-top: 1px solid var(--border); padding: 5.5rem 4rem 3rem; }
  .bello .b-footer-inner { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1.5fr; gap: 4.5rem; margin-bottom: 4rem; }
  .bello .b-footer-logo { font-family: var(--serif); font-size: 2.5rem; font-weight: 600; color: var(--gold); letter-spacing: .1em; margin-bottom: 1rem; }
  .bello .b-footer-tagline { font-family: var(--serif); font-size: 1rem; font-style: italic; color: var(--text-muted); margin-bottom: 2.25rem; }
  .bello .b-footer-socials { display: flex; gap: .6rem; }
  .bello .b-social-pill {
    display: inline-flex; align-items: center; padding: .35rem .9rem;
    border: 1px solid var(--border); border-radius: 100px;
    font-size: .68rem; font-weight: 500; letter-spacing: .1em;
    color: var(--text-muted); transition: border-color .2s, color .2s;
  }
  .bello .b-social-pill:hover { border-color: var(--gold); color: var(--gold); }
  .bello .b-footer-col-title { font-size: .68rem; letter-spacing: .2em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 1.75rem; }
  .bello .b-footer-links { list-style: none; display: flex; flex-direction: column; gap: 1rem; }
  .bello .b-footer-links a { font-size: .88rem; color: var(--text-muted); transition: color .2s; }
  .bello .b-footer-links a:hover { color: var(--text); }
  .bello .b-footer-reserve-copy { font-family: var(--serif); font-size: 1.05rem; font-weight: 300; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem; }
  .bello .b-footer-bottom { padding-top: 1.5rem; border-top: 1px solid var(--border-f); display: flex; justify-content: space-between; align-items: center; font-size: .72rem; color: var(--text-faint); }
  .bello .b-footer-bottom a { color: var(--gold); }

  /* ANIMATIONS */
  @keyframes b-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  .bello .b-hero-eyebrow  { animation: b-rise .8s cubic-bezier(.16,1,.3,1) .15s both; }
  .bello .b-hero-headline { animation: b-rise .9s cubic-bezier(.16,1,.3,1) .3s  both; }
  .bello .b-hero-sub      { animation: b-rise .9s cubic-bezier(.16,1,.3,1) .45s both; }
  .bello .b-hero-actions  { animation: b-rise .8s cubic-bezier(.16,1,.3,1) .6s  both; }
`;

export default function BelloBarKitchenPreview() {
  return (
    <>
      <style>{css}</style>
      <div className="bello">

        {/* NAV */}
        <nav className="b-nav">
          <div className="b-nav-logo">Bello</div>
          <ul className="b-nav-links">
            <li><a href="#b-menu">Menu</a></li>
            <li><a href="#b-experience">Events</a></li>
            <li><a href="#b-brunch">Brunch</a></li>
            <li><a href="#b-private">Private Events</a></li>
            <li><a href="#b-location">Find Us</a></li>
          </ul>
          <a href="#" className="b-nav-cta">Reserve Now</a>
        </nav>

        {/* HERO */}
        <section className="b-hero">
          <div className="b-hero-bg"></div>
          <p className="b-hero-eyebrow">Downtown Tampa &nbsp;·&nbsp; 903 N Franklin St</p>
          <h1 className="b-hero-headline">
            Where the<br /><em>Night</em><br />Begins.
          </h1>
          <p className="b-hero-sub">
            New York lounge energy. Caribbean &amp; Latin soul.<br />
            Late-night cocktails, DJ Brunch, and a room that earns its reputation.
          </p>
          <div className="b-hero-actions">
            <a href="#" className="b-btn-primary">Book a Table</a>
            <a href="#b-menu" className="b-btn-outline">View Menu &rarr;</a>
          </div>
          <div className="b-hero-hours-bar">
            <div className="b-hero-hours-item"><strong>Wed – Thu</strong>4PM – 11PM</div>
            <div className="b-hero-hours-item"><strong>Fri – Sat</strong>4PM – 1AM</div>
            <div className="b-hero-hours-item"><strong>Sat – Sun Brunch</strong>11AM – 4PM</div>
            <div className="b-hero-hours-item"><strong>Happy Hour</strong>Daily · 4–6PM</div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="b-marquee" aria-hidden="true">
          <div className="b-marquee-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} style={{ display: "contents" }}>
                <span className="b-marquee-item">Late Night Lounge</span><span className="b-marquee-dot">·</span>
                <span className="b-marquee-item">DJ Brunch</span><span className="b-marquee-dot">·</span>
                <span className="b-marquee-item">Ladies Night</span><span className="b-marquee-dot">·</span>
                <span className="b-marquee-item">@itsbellotampa</span><span className="b-marquee-dot">·</span>
                <span className="b-marquee-item">Downtown Tampa</span><span className="b-marquee-dot">·</span>
                <span className="b-marquee-item">903 N Franklin St</span><span className="b-marquee-dot">·</span>
                <span className="b-marquee-item">Happy Hour · 4–6PM Daily</span><span className="b-marquee-dot">·</span>
                <span className="b-marquee-item">Caribbean &amp; Latin Kitchen</span><span className="b-marquee-dot">·</span>
                <span className="b-marquee-item">25K Instagram Followers</span><span className="b-marquee-dot">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="b-section">
          <div className="b-about-inner">
            <div>
              <p className="b-section-label">Our Story</p>
              <h2 className="b-section-heading">
                Born from New York <em>energy</em><br />&amp; Caribbean soul.
              </h2>
              <div className="b-about-copy">
                <p>Bello Bar + Kitchen is Downtown Tampa&apos;s answer to the question nobody was asking loud enough: why can&apos;t the best room in the city feel like New York and taste like the islands?</p>
                <p>This is a kitchen where jerk spice shares a shelf with sofrito, where a Chopped Cheese sits next to Rasta Pasta, and where the bar program was built to hold a night — not just start one.</p>
              </div>
              <div className="b-hours-table">
                <p className="b-hours-label">Hours</p>
                <div className="b-hours-row"><span className="b-day">Wednesday – Thursday</span><span className="b-time">4PM – 11PM</span></div>
                <div className="b-hours-row"><span className="b-day">Friday – Saturday</span><span className="b-time">4PM – 1AM</span></div>
                <div className="b-hours-row"><span className="b-day">Saturday – Sunday Brunch</span><span className="b-time">11AM – 4PM</span></div>
                <div className="b-hours-row"><span className="b-day">Happy Hour</span><span className="b-time gold">Daily · 4–6PM</span></div>
              </div>
            </div>
            <div className="b-about-photos">
              <div className="b-about-photo">
                <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80" alt="Bello Bar interior" />
              </div>
              <div className="b-about-photo">
                <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" alt="Bello kitchen" />
                <span className="b-badge">Since 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="b-section b-experience" id="b-experience">
          <div className="b-experience-header">
            <div>
              <p className="b-section-label">The Programs</p>
              <h2 className="b-section-heading">The <em>Experience.</em></h2>
            </div>
            <a href="#" className="b-link-arrow">Full Events Calendar &rarr;</a>
          </div>
          <div className="b-experience-cards">
            <div className="b-exp-card brunch" id="b-brunch">
              <p className="b-exp-label">Weekend</p>
              <h3 className="b-exp-title">DJ <em>Brunch</em></h3>
              <p className="b-exp-desc">Live DJs, bottomless cocktails, and a Caribbean-Latin brunch menu that doubles as a full night out. The one Tampa has been waiting for.</p>
              <div className="b-exp-when">WHEN <span>Saturday &amp; Sunday · 11AM – 4PM</span></div>
            </div>
            <div className="b-exp-card ladies">
              <p className="b-exp-label">Weekly</p>
              <h3 className="b-exp-title"><em>Ladies</em> Night</h3>
              <p className="b-exp-desc">A standing reservation for the room. Specials, surprises, and the kind of energy that makes word-of-mouth feel like an understatement.</p>
              <div className="b-exp-when">WHEN <span>Weekly · See @itsbellotampa for details</span></div>
            </div>
            <div className="b-exp-card late">
              <p className="b-exp-label">Nightly</p>
              <h3 className="b-exp-title">Late Night <em>Lounge</em></h3>
              <p className="b-exp-desc">After 10, the room shifts. Dim lights, full bar, late-night bites. The New York lounge experience — in Tampa, finally done right.</p>
              <div className="b-exp-when">WHEN <span>Fri &amp; Sat · 10PM – Close</span></div>
            </div>
          </div>
        </section>

        {/* HAPPY HOUR */}
        <section className="b-happy-hour">
          <span className="b-section-label">Happy Hour · Daily · 4–6 PM</span>
          <h2 className="b-section-heading">Slow it down <em>at the bar.</em></h2>
          <p>Rotating drink specials, Caribbean small plates, and the best seat in Downtown Tampa between four and six.</p>
          <a href="#b-menu" className="b-link-arrow">See the Menu &rarr;</a>
        </section>

        {/* MENU */}
        <section className="b-section" id="b-menu">
          <div className="b-menu-header">
            <div>
              <p className="b-section-label">Must Order</p>
              <h2 className="b-section-heading">The <em>Menu.</em></h2>
            </div>
            <a href="#" className="b-link-arrow">Full Menu &rarr;</a>
          </div>
          <div className="b-menu-grid">
            {[
              { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&q=80", alt: "Rasta Pasta", price: "$18", cat: "Night Bites", name: "Rasta Pasta", desc: "Jerk-spiced cream sauce, sautéed peppers, your choice of protein." },
              { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80", alt: "Bello Chopped Cheese", price: "$16", cat: "Night Bites", name: "Bello Chopped Cheese", desc: "The NYC bodega classic, elevated. Grass-fed beef, caramelized onion, house sauce." },
              { src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80", alt: "Signature Cocktails", price: "$14", cat: "Cocktails", name: "Signature Craft Cocktails", desc: "House-built recipes with Caribbean spirits and fresh market ingredients." },
              { src: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?auto=format&fit=crop&w=400&q=80", alt: "Salmon Sliders", price: "$22", cat: "Night Bites", name: "Sweet & Spicy Salmon Sliders", desc: "Caribbean-glazed salmon, mango slaw, brioche — three to a plate." },
            ].map((item) => (
              <div key={item.name} className="b-menu-card">
                <div className="b-menu-card-img">
                  <img src={item.src} alt={item.alt} />
                  <span className="b-price-badge">{item.price}</span>
                </div>
                <p className="b-menu-cat">{item.cat}</p>
                <h3 className="b-menu-name">{item.name}</h3>
                <p className="b-menu-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="b-section b-social-proof">
          <p className="b-section-label">Already Buzzing</p>
          <h2 className="b-section-heading" style={{ marginBottom: "4rem" }}>The <em>Numbers.</em></h2>
          <div className="b-stats-row">
            {[["25K","Instagram Followers"],["7.3K","Facebook Likes"],["115+","Yelp Reviews"],["3.9K","Check-Ins"]].map(([n,l]) => (
              <div key={l} className="b-stat-block">
                <div className="b-stat-number">{n}</div>
                <div className="b-stat-label">{l}</div>
              </div>
            ))}
          </div>
          <div className="b-reviews-grid">
            {[
              { initial: "M", name: "Marcus T.", platform: "Yelp · Verified Guest", text: '"The vibe is exactly what downtown Tampa needed. Cocktails are elite and the jerk pasta had me coming back the very next night."' },
              { initial: "J", name: "Jasmine R.", platform: "Google · Verified Guest", text: '"DJ Brunch was a full production. The room was packed, the energy was incredible, and the bottomless option is worth every dollar."' },
              { initial: "D", name: "Devon K.", platform: "TripAdvisor · Verified Guest", text: '"Finally a late-night spot that doesn\'t feel like a club but hits harder than a bar. The Chopped Cheese alone is reason enough to go."' },
            ].map((r) => (
              <div key={r.name} className="b-review-card">
                <div className="b-review-stars">★★★★★</div>
                <p className="b-review-text">{r.text}</p>
                <div className="b-review-meta">
                  <div className="b-review-avatar">{r.initial}</div>
                  <div>
                    <div className="b-review-name">{r.name}</div>
                    <div className="b-review-platform">{r.platform}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRIVATE EVENTS */}
        <section className="b-private-events" id="b-private">
          <div>
            <p className="b-section-label">Reserve the Room</p>
            <h2 className="b-section-heading">Host your <em>next event</em> at Bello.</h2>
            <p className="b-pe-copy">Birthday dinners, corporate happy hours, buyouts, pop-up nights. Bello&apos;s layout handles both intimate gatherings and full-venue productions. Get in touch and we&apos;ll build the night around you.</p>
            <a href="mailto:events@bellokitchen.com" className="b-btn-primary">Inquire About Events</a>
          </div>
          <div>
            <div className="b-pe-grid">
              {[["Capacity","Up to 200 Guests"],["Minimum Spend","Starting at $500"],["Availability","Any Night of Week"],["Buyout Option","Full Venue Available"]].map(([label, value]) => (
                <div key={label} className="b-pe-cell">
                  <p className="b-pe-cell-label">{label}</p>
                  <p className="b-pe-cell-value">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="b-location" id="b-location">
          <div className="b-location-info">
            <p className="b-section-label">Find Us</p>
            <h2 className="b-section-heading">
              Downtown Tampa,<br /><em>at the corner.</em>
            </h2>
            <div className="b-loc-group">
              <p className="b-loc-label">Address</p>
              <p className="b-loc-address">903 N Franklin Street<br />Tampa, FL 33602</p>
            </div>
            <div className="b-loc-group">
              <p className="b-loc-label">Hours</p>
              <div className="b-hours-table" style={{ paddingTop: ".5rem" }}>
                <div className="b-hours-row"><span className="b-day">Wednesday – Thursday</span><span className="b-time">4PM – 11PM</span></div>
                <div className="b-hours-row"><span className="b-day">Friday – Saturday</span><span className="b-time">4PM – 1AM</span></div>
                <div className="b-hours-row"><span className="b-day">Sat – Sun Brunch</span><span className="b-time">11AM – 4PM</span></div>
                <div className="b-hours-row"><span className="b-day">Happy Hour</span><span className="b-time gold">Daily · 4–6PM</span></div>
              </div>
            </div>
            <a href="https://maps.google.com/?q=903+N+Franklin+St+Tampa+FL" className="b-directions-btn" target="_blank" rel="noopener noreferrer">Get Directions &rarr;</a>
          </div>
          <div className="b-location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.5!2d-82.4587!3d27.9515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c4b0f7f9a001%3A0xa2bfdb6e0b2b1e3!2s903%20N%20Franklin%20St%2C%20Tampa%2C%20FL%2033602!5e0!3m2!1sen!2sus!4v1716300000000"
              loading="lazy"
              allowFullScreen
              title="Bello Bar + Kitchen"
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="b-footer">
          <div className="b-footer-inner">
            <div>
              <div className="b-footer-logo">Bello</div>
              <p className="b-footer-tagline">Bar + Kitchen · Downtown Tampa</p>
              <div className="b-footer-socials">
                <a href="https://instagram.com/itsbellotampa" className="b-social-pill">Instagram</a>
                <a href="https://facebook.com/bellotampa" className="b-social-pill">Facebook</a>
                <a href="https://tiktok.com/@itsbellotampa" className="b-social-pill">TikTok</a>
              </div>
            </div>
            <div>
              <p className="b-footer-col-title">Navigate</p>
              <ul className="b-footer-links">
                <li><a href="#b-menu">Menu</a></li>
                <li><a href="#b-experience">Events</a></li>
                <li><a href="#b-brunch">DJ Brunch</a></li>
                <li><a href="#b-private">Private Events</a></li>
                <li><a href="#b-location">Find Us</a></li>
              </ul>
            </div>
            <div>
              <p className="b-footer-col-title">Contact</p>
              <ul className="b-footer-links">
                <li><a href="tel:8135422867">(813) 542-2867</a></li>
                <li><a href="mailto:info@bellokitchen.com">info@bellokitchen.com</a></li>
                <li><a href="mailto:events@bellokitchen.com">events@bellokitchen.com</a></li>
              </ul>
            </div>
            <div>
              <p className="b-footer-col-title">Reservations</p>
              <p className="b-footer-reserve-copy">Reservations recommended Friday &amp; Saturday. Walk-ins always welcome at the bar.</p>
              <a href="#" className="b-btn-primary">Book via Resy</a>
            </div>
          </div>
          <div className="b-footer-bottom">
            <span>© 2024 Bello Bar + Kitchen &nbsp;·&nbsp; 903 N Franklin St, Tampa, FL 33602</span>
            <span>Site by <a href="https://thryveops.com" target="_blank" rel="noopener noreferrer">Thryve Operations</a></span>
          </div>
        </footer>

      </div>
    </>
  );
}
