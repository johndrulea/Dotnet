
function retrieveCatalog(){
    $.ajax({
        url: '/catalog/getCatalog',
        type:"GET",
        success: function(res){
            console.log("Server responded, there are: " + res.length + " cars registered.", res);
            for(let i=3; i < res.length; i++){
                displayCar(res[i]);
            }
        },    
        error: function(detail){
        console.log("This failed", res);
        }
   }); 
}


function displayCar(car){
    var container = $("#catalog");

    var sntx = 
    `<div class='item' id='${car.Id}'>
        <img src="${car.image}">
        
        <div class="left-side-wrapper"><h3>${car.year} ${car.make}</h3>
        <h3>${car.model}</h3>
        </div>
        <div class="right-section-wrapper">$ ${car.price} / ${car.mileage} miles</div>
        <div><h5>Color: ${car.color}</h5></div>
    </div>`;
    container.append(sntx);
}

/*

<button onclick="deleteCar('${car.id}')" id="btn-delete" class="btn btn-primary">Delete!</button>
function deleteCar(id) {
    var deleteCar = id;
    for(var i =0;i<Cars.length;i++){
        var selected = Cars [i];
        if(selected.id===this.id){
            indexDelete=i;
        }
    }
    Cars.splice(indexDelete,1);
    Cars.remove(id);
    displayCar.append();
    console.log("Delete", id);
}
*/


/*
function deleteCar(carId){
    var deleteCar = carId;
    var indexDelete;
    for(var i =0;i<Cars.length;i++){
        var selected = Cars [i];
        if(selected.id===carId){
            indexDelete=i;
    }
    console.log("The " + car.make + " was deleted", res);
    Cars.splice(indexDelete,1);
    deleteCar.remove();
    }
}
*/
/*
function deleteCar(){
    console.log("Clicked!");


    console.log("Clicked!");
    var indexDelete;
    for(var i =0;i<Cars.length;i++){
        var selected = Cars [i];
        if(selected.Id===this.Id){
            indexDelete=i;
        }
    }
    Cars.splice(indexDelete,1);
    $(this).remove();
    retrieveCatalog.append();
    
}
*/


function init(){
    console.log("Catalog page!");
    // get data
    retrieveCatalog();
    //hook events
}

window.onload = init;