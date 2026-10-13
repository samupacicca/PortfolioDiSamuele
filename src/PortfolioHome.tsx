import { useEffect, useState, type ReactNode } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router"
import architetturaWazuh from "./imports/Architettura-Wazuh.jpg"
import syslogEnableScreenshot from "./imports/Screenshot_2026-09-15_222526.png"
import syslogFilterScreenshot from "./imports/Screenshot_2026-09-15_222633.jpg"
import tentativiConnessioneVpn from "./imports/tentativi-connessione-vpn.png"
import tracciamentoAttivitaUtenti from "./imports/tracciamento-attivita-utenti.jpg"
import scriptSpostamento from "./imports/script-spostamento.png"
import archiviazioneNas from "./imports/archiviazione-nas.jpg"

const portfolio = {
  name: "Samuele",
  role: "Junior IT · Cloud & Security",
  introduction:
    "Costruisco competenze e progetti nelle infrastrutture IT e nella sicurezza informatica.",
  email: "contatti@paciccasamuele.it",
  availability: "Portfolio personale · Samuele Pacicca",
}

const projects = [
  {
    slug: "infrastruttura-controllo-log",
    number: "01",
    title: "Gestione Log Centralizzata & Infrastruttura SIEM",
    summary:
      "Progettazione di una infrastruttura contenente flusso ed elaborazione di dati.",
    tag: "Security",
    status: "Completato",
    year: "2026",
    description:
      "Realizzazione di un'infrastruttura centralizzata per la raccolta, il filtraggio, l'analisi e l'archiviazione dei log, utilizzando Wazuh come piattaforma SIEM e un sistema automatizzato per la gestione degli alert.",
    context:
      "Il progetto nasce dalla necessità di realizzare, in collaborazione con un’azienda, un’infrastruttura centralizzata per la raccolta, gestione, analisi e conservazione dei log provenienti dall’infrastruttura IT.\n\nL’architettura è stata progettata per raccogliere eventi provenienti principalmente da firewall Sophos, apparati di rete e sistemi server, centralizzandone il flusso attraverso un server syslog.\n\nUn requisito importante era separare la funzione di analisi e monitoraggio da quella di conservazione dei log, mantenendo gli eventi disponibili al SIEM per un periodo definito e prevedendo contemporaneamente un sistema di archiviazione a lungo termine, con una gestione della retention progettata tenendo conto dei requisiti di sicurezza e conservazione applicabili nel contesto NIS2.",
    implementationSections: [
      { title: "Centralizzazione e filtraggio", text: "I log vengono raccolti centralmente tramite rsyslog, che riceve gli eventi generati dagli apparati presenti nell'infrastruttura. Prima di essere inviati a wazuh, i dati vengono sottoposti a un processo di filtraggio, attraverso regole definite sul server, con l'obiettivo di eliminare gli eventi non necessari e ridurre il volume di dati elaborato dal siem. Inoltre, è presente un piccolo script bash che si occupa dello spostamento dei log sul nas.", images: [syslogEnableScreenshot, syslogFilterScreenshot, scriptSpostamento] },
      { title: "Analisi e detection con Wazuh", text: "I log filtrati vengono successivamente elaborati da Wazuh. Per interpretare correttamente gli eventi provenienti dal firewall sono stati realizzati decoder personalizzati, utilizzati per estrarre e organizzare le informazioni contenute nei log. Su questi dati sono state poi definite regole personalizzate, in grado di identificare specifici eventi e assegnare un livello di severità agli alert.", images: [tentativiConnessioneVpn, tracciamentoAttivitaUtenti] },
      { title: "Retention e archiviazione", text: "I log vengono gestiti su due flussi distinti: una parte viene mantenuta all'interno di Wazuh per l'analisi degli eventi e la gestione degli alert, mentre i log filtrati vengono contemporaneamente inviati al NAS per l'archiviazione a lungo termine.\nSul SIEM è stata configurata una retention di 3 mesi per gli alert, mentre l'archivio sul NAS permette di conservare i log anche oltre il periodo di permanenza all'interno di Wazuh. I file vengono inoltre compressi per ridurre lo spazio occupato e facilitare la gestione dello storage.", images: ["", ""] },
      { title: "Automazione degli alert", text: "Descrivi qui l'automazione delle notifiche, le soglie di rilevamento e i flussi di escalation adottati.", images: ["", ""] },
    ],
    heroImage: architetturaWazuh,
    detailImages: ["", ""],
    focus: [
      "Raccolta e centralizzazione dei log",
      "Flusso dati e normalizzazione",
      "Monitoraggio degli eventi",
    ],
    stack: ["Linux", "Syslog", "Wazuh"],
  },
]

