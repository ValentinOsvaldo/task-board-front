<script lang="ts" setup>
import { ref } from 'vue'

const showPassword = ref<boolean>(false)
const focus = ref<boolean>(false)

const togglePassword = () => (showPassword.value = !showPassword.value)
const handleFocus = (value: boolean) => (focus.value = value)
</script>

<template>
  <div class="flex h-screen flex-row items-center">
    <section class="bg-gray-700 flex-1 w-full h-full hidden lg:block"></section>
    <section class="flex-1 p-4 w-full">
      <article class="max-w-md mx-auto">
        <div class="text-center mb-4">
          <h1 class="font-medium text-3xl">Login into your account</h1>
          <p class="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae quidem rerum
            expedita hic reiciendis, ipsa dolorum!
          </p>
        </div>
        <form novalidate>
          <div class="grid gap-4">
            <div class="space-y-1">
              <label for="email" class="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                class="border rounded-lg outline-none focus:ring block w-full p-2"
              />
            </div>
            <div class="space-y-1">
              <label for="password" class="text-sm font-medium">Password</label>
              <div
                class="border rounded-lg w-full flex flex-row overflow-hidden items-center justify-center"
                :class="{ ring: focus }"
              >
                <input
                  :type="showPassword ? 'text' : 'password'"
                  name="password"
                  id="password"
                  class="p-2 w-full outline-none"
                  @focus="handleFocus(true)"
                  @blur="handleFocus(false)"
                />
                <button
                  type="button"
                  class="outline-none transition rounded-full hover:bg-black/10 p-1.5"
                  @click="togglePassword"
                >
                  <span v-if="!showPassword"> 🔓 </span>
                  <span v-else> 🔒 </span>
                </button>
              </div>
            </div>

            <button class="px-4 py-2 bg-blue-500 text-white rounded-md">Login</button>
          </div>
        </form>
      </article>
    </section>
  </div>
</template>
