import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import StatusModel from "./statusModel";
import UnitModel from "./unit.model";
import PlaceModel from "./place.model";
import UserModel from "./user.model";
import ShoppingModel from "./shopping";

@Table({
  tableName: "products",
  timestamps: false,
})
export default class ProductModel extends Model {
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
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;

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
    type: DataType.INTEGER,
    allowNull: false,
  })
  status_id!: number;

  @ForeignKey(() => UnitModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  unit_id!: number;

  @ForeignKey(() => PlaceModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  place_id!: number;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number;

  @HasMany(() => ShoppingModel)
  shoppings!: ShoppingModel[];
}
