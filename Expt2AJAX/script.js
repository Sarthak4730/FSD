let myKey = 'ca550c8d8952d06318ebef43c8d508d9'

// let city = 'Mumbai'

async function getInfo(url){
    let a = await fetch(url)
    let b = await a.json()
    console.log(b)
    document.querySelector(".result").innerHTML = `<h2>Location = ${b.location.name}, ${b.location.region}, ${b.location.country}</h2> <br/> <h3> Temperature = ${b.current.temperature} &deg; Celsius`

}
document.querySelector("button").addEventListener("click", ()=>{
    let city = document.querySelector("input").value
    let url = `http://api.weatherstack.com/current?access_key=${myKey}&query=${city}`
    getInfo(url)
})