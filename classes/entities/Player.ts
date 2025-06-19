export class Player {

    constructor() {
        this.gold = 100;
        this.exp = 0;
        this.level = 1;
        this.inventory = new Inventory();
    }

    addExp(exp: number) {
        this.exp += exp;
        this.levelUp();
    }

    addGold(gold: number) {
        this.gold += gold;
    }

    levelUp() {
        if (this.exp >= 150) {
            this.exp -= 150;
            this.level++;
        }
    }

    buy(item) {
        if (this.gold >= item.price) {
            this.gold -= item.price;
            this.inventory.add(item);
        } else alert('Not enough gold');
    }

    plant(item) {
        this.addExp(5);
        this.inventory.remove(item);
    }
}

class Inventory {
    constructor() {
        this.items = [];
        this.nextItemId = 1;
    }

    add(item) {
        this.items.push({id: this.nextItemId++, ...item});
    }

    remove(selectedItem) {
        this.items = this.items.filter((item) => selectedItem.id !== item.id);
    }
}