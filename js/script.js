// Crea un array di 10 automobili

let automobili = [
    { marca: 'Fiat', modello: 'Punto', alimentazione: 'benzina' },
    { marca: 'Volkswagen', modello: 'Golf', alimentazione: 'diesel' },
    { marca: 'Tesla', modello: 'Model 3', alimentazione: 'elettrico' },
    { marca: 'Ford', modello: 'Focus', alimentazione: 'benzina' },
    { marca: 'BMW', modello: 'Serie 3', alimentazione: 'diesel' },
    { marca: 'Chevrolet', modello: 'Spark', alimentazione: 'gpl' },
    { marca: 'Audi', modello: 'A4', alimentazione: 'diesel' },
    { marca: 'Toyota', modello: 'Yaris', alimentazione: 'benzina' },
    { marca: 'Nissan', modello: 'Leaf', alimentazione: 'elettrico' },
    { marca: 'Fiat', modello: '500', alimentazione: 'metano' },
  ];

// Dividi le auto in 3 array
let benzina = automobili.filter(auto => auto.alimentazione === 'benzina');
let diesel = automobili.filter(auto => auto.alimentazione === 'diesel');
let altri = automobili.filter(auto => auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel');

// Stampa i risultati
console.log('Auto a benzina:', benzina);
console.log('Auto a diesel:', diesel);
console.log('Altre auto:', altri);

// Array di stringhe
let stringhe = ['laura', 'michela', 'maria'];

// Formatta
let stringheform = stringhe.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

// Stampa
console.log(stringheform);

// Array animali
let animali = [
    { nome: 'elefante', famiglia: 'elefanti', classe: 'mammiferi'},
    { nome: 'aquila', famiglia: 'accipitridi', classe: 'uccelli'},
    { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi'},
    { nome: 'pinguino', famiglia: 'spheniscidae', classe: 'uccelli'},
    { nome: 'delfino', famiglia: 'delphinidae', classe: 'mammiferi'},
];

// Nuovo array solo mammiferi
let mammiferi = animali.filter(animale => animale.classe === 'mammiferi');

// Stampa
console.log(mammiferi);
