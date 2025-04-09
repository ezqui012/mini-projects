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
let converTionResultContainer=document.querySelector('.result_container');
let inputConverter=document.querySelector('.input_data_converter');

const displayResult=(res)=>{
    let coinSymbol;
    if(destinyCoin.value==='Dolar')coinSymbol=`USD`;
    if(destinyCoin.value==='Euro')coinSymbol=`EUR`;
    if(destinyCoin.value==='Boliviano')coinSymbol=`BS`;

    let element=`<p class=result>${res} ${coinSymbol}</p>`;
    return element;
}


//event to select coins
baseCoin.addEventListener("change",()=>{
    console.log(baseCoin.value);
    displayDestinyCoin(baseCoin.value);
   
})
//event to make coin convertion

btnConverter.addEventListener("click", ()=>{
    try {
        if(inputConverter.value===null || inputConverter.value===""){
            converTionResultContainer.innerHTML="<p class=result>Los valores que ingresaste no son validos</p>";
        }
        else{
            processCoinConvertion();
            let res=convert();
            let newElement=displayResult(res);
            converTionResultContainer.innerHTML=newElement;
        }
    } catch (error) {
        console.error(error);
    }
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
    let resConversion;
    
    if(baseCoin.value==='Boliviano' && destinyCoin.value==='Dolar'){
        let convertQuantity=(inputConverter.value)*boliviano[0].dolar;
        return resConversion=convertQuantity;
    }
    if(baseCoin.value==='Boliviano' && destinyCoin.value==='Euro'){
        let convertQuantity=(inputConverter.value)*boliviano[1].euro;
        return resConversion=convertQuantity;
    }
    if(baseCoin.value==='Dolar' && destinyCoin.value==='Boliviano'){
        let convertQuantity=(inputConverter.value)*dolar[0].boliviano;
        return resConversion=convertQuantity;
    }
    if(baseCoin.value==='Dolar' && destinyCoin.value==='Euro'){
        let convertQuantity=(inputConverter.value)*dolar[1].euro;
        return resConversion=convertQuantity;
    }
    if(baseCoin.value==='Euro' && destinyCoin.value==='Boliviano'){
        let convertQuantity=(inputConverter.value)*euro[1].boliviano;
        return resConversion=convertQuantity;
    }
    if(baseCoin.value==='Euro' && destinyCoin.value==='Dolar'){
        let convertQuantity=(inputConverter.value)*euro[0].dolar;
        return resConversion=convertQuantity;
    }
    


    return resConversion;
}

const processCoinConvertion=async()=>{
    try {

        let res;
        let convertion=await convert();
        if(convertion!=0){
            res=convertion;
            return res
        }else{
            console.log("Hubo un error en la conversion intente de nuevo");
            res="Hubo un error en la conversion intente de nuevo";  
        }
        return res;
    } catch (error) {
        console.error(error);
    }
}

const convertAmount=(quantity)=>{
    let finalConvertion;
    if(baseCoin.value==="Dolar"){}
}



displayBaseCoin();
displayDestinyCoin();