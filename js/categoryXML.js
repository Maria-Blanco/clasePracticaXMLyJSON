let btnCat = document.getElementById('catInf');

btnCat.onclick = function (){
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

    console.log(category);
}