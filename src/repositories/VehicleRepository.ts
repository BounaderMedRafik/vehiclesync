import { prisma } from "@/data/prisma";
import BaseRepository from "./BaseRepository";
import { Vehicle } from "@prisma/client";

export default class VehicleRepository extends BaseRepository<Vehicle> {
  constructor() {
    super(prisma.vehicle);
  }
}
