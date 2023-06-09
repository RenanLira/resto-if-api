import { DataSource } from "typeorm";
import { Aluno } from "./entity/Aluno";
import { Admin } from "./entity/Admin";
import { RefeicoesDoDia } from "./entity/RefeicoesDoDia";
import { Cardapio } from "./entity/Cardapio";
import { PresencasConfirmadas } from "./entity/PresencasConfirmadas";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "168.75.103.246",
    port: 5432,
    username: "root",
    password: "root",
    database: "restoifdb",
    synchronize: true,
    logging: true,
    entities: [Admin, Aluno, RefeicoesDoDia, Cardapio, PresencasConfirmadas],
    subscribers: [],
    migrations: [],
})
