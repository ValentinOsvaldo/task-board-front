<template>
  <button class="p-4 text-left overflow-hidden rounded-lg" :class="background">
    <div class="flex flex-row text-left items-center justify-between gap-4 mb-2">
      <div class="p-4 bg-gray-50 rounded-lg">
        {{ icon }}
      </div>

      <div class="flex flex-row items-center justify-between gap-2 flex-1 overflow-hidden">
        <h3 class="font-semibold text-2xl truncate">{{ name }}</h3>

        <div class="p-4 rounded-lg" v-if="status !== 'todo'" :class="backgroundIcon">
          <PendingIcon v-if="status === 'in-progress'" />
          <CheckIcon v-if="status === 'completed'" />
          <CloseIcon v-if="status === 'wont-do'" />
        </div>
      </div>
    </div>

    <div class="flex flex-row">
      <div class="px-8"></div>
      <p class="font-light">
        {{ description }}
      </p>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { Task, TaskStatus } from '@/types/task/task'
import { computed } from 'vue'
import CheckIcon from '../icon/CheckIcon.vue'
import CloseIcon from '../icon/CloseIcon.vue'
import PendingIcon from '../icon/PendingIcon.vue'

const { task } = defineProps<{ task: Task }>()

const { description, icon, name, status } = task

// TODO: MAKE THIS TO CONSTANT
const bgColor: Record<TaskStatus, string> = {
  completed: 'bg-task-completed',
  'in-progress': 'bg-task-in-progress',
  'wont-do': 'bg-task-wont-do',
  todo: 'bg-task-todo',
}

const bgIcon: Record<string, string> = {
  completed: 'bg-icon-completed',
  'in-progress': 'bg-icon-in-progress',
  'wont-do': 'bg-icon-wont-do',
}

const background = computed(() => bgColor[status])
const backgroundIcon = computed(() => bgIcon[status])
</script>
