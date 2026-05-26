/* global React */
const { Fragment } = React;

// ============ SHARED TOKENS ============
const C = {
  greenDeep: '#0F3D20',
  green: '#1F6B36',
  greenBright: '#2E8B47',
  greenSoft: '#EDF6EE',
  greenMist: '#F4FAF5',
  ink: '#0F2A18',
  inkSoft: '#3C5648',
  cream: '#FFFFFF',
  blue: '#2E8FE0',
  blueDeep: '#1769B0',
  amber: '#E8A33D',
};

const SIZE = 1080; // square IG post

const slideBase = {
  width: SIZE,
  height: SIZE,
  position: 'relative',
  overflow: 'hidden',
  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  color: C.ink,
};

// ============ DECORATIVE BITS ============
const DALogo = ({ size = 56, color = C.cream }) => (
  <div style={{
    fontFamily: "'Fraunces', 'Plus Jakarta Sans', serif",
    fontWeight: 900,
    fontStyle: 'italic',
    fontSize: size,
    color,
    letterSpacing: '-0.04em',
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'baseline',
    gap: size * 0.04,
  }}>
    <span>D</span><span style={{ transform: 'translateY(2px)' }}>A</span>
    <span style={{
      display: 'inline-block',
      width: size * 0.18,
      height: size * 0.18,
      background: C.amber,
      borderRadius: '50%',
      transform: `translateY(-${size * 0.55}px) translateX(-${size * 0.1}px)`,
    }} />
  </div>
);

const StepBadge = ({ n, total = 4, label }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 12,
    padding: '10px 20px 10px 12px',
    background: 'rgba(255,255,255,0.16)',
    border: '1px solid rgba(255,255,255,0.28)',
    borderRadius: 999,
  }}>
    <span style={{
      width: 38, height: 38, borderRadius: '50%',
      background: C.cream, color: C.green,
      display: 'grid', placeItems: 'center',
      fontWeight: 800, fontSize: 16,
    }}>{String(n).padStart(2,'0')}</span>
    <span style={{
      color: C.cream, fontSize: 19, fontWeight: 600,
      letterSpacing: '0.02em', textTransform: 'uppercase',
    }}>{label} · {n}/{total}</span>
  </div>
);

const PhoneShot = ({ src, alt, tilt = 0, scale = 1, width = 440 }) => (
  <div style={{
    position: 'relative',
    transform: `rotate(${tilt}deg) scale(${scale})`,
    transformOrigin: 'center center',
    filter: 'drop-shadow(0 36px 50px rgba(8, 38, 18, 0.35)) drop-shadow(0 8px 16px rgba(8, 38, 18, 0.18))',
  }}>
    <img src={src} alt={alt} style={{
      display: 'block',
      width,
      height: 'auto',
      borderRadius: 38,
    }} />
  </div>
);

const FeaturePill = ({ icon, label }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 12,
    padding: '14px 22px',
    background: C.cream,
    border: `1.5px solid ${C.greenSoft}`,
    borderRadius: 999,
    boxShadow: '0 4px 12px rgba(15,61,32,0.05)',
  }}>
    <span style={{
      width: 32, height: 32, borderRadius: '50%',
      background: C.greenSoft, color: C.green,
      display: 'grid', placeItems: 'center',
      fontSize: 16, fontWeight: 700,
    }}>{icon}</span>
    <span style={{
      fontSize: 19, fontWeight: 600, color: C.ink,
      letterSpacing: '-0.01em',
    }}>{label}</span>
  </div>
);