type HomeProject = {
  slug: string
  number: string
  title: string
  summary: string
  tags: string[]
  status: "Completato" | "In corso"
  available: boolean
}

const homeProjects: HomeProject[] = [
  {
    slug: "infrastruttura-controllo-log",
    number: "01",
    title: "Gestione Log Centralizzata & Infrastruttura SIEM",
    summary: "Progettazione di una infrastruttura contenente flusso ed elaborazione di dati.",
    tags: ["Security"],
    status: "Completato",
    available: true,
  },
  {
    slug: "cloud-lab",
    number: "02",
    title: "Laboratorio SecOps Personale",
    summary: "Ambiente di virtualizzazione e sicurezza per lo studio autonomo.\nUn mini-PC configurato per simulare scenari enterprise, implementare regole firewall ed esercitarmi nell'analisi dei sistemi.",
    tags: ["Personal Lab", "Security"],
    status: "In corso",
    available: false,
  },
]

// Modifica qui le certificazioni che vuoi conseguire.
const upcomingCertifications = [
  "CompTIA CySA+",
  "BTL1 (Blue Team Level 1)",
]

const siemCaseStudy = [
  {
    title: "Introduzione e panoramica",
    blocks: [
      {
        title: "Il problema",
        paragraphs: [
          "Nella situazione di partenza, l'azienda in questione conservava i log degli apparati di rete solo localmente sui singoli dispositivi senza disporre di un server syslog centralizzato né di un sistema dedicato al monitoraggio dei log del firewall.",
          "Questa situazione comportava una notevole lentezza nell'analisi dei problemi, un alto rischio di sovrascrittura dei log a causa dello spazio limitato sulle memorie flash dei dispositivi e il pericolo che eventuali malintenzionati potessero cancellare le tracce locali in caso di intrusione.",
        ],
      },
      {
        title: "La soluzione",
        paragraphs: [
          "Per risolvere queste criticità, è stata configurata un'infrastruttura di gestione log centralizzata basata su un server Syslog (rsyslog su macchina virtuale Debian) e sulla piattaforma SIEM Wazuh (su Ubuntu).",
          "In questo modo, tutti gli eventi generati dal firewall Sophos XGS e dagli altri apparati di rete vengono raccolti, elaborati, decodificati e correlati in tempo reale, fornendo al team IT una visibilità immediata sugli incidenti di sicurezza più gravi.",
        ],
      },
    ],
  },
  {
    title: "Dettagli tecnici e funzionalità",
    blocks: [
      {
        title: "Funzionalità chiave",
        items: [
          ["Raccolta e filtraggio Syslog", "Il firewall Sophos XGS4300 invia i propri eventi tramite Syslog al server Debian, dove rsyslog riceve il traffico sulla porta 514 sia in TCP sia in UDP. Prima che i dati vengano analizzati da Wazuh, vengono applicati filtri per eliminare le categorie a basso valore informativo, riducendo il rumore e il volume di dati da elaborare."],
          ["Archiviazione automatizzata su NAS", "I log vengono mantenuti in una struttura organizzata per anno, mese e giorno e, durante la notte, uno script Bash verifica la disponibilità del NAS, comprime i log storici in formato .gz e li trasferisce tramite NFS. Il file sophos.log utilizzato dall'agent Wazuh viene quindi svuotato dopo che gli eventi sono stati elaborati, evitando una crescita indefinita del file locale."],
          ["Decoding", "Sono stati sviluppati decoder personalizzati in PCRE2 per interpretare i diversi formati generati da Sophos ed estrarre informazioni utili come stato dell'autenticazione, utente, IP sorgente e destinazione, porte, protocollo, azione e informazioni specifiche sulla minaccia. I decoder verificati coprono 14 categorie, tra cui Firewall Authentication, SSL VPN, VPN Portal, IPSec, GUI, CLI, Anti-Virus, DoS, IP Spoofing, Active Threat Response, Anti-Spam, WAF, Zero-day/Sandstorm e Firewall Rule."],
          ["Correlazione temporale e allarmi", "Una volta estratti i campi, le regole Wazuh trasformano i singoli eventi in informazioni di sicurezza interpretabili. Sono state implementate regole sia per eventi isolati sia per correlazioni temporali, utilizzando parametri come frequency, timeframe, if_matched_sid e same_srcip. Questo permette, ad esempio, di distinguere un singolo errore di autenticazione da una sequenza ravvicinata di tentativi provenienti dalla stessa sorgente, compatibile con un'attività di brute force."],
          ["Notifiche istantanee multi-canale", "Gli alert di livello pari o superiore a 12 possono generare notifiche e-mail e vengono inoltrati automaticamente a Microsoft Teams attraverso uno script Python, una richiesta HTTP POST e un workflow Power Automate."],
          ["Controllo accessi e ruoli (RBAC)", "Gestione della sicurezza e dei permessi differenziati per gli utenti sulla Wazuh Dashboard e su OpenSearch come da richiesta dell'azienda."],
        ],
      },
      {
        title: "Stack tecnologico",
        paragraphs: [
          "L'infrastruttura utilizza Ubuntu 26.04 LTS per il server Wazuh e Debian 13 per il server Syslog. La componente di raccolta è basata su rsyslog, configurato con i moduli imtcp e imudp, filtri personalizzati e template dinamici per la gestione dei file. Il Wazuh Agent legge il file sophos.log e trasmette gli eventi al Wazuh Manager, che si occupa del pre-decoding, del decoding e dell'applicazione delle regole.",
          "La piattaforma SIEM comprende Wazuh Manager, Wazuh Agent, Wazuh Indexer basato su OpenSearch e Filebeat. Filebeat è stato configurato per indicizzare gli alert, mentre l'invio degli archive è stato disabilitato per limitare il volume di dati indicizzati a ciò che è effettivamente rilevante per il monitoraggio.",
          "Per l'automazione sono stati utilizzati Bash e crontab per la gestione e l'archiviazione dei log, Python 3 con la libreria requests per l'integrazione con Power Automate e il protocollo NFS per il collegamento permanente al NAS. La parte di comunicazione comprende inoltre SMTP per le notifiche e-mail, webhook HTTP POST e Microsoft Teams per la distribuzione degli alert.",
        ],
      },
      {
        title: "Architettura",
        paragraphs: [
          "L'architettura segue una pipeline lineare e separa chiaramente raccolta, filtraggio, analisi, indicizzazione, archiviazione e notifica. Il flusso parte dal Sophos XGS4300, che genera gli eventi e li invia al server Debian tramite Syslog. Rsyslog riceve i messaggi, elimina le categorie non necessarie e scrive gli eventi utili sia nel file sophos.log, monitorato dall'agent Wazuh, sia negli archivi organizzati per data.",
          "Il Wazuh Agent inoltra gli eventi al Wazuh Manager su Ubuntu. Qui ogni log attraversa tre fasi: pre-decoding, decoding e rules. I decoder personalizzati interpretano la struttura del messaggio ed estraggono i campi necessari; successivamente le regole determinano il livello dell'evento e, quando necessario, applicano meccanismi di correlazione temporale. Gli alert risultanti vengono indicizzati attraverso Filebeat e OpenSearch e resi disponibili nella Dashboard.",
          "Parallelamente, i log storici seguono un percorso dedicato verso il NAS. Il processo notturno verifica il mount NFS, comprime e trasferisce i file precedenti e pulisce le directory locali. Per gli alert più importanti, invece, Wazuh attiva l'integrazione Python/Power Automate, che porta l'informazione direttamente su Microsoft Teams, riducendo la dipendenza dal controllo manuale della Dashboard.",
        ],
      },
    ],
  },
  {
    title: "Processo di sviluppo",
    blocks: [
      {
        title: "Fasi di lavoro",
        items: [
          ["Fase 1 - Infrastruttura e archiviazione", "Creazione delle macchine virtuali su Proxmox, predisposizione del server Debian e del server Wazuh e configurazione del mount NFS verso il NAS. In questa fase è stato inoltre sviluppato lo script Bash spostamento-log.sh e programmata la sua esecuzione automatica tramite crontab."],
          ["Fase 2 - Ingestione Syslog e filtri", "Rsyslog è stato configurato per ricevere i messaggi del firewall sulla porta 514 e per applicare filtri prima della loro elaborazione da parte di Wazuh. L'obiettivo era evitare che eventi di servizio e componenti a basso valore informativo occupassero inutilmente spazio e risorse di elaborazione."],
          ["Fase 3 - Sviluppo decoder", "Per ogni categoria di log sono state analizzate le informazioni realmente presenti nei messaggi Sophos e sono state definite regex PCRE2 in grado di estrarre i campi utili. Il corretto riconoscimento è stato verificato attraverso wazuh-logtest, controllando in particolare il nome del decoder e i valori estratti nella Phase 2."],
          ["Fase 4 - Regole e correlazione", "Sono state definite regole per gli eventi singoli e regole basate su frequenza e finestra temporale. Le modifiche sono state validate con wazuh-analysisd -t e attraverso i test della Phase 3, verificando ID della regola, livello assegnato, descrizione e comportamento della correlazione."],
          ["Fase 5 - Integrazioni e RBAC", "Gli alert più importanti vengono inviati via e-mail e, tramite uno script Python collegato a Power Automate, pubblicati su Microsoft Teams. Parallelamente è stata configurata la gestione degli utenti e dei ruoli RBAC sulla Dashboard e sui moduli Wazuh."],
        ],
        itemImages: [
          [scriptSpostamento, archiviazioneNas],
          [syslogEnableScreenshot, syslogFilterScreenshot],
          [],
          [tentativiConnessioneVpn, tracciamentoAttivitaUtenti],
        ],
      },
      {
        title: "Ostacoli e Soluzioni",
        items: [
          ["Log non riconosciuti e conflitti tra decoder", "Alcuni log Sophos non venivano riconosciuti correttamente da Wazuh ed entravano in conflitto con decoder Fortinet predefiniti. Il problema è stato affrontato escludendo i decoder Fortinet coinvolti tramite decoder_exclude e sviluppando decoder personalizzati con PCRE2. Ogni decoder è stato poi verificato con wazuh-logtest, fino a ottenere l'estrazione corretta dei campi necessari."],
          ["Gestione dello spazio disco e rumore nei log", "Il firewall produceva una quantità elevata di eventi e lasciare tutto il traffico in elaborazione avrebbe aumentato il rumore e il consumo di spazio. La soluzione è stata spostare il filtraggio il più possibile a monte, direttamente su rsyslog, escludendo le categorie non utili al monitoraggio. A questo è stata affiancata l'automazione dell'archiviazione: compressione dei log, trasferimento sul NAS e pulizia dei file locali."],
          ["Notifica tempestiva degli incidenti critici", "È stata introdotta una soglia di alert pari a 12 per le notifiche e-mail e per l'integrazione con Teams. Lo script Python legge l'alert JSON, estrae livello, descrizione, ID della regola, agente e IP sorgente e costruisce il payload inviato a Power Automate."],
        ],
      },
    ],
  },
  {
    title: "Risultati",
    blocks: [
      {
        title: "Stato attuale",
        paragraphs: [
          "Il sistema risulta operativo e collaudato sulle principali categorie di eventi del firewall Sophos XGS4300 analizzate nel progetto. Nel corso dello sviluppo sono stati realizzati decoder personalizzati e relative regole di sicurezza per le diverse tipologie di log. L'infrastruttura consente quindi di centralizzare i log, ridurre il rumore prima dell'analisi, interpretare gli eventi attraverso decoder dedicati e applicare regole di detection e correlazione.",
          "Considero l'infrastruttura SIEM funzionante e utilizzabile per il monitoraggio degli eventi di sicurezza, pur rimanendo un progetto ulteriormente estendibile. Le soglie e le regole possono infatti essere affinate sulla base di un periodo più lungo di osservazione del traffico reale, così da distinguere con maggiore precisione i comportamenti normali da quelli anomali.",
        ],
      },
      {
        title: "Metriche di successo",
        bullets: [
          "Correlazione automatica e rilevamento dei tentativi di brute force con generazione di alert di livello 12, 13, 14 o 15.",
          "Tempi di notifica su Microsoft Teams inferiori a 10 secondi dall'accadimento dell'evento critico.",
          "Automazione al 100% del processo notturno di pulizia, compressione e archiviazione su NAS.",
        ],
      },
      {
        title: "Cosa ho imparato",
        sections: [
          { title: "Competenze tecniche", paragraphs: ["Il progetto mi ha permesso di consolidare competenze nell'amministrazione di sistemi Linux, nella configurazione di rsyslog e NFS e nella gestione di una piattaforma SIEM come Wazuh. Ho acquisito una comprensione più concreta di come un evento attraversi una pipeline di sicurezza: dalla generazione del log sul firewall, alla raccolta centralizzata, fino al parsing, all'estrazione dei campi, alla valutazione delle regole e alla generazione dell'alert.", "Una parte importante dell'esperienza è stata la realizzazione e il debugging dei decoder PCRE2. Lavorare su log reali Sophos ha richiesto di analizzare attentamente la loro struttura, individuare i campi realmente utili e costruire regex sufficientemente precise da poter essere utilizzate dalle regole successive. La verifica tramite wazuh-logtest e le diverse fasi di analisi ha permesso di sviluppare un metodo di troubleshooting più strutturato.", "Ho inoltre approfondito la correlazione degli eventi attraverso parametri come frequency, timeframe, if_matched_sid, same_srcip e same_dstip. Questo mi ha permesso di passare dalla semplice registrazione di eventi alla costruzione di una logica di detection capace di riconoscere sequenze potenzialmente significative, come tentativi ripetuti di autenticazione, flood e altre attività anomale.", "Dal punto di vista operativo, ho acquisito esperienza nell'automazione tramite Bash e crontab, nella gestione dello storage dei log e nell'integrazione tra sistemi differenti."] },
          { title: "Soft skill", paragraphs: ["Il progetto mi ha inoltre insegnato quanto sia importante procedere per livelli durante il troubleshooting: prima verificare che il log venga ricevuto, poi che venga riconosciuto dal decoder, successivamente che i campi vengano estratti correttamente e infine che la regola venga attivata con il livello previsto.", "Infine, il progetto ha rafforzato la capacità di documentare un'infrastruttura tecnica complessa in modo riproducibile, descrivendo non solo la configurazione finale ma anche le motivazioni delle scelte effettuate e le verifiche utilizzate per validarle."] },
        ],
      },
    ],
  },
]

