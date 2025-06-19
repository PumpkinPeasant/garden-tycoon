export class Player {

    constructor() {
        this.gold = 0;
        this.exp = 0;
        this.level = 1;
        this.inventory = [];
    }

    addExp(exp: number) {
        this.exp += exp;
        this.levelUp();
    }

    levelUp() {
        if (this.exp >= 150) {
            this.exp -= 150;
            this.level++;
        }
    }
}