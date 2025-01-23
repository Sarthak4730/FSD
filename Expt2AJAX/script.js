let myKey = "63390dd49e606006c3f9f5d300b510cc";

let container = document.querySelector(".container");
let result = document.createElement("div");
container.append(result);

let locationIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>';

let dayIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></g></svg>';

let nightIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none"><path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`;

let tempIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30"><path fill="currentColor" d="M9.91 19.56a5.1 5.1 0 0 1 2.24-4.22V5.42c0-.8.27-1.48.82-2.03s1.23-.84 2.03-.84c.81 0 1.49.28 2.04.83c.55.56.83 1.23.83 2.03v9.92c.71.49 1.25 1.11 1.64 1.84s.58 1.53.58 2.38c0 .92-.23 1.78-.68 2.56s-1.07 1.4-1.85 1.85s-1.63.68-2.56.68c-.92 0-1.77-.23-2.55-.68s-1.4-1.07-1.86-1.85s-.68-1.63-.68-2.55m1.76 0c0 .93.33 1.73.98 2.39s1.44.99 2.36.99c.93 0 1.73-.33 2.4-1s1.01-1.46 1.01-2.37c0-.62-.16-1.2-.48-1.73q-.48-.795-1.32-1.23l-.28-.14c-.1-.04-.15-.14-.15-.29V5.42c0-.32-.11-.59-.34-.81c-.23-.21-.51-.32-.85-.32c-.32 0-.6.11-.83.32s-.34.48-.34.81v10.74c0 .15-.05.25-.14.29l-.27.14q-.825.435-1.29 1.23c-.31.53-.46 1.1-.46 1.74m.78 0c0 .71.24 1.32.73 1.82s1.07.75 1.76.75s1.28-.25 1.79-.75s.76-1.11.76-1.81c0-.63-.22-1.19-.65-1.67s-.96-.77-1.58-.85V9.69c0-.06-.03-.13-.1-.19a.3.3 0 0 0-.22-.1c-.09 0-.16.03-.21.08c-.05.06-.08.12-.08.21v7.34c-.61.09-1.13.37-1.56.85c-.43.49-.64 1.04-.64 1.68"/></svg>';

let feelIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 30 30"><path fill="currentColor" d="M3.09 13.43c0 .27.09.49.28.67s.43.26.72.26h1.69q.405 0 .69-.27c.285-.27.29-.4.29-.66c0-.29-.09-.53-.28-.71s-.42-.28-.69-.28h-1.7c-.29 0-.53.09-.72.28c-.19.17-.28.41-.28.71m1.77 6.18c0 .97.35 1.81 1.06 2.52s1.54 1.06 2.51 1.06h6.86q1.455 0 2.49-1.05c.69-.7 1.04-1.54 1.04-2.53q0-.72-.21-1.23c.83-.53 1.49-1.24 1.97-2.12s.73-1.83.73-2.84c0-.81-.16-1.59-.48-2.33a6.1 6.1 0 0 0-1.28-1.91a6.1 6.1 0 0 0-1.91-1.28c-.74-.32-1.51-.48-2.32-.48c-1.09 0-2.1.27-3.02.81s-1.65 1.27-2.18 2.18c-.53.92-.79 1.92-.79 3.01v.34q-1.5.855-1.98 2.49c-.76.24-1.36.66-1.81 1.27a3.44 3.44 0 0 0-.68 2.09M6.42 5.45c0 .28.09.51.26.67l1.61 1.69q.705.54 1.41 0c.19-.19.28-.42.28-.7c0-.27-.09-.5-.28-.7L8.05 4.76c-.21-.19-.45-.29-.7-.29c-.28 0-.51.09-.68.28s-.25.42-.25.7m.42 14.16c0-.42.13-.78.4-1.08q.405-.45 1.02-.51l.62-.08c.13 0 .2-.08.2-.23l.09-.56c.07-.58.31-1.06.73-1.44c.42-.39.91-.58 1.48-.58c.58 0 1.09.19 1.51.58q.645.585.75 1.44l.08.65c.06.15.14.23.24.23h1.32c.43 0 .8.16 1.12.47s.47.68.47 1.12c0 .45-.16.83-.47 1.15s-.69.48-1.12.48H8.43c-.45 0-.83-.16-1.13-.48c-.31-.32-.46-.71-.46-1.16m4.42-6.39c.07-1.09.49-2.01 1.27-2.76c.77-.74 1.71-1.12 2.79-1.12c1.11 0 2.06.4 2.84 1.19s1.17 1.76 1.17 2.89q0 1.05-.51 1.95c-.34.6-.8 1.08-1.38 1.45c-.59-.49-1.27-.73-2.03-.73c-.29-.88-.81-1.57-1.54-2.09s-1.56-.78-2.48-.78zm3.09-8.75c0 .27.1.51.29.7s.42.29.69.29c.28 0 .51-.1.7-.29a.95.95 0 0 0 .29-.7V2.13c0-.26-.1-.48-.29-.66a.97.97 0 0 0-.7-.27q-.405 0-.69.27c-.19.18-.29.4-.29.66zm6.32 15.23c0 .27.09.5.27.7l1.64 1.62q.63.63 1.41 0c.18-.17.26-.39.26-.68c0-.27-.09-.49-.26-.67L22.3 19a.95.95 0 0 0-.68-.25c-.28 0-.5.09-.68.27s-.27.41-.27.68m0-12.61q0 .42.27.72c.18.18.41.27.68.27s.5-.09.68-.27l1.69-1.69c.18-.17.26-.39.26-.67s-.1-.51-.29-.69s-.42-.28-.7-.28c-.26 0-.49.1-.68.29L20.94 6.4q-.27.27-.27.69m2.58 6.34c0 .27.09.49.28.67s.43.26.72.26h1.69q.405 0 .69-.27c.285-.27.29-.4.29-.66c0-.29-.09-.53-.28-.71s-.42-.28-.69-.28h-1.69c-.29 0-.53.09-.72.28c-.19.17-.29.41-.29.71"/></svg>';

let humidityIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 14.571C20 18.753 16.336 22 12 22s-8-3.247-8-7.429C4 12 5.305 9.452 6.716 7.423c1.43-2.055 3.076-3.726 3.962-4.568M20 14.571L10.678 2.855M20 14.571c0-2.571-1.305-5.119-2.716-7.148c-1.43-2.055-3.076-3.726-3.962-4.568a1.913 1.913 0 0 0-2.644 0M20 14.571L10.678 2.855"/><path stroke-linecap="round" d="M12 18a4 4 0 0 1-4-4"/></g></svg>';

async function getInfo(url) {
  let a = await fetch(url);
  let b = await a.json();
  console.log(b);

  let dayOrNightIcon, dayOrNightStatus;
  if(b.current.is_day == "yes"){
    dayOrNightIcon = dayIcon;
    dayOrNightStatus = "Day";
  }else{
    dayOrNightIcon = nightIcon;
    dayOrNightStatus = "Night";
  }

  result.innerHTML = `
  <div class="neatness"> <h3> ${locationIcon} <span>Location</span> = ${b.location.name} ( ${b.location.region}, ${b.location.country} ) </h3> </div>
  <div class="neatness"> <h3> ${tempIcon} <span>Temperature</span> : ${b.current.temperature} &deg;C </h3> </div>
  <div class="neatness"> <h3> ${feelIcon} <span>Feels like</span> : ${b.current.feelslike} &deg;C </h3> </div>
  <div class="neatness"> <h3> ${humidityIcon} <span>Humidity</span> : ${b.current.humidity}% </h3> </div>
  <h3>${dayOrNightIcon} ${dayOrNightStatus}</h3>
  `;

  document.querySelector("input").value = "";
}

document.querySelector("button").addEventListener("click", async () => {
  result.innerHTML = "";
  let city = document.querySelector("input").value;
  let url = `http://api.weatherstack.com/current?access_key=${myKey}&query=${city}`;
  // getInfo(url);
  // let a = await fetch('https://api.unsplash.com/search/photos');
  let weatherType = "Rainy";
  let apiKey = "UiNWBHuR80w6lZEUxaHayQd5Z8641KAEV0qmIuFAE7c";
  let a = await fetch(`https://api.unsplash.com/photos/random?query=${weatherType}&client_id=${apiKey}`);
  let b = await a.json();
  console.log(b);

  result.innerHTML = `
  <img width="300px" height="150px" src="${b.urls.regular}" alt="${b.alt_description}" />
  `;
});