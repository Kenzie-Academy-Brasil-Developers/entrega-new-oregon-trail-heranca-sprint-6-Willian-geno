class Wagon {
    constructor(capacity){
        this.capacity = capacity,
        this.passageiros = []
    }
    getAvailableSeatCount(){
        return (this.capacity - this.passageiros.length)
    }
    join(passageiro){
        if (this.passageiros.length < this.capacity){
            this.passageiros.push(passageiro)
        }
    }
    shouldQuarantine(){
        for(let i = 0; i < this.passageiros.length; i++){
            if (!this.passageiros[i].isHealthy){
                return true;
            }
        }
        return false;
    }
    totalFood(){
        let totalFood = 0;
        for(let i = 0; i < this.passageiros.length; i++){
            totalFood += this.passageiros[i].food;
        }
        return totalFood;
    }
}


module.exports = Wagon;