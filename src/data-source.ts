import "reflect-metadata"
import { DataSource } from "typeorm"
import { Photo } from "./entity/PhotoEntity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "zayn_malik",
    synchronize: true,
    logging: false,
    entities: [Photo],
    migrations: [],
    subscribers: [],
}
)
