export interface Faq {
    question: string;
    answer: string;
}

export const faqs: Faq[] = [
    {
        question: "Cum se calculează prețul final?",
        answer:
            "Pornim de la numărul de pagini și format, apoi adăugăm costuri pentru imagini, tabele, note de subsol și termenul de livrare ales. Poți vedea o estimare instantă în calculatorul de mai sus.",
    },
    {
        question: "În cât timp livrați o carte de 250 pagini?",
        answer:
            "Termenul standard e de 14 zile lucrătoare pentru un volum de această dimensiune. Pentru termene mai scurte, se aplică o suprataxă calculată automat în ofertă.",
    },
    {
        question: "Lucrați și cu edituri pe contract anual?",
        answer:
            "Da, oferim pachete personalizate pentru edituri cu volum constant de titluri, cu tarife preferențiale și un manager de proiect dedicat.",
    },
    {
        question: "Cui rămân drepturile asupra designului?",
        answer:
            "Toate fișierele sursă (InDesign, concept copertă) rămân în proprietatea autorului/editurii după finalizarea plății integrale.",
    },
    {
        question: "Acceptați manuscrise în Word, Google Docs sau Scrivener?",
        answer:
            "Da, acceptăm toate cele trei formate. Pentru Scrivener recomandăm un export în .docx înainte de trimitere, ca să evităm probleme de formatare.",
    },
]