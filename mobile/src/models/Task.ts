import { z } from 'zod'

export const TaskSchema = z.object({
  id: z.string().uuid(),
  name: z.string().nonempty(),
  description: z.coerce.string(),
  createdAt: z.coerce.date(),
})

export class Task {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly description: string,
    private readonly createdAt: Date,
  ) {
    const params = TaskSchema.parse({ id, name, description, createdAt })

    this.id = params.id
    this.name = params.name
    this.description = params.description
    this.createdAt = params.createdAt
  }

  static fromDTO(dto: any): Task {
    const { id, name, description, createdAt } = TaskSchema.parse(dto)
    return new Task(id, name, description, createdAt)
  }
}
