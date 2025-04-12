import { prisma } from "@/data/prisma";
import BaseRepository from "./BaseRepository";
import { MaintenanceRecord } from "@prisma/client";

export default class UserRepository extends BaseRepository<MaintenanceRecord> {
  constructor() {
    super(prisma.maintenanceRecord);
  }
}
