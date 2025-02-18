import { UserModel } from "../models";

export default class UserRepository {
  public async editByEmail(
    user: Partial<UserModel>,
    id: number
  ): Promise<UserModel[] | null> {
    try {
      const [updatedCount, updatedUsers] = await UserModel.update(user, {
        where: { id },
        returning: true,
      });

      if (updatedCount > 0) {
        console.log("Updated user", updatedUsers[0]);
        return updatedUsers;
      }
      return null;
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}
