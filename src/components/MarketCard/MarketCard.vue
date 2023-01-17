<template>
  <div
    class="market-card"
    @click="onClick"
  >
    <div
      v-show="!props.isActive"
      class="market-card__content"
    />
    <div
      v-if="props.isActive"
      class="market-card market-card--active"
    />
  </div>
</template>

<script lang="ts" setup>
interface IMarketCardProps {
  isActive: boolean,
}

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['click']);
const onClick = (): void => {
  emit('click');
}

</script>

<style lang="scss" scoped>
.market-card {
  width: 130px;
  height: 160px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid black;
  position: relative;

  &--active {
    position: absolute;
    top: calc(50% - 240px);
    left: calc(50% - 195px);
    width: 390px;
    height: 480px;
    background-color: darkgray;
    z-index: 5;
  }

  &__content {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: darkgray;
  }
}

//.market-card__active-card-container {
//  position: fixed;
//  top: 0;
//  left: 0;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//}
</style>