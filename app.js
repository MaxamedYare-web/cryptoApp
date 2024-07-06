let cointainer = document.querySelector(".cointainer")
let searchInput = document.querySelector("#searchInput")
let submitBtn = document.querySelector("#submitBtn")
let allcoions = document.querySelector(".allcoions")

const getAllbtc = async () => {
    let allcoins = await fetch("https://api.coinranking.com/v2/coins")

    let respnsive = await allcoins.json()

    respnsive.data.coins.forEach(coin => {
        // console.log(coin)
      
            marketing(coin.symbol, coin.price, coin.change, coin.marketCap, coin.iconUrl)
        //    console.log(coin.symbol,coin.name,coin.price,coin.charge.coin.marketcap,coin.iconUrl)

    })

}

const marketing = (symbol, price, charge, marketcap, iconUrl) => {

    cointainer.innerHTML += `

<div class="allcoions">
<div class="update">
<div class="coin-name">
<div class="img-coin">

<img src="${iconUrl}" alt="">
    <p id="btc">${symbol}</p>
</div>

    
     <p id="pricecoin">Price $${price}</p>
</div>
    
   
    <p id="pricecharge"><span id="pl">P&L</span><br>${charge}%</p>
    <p id="marketcap">MarketCap $${marketcap}</p>
</div>

</div>
     `
}


submitBtn.addEventListener("click",()=>{
    
    const searchAll = (e)=>{
  
        // let input = searchInput.value
        let term = e.target.value.toUpperCase()
        let allcoions = document.querySelectorAll(".allcoions")
      allcoions.forEach(con =>{
        let btcSymbol = con.querySelector("#btc").innerText.toUpperCase()
        if(btcSymbol.indexOf(term)>-1){
            con.style.display="flex"
        }else{
            con.style.display="none"
        }
     })
        
       
} 

document.addEventListener("input",searchAll)

})




getAllbtc()









