let btnCat = document.getElementById('catInf');

window.onload = function (){
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
            let catli = document.createElement('li');
            let catNombre = document.createElement('a');
            catNombre.innerHTML = category[i].getElementsByTagName('nombre')[0].textContent;
            $(catNombre).attr("href","#");

            names.appendChild(catli);
            catli.appendChild(catNombre);
        }
}