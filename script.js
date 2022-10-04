document.addEventListener('DOMContentLoaded', () =>{

    let almale = 150;
    let hamburger = 250;
    let hotdog = 200;
    let water = 30;
    let ossz=0;

    let ul = document.getElementById("lista");
    let li = document.createElement("li");

    let calc = document.getElementById("cal");

    document.querySelector(".almale").addEventListener('click', () =>{
        ossz += almale;
        calc.textContent = ossz.toString();
        
        ul.innerHTML += `
        <li>Almalé <button class="delete" onclick="deleted()">X</button></li>
        `
    })
   
   
    document.querySelector(".hamburger").addEventListener('click', () =>{
        ossz += hamburger;
        calc.textContent = ossz.toString();
        ul.innerHTML += `
        <li>Hamburger <button class="delete" onclick="deleted()">X</button></li>
        `
    })
    document.querySelector(".hotdog").addEventListener('click', () =>{
        ossz += hotdog;
        calc.textContent = ossz.toString();
        ul.innerHTML += `
        <li>Hot-Dog <button class="delete" onclick="deleted()">X</button></li>
        `
    })
    document.querySelector(".viz").addEventListener('click', () =>{
        ossz += water;
        calc.textContent = ossz.toString();
        let text = document.createTextNode("Víz, ");
        li.appendChild(text);
        ul.appendChild(li);
    })
    document.getElementById("dogo").addEventListener('click', () =>{
        document.getElementById("dogo").src = "img/dogo2.png";
       
    })
    document.getElementById("nulla").addEventListener('click', () =>{
    ul.remove();
    ossz =0;
    calc.textContent = ossz.toString();

    })
})