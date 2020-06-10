import * as knex from "knex";
import { IModel } from "../interfaces/iModel";

export class Model<T> implements IModel {
  public DB: knex;
  public DBAdmin: knex;
  public ctx: any;
  public transaction: knex.Transaction;
  public tableName: string;
}
