<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <div class="flex flex-col items-center">
        <div class="avatar bg-blue-200 w-24 h-24 rounded-full mb-4"></div>
        <button
          class="bg-blue-300 text-white font-bold py-2 px-4 rounded hover:bg-blue-400 transition duration-300"
        >
          Изменить аватарку
        </button>
        <div class="user-info mt-4 text-left">
          <div class="text-gray-800"><strong>Имя:</strong> Иван Иванов</div>
          <div class="text-gray-600">
            <strong>Email:</strong> ivan@example.com
          </div>
          <div class="text-gray-800">
            <strong>Дата регистрации:</strong> 01.01.2020
          </div>
          <!-- Дополнительная информация о пользователе -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile"
}
</script>

<style scoped>
.avatar {
  background-image: url("path-to-your-avatar-image.jpg");
  background-size: cover;
  background-position: center;
}
</style>
