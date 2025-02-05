import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import StatusModel from "./statusModel";
import { HasOne } from "sequelize";

@Table({
  tableName: "tasks",
  timestamps: false,
})
export default class TaskModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT(),
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  start_date!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  end_date!: string;

  @ForeignKey(() => StatusModel)
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  status_id!: string;
}
