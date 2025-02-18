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
  tableName: "shoppings",
  timestamps: true,
})
export default class ShoppingModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  url_image!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  price!: string;

  @ForeignKey(() => ProductModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id!: number;
}
