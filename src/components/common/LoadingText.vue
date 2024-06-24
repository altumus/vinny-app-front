<template>
  <div
    class="flex bg-white rounded-[6px] gap-y-[10px] items-center justify-center gap-x-[5px] flex-col overflow-hidden w-full h-[300px] border-[1px] border-gray-500 border-solid"
  >
    <div
      v-for="i in 15"
      :key="i"
      class="bg-gray-600 h-[10px] animate-pulse rounded-[6px] w-[90%] flex"
    />
  </div>
</template>
