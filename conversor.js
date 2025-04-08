let dolar=[
    {
        "boliviano": "12.5 BS"
    },
    {
        "euro": "0.92 EUR"
    },

    
]
let boliviano=[
    {
        "dolar": "0.14 USD" 
    },
    {
        "euro": "0.13 EUR" 
    },   
]
let euro=[
    {
        "dolar": "1.09 USD" 
    },
    {
        "boliviano": "7.62 BS"  
    },   
]


let coins=["Boliviano","Euro", "Dolar"];

//selectors
let baseCoin=document.getElementById('base_coin');
let destinyCoin=document.querySelector('.destiny_coin');
let btnConverter=document.querySelector('.btn_converter');
let converTionResultContainer=document.querySelector('.result_container');
const displayResult=(res)=>{
    let element=`<p class=result>${res}</p>`;
    return element;
}


//event to select coins
baseCoin.addEventListener("change",()=>{
    console.log(baseCoin.value);
    displayDestinyCoin(baseCoin.value);
   
})
//event to make coin convertion

btnConverter.addEventListener("click", ()=>{
    processCoinConvertion();
    let res=convert();
    let newElement=displayResult(Object.values(res));
    converTionResultContainer.innerHTML=newElement;
    
})




//display base coins in the first select
const displayBaseCoin=()=>{
    
    for (coin of coins) {
        let newCoin=document.createElement('OPTION');
        newCoin.classList.add('coin');
        newCoin.setAttribute('value', coin);
        newCoin.textContent=coin;
        baseCoin.appendChild(newCoin);
    }
    
}

//display destiny coins in the second select
const displayDestinyCoin=(coin)=>{
    destinyCoin.innerHTML="";
    if(baseCoin.value==="Boliviano"){
        let resetCoin=coins.indexOf(baseCoin.value);
        let reduceCoin=coins.slice();
        reduceCoin.splice(resetCoin,1);
        for (coin of reduceCoin) {
            let newDestinyCoin=document.createElement('option');
            newDestinyCoin.classList.add('coin');
            newDestinyCoin.setAttribute('value',coin);
            newDestinyCoin.textContent=coin;
            destinyCoin.appendChild(newDestinyCoin);
        }
    }
    if(baseCoin.value==="Dolar"){
        let resetCoin=coins.indexOf(baseCoin.value);
        let reduceCoin=coins.slice();
        reduceCoin.splice(resetCoin,1);
        for (coin of reduceCoin) {
            let newDestinyCoin=document.createElement('option');
            newDestinyCoin.classList.add('coin');
            newDestinyCoin.setAttribute('value',coin);
            newDestinyCoin.textContent=coin;
            destinyCoin.appendChild(newDestinyCoin);
        }
    }
    if(baseCoin.value==="Euro"){
        let resetCoin=coins.indexOf(baseCoin.value);
        let reduceCoin=coins.slice();
        reduceCoin.splice(resetCoin,1);
        for (coin of reduceCoin) {
            let newDestinyCoin=document.createElement('option');
            newDestinyCoin.classList.add('coin');
            newDestinyCoin.setAttribute('value',coin);
            newDestinyCoin.textContent=coin;
            destinyCoin.appendChild(newDestinyCoin);
        }
    }

    
}


const convert=()=>{
    let resConversion=0;
    if(baseCoin.value==='Boliviano' && destinyCoin.value==='Dolar'){
        return resConversion=boliviano[0];
    }
    if(baseCoin.value==='Boliviano' && destinyCoin.value==='Euro'){
        return resConversion=boliviano[1]
    }
    if(baseCoin.value==='Dolar' && destinyCoin.value==='Boliviano'){
        return resConversion=dolar[0]
    }
    if(baseCoin.value==='Dolar' && destinyCoin.value==='Euro'){
        return resConversion=dolar[1]
    }
    if(baseCoin.value==='Euro' && destinyCoin.value==='Boliviano'){
        return resConversion=euro[1];
    }
    if(baseCoin.value==='Euro' && destinyCoin.value==='Dolar'){
        return resConversion=euro[0];
    }
    


    return resConversion;
}

const processCoinConvertion=async()=>{
    try {
        let res;
        let convertion=await convert();
        if(convertion!=0){
            res=convertion
            return console.log("Conversion hecha con exito!");
        }else{
            console.log("Hubo un error en la conversion intente de nuevo");
        }
        return res;
    } catch (error) {
        console.error(error);
    }
}



displayBaseCoin();
displayDestinyCoin();