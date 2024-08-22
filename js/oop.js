//class

class car {
    constructor(seater,wheel,color,name,model){
        this.seater=seater;
        this.wheel=wheel;
        this.color=color;
        this.name=name;
        this.model=model;

    

        
    }
     //methods

     accelerate() {
        console.log("accelerate")
     }
     park() {
        console.log("park")
     }
     reverse() {
        console.log("reverse")
     }
     changeGear() {
        console.log("changeGear")
     }
     break() {
        console.log("break")
     }
  


}
//using or calling a class
const newCar= new car(4,1,"red","lexus","is350") //new car is an istance of class car
console.log(newCar.accelerate ());


class benz extends car {
        constructor(seater,wheel,color,model){
            super(seater,wheel,color,"benz" ,model);
        
    }
    other(){
        console.log("others can be here")
    }
}

const newbez= new benz(2,1,"yellow and red", "c300");
console.log(newbez)









// functions
function functionCar( seater,wheel,color,name,model){
    function accelerate() {}
    function park( ) {}
    function reverse() {}
    function changeGear() {}
    function breakSpeed() {}
 
    // must return an object
   return {
    color,
    name,
    model,
    accelerate,
    reverse,
    breakSpeed,
   };
}



//calling a function

const newFunCar = functionCar(4,1,"red","lexus,is350")
console.log(newFunCar)