class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayname() {
        console.log(this.name)
    }

    showStats() {
        console.log(this.name,this.strength,this.speed,this.health)
    }

    drinkSake(){
        this.health += 10;
    }
}





const ninja1 = new Ninja("David");
ninja1.sayname();
ninja1.showStats();
ninja1.drinkSake();
