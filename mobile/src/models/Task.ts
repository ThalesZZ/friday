import { z } from 'zod'

export const TaskSchema = z.object({
  id: z.string().uuid(),
  label: z.string().nonempty(),
  description: z.coerce.string(),
  createdAt: z.coerce.date(),
})

export class Task {
  constructor(
    private readonly id: string,
    private readonly label: string,
    private readonly description: string,
    private readonly createdAt: Date,
  ) {
    const params = TaskSchema.parse({ id, label, description, createdAt })

    this.id = params.id
    this.label = params.label
    this.description = params.description
    this.createdAt = params.createdAt
  }

  static fromDTO(dto: any): Task {
    const { id, label, description, createdAt } = TaskSchema.parse(dto)
    return new Task(id, label, description, createdAt)
  }
}
