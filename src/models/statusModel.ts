import {
  AutoIncrement,
  Column,
  DataType,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import ProductModel from "./product.model";

@Table({
  tableName: "status",
  timestamps: false,
})
export default class StatusModel extends Model {
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
  name!: number;

  @HasOne(() => ProductModel)
  product!: ProductModel;
}
