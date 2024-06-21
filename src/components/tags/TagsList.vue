<template>
  <div
    className="w-full md:w-fit min-w-[250px] p-[20px] h-fit flex flex-col gap-[5px] rounded-[8px] shadow-lg border-[2px] border-gray-700 overflow-hidden"
  >
    <p className="font-[700] text-[19px]">Tags</p>
    <div
      @click="selectTag(tag)"
      v-for="(tag, idx) in tags"
      className="hover:bg-gray-200 cursor-pointer px-[5px] py-[5px] transition duration-200 rounded-[6px]"
      :key="idx"
    >
      # {{ tag }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectTag(tag) {
      alert(`Тут будет фильтр по тегу ${tag}`)
    }
  }
}
</script>
