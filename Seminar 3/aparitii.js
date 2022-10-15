//Implementează o funcție care primește ca parametru un string și returnează frecvența de apariție a fiecărui cuvânt
function word_count(string){
    let string_array=string.split(" ");
    let fr=[];
    for(var word of string_array){
        if(fr[word]==undefined){
            fr[word]=1;
        }else{
            fr[word]++;
        }
    }
    return fr;
}

let string ="the quick brown fox jumps over the lazy dog";
let fr=word_count(string);
console.log(fr);

//3 == 3 true
//3 === 3 (true)
//3 == "3" true ("3" == "3")
//3 === "3" false
//0 == false - true
//0 === false - false
//null == undefined - true
//null === undefined - false