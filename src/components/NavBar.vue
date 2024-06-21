<template>
  <nav class="bg-blue-200 p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/main">
        <span class="text-xl font-bold text-gray-800">Vinny</span>
      </router-link>

      <div class="flex flex-col gap-y-[10px]">
        <router-link to="/login">
          <button
            class="bg-blue-300 w-full text-white py-2 px-4 rounded hover:bg-blue-400 transition duration-300"
          >
            Вход
          </button>
        </router-link>
        <router-link to="/register">
          <button
            class="w-full bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
          >
            Регистрация
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>
