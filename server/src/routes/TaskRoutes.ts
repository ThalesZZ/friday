import express from 'express'
import { prisma } from '../lib/prisma'
import { z } from 'zod'
import { getIdFromRequest } from './utils'

export default express
  .Router()

  .get('/tasks', async (req, res) => {
    const tasks = await prisma.task.findMany({ orderBy: { createdAt: 'asc' } })
    res.json(tasks)
  })

  .get('/tasks/:id', async (req, res) => {
    try {
      const id = getIdFromRequest(req)
      const task = await prisma.task.findUniqueOrThrow({ where: { id } })
      return res.json(task)
    } catch (e) {
      return res.send(e)
    }
  })

  .post('/tasks', async (req, res) => {
    try {
      const bodySchema = z.object({
        label: z.string().nonempty(),
        description: z.coerce.string(),
      })
      const { label, description } = bodySchema.parse(req.body)

      const task = await prisma.task.create({ data: { label, description } })
      return res.json(task)
    } catch (e) {
      return res.send(e)
    }
  })

  .put('/tasks/:id', async (req, res) => {
    try {
      const id = getIdFromRequest(req)
      const bodySchema = z.object({
        label: z.string().nonempty(),
        description: z.coerce.string(),
      })
      const { label, description } = bodySchema.parse(req.body)

      const task = await prisma.task.update({
        where: { id },
        data: { label, description },
      })

      return res.json(task)
    } catch (e) {
      return res.send(e)
    }
  })

  .delete('/tasks/:id', async (req, res) => {
    const id = getIdFromRequest(req)
    await prisma.task.delete({ where: { id } })
    return res.send()
  })
