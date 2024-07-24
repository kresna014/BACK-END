import { Request, Response ,Router } from 'express'
import { expenseRouter } from './routers/expense.router'

const router = Router()

//api testing
router.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        status:'ok',
        msg:'Welcome to my API'

    })
})

router.use('/expense', expenseRouter)

export default router