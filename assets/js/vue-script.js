var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    about: {
      title: "ABOUT ME",
      subtitle:
        "CIAO! Sono Angelo Longano, studente e appassionato di informatica",
      description:
        "Frequento l'istituto Blaise Pascal di Reggio Emilia, una scuola difficile e ardua ma allo stesso tempo divertente e avvolgente. Ho scelto di indirizzare il mio percorso verso l'informatica perchè fin da piccolo mi entusiasmava usare il computer ed ero curioso di scoprire come fosse fatto, il suo funzionamento e magari come migliorarlo."
    },
    activities: [
      {
        id: 1,
        changeYear: true,
        name: "terzo-anno",
        first: "TERZO",
        second: "ANNO"
      },
      {
        id: 2,
        title: "PRIMO GIORNO",
        period: "08 gennaio 2018",
        name: "firstDay",
        miniDescrption:
          "Ho avuto la mia prima esperienza di PCTO in Unindustria, un'associazione territoriale del Sistema Confindustria. Il primo giorno è stato dedicato ad una introduzione al mondo del lavoro. ",
        descrption:
          "Ho avuto la mia prima esperienza di PCTO in Unindustria, un'associazione territoriale del Sistema Confindustria. Essa infatti non è un'azienda, ma è l'Associazione Industriale della Provincia di Reggio Emilia che si occupa di offrire dei servizi alle piccole, medie o grandi imprese manifatturiere. Questi servizi aiutano l'azienda in ambito produttivo, economico e tecnologico.<br><br>Il primo giorno è stato dedicato ad una introduzione al mondo del lavoro. Inizialmente abbiamo parlato del mondo del lavoro con i vari settori e ci siamo soffermati nella richiesta di lavoro: i dati dicono che c'è un'alta richiesta di persone che abbiano conoscenze in ambito tecnologico (anche basilari). Oggi, molte aziende cercano queste persone, ma non li trovano. Oltre a questo abbiamo constatato che il modo di lavorare e quello di fare impresa è cambiato nel tempo, a causa del nuovo mondo tecnologico. Quindi è importante, soprattutto per le imprese, stare al passo con i tempi ed essere sempre aggiornati delle nuove tecnologie o nuove metodologie di marketing. Infatti abbiamo parlato anche di marketing e come esso sia essenziale per le aziende.",
        agency: "Unindustria",
        urlAgency:
          "http://www.unindustriareggioemilia.it/ecm/web/aire/primary/home",
        positionLeft: true,
        changeYear: false
      },
      {
        id: 3,
        title: "Gestione Social",
        period: "",
        name: "gestioneSocial",
        miniDescrption:
          "Con Matrix Media abbiamo trattato gli elementi che caratterizzano un'azienda e l’importanza di una buona gestione social in questo nuovo mondo.",
        descrption:
          "Erica Maccieri è una Project Manager, Social Media Manager di Matrix Media. Questa giovane ragazza si è occupata del primo progetto: gli elementi che caratterizzano un'azienda e la sua gestione social. Il progetto che ci ha portato era diviso in due parti:<br><ul><li>Nella prima parte del progetto abbiamo trattato le varie caratteristiche di un'azienda e quali deve avere per essere definita tale.</li><li>Nella seconda parte del progetto abbiamo trattato, più nella dettaglio, una delle principali caratteristiche di un'azienda: l'ambito social.</li></ul><br><br>Una azienda è un'organizzazione di beni e capitale umano finalizzata alla soddisfazione di bisogni umani attraverso la produzione, la distribuzione o il consumo di beni economici e servizi verso clienti, strutturata secondo una certa organizzazione aziendale e amministrata secondo una certa amministrazione aziendale da parte del management aziendale. Un'azienda può appartenere ad uno dei seguenti settori economici: settore primario (agricoltura o allevamento), settore secondario (industria), settore terziario (società di servizi).<br><br>Ogni azienda possiede un obiettivo, cioè crescere, e per fare ciò ha bisogno di vendere. Avere una buona gestione dell'immagine dell'azienda e del prodotto che si vende è essenziale per far crescere un'azienda.Quindi è importante la presentazione della propria azienda al pubblico o ad altre aziende più grosse, le quali potrebbero finanziare i vari progetti che intende raggiungere.<br><br>Come prima attività, ci siamo divisi in gruppi e ognuno di essi ha ricevuto il nome dell'azienda con le varie caratteristiche. Il mio gruppo ha ricevuto <a href='https://drive.google.com/open?id=1MxNdNlZKZQ-pdqXwJ777gWDf-hBppmPPcflVFev1uwM' target='_blank'>Redlips Cosmetics</a>, un'azienda che si occupa nella produzione di cosmetici, e il prodotto da 'pubblicizzare' era un rossetto effetto opaco e con lunga durata.<br><br>La presentazione doveva contenere:<br><ul><li>la storia </li><li>gli obiettivo</li><li>i punti di forza e di debolezza</li><li>il target dei propri prodotti</li><li>vantaggio competitivo</li></ul><br>Per fare ciò abbiamo avuto veramente poco tempo (20 minuti circa) per creare una presentazione dell'azienda che ci aveva assegnato. In seguito, abbiamo trattato la parte social di un'azienda.<br><br>Facebook è stato, e lo è ancora adesso, il social più utilizzato dalle persone e quindi l'opinione pubblica può essere molto influenzata da esso. Per un'azienda avere una buona 'reputazione' su Facebook è importante.Qui inizia la seconda attività: creare una pagina Facebook della 'propria' azienda.<br>Quindi, con dei dati di una persona inesistente, abbiamo creato un'account e successivamente la pagina che pubblicizza i prodotti dell'azienda. <br><br>In conclusione, il progetto è stato molto bello e interessante per quanto riguarda l'importanza della gestione marketing di un'azienda. La cosa che non mi è piaciuta tanto è stata la durata delle attività: troppo brevi e le attività che potevano essere eseguite da due massimo tre ragazzi, sono stati assegnati a gruppi di sei persone.",
        agency: "Matrix Media",
        urlAgency: "https://www.matrixmedia.it/",
        positionLeft: false,
        changeYear: false
      },
      {
        id: 4,
        title: "Gestione evento",
        period: "",
        name: "gestioneEvento",
        miniDescrption:
          "Con 47deck abbiamo trattato la creazione e la gestione di un evento, una cosa molto importante per le aziende di oggi.",
        descrption:
          "47 Deck è un’azienda di consulenza e servizi, specializzata nello sviluppo e realizzazione di progetti digital. Il nostro team unisce competenze tecnologiche e di marketing, di comunicazione e cultura digitale.<br>Con 47deck abbiamo trattato la creazione e la gestione di un evento, una cosa molto importante si per noi ma anche per le imprese e Unindustria, siccome gestisce anche lei degli eventi.<br><br>Le piattaforme che ci hanno presentato sono:<br><ul><li> <a href='https://mailchimp.com/features/landing-pages/' target='_blank'> Mailchimp </a>, per la gestione delle mail da inviare ai partecipanti.</li><li> <a href='https://www.eventbrite.it/' target='_blank'>  Evenbrite</a>, per la gestione della registrazione dei partecipanti.</li></ul><br><br>L'organizzazione dell'evento va studiata bene: in base agli orari, agli argomenti da trattare, a chi è rivolto l'evento...<br>Lo studio dei singoli dettagli determinerà il successo dell'evento. Dopo aver studiato di cosa parlare all'evento e come, bisogna cercare un pubblico e gestire la registrazione dell'evento.<br>Usando Evenbrite è possibile gestire la registrazione dell'evento, ed è importante descrivere in modo dettagliato l'evento e a chi è rivolto. Questo è molto importante per non creare equivoci...Dopo aver finito di gestire la registrazione dei partecipanti, posso anche finire perchè Evenbrite è una piattaforma abbastanza conosciuta dove molte persone possono vedere e leggere il mio evento.<br>Per avere un pubblico più ampio e sicuro, è opportuno usare modi aggiuntivi per pubblicizzare il mio evento, per esempio Mailchimp. Mailchimp è una piattaforma con la quale posso gestire le varie mail di un evento: invito, ricevuta iscrizione e ringraziamento.<br>Con queste due piattaforme online gratuite posso organizzare un evento, avendo una gestione automatizzata del tutto.<br><br>Come attività ci hanno proposto di creare e gestire la giornata della scuola aperta alle famiglie dei figli che frequentano la terza media e il prossimo anno dovranno andare in una scuola superiore. L'evento del mio gruppo si chiamava Vivi il Bus.<br><br>In conclusione, il progetto è stato molto interessante e utile. Il numero di persone (4) per gruppo era giusto e non troppo numeroso, ed in questo modo siamo riusciti a lavorare in modo molto efficace. L'unica pecca è stata la lunga spiegazione: siamo stati tre giorni con 47deck, nei quali il primo hanno spiegato tutto il giorno, il secondo (loro non erano presenti) abbiamo lavorato in gruppo  e il terzo giorno c'era la consegna del lavoro. Noi tutti abbiamo riscontrato dei problemi il secondo giorno quando abbiamo messo mano per la prima volta alle due piattaforme, ma non potevamo chiedere aiuto a nessuno (incomprensioni nella consegna in particolare). Ma del resto è stata un'esperienza molto utile e istruttiva.",
        agency: " 47 Deck",
        urlAgency: "https://www.47deck.it/",
        positionLeft: true,
        changeYear: false
      },
      {
        id: 5,
        title: "Gestione SEO",
        period: "",
        name: "gestioneSeo",
        miniDescrption:
          "Con Webranking abbiamo trattato l'argomento del Seo, cioè come aumentare la visibilità di un sito web. ",
        descrption:
          " <a href='https://www.webranking.it/' target='_blank'>  Webranking</a> è un’agenzia internazionale full digital con sedi a Correggio (RE), Milano e Vancouver, nata nel 1998 agli albori dell’Internet commerciale.  Essa è la maggiore search agency indipendente italiana e offre consulenza strategica di digital marketing per i più importanti brand italiani e internazionali attraverso attività di media planning, experience design e data intelligence.<br><br>Con Webranking abbiamo trattato l'argomento del  <a href='https://drive.google.com/open?id=1xP73niewE3zzJENqZb4VlvyUmc4a-S7JqUgjJxlT3ys' target='_blank'> Seo </a>, cioè come aumentare la visibilità di un sito nel web. Infatti il lavoro di Webranking consiste nel ristrutturare siti web o crearli da zero, in modo da avere un design accattivante e una struttura ad hoc per l’ottimizzazione del seo, e quindi garantire visibilità al sito del cliente. Con SeoCon Seo (Search Engine Optimization) si intendono tutte quelle attività volte a migliorare la visibilità di un sito web sui motori di ricerca.<br><br>Dopo averci diviso in gruppi da 6, Webranking ci ha proposto lo studio delle keywords di un sito con un determinato argomento, il mio era Gran Turismo. Per ogni keywords dovevamo individuare una macro e una micro categoria, un lavoro molto impegnativo con il tempo che abbiamo avuto: più di 300 keywords in meno di un' ora... nessuno è riuscito a finire.<br>L'obiettivo, comunque, non era finire ma provare il lavoro che fa ogni giorno Webranking.<br>Come seconda attività abbiamo creato una pagina esempio del sito che presenta il suo prodotto (il gioco Gran Turismo), dove abbiamo messo in primo piano il design e le frasi 'ad effetto' per invogliare l'acquisto. <br><br>In conclusione, il progetto è stato molto interessante e in particolare la parte teorica, mentre la parte pratica è stata più carente e secondo me bisognava organizzarla meglio. Purtroppo abbiamo avuto poco tempo...",
        agency: "Webranking",
        urlAgency: "https://www.webranking.it/",
        positionLeft: false,
        changeYear: false
      },
      {
        id: 6,
        title: "Caso DOCKS",
        period: "",
        name: "casoDocks",
        miniDescrption:
          "Il nostro docente ci ha proposto il caso 'DOCKS':  la multinazionale DOCKS vuole acquistare 400.000 pezzi di un prodotto nei prossimo, di conseguenza inizia una gara tra Start-Up per aggiudicarsi l'appalto.",
        descrption:
          "Il professor Nicola Carpanoni è stato il mio docente di telecomunicazione in terza e quarta.<br>Il nostro docente ci ha proposto il caso 'DOCKS':  la multinazionale DOCKS vuole acquistare 400.000 pezzi di un prodotto nei prossimo, di conseguenza inizia una gara tra Start-Up per aggiudicarsi l'appalto.<br><br>Il professore ci ha diviso in gruppi da 4 persone e ogni gruppo era una Start-Up e doveva consegnare entro una data specifica, un dossier che promuova il prodotto e le sue caratteristiche con cui è stato sviluppato, il suo prezzo di vendita, il breakdown dei costi che assicurino la multinazionale che la Start-Up non sia in perdita e che sia sostenibile il ruolo di fornitore per i prossimi anni.<br><br>CONSEGNA:<br>'La DOCKS desidera un sensore con display LCD da utilizzare in abbinamento ad un singolo vaso con una pianta dentro, che rilevi ed indichi la temperatura ed il grado di umidità. Sarebbe disponibile a valutare, a fronte di un sovrapprezzo, una possibile estensione delle funzionalità del sensore con l’indicazione del livello di luminosità e del livello di presenza di acqua nel sottovaso, purché il prezzo rimanga competitivo'<br><br>La risposta del mio gruppo è stata la creazione di <a href='https://drive.google.com/open?id=1QUAwIJB2GKl-_giLKtPFvUpmFjRpv-6V-98_nSCIXm0' target='_blank'> Kasvi </a>.<br><br>In conclusione, questa è stata l'attività più utile dell'alternanza fatta ad Unindustria. Poca teoria, tanta pratica.",
        agency: "Blaise Pascal",
        urlAgency: "https://www.pascal.edu.it/",
        positionLeft: true,
        changeYear: false
      },
      {
        id: 7,
        title: "Monta e Smonta",
        period: "",
        name: "montaSmonta",
        miniDescrption:
          "Il professore Barbella (ITP di informatica) ci ha proposto di smontare dei computer della scuola, ovviamente non funzionanti o con qualche problema di sistema, e come sfida di rimontarli esattamente come prima.",
        descrption:
          "Il professore Barbella (ITP di informatica) ci ha proposto di smontare dei computer della scuola, ovviamente non funzionanti o con qualche problema di sistema, e come sfida di rimontarli esattamente come prima. <br><br>La classe è stata divisa in gruppetti da tre e hanno iniziato il loro lavoro. Ogni gruppo aveva un computer fisso, un po' datato, e doveva smontarlo pezzo per pezzo. Nell'immagine a sinistra possiamo notare tutti i vari elementi che compongono un computer: ventole, memorie... <br>Una volta analizzato tutti gli elementi, li abbiamo rimessi al loro posto. <br><br>Un'esperienza molto interessante anche se avevo già smontato un computer, ma il professore ci ha spiegato il modo in cui funzionano le varie parti hardware e risposto ad alcune mie curiosità.",
        agency: "Blaise Pascal",
        urlAgency: "https://www.pascal.edu.it/",
        positionLeft: false,
        changeYear: false
      },
      {
        id: 8,
        title: "Creare un gioco in Python",
        period: "",
        name: "stageParma",
        miniDescrption:
          "Con i professore Angiani e Tomaiuolo dell’Università di Parma abbiamo imparato la programmazione orientata ad oggetti usando Python, come obiettivo la creazione di un videogioco (Space Invaders).",
        descrption:
          "Con i professore Angiani e Tomaiuolo dell’Università di Parma abbiamo imparato la programmazione orientata ad oggetti usando Python, come obiettivo la creazione di un videogioco (Space Invaders).<br><br>Lo stage è durato 5 giorni dove inizialmente abbiamo visto le basi della programmazione, perchè il progetto hanno partecipato studenti di tante scuole e non tutti avevano il vantaggio di  provenire da un indirizzo informatico.<br>Siamo stati divisi in due gruppi: un gruppo (tra cui io) ha studiato Python , mentre l’altro Go.<br><br>Gli argomenti trattati sono stati i seguenti:<br><br><ul><li>conoscenza della sintassi di Python</li><li>tipi, dichiarazioni delle variabili e type inference</li><li>array e puntatori in Python</li><li>strutture di selezione e iterazione</li><li>dichiarazione di oggetti e classi</li><li>principi della OOP</li><li>ereditarietà in Python, interfacce</li><li>applicazioni della OOP per creare videogiochi</li><li>collision detection</li></ul><br><br>Il corso è stato impegnativo e divertente allo stesso tempo: la velocità con cui abbiamo affrontato gli argomenti è stata molto rapida, però quando abbiamo iniziato a programmare il gioco è stato molto bello, anche perchè ho scoperto tante cose nuove.<br><br>Infine devo dire che l’attività è stata molto utile e produttiva, anche perchè mi ha dato un’idea di 'vita universitaria'.",
        agency: "Università di Parma",
        urlAgency: "https://www.unipr.it/",
        positionLeft: true,
        changeYear: false
      },
      {
        id: 9,
        changeYear: true,
        name: "quarto-anno",
        first: "QUARTO",
        second: "ANNO"
      },

      {
        id: 10,
        title: "WalkToWork: Digital Career",
        period: "",
        name: "digitalCareer",
        miniDescrption:
          "Abbiamo partecipato ad una giornata organizzato dal Team Contamina dove abbiamo affrontato il tema del lavoro, come preparare un buon curriculum e affrontare nel modo giusto un colloquio.",
        descrption:
          "Abbiamo partecipato ad una giornata organizzato dal Team Contamina dove abbiamo affrontato il tema del lavoro, come preparare un buon curriculum e affrontare nel modo giusto un colloquio.<br><br>La prima conferenza è stata tenuta dall'azienda Archimede S.p.A che ha trattato i seguenti argomenti:<br><br><ul><li>importanza del curriculum vitae</li><li>impostazione del curriculum vitae, divisione in categorie di appartenenza</li><li>illustrazione del formato Europass</li><li>job board e come usarli</li><li>utilizzo di Linkedin in campo professionale</li><li>comportamento da tenere durante un colloquio</li></ul><br><br>In seguito abbiamo assistito a due conferenze dove due rappresentanti delle aziende Webranking e Energy Way, ci hanno presentato la loro realtà lavorativa e la loro esperienza personale nel mondo del lavoro.<br>Durante il pomeriggio è stata organizzata una simulazione di colloquio di lavoro e di creazione di CV per mettere in pratica le nozioni imparate nella mattinata.<br><br>Un'esperienza molto utile dato che il mondo del lavoro si avvicina sempre di più, ed entrarci preparati è importante.",
        agency: "Team Contamina",
        urlAgency: "https://www.contamina.me/",
        positionLeft: false,
        changeYear: false
      },
      {
        id: 11,
        title: "Mobile Developer in stage",
        period: "",
        name: "mobileDeveloper",
        miniDescrption:
          "Con AND EMILI ho svolto lo stage estivo dove ho contribuito allo sviluppo di un’app mobile per un loro cliente.",
        descrption:
          "AND EMILI è una digital agency di Reggio Emilia specializzata in progetti digitali, marketing e strategie di business online.<br>Con AND EMILI ho svolto lo <a href='https://drive.google.com/open?id=1qA2x8smIszeb10fiUMwDUf9VwBYRkT66MEK_qYVXNnI' target='_blank'>stage estivo</a> dove ho contribuito allo sviluppo di un’app mobile per un loro cliente.Lo stage è iniziato con lo studio di Flutter, un framework open-source creato da google per la creazione di applicativi mobile. La comodità di Flutter sta nel fatto di creare un app perfettamente funzionante sia su iOS e Android con un solo codice.<br>In seguito ho iniziato lo sviluppo dell’app per il cliente che chiedeva un modo per effettuare le timbrature dei propri dipendenti dal loro smartphone e registrare ora e posizione. Purtroppo lo sviluppo si è dovuto interrompere per aspettare le API del cliente e quindi ho passato il resto del tempo studiando di più sul mondo android e sullo sviluppo backend di un sito.<br>Inoltre il mio tutor Ivan mi ha fatto conoscere meglio la realtà dell’azienda, i dipendenti e il loro metodo di lavoro basato sull’Agile.<br><br>Penso sia stata l’esperienza più utile di tutta l’alternanza, ho passato 6 settimane produttive dove ho imparato tantissime cose e sono contento dell’esperienza che ho fatto.",
        agency: "AND EMILI",
        urlAgency: "https://www.andemili.com/",
        positionLeft: true,
        changeYear: false
      },
      {
        id: 12,
        changeYear: true,
        name: "quinto-anno",
        first: "QUINTO",
        second: "ANNO"
      },

      {
        id: 13,
        title: "WalkToWork: Plan an Application",
        period: "",
        name: "poloDigitale",
        miniDescrption:
          "Con il Polo Digitale abbiamo partecipato un’attività dove ci è stato chiesto di progettare degli applicativi per soddisfare le richieste di un ipotetico cliente.",
        descrption:
          "Con Polo Digitale abbiamo partecipato un’attività dove ci è stato chiesto di progettare degli applicativi per soddisfare le richieste di un ipotetico cliente.<br><br>Ci hanno diviso in gruppi da tre e ci hanno consegnato una delle richieste degli ipotetici clienti. Il mio gruppo doveva presentare un portale di eventi, dove i nostri clienti potessero pubblicare i loro eventi e gestirli al meglio.  <a href='https://drive.google.com/open?id=13kPPZcK09I5qPvLXciFSIzisf4rUWeO0FokIduYdH1Y' target='_blank'> Qui puoi vedere la nostra presentazione</a>.<br>Il tutto era all’interno di una competizione dove hanno partecipato tutte le classi dell’informatico. La giuria composta dal polo digitale che doveva decidere il migliore di ogni tipo di progetto. C'è stata una prima selezione dei progetti dove il polo digitale ha analizzato le nostre presentazioni e ne ha decisi alcuni per ogni tipo di progetto da far esporre l’ultimo giorno di attività. Il mio gruppo è stato selezionato, ma non ha vinto la competizione.<br><br>In conclusione l’attività è stata utile per capire le varie difficoltà nel progettare degli applicativi e mi ha aiutato nella progettazione della tesina.",
        agency: "Polo Digitale",
        urlAgency: "https://www.ilpolodigitale.com/",
        positionLeft: false,
        changeYear: false
      },
      {
        id: 14,
        changeYear: true,
        lastOne: true,
        first: "PCTO",
        second: "DONE"
      }
    ]
  }
});
