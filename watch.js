
const addZeros = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const updateTime = () => {
    let time = new Date();
    document.querySelector(".hour").textContent = addZeros(time.getHours()) + " :";
    document.querySelector(".min").textContent = addZeros(time.getMinutes()) + " :";
    document.querySelector(".sec").textContent = addZeros(time.getSeconds());
}

updateTime();
setInterval(updateTime,1000);



