

// Promise<T>
// nested Promise<Promise<T>>
// Thenables =>   .then methods

//Awaited<T>

type Promise1 = Awaited<Promise<number>>    // this will return a number
type Promise2 = Awaited<Promise<string>>    // this will return a string
type Awaited1 = Awaited<string>    // this is only a string not a promise


//union of promises
type PromiseUnionExample = Awaited<Promise<string| number>>


async function fetchCount(){
    return 42 as const
}


type ResolveFetchCountValue = Awaited<ReturnType<typeof fetchCount>>


async function getData(){
    return Promise.all([
        Promise.resolve(1 as const),
        Promise.resolve("x" as const)
    ]as const)
}


type DataTupleWithPromise = Awaited<ReturnType<typeof getData>>   // [1,"x"]   but as readonly

