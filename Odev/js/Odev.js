let userName = prompt("Lutfen Adinizi Giriniz: ")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small>${userName}</small>`


    let todayDate = new Date();
    let day = todayDate.toLocaleDateString('tr', { weekday: 'long' })
    let hour = todayDate.getHours();
    let minute=todayDate.getMinutes();
    let second=todayDate.getSeconds();
    let myClock=document.querySelector("#myClock")

    myClock.innerHTML=`${hour}:${minute}:${second} ${day}`