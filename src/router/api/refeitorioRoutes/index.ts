import { Router } from "express"
import { UserController } from "../../../controller/AlunoController"
import { AdminController } from "../../../controller/AdminController"
import { CardapioController } from "../../../controller/CardapioController"
import { RefeicaoDiaController } from "../../../controller/RefeicaoDiaController"
import { authMiddleware } from "../../../middleware/authMiddleware"
import { authAlunoMiddleware } from "../../../middleware/authAlunoMiddleware"

const userController = new UserController()
const adminController = new AdminController()
const cardapioController = new CardapioController()
const refeicaoDiaController = new RefeicaoDiaController()

const refeitorioRouter = Router()

refeitorioRouter.get('/cardapioDoDia', refeicaoDiaController.verRefeicoesDoDia)
refeitorioRouter.get('/cardapioSemanal', refeicaoDiaController.getCardapiosDaSemana)
refeitorioRouter.get('/cardapios', cardapioController.allCardapios)

refeitorioRouter.post('/confirmarPresenca',authAlunoMiddleware, userController.confirmarPresenca)

refeitorioRouter.use(authMiddleware)
refeitorioRouter.delete('/removerRefeicaoDia', refeicaoDiaController.removerRefeicaoDia)
refeitorioRouter.post('/criarNovoCardapio', cardapioController.criarCardapio)
refeitorioRouter.post('/criarRefeicaoDoDia', refeicaoDiaController.criarRefeicaoDia)
refeitorioRouter.get('/totalPresencas', adminController.totalPresencas)



export{refeitorioRouter}
