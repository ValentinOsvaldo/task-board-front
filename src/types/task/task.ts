export type TaskStatus = 'todo' | 'in-progress' | 'completed' | 'wont-do'

export interface Task {
  name: string
  description: string
  status: TaskStatus
  icon: string
}
