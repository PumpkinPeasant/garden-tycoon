<template>
  <div>
    <button @click="addExp()">
      Add +15 exp
    </button>

    <pre>
      {{ player}}
    </pre>
  </div>
</template>

<script setup lang="ts">
import {Player} from "~/classes/entities/Player";

const player = reactive(new Player());

const addExp = () => {
  player.addExp(15);
}
</script>

