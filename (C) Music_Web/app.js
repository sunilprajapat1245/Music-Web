let listItms = document.querySelector(".listItems") ;
listItms.style.maxHeight = "0px" ;

function toggleFunc(){
    if(listItms.style.maxHeight == "0px" ){
        listItms.style.maxHeight = "300px" ;
    }else{ 
        listItms.style.maxHeight = "0px" ;
    }
}