// ============ SLIDE 1 — COVER ============
const Cover = () => (
  <div style={{ ...slideBase, background: C.greenDeep }}>
    <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <radialGradient id="sun" cx="50%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#1F6B36" stopOpacity="0.9" />
          <stop offset="100%" stopColor={C.greenDeep} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={SIZE} height={SIZE} fill="url(#sun)" />
      {/* Field rows */}
      {[...Array(20)].map((_, i) => (
        <path key={i}
          d={`M -120 ${640 + i*22} Q 540 ${590 + i*22} 1200 ${630 + i*22}`}
          fill="none" stroke="#0A2A14"
          strokeOpacity={0.22 + i*0.02}
          strokeWidth={2.2}
        />
      ))}
      {/* Sun disc */}
      <circle cx="540" cy="360" r="140" fill={C.amber} opacity="0.92" />
      <circle cx="540" cy="360" r="140" fill="none" stroke="#FFCB6E" strokeWidth="2" opacity="0.4" />
    </svg>

    {/* Top brand */}
    <div style={{
      position: 'absolute', top: 70, left: 0, right: 0,
      display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14,
    }}>
      <DALogo size={54} />
      <div style={{
        color: C.cream, fontSize: 22, fontWeight: 600,
        letterSpacing: '0.20em', opacity: 0.85,
      }}>DONOAGRO</div>
    </div>

    {/* Main headline */}
    <div style={{
      position: 'absolute', top: 560, left: 70, right: 70,
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 14,
        marginBottom: 22,
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '7px 14px',
          background: 'rgba(232,163,61,0.18)',
          border: '1.5px solid rgba(232,163,61,0.7)',
          borderRadius: 999,
          color: C.amber, fontSize: 16, fontWeight: 800,
          letterSpacing: '0.20em', textTransform: 'uppercase',
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.amber }} />
          Preview
        </span>
        <span style={{
          color: C.amber, fontSize: 20, fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.22em',
        }}>Lo que se viene</span>
      </div>
      <h1 style={{
        margin: 0,
        fontFamily: "'Fraunces', serif",
        fontWeight: 800,
        fontSize: 104,
        lineHeight: 0.92,
        color: C.cream,
        letterSpacing: '-0.035em',
      }}>
        Tu campo,<br/>
        en el <span style={{ fontStyle: 'italic', color: '#A8E0B6' }}>bolsillo</span>.
      </h1>
      <p style={{
        margin: '24px 0 0',
        color: '#CDE8D4',
        fontSize: 24,
        lineHeight: 1.4,
        maxWidth: 720,
        fontWeight: 400,
      }}>
        Gastos, lotes, hacienda y clima. Cuatro secciones para que no se te escape nada.
      </p>
    </div>

    {/* Swipe hint */}
    <div style={{
      position: 'absolute', bottom: 48, left: 70,
      display: 'flex', alignItems: 'center', gap: 12,
      color: C.cream, opacity: 0.85,
    }}>
      <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '0.06em' }}>DESLIZÁ</span>
      <svg width="50" height="18" viewBox="0 0 60 22">
        <path d="M2 11 L54 11 M44 2 L54 11 L44 20" stroke={C.amber} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>

    <div style={{
      position: 'absolute', bottom: 48, right: 70,
      color: C.cream, opacity: 0.6,
      fontSize: 18, fontWeight: 600,
      letterSpacing: '0.04em',
    }}>01 / 06</div>
  </div>
);

