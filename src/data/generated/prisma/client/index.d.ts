
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model MaintenanceRecord
 * 
 */
export type MaintenanceRecord = $Result.DefaultSelection<Prisma.$MaintenanceRecordPayload>
/**
 * Model MaintenanceType
 * 
 */
export type MaintenanceType = $Result.DefaultSelection<Prisma.$MaintenanceTypePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceRecord`: Exposes CRUD operations for the **MaintenanceRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceRecords
    * const maintenanceRecords = await prisma.maintenanceRecord.findMany()
    * ```
    */
  get maintenanceRecord(): Prisma.MaintenanceRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceType`: Exposes CRUD operations for the **MaintenanceType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceTypes
    * const maintenanceTypes = await prisma.maintenanceType.findMany()
    * ```
    */
  get maintenanceType(): Prisma.MaintenanceTypeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vehicle: 'Vehicle',
    MaintenanceRecord: 'MaintenanceRecord',
    MaintenanceType: 'MaintenanceType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vehicle" | "maintenanceRecord" | "maintenanceType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceRecord: {
        payload: Prisma.$MaintenanceRecordPayload<ExtArgs>
        fields: Prisma.MaintenanceRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          findMany: {
            args: Prisma.MaintenanceRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>[]
          }
          create: {
            args: Prisma.MaintenanceRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          createMany: {
            args: Prisma.MaintenanceRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          update: {
            args: Prisma.MaintenanceRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceRecord>
          }
          groupBy: {
            args: Prisma.MaintenanceRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceRecordCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRecordCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceType: {
        payload: Prisma.$MaintenanceTypePayload<ExtArgs>
        fields: Prisma.MaintenanceTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTypePayload>
          }
          findFirst: {
            args: Prisma.MaintenanceTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTypePayload>
          }
          findMany: {
            args: Prisma.MaintenanceTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTypePayload>[]
          }
          create: {
            args: Prisma.MaintenanceTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTypePayload>
          }
          createMany: {
            args: Prisma.MaintenanceTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTypePayload>[]
          }
          delete: {
            args: Prisma.MaintenanceTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTypePayload>
          }
          update: {
            args: Prisma.MaintenanceTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTypePayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTypePayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTypePayload>
          }
          aggregate: {
            args: Prisma.MaintenanceTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceType>
          }
          groupBy: {
            args: Prisma.MaintenanceTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceTypeCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceTypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vehicle?: VehicleOmit
    maintenanceRecord?: MaintenanceRecordOmit
    maintenanceType?: MaintenanceTypeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    vehicles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    maintenanceRecords: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenanceRecords?: boolean | VehicleCountOutputTypeCountMaintenanceRecordsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRecordWhereInput
  }


  /**
   * Count Type MaintenanceTypeCountOutputType
   */

  export type MaintenanceTypeCountOutputType = {
    maintenanceRecords: number
  }

  export type MaintenanceTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenanceRecords?: boolean | MaintenanceTypeCountOutputTypeCountMaintenanceRecordsArgs
  }

  // Custom InputTypes
  /**
   * MaintenanceTypeCountOutputType without action
   */
  export type MaintenanceTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTypeCountOutputType
     */
    select?: MaintenanceTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaintenanceTypeCountOutputType without action
   */
  export type MaintenanceTypeCountOutputTypeCountMaintenanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.vehicles
   */
  export type User$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    year: number | null
    mileage: number | null
  }

  export type VehicleSumAggregateOutputType = {
    year: number | null
    mileage: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    year: number | null
    make: string | null
    model: string | null
    vin: string | null
    mileage: number | null
    purchaseDate: Date | null
    color: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    year: number | null
    make: string | null
    model: string | null
    vin: string | null
    mileage: number | null
    purchaseDate: Date | null
    color: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    userId: number
    year: number
    make: number
    model: number
    vin: number
    mileage: number
    purchaseDate: number
    color: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    year?: true
    mileage?: true
  }

  export type VehicleSumAggregateInputType = {
    year?: true
    mileage?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    make?: true
    model?: true
    vin?: true
    mileage?: true
    purchaseDate?: true
    color?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    make?: true
    model?: true
    vin?: true
    mileage?: true
    purchaseDate?: true
    color?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    make?: true
    model?: true
    vin?: true
    mileage?: true
    purchaseDate?: true
    color?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    userId: string
    year: number
    make: string
    model: string
    vin: string
    mileage: number
    purchaseDate: Date
    color: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    make?: boolean
    model?: boolean
    vin?: boolean
    mileage?: boolean
    purchaseDate?: boolean
    color?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    maintenanceRecords?: boolean | Vehicle$maintenanceRecordsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    make?: boolean
    model?: boolean
    vin?: boolean
    mileage?: boolean
    purchaseDate?: boolean
    color?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    make?: boolean
    model?: boolean
    vin?: boolean
    mileage?: boolean
    purchaseDate?: boolean
    color?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    userId?: boolean
    year?: boolean
    make?: boolean
    model?: boolean
    vin?: boolean
    mileage?: boolean
    purchaseDate?: boolean
    color?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "year" | "make" | "model" | "vin" | "mileage" | "purchaseDate" | "color" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    maintenanceRecords?: boolean | Vehicle$maintenanceRecordsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      maintenanceRecords: Prisma.$MaintenanceRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      year: number
      make: string
      model: string
      vin: string
      mileage: number
      purchaseDate: Date
      color: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    maintenanceRecords<T extends Vehicle$maintenanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$maintenanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly userId: FieldRef<"Vehicle", 'String'>
    readonly year: FieldRef<"Vehicle", 'Int'>
    readonly make: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly vin: FieldRef<"Vehicle", 'String'>
    readonly mileage: FieldRef<"Vehicle", 'Int'>
    readonly purchaseDate: FieldRef<"Vehicle", 'DateTime'>
    readonly color: FieldRef<"Vehicle", 'String'>
    readonly active: FieldRef<"Vehicle", 'Boolean'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.maintenanceRecords
   */
  export type Vehicle$maintenanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    where?: MaintenanceRecordWhereInput
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    cursor?: MaintenanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceRecord
   */

  export type AggregateMaintenanceRecord = {
    _count: MaintenanceRecordCountAggregateOutputType | null
    _avg: MaintenanceRecordAvgAggregateOutputType | null
    _sum: MaintenanceRecordSumAggregateOutputType | null
    _min: MaintenanceRecordMinAggregateOutputType | null
    _max: MaintenanceRecordMaxAggregateOutputType | null
  }

  export type MaintenanceRecordAvgAggregateOutputType = {
    mileage: number | null
    amount: number | null
  }

  export type MaintenanceRecordSumAggregateOutputType = {
    mileage: number | null
    amount: number | null
  }

  export type MaintenanceRecordMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    maintenanceTypeId: string | null
    date: Date | null
    mileage: number | null
    description: string | null
    location: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceRecordMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    maintenanceTypeId: string | null
    date: Date | null
    mileage: number | null
    description: string | null
    location: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceRecordCountAggregateOutputType = {
    id: number
    vehicleId: number
    maintenanceTypeId: number
    date: number
    mileage: number
    description: number
    location: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaintenanceRecordAvgAggregateInputType = {
    mileage?: true
    amount?: true
  }

  export type MaintenanceRecordSumAggregateInputType = {
    mileage?: true
    amount?: true
  }

  export type MaintenanceRecordMinAggregateInputType = {
    id?: true
    vehicleId?: true
    maintenanceTypeId?: true
    date?: true
    mileage?: true
    description?: true
    location?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceRecordMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    maintenanceTypeId?: true
    date?: true
    mileage?: true
    description?: true
    location?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceRecordCountAggregateInputType = {
    id?: true
    vehicleId?: true
    maintenanceTypeId?: true
    date?: true
    mileage?: true
    description?: true
    location?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaintenanceRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRecord to aggregate.
     */
    where?: MaintenanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRecords to fetch.
     */
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceRecords
    **/
    _count?: true | MaintenanceRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceRecordMaxAggregateInputType
  }

  export type GetMaintenanceRecordAggregateType<T extends MaintenanceRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceRecord[P]>
      : GetScalarType<T[P], AggregateMaintenanceRecord[P]>
  }




  export type MaintenanceRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRecordWhereInput
    orderBy?: MaintenanceRecordOrderByWithAggregationInput | MaintenanceRecordOrderByWithAggregationInput[]
    by: MaintenanceRecordScalarFieldEnum[] | MaintenanceRecordScalarFieldEnum
    having?: MaintenanceRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceRecordCountAggregateInputType | true
    _avg?: MaintenanceRecordAvgAggregateInputType
    _sum?: MaintenanceRecordSumAggregateInputType
    _min?: MaintenanceRecordMinAggregateInputType
    _max?: MaintenanceRecordMaxAggregateInputType
  }

  export type MaintenanceRecordGroupByOutputType = {
    id: string
    vehicleId: string
    maintenanceTypeId: string
    date: Date
    mileage: number
    description: string
    location: string
    amount: number
    createdAt: Date
    updatedAt: Date
    _count: MaintenanceRecordCountAggregateOutputType | null
    _avg: MaintenanceRecordAvgAggregateOutputType | null
    _sum: MaintenanceRecordSumAggregateOutputType | null
    _min: MaintenanceRecordMinAggregateOutputType | null
    _max: MaintenanceRecordMaxAggregateOutputType | null
  }

  type GetMaintenanceRecordGroupByPayload<T extends MaintenanceRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceRecordGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    maintenanceTypeId?: boolean
    date?: boolean
    mileage?: boolean
    description?: boolean
    location?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    maintenanceType?: boolean | MaintenanceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRecord"]>

  export type MaintenanceRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    maintenanceTypeId?: boolean
    date?: boolean
    mileage?: boolean
    description?: boolean
    location?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    maintenanceType?: boolean | MaintenanceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRecord"]>

  export type MaintenanceRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    maintenanceTypeId?: boolean
    date?: boolean
    mileage?: boolean
    description?: boolean
    location?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    maintenanceType?: boolean | MaintenanceTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRecord"]>

  export type MaintenanceRecordSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    maintenanceTypeId?: boolean
    date?: boolean
    mileage?: boolean
    description?: boolean
    location?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaintenanceRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "maintenanceTypeId" | "date" | "mileage" | "description" | "location" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["maintenanceRecord"]>
  export type MaintenanceRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    maintenanceType?: boolean | MaintenanceTypeDefaultArgs<ExtArgs>
  }
  export type MaintenanceRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    maintenanceType?: boolean | MaintenanceTypeDefaultArgs<ExtArgs>
  }
  export type MaintenanceRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    maintenanceType?: boolean | MaintenanceTypeDefaultArgs<ExtArgs>
  }

  export type $MaintenanceRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceRecord"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      maintenanceType: Prisma.$MaintenanceTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      maintenanceTypeId: string
      date: Date
      mileage: number
      description: string
      location: string
      amount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["maintenanceRecord"]>
    composites: {}
  }

  type MaintenanceRecordGetPayload<S extends boolean | null | undefined | MaintenanceRecordDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceRecordPayload, S>

  type MaintenanceRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceRecordCountAggregateInputType | true
    }

  export interface MaintenanceRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceRecord'], meta: { name: 'MaintenanceRecord' } }
    /**
     * Find zero or one MaintenanceRecord that matches the filter.
     * @param {MaintenanceRecordFindUniqueArgs} args - Arguments to find a MaintenanceRecord
     * @example
     * // Get one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceRecordFindUniqueArgs>(args: SelectSubset<T, MaintenanceRecordFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceRecordFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceRecord
     * @example
     * // Get one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordFindFirstArgs} args - Arguments to find a MaintenanceRecord
     * @example
     * // Get one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceRecordFindFirstArgs>(args?: SelectSubset<T, MaintenanceRecordFindFirstArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordFindFirstOrThrowArgs} args - Arguments to find a MaintenanceRecord
     * @example
     * // Get one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceRecords
     * const maintenanceRecords = await prisma.maintenanceRecord.findMany()
     * 
     * // Get first 10 MaintenanceRecords
     * const maintenanceRecords = await prisma.maintenanceRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceRecordWithIdOnly = await prisma.maintenanceRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceRecordFindManyArgs>(args?: SelectSubset<T, MaintenanceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceRecord.
     * @param {MaintenanceRecordCreateArgs} args - Arguments to create a MaintenanceRecord.
     * @example
     * // Create one MaintenanceRecord
     * const MaintenanceRecord = await prisma.maintenanceRecord.create({
     *   data: {
     *     // ... data to create a MaintenanceRecord
     *   }
     * })
     * 
     */
    create<T extends MaintenanceRecordCreateArgs>(args: SelectSubset<T, MaintenanceRecordCreateArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceRecords.
     * @param {MaintenanceRecordCreateManyArgs} args - Arguments to create many MaintenanceRecords.
     * @example
     * // Create many MaintenanceRecords
     * const maintenanceRecord = await prisma.maintenanceRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceRecordCreateManyArgs>(args?: SelectSubset<T, MaintenanceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceRecords and returns the data saved in the database.
     * @param {MaintenanceRecordCreateManyAndReturnArgs} args - Arguments to create many MaintenanceRecords.
     * @example
     * // Create many MaintenanceRecords
     * const maintenanceRecord = await prisma.maintenanceRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceRecords and only return the `id`
     * const maintenanceRecordWithIdOnly = await prisma.maintenanceRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenanceRecord.
     * @param {MaintenanceRecordDeleteArgs} args - Arguments to delete one MaintenanceRecord.
     * @example
     * // Delete one MaintenanceRecord
     * const MaintenanceRecord = await prisma.maintenanceRecord.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceRecord
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceRecordDeleteArgs>(args: SelectSubset<T, MaintenanceRecordDeleteArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceRecord.
     * @param {MaintenanceRecordUpdateArgs} args - Arguments to update one MaintenanceRecord.
     * @example
     * // Update one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceRecordUpdateArgs>(args: SelectSubset<T, MaintenanceRecordUpdateArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceRecords.
     * @param {MaintenanceRecordDeleteManyArgs} args - Arguments to filter MaintenanceRecords to delete.
     * @example
     * // Delete a few MaintenanceRecords
     * const { count } = await prisma.maintenanceRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceRecordDeleteManyArgs>(args?: SelectSubset<T, MaintenanceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceRecords
     * const maintenanceRecord = await prisma.maintenanceRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceRecordUpdateManyArgs>(args: SelectSubset<T, MaintenanceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceRecords and returns the data updated in the database.
     * @param {MaintenanceRecordUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceRecords.
     * @example
     * // Update many MaintenanceRecords
     * const maintenanceRecord = await prisma.maintenanceRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenanceRecords and only return the `id`
     * const maintenanceRecordWithIdOnly = await prisma.maintenanceRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenanceRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenanceRecord.
     * @param {MaintenanceRecordUpsertArgs} args - Arguments to update or create a MaintenanceRecord.
     * @example
     * // Update or create a MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.upsert({
     *   create: {
     *     // ... data to create a MaintenanceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceRecord we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceRecordUpsertArgs>(args: SelectSubset<T, MaintenanceRecordUpsertArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordCountArgs} args - Arguments to filter MaintenanceRecords to count.
     * @example
     * // Count the number of MaintenanceRecords
     * const count = await prisma.maintenanceRecord.count({
     *   where: {
     *     // ... the filter for the MaintenanceRecords we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceRecordCountArgs>(
      args?: Subset<T, MaintenanceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenanceRecordAggregateArgs>(args: Subset<T, MaintenanceRecordAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceRecordAggregateType<T>>

    /**
     * Group by MaintenanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenanceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceRecordGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenanceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceRecord model
   */
  readonly fields: MaintenanceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    maintenanceType<T extends MaintenanceTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceTypeDefaultArgs<ExtArgs>>): Prisma__MaintenanceTypeClient<$Result.GetResult<Prisma.$MaintenanceTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaintenanceRecord model
   */
  interface MaintenanceRecordFieldRefs {
    readonly id: FieldRef<"MaintenanceRecord", 'String'>
    readonly vehicleId: FieldRef<"MaintenanceRecord", 'String'>
    readonly maintenanceTypeId: FieldRef<"MaintenanceRecord", 'String'>
    readonly date: FieldRef<"MaintenanceRecord", 'DateTime'>
    readonly mileage: FieldRef<"MaintenanceRecord", 'Int'>
    readonly description: FieldRef<"MaintenanceRecord", 'String'>
    readonly location: FieldRef<"MaintenanceRecord", 'String'>
    readonly amount: FieldRef<"MaintenanceRecord", 'Float'>
    readonly createdAt: FieldRef<"MaintenanceRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"MaintenanceRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceRecord findUnique
   */
  export type MaintenanceRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecord to fetch.
     */
    where: MaintenanceRecordWhereUniqueInput
  }

  /**
   * MaintenanceRecord findUniqueOrThrow
   */
  export type MaintenanceRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecord to fetch.
     */
    where: MaintenanceRecordWhereUniqueInput
  }

  /**
   * MaintenanceRecord findFirst
   */
  export type MaintenanceRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecord to fetch.
     */
    where?: MaintenanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRecords to fetch.
     */
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRecords.
     */
    cursor?: MaintenanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRecords.
     */
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * MaintenanceRecord findFirstOrThrow
   */
  export type MaintenanceRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecord to fetch.
     */
    where?: MaintenanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRecords to fetch.
     */
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRecords.
     */
    cursor?: MaintenanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRecords.
     */
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * MaintenanceRecord findMany
   */
  export type MaintenanceRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecords to fetch.
     */
    where?: MaintenanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRecords to fetch.
     */
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceRecords.
     */
    cursor?: MaintenanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRecords.
     */
    skip?: number
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * MaintenanceRecord create
   */
  export type MaintenanceRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceRecord.
     */
    data: XOR<MaintenanceRecordCreateInput, MaintenanceRecordUncheckedCreateInput>
  }

  /**
   * MaintenanceRecord createMany
   */
  export type MaintenanceRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceRecords.
     */
    data: MaintenanceRecordCreateManyInput | MaintenanceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceRecord createManyAndReturn
   */
  export type MaintenanceRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceRecords.
     */
    data: MaintenanceRecordCreateManyInput | MaintenanceRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceRecord update
   */
  export type MaintenanceRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceRecord.
     */
    data: XOR<MaintenanceRecordUpdateInput, MaintenanceRecordUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceRecord to update.
     */
    where: MaintenanceRecordWhereUniqueInput
  }

  /**
   * MaintenanceRecord updateMany
   */
  export type MaintenanceRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceRecords.
     */
    data: XOR<MaintenanceRecordUpdateManyMutationInput, MaintenanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceRecords to update
     */
    where?: MaintenanceRecordWhereInput
    /**
     * Limit how many MaintenanceRecords to update.
     */
    limit?: number
  }

  /**
   * MaintenanceRecord updateManyAndReturn
   */
  export type MaintenanceRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceRecords.
     */
    data: XOR<MaintenanceRecordUpdateManyMutationInput, MaintenanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceRecords to update
     */
    where?: MaintenanceRecordWhereInput
    /**
     * Limit how many MaintenanceRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceRecord upsert
   */
  export type MaintenanceRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceRecord to update in case it exists.
     */
    where: MaintenanceRecordWhereUniqueInput
    /**
     * In case the MaintenanceRecord found by the `where` argument doesn't exist, create a new MaintenanceRecord with this data.
     */
    create: XOR<MaintenanceRecordCreateInput, MaintenanceRecordUncheckedCreateInput>
    /**
     * In case the MaintenanceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceRecordUpdateInput, MaintenanceRecordUncheckedUpdateInput>
  }

  /**
   * MaintenanceRecord delete
   */
  export type MaintenanceRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceRecord to delete.
     */
    where: MaintenanceRecordWhereUniqueInput
  }

  /**
   * MaintenanceRecord deleteMany
   */
  export type MaintenanceRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRecords to delete
     */
    where?: MaintenanceRecordWhereInput
    /**
     * Limit how many MaintenanceRecords to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceRecord without action
   */
  export type MaintenanceRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceType
   */

  export type AggregateMaintenanceType = {
    _count: MaintenanceTypeCountAggregateOutputType | null
    _min: MaintenanceTypeMinAggregateOutputType | null
    _max: MaintenanceTypeMaxAggregateOutputType | null
  }

  export type MaintenanceTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaintenanceTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaintenanceTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceType to aggregate.
     */
    where?: MaintenanceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTypes to fetch.
     */
    orderBy?: MaintenanceTypeOrderByWithRelationInput | MaintenanceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceTypes
    **/
    _count?: true | MaintenanceTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceTypeMaxAggregateInputType
  }

  export type GetMaintenanceTypeAggregateType<T extends MaintenanceTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceType[P]>
      : GetScalarType<T[P], AggregateMaintenanceType[P]>
  }




  export type MaintenanceTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceTypeWhereInput
    orderBy?: MaintenanceTypeOrderByWithAggregationInput | MaintenanceTypeOrderByWithAggregationInput[]
    by: MaintenanceTypeScalarFieldEnum[] | MaintenanceTypeScalarFieldEnum
    having?: MaintenanceTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceTypeCountAggregateInputType | true
    _min?: MaintenanceTypeMinAggregateInputType
    _max?: MaintenanceTypeMaxAggregateInputType
  }

  export type MaintenanceTypeGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: MaintenanceTypeCountAggregateOutputType | null
    _min: MaintenanceTypeMinAggregateOutputType | null
    _max: MaintenanceTypeMaxAggregateOutputType | null
  }

  type GetMaintenanceTypeGroupByPayload<T extends MaintenanceTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceTypeGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceTypeGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maintenanceRecords?: boolean | MaintenanceType$maintenanceRecordsArgs<ExtArgs>
    _count?: boolean | MaintenanceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceType"]>

  export type MaintenanceTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["maintenanceType"]>

  export type MaintenanceTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["maintenanceType"]>

  export type MaintenanceTypeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaintenanceTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["maintenanceType"]>
  export type MaintenanceTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenanceRecords?: boolean | MaintenanceType$maintenanceRecordsArgs<ExtArgs>
    _count?: boolean | MaintenanceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaintenanceTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaintenanceTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaintenanceTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceType"
    objects: {
      maintenanceRecords: Prisma.$MaintenanceRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["maintenanceType"]>
    composites: {}
  }

  type MaintenanceTypeGetPayload<S extends boolean | null | undefined | MaintenanceTypeDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceTypePayload, S>

  type MaintenanceTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceTypeCountAggregateInputType | true
    }

  export interface MaintenanceTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceType'], meta: { name: 'MaintenanceType' } }
    /**
     * Find zero or one MaintenanceType that matches the filter.
     * @param {MaintenanceTypeFindUniqueArgs} args - Arguments to find a MaintenanceType
     * @example
     * // Get one MaintenanceType
     * const maintenanceType = await prisma.maintenanceType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceTypeFindUniqueArgs>(args: SelectSubset<T, MaintenanceTypeFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceTypeClient<$Result.GetResult<Prisma.$MaintenanceTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceTypeFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceType
     * @example
     * // Get one MaintenanceType
     * const maintenanceType = await prisma.maintenanceType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceTypeClient<$Result.GetResult<Prisma.$MaintenanceTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTypeFindFirstArgs} args - Arguments to find a MaintenanceType
     * @example
     * // Get one MaintenanceType
     * const maintenanceType = await prisma.maintenanceType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceTypeFindFirstArgs>(args?: SelectSubset<T, MaintenanceTypeFindFirstArgs<ExtArgs>>): Prisma__MaintenanceTypeClient<$Result.GetResult<Prisma.$MaintenanceTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTypeFindFirstOrThrowArgs} args - Arguments to find a MaintenanceType
     * @example
     * // Get one MaintenanceType
     * const maintenanceType = await prisma.maintenanceType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceTypeClient<$Result.GetResult<Prisma.$MaintenanceTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceTypes
     * const maintenanceTypes = await prisma.maintenanceType.findMany()
     * 
     * // Get first 10 MaintenanceTypes
     * const maintenanceTypes = await prisma.maintenanceType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceTypeWithIdOnly = await prisma.maintenanceType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceTypeFindManyArgs>(args?: SelectSubset<T, MaintenanceTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceType.
     * @param {MaintenanceTypeCreateArgs} args - Arguments to create a MaintenanceType.
     * @example
     * // Create one MaintenanceType
     * const MaintenanceType = await prisma.maintenanceType.create({
     *   data: {
     *     // ... data to create a MaintenanceType
     *   }
     * })
     * 
     */
    create<T extends MaintenanceTypeCreateArgs>(args: SelectSubset<T, MaintenanceTypeCreateArgs<ExtArgs>>): Prisma__MaintenanceTypeClient<$Result.GetResult<Prisma.$MaintenanceTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceTypes.
     * @param {MaintenanceTypeCreateManyArgs} args - Arguments to create many MaintenanceTypes.
     * @example
     * // Create many MaintenanceTypes
     * const maintenanceType = await prisma.maintenanceType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceTypeCreateManyArgs>(args?: SelectSubset<T, MaintenanceTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceTypes and returns the data saved in the database.
     * @param {MaintenanceTypeCreateManyAndReturnArgs} args - Arguments to create many MaintenanceTypes.
     * @example
     * // Create many MaintenanceTypes
     * const maintenanceType = await prisma.maintenanceType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceTypes and only return the `id`
     * const maintenanceTypeWithIdOnly = await prisma.maintenanceType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenanceType.
     * @param {MaintenanceTypeDeleteArgs} args - Arguments to delete one MaintenanceType.
     * @example
     * // Delete one MaintenanceType
     * const MaintenanceType = await prisma.maintenanceType.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceType
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceTypeDeleteArgs>(args: SelectSubset<T, MaintenanceTypeDeleteArgs<ExtArgs>>): Prisma__MaintenanceTypeClient<$Result.GetResult<Prisma.$MaintenanceTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceType.
     * @param {MaintenanceTypeUpdateArgs} args - Arguments to update one MaintenanceType.
     * @example
     * // Update one MaintenanceType
     * const maintenanceType = await prisma.maintenanceType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceTypeUpdateArgs>(args: SelectSubset<T, MaintenanceTypeUpdateArgs<ExtArgs>>): Prisma__MaintenanceTypeClient<$Result.GetResult<Prisma.$MaintenanceTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceTypes.
     * @param {MaintenanceTypeDeleteManyArgs} args - Arguments to filter MaintenanceTypes to delete.
     * @example
     * // Delete a few MaintenanceTypes
     * const { count } = await prisma.maintenanceType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceTypeDeleteManyArgs>(args?: SelectSubset<T, MaintenanceTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceTypes
     * const maintenanceType = await prisma.maintenanceType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceTypeUpdateManyArgs>(args: SelectSubset<T, MaintenanceTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceTypes and returns the data updated in the database.
     * @param {MaintenanceTypeUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceTypes.
     * @example
     * // Update many MaintenanceTypes
     * const maintenanceType = await prisma.maintenanceType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenanceTypes and only return the `id`
     * const maintenanceTypeWithIdOnly = await prisma.maintenanceType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenanceTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenanceType.
     * @param {MaintenanceTypeUpsertArgs} args - Arguments to update or create a MaintenanceType.
     * @example
     * // Update or create a MaintenanceType
     * const maintenanceType = await prisma.maintenanceType.upsert({
     *   create: {
     *     // ... data to create a MaintenanceType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceType we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceTypeUpsertArgs>(args: SelectSubset<T, MaintenanceTypeUpsertArgs<ExtArgs>>): Prisma__MaintenanceTypeClient<$Result.GetResult<Prisma.$MaintenanceTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTypeCountArgs} args - Arguments to filter MaintenanceTypes to count.
     * @example
     * // Count the number of MaintenanceTypes
     * const count = await prisma.maintenanceType.count({
     *   where: {
     *     // ... the filter for the MaintenanceTypes we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceTypeCountArgs>(
      args?: Subset<T, MaintenanceTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenanceTypeAggregateArgs>(args: Subset<T, MaintenanceTypeAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceTypeAggregateType<T>>

    /**
     * Group by MaintenanceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenanceTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceTypeGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenanceTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceType model
   */
  readonly fields: MaintenanceTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maintenanceRecords<T extends MaintenanceType$maintenanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceType$maintenanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaintenanceType model
   */
  interface MaintenanceTypeFieldRefs {
    readonly id: FieldRef<"MaintenanceType", 'String'>
    readonly name: FieldRef<"MaintenanceType", 'String'>
    readonly createdAt: FieldRef<"MaintenanceType", 'DateTime'>
    readonly updatedAt: FieldRef<"MaintenanceType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceType findUnique
   */
  export type MaintenanceTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceType
     */
    select?: MaintenanceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceType
     */
    omit?: MaintenanceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTypeInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceType to fetch.
     */
    where: MaintenanceTypeWhereUniqueInput
  }

  /**
   * MaintenanceType findUniqueOrThrow
   */
  export type MaintenanceTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceType
     */
    select?: MaintenanceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceType
     */
    omit?: MaintenanceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTypeInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceType to fetch.
     */
    where: MaintenanceTypeWhereUniqueInput
  }

  /**
   * MaintenanceType findFirst
   */
  export type MaintenanceTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceType
     */
    select?: MaintenanceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceType
     */
    omit?: MaintenanceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTypeInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceType to fetch.
     */
    where?: MaintenanceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTypes to fetch.
     */
    orderBy?: MaintenanceTypeOrderByWithRelationInput | MaintenanceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceTypes.
     */
    cursor?: MaintenanceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceTypes.
     */
    distinct?: MaintenanceTypeScalarFieldEnum | MaintenanceTypeScalarFieldEnum[]
  }

  /**
   * MaintenanceType findFirstOrThrow
   */
  export type MaintenanceTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceType
     */
    select?: MaintenanceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceType
     */
    omit?: MaintenanceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTypeInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceType to fetch.
     */
    where?: MaintenanceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTypes to fetch.
     */
    orderBy?: MaintenanceTypeOrderByWithRelationInput | MaintenanceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceTypes.
     */
    cursor?: MaintenanceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceTypes.
     */
    distinct?: MaintenanceTypeScalarFieldEnum | MaintenanceTypeScalarFieldEnum[]
  }

  /**
   * MaintenanceType findMany
   */
  export type MaintenanceTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceType
     */
    select?: MaintenanceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceType
     */
    omit?: MaintenanceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTypeInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTypes to fetch.
     */
    where?: MaintenanceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTypes to fetch.
     */
    orderBy?: MaintenanceTypeOrderByWithRelationInput | MaintenanceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceTypes.
     */
    cursor?: MaintenanceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTypes.
     */
    skip?: number
    distinct?: MaintenanceTypeScalarFieldEnum | MaintenanceTypeScalarFieldEnum[]
  }

  /**
   * MaintenanceType create
   */
  export type MaintenanceTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceType
     */
    select?: MaintenanceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceType
     */
    omit?: MaintenanceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceType.
     */
    data: XOR<MaintenanceTypeCreateInput, MaintenanceTypeUncheckedCreateInput>
  }

  /**
   * MaintenanceType createMany
   */
  export type MaintenanceTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceTypes.
     */
    data: MaintenanceTypeCreateManyInput | MaintenanceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceType createManyAndReturn
   */
  export type MaintenanceTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceType
     */
    select?: MaintenanceTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceType
     */
    omit?: MaintenanceTypeOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceTypes.
     */
    data: MaintenanceTypeCreateManyInput | MaintenanceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceType update
   */
  export type MaintenanceTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceType
     */
    select?: MaintenanceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceType
     */
    omit?: MaintenanceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceType.
     */
    data: XOR<MaintenanceTypeUpdateInput, MaintenanceTypeUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceType to update.
     */
    where: MaintenanceTypeWhereUniqueInput
  }

  /**
   * MaintenanceType updateMany
   */
  export type MaintenanceTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceTypes.
     */
    data: XOR<MaintenanceTypeUpdateManyMutationInput, MaintenanceTypeUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceTypes to update
     */
    where?: MaintenanceTypeWhereInput
    /**
     * Limit how many MaintenanceTypes to update.
     */
    limit?: number
  }

  /**
   * MaintenanceType updateManyAndReturn
   */
  export type MaintenanceTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceType
     */
    select?: MaintenanceTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceType
     */
    omit?: MaintenanceTypeOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceTypes.
     */
    data: XOR<MaintenanceTypeUpdateManyMutationInput, MaintenanceTypeUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceTypes to update
     */
    where?: MaintenanceTypeWhereInput
    /**
     * Limit how many MaintenanceTypes to update.
     */
    limit?: number
  }

  /**
   * MaintenanceType upsert
   */
  export type MaintenanceTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceType
     */
    select?: MaintenanceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceType
     */
    omit?: MaintenanceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceType to update in case it exists.
     */
    where: MaintenanceTypeWhereUniqueInput
    /**
     * In case the MaintenanceType found by the `where` argument doesn't exist, create a new MaintenanceType with this data.
     */
    create: XOR<MaintenanceTypeCreateInput, MaintenanceTypeUncheckedCreateInput>
    /**
     * In case the MaintenanceType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceTypeUpdateInput, MaintenanceTypeUncheckedUpdateInput>
  }

  /**
   * MaintenanceType delete
   */
  export type MaintenanceTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceType
     */
    select?: MaintenanceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceType
     */
    omit?: MaintenanceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTypeInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceType to delete.
     */
    where: MaintenanceTypeWhereUniqueInput
  }

  /**
   * MaintenanceType deleteMany
   */
  export type MaintenanceTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceTypes to delete
     */
    where?: MaintenanceTypeWhereInput
    /**
     * Limit how many MaintenanceTypes to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceType.maintenanceRecords
   */
  export type MaintenanceType$maintenanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    where?: MaintenanceRecordWhereInput
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    cursor?: MaintenanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * MaintenanceType without action
   */
  export type MaintenanceTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceType
     */
    select?: MaintenanceTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceType
     */
    omit?: MaintenanceTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTypeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    year: 'year',
    make: 'make',
    model: 'model',
    vin: 'vin',
    mileage: 'mileage',
    purchaseDate: 'purchaseDate',
    color: 'color',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const MaintenanceRecordScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    maintenanceTypeId: 'maintenanceTypeId',
    date: 'date',
    mileage: 'mileage',
    description: 'description',
    location: 'location',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaintenanceRecordScalarFieldEnum = (typeof MaintenanceRecordScalarFieldEnum)[keyof typeof MaintenanceRecordScalarFieldEnum]


  export const MaintenanceTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaintenanceTypeScalarFieldEnum = (typeof MaintenanceTypeScalarFieldEnum)[keyof typeof MaintenanceTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicles?: VehicleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    userId?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    make?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    vin?: StringFilter<"Vehicle"> | string
    mileage?: IntFilter<"Vehicle"> | number
    purchaseDate?: DateTimeFilter<"Vehicle"> | Date | string
    color?: StringFilter<"Vehicle"> | string
    active?: BoolFilter<"Vehicle"> | boolean
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    maintenanceRecords?: MaintenanceRecordListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    vin?: SortOrder
    mileage?: SortOrder
    purchaseDate?: SortOrder
    color?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    maintenanceRecords?: MaintenanceRecordOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vin?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    userId?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    make?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    mileage?: IntFilter<"Vehicle"> | number
    purchaseDate?: DateTimeFilter<"Vehicle"> | Date | string
    color?: StringFilter<"Vehicle"> | string
    active?: BoolFilter<"Vehicle"> | boolean
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    maintenanceRecords?: MaintenanceRecordListRelationFilter
  }, "id" | "vin">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    vin?: SortOrder
    mileage?: SortOrder
    purchaseDate?: SortOrder
    color?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    userId?: StringWithAggregatesFilter<"Vehicle"> | string
    year?: IntWithAggregatesFilter<"Vehicle"> | number
    make?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    vin?: StringWithAggregatesFilter<"Vehicle"> | string
    mileage?: IntWithAggregatesFilter<"Vehicle"> | number
    purchaseDate?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    color?: StringWithAggregatesFilter<"Vehicle"> | string
    active?: BoolWithAggregatesFilter<"Vehicle"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type MaintenanceRecordWhereInput = {
    AND?: MaintenanceRecordWhereInput | MaintenanceRecordWhereInput[]
    OR?: MaintenanceRecordWhereInput[]
    NOT?: MaintenanceRecordWhereInput | MaintenanceRecordWhereInput[]
    id?: StringFilter<"MaintenanceRecord"> | string
    vehicleId?: StringFilter<"MaintenanceRecord"> | string
    maintenanceTypeId?: StringFilter<"MaintenanceRecord"> | string
    date?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    mileage?: IntFilter<"MaintenanceRecord"> | number
    description?: StringFilter<"MaintenanceRecord"> | string
    location?: StringFilter<"MaintenanceRecord"> | string
    amount?: FloatFilter<"MaintenanceRecord"> | number
    createdAt?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    maintenanceType?: XOR<MaintenanceTypeScalarRelationFilter, MaintenanceTypeWhereInput>
  }

  export type MaintenanceRecordOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    maintenanceTypeId?: SortOrder
    date?: SortOrder
    mileage?: SortOrder
    description?: SortOrder
    location?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    maintenanceType?: MaintenanceTypeOrderByWithRelationInput
  }

  export type MaintenanceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceRecordWhereInput | MaintenanceRecordWhereInput[]
    OR?: MaintenanceRecordWhereInput[]
    NOT?: MaintenanceRecordWhereInput | MaintenanceRecordWhereInput[]
    vehicleId?: StringFilter<"MaintenanceRecord"> | string
    maintenanceTypeId?: StringFilter<"MaintenanceRecord"> | string
    date?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    mileage?: IntFilter<"MaintenanceRecord"> | number
    description?: StringFilter<"MaintenanceRecord"> | string
    location?: StringFilter<"MaintenanceRecord"> | string
    amount?: FloatFilter<"MaintenanceRecord"> | number
    createdAt?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    maintenanceType?: XOR<MaintenanceTypeScalarRelationFilter, MaintenanceTypeWhereInput>
  }, "id">

  export type MaintenanceRecordOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    maintenanceTypeId?: SortOrder
    date?: SortOrder
    mileage?: SortOrder
    description?: SortOrder
    location?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaintenanceRecordCountOrderByAggregateInput
    _avg?: MaintenanceRecordAvgOrderByAggregateInput
    _max?: MaintenanceRecordMaxOrderByAggregateInput
    _min?: MaintenanceRecordMinOrderByAggregateInput
    _sum?: MaintenanceRecordSumOrderByAggregateInput
  }

  export type MaintenanceRecordScalarWhereWithAggregatesInput = {
    AND?: MaintenanceRecordScalarWhereWithAggregatesInput | MaintenanceRecordScalarWhereWithAggregatesInput[]
    OR?: MaintenanceRecordScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceRecordScalarWhereWithAggregatesInput | MaintenanceRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaintenanceRecord"> | string
    vehicleId?: StringWithAggregatesFilter<"MaintenanceRecord"> | string
    maintenanceTypeId?: StringWithAggregatesFilter<"MaintenanceRecord"> | string
    date?: DateTimeWithAggregatesFilter<"MaintenanceRecord"> | Date | string
    mileage?: IntWithAggregatesFilter<"MaintenanceRecord"> | number
    description?: StringWithAggregatesFilter<"MaintenanceRecord"> | string
    location?: StringWithAggregatesFilter<"MaintenanceRecord"> | string
    amount?: FloatWithAggregatesFilter<"MaintenanceRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaintenanceRecord"> | Date | string
  }

  export type MaintenanceTypeWhereInput = {
    AND?: MaintenanceTypeWhereInput | MaintenanceTypeWhereInput[]
    OR?: MaintenanceTypeWhereInput[]
    NOT?: MaintenanceTypeWhereInput | MaintenanceTypeWhereInput[]
    id?: StringFilter<"MaintenanceType"> | string
    name?: StringFilter<"MaintenanceType"> | string
    createdAt?: DateTimeFilter<"MaintenanceType"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceType"> | Date | string
    maintenanceRecords?: MaintenanceRecordListRelationFilter
  }

  export type MaintenanceTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenanceRecords?: MaintenanceRecordOrderByRelationAggregateInput
  }

  export type MaintenanceTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MaintenanceTypeWhereInput | MaintenanceTypeWhereInput[]
    OR?: MaintenanceTypeWhereInput[]
    NOT?: MaintenanceTypeWhereInput | MaintenanceTypeWhereInput[]
    createdAt?: DateTimeFilter<"MaintenanceType"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceType"> | Date | string
    maintenanceRecords?: MaintenanceRecordListRelationFilter
  }, "id" | "name">

  export type MaintenanceTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaintenanceTypeCountOrderByAggregateInput
    _max?: MaintenanceTypeMaxOrderByAggregateInput
    _min?: MaintenanceTypeMinOrderByAggregateInput
  }

  export type MaintenanceTypeScalarWhereWithAggregatesInput = {
    AND?: MaintenanceTypeScalarWhereWithAggregatesInput | MaintenanceTypeScalarWhereWithAggregatesInput[]
    OR?: MaintenanceTypeScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceTypeScalarWhereWithAggregatesInput | MaintenanceTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaintenanceType"> | string
    name?: StringWithAggregatesFilter<"MaintenanceType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaintenanceType"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    year: number
    make: string
    model: string
    vin: string
    mileage: number
    purchaseDate: Date | string
    color: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVehiclesInput
    maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    userId: string
    year: number
    make: string
    model: string
    vin: string
    mileage: number
    purchaseDate: Date | string
    color: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRecords?: MaintenanceRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
    maintenanceRecords?: MaintenanceRecordUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRecords?: MaintenanceRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    userId: string
    year: number
    make: string
    model: string
    vin: string
    mileage: number
    purchaseDate: Date | string
    color: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordCreateInput = {
    id?: string
    date: Date | string
    mileage: number
    description: string
    location: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutMaintenanceRecordsInput
    maintenanceType: MaintenanceTypeCreateNestedOneWithoutMaintenanceRecordsInput
  }

  export type MaintenanceRecordUncheckedCreateInput = {
    id?: string
    vehicleId: string
    maintenanceTypeId: string
    date: Date | string
    mileage: number
    description: string
    location: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceRecordsNestedInput
    maintenanceType?: MaintenanceTypeUpdateOneRequiredWithoutMaintenanceRecordsNestedInput
  }

  export type MaintenanceRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    maintenanceTypeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordCreateManyInput = {
    id?: string
    vehicleId: string
    maintenanceTypeId: string
    date: Date | string
    mileage: number
    description: string
    location: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    maintenanceTypeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTypeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutMaintenanceTypeInput
  }

  export type MaintenanceTypeUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRecords?: MaintenanceRecordUncheckedCreateNestedManyWithoutMaintenanceTypeInput
  }

  export type MaintenanceTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRecords?: MaintenanceRecordUpdateManyWithoutMaintenanceTypeNestedInput
  }

  export type MaintenanceTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRecords?: MaintenanceRecordUncheckedUpdateManyWithoutMaintenanceTypeNestedInput
  }

  export type MaintenanceTypeCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MaintenanceRecordListRelationFilter = {
    every?: MaintenanceRecordWhereInput
    some?: MaintenanceRecordWhereInput
    none?: MaintenanceRecordWhereInput
  }

  export type MaintenanceRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    vin?: SortOrder
    mileage?: SortOrder
    purchaseDate?: SortOrder
    color?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    year?: SortOrder
    mileage?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    vin?: SortOrder
    mileage?: SortOrder
    purchaseDate?: SortOrder
    color?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    make?: SortOrder
    model?: SortOrder
    vin?: SortOrder
    mileage?: SortOrder
    purchaseDate?: SortOrder
    color?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    year?: SortOrder
    mileage?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type MaintenanceTypeScalarRelationFilter = {
    is?: MaintenanceTypeWhereInput
    isNot?: MaintenanceTypeWhereInput
  }

  export type MaintenanceRecordCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    maintenanceTypeId?: SortOrder
    date?: SortOrder
    mileage?: SortOrder
    description?: SortOrder
    location?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceRecordAvgOrderByAggregateInput = {
    mileage?: SortOrder
    amount?: SortOrder
  }

  export type MaintenanceRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    maintenanceTypeId?: SortOrder
    date?: SortOrder
    mileage?: SortOrder
    description?: SortOrder
    location?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceRecordMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    maintenanceTypeId?: SortOrder
    date?: SortOrder
    mileage?: SortOrder
    description?: SortOrder
    location?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceRecordSumOrderByAggregateInput = {
    mileage?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MaintenanceTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleCreateNestedManyWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehicleUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutUserInput | VehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutUserInput | VehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutUserInput | VehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutUserInput | VehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutUserInput | VehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutUserInput | VehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type MaintenanceRecordCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput> | MaintenanceRecordCreateWithoutVehicleInput[] | MaintenanceRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutVehicleInput | MaintenanceRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceRecordCreateManyVehicleInputEnvelope
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
  }

  export type MaintenanceRecordUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput> | MaintenanceRecordCreateWithoutVehicleInput[] | MaintenanceRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutVehicleInput | MaintenanceRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceRecordCreateManyVehicleInputEnvelope
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type MaintenanceRecordUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput> | MaintenanceRecordCreateWithoutVehicleInput[] | MaintenanceRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutVehicleInput | MaintenanceRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceRecordCreateManyVehicleInputEnvelope
    set?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    disconnect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    delete?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    update?: MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput | MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
  }

  export type MaintenanceRecordUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput> | MaintenanceRecordCreateWithoutVehicleInput[] | MaintenanceRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutVehicleInput | MaintenanceRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceRecordCreateManyVehicleInputEnvelope
    set?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    disconnect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    delete?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    update?: MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput | MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutMaintenanceRecordsInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceRecordsInput, VehicleUncheckedCreateWithoutMaintenanceRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceRecordsInput
    connect?: VehicleWhereUniqueInput
  }

  export type MaintenanceTypeCreateNestedOneWithoutMaintenanceRecordsInput = {
    create?: XOR<MaintenanceTypeCreateWithoutMaintenanceRecordsInput, MaintenanceTypeUncheckedCreateWithoutMaintenanceRecordsInput>
    connectOrCreate?: MaintenanceTypeCreateOrConnectWithoutMaintenanceRecordsInput
    connect?: MaintenanceTypeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehicleUpdateOneRequiredWithoutMaintenanceRecordsNestedInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceRecordsInput, VehicleUncheckedCreateWithoutMaintenanceRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceRecordsInput
    upsert?: VehicleUpsertWithoutMaintenanceRecordsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMaintenanceRecordsInput, VehicleUpdateWithoutMaintenanceRecordsInput>, VehicleUncheckedUpdateWithoutMaintenanceRecordsInput>
  }

  export type MaintenanceTypeUpdateOneRequiredWithoutMaintenanceRecordsNestedInput = {
    create?: XOR<MaintenanceTypeCreateWithoutMaintenanceRecordsInput, MaintenanceTypeUncheckedCreateWithoutMaintenanceRecordsInput>
    connectOrCreate?: MaintenanceTypeCreateOrConnectWithoutMaintenanceRecordsInput
    upsert?: MaintenanceTypeUpsertWithoutMaintenanceRecordsInput
    connect?: MaintenanceTypeWhereUniqueInput
    update?: XOR<XOR<MaintenanceTypeUpdateToOneWithWhereWithoutMaintenanceRecordsInput, MaintenanceTypeUpdateWithoutMaintenanceRecordsInput>, MaintenanceTypeUncheckedUpdateWithoutMaintenanceRecordsInput>
  }

  export type MaintenanceRecordCreateNestedManyWithoutMaintenanceTypeInput = {
    create?: XOR<MaintenanceRecordCreateWithoutMaintenanceTypeInput, MaintenanceRecordUncheckedCreateWithoutMaintenanceTypeInput> | MaintenanceRecordCreateWithoutMaintenanceTypeInput[] | MaintenanceRecordUncheckedCreateWithoutMaintenanceTypeInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutMaintenanceTypeInput | MaintenanceRecordCreateOrConnectWithoutMaintenanceTypeInput[]
    createMany?: MaintenanceRecordCreateManyMaintenanceTypeInputEnvelope
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
  }

  export type MaintenanceRecordUncheckedCreateNestedManyWithoutMaintenanceTypeInput = {
    create?: XOR<MaintenanceRecordCreateWithoutMaintenanceTypeInput, MaintenanceRecordUncheckedCreateWithoutMaintenanceTypeInput> | MaintenanceRecordCreateWithoutMaintenanceTypeInput[] | MaintenanceRecordUncheckedCreateWithoutMaintenanceTypeInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutMaintenanceTypeInput | MaintenanceRecordCreateOrConnectWithoutMaintenanceTypeInput[]
    createMany?: MaintenanceRecordCreateManyMaintenanceTypeInputEnvelope
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
  }

  export type MaintenanceRecordUpdateManyWithoutMaintenanceTypeNestedInput = {
    create?: XOR<MaintenanceRecordCreateWithoutMaintenanceTypeInput, MaintenanceRecordUncheckedCreateWithoutMaintenanceTypeInput> | MaintenanceRecordCreateWithoutMaintenanceTypeInput[] | MaintenanceRecordUncheckedCreateWithoutMaintenanceTypeInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutMaintenanceTypeInput | MaintenanceRecordCreateOrConnectWithoutMaintenanceTypeInput[]
    upsert?: MaintenanceRecordUpsertWithWhereUniqueWithoutMaintenanceTypeInput | MaintenanceRecordUpsertWithWhereUniqueWithoutMaintenanceTypeInput[]
    createMany?: MaintenanceRecordCreateManyMaintenanceTypeInputEnvelope
    set?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    disconnect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    delete?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    update?: MaintenanceRecordUpdateWithWhereUniqueWithoutMaintenanceTypeInput | MaintenanceRecordUpdateWithWhereUniqueWithoutMaintenanceTypeInput[]
    updateMany?: MaintenanceRecordUpdateManyWithWhereWithoutMaintenanceTypeInput | MaintenanceRecordUpdateManyWithWhereWithoutMaintenanceTypeInput[]
    deleteMany?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
  }

  export type MaintenanceRecordUncheckedUpdateManyWithoutMaintenanceTypeNestedInput = {
    create?: XOR<MaintenanceRecordCreateWithoutMaintenanceTypeInput, MaintenanceRecordUncheckedCreateWithoutMaintenanceTypeInput> | MaintenanceRecordCreateWithoutMaintenanceTypeInput[] | MaintenanceRecordUncheckedCreateWithoutMaintenanceTypeInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutMaintenanceTypeInput | MaintenanceRecordCreateOrConnectWithoutMaintenanceTypeInput[]
    upsert?: MaintenanceRecordUpsertWithWhereUniqueWithoutMaintenanceTypeInput | MaintenanceRecordUpsertWithWhereUniqueWithoutMaintenanceTypeInput[]
    createMany?: MaintenanceRecordCreateManyMaintenanceTypeInputEnvelope
    set?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    disconnect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    delete?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    update?: MaintenanceRecordUpdateWithWhereUniqueWithoutMaintenanceTypeInput | MaintenanceRecordUpdateWithWhereUniqueWithoutMaintenanceTypeInput[]
    updateMany?: MaintenanceRecordUpdateManyWithWhereWithoutMaintenanceTypeInput | MaintenanceRecordUpdateManyWithWhereWithoutMaintenanceTypeInput[]
    deleteMany?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type VehicleCreateWithoutUserInput = {
    id?: string
    year: number
    make: string
    model: string
    vin: string
    mileage: number
    purchaseDate: Date | string
    color: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutUserInput = {
    id?: string
    year: number
    make: string
    model: string
    vin: string
    mileage: number
    purchaseDate: Date | string
    color: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceRecords?: MaintenanceRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutUserInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
  }

  export type VehicleCreateManyUserInputEnvelope = {
    data: VehicleCreateManyUserInput | VehicleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
  }

  export type VehicleUpdateManyWithWhereWithoutUserInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutUserInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    userId?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    make?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    vin?: StringFilter<"Vehicle"> | string
    mileage?: IntFilter<"Vehicle"> | number
    purchaseDate?: DateTimeFilter<"Vehicle"> | Date | string
    color?: StringFilter<"Vehicle"> | string
    active?: BoolFilter<"Vehicle"> | boolean
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
  }

  export type UserCreateWithoutVehiclesInput = {
    id?: string
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: string
    username: string
    password: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type MaintenanceRecordCreateWithoutVehicleInput = {
    id?: string
    date: Date | string
    mileage: number
    description: string
    location: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceType: MaintenanceTypeCreateNestedOneWithoutMaintenanceRecordsInput
  }

  export type MaintenanceRecordUncheckedCreateWithoutVehicleInput = {
    id?: string
    maintenanceTypeId: string
    date: Date | string
    mileage: number
    description: string
    location: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRecordCreateOrConnectWithoutVehicleInput = {
    where: MaintenanceRecordWhereUniqueInput
    create: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceRecordCreateManyVehicleInputEnvelope = {
    data: MaintenanceRecordCreateManyVehicleInput | MaintenanceRecordCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceRecordWhereUniqueInput
    update: XOR<MaintenanceRecordUpdateWithoutVehicleInput, MaintenanceRecordUncheckedUpdateWithoutVehicleInput>
    create: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceRecordWhereUniqueInput
    data: XOR<MaintenanceRecordUpdateWithoutVehicleInput, MaintenanceRecordUncheckedUpdateWithoutVehicleInput>
  }

  export type MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput = {
    where: MaintenanceRecordScalarWhereInput
    data: XOR<MaintenanceRecordUpdateManyMutationInput, MaintenanceRecordUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MaintenanceRecordScalarWhereInput = {
    AND?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
    OR?: MaintenanceRecordScalarWhereInput[]
    NOT?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
    id?: StringFilter<"MaintenanceRecord"> | string
    vehicleId?: StringFilter<"MaintenanceRecord"> | string
    maintenanceTypeId?: StringFilter<"MaintenanceRecord"> | string
    date?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    mileage?: IntFilter<"MaintenanceRecord"> | number
    description?: StringFilter<"MaintenanceRecord"> | string
    location?: StringFilter<"MaintenanceRecord"> | string
    amount?: FloatFilter<"MaintenanceRecord"> | number
    createdAt?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRecord"> | Date | string
  }

  export type VehicleCreateWithoutMaintenanceRecordsInput = {
    id?: string
    year: number
    make: string
    model: string
    vin: string
    mileage: number
    purchaseDate: Date | string
    color: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVehiclesInput
  }

  export type VehicleUncheckedCreateWithoutMaintenanceRecordsInput = {
    id?: string
    userId: string
    year: number
    make: string
    model: string
    vin: string
    mileage: number
    purchaseDate: Date | string
    color: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleCreateOrConnectWithoutMaintenanceRecordsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMaintenanceRecordsInput, VehicleUncheckedCreateWithoutMaintenanceRecordsInput>
  }

  export type MaintenanceTypeCreateWithoutMaintenanceRecordsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceTypeUncheckedCreateWithoutMaintenanceRecordsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceTypeCreateOrConnectWithoutMaintenanceRecordsInput = {
    where: MaintenanceTypeWhereUniqueInput
    create: XOR<MaintenanceTypeCreateWithoutMaintenanceRecordsInput, MaintenanceTypeUncheckedCreateWithoutMaintenanceRecordsInput>
  }

  export type VehicleUpsertWithoutMaintenanceRecordsInput = {
    update: XOR<VehicleUpdateWithoutMaintenanceRecordsInput, VehicleUncheckedUpdateWithoutMaintenanceRecordsInput>
    create: XOR<VehicleCreateWithoutMaintenanceRecordsInput, VehicleUncheckedCreateWithoutMaintenanceRecordsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMaintenanceRecordsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMaintenanceRecordsInput, VehicleUncheckedUpdateWithoutMaintenanceRecordsInput>
  }

  export type VehicleUpdateWithoutMaintenanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMaintenanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTypeUpsertWithoutMaintenanceRecordsInput = {
    update: XOR<MaintenanceTypeUpdateWithoutMaintenanceRecordsInput, MaintenanceTypeUncheckedUpdateWithoutMaintenanceRecordsInput>
    create: XOR<MaintenanceTypeCreateWithoutMaintenanceRecordsInput, MaintenanceTypeUncheckedCreateWithoutMaintenanceRecordsInput>
    where?: MaintenanceTypeWhereInput
  }

  export type MaintenanceTypeUpdateToOneWithWhereWithoutMaintenanceRecordsInput = {
    where?: MaintenanceTypeWhereInput
    data: XOR<MaintenanceTypeUpdateWithoutMaintenanceRecordsInput, MaintenanceTypeUncheckedUpdateWithoutMaintenanceRecordsInput>
  }

  export type MaintenanceTypeUpdateWithoutMaintenanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTypeUncheckedUpdateWithoutMaintenanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordCreateWithoutMaintenanceTypeInput = {
    id?: string
    date: Date | string
    mileage: number
    description: string
    location: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutMaintenanceRecordsInput
  }

  export type MaintenanceRecordUncheckedCreateWithoutMaintenanceTypeInput = {
    id?: string
    vehicleId: string
    date: Date | string
    mileage: number
    description: string
    location: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRecordCreateOrConnectWithoutMaintenanceTypeInput = {
    where: MaintenanceRecordWhereUniqueInput
    create: XOR<MaintenanceRecordCreateWithoutMaintenanceTypeInput, MaintenanceRecordUncheckedCreateWithoutMaintenanceTypeInput>
  }

  export type MaintenanceRecordCreateManyMaintenanceTypeInputEnvelope = {
    data: MaintenanceRecordCreateManyMaintenanceTypeInput | MaintenanceRecordCreateManyMaintenanceTypeInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceRecordUpsertWithWhereUniqueWithoutMaintenanceTypeInput = {
    where: MaintenanceRecordWhereUniqueInput
    update: XOR<MaintenanceRecordUpdateWithoutMaintenanceTypeInput, MaintenanceRecordUncheckedUpdateWithoutMaintenanceTypeInput>
    create: XOR<MaintenanceRecordCreateWithoutMaintenanceTypeInput, MaintenanceRecordUncheckedCreateWithoutMaintenanceTypeInput>
  }

  export type MaintenanceRecordUpdateWithWhereUniqueWithoutMaintenanceTypeInput = {
    where: MaintenanceRecordWhereUniqueInput
    data: XOR<MaintenanceRecordUpdateWithoutMaintenanceTypeInput, MaintenanceRecordUncheckedUpdateWithoutMaintenanceTypeInput>
  }

  export type MaintenanceRecordUpdateManyWithWhereWithoutMaintenanceTypeInput = {
    where: MaintenanceRecordScalarWhereInput
    data: XOR<MaintenanceRecordUpdateManyMutationInput, MaintenanceRecordUncheckedUpdateManyWithoutMaintenanceTypeInput>
  }

  export type VehicleCreateManyUserInput = {
    id?: string
    year: number
    make: string
    model: string
    vin: string
    mileage: number
    purchaseDate: Date | string
    color: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRecords?: MaintenanceRecordUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceRecords?: MaintenanceRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    vin?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordCreateManyVehicleInput = {
    id?: string
    maintenanceTypeId: string
    date: Date | string
    mileage: number
    description: string
    location: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRecordUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceType?: MaintenanceTypeUpdateOneRequiredWithoutMaintenanceRecordsNestedInput
  }

  export type MaintenanceRecordUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    maintenanceTypeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    maintenanceTypeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordCreateManyMaintenanceTypeInput = {
    id?: string
    vehicleId: string
    date: Date | string
    mileage: number
    description: string
    location: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRecordUpdateWithoutMaintenanceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceRecordsNestedInput
  }

  export type MaintenanceRecordUncheckedUpdateWithoutMaintenanceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordUncheckedUpdateManyWithoutMaintenanceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}