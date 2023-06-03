import express from 'express'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export default express
  .Router()

  .get('/tasks', async (req, res) => {
    const tasks = await prisma.task.findMany({ orderBy: { createdAt: 'asc' } })
    return tasks
  })

  .get('/tasks/:id', async (req, res) => {
    try {
      const paramsSchema = z.object({ id: z.string().uuid() })
      const { id } = paramsSchema.parse(req.params)

      const task = await prisma.task.findUniqueOrThrow({ where: { id } })
      return task
    } catch (e) {
      return res.send(e)
    }
  })