// ============ GENERIC PAGE SLIDE ============
const PageSlide = ({ stepN, pageName, badge, title, titleAccent, kicker, description, features, shot, accentBg }) => (
  <div style={{ ...slideBase, background: C.greenSoft }}>
    {/* Top dark header band */}
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 300,
      background: `linear-gradient(160deg, ${C.greenDeep} 0%, ${C.green} 100%)`,
      overflow: 'hidden',
    }}>
      <svg width={SIZE} height={300} style={{ position: 'absolute', inset: 0, opacity: 0.18 }}>
        <circle cx="980" cy="40" r="220" fill="none" stroke={C.cream} strokeWidth="1.5" />
        <circle cx="980" cy="40" r="150" fill="none" stroke={C.cream} strokeWidth="1.5" />
        <circle cx="980" cy="40" r="85" fill="none" stroke={C.cream} strokeWidth="1.5" />
      </svg>
      <div style={{ position: 'absolute', top: 56, left: 70, right: 70, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <DALogo size={36} />
        <StepBadge n={stepN} total={4} label={badge} />
      </div>
      <div style={{ position: 'absolute', bottom: 38, left: 70, right: 70 }}>
        <div style={{
          color: C.amber, fontSize: 18, fontWeight: 700,
          letterSpacing: '0.24em', textTransform: 'uppercase',
          marginBottom: 10,
        }}>{kicker}</div>
        <h2 style={{
          margin: 0,
          fontFamily: "'Fraunces', serif",
          fontWeight: 800,
          fontSize: 64,
          lineHeight: 0.92,
          color: C.cream,
          letterSpacing: '-0.03em',
        }}>{title} <span style={{ fontStyle: 'italic', color: '#A8E0B6' }}>{titleAccent}</span></h2>
      </div>
    </div>

    {/* Decorative accent shape behind phone */}
    <div style={{
      position: 'absolute', top: 320, right: 30,
      width: 430, height: 600,
      borderRadius: 64,
      background: accentBg,
      transform: 'rotate(-4deg)',
      zIndex: 1,
      opacity: 0.45,
    }} />

    {/* Phone shot */}
    <div style={{
      position: 'absolute', top: 230, right: -30,
      zIndex: 3,
    }}>
      <PhoneShot src={shot} alt={pageName} tilt={-4} width={460} />
    </div>

    {/* Description + features on left */}
    <div style={{
      position: 'absolute', top: 360, left: 70, width: 430,
      zIndex: 2,
    }}>
      <p style={{
        margin: 0,
        fontSize: 22,
        lineHeight: 1.45,
        color: C.inkSoft,
        fontWeight: 500,
      }}>{description}</p>

      <div style={{
        marginTop: 30,
        display: 'flex', flexDirection: 'column', gap: 12,
        alignItems: 'flex-start',
      }}>
        {features.map((f, i) => (
          <FeaturePill key={i} icon={f.icon} label={f.label} />
        ))}
      </div>
    </div>

    {/* Footer */}
    <div style={{
      position: 'absolute', bottom: 40, left: 70, right: 70,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      color: C.inkSoft,
    }}>
      <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '0.04em' }}>
        <span style={{ color: C.green }}>DonoAgro</span> · {pageName}
      </div>
      <div style={{ fontSize: 18, fontWeight: 600, opacity: 0.6 }}>{String(stepN + 1).padStart(2,'0')} / 06</div>
    </div>
  </div>
);

// ============ APP-PAGE SLIDES ============
const Inicio = () => (
  <PageSlide
    stepN={1}
    pageName="Inicio"
    badge="Inicio"
    kicker="Pantalla principal"
    title="Tu tablero"
    titleAccent="del día."
    description="Apenas abrís la app ves los gastos del mes, la cotización del dólar y un pantallazo de tus lotes y hectáreas."
    features={[
      { icon: '$', label: 'Gastos en ARS y USD' },
      { icon: '◔', label: 'Dólar oficial, MEP y agro' },
      { icon: '⌂', label: 'Lotes y hectáreas' },
    ]}
    shot="img/inicio.png"
    accentBg={C.blue}
  />
);

const Lotes = () => (
  <PageSlide
    stepN={2}
    pageName="Lotes"
    badge="Lotes"
    kicker="Tus campos"
    title="Cada lote,"
    titleAccent="su historia."
    description="Listá todos tus lotes con superficie, cultivo y etapa. Sumá uno nuevo en segundos."
    features={[
      { icon: '▤', label: 'Superficie en hectáreas' },
      { icon: '✿', label: 'Cultivo y etapa' },
      { icon: '◉', label: 'Ubicación GPS' },
    ]}
    shot="img/lotes.png"
    accentBg={C.greenBright}
  />
);

const Ganaderia = () => (
  <PageSlide
    stepN={3}
    pageName="Ganadería"
    badge="Ganadería"
    kicker="Tu rodeo"
    title="Hacienda"
    titleAccent="bajo control."
    description="Conteo de cabezas por categoría —rodeo, toros, pesadas, corral— y registro de sanidad por lote."
    features={[
      { icon: '☰', label: 'Rodeo, toros, pesadas' },
      { icon: '+', label: 'Sanidad y caravanas' },
      { icon: '⇆', label: 'Movimientos por lote' },
    ]}
    shot="img/ganaderia.png"
    accentBg={C.amber}
  />
);

