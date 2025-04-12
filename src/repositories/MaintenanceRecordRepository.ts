import { prisma } from "@/data/prisma";
import BaseRepository from "./BaseRepository";
import { MaintenanceRecord } from "@prisma/client";
import VehicleRepository from "./VehicleRepository";

export default class MaintenanceRecordRepository extends BaseRepository<MaintenanceRecord> {
  private vehicleRepository;
  constructor() {
    super(prisma.maintenanceRecord);
    this.vehicleRepository = new VehicleRepository();
  }

  async getYTDTotalForAllByUser(userId: string): Promise<number> {
    const userVehicles = await this.vehicleRepository.getAll({
      where: {
        userId,
      },
    });

    if (userVehicles.length == 0) {
      return Promise.resolve(0);
    }
    const vehicleIds = userVehicles.map((veh) => veh.id);

    const records = await this.getAll({
      where: {
        vehicleId: {
          in: vehicleIds,
        },
      },
    });
    return records.reduce((acc, record) => acc + record.amount, 0);
  }
}
