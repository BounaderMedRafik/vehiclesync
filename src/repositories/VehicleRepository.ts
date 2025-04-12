import { prisma } from "@/data/prisma";
import BaseRepository from "./BaseRepository";
import { Vehicle } from "@prisma/client";

export default class UserRepository extends BaseRepository<Vehicle> {
  constructor() {
    super(prisma.vehicle);
  }
}