type IconName = "home" | "folder" | "award" | "mail" | "file" | "arrow"
const icons: Record<IconName, ReactNode> = {
  home: (
    <path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Z M9 21v-6h6v6" />
  ),
  folder: (
    <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="m8.5 13.5-1 7 4.5-2.5 4.5 2.5-1-7" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
      <path d="M14 2v6h6M8 13h8M8 17h5" />
    </>
  ),
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
}
function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {icons[name]}
    </svg>
  )
}

const links = [
  { id: "home", label: "Home", icon: "home" as IconName },
  { id: "progetti", label: "Progetti", icon: "folder" as IconName },
  { id: "certificazioni", label: "Certificazioni", icon: "award" as IconName },
  { id: "contatti", label: "Contatti", icon: "mail" as IconName },
]

function Header({
  active,
  onGoTo,
}: {
  active?: string
  onGoTo?: (id: string) => void
}) {
  const location = useLocation()
  const navigate = useNavigate()
  const go = (id: string) => {
    if (onGoTo) onGoTo(id)
    else navigate(`/?section=${id}`)
  }
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#383e45]/95 shadow-[0_8px_24px_rgba(0,0,0,.16)] backdrop-blur-xl">
      <Link
        to="/"
        className="absolute left-10 top-0 flex h-[66px] items-center font-display text-lg tracking-tight text-white transition-opacity hover:opacity-70 sm:left-[4.125rem]"
      >
        SP<span className="text-primary">.</span>
      </Link>
      <div className="mx-auto flex h-[66px] max-w-6xl items-stretch justify-center px-4 sm:px-6">
        <nav
          aria-label="Navigazione principale"
          className="ml-10 flex min-w-0 items-stretch gap-2 overflow-x-auto [scrollbar-width:none] sm:ml-0 sm:gap-8 [&::-webkit-scrollbar]:hidden"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`group flex min-w-[68px] flex-col items-center justify-center gap-1 px-2 font-sans text-[9px] font-medium tracking-[.01em] transition-colors sm:min-w-[82px] sm:text-[10px] ${
                active === link.id || (!active && location.search.includes(link.id))
                  ? "font-bold text-primary"
                  : "text-slate-200 hover:font-bold hover:text-primary"
              }`}
            >
              <Icon name={link.icon} className="size-4" />
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

