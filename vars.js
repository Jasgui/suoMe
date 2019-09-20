var phrases = [{
        phrase: "Minä<pn.nom.sg.minä.I,me.I> syön<v.ind.pr.1.sg.syödä.to eat.am eating> pizzan<n.accgen.sg.pizza.pizza.pizza> ravintolassa<n.ines.sg.ravintola.restaurant.in the restaurant>.",
        translation: "I'm eating a pizza in the restaurant.",
        literal: "I I-eat pizza in-restaurant."
},
    {
        phrase: "Mitä<pn.part.sg.mikä.what.what> sinä<pn.nom.sg.sinä.you.you> haluat<v.ind.pr.2.sg.haluta.to want.you want>?",
        translation: "What do you want?",
        literal: "What you you-want?"
},
    {
        phrase: "Minä<pn.nom.sg.minä.I,me.I> en<nv.ind.pr.1.sg.ei.not.not> puhu<v.ind.neg.0.0.puhua.to speak.speak> suomea<n.part.sg.suomi.Finnish.Finnish> hyvin<a.pos.hyvin.well.well>.",
        translation: "I don't speak Finnish well",
        literal: "I I-not speak Finnish well."
}

];

var nouns = [
    {
        value: "pizza",
        nomsg: "pizza",
        partsg: "pizzaa",
        gensg: "pizzan",
        inesssg: "pizzassa"
  },
    {
        value: "ravintola",
        nomsg: "ravintola",
        partsg: "ravintolaa",
        gensg: "ravintolan",
        inesssg: "ravintolassa"
  },
    {
        value: "suomi",
        nomsg: "suomi",
        partsg: "suomea",
        gensg: "suomen",
        inesssg: "suomessa"
  },
    {
        value: "kahvila",
        nomsg: "kahvila",
        partsg: "kahvilaa",
        gensg: "kahvilan",
        inesssg: "kahvilassa"
  }
];

var verbs = [
    {
        value: "syödä",
        inf: "syödä",
        neg: "syö",
        pr: ["syön", "syöt", "syö", "syömme", "syötte", "syövät"],
        pa: ["söin", "söit", "söi", "söimme", "söitte", "söiväat"]
  },
    {
        value: "haluta",
        inf: "haluta",
        neg: "halua",
        pr: ["haluan", "haluat", "haluaa", "haluamme", "haluatte", "haluavat"],
        pa: ["halusin", "halusit", "halusi", "halusimme", "halusitte", "halusivat"]
  },
    {
        value: "puhua",
        inf: "puhua",
        neg: "puhu",
        pr: ["puhun", "puhut", "puhuu", "puhumme", "puhutte", "puhuva"],
        pa: ["puhuin", "puhuit", "puhui", "puhuimme", "puhuitte", "puhuivat"]
  },
    {
        value: "kertoa",
        inf: "kertoa",
        neg: "kerro",
        pr: ["kerron", "kerrot", "kertoo", "kerromme", "kerrotte", "kertovat"],
        pa: ["kerroin", "kerroit", "kertoi", "kerroimme", "kerroitte", "kertoivat"]
  }



];

var stats = {
    nounScore: [],
    nounGramScore: {
        nomsg: 3,
        gensg: 3,
        partsg: 3,
        inesssg: 3
    },
    caseUseScore: {
        nomsg: 3,
        gensg: 3,
        partsg: 3,
        inesssg: 3
    },
    verbScore: [],
    verbGramScore: {
        inf: 3,
        pr1sg: 3,
        pr2sg: 3,
        pr3sg: 3,
        pr1pl: 3,
        pr2pl: 3,
        pr3pl: 3,
        neg: 3,
        pa1sg: 3,
        pa2sg: 3,
        pa3sg: 3,
        pa1pl: 3,
        pa2pl: 3,
        pa3pl: 3
    },
    tenseUseScore: {
        inf: 3,
        pr1sg: 3,
        pr2sg: 3,
        pr3sg: 3,
        pr1pl: 3,
        pr2pl: 3,
        pr3pl: 3,
        neg: 3,
        pa1sg: 3,
        pa2sg: 3,
        pa3sg: 3,
        pa1pl: 3,
        pa2pl: 3,
        pa3pl: 3
    }
};

export {
    phrases,
    nouns,
    verbs,
    stats
};
