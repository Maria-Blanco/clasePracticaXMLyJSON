function xML (){
        let xhRequest = new XMLHttpRequest();
    
        xhRequest.onreadystatechange = function (){
            if (this.readyState === 4 && this.status === 200) {
                listarCategorias (this);
            }
        };
    
        xhRequest.open('GET', 'http://127.0.0.1:5500/categories.xml', true);
        xhRequest.send();
    };

function listarCategorias(xml){
    let cat = xml.responseXML;
    let category = cat.getElementsByTagName('categoria');

    let names = document.getElementById('listarCategorias');
        for (let i=0; i<category.length; i++) {
            //LINKS DE NAV
            let catli = document.createElement('li');
            let catLink = document.createElement('a');


            catLink.innerHTML = category[i].getElementsByTagName('nombre')[0].textContent;
            idCat = category[i].getElementsByTagName('codigo')[0].textContent;
            $(catLink).attr("href",'#'+idCat);

            names.appendChild(catli);
            catli.appendChild(catLink);

            //ARTICULOS DE CARACTERISTICAS
            let info = document.getElementById('principal');
            let secCat = document.createElement('section');
            $(secCat).attr("id",idCat);
            let titleCat = document.createElement('h2');
            titleCat.innerHTML = category[i].getElementsByTagName('nombre')[0].textContent;

            let imgCat = document.createElement('img');
            let imgName =category[i].getElementsByTagName('imagen')[0].textContent;
            $(imgCat).attr("src",'resources/imagenes/'+ imgName);

            let descCat = document.createElement('p');
            descCat.innerHTML = category[i].getElementsByTagName('descrition')[0].textContent;                

            info.appendChild(secCat);
            secCat.appendChild(titleCat);
            secCat.appendChild(imgCat);
            secCat.appendChild(descCat);
        }
}