class hero {
    heroName;
    age;
    typeHero;

    constructor(heroName, age, typeHero) {
        this.heroName = heroName;
        this.age = age;
        this.typeHero = typeHero;
    }

    attack() {
        let skill;

        if (this.typeHero == 'guerreiro') {
            skill = 'espada'
        } else if (this.typeHero == 'mago') {
            skill = 'magia'
        } else if (this.typeHero == 'monge') {
            skill = 'artes marciais'
        } else if (this.typeHero == 'ninja') {
            skill = 'shuriken'
        } else {
            skill = 'habilidades desconhecidas'
        }

         console.log(`O ${this.typeHero} atacou usando ${skill}`) 
    }
}

const myHero = new hero('Gorn', 3000, 'mago')
const myHeroTwo = new hero('Nobunaag', 35, 'ninja')

myHero.attack()
myHeroTwo.attack()