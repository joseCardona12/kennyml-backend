import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table({
  tableName: "cities",
  timestamps: false,
})
export default class CityModel extends Model {
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
}
