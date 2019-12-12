// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(num1){
        this.health -= num1
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health,strength)
        this.name = name;
    }

    receiveDamage(num1){
        this.health = this.health - num1;
        if (this.health > 0){
            return `${this.name} has received ${num1} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }
    receiveDamage(num1){
        this.health = this.health - num1;
        if (this.health > 0){
            return `A Saxon has received ${num1} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
    }


// War
class War {
    constructor(){
        this.length = 0;
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let randViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randSaxon = Math. floor(Math.random() * this.saxonArmy.length);

        let message = this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViking].attack());

        if(this.saxonArmy[randSaxon].health <= 0){
            this.saxonArmy.splice(randSaxon, 1);
        }

        return message;
    }

    saxonAttack(){
        let randViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        
        let message = this.vikingArmy[randViking].receiveDamage(this.saxonArmy[randSaxon].attack());

        if(this.vikingArmy[randViking].health <= 0){
            this.vikingArmy.splice(randViking, 1);
        }
        return message;
    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survive another day...";
        }
        else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
