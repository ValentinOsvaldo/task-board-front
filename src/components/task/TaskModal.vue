<template>
  <Transition>
    <div
      class="bg-black/20 flex items-center justify-end fixed top-0 bottom-0 w-full p-2 transition-all duration-300 ease-in-out z-50 h-full"
      v-if="isOpen"
      @click="closeModal"
    >
      <aside
        class="bg-white w-full h-full max-w-2xl rounded-lg transition-all duration-300 gap-4"
        role="dialog"
        :class="{ 'translate-x-full': !isOpen, 'translate-x-0': isOpen }"
        @click.stop
      >
        <form class="flex flex-col h-full overflow-y-auto">
          <div class="flex flex-col gap-4 h-full overflow-auto p-4">
            <header class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-medium">Task details</h3>
              <button class="p-2 border rounded-lg" type="button" @click="closeModal">
                <TimesIcon />
              </button>
            </header>
            <div class="flex-1">
              <section class="grid gap-4">
                <div class="space-y-1">
                  <label class="text-gray-600 text-sm">Task name</label>
                  <input
                    type="text"
                    class="border rounded-lg outline-none focus:ring block w-full p-2"
                  />
                </div>
                <div class="space-y-1">
                  <label class="text-gray-600 text-sm">Description</label>
                  <textarea
                    class="border rounded-lg outline-none focus:ring block w-full p-2 resize-none"
                    rows="10"
                  ></textarea>
                </div>
                <div class="space-y-1">
                  <label class="text-gray-600 text-sm">Icon</label>
                  <div class="flex items-center flex-row flex-wrap gap-4">
                    <div v-for="icon in EMOJIS" :key="icon" class="relative">
                      <input
                        type="radio"
                        :value="icon"
                        :id="icon"
                        name="icon"
                        class="hidden peer"
                      />
                      <label
                        :for="icon"
                        class="flex text-lg p-4 rounded-lg bg-gray-300 cursor-pointer transition-colors peer-checked:bg-[#F5D565]"
                      >
                        {{ icon }}
                      </label>
                    </div>
                  </div>
                </div>

                <div class="space-y-1">
                  <label class="text-gray-600 text-sm">Status</label>

                  <div class="grid lg:grid-cols-2 gap-4">
                    <label
                      for="in-progress"
                      class="relative flex flex-row items-center justify-between p-1 pr-4 rounded-xl border cursor-pointer"
                    >
                      <div class="flex flex-row gap-4 items-center w-full">
                        <input
                          name="status"
                          type="radio"
                          value="in-progress"
                          class="hidden peer"
                          id="in-progress"
                        />
                        <div class="p-4 rounded-lg bg-icon-in-progress">
                          <PendingIcon />
                        </div>
                        <span class="flex flex-1"> In progress </span>
                        <div class="bg-[#3662E3] rounded-full p-1 hidden peer-checked:block">
                          <DoneIcon class="w-4 h-4" />
                        </div>
                      </div>
                    </label>
                    <label
                      for="completed"
                      class="relative flex flex-row items-center justify-between p-1 pr-4 rounded-xl border cursor-pointer"
                    >
                      <div class="flex flex-row gap-4 items-center w-full">
                        <input
                          name="status"
                          type="radio"
                          value="completed"
                          class="hidden peer"
                          id="completed"
                        />
                        <div class="p-4 rounded-lg bg-icon-completed">
                          <CheckIcon />
                        </div>
                        <span class="flex flex-1"> In progress </span>
                        <div class="bg-[#3662E3] rounded-full p-1 hidden peer-checked:block">
                          <DoneIcon class="w-4 h-4" />
                        </div>
                      </div>
                    </label>
                    <label
                      for="wont-do"
                      class="relative flex flex-row items-center justify-between p-1 pr-4 rounded-xl border cursor-pointer"
                    >
                      <div class="flex flex-row gap-4 items-center w-full">
                        <input
                          name="status"
                          type="radio"
                          value="wont-do"
                          class="hidden peer"
                          id="wont-do"
                        />
                        <div class="p-4 rounded-lg bg-icon-wont-do">
                          <CloseIcon />
                        </div>
                        <span class="flex flex-1"> In progress </span>
                        <div class="bg-[#3662E3] rounded-full p-1 hidden peer-checked:block">
                          <DoneIcon class="w-4 h-4" />
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </section>
            </div>
            <footer class="flex items-center justify-end gap-4">
              <button
                class="flex flex-row items-center gap-2 px-6 py-2 text-white font-medium bg-gray-400 rounded-full"
              >
                Delete
                <TrashIcon />
              </button>
              <button
                class="flex flex-row items-center gap-2 px-6 py-2 text-white font-medium bg-blue-500 rounded-full"
              >
                Save
                <DoneIcon />
              </button>
            </footer>
          </div>
        </form>
      </aside>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue'
import CheckIcon from '../icon/CheckIcon.vue'
import CloseIcon from '../icon/CloseIcon.vue'
import DoneIcon from '../icon/DoneIcon.vue'
import PendingIcon from '../icon/PendingIcon.vue'
import TimesIcon from '../icon/TimesIcon.vue'
import TrashIcon from '../icon/TrashIcon.vue'
import { EMOJIS } from '../../constants/emojis'

const { modelValue } = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ (event: 'update:modelValue', value: boolean): void }>()
const isOpen = ref<boolean>(modelValue)

watch(
  () => modelValue,
  (newVal) => {
    isOpen.value = newVal
  },
)

const closeModal = () => {
  isOpen.value = false
  emit('update:modelValue', false)
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
