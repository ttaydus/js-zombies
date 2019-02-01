/**
 * Class => Item(name)
 * -----------------------------
 * Creates an item.
 *
 * @name Item
 * @param {string} name     The item's name.
 * @property {string} name
 */

class Item{
  constructor(name){
    this.name = name;
  }
};


/**
 * Class => Weapon(name, damage)
 * -----------------------------
 * Creates a weapon item.
 * Weapon items can be equipped for use in battle.
 *
 * The Weapon class constructor will call
 *   the super class (Item) constructor
 *   while passing in the 1 Item constructor param
 *
 * @name Weapon
 * @param {string} name     The weapon's name.
 * @param {number} damage   The weapon's damage.
 * @property {number} damage
 */


/**
 * Weapon Extends Item Class
 * -----------------------------
 */

class Weapon extends Item {
  constructor (name, damage) {
    super (name);
    this.damage = damage;
  }
}

/**
 * Class => Food(name, energy)
 * -----------------------------
 * Creates a food item.
 * Food items give energy, restoring health to the player.
 *
 * The Food class constructor will call
 *   the super class (Item) constructor
 *   while passing in the 1 Item constructor param
 *
 * @name Food
 * @param {string} name       The food's name.
 * @param {number} energy     The energy the food provides.
 * @property {number} energy
 */

/**
 * Food Extends Item Class
 * -----------------------------
 */

class Food extends Item {
  constructor (name, energy) {
    super (name);
    this.energy = energy;
  }
}

/**
 * Class => Player(name, health, strength, speed)
 * -----------------------------
 * Creates a player in a zombie-infested world.
 *
 * @name Player
 * @param {string} name                    The player's name.
 * @param {number} health                  The player's health.
 * @param {number} strength                The player's strength.
 * @param {number} speed                   The player's speed.
 * @private {array} pack                   Default value should be empty.
 * @private {number} maxHealth             Default value should be set to `health`.
 * @property {string} name
 * @property {number} health
 * @property {number} strength
 * @property {number} speed
 * @property {boolean} isAlive             Default value should be `true`.
 * @property {Weapon/boolean} equipped     Default value should be `false`.
 * @property {method} getPack              Returns private variable `pack`.
 * @property {method} getMaxHealth         Returns private variable `maxHealth`.
 */

class Player {
  constructor(name, health, strength, speed){
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this._pack = [];
    this._maxHealth = health;
    this.isAlive = true;
    this.equipped = false;
  };

    getPack() {
      return this._pack;
    }
    
