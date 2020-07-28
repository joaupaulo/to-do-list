var ul = document.querySelector(".itens1")
var li;
var itemid;
var item;


function addlist() {
  if(document.querySelector(".campo1").value != ""){

    item = document.querySelector(".campo1");
itemid=ul.childElementCount;

li=crealist(item.value,itemid);
li.appendChild(createbtnlist(itemid));
ul.appendChild(li);



  }
}

function removelist(itemid) {
   for(i = 0 ; i < ul.children.length ; i ++){

    if(ul.children[i].getAttribute("index") == itemid ) {
ul.children[i].remove();

    }

   }
    
}


function crealist(itemvalue,itemid) {
let li = document.createElement("li");
li.setAttribute("index",itemid);
li.appendChild(document.createTextNode(itemvalue));

return li 
}


function createbtnlist(itemid) { 
    let btn = document.createElement("button");
    btn.setAttribute("onclick","removelist("+itemid+")");
    btn.innerHTML = "X";
    return btn

}