var defenceCounter = 0;
var enrageCounter = 0;

class Fighter 
{
    constructor(obj) 
    {
        this.name = obj.name;
        this.attack = obj.attack;
        this.hitpoints = obj.hitpoints;
        this.totalHitpoints = obj.hitpoints;
    }

    getHitpoints() 
    {
        return this.hitpoints;
    }

    setHitponts(value) 
    {
        this.hitpoints = value;
    }

    getTotalHitpoints() 
    {
        return this.totalHitpoints;
    }

    setTotalHitponts(value) 
    {
        this.totalHitpoints = value;
    }

    getAttack() 
    {
        return this.attack;
    }
    
    setAttack(value) 
    {
        this.attack = value;
    }

    fight(enemy) 
    {
        if(enemy == hunter)
        {
            if((defenceCounter != 0) & (enemy.hitpoints + 1 <= enemy.totalHitpoints))
            {
                enemy.hitpoints = enemy.hitpoints + 1;
                defenceCounter = 0;
            }

            else if((enrageCounter > 0) & (enemy.hitpoints - (2 * this.attack) >= 0))
            {
                enemy.hitpoints = enemy.hitpoints - (2 * this.attack);
                enrageCounter--;
            }

            else
            {
                if(enemy.hitpoints < 10)
                {
                    enemy.hitpoints = enemy.hitpoints - enemy.hitpoints;
                    console.log('Hero have died');
                }
                else
                {
                    enemy.hitpoints = enemy.hitpoints - this.attack;
                }
            }
        }

        else
        {
            if(enemy.hitpoints <= 10)
            {
                enemy.hitpoints = enemy.hitpoints - enemy.hitpoints;
                console.log('Hero have died');
            }
            else
            {
                enemy.hitpoints = enemy.hitpoints - this.attack;
            }
        }
    }

    isAlive() 
    {
        return this.hitpoints > 0;
    }
}


class Champion extends Fighter
{
    constructor(obj) 
    {
        super(obj);
    }

    heal()
    {
        if(this.hitpoints + 5 <= this.totalHitpoints)
        {
            this.hitpoints = this.hitpoints + 5;
        }
        else
        {
            console.log('You can not heal now');
        }
    }

    defence()
    {
        defenceCounter ++;
    }
}


class Monster extends Fighter
{
    constructor(obj) 
    {
        super(obj);
    }

    enrage()
    {
        enrageCounter = enrageCounter + 2;
    }

    fury()
    {
        this.hitpoints = this.hitpoints - 5;
        this.totalHitpoints = this.totalHitpoints - 5;
        this.attack = this.attack + 2;
    }
}

var hunter = new Champion({name: "Rexxar", attack: 10, hitpoints: 60});
var beast = new Monster({name: "King Krush", attack: 8, hitpoints: 80});

beast.fury();
beast.fight(hunter);
hunter.defence();
beast.fight(hunter);
beast.fight(hunter);
hunter.fight(beast);
hunter.heal();
hunter.heal();
beast.enrage();
beast.fight(hunter);
hunter.setHitponts(40);
beast.fight(hunter);
beast.fight(hunter);
beast.fight(hunter);

console.log(hunter.getHitpoints());
console.log(beast.getHitpoints());