    getMaxHealth () {
      return this._maxHealth;
    }



/**
 * Player Class Method => checkPack()
 * -----------------------------
 * Player checks the contents of their pack.
 *
 * Nicely format and print the items in the player's pack.
 * To access the pack, be sure to use Player's getPack method.
 * You should be able to invoke this function on a Player instance.
 *
 * @name checkPack
 */

checkPack() {
    console.log('this.pack:', this._pack);
}



/**
 * Player Class Method => takeItem(item)
 * -----------------------------
 * Player takes an item from the world and places it into their pack.
 *
 * Player's pack can only hold a maximum of 3 items, so if they try to add more
 *   than that to the pack, return false.
 * Before returning true or false, print a message containing the player's
 *   name and item's name if successful.  Otherwise, print a message saying
 *   that the pack is full so the item could not be stored.
 * Note: The player is allowed to store similar items (items with the same name).
 * You should be able to invoke this function on a Player instance.
 *
 * @name takeItem
 * @param {Item/Weapon/Food} item   The item to take.
 * @return {boolean} true/false     Whether player was able to store item in pack.
 */



takeItem(item) {
  if(this._pack.length < 3){
    console.log(this.name + ' successfully yoinked ' + item.name);
    this._pack.push(item);
    //console.log('length:',this._pack.length);
    return true;
  }else if(this._pack.length >= 3){
    console.log('Pack is at capacity, cannot take the item.');
    return false;
  }
};

/**
 * Player Class Method => discardItem(item)
 * -----------------------------
 * Player discards an item from their pack.
 *
 * Use Array's indexOf method to check if the pack contains the item.
 * If an item is not found in the pack, indexOf returns -1.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * If the item is in the pack, remove it from the pack using Array's splice method.
 * Print the player and item names and a message saying the item was discarded.
 * Return true for the successful discard.
 * Note: The splice method can also be used for array element replacement.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 *
 * If the item is not in the pack, return a message with the item name saying
 *   nothing was discarded since the item could not be found.
 * Return false in this case.
 *
 * You should be able to invoke this function on a Player instance.
 *
 * @name discardItem
 * @param {Item/Weapon/Food} item   The item to discard.
 * @return {boolean} true/false     Whether player was able to remove item from pack.
 */


discardItem(item) {
  const ind = this._pack.indexOf(item);
  if(ind === -1){
    console.log('Item not found in pack.');
    return false;
  }else{
    this._pack.splice(ind,1);
    console.log(this.name + ' dropped ' + item.name);
    return true;
  }
};



/**
 * Player Class Method => equip(itemToEquip)
 * -----------------------------
 * Player equips a weapon item.
 *
 * Player can only equip Weapon instances.
 * Player can only equip weapon items from their pack.
 *
 * If the player already has a weapon equipped (the equipped property
 *   is set to an Item), find the itemToEquip in the pack and replace
 *   it with the currently equipped item.  Then set the equipped property
 *   to the itemToEquip.
 * However, if the player doesn't already have a weapon equipped, simply
 *   equip that item and remove it from the pack.
 * You should be able to invoke this function on a Player instance.
 *
 * @name equip
 * @param {Weapon} itemToEquip  The weapon item to equip.
 */

equip(itemToEquip) {
  const indexOfItemToEquip = this._pack.indexOf(itemToEquip);
  const currEquip = this.equipped;
  //check if the item to equip is a Weapon
  if(itemToEquip instanceof Weapon){
    //check if itemToEquip is within pack
    if(this._pack.indexOf(itemToEquip) >= 0){
      //if equipped doesn't equal false (default empty setting)
      if(this.equipped){
        //set equip to itemToEquip
        this.equipped = this._pack[indexOfItemToEquip]
        //swap equipped into pack @ index of itemToEquip
        this._pack.splice(indexOfItemToEquip, 1, currEquip);
      //if there is nothing equipped
      }else{
        //set equip to itemToEquip
        this.equipped = this._pack[indexOfItemToEquip]
        this._pack.splice(indexOfItemToEquip,1);
      }
    }
  }
};


// equip(itemToEquip) {
//   debugger;
//   const indexOfWeaponInPack = this._pack.indexOf(itemToEquip);
//   //item is a Weapon
//   if(itemToEquip instanceof Weapon){
//     //weapon is inside the pack
//     if(indexOfWeaponInPack >= 0){
//       //a weapon is already equipped
//       if(this.equipped === true){
//         //remove equipped weapon and put it into pack
//         this._pack.splice(indexOfWeaponInPack, 1, this.equipped);
//         //set equipped to itemToEquip
//         this.equipped = itemToEquip;
//       //no weapon is equipped
//       }else if(this.equipped === false){
//         //equip the item
//         this.equipped = itemToEquip;
//         //remove it from the pack
//         discardItem(itemToEquip);
//       }
//     }
//   }
// };

/**
 * Player Class Method => eat(itemToEat)
 * -----------------------------
 * Player eats a food item, restoring their health.
 *
 * Player can only eat Food instances.
 * Player can only eat food items from their pack.
 *
 * Remove itemToEat from the pack.
 * Increase the player's health by the food's energy amount, but do not
 *   exceed the player's max health.  If exceeded, simply set player's health
 *   to max health instead.
 * To access the player's max health, be sure to use Player's getMaxHealth method.
 * You should be able to invoke this function on a Player instance.
 *
 * @name eat
 * @param {Food} itemToEat  The food item to eat.
 */

eat(itemToEat) {
  const indexOfItemToEat = this._pack.indexOf(itemToEat);
  // can only eat food instances
  if(itemToEat instanceof Food){
    // can only eat items from their pack
    if(indexOfItemToEat >= 0){
      // console.log('health:', this.health)
      // console.log('maxHealth:', this.getMaxHealth());
      // console.log('itemToEat:', itemToEat.energy);
      
      // maxHealth >= curr health + energy of food
      if(this.getMaxHealth() >= this.health + itemToEat.energy){
        // add energy
        this.health = this.health + itemToEat.energy;
        // remove item
        this._pack.splice(indexOfItemToEat,1);
      // maxHealth < curr health + energy of food
      }else{
        // = max health
        this.health = this.getMaxHealth();
        //remove item
        this._pack.splice(indexOfItemToEat, 1);
      }
    }
  }
};

/**
 * Player Class Method => useItem(item)
 * -----------------------------
 * Player uses an item from the pack.
 *
 * If the item is a weapon, the player should equip the item.
 * If the item is food, the player should eat the item.
 * You should be able to invoke this function on a Player instance.
 *
 * @name useItem
 * @param {Item/Weapon/Food} item   The item to use.
 */

useItem(item){
  if(item instanceof Weapon){
    //console.log('weapon');
    this.equip(item);
  }
  else if(item instanceof Food){
    //console.log('food');
    this.eat(item);
  }
};

/**
 * Player Class Method => equippedWith()
 * -----------------------------
 * Player checks their equipment.
 *
 * Prints the player's name and equipped weapon's name.
 * If nothing is equipped, prints a message saying so.
 * Also returns the equipped weapon's name or false if nothing is equipped.
 * You should be able to invoke this function on a Player instance.
 *
 * @name equippedWith
 * @return {string/boolean}   Weapon name or false if nothing is equipped.
 */

equippedWith (){
  // something is equipped
  if(this.equipped){
    console.log(this.name + ' is equipped with ' + this.equipped.name);
    return this.equipped.name;
  //nothing is equipped
  }else{
    console.log(this.name + ' is NOT equipped');
    return false;
  }
}

};

