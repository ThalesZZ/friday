import { z } from 'zod'
import { Request } from 'express'

export const getIdFromRequest = (req: Request): string =>
  z.object({ id: z.string().uuid() }).parse(req.params).id
