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
        super(name)
        this.name = name;
        this.health = health;
        this.strength = strength
    }
    receiveDamage(num1){
        this.health -= num1;
        if (this.health == 0){
            return " "
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon {}

// War
class War {}
