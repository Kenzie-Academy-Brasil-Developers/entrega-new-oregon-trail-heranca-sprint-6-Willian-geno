class Traveler {
    
    constructor (name,food = 1){
        this.name = name;
        this.food = food;
        this.isHealthy = true;
    }

    hunt(){
        this.food += 2;
    }

    eat(){
        if(this.food > 0){
            this.food -= 1;
        }else{
            this.isHealthy = false;
        }
    }
}

class Hunter extends Traveler {
    constructor(name, food = 2,idHealthy){
        super(name, idHealthy)
        this.food = food;
    }

    hunt(){
        this.food += 4;
    }

    eat(){
        if(this.food >= 2){
            this.food -= 2;
        }else if(this.food = 1){
            this.food -= 1;
            this.isHealthy = false;
        }else{
            this.isHealthy = false;
        }
    }
    giveFood(traveler, numOfFoodUnits){
        if (numOfFoodUnits <= this.food){
            this.food -= numOfFoodUnits;
            traveler.food = numOfFoodUnits;
        }
    }
}

class Doctor extends Traveler{
    
    heal(traveler){
        traveler.isHealthy = true;
    }

} 


module.exports = Traveler;