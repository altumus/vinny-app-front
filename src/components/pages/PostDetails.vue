<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <div
      class="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div class="p-6">
        <div class="flex justify-between items-center">
          <span class="text-sm text-blue-300">12 июня 2024</span>
          <a
            href="#"
            class="px-2 py-1 bg-blue-200 text-blue-800 rounded hover:bg-blue-300"
            >Категория</a
          >
        </div>
        <div class="mt-4">
          <h1 class="text-2xl text-gray-800 font-bold hover:underline">
            Заголовок поста
          </h1>
          <p class="mt-2 text-gray-600">Текст поста...</p>
        </div>
        <div class="mt-4">
          <div class="flex items-center">
            <div class="flex items-center">
              <img class="object-cover w-10 h-10 rounded-full" alt="Аватар" />
              <a href="#" class="mx-2 text-lg text-gray-700 hover:underline"
                >Имя автора</a
              >
            </div>
            <span class="mx-2 text-gray-600 text-sm">Читать 3 мин</span>
          </div>
        </div>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="text-gray-800 text-lg font-bold">Комментарии</span>
        <div class="mt-4">
          <div class="bg-gray-300 p-4 rounded-lg text-gray-800">
            <p class="font-semibold">Имя пользователя</p>
            <p class="text-sm">Комментарий...</p>
          </div>
          <!-- Дополнительные комментарии -->
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