const Clima = () => (
  <PageSlide
    stepN={4}
    pageName="Clima"
    badge="Clima"
    kicker="Pronóstico"
    title="El tiempo"
    titleAccent="de tu lote."
    description="Temperatura, lluvia, viento y helada — geolocalizado al lote que elijas. Con radar de lluvia en vivo."
    features={[
      { icon: '◐', label: 'Radar de lluvia en vivo' },
      { icon: '✱', label: 'Pronóstico 6 días' },
      { icon: '❄', label: 'Alerta de heladas' },
    ]}
    shot="img/clima.png"
    accentBg={C.blue}
  />
);

// ============ SLIDE 6 — CTA ============
const CTA = () => (
  <div style={{ ...slideBase, background: C.greenDeep }}>
    <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <radialGradient id="ctaglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2E8B47" stopOpacity="0.55" />
          <stop offset="100%" stopColor={C.greenDeep} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={SIZE} height={SIZE} fill="url(#ctaglow)" />
      {[...Array(26)].map((_, i) => (
        <path key={i}
          d={`M -120 ${760 + i*14} Q 540 ${710 + i*14} 1200 ${750 + i*14}`}
          fill="none" stroke="#0A2A14"
          strokeOpacity={0.22 + i*0.018}
          strokeWidth={1.8}
        />
      ))}
    </svg>

    {/* Top brand */}
    <div style={{
      position: 'absolute', top: 60, left: 70, right: 70,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <DALogo size={42} />
      <div style={{ color: C.cream, opacity: 0.5, fontSize: 18, fontWeight: 600 }}>06 / 06</div>
    </div>

    {/* Recap chips */}
    <div style={{
      position: 'absolute', top: 170, left: 0, right: 0,
      display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12,
      padding: '0 70px',
    }}>
      {[
        { n: '01', label: 'Inicio' },
        { n: '02', label: 'Lotes' },
        { n: '03', label: 'Ganadería' },
        { n: '04', label: 'Clima' },
      ].map(c => (
        <div key={c.n} style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '12px 20px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.22)',
          borderRadius: 999,
        }}>
          <span style={{ color: C.amber, fontSize: 15, fontWeight: 800, letterSpacing: '0.04em' }}>{c.n}</span>
          <span style={{ color: C.cream, fontSize: 19, fontWeight: 600 }}>{c.label}</span>
        </div>
      ))}
    </div>

    {/* Headline */}
    <div style={{
      position: 'absolute', top: 290, left: 70, right: 70,
    }}>
      <h2 style={{
        margin: 0,
        fontFamily: "'Fraunces', serif",
        fontWeight: 800,
        fontSize: 112,
        lineHeight: 0.9,
        color: C.cream,
        letterSpacing: '-0.035em',
      }}>
        Toda tu<br/>
        producción,<br/>
        <span style={{ fontStyle: 'italic', color: '#A8E0B6' }}>una app.</span>
      </h2>
    </div>

    {/* CTA card */}
    <div style={{
      position: 'absolute', bottom: 130, left: 70, right: 70,
      background: C.cream,
      borderRadius: 26,
      padding: '28px 36px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      boxShadow: '0 18px 50px rgba(0,0,0,0.35)',
    }}>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontSize: 16, fontWeight: 800, color: C.greenBright,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          marginBottom: 8,
        }}>
          <span style={{
            width: 10, height: 10, borderRadius: '50%',
            background: C.greenBright,
            boxShadow: `0 0 0 5px ${C.greenSoft}`,
          }} />
          Próximamente
        </div>
        <div style={{ fontSize: 28, fontWeight: 800, color: C.ink, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Seguinos para<br/>el lanzamiento
        </div>
      </div>
      <div style={{
        width: 84, height: 84, borderRadius: 22,
        background: C.greenBright,
        display: 'grid', placeItems: 'center',
        boxShadow: '0 8px 22px rgba(46,139,71,0.5)',
      }}>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="#fff" strokeWidth="2.2" />
          <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="2.2" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="#fff" />
        </svg>
      </div>
    </div>

    {/* Footer */}
    <div style={{
      position: 'absolute', bottom: 50, left: 70, right: 70,
      textAlign: 'center',
      color: '#A8E0B6',
      fontSize: 18, fontWeight: 600, letterSpacing: '0.1em',
    }}>
      @donoagro · pronto en tu celular
    </div>
  </div>
);

// ============ EXPORT ============
window.DASlides = { Cover, Inicio, Lotes, Ganaderia, Clima, CTA };
