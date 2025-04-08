let dolar=[
    {
        "boliviano": 12.5 
    },
    {
        "euro": 0.92
    },

    
]
let boliviano=[
    {
        "dolar": 0.14 
    },
    {
        "euro": 0.13 
    },   
]
let euro=[
    {
        "dolar": 1.09 
    },
    {
        "boliviano": 7.62
    },   
]


let coins=["Boliviano","Euro", "Dolar"];

//selectors
let baseCoin=document.getElementById('base_coin');
let destinyCoin=document.querySelector('.destiny_coin');
let btnConverter=document.querySelector('.btn_converter');

//event to select coins
baseCoin.addEventListener("change",()=>{
    console.log(baseCoin.value);
    displayDestinyCoin(baseCoin.value);
   
})
//event to make coin convertion

btnConverter.addEventListener("click", ()=>{
    
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
        return resConversion=boliviano[0]
    }
    return resConversion;
}

const processCoinConvertion=async()=>{
    try {
        
    } catch (error) {
        
    }
}



displayBaseCoin();
displayDestinyCoin();