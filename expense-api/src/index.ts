import Express , { Application }  from "express";
import router from "./router";

const PORT: number = 8000
const app:Application = Express()


app.use(Express.json())

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`[server-api]: http://localhost:${PORT}/api`)

})