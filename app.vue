<template>
  <div>
    <div class="player" style="border: 2px solid; padding: 16px">
      <h3>Player</h3>
      <div style="display: flex; gap: 1rem">
        <p><b>Gold:</b> {{ player.gold }}</p>
        <p><b>Level:</b> {{ player.level }}</p>
        <p><b>Exp:</b> {{ player.exp }}</p>
      </div>
      <div style="display: flex; gap: 1rem">
        <button @click="addExp()">
          Add +15 exp
        </button>
        <button @click="addGold()">
          Add +100 gold
        </button>
      </div>
    </div>

    <div class="inventory" style="border: 2px solid; padding: 16px">
      <h3>Inventory</h3>
      <div v-if="player.inventory.items.length" v-for="(item, index) in player.inventory.items" :key="index"
           class="inventory-item">
        {{ item }}
        <button @click="plant(item)">Plant</button>
      </div>
      <div v-else>
        <p>Inventory is empty</p>
      </div>
    </div>

    <div class="actions" style="border: 2px solid; padding: 16px">
      <h3>Shop</h3>

      <pre>
        {{ shop }}
      </pre>

      <button @click="buy">
        Buy Carrot Seed
      </button>
    </div>

    <div class="plot" style="border: 2px solid; padding: 16px">
      <h3>Plot</h3>

      <div v-for="(plot, index) in field" :key="index" style="display: flex; gap: 1rem">
        <button>
          {{ plot }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Player} from "~/classes/entities/Player";
import {Plant, PlantType} from "~/classes/entities/Plant";
import {Plot, PlotState} from "~/classes/entities/Plot";
import {Crop} from "~/classes/entities/Crop";

const player = reactive(new Player());

const shop = new Plant("Морковь", 30, PlantType.Vegetable);

const field = reactive([
  {
    id: 0,
    plot: new Plot(),
  },
  {
    id: 1,
    plot: new Plot(),
  },
  {
    id: 2,
    plot: new Plot(),
  },
  {
    id: 3,
    plot: new Plot(),
  },
  {
    id: 4,
    plot: new Plot(),
  },
])

const addExp = () => {
  player.addExp(15);
}

const addGold = () => {
  player.addGold(100);
}

const buy = () => {
  player.buy(shop);
}

const plant = (item) => {
  try {
    const emptyField = field.find((fieldItem) => fieldItem.plot.state === PlotState.empty).plot
    emptyField.plant(new Crop(item.name, item.price, item.type));
    player.plant(item);
  } catch (error) {
    alert("No free space left");
  }
}
</script>

