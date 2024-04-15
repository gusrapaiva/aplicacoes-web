let box = document.getElementById('dias')
let opaco = document.getElementById('opaco')
let img = document.getElementById('overimg');
let btn = document.getElementById('btn')

for(i = 27; i <= 31; i++)
{
    box.innerHTML += "<div class='past'>"+ i +"</div>"
}
for(i = 1; i <=30; i++)
{
    if(i == 1)
    {
 box.innerHTML += "<div class='dia niver'>"+ i +" <img src='../assets/bolo.png' /></div>"
    } 
    else if((i == 2) || (i == 15) || (i == 20)){
 box.innerHTML += "<div class='dia feriado'>"+ i +" Feriado</div>"
    }else {
 box.innerHTML += "<div class='dia'>"+ i +"</div>"
    }
}

dias = [] = document.getElementsByClassName('dia');

dias[0].onclick = () => {
    alert("Aniversário de Gustavo")
}

dias[1].onclick = () => {
    opaco.style.display = 'block'
    img.innerHTML = "<img src='../assets/finados.jpg'>"
}

dias[14].onclick = () => {
    opaco.style.display = 'block'
    img.innerHTML = "<img src='../assets/proc-republica.jpg'>"
}

dias[19].onclick = () => {
    opaco.style.display = 'block'
    img.innerHTML = "<img src='../assets/consc-negra.jpg'>"
}

btn.onclick = () =>{
    opaco.style.display = 'none'
    console.log(btn)
}