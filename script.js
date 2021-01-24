// function makeRequest()
// {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(res => res.json())
//         .then(res => console.log(res))
//         .catch(err => console.error(err));
//         throw new Error ('Error after fetch', err());
// }

// function main()
// {
//     makeRequest();
// }

// main();

// //проверка мэйна на наличие ошибок, если она есть выведется уведомление
// try 
// {
//     main();
// } 
// catch(err)
// {
//     throw new Error('Error while fetching', err);
// }





// // OOP
// // 1. Абстракція
// class Animal
// {
//     constructor(name, age)
//     {
//         this.name = name;
//         this.age = age;
//         this.status;
//     }

//     say()
//     {
//         console.log('Says');
//     }

//     run()
//     {
//         console.log('I am running');
//     }

//     getStatus()
//     {
//        return this.status;
//     }

//     stayFree()
//     {
//         this.status = 'Free';
//     }

//     stayBusy()
//     {
//         this.status = 'Busy';
//     }
// }

// const animal1 = new Animal('Murka', 1);
// const animal2 = new Animal('Vivka', 4);
// console.log(animal1);
// console.log(animal2);

// animal2.getStatus();

// // 2. Наслідування

// class Lion extends Animal
// {
//     constructor(name, age, prideName)
//     {
//         super(name, age);
//         this.prideName = prideName;
//     }

//     run()
//     {
//         console.log('Running like lion');
//     }

//     say()
//     {
//         console.log('Arrrrrr');
//     }
// }


// class Fish extends Animal
// {
//     constructor(name, age)
//     {
//         super(name, age);
//     }
//     swim()
//     {
//         console.log('Swimmimg like fish');
//     }
// }

// const lion = new Lion('Simba', 5, 'Pride1');
// const fish = new Fish('Nemo', 2);

// console.log(lion);
// console.log(fish);


// // 3. Поліморфізм

// (lion.say());
// (fish.say());

// // 4. Інкапсуляція
// // const module = (function()
// // {
// //     const a = 5;
// //     const b = 0;

// //     function aa()
// //     {

// //     }

// //     return
// //     {
// //         10 funct 3 var
// //     }
// // }())


// class Fighter 
// {
//     constructor(obj)
//     {
//         this.name = obj.name;
//         this.attack = obj.attack;
//         this.hitpoints = obj.hitpoints;
//         this.totalhitpoints = obj.hitpoints;
//     }

//     getHitpoints()
//     {
//         return this.hitpoints;
//     }

//     setHitpoints(value)
//     {
//         this.hitpoints = value;
//     }

//     getTotalHitpoints()
//     {
//         return this.totalHitpoints;
//     }

//     setTotalHitpoints()
//     {
//         this.totalHitpoints = value;
//     }

//     getAttack()
//     {
//         return this.attack;
//     }

//     setAttack()
//     {
//         this.attack = value;
//     }

//     fight(enemy)
//     {
//         if(enemy.hitpoints > 0)
//         {
//             enemy.hitpoints = enemy.hitpoints - this.attack;
//         }
//     }

//     isAlive()
//     {
//         return this.hitpoints > 0;
//     }
// }


// class Champion extends Fighter
// {
//     constructor(obj)
//     {
//         super(obj);
//     }

//     heal()
//     {
//         this.hitpoints = this.hitpoints + 5;
//         if(this.hitpoints + 5 > this.totalHitpoints)
//         {
//             this.hitpoints = 60;
//         }
//     }

//     defence()
//     {
//         if(this.hitpoints <= this.totalHitpoints)
//         {
//             hero.hitpoints = this.hitpoints + 1;
//         }
//     }
// }

// class Monster extends Fighter
// {
//     constructor(obj)
//     {
//         super(obj);
//     }

//     enrage(enemy)
//     {
//         enemy.hitpoints = enemy.hitpoints - (this.attack * 2);
//     }
// }

// var hunter = new Champion({name: 'Rexxar', attack:10, hitpoints:60});
// var beast = new Monster({name: 'KingKrush', attack:8, hitpoints:80});

// hunter.setHitpoints(58);

// console.log(hunter.getHitpoints());
// console.log(beast.hitpoints);