<template>
  <div
    class="w-full md:w-fit min-w-[250px] p-[20px] h-fit flex flex-col gap-[5px] rounded-[8px] shadow-lg border-[2px] border-gray-700 overflow-hidden"
  >
    <p class="font-[700] text-[19px]">Теги</p>
    <div
      @click="selectTag(tag)"
      v-for="(tag, idx) in tags"
      class="hover:bg-gray-200 cursor-pointer px-[5px] py-[5px] transition duration-200 rounded-[6px]"
      :key="idx"
      :class="{ 'bg-green-200': $route.query.tag === tag }"
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
      let val = tag
      if (this.$route.query.tag === tag) {
        val = undefined
      }
      this.$router.push({
        name: this.$route.name,
        query: {
          tag: val
        }
      })
    }
  }
}
</script>
