import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
const users = []

//Criar usuarios
app.post('/usuarios', (req, res) => {
    users.push(req.body)
    res.status(201).json(req.body)
})


//Listar os usuarios
app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

//Indicação da porta de requisição da API
app.listen(3000)