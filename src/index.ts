import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import container from './container'

const app: Express = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello World!' })
})

app.get('/hello', async (req: Request, res: Response) => {
    return container.resolve('appController').hello(req, res)
})

app.listen(8080, async () => {
    console.log('Server is running at http://localhost:8080')
})