function jSON (){
    let jReq = new XMLHttpRequest();

    jReq.onreadystatechange  = function (){
        if (this.readyState === 4 && this.status === 200) {
            jSonDetails (this);
        }
    };

    jReq.open ('GET', 'http://127.0.0.1:5500/details.json', true);
    jReq.responseType = 'json'; 
    jReq.send();
};

function jSonDetails (jsonObj){
    let valoresJson = jsonObj.response;
    
    let detCat = valoresJson.detalles;
    let details = document.getElementById ('catalogo');

    detCat.forEach(element => {

        let categ = document.createElement('h3');
        categ.innerHTML = element.categoria;

        let prod = document.createElement('h4');
        prod.innerHTML = element.producto;

        let disp = document.createElement('span');
        disp.innerHTML = 'Disponible: ' + element.disponible;

        let temp = document.createElement('h5');
        temp.innerHTML = 'Temporada: ' + element.temporada;

        let desc = document.createElement('p');
        desc.innerHTML = element.descripcion;

        let card = document.createElement('section');

        let up = document.createElement('section')

        details.appendChild(card);
        card.appendChild(up);
        up.appendChild(categ);
        up.appendChild(prod);
        card.appendChild(temp);
        card.appendChild(disp);
        card.appendChild(desc);
    })
}