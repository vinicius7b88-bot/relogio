function relogio(){



var img = document.getElementById("imagem");






    const espacoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date ();

    const horas = horaAgora.getHours();

    const minutos = horaAgora.getMinutes();

    const segundos = horaAgora.getSeconds();

    // const formatoHora = horas.toString().padStart(2, "0");
    formatoHora = 23
   
    const formatoMinutos = minutos.toString().padStart(2, "0");

    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHora}: ${formatoMinutos}: ${formatoSegundos}`;



const frase = document.querySelector('.frase')
//Array é um arranjo, ou estrutura de dados onde armazenamos uma coleção de elementos.

dia = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril' , 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

hoje = new Date()

frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2,0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`



if (formatoHora >= 00 && formatoHora < 12 ){
    document.body.style.backgroundImage = 'url(https://besthqwallpapers.com/Uploads/4-4-2017/14976/ferrari-gtc4-lusso-2017-sports-cars-gray-coast.jpg)'
    document.body.style.backgroundSize = 'cover'

img.src = "http://www.cutedrop.com.br/wp-content/uploads/2011/09/ferrari.jpg"


    }

    else if (formatoHora >= 12 && formatoHora < 18){
        document.body.style.backgroundImage = 'url(https://cdn.autopapo.com.br/box/uploads/2022/12/08124727/rimac_nevera-branco-parado-por-do-sol-com-montanhas-ao-fundo.jpeg)'
        document.body.style.backgroundSize = 'cover'

        img.src = "https://i.pinimg.com/236x/00/69/96/006996991c77ca63bffa428ada1941e0.jpg"

}

else{
    document.body.style.backgroundImage = 'url(https://c.wallhere.com/photos/23/b9/auto_alexis_france_cars_sport_race_sunrise_french-862417.jpg!d)'
    document.body.style.color = '#red'
    document.body.style.backgroundSize = 'cover'
    img.src = "https://img.estadao.com.br/resources/jpg/1/2/1488652309221.jpg"



}




}


setInterval(relogio, 1000)

