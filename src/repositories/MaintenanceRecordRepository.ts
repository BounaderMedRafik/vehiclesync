import { prisma } from "@/data/prisma";
import BaseRepository from "./BaseRepository";
import { MaintenanceRecord, Vehicle } from "@prisma/client";
import VehicleRepository from "./VehicleRepository";
import MaintenanceTypeRepository from "./MaintenanceTypeRepository";
import { MaintenanceTypeName } from "@/types/MaintenanceTypeName";

export default class MaintenanceRecordRepository extends BaseRepository<MaintenanceRecord> {
  private vehicleRepository;
  private maintenanceTypeRepository;
  constructor() {
    super(prisma.maintenanceRecord);
    this.vehicleRepository = new VehicleRepository();
    this.maintenanceTypeRepository = new MaintenanceTypeRepository();
  }

  getAllByVehicle(
    vehicleId: string,
    ytd: boolean
  ): Promise<MaintenanceRecord[]> {
    if (ytd) {
      return this.getAll({
        where: {
          vehicleId,
          date: this.getYTDDateRange(),
        },
      });
    } else {
      return this.getAll({
        where: {
          vehicleId,
        },
      });
    }
  }

  async getYTDTotalByUser(userId: string): Promise<number> {
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
        date: this.getYTDDateRange(),
      },
    });
    return records.reduce((acc, record) => acc + record.amount, 0);
  }

  async getYTDTotalByVehicle(vehicleId: string): Promise<number> {
    const records = await this.getAllByVehicle(vehicleId, true);

    if (records.length == 0) {
      return Promise.resolve(0);
    }

    return records.reduce((acc, record) => acc + record.amount, 0);
  }

  async getYtdTotalByMaintType(
    vehicles: Vehicle[],
    name: MaintenanceTypeName
  ): Promise<number> {
    let total = 0;

    const maintenanceTypeId = (
      await this.maintenanceTypeRepository.getIdByName(name)
    ).id;

    for (const vehicle of vehicles) {
      const records = await this.getAllByVehicle(vehicle.id, true);
      const filteredTotal = records
        .filter((record) => record.maintenanceTypeId === maintenanceTypeId)
        .reduce((acc, record) => acc + record.amount, 0);
      total += filteredTotal;
    }

    return total;
  }
}
