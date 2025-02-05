import { Express } from "express";
import { sequelize } from "../config";
import { port } from "../config/loadEnv";
export class UtilApplication {
  public static consoleMessage(message: string): void {
    console.log({
      message,
    });
  }

  public static returnMessage(
    nameMethod: string,
    nameModule: string
  ): { message: string } {
    return {
      message: `Error with the method ${nameMethod} on the model ${nameModule}`,
    };
  }

  public static async initServer(app: Express): Promise<void> {
    await sequelize.authenticate();
    this.consoleMessage("Trying connect with database");
    await sequelize.sync();
    this.consoleMessage("Synchronizing database");
    app.listen(port, () =>
      this.consoleMessage(`Server running on the port ${port}`)
    );
  }

  public static verifyExistsParam(...values: (string | number)[]):boolean{
    return values.every(value=>value);
  }
}