/**
 * Class => Zombie(health, strength, speed)
 * -----------------------------
 * Creates a normal zombie.
 *
 * @name Zombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 * @private {number} maxHealth      Default value should be set to `health`.
 * @property {number} health
 * @property {number} strength
 * @property {number} speed
 * @property {boolean} isAlive      Default value should be `true`.
 */

class Zombie {
  constructor(health, strength, speed){
    this._maxHealth = health;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.isAlive = true;
  }
};

/**
 * Class => FastZombie(health, strength, speed)
 * -----------------------------
 * Creates a fast zombie.
 *
 * The FastZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name FastZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */

/**
 * FastZombie Extends Zombie Class
 * -----------------------------
 */

class FastZombie extends Zombie{
  constructor(health, strength, speed){
    super(health, strength, speed);
  }
};

/**
 * Class => StrongZombie(health, strength, speed)
 * -----------------------------
 * Creates a strong zombie.
 *
 * The StrongZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name StrongZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * StrongZombie Extends Zombie Class
 * -----------------------------
 */

class StrongZombie extends Zombie{
  constructor(health, strength, speed){
    super(health, strength, speed);
  }
};

/**
 * Class => RangedZombie(health, strength, speed)
 * -----------------------------
 * Creates a ranged zombie.
 *
 * The RangedZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name RangedZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * RangedZombie Extends Zombie Class
 * -----------------------------
 */

class RangedZombie extends Zombie{
  constructor(health, strength, speed){
    super(health, strength, speed);
  }
};

/**
 * Class => ExplodingZombie(health, strength, speed)
 * -----------------------------
 * Creates an exploding zombie.
 *
 * The ExplodingZombie class constructor will call
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name ExplodingZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * ExplodingZombie Extends Zombie Class
 * -----------------------------
 */

class ExplodingZombie extends Zombie{
  constructor(health, strength, speed){
    super(health, strength, speed);
  }
};


/**
 * Sample run.
 * Feel free to edit this and check your game logic.
 */


function runGame() {
  var player = new Player("Joan", 500, 30, 70);
  var zombie = new Zombie(40, 50, 20);
  var charger = new FastZombie(175, 25, 60);
  var tank = new StrongZombie(250, 100, 15);
  var spitter = new RangedZombie(150, 20, 20);
  var boomer = new ExplodingZombie(50, 15, 10);

  var shovel = new Weapon("shovel", 15);
  var sandwich = new Food("sandwich", 30);
  var chainsaw = new Weapon("chainsaw", 25);

  player.takeItem(shovel);
  player.takeItem(sandwich);
  player.takeItem(chainsaw);
  player.discardItem(new Weapon("scythe", 21));
  player.discardItem(shovel);
  player.checkPack();
  player.takeItem(shovel);
  player.checkPack();

  player.equippedWith();
  player.useItem(chainsaw);
  player.equippedWith();
  player.checkPack();

  player.useItem(shovel);
  player.equippedWith();
  player.checkPack();

  player.health = 487;
  console.log("Before health: " + player.health);
  player.useItem(sandwich);
  console.log("After health: " + player.health);
  player.checkPack();
}
