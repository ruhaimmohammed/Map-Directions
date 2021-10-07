// input tag size chang eon scroll 
    let x=window.innerWidth;
    if(x <= 900){
        document.getElementById("form").className = "form-horizontal";
        document.getElementById("input-1").className = "form-group d-flex flex-row";
        document.getElementById("input-2").className = "form-group d-flex flex-row";  

    }else{
        document.getElementById("form").className = "form-horizontal row";
        document.getElementById("input-1").className = "form-group d-flex flex-row col";
        document.getElementById("input-2").className = "form-group d-flex flex-row col";
    }



// create the Map 
let map = new L.map('map',{
    layer: MQ.mapLayer(),
    center: [11.2588, 75.7804],
    zoom: 12
});