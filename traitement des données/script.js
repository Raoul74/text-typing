let string = "chaine";
// console.log(typeof string);
let number ="12";
// console.log(typeof number);
let boolean ="true";
// console.log(typeof boolean);
let object_null=null;
let maVariable;


// console.log(typeof (object_null));





// LES TABLEAUXS 


let array =["Bafou","Batié","baham","Bafan"];
// console.log(array);
// console.log([array[1]]);
// console.log([array[0] [3]]);


// TABLEAUX 2

let array2 =["Bafou",29,true,[5,7],"Batié","Baham",{
    nom:"rosto",
    age:29
}];


// LES OBJETS

let objet ={
    firstname:"resto",
    lastname:"dev",
    technos:["Javascript","NodeJs","React","Laravel","Fluter"],
    adresse:"MarchéB",
    admin:false

}


let data = [
    {
        firstname:"rosto1",
        lastname:"dev1",
        age:14,
        technos:["javascript","nodejs",
    "React","laravel","Flutter"],
    adress:"MarchéB",
    admin:false,
    },



    {
        firstname:"rosto2",
        lastname:"dev2",
        age:13,
        technos:["php","nodejs",
    "React","Python","Flutter"],
    adress:"MarchéB",
    admin:true,
    },


    {
        firstname:"rosto3",
        lastname:"dev3",
        age:32,
        technos:["css","nodejs",
    "React","Taillwindcss","Flutter"],
    adress:"MarchéB",
    admin:false,
    },
    
]


// LES STRUCTURES DE CONTROLES


if (data[0].age> data[1].age){ 
    // console.log(`${data[0].firstname}est agé plus que ${data[1].firstname}`);
}else{
    // console.log(`${data[1].firstname}est plus agé que ${data[0].firstname}`);
}


let w =0;
while(w < 10){
    w++;
    // console.log("la valeur de w est de :"+w);
}


// const javascript=document.getElementById('javascript');
// javascript.addEventListener('click',
// javascript.style.backgroundAttachment)
document.body.addEventListener("click",
(e)=>{
    // console.log(e.target.id);
    // if (e.target.id === "javascript"){
        document.body.style.background="yellow";
    // }else if(e.target.id === "php"){
    //     document.body.style.backgr  ound="violet";   
    // }else if(e.target.id === "python"){
    //     document.body.style.background="blue";
    // }
 switch(e.target.id){
    case"javascript":
    document.body.style.background="yellow";
    break;
    case"php":
    document.body.style.background="violet";
    break;
    case"python":
    document.body.style.background="blue";
    break;
 }
})






// method string
 let string2 ="javascript est un language orienté objet";
//  console.log(string2)
// console.log(typeof string2)
// 
// console.log(eval("1"+2));   
//  console.log(parseInt("17")+2);
// console.log(isNaN(string2));
// isNaN = est ce que ces un nombre??


// taille du string ou d'un mot

// console.log(string2.length);

// indexof pour voir l'index d'un string

let nom2 = "anamontana";
// console.log( nom2.indexOf("a"));
// console.log(nom2.lastIndexOf("a"));

// silice() permet de couper ou de trancher une string

console.log(nom2.slice(0,3));