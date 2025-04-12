import { type PrismaClient } from "@prisma/client/extension";

const DEFAULT_ORDER_BY = {
  created_at: "desc",
};

const MAX_RECORDS_LIMIT = 100;

export default abstract class BaseRepository<T> {
  constructor(protected modelClient: PrismaClient) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAll(options: Record<string, any> = {}): Promise<Array<T>> {
    if (!options.orderBy) {
      options.orderBy = DEFAULT_ORDER_BY;
    }
    if (!options.take || options.take > MAX_RECORDS_LIMIT) {
      options.take = MAX_RECORDS_LIMIT;
    }
    return this.modelClient.findMany(options);
  }

  getById(id: string): Promise<T> {
    return this.modelClient.findUnique({
      where: {
        id,
      },
    });
  }

  create(data: T): Promise<T> {
    return this.modelClient.create({
      data,
    });
  }

  delete(id: string): Promise<T> {
    return this.modelClient.delete({
      where: {
        id,
      },
    });
  }

  update(id: string, data: T): Promise<T> {
    return this.modelClient.update({
      where: {
        id,
      },
      data,
    });
  }
}
