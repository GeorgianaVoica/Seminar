function par(lista){

    var x=new Array();
    var k=0;
    for(var i=0; i<lista.length;i++)
    {
        if(lista[i]%2==0)
        {
            x[k]=lista[i];
            k++;
        }
    }
    return x;
}

const v=[6,4,3,8,7];
console.log(par(v));