<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <div class="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Создание поста</h2>
        <form>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="title"
            >
              Заголовок
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Введите заголовок"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="content"
            >
              Содержание
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              placeholder="Введите содержание поста"
            ></textarea>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-200 hover:bg-blue-300 text-blue-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Опубликовать
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePost"
}
</script>
