//Implementează o funcție care primește ca parametru o listă de numere și returnează un array conținând doar numere pare din listă.
function par(lista, ...args){
    for(var i=0; i<args.length;i++)
    {
        if(args[i]%2==0){
            array.push(args[i]);
        }
    }
    return array;
}

let array = []
console.log(par(array,2, 5, 6, 7, 8, 10));