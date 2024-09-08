document.querySelector('#search').oninput = function() { 
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.players #player'); 
    if (val != '') {
        elasticItems.forEach(function (elem) {
        if (elem.innerText.search(val) == -1) {
            elem.classList.add('hide'); 
            elem.innerHTML = elem.textContent;
        } 
        else {
            elem.classList.add('hide'); 
            elem.classList.remove('hide');
            let str = elem.innerText;
            //elem.innerHTML = insertMark (str, elem.innerText.search(val), val.length);
            }
        });
    }   
    else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
           elem.innerHTML =  elem.textContent;
        });
    }
}   
    //function insertMark (string, pos, len) {
    //return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
//}