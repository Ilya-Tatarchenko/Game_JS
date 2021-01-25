var defenceCounter = 0;
var enrageCounter = 0;

//информация о здоровье
let hunterHealth = document.querySelector('#hunter_health');
let monsterHealth = document.querySelector('#monster_health');

//кнопки атаки и спец. умений
let hunterAttack = document.querySelector('#hunter_attack');
let monsterAttack = document.querySelector('#monster_attack');
let block = document.querySelector('#hunter_defence');
let heal = document.querySelector('#hunter_heal');
let enrage = document.querySelector('#monster_enrage');
let fury = document.querySelector('#monster_fury'); 

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
            //использование способности ЗАЩИТА
            if((defenceCounter != 0) & (enemy.hitpoints + 1 <= enemy.totalHitpoints))
            {
                enemy.hitpoints = enemy.hitpoints + 1;
                defenceCounter = 0;
            }

            //использование способности ДВОЙНОЙ УРОН
            else if((enrageCounter > 0) & (enemy.hitpoints - (2 * this.attack) >= 0))
            {
                enemy.hitpoints = enemy.hitpoints - (2 * this.attack);
                enrageCounter--;
            }

            else
            {
                if(enemy.hitpoints <= this.attack)
                {
                    enemy.hitpoints = enemy.hitpoints - enemy.hitpoints;
                    this.totalHitpoints = this.totalHitpoints + (0.1 * enemy.totalHitpoints);
                    this.hitpoints = this.totalHitpoints;
                    enemy.hitpoints = 0.25 * enemy.totalHitpoints; 
                    alert('Monster have won');
                }
                else
                {
                    enemy.hitpoints = enemy.hitpoints - this.attack;
                }
            }
        }

        else if(enemy == beast)
        {
            if(enemy.hitpoints <= 10)
            {
                enemy.hitpoints = enemy.hitpoints - enemy.hitpoints;
                this.attack = this.attack + 1;
                enemy.hitpoints = enemy.totalHitpoints;
                alert('Monster have been passed');   
                alert('+1 to your attack');
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

    //текущее здоровье увеличивается на 5
    heal()
    {
        if(this.hitpoints + 5 <= this.totalHitpoints)
        {
            this.hitpoints = this.hitpoints + 5;
        }
        else
        {
            alert('You can not heal now');
        }
    }

    //следующая атака монстра не нанесет урона, а
    //текущее здоровье героя возрастет на 1
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

    //следующие две атаки монстра наносят двойной урон
    enrage()
    {
        enrageCounter = enrageCounter + 2;
    }

    //атака монстра возрастает на 2 еденицы, но 
    //общее здоровье уменьшается на 5 едениц
    fury()
    {
        this.hitpoints = this.hitpoints - 5;
        this.totalHitpoints = this.totalHitpoints - 5;
        this.attack = this.attack + 2;
    }
}

var hunter = new Champion({name: "Rexxar", attack: 10, hitpoints: 60});
var beast = new Monster({name: "King Krush", attack: 8, hitpoints: 80});

hunterAttack.addEventListener('click', function(event) {
    hunter.fight(beast);
    monsterHealth.innerHTML = beast.getHitpoints();
});

monsterAttack.addEventListener('click', function(event) {
    beast.fight(hunter);
    hunterHealth.innerHTML = hunter.getHitpoints();
});

block.addEventListener('click', function(event) {
    hunter.defence();
    hunterHealth.innerHTML = hunter.getHitpoints();
});

heal.addEventListener('click', function(event) {
    hunter.heal();
    hunterHealth.innerHTML = hunter.getHitpoints();
});

enrage.addEventListener('click', function(event) {
    beast.enrage();
});

fury.addEventListener('click', function(event) {
    beast.fury();
    monsterHealth.innerHTML = beast.getHitpoints();
});

hunterHealth.innerHTML = hunter.getHitpoints();
monsterHealth.innerHTML = beast.getHitpoints();


