var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        activities: [{
                "id": 1,
                "title": "PRIMO GIORNO DI ALTERNANZA",
                "period": "08 gennaio 2018",
                "name": "firstDay",
                "miniDescrption": "Ho avuto la mia prima esperienza di PCTO in Unindustria, un'associazione territoriale del Sistema Confindustria. Essa infatti non è un'azienda, ma è l'Associazione Industriale della Provincia di Reggio Emilia che si occupa di offrire dei servizi alle piccole, medie o grandi imprese manifatturiere. Questi servizi aiutano l'azienda in ambito produttivo, economico e tecnologico.",
                "descrption": "Ho avuto la mia prima esperienza di PCTO in Unindustria, un'associazione territoriale del Sistema Confindustria. Essa infatti non è un'azienda, ma è l'Associazione Industriale della Provincia di Reggio Emilia che si occupa di offrire dei servizi alle piccole, medie o grandi imprese manifatturiere. Questi servizi aiutano l'azienda in ambito produttivo, economico e tecnologico.Il primo giorno è stato dedicato ad una introduzione. Inizialmente abbiamo parlato del mondo del lavoro con i vari settori e ci siamo soffermati nella richiesta di lavoro: i dati dicono che c'è un'alta richiesta di persone che abbiano conoscenze in ambito tecnologico (anche basilari). Oggi, molte aziende cercano queste persone, ma non li trovano. Oltre a questo abbiamo constatato che il modo di lavorare e quello di fare impresa è cambiato nel tempo, a causa del nuovo mondo tecnologico. Quindi è importante, soprattutto per le imprese, stare al passo con i tempi ed essere sempre aggiornati delle nuove tecnologie o nuove metodologie di marketing. Infatti abbiamo parlato anche di marketing e come esso sia essenziale per le aziende.",
                "agency": "Unindustria",
                "urlAgency":"http://www.unindustriareggioemilia.it/ecm/web/aire/primary/home",
                "positionLeft": true,
                "changeYear": false
            },
            {
                "id": 2,
                "changeYear": true,
                "first": "QUINTO",
                "second": "ANNO"
            },
            {
                "id": 3,
                "year": 4,
                "name": "prova2",
                "title": "Titolo attività 2",
                "period": "10 agosto - 24 agosto 2019",
                "urlImage": "photo.jpg",
                "miniDescrption": "questa è una mini descrizione dell'attività 2",
                "descrption": "ciao",
                "agency": "azienda bab 2",
                "positionLeft": false,
                "changeYear": false
            },
            {
                "id": 4,
                "changeYear": true,
                "first": "QUINTO",
                "second": "ANNO"
            },
            {
                "id": 3,
                "year": 4,
                "title": "Titolo attività 2",
                "name": "prova3",
                "period": "10 agosto - 24 agosto 2019",
                "urlImage": "photo.jpg",
                "miniDescrption": "questa è una mini descrizione dell'attività 2",
                "descrption": "questa è una lunga descrizione dell'attività 2",
                "agency": "azienda bab 2",
                "positionLeft": true,
                "changeYear": false
            },
            {
                "id": 3,
                "year": 4,
                "title": "Titolo attività 2",
                "name": "prova4",
                "period": "10 agosto - 24 agosto 2019",
                "urlImage": "photo.jpg",
                "miniDescrption": "questa è una mini descrizione dell'attività 2",
                "descrption": "questa è una lunga descrizione dell'attività 2",
                "agency": "azienda bab 2",
                "positionLeft": true,
                "changeYear": false
            },
            {
                "id": 2,
                "changeYear": true,
                "first": "QUINTO",
                "second": "ANNO"
            },
            {
                "id": 3,
                "year": 4,
                "title": "Titolo attività 2",
                "name": "prova6",
                "period": "10 agosto - 24 agosto 2019",
                "urlImage": "photo.jpg",
                "miniDescrption": "questa è una mini descrizione dell'attività 2",
                "descrption": "questa è una lunga descrizione dell'attività 2",
                "agency": "azienda bab 2",
                "positionLeft": true,
                "changeYear": false
            },
            {
                "id": 2,
                "changeYear": true,
                "lastOne": true,
                "first": "PCTO",
                "second": "DONE"
            }

        ]
    }
})