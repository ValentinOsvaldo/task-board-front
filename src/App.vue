<script lang="ts" setup>
import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import Logo from './assets/Logo.svg'
import TaskItem from './components/task/TaskItem.vue'
import AddIcon from './components/icon/AddIcon.vue'
import TaskModal from './components/task/TaskModal.vue'
import type { Task } from './types/task/task'
import { EMOJIS } from './constants/emojis'

const open = ref<boolean>(false)

const toggleModal = () => (open.value = true)

const generateFakeTask = () => {
  return {
    description: faker.lorem.sentence(),
    status: faker.helpers.arrayElement(['completed', 'in-progress', 'wont-do', 'todo']),
    icon: faker.helpers.arrayElement(EMOJIS),
    name: faker.hacker.phrase(),
  }
}

const generateFakeTasks = (count = 10) => {
  return Array.from({ length: count }, generateFakeTask)
}

const tasks: Task[] = generateFakeTasks(4)
</script>

<template>
  <main class="max-w-screen-md mx-auto p-4 pt-8" :class="{ 'overflow-hidden': open }">
    <header class="mb-4">
      <div class="flex flex-row items-center space-x-2">
        <img :src="Logo" alt="Logo" />
        <h1 class="font-medium text-4xl">My Task Board</h1>
      </div>
      <span class="ml-12">Task to keep organized</span>
    </header>

    <section class="grid gap-4">
      <TaskItem v-for="(task, index) in tasks" :task="task" :key="task.name" :tabindex="index" />

      <button
        class="flex flex-row bg-[#F5E8D5] p-4 rounded-lg items-center gap-4"
        @click="toggleModal"
      >
        <div class="bg-[#E9A23B] rounded-lg p-4">
          <AddIcon />
        </div>
        <p class="flex-1 text-left font-bold text-xl">Add new task</p>
      </button>
    </section>
  </main>

  <TaskModal v-model="open" />
</template>