function ProjectCard({ project }: { project: HomeProject }) {
  const content = (
    <>
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs text-primary">{project.number}</span>
        <div className="flex flex-wrap justify-end gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-24 flex flex-1 flex-col">
        <h3 className="font-display text-3xl text-white">{project.title}</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">{project.summary}</p>
        {project.available ? (
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
            Apri progetto <Icon name="arrow" className="size-4" />
          </span>
        ) : (
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-primary" /> Progetto in corso
          </span>
        )}
      </div>
    </>
  )

  if (!project.available) return <article className="flex min-h-72 flex-col bg-card p-7">{content}</article>
  return <Link to={`/progetti/${project.slug}`} className="group flex min-h-72 flex-col bg-card p-7 transition hover:bg-[#585f67]">{content}</Link>
}

export function PortfolioHome() {
  const [active, setActive] = useState("home")
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const section = new URLSearchParams(location.search).get("section")
    if (section)
      setTimeout(
        () =>
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: "smooth" }),
        20,
      )
  }, [location.search])
  useEffect(() => {
    const update = () => {
      const at = window.scrollY + window.innerHeight * 0.42
      const current = [...links]
        .reverse()
        .find(
          ({ id }) =>
            (document.getElementById(id)?.offsetTop ?? Infinity) <= at,
        )
      if (current) setActive(current.id)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])
  const goTo = (id: string) => {
    setActive(id)
    navigate(id === "home" ? "/" : `/?section=${id}`)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/35">
      <Header active={active} onGoTo={goTo} />
      <section
        id="home"
        className="relative flex min-h-[100svh] items-center justify-center px-6 pt-24 text-center"
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(64,255,188,.28),transparent_68%)]" />
        <div className="relative max-w-4xl">
          <p className="mb-8 font-mono text-[10px] tracking-[.38em] text-slate-300 sm:text-xs">
            {portfolio.role.toUpperCase().replaceAll(" · ", "  •  ")}
          </p>
          <h1 className="font-display text-6xl font-bold leading-[.88] tracking-[-.06em] text-white sm:text-8xl lg:text-[8.5rem]">
            Portfolio di
            <br />
            <span className="text-primary">{portfolio.name}</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            {portfolio.introduction}
          </p>
          <div className="mx-auto mt-10 h-1 w-12 rounded-full bg-primary" />
        </div>
        <button
          onClick={() => goTo("progetti")}
          className="absolute bottom-8 text-3xl leading-none text-slate-300 transition hover:translate-y-1 hover:text-white"
          aria-label="Scorri ai progetti"
        >
          ⌄
        </button>
      </section>
      <section
        id="progetti"
        className="border-t border-white/10 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            index="01"
            label="Progetti"
            title="Esperimenti, con un obiettivo preciso:"
            subtitle={<>trasformare la curiosità in competenze <span className="font-bold text-primary">concrete.</span></>}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {homeProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>
      <section id="certificazioni" className="bg-secondary px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <SectionIntro
            index="02"
            label="Certificazioni"
            title="Formazione continua, applicata."
          />
          <div className="divide-y divide-white/10 border-y border-white/10">
            {[
              { title: "Microsoft Security, Compliance and Identity Fundamentals (SC-900)", credentialId: "406F5158E07309E4" },
              { title: "Microsoft Azure Fundamentals (AZ-900)", credentialId: "C387D62CE09B14B2" },
              { title: "AWS Certified Cloud Practitioner (CLF-C02)", credentialId: "66246b1e104d43e7a431e0e2da4eb50a" },
            ].map((cert, i) => (
              <div
                key={cert.credentialId}
                className="flex items-center justify-between gap-4 py-6"
              >
                <div>
                  <p className="font-mono text-[10px] tracking-[.22em] text-primary">
                    0{i + 1} / 2026
                  </p>
                  <h3 className="mt-2 text-lg text-white">{cert.title}</h3>
                  <p className="mt-2 inline-flex rounded-full border border-white/35 px-2 py-1 font-mono text-[10px] tracking-[.06em] text-white/85">Credential ID: {cert.credentialId}</p>
                </div>
                <Icon name="award" className="size-6 shrink-0 text-slate-400" />
              </div>
            ))}
          </div>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-[.3em] text-primary lg:col-start-1 lg:row-start-2">// Prossimi obiettivi</p>
          <div className="mt-5 divide-y divide-white/10 border-y border-white/10 lg:col-start-2 lg:row-start-2 lg:mt-12">{upcomingCertifications.map((certification, index) => <div key={certification} className="flex items-center justify-between gap-4 py-6"><div><p className="font-mono text-[10px] tracking-[.22em] text-primary">0{index + 1} / obiettivo</p><h3 className="mt-2 text-lg text-white">{certification}</h3><p className="mt-2 inline-flex rounded-full border border-white/35 px-2 py-1 font-mono text-[10px] tracking-[.06em] text-white/85">Credential ID: Da conseguire</p></div><Icon name="award" className="size-6 shrink-0 text-slate-400" /></div>)}</div>
        </div>
      </section>
      <section id="contatti" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl rounded-3xl border border-primary/25 bg-[radial-gradient(circle_at_80%_20%,rgba(64,255,188,.2),transparent_35%)] p-8 sm:p-14">
          <p className="font-mono text-[10px] uppercase tracking-[.3em] text-primary">
            / Contatti
          </p>
          <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-5xl leading-none tracking-tight text-white sm:text-7xl">
                Restiamo
                <br />
                in contatto.
              </h2>
              <p className="mt-6 max-w-md text-slate-400">
                Per informazioni sul mio percorso e sui progetti che sto
                sviluppando, scrivimi pure.
              </p>
              <a
                href={`mailto:${portfolio.email}`}
                className="mt-6 inline-flex items-center gap-3 text-lg text-white underline decoration-primary decoration-2 underline-offset-8 transition hover:text-primary"
              >
                <Icon name="mail" className="size-5 text-primary" />
                {portfolio.email}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [slug])
  if (!project)
    return (
      <main className="min-h-screen bg-background text-white">
        <Header />
        <div className="mx-auto max-w-3xl px-6 pt-48 text-center">
          <p className="font-mono text-primary">404</p>
          <h1 className="mt-4 font-display text-5xl">Progetto non trovato.</h1>
          <Link
            to="/?section=progetti"
            className="mt-8 inline-block text-primary underline"
          >
            Torna ai progetti
          </Link>
        </div>
      </main>
    )
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <article className="mx-auto max-w-6xl px-6 pb-24 pt-28 sm:pt-32">
        <Link
          to="/?section=progetti"
          className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 transition hover:text-primary"
        >
          <span>←</span> Tutti i progetti
        </Link>
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="font-mono text-xs tracking-[.28em] text-primary">
              #{project.number} / {project.tag.toUpperCase()} / {project.year}
            </p>
            {project.status === "In corso" && <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.16em] text-primary"><span className="size-1.5 rounded-full bg-primary" />Progetto in corso</p>}
            <h1 className="mt-6 font-display text-5xl leading-[.92] tracking-tight text-white sm:text-7xl">
              {project.title}
            </h1>
            <p className="mt-8 text-sm leading-relaxed text-slate-300 sm:text-base">
              {project.description}
            </p>
          </div>
          <aside className="border-l border-white/10 pl-6 sm:pl-8">
            <p className="font-mono text-[10px] uppercase tracking-[.25em] text-slate-500">
              Tecnologie
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-card px-3 py-1.5 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </div>
        <ProjectImage src={project.heroImage} label="Immagine di copertina del progetto" className="mx-auto mt-16 aspect-video max-w-5xl" />
        {project.slug === "infrastruttura-controllo-log" ? <SiemCaseStudy /> : <>
        <div className="mt-20">
          <p className="font-mono text-[10px] uppercase tracking-[.3em] text-primary">// contesto</p>
          <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-slate-200 sm:text-base">{project.context}</p>
        </div>
        <section className="mt-20 pt-14">
          <p className="font-mono text-[10px] uppercase tracking-[.3em] text-primary">// realizzazione</p>
          <div className="mt-6">
            {project.implementationSections.map((section, index) => <section key={section.title} className={`py-12 ${index === 0 ? "pt-6" : ""}`}><h2 className="text-2xl font-semibold leading-tight text-white">{section.title}</h2><p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-slate-300 sm:text-base">{section.text}</p><div className={`mt-8 grid max-w-4xl gap-4 ${section.images.length > 3 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>{section.images.map((image, imageIndex) => <ProjectImage key={`${section.title}-${imageIndex}`} src={image} label={`${section.title} — screenshot ${String(imageIndex + 1).padStart(2, "0")}`} className="aspect-[4/3]" fill={index !== 0 || imageIndex !== 0} />)}</div></section>)}
          </div>
        </section>
        <section className="mt-16">
          <p className="font-mono text-[10px] uppercase tracking-[.3em] text-primary">// cosa ho imparato</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {project.focus.map((item, i) => <li key={item} className="border-l border-primary pl-4 text-lg text-slate-200"><span className="mb-2 block font-mono text-[10px] text-slate-500">0{i + 1}</span>{item}</li>)}
          </ul>
        </section>
        </>}
      </article>
      <Footer />
    </main>
  )
}

