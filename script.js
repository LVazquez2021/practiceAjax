const btnShow = document.getElementById("btnShow");
const h3Date = document.getElementById('h3Date');
const detail = document.getElementById('detail');
const imgPicture = document.getElementById("image");
const h1Title = document.getElementById("title");
const datePicture = document.getElementById('datePicture');

btnShow.addEventListener("click", function() {
    // Enviar un request GET a https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
    // y recibir la respuesta
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function() {
        const response = JSON.parse(xhr.responseText);

        const { title, date, copyright, explanation, url } = response;

        console.log(datePicture.value);
        console.log(response);
        h1Title.textContent = title;
        h3Date.textContent = `Autor: ${copyright || 'a definir'} || fecha de la picture:${date}`
        detail.textContent = `${explanation}`;
        detail.style.fontSize = "25px";
        detail.style.fontFamily = 'verdana';
        detail.style.textJustify = "auto";
        imgPicture.src = url;

    });

    xhr.open("GET", `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${datePicture.value}`);
    xhr.send();
});