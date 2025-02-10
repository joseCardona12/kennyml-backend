import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import TypeDocumentModel from "./type_document.model";
import RoleModel from "./role.model";
import LevelModel from "./level.model";
import CityModel from "./city.model";
import VerificacionCodeModel from "./verification_code.model";

@Table({
  tableName: "users",
  timestamps: false,
})
export default class UserModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.TEXT(),
    allowNull: false,
  })
  lastName!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  cellphone!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  document_number!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  address!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  about_me!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  url_image!: string;

  @ForeignKey(() => TypeDocumentModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  type_document_id!: number;

  @ForeignKey(() => RoleModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  role_id!: number;

  @ForeignKey(() => LevelModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  level_id!: number;

  @ForeignKey(() => CityModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  city_id!: number;

  @ForeignKey(() => VerificacionCodeModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  code_verification_id!: string;
}