function SiemCaseStudy() {
  return <div className="mt-20">
    {siemCaseStudy.map((chapter, chapterIndex) => <section key={chapter.title} className={chapterIndex === 0 ? "pb-20" : "py-20"}>
      <p className="font-mono text-[10px] uppercase tracking-[.3em] text-primary">// {chapter.title}</p>
      <div className="mt-10 space-y-12">
        {chapter.blocks.map((block) => <div key={block.title} className="max-w-5xl">
          <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">{block.title}</h2>
          {"paragraphs" in block && <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">{block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
          {"items" in block && <div className="mt-6 space-y-6">{block.items.map(([title, text], itemIndex) => <div key={title}><h3 className="text-base font-semibold text-slate-100 sm:text-lg">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">{text}</p>{"itemImages" in block && block.itemImages[itemIndex]?.length > 0 && <div className="mt-5 grid max-w-2xl gap-3 sm:grid-cols-2">{block.itemImages[itemIndex].map((image, imageIndex) => <ProjectImage key={`${title}-${imageIndex}`} src={image} label={`${title} — schermata ${String(imageIndex + 1).padStart(2, "0")}`} className="aspect-[4/3]" fill />)}</div>}</div>)}</div>}
          {"bullets" in block && <ul className="mt-6 space-y-3">{block.bullets.map((item) => <li key={item} className="border-l border-primary pl-4 text-sm leading-relaxed text-slate-300 sm:text-base">{item}</li>)}</ul>}
          {"sections" in block && <div className="mt-6 space-y-7">{block.sections.map((section) => <div key={section.title}><h3 className="text-base font-semibold text-slate-100 sm:text-lg">{section.title}</h3><div className="mt-2 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>)}</div>}
          {"images" in block && <div className={`mt-8 grid max-w-4xl gap-4 ${block.images.length > 3 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>{block.images.map((image, imageIndex) => <ProjectImage key={`${block.title}-${imageIndex}`} src={image} label={`${block.title} — schermata ${String(imageIndex + 1).padStart(2, "0")}`} className="aspect-[4/3]" fill />)}</div>}
        </div>)}
      </div>
    </section>)}
  </div>
}

function ProjectImage({ src = "", label, className, fill = false }: { src?: string; label: string; className: string; fill?: boolean }) {
  const [open, setOpen] = useState(false)
  const resolvedSrc = src ? (src.startsWith("/") ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`) : ""
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false)
    if (open) window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [open])
  if (src) return <><figure className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#05080d] ${className}`}><button type="button" onClick={() => setOpen(true)} className="size-full cursor-zoom-in" aria-label={`Apri ${label} a grandezza intera`}><img src={resolvedSrc} alt={label} className={`h-full w-full transition duration-300 group-hover:scale-[1.02] ${fill ? "object-cover" : "object-contain"}`} /></button><span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.14em] text-white opacity-0 backdrop-blur transition group-hover:opacity-100">Clicca per ingrandire</span></figure>{open && <div role="dialog" aria-modal="true" aria-label={label} onClick={() => setOpen(false)} className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-[#02050b]/95 p-4 backdrop-blur-sm"><button type="button" onClick={(event) => { event.stopPropagation(); setOpen(false) }} className="absolute right-5 top-5 rounded-full border border-white/20 px-4 py-2 font-mono text-xs text-white transition hover:bg-white/10">Chiudi ×</button><img src={resolvedSrc} alt={label} onClick={(event) => event.stopPropagation()} className="max-h-[88vh] max-w-[94vw] cursor-default rounded-xl object-contain shadow-2xl" /></div>}</>
  return <div className={`flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-600/60 bg-card/60 p-6 text-center ${className}`}><Icon name="file" className="size-7 text-slate-600" /><p className="mt-4 font-mono text-[10px] uppercase tracking-[.2em] text-slate-500">{label}</p><p className="mt-2 max-w-xs text-xs leading-relaxed text-slate-600">Aggiungi il percorso dell'immagine nella configurazione del progetto.</p></div>
}
function SectionIntro({
  index,
  label,
  title,
  subtitle,
}: {
  index: string
  label: string
  title: string
  subtitle?: ReactNode
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[.3em] text-primary">
      / {label}
      </p>
      <h2 className="mt-5 max-w-lg font-display text-4xl leading-[.98] tracking-tight text-white sm:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}
function Footer() {
  return (
    <footer className="flex flex-col gap-3 border-t border-white/10 px-6 py-7 text-center font-mono text-[10px] uppercase tracking-[.18em] text-primary sm:flex-row sm:justify-between">
      <span>© 2026</span>
      <span>{portfolio.availability}</span>
    </footer>
  )
}
