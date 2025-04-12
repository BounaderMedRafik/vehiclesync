import { prisma } from "@/data/prisma";
import BaseRepository from "./BaseRepository";
import { MaintenanceType } from "@prisma/client";
import { MaintenanceTypeName } from "@/types/MaintenanceTypeName";

export default class UserRepository extends BaseRepository<MaintenanceType> {
  constructor() {
    super(prisma.maintenanceType);
  }

  getIdByName(name: MaintenanceTypeName): Promise<MaintenanceType> {
    return this.modelClient.findUnique({
      where: {
        name,
      },
    });
  }
}
