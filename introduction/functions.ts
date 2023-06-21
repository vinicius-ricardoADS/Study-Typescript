function add (n1: number, n2: number) {
    return n1 + n2;
}

// tipo função que aceita 2 parâmetros number e retorna 
// number
let combinedValues: (a: number, b: number) => number;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

// CallBack sendo utilizado em (result)
addAndHandle(10, 20, (result) => {
    console.log(result);
})