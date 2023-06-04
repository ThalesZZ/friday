import { z } from 'zod'

export const TaskSchema = z.object({
  id: z.string().uuid(),
  label: z.string().nonempty(),
  description: z.coerce.string(),
  createdAt: z.coerce.date(),
})

export type TaskDTO = {
  id: string
  label: string
  description: string
  createdAt: string
}

export class Task {
  constructor(
    readonly id: string,
    readonly label: string,
    readonly description: string,
    readonly createdAt: Date,
  ) {
    const params = TaskSchema.parse({ id, label, description, createdAt })

    this.id = params.id
    this.label = params.label
    this.description = params.description
    this.createdAt = params.createdAt
  }

  static fromDTO(dto: TaskDTO): Task {
    const { id, label, description, createdAt } = TaskSchema.parse(dto)
    return new Task(id, label, description, createdAt)
  }
}
