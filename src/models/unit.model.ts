import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import ProductModel from "./product.model";

@Table({
  tableName: "units",
  timestamps: false,
})
export default class UnitModel extends Model {
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

  @HasOne(() => ProductModel)
  product!: ProductModel;
}
