import { Sequelize } from "sequelize-typescript";
import { host_db, name_db, password_db, port_db, user_db } from "./loadEnv";
import {
  CityModel,
  LevelModel,
  RoleModel,
  StatusModel,
  TaskModel,
  TypeDocumentModel,
  UserModel,
  VerificacionCodeModel,
} from "../models";
export const sequelize: Sequelize = new Sequelize({
  dialect: "mysql",
  host: host_db,
  port: parseInt(port_db),
  username: user_db,
  password: password_db,
  database: name_db,
  models: [
    TaskModel,
    StatusModel,
    LevelModel,
    RoleModel,
    TypeDocumentModel,
    UserModel,
    VerificacionCodeModel,
    CityModel,
  ],
});
