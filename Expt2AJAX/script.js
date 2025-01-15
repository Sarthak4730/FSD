let myKey = 'ca550c8d8952d06318ebef43c8d508d9'

// let city = 'Mumbai'

async function getInfo(url){
    let a = await fetch(url)
    let b = await a.json()
    console.log(b)

    let container = document.querySelector(".container")
    let result = document.createElement("div")
    result.setAttribute("class", "result")
    container.append( result )
    result.innerHTML = `<h3><span>Location</span> = ${b.location.name} ( ${b.location.region}, ${b.location.country} )</h3> <br/> <h2> <span>Temperature</span> = ${b.current.temperature} &deg;Celsius</h2>`

}
document.querySelector("button").addEventListener("click", ()=>{
    let city = document.querySelector("input").value
    let url = `http://api.weatherstack.com/current?access_key=${myKey}&query=${city}`
    getInfo(url)
})