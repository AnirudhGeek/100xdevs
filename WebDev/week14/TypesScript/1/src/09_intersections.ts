// value must be from A and from B

type Inter1 = { id: string };
type Inter2 = { createdAt: Date };

type Entity = Inter1 & Inter2;

const e: Entity = { id: "a2", createdAt: new Date() };


type StringHolderUnique = {a : string}
type NumberHolderUnique = {a : number}


//not possible 
// type StringNumberMix = StringHolderUnique & NumberHolderUnique
// const bad : StringNumberMix = {a : "adsadsf",a :143}

