var imgelement;

function imgselect(imgid){
    imgelement=imgid.cloneNode(true);
    
}
function dropfun(div1){
    if (imgelement.id!="img3"){
    div1.appendChild(imgelement);}
}