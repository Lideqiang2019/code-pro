/**
 * makeSound是共同的特征
 * 每个动物单独有自己的sound，
 * 那么可以把共同的特征单独拿出来，保留每个动物自己的特征，这样有一个好处那就是
 * 所有的动物都是新增的，并不会对makeSound有影响
 */
class Animal{
    constructor(animal){
        this.animal = animal;
    }
    makeSound(){
       this.animal.sound(); 
    }
}

class Duck{
    sound(){
        console.log("嘎嘎嘎");
    }
}

class Chicken{
    sound(){
        console.log("咯咯咯");
    }
}

new Animal(new Duck).makeSound();
new Animal(new Chicken).makeSound();