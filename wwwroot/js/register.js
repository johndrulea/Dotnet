function Car(make,model,year,color,price,features,mileage,image){
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.price=price;
    this.features=features;
    this.mileage=mileage;
    this.image=image;
    }




function registerCar(){
    var make = $("#make").val();
    var model = $("#model").val();
    var year = $("#year").val();
    var color = $("#color").val();
    var price = $("#price").val();
    var features = $("#features").val();
    var mileage = $("#mileage").val();
    var image = $("#image").val();
    console.log("Car Saved!");

    var priceNum = 0;
    if(price){
        priceNum = parseFloat(price);
    }

    var yearNum = 0;
    if(year){
        yearNum = parseFloat(year);
    }

    var mileNum = 0;
    if(mileage){
        mileNum = parseFloat(mileage);
    }

    var car = new Car(make,model,yearNum,color,priceNum,features,mileNum,image);
    console.log(car);

    $.ajax({
        url:'/catalog/SaveCar',
        type: 'Post',
        contentType: 'application/json',
        data: JSON.stringify(car),
        success: function(res){
            console.log("Server responded", res);
        },
        error: function(detail){
        console.log("This failed", res);
        }
    });
    clearForm()
}

function clearForm(){
    $("#make").val("");
    $("#model").val("");
    $("#year").val("");
    $("#color").val("");
    $("#price").val("");
    $("#features").val("");
    $("#mileage").val("");
    $("#image").val("");
}
    

function init() {
    console.log("Register Page!");    
    $("#btn-save").click(registerCar);
}

window.onload = init;