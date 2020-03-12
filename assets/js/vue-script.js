var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        about: {
            "title": "ABOUT ME",
            "subtitle": "CIAO! Sono Angelo Longano, studente e appassionato di informatica",
            "description": "Frequento l'istituto Blaise Pascal di Reggio Emilia, una scuola difficile e ardua ma allo stesso tempo divertente e avvolgente. Ho scelto di indirizzare il mio percorso verso l'informatica perchè fin da piccolo mi entusiasmava usare il computer ed ero curioso di scoprire come fosse fatto, il suo funzionamento e magari come migliorarlo."
        },
        activities: [{
                "id": 1,
                "changeYear": true,
                "name": "terzo-anno",
                "first": "TERZO",
                "second": "ANNO"
            },
            {
                "id": 2,
                "title": "PRIMO GIORNO",
                "period": "08 gennaio 2018",
                "name": "firstDay",
                "miniDescrption": "Ho avuto la mia prima esperienza di PCTO in Unindustria, un'associazione territoriale del Sistema Confindustria. Essa infatti non è un'azienda, ma è l'Associazione Industriale della Provincia di Reggio Emilia che si occupa di offrire dei servizi alle piccole, medie o grandi imprese manifatturiere. Questi servizi aiutano l'azienda in ambito produttivo, economico e tecnologico.",
                "descrption": "Ho avuto la mia prima esperienza di PCTO in Unindustria, un'associazione territoriale del Sistema Confindustria. Essa infatti non è un'azienda, ma è l'Associazione Industriale della Provincia di Reggio Emilia che si occupa di offrire dei servizi alle piccole, medie o grandi imprese manifatturiere. Questi servizi aiutano l'azienda in ambito produttivo, economico e tecnologico.<br><br>Il primo giorno è stato dedicato ad una introduzione. Inizialmente abbiamo parlato del mondo del lavoro con i vari settori e ci siamo soffermati nella richiesta di lavoro: i dati dicono che c'è un'alta richiesta di persone che abbiano conoscenze in ambito tecnologico (anche basilari). Oggi, molte aziende cercano queste persone, ma non li trovano. Oltre a questo abbiamo constatato che il modo di lavorare e quello di fare impresa è cambiato nel tempo, a causa del nuovo mondo tecnologico. Quindi è importante, soprattutto per le imprese, stare al passo con i tempi ed essere sempre aggiornati delle nuove tecnologie o nuove metodologie di marketing. Infatti abbiamo parlato anche di marketing e come esso sia essenziale per le aziende.",
                "agency": "Unindustria",
                "urlAgency": "http://www.unindustriareggioemilia.it/ecm/web/aire/primary/home",
                "positionLeft": true,
                "changeYear": false
            },
            {
                "id": 3,
                "title": "Gestione Social",
                "period": "",
                "name": "gestioneSocial",
                "miniDescrption": "",
                "descrption": "non disponibile",
                "agency": "Matrix Media",
                "urlAgency": "https://www.matrixmedia.it/",
                "positionLeft": false,
                "changeYear": false
            },
            {
                "id": 4,
                "title": "Gestione evento",
                "period": "",
                "name": "gestioneEvento",
                "miniDescrption": "",
                "descrption": "non disponibile",
                "agency": " 47 Deck",
                "urlAgency": "https://www.47deck.it/",
                "positionLeft": true,
                "changeYear": false
            },
            {
                "id": 5,
                "title": "Gestione SEO",
                "period": "",
                "name": "gestioneSeo",
                "miniDescrption": "",
                "descrption": "non disponibile",
                "agency": "Webranking",
                "urlAgency": "https://www.webranking.it/",
                "positionLeft": false,
                "changeYear": false
            },
            {
                "id": 6,
                "title": "Caso DOCKS",
                "period": "",
                "name": "casoDocks",
                "miniDescrption": "",
                "descrption": "non disponibile",
                "agency": "Blaise Pascal",
                "urlAgency": "https://www.pascal.edu.it/",
                "positionLeft": true,
                "changeYear": false
            },
            {
                "id": 7,
                "title": "Monta e Smonta",
                "period": "",
                "name": "montaSmonta",
                "miniDescrption": "",
                "descrption": "non disponibile",
                "agency": "Blaise Pascal",
                "urlAgency": "https://www.pascal.edu.it/",
                "positionLeft": false,
                "changeYear": false
            }, {
                "id": 8,
                "title": "Creare un gioco in Python",
                "period": "",
                "name": "stageParma",
                "miniDescrption": "",
                "descrption": "non disponibile",
                "agency": "Università di Parma",
                "urlAgency": "https://www.unipr.it/",
                "positionLeft": true,
                "changeYear": false
            },
            {
                "id": 9,
                "changeYear": true,
                "name": "quarto-anno",
                "first": "QUARTO",
                "second": "ANNO"
            },

            {
                "id": 10,
                "title": "WalkToWork: Digital Career",
                "period": "",
                "name": "digitalCareer",
                "miniDescrption": "",
                "descrption": "non disponibile",
                "agency": "Impact Hub",
                "urlAgency": "https://www.impacthubre.it/",
                "positionLeft": false,
                "changeYear": false
            },
            {
                "id": 11,
                "title": "Mobile Developer in stage",
                "period": "",
                "name": "mobileDeveloper",
                "miniDescrption": "",
                "descrption": "non disponibile",
                "agency": "AND EMILI",
                "urlAgency": "https://www.andemili.com/",
                "positionLeft": true,
                "changeYear": false
            },
            {
                "id": 12,
                "changeYear": true,
                "name": "quinto-anno",
                "first": "QUINTO",
                "second": "ANNO"
            },

            {
                "id": 13,
                "title": "WalkToWork: Matrix Media",
                "period": "",
                "name": "matrixMedia",
                "miniDescrption": "",
                "descrption": "non disponibile",
                "agency": "Matrix Media",
                "urlAgency": "https://www.matrixmedia.it/",
                "positionLeft": false,
                "changeYear": false
            },
            {
                "id": 14,
                "changeYear": true,
                "lastOne": true,
                "first": "PCTO",
                "second": "DONE"
            }

        ]
    }
})