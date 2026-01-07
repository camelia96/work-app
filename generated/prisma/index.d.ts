
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model default_hours
 * 
 */
export type default_hours = $Result.DefaultSelection<Prisma.$default_hoursPayload>
/**
 * Model hours_worked_days
 * 
 */
export type hours_worked_days = $Result.DefaultSelection<Prisma.$hours_worked_daysPayload>
/**
 * Model profile_worked_days
 * 
 */
export type profile_worked_days = $Result.DefaultSelection<Prisma.$profile_worked_daysPayload>
/**
 * Model profiles
 * 
 */
export type profiles = $Result.DefaultSelection<Prisma.$profilesPayload>
/**
 * Model type_hours
 * 
 */
export type type_hours = $Result.DefaultSelection<Prisma.$type_hoursPayload>
/**
 * Model worked_days
 * 
 */
export type worked_days = $Result.DefaultSelection<Prisma.$worked_daysPayload>
/**
 * Model monthly_salary
 * 
 */
export type monthly_salary = $Result.DefaultSelection<Prisma.$monthly_salaryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Default_hours
 * const default_hours = await prisma.default_hours.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Default_hours
   * const default_hours = await prisma.default_hours.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.default_hours`: Exposes CRUD operations for the **default_hours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Default_hours
    * const default_hours = await prisma.default_hours.findMany()
    * ```
    */
  get default_hours(): Prisma.default_hoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hours_worked_days`: Exposes CRUD operations for the **hours_worked_days** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hours_worked_days
    * const hours_worked_days = await prisma.hours_worked_days.findMany()
    * ```
    */
  get hours_worked_days(): Prisma.hours_worked_daysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile_worked_days`: Exposes CRUD operations for the **profile_worked_days** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profile_worked_days
    * const profile_worked_days = await prisma.profile_worked_days.findMany()
    * ```
    */
  get profile_worked_days(): Prisma.profile_worked_daysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type_hours`: Exposes CRUD operations for the **type_hours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Type_hours
    * const type_hours = await prisma.type_hours.findMany()
    * ```
    */
  get type_hours(): Prisma.type_hoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worked_days`: Exposes CRUD operations for the **worked_days** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Worked_days
    * const worked_days = await prisma.worked_days.findMany()
    * ```
    */
  get worked_days(): Prisma.worked_daysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthly_salary`: Exposes CRUD operations for the **monthly_salary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monthly_salaries
    * const monthly_salaries = await prisma.monthly_salary.findMany()
    * ```
    */
  get monthly_salary(): Prisma.monthly_salaryDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    default_hours: 'default_hours',
    hours_worked_days: 'hours_worked_days',
    profile_worked_days: 'profile_worked_days',
    profiles: 'profiles',
    type_hours: 'type_hours',
    worked_days: 'worked_days',
    monthly_salary: 'monthly_salary'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "default_hours" | "hours_worked_days" | "profile_worked_days" | "profiles" | "type_hours" | "worked_days" | "monthly_salary"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      default_hours: {
        payload: Prisma.$default_hoursPayload<ExtArgs>
        fields: Prisma.default_hoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.default_hoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$default_hoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.default_hoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$default_hoursPayload>
          }
          findFirst: {
            args: Prisma.default_hoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$default_hoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.default_hoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$default_hoursPayload>
          }
          findMany: {
            args: Prisma.default_hoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$default_hoursPayload>[]
          }
          create: {
            args: Prisma.default_hoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$default_hoursPayload>
          }
          createMany: {
            args: Prisma.default_hoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.default_hoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$default_hoursPayload>[]
          }
          delete: {
            args: Prisma.default_hoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$default_hoursPayload>
          }
          update: {
            args: Prisma.default_hoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$default_hoursPayload>
          }
          deleteMany: {
            args: Prisma.default_hoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.default_hoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.default_hoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$default_hoursPayload>[]
          }
          upsert: {
            args: Prisma.default_hoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$default_hoursPayload>
          }
          aggregate: {
            args: Prisma.Default_hoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDefault_hours>
          }
          groupBy: {
            args: Prisma.default_hoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<Default_hoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.default_hoursCountArgs<ExtArgs>
            result: $Utils.Optional<Default_hoursCountAggregateOutputType> | number
          }
        }
      }
      hours_worked_days: {
        payload: Prisma.$hours_worked_daysPayload<ExtArgs>
        fields: Prisma.hours_worked_daysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hours_worked_daysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hours_worked_daysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hours_worked_daysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hours_worked_daysPayload>
          }
          findFirst: {
            args: Prisma.hours_worked_daysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hours_worked_daysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hours_worked_daysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hours_worked_daysPayload>
          }
          findMany: {
            args: Prisma.hours_worked_daysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hours_worked_daysPayload>[]
          }
          create: {
            args: Prisma.hours_worked_daysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hours_worked_daysPayload>
          }
          createMany: {
            args: Prisma.hours_worked_daysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hours_worked_daysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hours_worked_daysPayload>[]
          }
          delete: {
            args: Prisma.hours_worked_daysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hours_worked_daysPayload>
          }
          update: {
            args: Prisma.hours_worked_daysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hours_worked_daysPayload>
          }
          deleteMany: {
            args: Prisma.hours_worked_daysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hours_worked_daysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hours_worked_daysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hours_worked_daysPayload>[]
          }
          upsert: {
            args: Prisma.hours_worked_daysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hours_worked_daysPayload>
          }
          aggregate: {
            args: Prisma.Hours_worked_daysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHours_worked_days>
          }
          groupBy: {
            args: Prisma.hours_worked_daysGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hours_worked_daysGroupByOutputType>[]
          }
          count: {
            args: Prisma.hours_worked_daysCountArgs<ExtArgs>
            result: $Utils.Optional<Hours_worked_daysCountAggregateOutputType> | number
          }
        }
      }
      profile_worked_days: {
        payload: Prisma.$profile_worked_daysPayload<ExtArgs>
        fields: Prisma.profile_worked_daysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profile_worked_daysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_worked_daysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profile_worked_daysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_worked_daysPayload>
          }
          findFirst: {
            args: Prisma.profile_worked_daysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_worked_daysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profile_worked_daysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_worked_daysPayload>
          }
          findMany: {
            args: Prisma.profile_worked_daysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_worked_daysPayload>[]
          }
          create: {
            args: Prisma.profile_worked_daysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_worked_daysPayload>
          }
          createMany: {
            args: Prisma.profile_worked_daysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profile_worked_daysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_worked_daysPayload>[]
          }
          delete: {
            args: Prisma.profile_worked_daysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_worked_daysPayload>
          }
          update: {
            args: Prisma.profile_worked_daysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_worked_daysPayload>
          }
          deleteMany: {
            args: Prisma.profile_worked_daysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profile_worked_daysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profile_worked_daysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_worked_daysPayload>[]
          }
          upsert: {
            args: Prisma.profile_worked_daysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_worked_daysPayload>
          }
          aggregate: {
            args: Prisma.Profile_worked_daysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile_worked_days>
          }
          groupBy: {
            args: Prisma.profile_worked_daysGroupByArgs<ExtArgs>
            result: $Utils.Optional<Profile_worked_daysGroupByOutputType>[]
          }
          count: {
            args: Prisma.profile_worked_daysCountArgs<ExtArgs>
            result: $Utils.Optional<Profile_worked_daysCountAggregateOutputType> | number
          }
        }
      }
      profiles: {
        payload: Prisma.$profilesPayload<ExtArgs>
        fields: Prisma.profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findFirst: {
            args: Prisma.profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findMany: {
            args: Prisma.profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          create: {
            args: Prisma.profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          createMany: {
            args: Prisma.profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          delete: {
            args: Prisma.profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          update: {
            args: Prisma.profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          deleteMany: {
            args: Prisma.profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          upsert: {
            args: Prisma.profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.profilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      type_hours: {
        payload: Prisma.$type_hoursPayload<ExtArgs>
        fields: Prisma.type_hoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.type_hoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_hoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.type_hoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_hoursPayload>
          }
          findFirst: {
            args: Prisma.type_hoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_hoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.type_hoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_hoursPayload>
          }
          findMany: {
            args: Prisma.type_hoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_hoursPayload>[]
          }
          create: {
            args: Prisma.type_hoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_hoursPayload>
          }
          createMany: {
            args: Prisma.type_hoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.type_hoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_hoursPayload>[]
          }
          delete: {
            args: Prisma.type_hoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_hoursPayload>
          }
          update: {
            args: Prisma.type_hoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_hoursPayload>
          }
          deleteMany: {
            args: Prisma.type_hoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.type_hoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.type_hoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_hoursPayload>[]
          }
          upsert: {
            args: Prisma.type_hoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_hoursPayload>
          }
          aggregate: {
            args: Prisma.Type_hoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType_hours>
          }
          groupBy: {
            args: Prisma.type_hoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<Type_hoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.type_hoursCountArgs<ExtArgs>
            result: $Utils.Optional<Type_hoursCountAggregateOutputType> | number
          }
        }
      }
      worked_days: {
        payload: Prisma.$worked_daysPayload<ExtArgs>
        fields: Prisma.worked_daysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.worked_daysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worked_daysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.worked_daysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worked_daysPayload>
          }
          findFirst: {
            args: Prisma.worked_daysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worked_daysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.worked_daysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worked_daysPayload>
          }
          findMany: {
            args: Prisma.worked_daysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worked_daysPayload>[]
          }
          create: {
            args: Prisma.worked_daysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worked_daysPayload>
          }
          createMany: {
            args: Prisma.worked_daysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.worked_daysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worked_daysPayload>[]
          }
          delete: {
            args: Prisma.worked_daysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worked_daysPayload>
          }
          update: {
            args: Prisma.worked_daysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worked_daysPayload>
          }
          deleteMany: {
            args: Prisma.worked_daysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.worked_daysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.worked_daysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worked_daysPayload>[]
          }
          upsert: {
            args: Prisma.worked_daysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$worked_daysPayload>
          }
          aggregate: {
            args: Prisma.Worked_daysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorked_days>
          }
          groupBy: {
            args: Prisma.worked_daysGroupByArgs<ExtArgs>
            result: $Utils.Optional<Worked_daysGroupByOutputType>[]
          }
          count: {
            args: Prisma.worked_daysCountArgs<ExtArgs>
            result: $Utils.Optional<Worked_daysCountAggregateOutputType> | number
          }
        }
      }
      monthly_salary: {
        payload: Prisma.$monthly_salaryPayload<ExtArgs>
        fields: Prisma.monthly_salaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.monthly_salaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_salaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.monthly_salaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_salaryPayload>
          }
          findFirst: {
            args: Prisma.monthly_salaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_salaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.monthly_salaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_salaryPayload>
          }
          findMany: {
            args: Prisma.monthly_salaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_salaryPayload>[]
          }
          create: {
            args: Prisma.monthly_salaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_salaryPayload>
          }
          createMany: {
            args: Prisma.monthly_salaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.monthly_salaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_salaryPayload>[]
          }
          delete: {
            args: Prisma.monthly_salaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_salaryPayload>
          }
          update: {
            args: Prisma.monthly_salaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_salaryPayload>
          }
          deleteMany: {
            args: Prisma.monthly_salaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.monthly_salaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.monthly_salaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_salaryPayload>[]
          }
          upsert: {
            args: Prisma.monthly_salaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_salaryPayload>
          }
          aggregate: {
            args: Prisma.Monthly_salaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthly_salary>
          }
          groupBy: {
            args: Prisma.monthly_salaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Monthly_salaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.monthly_salaryCountArgs<ExtArgs>
            result: $Utils.Optional<Monthly_salaryCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    default_hours?: default_hoursOmit
    hours_worked_days?: hours_worked_daysOmit
    profile_worked_days?: profile_worked_daysOmit
    profiles?: profilesOmit
    type_hours?: type_hoursOmit
    worked_days?: worked_daysOmit
    monthly_salary?: monthly_salaryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProfilesCountOutputType
   */

  export type ProfilesCountOutputType = {
    monthly_salary: number
    profile_worked_days: number
  }

  export type ProfilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monthly_salary?: boolean | ProfilesCountOutputTypeCountMonthly_salaryArgs
    profile_worked_days?: boolean | ProfilesCountOutputTypeCountProfile_worked_daysArgs
  }

  // Custom InputTypes
  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilesCountOutputType
     */
    select?: ProfilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeCountMonthly_salaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: monthly_salaryWhereInput
  }

  /**
   * ProfilesCountOutputType without action
   */
  export type ProfilesCountOutputTypeCountProfile_worked_daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profile_worked_daysWhereInput
  }


  /**
   * Count Type Type_hoursCountOutputType
   */

  export type Type_hoursCountOutputType = {
    hours_worked_days: number
  }

  export type Type_hoursCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hours_worked_days?: boolean | Type_hoursCountOutputTypeCountHours_worked_daysArgs
  }

  // Custom InputTypes
  /**
   * Type_hoursCountOutputType without action
   */
  export type Type_hoursCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_hoursCountOutputType
     */
    select?: Type_hoursCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Type_hoursCountOutputType without action
   */
  export type Type_hoursCountOutputTypeCountHours_worked_daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hours_worked_daysWhereInput
  }


  /**
   * Count Type Worked_daysCountOutputType
   */

  export type Worked_daysCountOutputType = {
    hours_worked_days: number
    profile_worked_days: number
  }

  export type Worked_daysCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hours_worked_days?: boolean | Worked_daysCountOutputTypeCountHours_worked_daysArgs
    profile_worked_days?: boolean | Worked_daysCountOutputTypeCountProfile_worked_daysArgs
  }

  // Custom InputTypes
  /**
   * Worked_daysCountOutputType without action
   */
  export type Worked_daysCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worked_daysCountOutputType
     */
    select?: Worked_daysCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Worked_daysCountOutputType without action
   */
  export type Worked_daysCountOutputTypeCountHours_worked_daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hours_worked_daysWhereInput
  }

  /**
   * Worked_daysCountOutputType without action
   */
  export type Worked_daysCountOutputTypeCountProfile_worked_daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profile_worked_daysWhereInput
  }


  /**
   * Models
   */

  /**
   * Model default_hours
   */

  export type AggregateDefault_hours = {
    _count: Default_hoursCountAggregateOutputType | null
    _avg: Default_hoursAvgAggregateOutputType | null
    _sum: Default_hoursSumAggregateOutputType | null
    _min: Default_hoursMinAggregateOutputType | null
    _max: Default_hoursMaxAggregateOutputType | null
  }

  export type Default_hoursAvgAggregateOutputType = {
    id: number | null
  }

  export type Default_hoursSumAggregateOutputType = {
    id: number | null
  }

  export type Default_hoursMinAggregateOutputType = {
    id: number | null
    startHour: string | null
    startMin: string | null
    endHour: string | null
    endMin: string | null
    type_shift: string | null
    start_time: Date | null
    end_time: Date | null
  }

  export type Default_hoursMaxAggregateOutputType = {
    id: number | null
    startHour: string | null
    startMin: string | null
    endHour: string | null
    endMin: string | null
    type_shift: string | null
    start_time: Date | null
    end_time: Date | null
  }

  export type Default_hoursCountAggregateOutputType = {
    id: number
    startHour: number
    startMin: number
    endHour: number
    endMin: number
    type_shift: number
    start_time: number
    end_time: number
    _all: number
  }


  export type Default_hoursAvgAggregateInputType = {
    id?: true
  }

  export type Default_hoursSumAggregateInputType = {
    id?: true
  }

  export type Default_hoursMinAggregateInputType = {
    id?: true
    startHour?: true
    startMin?: true
    endHour?: true
    endMin?: true
    type_shift?: true
    start_time?: true
    end_time?: true
  }

  export type Default_hoursMaxAggregateInputType = {
    id?: true
    startHour?: true
    startMin?: true
    endHour?: true
    endMin?: true
    type_shift?: true
    start_time?: true
    end_time?: true
  }

  export type Default_hoursCountAggregateInputType = {
    id?: true
    startHour?: true
    startMin?: true
    endHour?: true
    endMin?: true
    type_shift?: true
    start_time?: true
    end_time?: true
    _all?: true
  }

  export type Default_hoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which default_hours to aggregate.
     */
    where?: default_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of default_hours to fetch.
     */
    orderBy?: default_hoursOrderByWithRelationInput | default_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: default_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` default_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` default_hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned default_hours
    **/
    _count?: true | Default_hoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Default_hoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Default_hoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Default_hoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Default_hoursMaxAggregateInputType
  }

  export type GetDefault_hoursAggregateType<T extends Default_hoursAggregateArgs> = {
        [P in keyof T & keyof AggregateDefault_hours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDefault_hours[P]>
      : GetScalarType<T[P], AggregateDefault_hours[P]>
  }




  export type default_hoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: default_hoursWhereInput
    orderBy?: default_hoursOrderByWithAggregationInput | default_hoursOrderByWithAggregationInput[]
    by: Default_hoursScalarFieldEnum[] | Default_hoursScalarFieldEnum
    having?: default_hoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Default_hoursCountAggregateInputType | true
    _avg?: Default_hoursAvgAggregateInputType
    _sum?: Default_hoursSumAggregateInputType
    _min?: Default_hoursMinAggregateInputType
    _max?: Default_hoursMaxAggregateInputType
  }

  export type Default_hoursGroupByOutputType = {
    id: number
    startHour: string | null
    startMin: string | null
    endHour: string | null
    endMin: string | null
    type_shift: string | null
    start_time: Date | null
    end_time: Date | null
    _count: Default_hoursCountAggregateOutputType | null
    _avg: Default_hoursAvgAggregateOutputType | null
    _sum: Default_hoursSumAggregateOutputType | null
    _min: Default_hoursMinAggregateOutputType | null
    _max: Default_hoursMaxAggregateOutputType | null
  }

  type GetDefault_hoursGroupByPayload<T extends default_hoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Default_hoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Default_hoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Default_hoursGroupByOutputType[P]>
            : GetScalarType<T[P], Default_hoursGroupByOutputType[P]>
        }
      >
    >


  export type default_hoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startHour?: boolean
    startMin?: boolean
    endHour?: boolean
    endMin?: boolean
    type_shift?: boolean
    start_time?: boolean
    end_time?: boolean
  }, ExtArgs["result"]["default_hours"]>

  export type default_hoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startHour?: boolean
    startMin?: boolean
    endHour?: boolean
    endMin?: boolean
    type_shift?: boolean
    start_time?: boolean
    end_time?: boolean
  }, ExtArgs["result"]["default_hours"]>

  export type default_hoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startHour?: boolean
    startMin?: boolean
    endHour?: boolean
    endMin?: boolean
    type_shift?: boolean
    start_time?: boolean
    end_time?: boolean
  }, ExtArgs["result"]["default_hours"]>

  export type default_hoursSelectScalar = {
    id?: boolean
    startHour?: boolean
    startMin?: boolean
    endHour?: boolean
    endMin?: boolean
    type_shift?: boolean
    start_time?: boolean
    end_time?: boolean
  }

  export type default_hoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startHour" | "startMin" | "endHour" | "endMin" | "type_shift" | "start_time" | "end_time", ExtArgs["result"]["default_hours"]>

  export type $default_hoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "default_hours"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startHour: string | null
      startMin: string | null
      endHour: string | null
      endMin: string | null
      type_shift: string | null
      start_time: Date | null
      end_time: Date | null
    }, ExtArgs["result"]["default_hours"]>
    composites: {}
  }

  type default_hoursGetPayload<S extends boolean | null | undefined | default_hoursDefaultArgs> = $Result.GetResult<Prisma.$default_hoursPayload, S>

  type default_hoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<default_hoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Default_hoursCountAggregateInputType | true
    }

  export interface default_hoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['default_hours'], meta: { name: 'default_hours' } }
    /**
     * Find zero or one Default_hours that matches the filter.
     * @param {default_hoursFindUniqueArgs} args - Arguments to find a Default_hours
     * @example
     * // Get one Default_hours
     * const default_hours = await prisma.default_hours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends default_hoursFindUniqueArgs>(args: SelectSubset<T, default_hoursFindUniqueArgs<ExtArgs>>): Prisma__default_hoursClient<$Result.GetResult<Prisma.$default_hoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Default_hours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {default_hoursFindUniqueOrThrowArgs} args - Arguments to find a Default_hours
     * @example
     * // Get one Default_hours
     * const default_hours = await prisma.default_hours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends default_hoursFindUniqueOrThrowArgs>(args: SelectSubset<T, default_hoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__default_hoursClient<$Result.GetResult<Prisma.$default_hoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Default_hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {default_hoursFindFirstArgs} args - Arguments to find a Default_hours
     * @example
     * // Get one Default_hours
     * const default_hours = await prisma.default_hours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends default_hoursFindFirstArgs>(args?: SelectSubset<T, default_hoursFindFirstArgs<ExtArgs>>): Prisma__default_hoursClient<$Result.GetResult<Prisma.$default_hoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Default_hours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {default_hoursFindFirstOrThrowArgs} args - Arguments to find a Default_hours
     * @example
     * // Get one Default_hours
     * const default_hours = await prisma.default_hours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends default_hoursFindFirstOrThrowArgs>(args?: SelectSubset<T, default_hoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__default_hoursClient<$Result.GetResult<Prisma.$default_hoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Default_hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {default_hoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Default_hours
     * const default_hours = await prisma.default_hours.findMany()
     * 
     * // Get first 10 Default_hours
     * const default_hours = await prisma.default_hours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const default_hoursWithIdOnly = await prisma.default_hours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends default_hoursFindManyArgs>(args?: SelectSubset<T, default_hoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$default_hoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Default_hours.
     * @param {default_hoursCreateArgs} args - Arguments to create a Default_hours.
     * @example
     * // Create one Default_hours
     * const Default_hours = await prisma.default_hours.create({
     *   data: {
     *     // ... data to create a Default_hours
     *   }
     * })
     * 
     */
    create<T extends default_hoursCreateArgs>(args: SelectSubset<T, default_hoursCreateArgs<ExtArgs>>): Prisma__default_hoursClient<$Result.GetResult<Prisma.$default_hoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Default_hours.
     * @param {default_hoursCreateManyArgs} args - Arguments to create many Default_hours.
     * @example
     * // Create many Default_hours
     * const default_hours = await prisma.default_hours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends default_hoursCreateManyArgs>(args?: SelectSubset<T, default_hoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Default_hours and returns the data saved in the database.
     * @param {default_hoursCreateManyAndReturnArgs} args - Arguments to create many Default_hours.
     * @example
     * // Create many Default_hours
     * const default_hours = await prisma.default_hours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Default_hours and only return the `id`
     * const default_hoursWithIdOnly = await prisma.default_hours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends default_hoursCreateManyAndReturnArgs>(args?: SelectSubset<T, default_hoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$default_hoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Default_hours.
     * @param {default_hoursDeleteArgs} args - Arguments to delete one Default_hours.
     * @example
     * // Delete one Default_hours
     * const Default_hours = await prisma.default_hours.delete({
     *   where: {
     *     // ... filter to delete one Default_hours
     *   }
     * })
     * 
     */
    delete<T extends default_hoursDeleteArgs>(args: SelectSubset<T, default_hoursDeleteArgs<ExtArgs>>): Prisma__default_hoursClient<$Result.GetResult<Prisma.$default_hoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Default_hours.
     * @param {default_hoursUpdateArgs} args - Arguments to update one Default_hours.
     * @example
     * // Update one Default_hours
     * const default_hours = await prisma.default_hours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends default_hoursUpdateArgs>(args: SelectSubset<T, default_hoursUpdateArgs<ExtArgs>>): Prisma__default_hoursClient<$Result.GetResult<Prisma.$default_hoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Default_hours.
     * @param {default_hoursDeleteManyArgs} args - Arguments to filter Default_hours to delete.
     * @example
     * // Delete a few Default_hours
     * const { count } = await prisma.default_hours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends default_hoursDeleteManyArgs>(args?: SelectSubset<T, default_hoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Default_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {default_hoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Default_hours
     * const default_hours = await prisma.default_hours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends default_hoursUpdateManyArgs>(args: SelectSubset<T, default_hoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Default_hours and returns the data updated in the database.
     * @param {default_hoursUpdateManyAndReturnArgs} args - Arguments to update many Default_hours.
     * @example
     * // Update many Default_hours
     * const default_hours = await prisma.default_hours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Default_hours and only return the `id`
     * const default_hoursWithIdOnly = await prisma.default_hours.updateManyAndReturn({
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
    updateManyAndReturn<T extends default_hoursUpdateManyAndReturnArgs>(args: SelectSubset<T, default_hoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$default_hoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Default_hours.
     * @param {default_hoursUpsertArgs} args - Arguments to update or create a Default_hours.
     * @example
     * // Update or create a Default_hours
     * const default_hours = await prisma.default_hours.upsert({
     *   create: {
     *     // ... data to create a Default_hours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Default_hours we want to update
     *   }
     * })
     */
    upsert<T extends default_hoursUpsertArgs>(args: SelectSubset<T, default_hoursUpsertArgs<ExtArgs>>): Prisma__default_hoursClient<$Result.GetResult<Prisma.$default_hoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Default_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {default_hoursCountArgs} args - Arguments to filter Default_hours to count.
     * @example
     * // Count the number of Default_hours
     * const count = await prisma.default_hours.count({
     *   where: {
     *     // ... the filter for the Default_hours we want to count
     *   }
     * })
    **/
    count<T extends default_hoursCountArgs>(
      args?: Subset<T, default_hoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Default_hoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Default_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Default_hoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Default_hoursAggregateArgs>(args: Subset<T, Default_hoursAggregateArgs>): Prisma.PrismaPromise<GetDefault_hoursAggregateType<T>>

    /**
     * Group by Default_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {default_hoursGroupByArgs} args - Group by arguments.
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
      T extends default_hoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: default_hoursGroupByArgs['orderBy'] }
        : { orderBy?: default_hoursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, default_hoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDefault_hoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the default_hours model
   */
  readonly fields: default_hoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for default_hours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__default_hoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the default_hours model
   */
  interface default_hoursFieldRefs {
    readonly id: FieldRef<"default_hours", 'Int'>
    readonly startHour: FieldRef<"default_hours", 'String'>
    readonly startMin: FieldRef<"default_hours", 'String'>
    readonly endHour: FieldRef<"default_hours", 'String'>
    readonly endMin: FieldRef<"default_hours", 'String'>
    readonly type_shift: FieldRef<"default_hours", 'String'>
    readonly start_time: FieldRef<"default_hours", 'DateTime'>
    readonly end_time: FieldRef<"default_hours", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * default_hours findUnique
   */
  export type default_hoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the default_hours
     */
    select?: default_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the default_hours
     */
    omit?: default_hoursOmit<ExtArgs> | null
    /**
     * Filter, which default_hours to fetch.
     */
    where: default_hoursWhereUniqueInput
  }

  /**
   * default_hours findUniqueOrThrow
   */
  export type default_hoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the default_hours
     */
    select?: default_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the default_hours
     */
    omit?: default_hoursOmit<ExtArgs> | null
    /**
     * Filter, which default_hours to fetch.
     */
    where: default_hoursWhereUniqueInput
  }

  /**
   * default_hours findFirst
   */
  export type default_hoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the default_hours
     */
    select?: default_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the default_hours
     */
    omit?: default_hoursOmit<ExtArgs> | null
    /**
     * Filter, which default_hours to fetch.
     */
    where?: default_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of default_hours to fetch.
     */
    orderBy?: default_hoursOrderByWithRelationInput | default_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for default_hours.
     */
    cursor?: default_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` default_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` default_hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of default_hours.
     */
    distinct?: Default_hoursScalarFieldEnum | Default_hoursScalarFieldEnum[]
  }

  /**
   * default_hours findFirstOrThrow
   */
  export type default_hoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the default_hours
     */
    select?: default_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the default_hours
     */
    omit?: default_hoursOmit<ExtArgs> | null
    /**
     * Filter, which default_hours to fetch.
     */
    where?: default_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of default_hours to fetch.
     */
    orderBy?: default_hoursOrderByWithRelationInput | default_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for default_hours.
     */
    cursor?: default_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` default_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` default_hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of default_hours.
     */
    distinct?: Default_hoursScalarFieldEnum | Default_hoursScalarFieldEnum[]
  }

  /**
   * default_hours findMany
   */
  export type default_hoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the default_hours
     */
    select?: default_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the default_hours
     */
    omit?: default_hoursOmit<ExtArgs> | null
    /**
     * Filter, which default_hours to fetch.
     */
    where?: default_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of default_hours to fetch.
     */
    orderBy?: default_hoursOrderByWithRelationInput | default_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing default_hours.
     */
    cursor?: default_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` default_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` default_hours.
     */
    skip?: number
    distinct?: Default_hoursScalarFieldEnum | Default_hoursScalarFieldEnum[]
  }

  /**
   * default_hours create
   */
  export type default_hoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the default_hours
     */
    select?: default_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the default_hours
     */
    omit?: default_hoursOmit<ExtArgs> | null
    /**
     * The data needed to create a default_hours.
     */
    data?: XOR<default_hoursCreateInput, default_hoursUncheckedCreateInput>
  }

  /**
   * default_hours createMany
   */
  export type default_hoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many default_hours.
     */
    data: default_hoursCreateManyInput | default_hoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * default_hours createManyAndReturn
   */
  export type default_hoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the default_hours
     */
    select?: default_hoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the default_hours
     */
    omit?: default_hoursOmit<ExtArgs> | null
    /**
     * The data used to create many default_hours.
     */
    data: default_hoursCreateManyInput | default_hoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * default_hours update
   */
  export type default_hoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the default_hours
     */
    select?: default_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the default_hours
     */
    omit?: default_hoursOmit<ExtArgs> | null
    /**
     * The data needed to update a default_hours.
     */
    data: XOR<default_hoursUpdateInput, default_hoursUncheckedUpdateInput>
    /**
     * Choose, which default_hours to update.
     */
    where: default_hoursWhereUniqueInput
  }

  /**
   * default_hours updateMany
   */
  export type default_hoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update default_hours.
     */
    data: XOR<default_hoursUpdateManyMutationInput, default_hoursUncheckedUpdateManyInput>
    /**
     * Filter which default_hours to update
     */
    where?: default_hoursWhereInput
    /**
     * Limit how many default_hours to update.
     */
    limit?: number
  }

  /**
   * default_hours updateManyAndReturn
   */
  export type default_hoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the default_hours
     */
    select?: default_hoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the default_hours
     */
    omit?: default_hoursOmit<ExtArgs> | null
    /**
     * The data used to update default_hours.
     */
    data: XOR<default_hoursUpdateManyMutationInput, default_hoursUncheckedUpdateManyInput>
    /**
     * Filter which default_hours to update
     */
    where?: default_hoursWhereInput
    /**
     * Limit how many default_hours to update.
     */
    limit?: number
  }

  /**
   * default_hours upsert
   */
  export type default_hoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the default_hours
     */
    select?: default_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the default_hours
     */
    omit?: default_hoursOmit<ExtArgs> | null
    /**
     * The filter to search for the default_hours to update in case it exists.
     */
    where: default_hoursWhereUniqueInput
    /**
     * In case the default_hours found by the `where` argument doesn't exist, create a new default_hours with this data.
     */
    create: XOR<default_hoursCreateInput, default_hoursUncheckedCreateInput>
    /**
     * In case the default_hours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<default_hoursUpdateInput, default_hoursUncheckedUpdateInput>
  }

  /**
   * default_hours delete
   */
  export type default_hoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the default_hours
     */
    select?: default_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the default_hours
     */
    omit?: default_hoursOmit<ExtArgs> | null
    /**
     * Filter which default_hours to delete.
     */
    where: default_hoursWhereUniqueInput
  }

  /**
   * default_hours deleteMany
   */
  export type default_hoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which default_hours to delete
     */
    where?: default_hoursWhereInput
    /**
     * Limit how many default_hours to delete.
     */
    limit?: number
  }

  /**
   * default_hours without action
   */
  export type default_hoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the default_hours
     */
    select?: default_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the default_hours
     */
    omit?: default_hoursOmit<ExtArgs> | null
  }


  /**
   * Model hours_worked_days
   */

  export type AggregateHours_worked_days = {
    _count: Hours_worked_daysCountAggregateOutputType | null
    _avg: Hours_worked_daysAvgAggregateOutputType | null
    _sum: Hours_worked_daysSumAggregateOutputType | null
    _min: Hours_worked_daysMinAggregateOutputType | null
    _max: Hours_worked_daysMaxAggregateOutputType | null
  }

  export type Hours_worked_daysAvgAggregateOutputType = {
    id: number | null
    worked_day_id: number | null
    hours: number | null
    type_hours_id: number | null
  }

  export type Hours_worked_daysSumAggregateOutputType = {
    id: number | null
    worked_day_id: number | null
    hours: number | null
    type_hours_id: number | null
  }

  export type Hours_worked_daysMinAggregateOutputType = {
    id: number | null
    worked_day_id: number | null
    hours: number | null
    type_hours_id: number | null
  }

  export type Hours_worked_daysMaxAggregateOutputType = {
    id: number | null
    worked_day_id: number | null
    hours: number | null
    type_hours_id: number | null
  }

  export type Hours_worked_daysCountAggregateOutputType = {
    id: number
    worked_day_id: number
    hours: number
    type_hours_id: number
    _all: number
  }


  export type Hours_worked_daysAvgAggregateInputType = {
    id?: true
    worked_day_id?: true
    hours?: true
    type_hours_id?: true
  }

  export type Hours_worked_daysSumAggregateInputType = {
    id?: true
    worked_day_id?: true
    hours?: true
    type_hours_id?: true
  }

  export type Hours_worked_daysMinAggregateInputType = {
    id?: true
    worked_day_id?: true
    hours?: true
    type_hours_id?: true
  }

  export type Hours_worked_daysMaxAggregateInputType = {
    id?: true
    worked_day_id?: true
    hours?: true
    type_hours_id?: true
  }

  export type Hours_worked_daysCountAggregateInputType = {
    id?: true
    worked_day_id?: true
    hours?: true
    type_hours_id?: true
    _all?: true
  }

  export type Hours_worked_daysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hours_worked_days to aggregate.
     */
    where?: hours_worked_daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hours_worked_days to fetch.
     */
    orderBy?: hours_worked_daysOrderByWithRelationInput | hours_worked_daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hours_worked_daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hours_worked_days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hours_worked_days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hours_worked_days
    **/
    _count?: true | Hours_worked_daysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hours_worked_daysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hours_worked_daysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hours_worked_daysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hours_worked_daysMaxAggregateInputType
  }

  export type GetHours_worked_daysAggregateType<T extends Hours_worked_daysAggregateArgs> = {
        [P in keyof T & keyof AggregateHours_worked_days]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHours_worked_days[P]>
      : GetScalarType<T[P], AggregateHours_worked_days[P]>
  }




  export type hours_worked_daysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hours_worked_daysWhereInput
    orderBy?: hours_worked_daysOrderByWithAggregationInput | hours_worked_daysOrderByWithAggregationInput[]
    by: Hours_worked_daysScalarFieldEnum[] | Hours_worked_daysScalarFieldEnum
    having?: hours_worked_daysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hours_worked_daysCountAggregateInputType | true
    _avg?: Hours_worked_daysAvgAggregateInputType
    _sum?: Hours_worked_daysSumAggregateInputType
    _min?: Hours_worked_daysMinAggregateInputType
    _max?: Hours_worked_daysMaxAggregateInputType
  }

  export type Hours_worked_daysGroupByOutputType = {
    id: number
    worked_day_id: number | null
    hours: number | null
    type_hours_id: number | null
    _count: Hours_worked_daysCountAggregateOutputType | null
    _avg: Hours_worked_daysAvgAggregateOutputType | null
    _sum: Hours_worked_daysSumAggregateOutputType | null
    _min: Hours_worked_daysMinAggregateOutputType | null
    _max: Hours_worked_daysMaxAggregateOutputType | null
  }

  type GetHours_worked_daysGroupByPayload<T extends hours_worked_daysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hours_worked_daysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hours_worked_daysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hours_worked_daysGroupByOutputType[P]>
            : GetScalarType<T[P], Hours_worked_daysGroupByOutputType[P]>
        }
      >
    >


  export type hours_worked_daysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worked_day_id?: boolean
    hours?: boolean
    type_hours_id?: boolean
    type_hours?: boolean | hours_worked_days$type_hoursArgs<ExtArgs>
    worked_days?: boolean | hours_worked_days$worked_daysArgs<ExtArgs>
  }, ExtArgs["result"]["hours_worked_days"]>

  export type hours_worked_daysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worked_day_id?: boolean
    hours?: boolean
    type_hours_id?: boolean
    type_hours?: boolean | hours_worked_days$type_hoursArgs<ExtArgs>
    worked_days?: boolean | hours_worked_days$worked_daysArgs<ExtArgs>
  }, ExtArgs["result"]["hours_worked_days"]>

  export type hours_worked_daysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worked_day_id?: boolean
    hours?: boolean
    type_hours_id?: boolean
    type_hours?: boolean | hours_worked_days$type_hoursArgs<ExtArgs>
    worked_days?: boolean | hours_worked_days$worked_daysArgs<ExtArgs>
  }, ExtArgs["result"]["hours_worked_days"]>

  export type hours_worked_daysSelectScalar = {
    id?: boolean
    worked_day_id?: boolean
    hours?: boolean
    type_hours_id?: boolean
  }

  export type hours_worked_daysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "worked_day_id" | "hours" | "type_hours_id", ExtArgs["result"]["hours_worked_days"]>
  export type hours_worked_daysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type_hours?: boolean | hours_worked_days$type_hoursArgs<ExtArgs>
    worked_days?: boolean | hours_worked_days$worked_daysArgs<ExtArgs>
  }
  export type hours_worked_daysIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type_hours?: boolean | hours_worked_days$type_hoursArgs<ExtArgs>
    worked_days?: boolean | hours_worked_days$worked_daysArgs<ExtArgs>
  }
  export type hours_worked_daysIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type_hours?: boolean | hours_worked_days$type_hoursArgs<ExtArgs>
    worked_days?: boolean | hours_worked_days$worked_daysArgs<ExtArgs>
  }

  export type $hours_worked_daysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hours_worked_days"
    objects: {
      type_hours: Prisma.$type_hoursPayload<ExtArgs> | null
      worked_days: Prisma.$worked_daysPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      worked_day_id: number | null
      hours: number | null
      type_hours_id: number | null
    }, ExtArgs["result"]["hours_worked_days"]>
    composites: {}
  }

  type hours_worked_daysGetPayload<S extends boolean | null | undefined | hours_worked_daysDefaultArgs> = $Result.GetResult<Prisma.$hours_worked_daysPayload, S>

  type hours_worked_daysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hours_worked_daysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hours_worked_daysCountAggregateInputType | true
    }

  export interface hours_worked_daysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hours_worked_days'], meta: { name: 'hours_worked_days' } }
    /**
     * Find zero or one Hours_worked_days that matches the filter.
     * @param {hours_worked_daysFindUniqueArgs} args - Arguments to find a Hours_worked_days
     * @example
     * // Get one Hours_worked_days
     * const hours_worked_days = await prisma.hours_worked_days.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hours_worked_daysFindUniqueArgs>(args: SelectSubset<T, hours_worked_daysFindUniqueArgs<ExtArgs>>): Prisma__hours_worked_daysClient<$Result.GetResult<Prisma.$hours_worked_daysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hours_worked_days that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hours_worked_daysFindUniqueOrThrowArgs} args - Arguments to find a Hours_worked_days
     * @example
     * // Get one Hours_worked_days
     * const hours_worked_days = await prisma.hours_worked_days.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hours_worked_daysFindUniqueOrThrowArgs>(args: SelectSubset<T, hours_worked_daysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hours_worked_daysClient<$Result.GetResult<Prisma.$hours_worked_daysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hours_worked_days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hours_worked_daysFindFirstArgs} args - Arguments to find a Hours_worked_days
     * @example
     * // Get one Hours_worked_days
     * const hours_worked_days = await prisma.hours_worked_days.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hours_worked_daysFindFirstArgs>(args?: SelectSubset<T, hours_worked_daysFindFirstArgs<ExtArgs>>): Prisma__hours_worked_daysClient<$Result.GetResult<Prisma.$hours_worked_daysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hours_worked_days that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hours_worked_daysFindFirstOrThrowArgs} args - Arguments to find a Hours_worked_days
     * @example
     * // Get one Hours_worked_days
     * const hours_worked_days = await prisma.hours_worked_days.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hours_worked_daysFindFirstOrThrowArgs>(args?: SelectSubset<T, hours_worked_daysFindFirstOrThrowArgs<ExtArgs>>): Prisma__hours_worked_daysClient<$Result.GetResult<Prisma.$hours_worked_daysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hours_worked_days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hours_worked_daysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hours_worked_days
     * const hours_worked_days = await prisma.hours_worked_days.findMany()
     * 
     * // Get first 10 Hours_worked_days
     * const hours_worked_days = await prisma.hours_worked_days.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hours_worked_daysWithIdOnly = await prisma.hours_worked_days.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hours_worked_daysFindManyArgs>(args?: SelectSubset<T, hours_worked_daysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hours_worked_daysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hours_worked_days.
     * @param {hours_worked_daysCreateArgs} args - Arguments to create a Hours_worked_days.
     * @example
     * // Create one Hours_worked_days
     * const Hours_worked_days = await prisma.hours_worked_days.create({
     *   data: {
     *     // ... data to create a Hours_worked_days
     *   }
     * })
     * 
     */
    create<T extends hours_worked_daysCreateArgs>(args: SelectSubset<T, hours_worked_daysCreateArgs<ExtArgs>>): Prisma__hours_worked_daysClient<$Result.GetResult<Prisma.$hours_worked_daysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hours_worked_days.
     * @param {hours_worked_daysCreateManyArgs} args - Arguments to create many Hours_worked_days.
     * @example
     * // Create many Hours_worked_days
     * const hours_worked_days = await prisma.hours_worked_days.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hours_worked_daysCreateManyArgs>(args?: SelectSubset<T, hours_worked_daysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hours_worked_days and returns the data saved in the database.
     * @param {hours_worked_daysCreateManyAndReturnArgs} args - Arguments to create many Hours_worked_days.
     * @example
     * // Create many Hours_worked_days
     * const hours_worked_days = await prisma.hours_worked_days.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hours_worked_days and only return the `id`
     * const hours_worked_daysWithIdOnly = await prisma.hours_worked_days.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hours_worked_daysCreateManyAndReturnArgs>(args?: SelectSubset<T, hours_worked_daysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hours_worked_daysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hours_worked_days.
     * @param {hours_worked_daysDeleteArgs} args - Arguments to delete one Hours_worked_days.
     * @example
     * // Delete one Hours_worked_days
     * const Hours_worked_days = await prisma.hours_worked_days.delete({
     *   where: {
     *     // ... filter to delete one Hours_worked_days
     *   }
     * })
     * 
     */
    delete<T extends hours_worked_daysDeleteArgs>(args: SelectSubset<T, hours_worked_daysDeleteArgs<ExtArgs>>): Prisma__hours_worked_daysClient<$Result.GetResult<Prisma.$hours_worked_daysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hours_worked_days.
     * @param {hours_worked_daysUpdateArgs} args - Arguments to update one Hours_worked_days.
     * @example
     * // Update one Hours_worked_days
     * const hours_worked_days = await prisma.hours_worked_days.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hours_worked_daysUpdateArgs>(args: SelectSubset<T, hours_worked_daysUpdateArgs<ExtArgs>>): Prisma__hours_worked_daysClient<$Result.GetResult<Prisma.$hours_worked_daysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hours_worked_days.
     * @param {hours_worked_daysDeleteManyArgs} args - Arguments to filter Hours_worked_days to delete.
     * @example
     * // Delete a few Hours_worked_days
     * const { count } = await prisma.hours_worked_days.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hours_worked_daysDeleteManyArgs>(args?: SelectSubset<T, hours_worked_daysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hours_worked_days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hours_worked_daysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hours_worked_days
     * const hours_worked_days = await prisma.hours_worked_days.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hours_worked_daysUpdateManyArgs>(args: SelectSubset<T, hours_worked_daysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hours_worked_days and returns the data updated in the database.
     * @param {hours_worked_daysUpdateManyAndReturnArgs} args - Arguments to update many Hours_worked_days.
     * @example
     * // Update many Hours_worked_days
     * const hours_worked_days = await prisma.hours_worked_days.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hours_worked_days and only return the `id`
     * const hours_worked_daysWithIdOnly = await prisma.hours_worked_days.updateManyAndReturn({
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
    updateManyAndReturn<T extends hours_worked_daysUpdateManyAndReturnArgs>(args: SelectSubset<T, hours_worked_daysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hours_worked_daysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hours_worked_days.
     * @param {hours_worked_daysUpsertArgs} args - Arguments to update or create a Hours_worked_days.
     * @example
     * // Update or create a Hours_worked_days
     * const hours_worked_days = await prisma.hours_worked_days.upsert({
     *   create: {
     *     // ... data to create a Hours_worked_days
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hours_worked_days we want to update
     *   }
     * })
     */
    upsert<T extends hours_worked_daysUpsertArgs>(args: SelectSubset<T, hours_worked_daysUpsertArgs<ExtArgs>>): Prisma__hours_worked_daysClient<$Result.GetResult<Prisma.$hours_worked_daysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hours_worked_days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hours_worked_daysCountArgs} args - Arguments to filter Hours_worked_days to count.
     * @example
     * // Count the number of Hours_worked_days
     * const count = await prisma.hours_worked_days.count({
     *   where: {
     *     // ... the filter for the Hours_worked_days we want to count
     *   }
     * })
    **/
    count<T extends hours_worked_daysCountArgs>(
      args?: Subset<T, hours_worked_daysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hours_worked_daysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hours_worked_days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hours_worked_daysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hours_worked_daysAggregateArgs>(args: Subset<T, Hours_worked_daysAggregateArgs>): Prisma.PrismaPromise<GetHours_worked_daysAggregateType<T>>

    /**
     * Group by Hours_worked_days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hours_worked_daysGroupByArgs} args - Group by arguments.
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
      T extends hours_worked_daysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hours_worked_daysGroupByArgs['orderBy'] }
        : { orderBy?: hours_worked_daysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hours_worked_daysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHours_worked_daysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hours_worked_days model
   */
  readonly fields: hours_worked_daysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hours_worked_days.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hours_worked_daysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type_hours<T extends hours_worked_days$type_hoursArgs<ExtArgs> = {}>(args?: Subset<T, hours_worked_days$type_hoursArgs<ExtArgs>>): Prisma__type_hoursClient<$Result.GetResult<Prisma.$type_hoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    worked_days<T extends hours_worked_days$worked_daysArgs<ExtArgs> = {}>(args?: Subset<T, hours_worked_days$worked_daysArgs<ExtArgs>>): Prisma__worked_daysClient<$Result.GetResult<Prisma.$worked_daysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the hours_worked_days model
   */
  interface hours_worked_daysFieldRefs {
    readonly id: FieldRef<"hours_worked_days", 'Int'>
    readonly worked_day_id: FieldRef<"hours_worked_days", 'Int'>
    readonly hours: FieldRef<"hours_worked_days", 'Float'>
    readonly type_hours_id: FieldRef<"hours_worked_days", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * hours_worked_days findUnique
   */
  export type hours_worked_daysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which hours_worked_days to fetch.
     */
    where: hours_worked_daysWhereUniqueInput
  }

  /**
   * hours_worked_days findUniqueOrThrow
   */
  export type hours_worked_daysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which hours_worked_days to fetch.
     */
    where: hours_worked_daysWhereUniqueInput
  }

  /**
   * hours_worked_days findFirst
   */
  export type hours_worked_daysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which hours_worked_days to fetch.
     */
    where?: hours_worked_daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hours_worked_days to fetch.
     */
    orderBy?: hours_worked_daysOrderByWithRelationInput | hours_worked_daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hours_worked_days.
     */
    cursor?: hours_worked_daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hours_worked_days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hours_worked_days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hours_worked_days.
     */
    distinct?: Hours_worked_daysScalarFieldEnum | Hours_worked_daysScalarFieldEnum[]
  }

  /**
   * hours_worked_days findFirstOrThrow
   */
  export type hours_worked_daysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which hours_worked_days to fetch.
     */
    where?: hours_worked_daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hours_worked_days to fetch.
     */
    orderBy?: hours_worked_daysOrderByWithRelationInput | hours_worked_daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hours_worked_days.
     */
    cursor?: hours_worked_daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hours_worked_days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hours_worked_days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hours_worked_days.
     */
    distinct?: Hours_worked_daysScalarFieldEnum | Hours_worked_daysScalarFieldEnum[]
  }

  /**
   * hours_worked_days findMany
   */
  export type hours_worked_daysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which hours_worked_days to fetch.
     */
    where?: hours_worked_daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hours_worked_days to fetch.
     */
    orderBy?: hours_worked_daysOrderByWithRelationInput | hours_worked_daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hours_worked_days.
     */
    cursor?: hours_worked_daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hours_worked_days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hours_worked_days.
     */
    skip?: number
    distinct?: Hours_worked_daysScalarFieldEnum | Hours_worked_daysScalarFieldEnum[]
  }

  /**
   * hours_worked_days create
   */
  export type hours_worked_daysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysInclude<ExtArgs> | null
    /**
     * The data needed to create a hours_worked_days.
     */
    data?: XOR<hours_worked_daysCreateInput, hours_worked_daysUncheckedCreateInput>
  }

  /**
   * hours_worked_days createMany
   */
  export type hours_worked_daysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hours_worked_days.
     */
    data: hours_worked_daysCreateManyInput | hours_worked_daysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hours_worked_days createManyAndReturn
   */
  export type hours_worked_daysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * The data used to create many hours_worked_days.
     */
    data: hours_worked_daysCreateManyInput | hours_worked_daysCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * hours_worked_days update
   */
  export type hours_worked_daysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysInclude<ExtArgs> | null
    /**
     * The data needed to update a hours_worked_days.
     */
    data: XOR<hours_worked_daysUpdateInput, hours_worked_daysUncheckedUpdateInput>
    /**
     * Choose, which hours_worked_days to update.
     */
    where: hours_worked_daysWhereUniqueInput
  }

  /**
   * hours_worked_days updateMany
   */
  export type hours_worked_daysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hours_worked_days.
     */
    data: XOR<hours_worked_daysUpdateManyMutationInput, hours_worked_daysUncheckedUpdateManyInput>
    /**
     * Filter which hours_worked_days to update
     */
    where?: hours_worked_daysWhereInput
    /**
     * Limit how many hours_worked_days to update.
     */
    limit?: number
  }

  /**
   * hours_worked_days updateManyAndReturn
   */
  export type hours_worked_daysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * The data used to update hours_worked_days.
     */
    data: XOR<hours_worked_daysUpdateManyMutationInput, hours_worked_daysUncheckedUpdateManyInput>
    /**
     * Filter which hours_worked_days to update
     */
    where?: hours_worked_daysWhereInput
    /**
     * Limit how many hours_worked_days to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * hours_worked_days upsert
   */
  export type hours_worked_daysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysInclude<ExtArgs> | null
    /**
     * The filter to search for the hours_worked_days to update in case it exists.
     */
    where: hours_worked_daysWhereUniqueInput
    /**
     * In case the hours_worked_days found by the `where` argument doesn't exist, create a new hours_worked_days with this data.
     */
    create: XOR<hours_worked_daysCreateInput, hours_worked_daysUncheckedCreateInput>
    /**
     * In case the hours_worked_days was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hours_worked_daysUpdateInput, hours_worked_daysUncheckedUpdateInput>
  }

  /**
   * hours_worked_days delete
   */
  export type hours_worked_daysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysInclude<ExtArgs> | null
    /**
     * Filter which hours_worked_days to delete.
     */
    where: hours_worked_daysWhereUniqueInput
  }

  /**
   * hours_worked_days deleteMany
   */
  export type hours_worked_daysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hours_worked_days to delete
     */
    where?: hours_worked_daysWhereInput
    /**
     * Limit how many hours_worked_days to delete.
     */
    limit?: number
  }

  /**
   * hours_worked_days.type_hours
   */
  export type hours_worked_days$type_hoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_hours
     */
    select?: type_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_hours
     */
    omit?: type_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_hoursInclude<ExtArgs> | null
    where?: type_hoursWhereInput
  }

  /**
   * hours_worked_days.worked_days
   */
  export type hours_worked_days$worked_daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worked_daysInclude<ExtArgs> | null
    where?: worked_daysWhereInput
  }

  /**
   * hours_worked_days without action
   */
  export type hours_worked_daysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysInclude<ExtArgs> | null
  }


  /**
   * Model profile_worked_days
   */

  export type AggregateProfile_worked_days = {
    _count: Profile_worked_daysCountAggregateOutputType | null
    _avg: Profile_worked_daysAvgAggregateOutputType | null
    _sum: Profile_worked_daysSumAggregateOutputType | null
    _min: Profile_worked_daysMinAggregateOutputType | null
    _max: Profile_worked_daysMaxAggregateOutputType | null
  }

  export type Profile_worked_daysAvgAggregateOutputType = {
    id: number | null
    worked_day_id: number | null
    profile_id: number | null
  }

  export type Profile_worked_daysSumAggregateOutputType = {
    id: number | null
    worked_day_id: number | null
    profile_id: number | null
  }

  export type Profile_worked_daysMinAggregateOutputType = {
    id: number | null
    worked_day_id: number | null
    profile_id: number | null
  }

  export type Profile_worked_daysMaxAggregateOutputType = {
    id: number | null
    worked_day_id: number | null
    profile_id: number | null
  }

  export type Profile_worked_daysCountAggregateOutputType = {
    id: number
    worked_day_id: number
    profile_id: number
    _all: number
  }


  export type Profile_worked_daysAvgAggregateInputType = {
    id?: true
    worked_day_id?: true
    profile_id?: true
  }

  export type Profile_worked_daysSumAggregateInputType = {
    id?: true
    worked_day_id?: true
    profile_id?: true
  }

  export type Profile_worked_daysMinAggregateInputType = {
    id?: true
    worked_day_id?: true
    profile_id?: true
  }

  export type Profile_worked_daysMaxAggregateInputType = {
    id?: true
    worked_day_id?: true
    profile_id?: true
  }

  export type Profile_worked_daysCountAggregateInputType = {
    id?: true
    worked_day_id?: true
    profile_id?: true
    _all?: true
  }

  export type Profile_worked_daysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profile_worked_days to aggregate.
     */
    where?: profile_worked_daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profile_worked_days to fetch.
     */
    orderBy?: profile_worked_daysOrderByWithRelationInput | profile_worked_daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profile_worked_daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profile_worked_days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profile_worked_days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profile_worked_days
    **/
    _count?: true | Profile_worked_daysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Profile_worked_daysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Profile_worked_daysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Profile_worked_daysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Profile_worked_daysMaxAggregateInputType
  }

  export type GetProfile_worked_daysAggregateType<T extends Profile_worked_daysAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile_worked_days]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile_worked_days[P]>
      : GetScalarType<T[P], AggregateProfile_worked_days[P]>
  }




  export type profile_worked_daysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profile_worked_daysWhereInput
    orderBy?: profile_worked_daysOrderByWithAggregationInput | profile_worked_daysOrderByWithAggregationInput[]
    by: Profile_worked_daysScalarFieldEnum[] | Profile_worked_daysScalarFieldEnum
    having?: profile_worked_daysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Profile_worked_daysCountAggregateInputType | true
    _avg?: Profile_worked_daysAvgAggregateInputType
    _sum?: Profile_worked_daysSumAggregateInputType
    _min?: Profile_worked_daysMinAggregateInputType
    _max?: Profile_worked_daysMaxAggregateInputType
  }

  export type Profile_worked_daysGroupByOutputType = {
    id: number
    worked_day_id: number | null
    profile_id: number | null
    _count: Profile_worked_daysCountAggregateOutputType | null
    _avg: Profile_worked_daysAvgAggregateOutputType | null
    _sum: Profile_worked_daysSumAggregateOutputType | null
    _min: Profile_worked_daysMinAggregateOutputType | null
    _max: Profile_worked_daysMaxAggregateOutputType | null
  }

  type GetProfile_worked_daysGroupByPayload<T extends profile_worked_daysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Profile_worked_daysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Profile_worked_daysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Profile_worked_daysGroupByOutputType[P]>
            : GetScalarType<T[P], Profile_worked_daysGroupByOutputType[P]>
        }
      >
    >


  export type profile_worked_daysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worked_day_id?: boolean
    profile_id?: boolean
    profiles?: boolean | profile_worked_days$profilesArgs<ExtArgs>
    worked_days?: boolean | profile_worked_days$worked_daysArgs<ExtArgs>
  }, ExtArgs["result"]["profile_worked_days"]>

  export type profile_worked_daysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worked_day_id?: boolean
    profile_id?: boolean
    profiles?: boolean | profile_worked_days$profilesArgs<ExtArgs>
    worked_days?: boolean | profile_worked_days$worked_daysArgs<ExtArgs>
  }, ExtArgs["result"]["profile_worked_days"]>

  export type profile_worked_daysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worked_day_id?: boolean
    profile_id?: boolean
    profiles?: boolean | profile_worked_days$profilesArgs<ExtArgs>
    worked_days?: boolean | profile_worked_days$worked_daysArgs<ExtArgs>
  }, ExtArgs["result"]["profile_worked_days"]>

  export type profile_worked_daysSelectScalar = {
    id?: boolean
    worked_day_id?: boolean
    profile_id?: boolean
  }

  export type profile_worked_daysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "worked_day_id" | "profile_id", ExtArgs["result"]["profile_worked_days"]>
  export type profile_worked_daysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | profile_worked_days$profilesArgs<ExtArgs>
    worked_days?: boolean | profile_worked_days$worked_daysArgs<ExtArgs>
  }
  export type profile_worked_daysIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | profile_worked_days$profilesArgs<ExtArgs>
    worked_days?: boolean | profile_worked_days$worked_daysArgs<ExtArgs>
  }
  export type profile_worked_daysIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | profile_worked_days$profilesArgs<ExtArgs>
    worked_days?: boolean | profile_worked_days$worked_daysArgs<ExtArgs>
  }

  export type $profile_worked_daysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profile_worked_days"
    objects: {
      profiles: Prisma.$profilesPayload<ExtArgs> | null
      worked_days: Prisma.$worked_daysPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      worked_day_id: number | null
      profile_id: number | null
    }, ExtArgs["result"]["profile_worked_days"]>
    composites: {}
  }

  type profile_worked_daysGetPayload<S extends boolean | null | undefined | profile_worked_daysDefaultArgs> = $Result.GetResult<Prisma.$profile_worked_daysPayload, S>

  type profile_worked_daysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profile_worked_daysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Profile_worked_daysCountAggregateInputType | true
    }

  export interface profile_worked_daysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profile_worked_days'], meta: { name: 'profile_worked_days' } }
    /**
     * Find zero or one Profile_worked_days that matches the filter.
     * @param {profile_worked_daysFindUniqueArgs} args - Arguments to find a Profile_worked_days
     * @example
     * // Get one Profile_worked_days
     * const profile_worked_days = await prisma.profile_worked_days.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profile_worked_daysFindUniqueArgs>(args: SelectSubset<T, profile_worked_daysFindUniqueArgs<ExtArgs>>): Prisma__profile_worked_daysClient<$Result.GetResult<Prisma.$profile_worked_daysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile_worked_days that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profile_worked_daysFindUniqueOrThrowArgs} args - Arguments to find a Profile_worked_days
     * @example
     * // Get one Profile_worked_days
     * const profile_worked_days = await prisma.profile_worked_days.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profile_worked_daysFindUniqueOrThrowArgs>(args: SelectSubset<T, profile_worked_daysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profile_worked_daysClient<$Result.GetResult<Prisma.$profile_worked_daysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile_worked_days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_worked_daysFindFirstArgs} args - Arguments to find a Profile_worked_days
     * @example
     * // Get one Profile_worked_days
     * const profile_worked_days = await prisma.profile_worked_days.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profile_worked_daysFindFirstArgs>(args?: SelectSubset<T, profile_worked_daysFindFirstArgs<ExtArgs>>): Prisma__profile_worked_daysClient<$Result.GetResult<Prisma.$profile_worked_daysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile_worked_days that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_worked_daysFindFirstOrThrowArgs} args - Arguments to find a Profile_worked_days
     * @example
     * // Get one Profile_worked_days
     * const profile_worked_days = await prisma.profile_worked_days.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profile_worked_daysFindFirstOrThrowArgs>(args?: SelectSubset<T, profile_worked_daysFindFirstOrThrowArgs<ExtArgs>>): Prisma__profile_worked_daysClient<$Result.GetResult<Prisma.$profile_worked_daysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profile_worked_days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_worked_daysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profile_worked_days
     * const profile_worked_days = await prisma.profile_worked_days.findMany()
     * 
     * // Get first 10 Profile_worked_days
     * const profile_worked_days = await prisma.profile_worked_days.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profile_worked_daysWithIdOnly = await prisma.profile_worked_days.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends profile_worked_daysFindManyArgs>(args?: SelectSubset<T, profile_worked_daysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profile_worked_daysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile_worked_days.
     * @param {profile_worked_daysCreateArgs} args - Arguments to create a Profile_worked_days.
     * @example
     * // Create one Profile_worked_days
     * const Profile_worked_days = await prisma.profile_worked_days.create({
     *   data: {
     *     // ... data to create a Profile_worked_days
     *   }
     * })
     * 
     */
    create<T extends profile_worked_daysCreateArgs>(args: SelectSubset<T, profile_worked_daysCreateArgs<ExtArgs>>): Prisma__profile_worked_daysClient<$Result.GetResult<Prisma.$profile_worked_daysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profile_worked_days.
     * @param {profile_worked_daysCreateManyArgs} args - Arguments to create many Profile_worked_days.
     * @example
     * // Create many Profile_worked_days
     * const profile_worked_days = await prisma.profile_worked_days.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profile_worked_daysCreateManyArgs>(args?: SelectSubset<T, profile_worked_daysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profile_worked_days and returns the data saved in the database.
     * @param {profile_worked_daysCreateManyAndReturnArgs} args - Arguments to create many Profile_worked_days.
     * @example
     * // Create many Profile_worked_days
     * const profile_worked_days = await prisma.profile_worked_days.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profile_worked_days and only return the `id`
     * const profile_worked_daysWithIdOnly = await prisma.profile_worked_days.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profile_worked_daysCreateManyAndReturnArgs>(args?: SelectSubset<T, profile_worked_daysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profile_worked_daysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile_worked_days.
     * @param {profile_worked_daysDeleteArgs} args - Arguments to delete one Profile_worked_days.
     * @example
     * // Delete one Profile_worked_days
     * const Profile_worked_days = await prisma.profile_worked_days.delete({
     *   where: {
     *     // ... filter to delete one Profile_worked_days
     *   }
     * })
     * 
     */
    delete<T extends profile_worked_daysDeleteArgs>(args: SelectSubset<T, profile_worked_daysDeleteArgs<ExtArgs>>): Prisma__profile_worked_daysClient<$Result.GetResult<Prisma.$profile_worked_daysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile_worked_days.
     * @param {profile_worked_daysUpdateArgs} args - Arguments to update one Profile_worked_days.
     * @example
     * // Update one Profile_worked_days
     * const profile_worked_days = await prisma.profile_worked_days.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profile_worked_daysUpdateArgs>(args: SelectSubset<T, profile_worked_daysUpdateArgs<ExtArgs>>): Prisma__profile_worked_daysClient<$Result.GetResult<Prisma.$profile_worked_daysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profile_worked_days.
     * @param {profile_worked_daysDeleteManyArgs} args - Arguments to filter Profile_worked_days to delete.
     * @example
     * // Delete a few Profile_worked_days
     * const { count } = await prisma.profile_worked_days.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profile_worked_daysDeleteManyArgs>(args?: SelectSubset<T, profile_worked_daysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profile_worked_days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_worked_daysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profile_worked_days
     * const profile_worked_days = await prisma.profile_worked_days.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profile_worked_daysUpdateManyArgs>(args: SelectSubset<T, profile_worked_daysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profile_worked_days and returns the data updated in the database.
     * @param {profile_worked_daysUpdateManyAndReturnArgs} args - Arguments to update many Profile_worked_days.
     * @example
     * // Update many Profile_worked_days
     * const profile_worked_days = await prisma.profile_worked_days.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profile_worked_days and only return the `id`
     * const profile_worked_daysWithIdOnly = await prisma.profile_worked_days.updateManyAndReturn({
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
    updateManyAndReturn<T extends profile_worked_daysUpdateManyAndReturnArgs>(args: SelectSubset<T, profile_worked_daysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profile_worked_daysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile_worked_days.
     * @param {profile_worked_daysUpsertArgs} args - Arguments to update or create a Profile_worked_days.
     * @example
     * // Update or create a Profile_worked_days
     * const profile_worked_days = await prisma.profile_worked_days.upsert({
     *   create: {
     *     // ... data to create a Profile_worked_days
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile_worked_days we want to update
     *   }
     * })
     */
    upsert<T extends profile_worked_daysUpsertArgs>(args: SelectSubset<T, profile_worked_daysUpsertArgs<ExtArgs>>): Prisma__profile_worked_daysClient<$Result.GetResult<Prisma.$profile_worked_daysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profile_worked_days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_worked_daysCountArgs} args - Arguments to filter Profile_worked_days to count.
     * @example
     * // Count the number of Profile_worked_days
     * const count = await prisma.profile_worked_days.count({
     *   where: {
     *     // ... the filter for the Profile_worked_days we want to count
     *   }
     * })
    **/
    count<T extends profile_worked_daysCountArgs>(
      args?: Subset<T, profile_worked_daysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Profile_worked_daysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile_worked_days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Profile_worked_daysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Profile_worked_daysAggregateArgs>(args: Subset<T, Profile_worked_daysAggregateArgs>): Prisma.PrismaPromise<GetProfile_worked_daysAggregateType<T>>

    /**
     * Group by Profile_worked_days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_worked_daysGroupByArgs} args - Group by arguments.
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
      T extends profile_worked_daysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profile_worked_daysGroupByArgs['orderBy'] }
        : { orderBy?: profile_worked_daysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profile_worked_daysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfile_worked_daysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profile_worked_days model
   */
  readonly fields: profile_worked_daysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profile_worked_days.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profile_worked_daysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profiles<T extends profile_worked_days$profilesArgs<ExtArgs> = {}>(args?: Subset<T, profile_worked_days$profilesArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    worked_days<T extends profile_worked_days$worked_daysArgs<ExtArgs> = {}>(args?: Subset<T, profile_worked_days$worked_daysArgs<ExtArgs>>): Prisma__worked_daysClient<$Result.GetResult<Prisma.$worked_daysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the profile_worked_days model
   */
  interface profile_worked_daysFieldRefs {
    readonly id: FieldRef<"profile_worked_days", 'Int'>
    readonly worked_day_id: FieldRef<"profile_worked_days", 'Int'>
    readonly profile_id: FieldRef<"profile_worked_days", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * profile_worked_days findUnique
   */
  export type profile_worked_daysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which profile_worked_days to fetch.
     */
    where: profile_worked_daysWhereUniqueInput
  }

  /**
   * profile_worked_days findUniqueOrThrow
   */
  export type profile_worked_daysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which profile_worked_days to fetch.
     */
    where: profile_worked_daysWhereUniqueInput
  }

  /**
   * profile_worked_days findFirst
   */
  export type profile_worked_daysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which profile_worked_days to fetch.
     */
    where?: profile_worked_daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profile_worked_days to fetch.
     */
    orderBy?: profile_worked_daysOrderByWithRelationInput | profile_worked_daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profile_worked_days.
     */
    cursor?: profile_worked_daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profile_worked_days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profile_worked_days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profile_worked_days.
     */
    distinct?: Profile_worked_daysScalarFieldEnum | Profile_worked_daysScalarFieldEnum[]
  }

  /**
   * profile_worked_days findFirstOrThrow
   */
  export type profile_worked_daysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which profile_worked_days to fetch.
     */
    where?: profile_worked_daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profile_worked_days to fetch.
     */
    orderBy?: profile_worked_daysOrderByWithRelationInput | profile_worked_daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profile_worked_days.
     */
    cursor?: profile_worked_daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profile_worked_days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profile_worked_days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profile_worked_days.
     */
    distinct?: Profile_worked_daysScalarFieldEnum | Profile_worked_daysScalarFieldEnum[]
  }

  /**
   * profile_worked_days findMany
   */
  export type profile_worked_daysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which profile_worked_days to fetch.
     */
    where?: profile_worked_daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profile_worked_days to fetch.
     */
    orderBy?: profile_worked_daysOrderByWithRelationInput | profile_worked_daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profile_worked_days.
     */
    cursor?: profile_worked_daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profile_worked_days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profile_worked_days.
     */
    skip?: number
    distinct?: Profile_worked_daysScalarFieldEnum | Profile_worked_daysScalarFieldEnum[]
  }

  /**
   * profile_worked_days create
   */
  export type profile_worked_daysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysInclude<ExtArgs> | null
    /**
     * The data needed to create a profile_worked_days.
     */
    data?: XOR<profile_worked_daysCreateInput, profile_worked_daysUncheckedCreateInput>
  }

  /**
   * profile_worked_days createMany
   */
  export type profile_worked_daysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profile_worked_days.
     */
    data: profile_worked_daysCreateManyInput | profile_worked_daysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profile_worked_days createManyAndReturn
   */
  export type profile_worked_daysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * The data used to create many profile_worked_days.
     */
    data: profile_worked_daysCreateManyInput | profile_worked_daysCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * profile_worked_days update
   */
  export type profile_worked_daysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysInclude<ExtArgs> | null
    /**
     * The data needed to update a profile_worked_days.
     */
    data: XOR<profile_worked_daysUpdateInput, profile_worked_daysUncheckedUpdateInput>
    /**
     * Choose, which profile_worked_days to update.
     */
    where: profile_worked_daysWhereUniqueInput
  }

  /**
   * profile_worked_days updateMany
   */
  export type profile_worked_daysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profile_worked_days.
     */
    data: XOR<profile_worked_daysUpdateManyMutationInput, profile_worked_daysUncheckedUpdateManyInput>
    /**
     * Filter which profile_worked_days to update
     */
    where?: profile_worked_daysWhereInput
    /**
     * Limit how many profile_worked_days to update.
     */
    limit?: number
  }

  /**
   * profile_worked_days updateManyAndReturn
   */
  export type profile_worked_daysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * The data used to update profile_worked_days.
     */
    data: XOR<profile_worked_daysUpdateManyMutationInput, profile_worked_daysUncheckedUpdateManyInput>
    /**
     * Filter which profile_worked_days to update
     */
    where?: profile_worked_daysWhereInput
    /**
     * Limit how many profile_worked_days to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * profile_worked_days upsert
   */
  export type profile_worked_daysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysInclude<ExtArgs> | null
    /**
     * The filter to search for the profile_worked_days to update in case it exists.
     */
    where: profile_worked_daysWhereUniqueInput
    /**
     * In case the profile_worked_days found by the `where` argument doesn't exist, create a new profile_worked_days with this data.
     */
    create: XOR<profile_worked_daysCreateInput, profile_worked_daysUncheckedCreateInput>
    /**
     * In case the profile_worked_days was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profile_worked_daysUpdateInput, profile_worked_daysUncheckedUpdateInput>
  }

  /**
   * profile_worked_days delete
   */
  export type profile_worked_daysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysInclude<ExtArgs> | null
    /**
     * Filter which profile_worked_days to delete.
     */
    where: profile_worked_daysWhereUniqueInput
  }

  /**
   * profile_worked_days deleteMany
   */
  export type profile_worked_daysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profile_worked_days to delete
     */
    where?: profile_worked_daysWhereInput
    /**
     * Limit how many profile_worked_days to delete.
     */
    limit?: number
  }

  /**
   * profile_worked_days.profiles
   */
  export type profile_worked_days$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    where?: profilesWhereInput
  }

  /**
   * profile_worked_days.worked_days
   */
  export type profile_worked_days$worked_daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worked_daysInclude<ExtArgs> | null
    where?: worked_daysWhereInput
  }

  /**
   * profile_worked_days without action
   */
  export type profile_worked_daysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysInclude<ExtArgs> | null
  }


  /**
   * Model profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfilesSumAggregateOutputType = {
    id: number | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ProfilesAvgAggregateInputType = {
    id?: true
  }

  export type ProfilesSumAggregateInputType = {
    id?: true
  }

  export type ProfilesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to aggregate.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profilesWhereInput
    orderBy?: profilesOrderByWithAggregationInput | profilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _avg?: ProfilesAvgAggregateInputType
    _sum?: ProfilesSumAggregateInputType
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    id: number
    name: string | null
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    monthly_salary?: boolean | profiles$monthly_salaryArgs<ExtArgs>
    profile_worked_days?: boolean | profiles$profile_worked_daysArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["profiles"]>
  export type profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monthly_salary?: boolean | profiles$monthly_salaryArgs<ExtArgs>
    profile_worked_days?: boolean | profiles$profile_worked_daysArgs<ExtArgs>
    _count?: boolean | ProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type profilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type profilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profiles"
    objects: {
      monthly_salary: Prisma.$monthly_salaryPayload<ExtArgs>[]
      profile_worked_days: Prisma.$profile_worked_daysPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type profilesGetPayload<S extends boolean | null | undefined | profilesDefaultArgs> = $Result.GetResult<Prisma.$profilesPayload, S>

  type profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profiles'], meta: { name: 'profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {profilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profilesFindUniqueArgs>(args: SelectSubset<T, profilesFindUniqueArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profilesFindFirstArgs>(args?: SelectSubset<T, profilesFindFirstArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends profilesFindManyArgs>(args?: SelectSubset<T, profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiles.
     * @param {profilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends profilesCreateArgs>(args: SelectSubset<T, profilesCreateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {profilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profilesCreateManyArgs>(args?: SelectSubset<T, profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {profilesCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profiles.
     * @param {profilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends profilesDeleteArgs>(args: SelectSubset<T, profilesDeleteArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiles.
     * @param {profilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profilesUpdateArgs>(args: SelectSubset<T, profilesUpdateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {profilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profilesDeleteManyArgs>(args?: SelectSubset<T, profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profilesUpdateManyArgs>(args: SelectSubset<T, profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {profilesUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends profilesUpdateManyAndReturnArgs>(args: SelectSubset<T, profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profiles.
     * @param {profilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends profilesUpsertArgs>(args: SelectSubset<T, profilesUpsertArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profilesCountArgs>(
      args?: Subset<T, profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesGroupByArgs} args - Group by arguments.
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
      T extends profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profilesGroupByArgs['orderBy'] }
        : { orderBy?: profilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profiles model
   */
  readonly fields: profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monthly_salary<T extends profiles$monthly_salaryArgs<ExtArgs> = {}>(args?: Subset<T, profiles$monthly_salaryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monthly_salaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile_worked_days<T extends profiles$profile_worked_daysArgs<ExtArgs> = {}>(args?: Subset<T, profiles$profile_worked_daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profile_worked_daysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the profiles model
   */
  interface profilesFieldRefs {
    readonly id: FieldRef<"profiles", 'Int'>
    readonly name: FieldRef<"profiles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * profiles findUnique
   */
  export type profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findUniqueOrThrow
   */
  export type profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findFirst
   */
  export type profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findFirstOrThrow
   */
  export type profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findMany
   */
  export type profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles create
   */
  export type profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a profiles.
     */
    data?: XOR<profilesCreateInput, profilesUncheckedCreateInput>
  }

  /**
   * profiles createMany
   */
  export type profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles createManyAndReturn
   */
  export type profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles update
   */
  export type profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a profiles.
     */
    data: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
    /**
     * Choose, which profiles to update.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles updateMany
   */
  export type profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profiles updateManyAndReturn
   */
  export type profilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profiles upsert
   */
  export type profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the profiles to update in case it exists.
     */
    where: profilesWhereUniqueInput
    /**
     * In case the profiles found by the `where` argument doesn't exist, create a new profiles with this data.
     */
    create: XOR<profilesCreateInput, profilesUncheckedCreateInput>
    /**
     * In case the profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
  }

  /**
   * profiles delete
   */
  export type profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter which profiles to delete.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles deleteMany
   */
  export type profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to delete.
     */
    limit?: number
  }

  /**
   * profiles.monthly_salary
   */
  export type profiles$monthly_salaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_salary
     */
    select?: monthly_salarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_salary
     */
    omit?: monthly_salaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_salaryInclude<ExtArgs> | null
    where?: monthly_salaryWhereInput
    orderBy?: monthly_salaryOrderByWithRelationInput | monthly_salaryOrderByWithRelationInput[]
    cursor?: monthly_salaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Monthly_salaryScalarFieldEnum | Monthly_salaryScalarFieldEnum[]
  }

  /**
   * profiles.profile_worked_days
   */
  export type profiles$profile_worked_daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysInclude<ExtArgs> | null
    where?: profile_worked_daysWhereInput
    orderBy?: profile_worked_daysOrderByWithRelationInput | profile_worked_daysOrderByWithRelationInput[]
    cursor?: profile_worked_daysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profile_worked_daysScalarFieldEnum | Profile_worked_daysScalarFieldEnum[]
  }

  /**
   * profiles without action
   */
  export type profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
  }


  /**
   * Model type_hours
   */

  export type AggregateType_hours = {
    _count: Type_hoursCountAggregateOutputType | null
    _avg: Type_hoursAvgAggregateOutputType | null
    _sum: Type_hoursSumAggregateOutputType | null
    _min: Type_hoursMinAggregateOutputType | null
    _max: Type_hoursMaxAggregateOutputType | null
  }

  export type Type_hoursAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type Type_hoursSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type Type_hoursMinAggregateOutputType = {
    id: number | null
    price: Decimal | null
    type: string | null
  }

  export type Type_hoursMaxAggregateOutputType = {
    id: number | null
    price: Decimal | null
    type: string | null
  }

  export type Type_hoursCountAggregateOutputType = {
    id: number
    price: number
    type: number
    _all: number
  }


  export type Type_hoursAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type Type_hoursSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type Type_hoursMinAggregateInputType = {
    id?: true
    price?: true
    type?: true
  }

  export type Type_hoursMaxAggregateInputType = {
    id?: true
    price?: true
    type?: true
  }

  export type Type_hoursCountAggregateInputType = {
    id?: true
    price?: true
    type?: true
    _all?: true
  }

  export type Type_hoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which type_hours to aggregate.
     */
    where?: type_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_hours to fetch.
     */
    orderBy?: type_hoursOrderByWithRelationInput | type_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: type_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned type_hours
    **/
    _count?: true | Type_hoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Type_hoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Type_hoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Type_hoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Type_hoursMaxAggregateInputType
  }

  export type GetType_hoursAggregateType<T extends Type_hoursAggregateArgs> = {
        [P in keyof T & keyof AggregateType_hours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType_hours[P]>
      : GetScalarType<T[P], AggregateType_hours[P]>
  }




  export type type_hoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: type_hoursWhereInput
    orderBy?: type_hoursOrderByWithAggregationInput | type_hoursOrderByWithAggregationInput[]
    by: Type_hoursScalarFieldEnum[] | Type_hoursScalarFieldEnum
    having?: type_hoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Type_hoursCountAggregateInputType | true
    _avg?: Type_hoursAvgAggregateInputType
    _sum?: Type_hoursSumAggregateInputType
    _min?: Type_hoursMinAggregateInputType
    _max?: Type_hoursMaxAggregateInputType
  }

  export type Type_hoursGroupByOutputType = {
    id: number
    price: Decimal | null
    type: string | null
    _count: Type_hoursCountAggregateOutputType | null
    _avg: Type_hoursAvgAggregateOutputType | null
    _sum: Type_hoursSumAggregateOutputType | null
    _min: Type_hoursMinAggregateOutputType | null
    _max: Type_hoursMaxAggregateOutputType | null
  }

  type GetType_hoursGroupByPayload<T extends type_hoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Type_hoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Type_hoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Type_hoursGroupByOutputType[P]>
            : GetScalarType<T[P], Type_hoursGroupByOutputType[P]>
        }
      >
    >


  export type type_hoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    type?: boolean
    hours_worked_days?: boolean | type_hours$hours_worked_daysArgs<ExtArgs>
    _count?: boolean | Type_hoursCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type_hours"]>

  export type type_hoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    type?: boolean
  }, ExtArgs["result"]["type_hours"]>

  export type type_hoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    type?: boolean
  }, ExtArgs["result"]["type_hours"]>

  export type type_hoursSelectScalar = {
    id?: boolean
    price?: boolean
    type?: boolean
  }

  export type type_hoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "type", ExtArgs["result"]["type_hours"]>
  export type type_hoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hours_worked_days?: boolean | type_hours$hours_worked_daysArgs<ExtArgs>
    _count?: boolean | Type_hoursCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type type_hoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type type_hoursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $type_hoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "type_hours"
    objects: {
      hours_worked_days: Prisma.$hours_worked_daysPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      price: Prisma.Decimal | null
      type: string | null
    }, ExtArgs["result"]["type_hours"]>
    composites: {}
  }

  type type_hoursGetPayload<S extends boolean | null | undefined | type_hoursDefaultArgs> = $Result.GetResult<Prisma.$type_hoursPayload, S>

  type type_hoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<type_hoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Type_hoursCountAggregateInputType | true
    }

  export interface type_hoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['type_hours'], meta: { name: 'type_hours' } }
    /**
     * Find zero or one Type_hours that matches the filter.
     * @param {type_hoursFindUniqueArgs} args - Arguments to find a Type_hours
     * @example
     * // Get one Type_hours
     * const type_hours = await prisma.type_hours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends type_hoursFindUniqueArgs>(args: SelectSubset<T, type_hoursFindUniqueArgs<ExtArgs>>): Prisma__type_hoursClient<$Result.GetResult<Prisma.$type_hoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type_hours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {type_hoursFindUniqueOrThrowArgs} args - Arguments to find a Type_hours
     * @example
     * // Get one Type_hours
     * const type_hours = await prisma.type_hours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends type_hoursFindUniqueOrThrowArgs>(args: SelectSubset<T, type_hoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__type_hoursClient<$Result.GetResult<Prisma.$type_hoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type_hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_hoursFindFirstArgs} args - Arguments to find a Type_hours
     * @example
     * // Get one Type_hours
     * const type_hours = await prisma.type_hours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends type_hoursFindFirstArgs>(args?: SelectSubset<T, type_hoursFindFirstArgs<ExtArgs>>): Prisma__type_hoursClient<$Result.GetResult<Prisma.$type_hoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type_hours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_hoursFindFirstOrThrowArgs} args - Arguments to find a Type_hours
     * @example
     * // Get one Type_hours
     * const type_hours = await prisma.type_hours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends type_hoursFindFirstOrThrowArgs>(args?: SelectSubset<T, type_hoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__type_hoursClient<$Result.GetResult<Prisma.$type_hoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Type_hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_hoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Type_hours
     * const type_hours = await prisma.type_hours.findMany()
     * 
     * // Get first 10 Type_hours
     * const type_hours = await prisma.type_hours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const type_hoursWithIdOnly = await prisma.type_hours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends type_hoursFindManyArgs>(args?: SelectSubset<T, type_hoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$type_hoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type_hours.
     * @param {type_hoursCreateArgs} args - Arguments to create a Type_hours.
     * @example
     * // Create one Type_hours
     * const Type_hours = await prisma.type_hours.create({
     *   data: {
     *     // ... data to create a Type_hours
     *   }
     * })
     * 
     */
    create<T extends type_hoursCreateArgs>(args: SelectSubset<T, type_hoursCreateArgs<ExtArgs>>): Prisma__type_hoursClient<$Result.GetResult<Prisma.$type_hoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Type_hours.
     * @param {type_hoursCreateManyArgs} args - Arguments to create many Type_hours.
     * @example
     * // Create many Type_hours
     * const type_hours = await prisma.type_hours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends type_hoursCreateManyArgs>(args?: SelectSubset<T, type_hoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Type_hours and returns the data saved in the database.
     * @param {type_hoursCreateManyAndReturnArgs} args - Arguments to create many Type_hours.
     * @example
     * // Create many Type_hours
     * const type_hours = await prisma.type_hours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Type_hours and only return the `id`
     * const type_hoursWithIdOnly = await prisma.type_hours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends type_hoursCreateManyAndReturnArgs>(args?: SelectSubset<T, type_hoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$type_hoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Type_hours.
     * @param {type_hoursDeleteArgs} args - Arguments to delete one Type_hours.
     * @example
     * // Delete one Type_hours
     * const Type_hours = await prisma.type_hours.delete({
     *   where: {
     *     // ... filter to delete one Type_hours
     *   }
     * })
     * 
     */
    delete<T extends type_hoursDeleteArgs>(args: SelectSubset<T, type_hoursDeleteArgs<ExtArgs>>): Prisma__type_hoursClient<$Result.GetResult<Prisma.$type_hoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type_hours.
     * @param {type_hoursUpdateArgs} args - Arguments to update one Type_hours.
     * @example
     * // Update one Type_hours
     * const type_hours = await prisma.type_hours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends type_hoursUpdateArgs>(args: SelectSubset<T, type_hoursUpdateArgs<ExtArgs>>): Prisma__type_hoursClient<$Result.GetResult<Prisma.$type_hoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Type_hours.
     * @param {type_hoursDeleteManyArgs} args - Arguments to filter Type_hours to delete.
     * @example
     * // Delete a few Type_hours
     * const { count } = await prisma.type_hours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends type_hoursDeleteManyArgs>(args?: SelectSubset<T, type_hoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Type_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_hoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Type_hours
     * const type_hours = await prisma.type_hours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends type_hoursUpdateManyArgs>(args: SelectSubset<T, type_hoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Type_hours and returns the data updated in the database.
     * @param {type_hoursUpdateManyAndReturnArgs} args - Arguments to update many Type_hours.
     * @example
     * // Update many Type_hours
     * const type_hours = await prisma.type_hours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Type_hours and only return the `id`
     * const type_hoursWithIdOnly = await prisma.type_hours.updateManyAndReturn({
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
    updateManyAndReturn<T extends type_hoursUpdateManyAndReturnArgs>(args: SelectSubset<T, type_hoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$type_hoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Type_hours.
     * @param {type_hoursUpsertArgs} args - Arguments to update or create a Type_hours.
     * @example
     * // Update or create a Type_hours
     * const type_hours = await prisma.type_hours.upsert({
     *   create: {
     *     // ... data to create a Type_hours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type_hours we want to update
     *   }
     * })
     */
    upsert<T extends type_hoursUpsertArgs>(args: SelectSubset<T, type_hoursUpsertArgs<ExtArgs>>): Prisma__type_hoursClient<$Result.GetResult<Prisma.$type_hoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Type_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_hoursCountArgs} args - Arguments to filter Type_hours to count.
     * @example
     * // Count the number of Type_hours
     * const count = await prisma.type_hours.count({
     *   where: {
     *     // ... the filter for the Type_hours we want to count
     *   }
     * })
    **/
    count<T extends type_hoursCountArgs>(
      args?: Subset<T, type_hoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Type_hoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_hoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Type_hoursAggregateArgs>(args: Subset<T, Type_hoursAggregateArgs>): Prisma.PrismaPromise<GetType_hoursAggregateType<T>>

    /**
     * Group by Type_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_hoursGroupByArgs} args - Group by arguments.
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
      T extends type_hoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: type_hoursGroupByArgs['orderBy'] }
        : { orderBy?: type_hoursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, type_hoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetType_hoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the type_hours model
   */
  readonly fields: type_hoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for type_hours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__type_hoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hours_worked_days<T extends type_hours$hours_worked_daysArgs<ExtArgs> = {}>(args?: Subset<T, type_hours$hours_worked_daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hours_worked_daysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the type_hours model
   */
  interface type_hoursFieldRefs {
    readonly id: FieldRef<"type_hours", 'Int'>
    readonly price: FieldRef<"type_hours", 'Decimal'>
    readonly type: FieldRef<"type_hours", 'String'>
  }
    

  // Custom InputTypes
  /**
   * type_hours findUnique
   */
  export type type_hoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_hours
     */
    select?: type_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_hours
     */
    omit?: type_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_hoursInclude<ExtArgs> | null
    /**
     * Filter, which type_hours to fetch.
     */
    where: type_hoursWhereUniqueInput
  }

  /**
   * type_hours findUniqueOrThrow
   */
  export type type_hoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_hours
     */
    select?: type_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_hours
     */
    omit?: type_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_hoursInclude<ExtArgs> | null
    /**
     * Filter, which type_hours to fetch.
     */
    where: type_hoursWhereUniqueInput
  }

  /**
   * type_hours findFirst
   */
  export type type_hoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_hours
     */
    select?: type_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_hours
     */
    omit?: type_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_hoursInclude<ExtArgs> | null
    /**
     * Filter, which type_hours to fetch.
     */
    where?: type_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_hours to fetch.
     */
    orderBy?: type_hoursOrderByWithRelationInput | type_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for type_hours.
     */
    cursor?: type_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of type_hours.
     */
    distinct?: Type_hoursScalarFieldEnum | Type_hoursScalarFieldEnum[]
  }

  /**
   * type_hours findFirstOrThrow
   */
  export type type_hoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_hours
     */
    select?: type_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_hours
     */
    omit?: type_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_hoursInclude<ExtArgs> | null
    /**
     * Filter, which type_hours to fetch.
     */
    where?: type_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_hours to fetch.
     */
    orderBy?: type_hoursOrderByWithRelationInput | type_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for type_hours.
     */
    cursor?: type_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of type_hours.
     */
    distinct?: Type_hoursScalarFieldEnum | Type_hoursScalarFieldEnum[]
  }

  /**
   * type_hours findMany
   */
  export type type_hoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_hours
     */
    select?: type_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_hours
     */
    omit?: type_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_hoursInclude<ExtArgs> | null
    /**
     * Filter, which type_hours to fetch.
     */
    where?: type_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_hours to fetch.
     */
    orderBy?: type_hoursOrderByWithRelationInput | type_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing type_hours.
     */
    cursor?: type_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_hours.
     */
    skip?: number
    distinct?: Type_hoursScalarFieldEnum | Type_hoursScalarFieldEnum[]
  }

  /**
   * type_hours create
   */
  export type type_hoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_hours
     */
    select?: type_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_hours
     */
    omit?: type_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_hoursInclude<ExtArgs> | null
    /**
     * The data needed to create a type_hours.
     */
    data?: XOR<type_hoursCreateInput, type_hoursUncheckedCreateInput>
  }

  /**
   * type_hours createMany
   */
  export type type_hoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many type_hours.
     */
    data: type_hoursCreateManyInput | type_hoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * type_hours createManyAndReturn
   */
  export type type_hoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_hours
     */
    select?: type_hoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the type_hours
     */
    omit?: type_hoursOmit<ExtArgs> | null
    /**
     * The data used to create many type_hours.
     */
    data: type_hoursCreateManyInput | type_hoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * type_hours update
   */
  export type type_hoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_hours
     */
    select?: type_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_hours
     */
    omit?: type_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_hoursInclude<ExtArgs> | null
    /**
     * The data needed to update a type_hours.
     */
    data: XOR<type_hoursUpdateInput, type_hoursUncheckedUpdateInput>
    /**
     * Choose, which type_hours to update.
     */
    where: type_hoursWhereUniqueInput
  }

  /**
   * type_hours updateMany
   */
  export type type_hoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update type_hours.
     */
    data: XOR<type_hoursUpdateManyMutationInput, type_hoursUncheckedUpdateManyInput>
    /**
     * Filter which type_hours to update
     */
    where?: type_hoursWhereInput
    /**
     * Limit how many type_hours to update.
     */
    limit?: number
  }

  /**
   * type_hours updateManyAndReturn
   */
  export type type_hoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_hours
     */
    select?: type_hoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the type_hours
     */
    omit?: type_hoursOmit<ExtArgs> | null
    /**
     * The data used to update type_hours.
     */
    data: XOR<type_hoursUpdateManyMutationInput, type_hoursUncheckedUpdateManyInput>
    /**
     * Filter which type_hours to update
     */
    where?: type_hoursWhereInput
    /**
     * Limit how many type_hours to update.
     */
    limit?: number
  }

  /**
   * type_hours upsert
   */
  export type type_hoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_hours
     */
    select?: type_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_hours
     */
    omit?: type_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_hoursInclude<ExtArgs> | null
    /**
     * The filter to search for the type_hours to update in case it exists.
     */
    where: type_hoursWhereUniqueInput
    /**
     * In case the type_hours found by the `where` argument doesn't exist, create a new type_hours with this data.
     */
    create: XOR<type_hoursCreateInput, type_hoursUncheckedCreateInput>
    /**
     * In case the type_hours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<type_hoursUpdateInput, type_hoursUncheckedUpdateInput>
  }

  /**
   * type_hours delete
   */
  export type type_hoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_hours
     */
    select?: type_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_hours
     */
    omit?: type_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_hoursInclude<ExtArgs> | null
    /**
     * Filter which type_hours to delete.
     */
    where: type_hoursWhereUniqueInput
  }

  /**
   * type_hours deleteMany
   */
  export type type_hoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which type_hours to delete
     */
    where?: type_hoursWhereInput
    /**
     * Limit how many type_hours to delete.
     */
    limit?: number
  }

  /**
   * type_hours.hours_worked_days
   */
  export type type_hours$hours_worked_daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysInclude<ExtArgs> | null
    where?: hours_worked_daysWhereInput
    orderBy?: hours_worked_daysOrderByWithRelationInput | hours_worked_daysOrderByWithRelationInput[]
    cursor?: hours_worked_daysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hours_worked_daysScalarFieldEnum | Hours_worked_daysScalarFieldEnum[]
  }

  /**
   * type_hours without action
   */
  export type type_hoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_hours
     */
    select?: type_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_hours
     */
    omit?: type_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_hoursInclude<ExtArgs> | null
  }


  /**
   * Model worked_days
   */

  export type AggregateWorked_days = {
    _count: Worked_daysCountAggregateOutputType | null
    _avg: Worked_daysAvgAggregateOutputType | null
    _sum: Worked_daysSumAggregateOutputType | null
    _min: Worked_daysMinAggregateOutputType | null
    _max: Worked_daysMaxAggregateOutputType | null
  }

  export type Worked_daysAvgAggregateOutputType = {
    id: number | null
    break: number | null
    sunday: number | null
    holiday: number | null
  }

  export type Worked_daysSumAggregateOutputType = {
    id: number | null
    break: number | null
    sunday: number | null
    holiday: number | null
  }

  export type Worked_daysMinAggregateOutputType = {
    id: number | null
    date: Date | null
    startHour: string | null
    startMin: string | null
    endHour: string | null
    endMin: string | null
    break: number | null
    sunday: number | null
    holiday: number | null
  }

  export type Worked_daysMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    startHour: string | null
    startMin: string | null
    endHour: string | null
    endMin: string | null
    break: number | null
    sunday: number | null
    holiday: number | null
  }

  export type Worked_daysCountAggregateOutputType = {
    id: number
    date: number
    startHour: number
    startMin: number
    endHour: number
    endMin: number
    break: number
    sunday: number
    holiday: number
    _all: number
  }


  export type Worked_daysAvgAggregateInputType = {
    id?: true
    break?: true
    sunday?: true
    holiday?: true
  }

  export type Worked_daysSumAggregateInputType = {
    id?: true
    break?: true
    sunday?: true
    holiday?: true
  }

  export type Worked_daysMinAggregateInputType = {
    id?: true
    date?: true
    startHour?: true
    startMin?: true
    endHour?: true
    endMin?: true
    break?: true
    sunday?: true
    holiday?: true
  }

  export type Worked_daysMaxAggregateInputType = {
    id?: true
    date?: true
    startHour?: true
    startMin?: true
    endHour?: true
    endMin?: true
    break?: true
    sunday?: true
    holiday?: true
  }

  export type Worked_daysCountAggregateInputType = {
    id?: true
    date?: true
    startHour?: true
    startMin?: true
    endHour?: true
    endMin?: true
    break?: true
    sunday?: true
    holiday?: true
    _all?: true
  }

  export type Worked_daysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which worked_days to aggregate.
     */
    where?: worked_daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of worked_days to fetch.
     */
    orderBy?: worked_daysOrderByWithRelationInput | worked_daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: worked_daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` worked_days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` worked_days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned worked_days
    **/
    _count?: true | Worked_daysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Worked_daysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Worked_daysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Worked_daysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Worked_daysMaxAggregateInputType
  }

  export type GetWorked_daysAggregateType<T extends Worked_daysAggregateArgs> = {
        [P in keyof T & keyof AggregateWorked_days]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorked_days[P]>
      : GetScalarType<T[P], AggregateWorked_days[P]>
  }




  export type worked_daysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: worked_daysWhereInput
    orderBy?: worked_daysOrderByWithAggregationInput | worked_daysOrderByWithAggregationInput[]
    by: Worked_daysScalarFieldEnum[] | Worked_daysScalarFieldEnum
    having?: worked_daysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Worked_daysCountAggregateInputType | true
    _avg?: Worked_daysAvgAggregateInputType
    _sum?: Worked_daysSumAggregateInputType
    _min?: Worked_daysMinAggregateInputType
    _max?: Worked_daysMaxAggregateInputType
  }

  export type Worked_daysGroupByOutputType = {
    id: number
    date: Date | null
    startHour: string | null
    startMin: string | null
    endHour: string | null
    endMin: string | null
    break: number | null
    sunday: number | null
    holiday: number | null
    _count: Worked_daysCountAggregateOutputType | null
    _avg: Worked_daysAvgAggregateOutputType | null
    _sum: Worked_daysSumAggregateOutputType | null
    _min: Worked_daysMinAggregateOutputType | null
    _max: Worked_daysMaxAggregateOutputType | null
  }

  type GetWorked_daysGroupByPayload<T extends worked_daysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Worked_daysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Worked_daysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Worked_daysGroupByOutputType[P]>
            : GetScalarType<T[P], Worked_daysGroupByOutputType[P]>
        }
      >
    >


  export type worked_daysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startHour?: boolean
    startMin?: boolean
    endHour?: boolean
    endMin?: boolean
    break?: boolean
    sunday?: boolean
    holiday?: boolean
    hours_worked_days?: boolean | worked_days$hours_worked_daysArgs<ExtArgs>
    profile_worked_days?: boolean | worked_days$profile_worked_daysArgs<ExtArgs>
    _count?: boolean | Worked_daysCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worked_days"]>

  export type worked_daysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startHour?: boolean
    startMin?: boolean
    endHour?: boolean
    endMin?: boolean
    break?: boolean
    sunday?: boolean
    holiday?: boolean
  }, ExtArgs["result"]["worked_days"]>

  export type worked_daysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startHour?: boolean
    startMin?: boolean
    endHour?: boolean
    endMin?: boolean
    break?: boolean
    sunday?: boolean
    holiday?: boolean
  }, ExtArgs["result"]["worked_days"]>

  export type worked_daysSelectScalar = {
    id?: boolean
    date?: boolean
    startHour?: boolean
    startMin?: boolean
    endHour?: boolean
    endMin?: boolean
    break?: boolean
    sunday?: boolean
    holiday?: boolean
  }

  export type worked_daysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "startHour" | "startMin" | "endHour" | "endMin" | "break" | "sunday" | "holiday", ExtArgs["result"]["worked_days"]>
  export type worked_daysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hours_worked_days?: boolean | worked_days$hours_worked_daysArgs<ExtArgs>
    profile_worked_days?: boolean | worked_days$profile_worked_daysArgs<ExtArgs>
    _count?: boolean | Worked_daysCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type worked_daysIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type worked_daysIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $worked_daysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "worked_days"
    objects: {
      hours_worked_days: Prisma.$hours_worked_daysPayload<ExtArgs>[]
      profile_worked_days: Prisma.$profile_worked_daysPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date | null
      startHour: string | null
      startMin: string | null
      endHour: string | null
      endMin: string | null
      break: number | null
      sunday: number | null
      holiday: number | null
    }, ExtArgs["result"]["worked_days"]>
    composites: {}
  }

  type worked_daysGetPayload<S extends boolean | null | undefined | worked_daysDefaultArgs> = $Result.GetResult<Prisma.$worked_daysPayload, S>

  type worked_daysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<worked_daysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Worked_daysCountAggregateInputType | true
    }

  export interface worked_daysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['worked_days'], meta: { name: 'worked_days' } }
    /**
     * Find zero or one Worked_days that matches the filter.
     * @param {worked_daysFindUniqueArgs} args - Arguments to find a Worked_days
     * @example
     * // Get one Worked_days
     * const worked_days = await prisma.worked_days.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends worked_daysFindUniqueArgs>(args: SelectSubset<T, worked_daysFindUniqueArgs<ExtArgs>>): Prisma__worked_daysClient<$Result.GetResult<Prisma.$worked_daysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Worked_days that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {worked_daysFindUniqueOrThrowArgs} args - Arguments to find a Worked_days
     * @example
     * // Get one Worked_days
     * const worked_days = await prisma.worked_days.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends worked_daysFindUniqueOrThrowArgs>(args: SelectSubset<T, worked_daysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__worked_daysClient<$Result.GetResult<Prisma.$worked_daysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worked_days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worked_daysFindFirstArgs} args - Arguments to find a Worked_days
     * @example
     * // Get one Worked_days
     * const worked_days = await prisma.worked_days.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends worked_daysFindFirstArgs>(args?: SelectSubset<T, worked_daysFindFirstArgs<ExtArgs>>): Prisma__worked_daysClient<$Result.GetResult<Prisma.$worked_daysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worked_days that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worked_daysFindFirstOrThrowArgs} args - Arguments to find a Worked_days
     * @example
     * // Get one Worked_days
     * const worked_days = await prisma.worked_days.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends worked_daysFindFirstOrThrowArgs>(args?: SelectSubset<T, worked_daysFindFirstOrThrowArgs<ExtArgs>>): Prisma__worked_daysClient<$Result.GetResult<Prisma.$worked_daysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Worked_days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worked_daysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Worked_days
     * const worked_days = await prisma.worked_days.findMany()
     * 
     * // Get first 10 Worked_days
     * const worked_days = await prisma.worked_days.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worked_daysWithIdOnly = await prisma.worked_days.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends worked_daysFindManyArgs>(args?: SelectSubset<T, worked_daysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$worked_daysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Worked_days.
     * @param {worked_daysCreateArgs} args - Arguments to create a Worked_days.
     * @example
     * // Create one Worked_days
     * const Worked_days = await prisma.worked_days.create({
     *   data: {
     *     // ... data to create a Worked_days
     *   }
     * })
     * 
     */
    create<T extends worked_daysCreateArgs>(args: SelectSubset<T, worked_daysCreateArgs<ExtArgs>>): Prisma__worked_daysClient<$Result.GetResult<Prisma.$worked_daysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Worked_days.
     * @param {worked_daysCreateManyArgs} args - Arguments to create many Worked_days.
     * @example
     * // Create many Worked_days
     * const worked_days = await prisma.worked_days.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends worked_daysCreateManyArgs>(args?: SelectSubset<T, worked_daysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Worked_days and returns the data saved in the database.
     * @param {worked_daysCreateManyAndReturnArgs} args - Arguments to create many Worked_days.
     * @example
     * // Create many Worked_days
     * const worked_days = await prisma.worked_days.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Worked_days and only return the `id`
     * const worked_daysWithIdOnly = await prisma.worked_days.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends worked_daysCreateManyAndReturnArgs>(args?: SelectSubset<T, worked_daysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$worked_daysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Worked_days.
     * @param {worked_daysDeleteArgs} args - Arguments to delete one Worked_days.
     * @example
     * // Delete one Worked_days
     * const Worked_days = await prisma.worked_days.delete({
     *   where: {
     *     // ... filter to delete one Worked_days
     *   }
     * })
     * 
     */
    delete<T extends worked_daysDeleteArgs>(args: SelectSubset<T, worked_daysDeleteArgs<ExtArgs>>): Prisma__worked_daysClient<$Result.GetResult<Prisma.$worked_daysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Worked_days.
     * @param {worked_daysUpdateArgs} args - Arguments to update one Worked_days.
     * @example
     * // Update one Worked_days
     * const worked_days = await prisma.worked_days.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends worked_daysUpdateArgs>(args: SelectSubset<T, worked_daysUpdateArgs<ExtArgs>>): Prisma__worked_daysClient<$Result.GetResult<Prisma.$worked_daysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Worked_days.
     * @param {worked_daysDeleteManyArgs} args - Arguments to filter Worked_days to delete.
     * @example
     * // Delete a few Worked_days
     * const { count } = await prisma.worked_days.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends worked_daysDeleteManyArgs>(args?: SelectSubset<T, worked_daysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worked_days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worked_daysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Worked_days
     * const worked_days = await prisma.worked_days.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends worked_daysUpdateManyArgs>(args: SelectSubset<T, worked_daysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worked_days and returns the data updated in the database.
     * @param {worked_daysUpdateManyAndReturnArgs} args - Arguments to update many Worked_days.
     * @example
     * // Update many Worked_days
     * const worked_days = await prisma.worked_days.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Worked_days and only return the `id`
     * const worked_daysWithIdOnly = await prisma.worked_days.updateManyAndReturn({
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
    updateManyAndReturn<T extends worked_daysUpdateManyAndReturnArgs>(args: SelectSubset<T, worked_daysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$worked_daysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Worked_days.
     * @param {worked_daysUpsertArgs} args - Arguments to update or create a Worked_days.
     * @example
     * // Update or create a Worked_days
     * const worked_days = await prisma.worked_days.upsert({
     *   create: {
     *     // ... data to create a Worked_days
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worked_days we want to update
     *   }
     * })
     */
    upsert<T extends worked_daysUpsertArgs>(args: SelectSubset<T, worked_daysUpsertArgs<ExtArgs>>): Prisma__worked_daysClient<$Result.GetResult<Prisma.$worked_daysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Worked_days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worked_daysCountArgs} args - Arguments to filter Worked_days to count.
     * @example
     * // Count the number of Worked_days
     * const count = await prisma.worked_days.count({
     *   where: {
     *     // ... the filter for the Worked_days we want to count
     *   }
     * })
    **/
    count<T extends worked_daysCountArgs>(
      args?: Subset<T, worked_daysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Worked_daysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worked_days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Worked_daysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Worked_daysAggregateArgs>(args: Subset<T, Worked_daysAggregateArgs>): Prisma.PrismaPromise<GetWorked_daysAggregateType<T>>

    /**
     * Group by Worked_days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {worked_daysGroupByArgs} args - Group by arguments.
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
      T extends worked_daysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: worked_daysGroupByArgs['orderBy'] }
        : { orderBy?: worked_daysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, worked_daysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorked_daysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the worked_days model
   */
  readonly fields: worked_daysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for worked_days.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__worked_daysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hours_worked_days<T extends worked_days$hours_worked_daysArgs<ExtArgs> = {}>(args?: Subset<T, worked_days$hours_worked_daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hours_worked_daysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile_worked_days<T extends worked_days$profile_worked_daysArgs<ExtArgs> = {}>(args?: Subset<T, worked_days$profile_worked_daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profile_worked_daysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the worked_days model
   */
  interface worked_daysFieldRefs {
    readonly id: FieldRef<"worked_days", 'Int'>
    readonly date: FieldRef<"worked_days", 'DateTime'>
    readonly startHour: FieldRef<"worked_days", 'String'>
    readonly startMin: FieldRef<"worked_days", 'String'>
    readonly endHour: FieldRef<"worked_days", 'String'>
    readonly endMin: FieldRef<"worked_days", 'String'>
    readonly break: FieldRef<"worked_days", 'Int'>
    readonly sunday: FieldRef<"worked_days", 'Int'>
    readonly holiday: FieldRef<"worked_days", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * worked_days findUnique
   */
  export type worked_daysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which worked_days to fetch.
     */
    where: worked_daysWhereUniqueInput
  }

  /**
   * worked_days findUniqueOrThrow
   */
  export type worked_daysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which worked_days to fetch.
     */
    where: worked_daysWhereUniqueInput
  }

  /**
   * worked_days findFirst
   */
  export type worked_daysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which worked_days to fetch.
     */
    where?: worked_daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of worked_days to fetch.
     */
    orderBy?: worked_daysOrderByWithRelationInput | worked_daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for worked_days.
     */
    cursor?: worked_daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` worked_days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` worked_days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of worked_days.
     */
    distinct?: Worked_daysScalarFieldEnum | Worked_daysScalarFieldEnum[]
  }

  /**
   * worked_days findFirstOrThrow
   */
  export type worked_daysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which worked_days to fetch.
     */
    where?: worked_daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of worked_days to fetch.
     */
    orderBy?: worked_daysOrderByWithRelationInput | worked_daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for worked_days.
     */
    cursor?: worked_daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` worked_days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` worked_days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of worked_days.
     */
    distinct?: Worked_daysScalarFieldEnum | Worked_daysScalarFieldEnum[]
  }

  /**
   * worked_days findMany
   */
  export type worked_daysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worked_daysInclude<ExtArgs> | null
    /**
     * Filter, which worked_days to fetch.
     */
    where?: worked_daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of worked_days to fetch.
     */
    orderBy?: worked_daysOrderByWithRelationInput | worked_daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing worked_days.
     */
    cursor?: worked_daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` worked_days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` worked_days.
     */
    skip?: number
    distinct?: Worked_daysScalarFieldEnum | Worked_daysScalarFieldEnum[]
  }

  /**
   * worked_days create
   */
  export type worked_daysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worked_daysInclude<ExtArgs> | null
    /**
     * The data needed to create a worked_days.
     */
    data?: XOR<worked_daysCreateInput, worked_daysUncheckedCreateInput>
  }

  /**
   * worked_days createMany
   */
  export type worked_daysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many worked_days.
     */
    data: worked_daysCreateManyInput | worked_daysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * worked_days createManyAndReturn
   */
  export type worked_daysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * The data used to create many worked_days.
     */
    data: worked_daysCreateManyInput | worked_daysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * worked_days update
   */
  export type worked_daysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worked_daysInclude<ExtArgs> | null
    /**
     * The data needed to update a worked_days.
     */
    data: XOR<worked_daysUpdateInput, worked_daysUncheckedUpdateInput>
    /**
     * Choose, which worked_days to update.
     */
    where: worked_daysWhereUniqueInput
  }

  /**
   * worked_days updateMany
   */
  export type worked_daysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update worked_days.
     */
    data: XOR<worked_daysUpdateManyMutationInput, worked_daysUncheckedUpdateManyInput>
    /**
     * Filter which worked_days to update
     */
    where?: worked_daysWhereInput
    /**
     * Limit how many worked_days to update.
     */
    limit?: number
  }

  /**
   * worked_days updateManyAndReturn
   */
  export type worked_daysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * The data used to update worked_days.
     */
    data: XOR<worked_daysUpdateManyMutationInput, worked_daysUncheckedUpdateManyInput>
    /**
     * Filter which worked_days to update
     */
    where?: worked_daysWhereInput
    /**
     * Limit how many worked_days to update.
     */
    limit?: number
  }

  /**
   * worked_days upsert
   */
  export type worked_daysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worked_daysInclude<ExtArgs> | null
    /**
     * The filter to search for the worked_days to update in case it exists.
     */
    where: worked_daysWhereUniqueInput
    /**
     * In case the worked_days found by the `where` argument doesn't exist, create a new worked_days with this data.
     */
    create: XOR<worked_daysCreateInput, worked_daysUncheckedCreateInput>
    /**
     * In case the worked_days was found with the provided `where` argument, update it with this data.
     */
    update: XOR<worked_daysUpdateInput, worked_daysUncheckedUpdateInput>
  }

  /**
   * worked_days delete
   */
  export type worked_daysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worked_daysInclude<ExtArgs> | null
    /**
     * Filter which worked_days to delete.
     */
    where: worked_daysWhereUniqueInput
  }

  /**
   * worked_days deleteMany
   */
  export type worked_daysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which worked_days to delete
     */
    where?: worked_daysWhereInput
    /**
     * Limit how many worked_days to delete.
     */
    limit?: number
  }

  /**
   * worked_days.hours_worked_days
   */
  export type worked_days$hours_worked_daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hours_worked_days
     */
    select?: hours_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hours_worked_days
     */
    omit?: hours_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hours_worked_daysInclude<ExtArgs> | null
    where?: hours_worked_daysWhereInput
    orderBy?: hours_worked_daysOrderByWithRelationInput | hours_worked_daysOrderByWithRelationInput[]
    cursor?: hours_worked_daysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Hours_worked_daysScalarFieldEnum | Hours_worked_daysScalarFieldEnum[]
  }

  /**
   * worked_days.profile_worked_days
   */
  export type worked_days$profile_worked_daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_worked_days
     */
    select?: profile_worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_worked_days
     */
    omit?: profile_worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_worked_daysInclude<ExtArgs> | null
    where?: profile_worked_daysWhereInput
    orderBy?: profile_worked_daysOrderByWithRelationInput | profile_worked_daysOrderByWithRelationInput[]
    cursor?: profile_worked_daysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profile_worked_daysScalarFieldEnum | Profile_worked_daysScalarFieldEnum[]
  }

  /**
   * worked_days without action
   */
  export type worked_daysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the worked_days
     */
    select?: worked_daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the worked_days
     */
    omit?: worked_daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: worked_daysInclude<ExtArgs> | null
  }


  /**
   * Model monthly_salary
   */

  export type AggregateMonthly_salary = {
    _count: Monthly_salaryCountAggregateOutputType | null
    _avg: Monthly_salaryAvgAggregateOutputType | null
    _sum: Monthly_salarySumAggregateOutputType | null
    _min: Monthly_salaryMinAggregateOutputType | null
    _max: Monthly_salaryMaxAggregateOutputType | null
  }

  export type Monthly_salaryAvgAggregateOutputType = {
    id: number | null
    profile_id: number | null
    base_salary: number | null
    month: number | null
    month_tips: number | null
    month_salary: number | null
    total_hours: number | null
  }

  export type Monthly_salarySumAggregateOutputType = {
    id: number | null
    profile_id: number | null
    base_salary: number | null
    month: number | null
    month_tips: number | null
    month_salary: number | null
    total_hours: number | null
  }

  export type Monthly_salaryMinAggregateOutputType = {
    id: number | null
    profile_id: number | null
    base_salary: number | null
    month: number | null
    month_tips: number | null
    month_salary: number | null
    total_hours: number | null
  }

  export type Monthly_salaryMaxAggregateOutputType = {
    id: number | null
    profile_id: number | null
    base_salary: number | null
    month: number | null
    month_tips: number | null
    month_salary: number | null
    total_hours: number | null
  }

  export type Monthly_salaryCountAggregateOutputType = {
    id: number
    profile_id: number
    base_salary: number
    month: number
    month_tips: number
    month_salary: number
    total_hours: number
    _all: number
  }


  export type Monthly_salaryAvgAggregateInputType = {
    id?: true
    profile_id?: true
    base_salary?: true
    month?: true
    month_tips?: true
    month_salary?: true
    total_hours?: true
  }

  export type Monthly_salarySumAggregateInputType = {
    id?: true
    profile_id?: true
    base_salary?: true
    month?: true
    month_tips?: true
    month_salary?: true
    total_hours?: true
  }

  export type Monthly_salaryMinAggregateInputType = {
    id?: true
    profile_id?: true
    base_salary?: true
    month?: true
    month_tips?: true
    month_salary?: true
    total_hours?: true
  }

  export type Monthly_salaryMaxAggregateInputType = {
    id?: true
    profile_id?: true
    base_salary?: true
    month?: true
    month_tips?: true
    month_salary?: true
    total_hours?: true
  }

  export type Monthly_salaryCountAggregateInputType = {
    id?: true
    profile_id?: true
    base_salary?: true
    month?: true
    month_tips?: true
    month_salary?: true
    total_hours?: true
    _all?: true
  }

  export type Monthly_salaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monthly_salary to aggregate.
     */
    where?: monthly_salaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monthly_salaries to fetch.
     */
    orderBy?: monthly_salaryOrderByWithRelationInput | monthly_salaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: monthly_salaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monthly_salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monthly_salaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned monthly_salaries
    **/
    _count?: true | Monthly_salaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Monthly_salaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Monthly_salarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Monthly_salaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Monthly_salaryMaxAggregateInputType
  }

  export type GetMonthly_salaryAggregateType<T extends Monthly_salaryAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthly_salary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthly_salary[P]>
      : GetScalarType<T[P], AggregateMonthly_salary[P]>
  }




  export type monthly_salaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: monthly_salaryWhereInput
    orderBy?: monthly_salaryOrderByWithAggregationInput | monthly_salaryOrderByWithAggregationInput[]
    by: Monthly_salaryScalarFieldEnum[] | Monthly_salaryScalarFieldEnum
    having?: monthly_salaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Monthly_salaryCountAggregateInputType | true
    _avg?: Monthly_salaryAvgAggregateInputType
    _sum?: Monthly_salarySumAggregateInputType
    _min?: Monthly_salaryMinAggregateInputType
    _max?: Monthly_salaryMaxAggregateInputType
  }

  export type Monthly_salaryGroupByOutputType = {
    id: number
    profile_id: number | null
    base_salary: number | null
    month: number | null
    month_tips: number | null
    month_salary: number | null
    total_hours: number | null
    _count: Monthly_salaryCountAggregateOutputType | null
    _avg: Monthly_salaryAvgAggregateOutputType | null
    _sum: Monthly_salarySumAggregateOutputType | null
    _min: Monthly_salaryMinAggregateOutputType | null
    _max: Monthly_salaryMaxAggregateOutputType | null
  }

  type GetMonthly_salaryGroupByPayload<T extends monthly_salaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Monthly_salaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Monthly_salaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Monthly_salaryGroupByOutputType[P]>
            : GetScalarType<T[P], Monthly_salaryGroupByOutputType[P]>
        }
      >
    >


  export type monthly_salarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    base_salary?: boolean
    month?: boolean
    month_tips?: boolean
    month_salary?: boolean
    total_hours?: boolean
    profiles?: boolean | monthly_salary$profilesArgs<ExtArgs>
  }, ExtArgs["result"]["monthly_salary"]>

  export type monthly_salarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    base_salary?: boolean
    month?: boolean
    month_tips?: boolean
    month_salary?: boolean
    total_hours?: boolean
    profiles?: boolean | monthly_salary$profilesArgs<ExtArgs>
  }, ExtArgs["result"]["monthly_salary"]>

  export type monthly_salarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    base_salary?: boolean
    month?: boolean
    month_tips?: boolean
    month_salary?: boolean
    total_hours?: boolean
    profiles?: boolean | monthly_salary$profilesArgs<ExtArgs>
  }, ExtArgs["result"]["monthly_salary"]>

  export type monthly_salarySelectScalar = {
    id?: boolean
    profile_id?: boolean
    base_salary?: boolean
    month?: boolean
    month_tips?: boolean
    month_salary?: boolean
    total_hours?: boolean
  }

  export type monthly_salaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profile_id" | "base_salary" | "month" | "month_tips" | "month_salary" | "total_hours", ExtArgs["result"]["monthly_salary"]>
  export type monthly_salaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | monthly_salary$profilesArgs<ExtArgs>
  }
  export type monthly_salaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | monthly_salary$profilesArgs<ExtArgs>
  }
  export type monthly_salaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | monthly_salary$profilesArgs<ExtArgs>
  }

  export type $monthly_salaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "monthly_salary"
    objects: {
      profiles: Prisma.$profilesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      profile_id: number | null
      base_salary: number | null
      month: number | null
      month_tips: number | null
      month_salary: number | null
      total_hours: number | null
    }, ExtArgs["result"]["monthly_salary"]>
    composites: {}
  }

  type monthly_salaryGetPayload<S extends boolean | null | undefined | monthly_salaryDefaultArgs> = $Result.GetResult<Prisma.$monthly_salaryPayload, S>

  type monthly_salaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<monthly_salaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Monthly_salaryCountAggregateInputType | true
    }

  export interface monthly_salaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['monthly_salary'], meta: { name: 'monthly_salary' } }
    /**
     * Find zero or one Monthly_salary that matches the filter.
     * @param {monthly_salaryFindUniqueArgs} args - Arguments to find a Monthly_salary
     * @example
     * // Get one Monthly_salary
     * const monthly_salary = await prisma.monthly_salary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends monthly_salaryFindUniqueArgs>(args: SelectSubset<T, monthly_salaryFindUniqueArgs<ExtArgs>>): Prisma__monthly_salaryClient<$Result.GetResult<Prisma.$monthly_salaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Monthly_salary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {monthly_salaryFindUniqueOrThrowArgs} args - Arguments to find a Monthly_salary
     * @example
     * // Get one Monthly_salary
     * const monthly_salary = await prisma.monthly_salary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends monthly_salaryFindUniqueOrThrowArgs>(args: SelectSubset<T, monthly_salaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__monthly_salaryClient<$Result.GetResult<Prisma.$monthly_salaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monthly_salary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_salaryFindFirstArgs} args - Arguments to find a Monthly_salary
     * @example
     * // Get one Monthly_salary
     * const monthly_salary = await prisma.monthly_salary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends monthly_salaryFindFirstArgs>(args?: SelectSubset<T, monthly_salaryFindFirstArgs<ExtArgs>>): Prisma__monthly_salaryClient<$Result.GetResult<Prisma.$monthly_salaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monthly_salary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_salaryFindFirstOrThrowArgs} args - Arguments to find a Monthly_salary
     * @example
     * // Get one Monthly_salary
     * const monthly_salary = await prisma.monthly_salary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends monthly_salaryFindFirstOrThrowArgs>(args?: SelectSubset<T, monthly_salaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__monthly_salaryClient<$Result.GetResult<Prisma.$monthly_salaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Monthly_salaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_salaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monthly_salaries
     * const monthly_salaries = await prisma.monthly_salary.findMany()
     * 
     * // Get first 10 Monthly_salaries
     * const monthly_salaries = await prisma.monthly_salary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthly_salaryWithIdOnly = await prisma.monthly_salary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends monthly_salaryFindManyArgs>(args?: SelectSubset<T, monthly_salaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monthly_salaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Monthly_salary.
     * @param {monthly_salaryCreateArgs} args - Arguments to create a Monthly_salary.
     * @example
     * // Create one Monthly_salary
     * const Monthly_salary = await prisma.monthly_salary.create({
     *   data: {
     *     // ... data to create a Monthly_salary
     *   }
     * })
     * 
     */
    create<T extends monthly_salaryCreateArgs>(args: SelectSubset<T, monthly_salaryCreateArgs<ExtArgs>>): Prisma__monthly_salaryClient<$Result.GetResult<Prisma.$monthly_salaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Monthly_salaries.
     * @param {monthly_salaryCreateManyArgs} args - Arguments to create many Monthly_salaries.
     * @example
     * // Create many Monthly_salaries
     * const monthly_salary = await prisma.monthly_salary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends monthly_salaryCreateManyArgs>(args?: SelectSubset<T, monthly_salaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monthly_salaries and returns the data saved in the database.
     * @param {monthly_salaryCreateManyAndReturnArgs} args - Arguments to create many Monthly_salaries.
     * @example
     * // Create many Monthly_salaries
     * const monthly_salary = await prisma.monthly_salary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monthly_salaries and only return the `id`
     * const monthly_salaryWithIdOnly = await prisma.monthly_salary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends monthly_salaryCreateManyAndReturnArgs>(args?: SelectSubset<T, monthly_salaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monthly_salaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Monthly_salary.
     * @param {monthly_salaryDeleteArgs} args - Arguments to delete one Monthly_salary.
     * @example
     * // Delete one Monthly_salary
     * const Monthly_salary = await prisma.monthly_salary.delete({
     *   where: {
     *     // ... filter to delete one Monthly_salary
     *   }
     * })
     * 
     */
    delete<T extends monthly_salaryDeleteArgs>(args: SelectSubset<T, monthly_salaryDeleteArgs<ExtArgs>>): Prisma__monthly_salaryClient<$Result.GetResult<Prisma.$monthly_salaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Monthly_salary.
     * @param {monthly_salaryUpdateArgs} args - Arguments to update one Monthly_salary.
     * @example
     * // Update one Monthly_salary
     * const monthly_salary = await prisma.monthly_salary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends monthly_salaryUpdateArgs>(args: SelectSubset<T, monthly_salaryUpdateArgs<ExtArgs>>): Prisma__monthly_salaryClient<$Result.GetResult<Prisma.$monthly_salaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Monthly_salaries.
     * @param {monthly_salaryDeleteManyArgs} args - Arguments to filter Monthly_salaries to delete.
     * @example
     * // Delete a few Monthly_salaries
     * const { count } = await prisma.monthly_salary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends monthly_salaryDeleteManyArgs>(args?: SelectSubset<T, monthly_salaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monthly_salaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_salaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monthly_salaries
     * const monthly_salary = await prisma.monthly_salary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends monthly_salaryUpdateManyArgs>(args: SelectSubset<T, monthly_salaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monthly_salaries and returns the data updated in the database.
     * @param {monthly_salaryUpdateManyAndReturnArgs} args - Arguments to update many Monthly_salaries.
     * @example
     * // Update many Monthly_salaries
     * const monthly_salary = await prisma.monthly_salary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Monthly_salaries and only return the `id`
     * const monthly_salaryWithIdOnly = await prisma.monthly_salary.updateManyAndReturn({
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
    updateManyAndReturn<T extends monthly_salaryUpdateManyAndReturnArgs>(args: SelectSubset<T, monthly_salaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monthly_salaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Monthly_salary.
     * @param {monthly_salaryUpsertArgs} args - Arguments to update or create a Monthly_salary.
     * @example
     * // Update or create a Monthly_salary
     * const monthly_salary = await prisma.monthly_salary.upsert({
     *   create: {
     *     // ... data to create a Monthly_salary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monthly_salary we want to update
     *   }
     * })
     */
    upsert<T extends monthly_salaryUpsertArgs>(args: SelectSubset<T, monthly_salaryUpsertArgs<ExtArgs>>): Prisma__monthly_salaryClient<$Result.GetResult<Prisma.$monthly_salaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Monthly_salaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_salaryCountArgs} args - Arguments to filter Monthly_salaries to count.
     * @example
     * // Count the number of Monthly_salaries
     * const count = await prisma.monthly_salary.count({
     *   where: {
     *     // ... the filter for the Monthly_salaries we want to count
     *   }
     * })
    **/
    count<T extends monthly_salaryCountArgs>(
      args?: Subset<T, monthly_salaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Monthly_salaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monthly_salary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Monthly_salaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Monthly_salaryAggregateArgs>(args: Subset<T, Monthly_salaryAggregateArgs>): Prisma.PrismaPromise<GetMonthly_salaryAggregateType<T>>

    /**
     * Group by Monthly_salary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_salaryGroupByArgs} args - Group by arguments.
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
      T extends monthly_salaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: monthly_salaryGroupByArgs['orderBy'] }
        : { orderBy?: monthly_salaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, monthly_salaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthly_salaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the monthly_salary model
   */
  readonly fields: monthly_salaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for monthly_salary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__monthly_salaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profiles<T extends monthly_salary$profilesArgs<ExtArgs> = {}>(args?: Subset<T, monthly_salary$profilesArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the monthly_salary model
   */
  interface monthly_salaryFieldRefs {
    readonly id: FieldRef<"monthly_salary", 'Int'>
    readonly profile_id: FieldRef<"monthly_salary", 'Int'>
    readonly base_salary: FieldRef<"monthly_salary", 'Float'>
    readonly month: FieldRef<"monthly_salary", 'Int'>
    readonly month_tips: FieldRef<"monthly_salary", 'Float'>
    readonly month_salary: FieldRef<"monthly_salary", 'Float'>
    readonly total_hours: FieldRef<"monthly_salary", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * monthly_salary findUnique
   */
  export type monthly_salaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_salary
     */
    select?: monthly_salarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_salary
     */
    omit?: monthly_salaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_salaryInclude<ExtArgs> | null
    /**
     * Filter, which monthly_salary to fetch.
     */
    where: monthly_salaryWhereUniqueInput
  }

  /**
   * monthly_salary findUniqueOrThrow
   */
  export type monthly_salaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_salary
     */
    select?: monthly_salarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_salary
     */
    omit?: monthly_salaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_salaryInclude<ExtArgs> | null
    /**
     * Filter, which monthly_salary to fetch.
     */
    where: monthly_salaryWhereUniqueInput
  }

  /**
   * monthly_salary findFirst
   */
  export type monthly_salaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_salary
     */
    select?: monthly_salarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_salary
     */
    omit?: monthly_salaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_salaryInclude<ExtArgs> | null
    /**
     * Filter, which monthly_salary to fetch.
     */
    where?: monthly_salaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monthly_salaries to fetch.
     */
    orderBy?: monthly_salaryOrderByWithRelationInput | monthly_salaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monthly_salaries.
     */
    cursor?: monthly_salaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monthly_salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monthly_salaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monthly_salaries.
     */
    distinct?: Monthly_salaryScalarFieldEnum | Monthly_salaryScalarFieldEnum[]
  }

  /**
   * monthly_salary findFirstOrThrow
   */
  export type monthly_salaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_salary
     */
    select?: monthly_salarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_salary
     */
    omit?: monthly_salaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_salaryInclude<ExtArgs> | null
    /**
     * Filter, which monthly_salary to fetch.
     */
    where?: monthly_salaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monthly_salaries to fetch.
     */
    orderBy?: monthly_salaryOrderByWithRelationInput | monthly_salaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monthly_salaries.
     */
    cursor?: monthly_salaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monthly_salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monthly_salaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monthly_salaries.
     */
    distinct?: Monthly_salaryScalarFieldEnum | Monthly_salaryScalarFieldEnum[]
  }

  /**
   * monthly_salary findMany
   */
  export type monthly_salaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_salary
     */
    select?: monthly_salarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_salary
     */
    omit?: monthly_salaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_salaryInclude<ExtArgs> | null
    /**
     * Filter, which monthly_salaries to fetch.
     */
    where?: monthly_salaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monthly_salaries to fetch.
     */
    orderBy?: monthly_salaryOrderByWithRelationInput | monthly_salaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing monthly_salaries.
     */
    cursor?: monthly_salaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monthly_salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monthly_salaries.
     */
    skip?: number
    distinct?: Monthly_salaryScalarFieldEnum | Monthly_salaryScalarFieldEnum[]
  }

  /**
   * monthly_salary create
   */
  export type monthly_salaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_salary
     */
    select?: monthly_salarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_salary
     */
    omit?: monthly_salaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_salaryInclude<ExtArgs> | null
    /**
     * The data needed to create a monthly_salary.
     */
    data?: XOR<monthly_salaryCreateInput, monthly_salaryUncheckedCreateInput>
  }

  /**
   * monthly_salary createMany
   */
  export type monthly_salaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many monthly_salaries.
     */
    data: monthly_salaryCreateManyInput | monthly_salaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * monthly_salary createManyAndReturn
   */
  export type monthly_salaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_salary
     */
    select?: monthly_salarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_salary
     */
    omit?: monthly_salaryOmit<ExtArgs> | null
    /**
     * The data used to create many monthly_salaries.
     */
    data: monthly_salaryCreateManyInput | monthly_salaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_salaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * monthly_salary update
   */
  export type monthly_salaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_salary
     */
    select?: monthly_salarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_salary
     */
    omit?: monthly_salaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_salaryInclude<ExtArgs> | null
    /**
     * The data needed to update a monthly_salary.
     */
    data: XOR<monthly_salaryUpdateInput, monthly_salaryUncheckedUpdateInput>
    /**
     * Choose, which monthly_salary to update.
     */
    where: monthly_salaryWhereUniqueInput
  }

  /**
   * monthly_salary updateMany
   */
  export type monthly_salaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update monthly_salaries.
     */
    data: XOR<monthly_salaryUpdateManyMutationInput, monthly_salaryUncheckedUpdateManyInput>
    /**
     * Filter which monthly_salaries to update
     */
    where?: monthly_salaryWhereInput
    /**
     * Limit how many monthly_salaries to update.
     */
    limit?: number
  }

  /**
   * monthly_salary updateManyAndReturn
   */
  export type monthly_salaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_salary
     */
    select?: monthly_salarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_salary
     */
    omit?: monthly_salaryOmit<ExtArgs> | null
    /**
     * The data used to update monthly_salaries.
     */
    data: XOR<monthly_salaryUpdateManyMutationInput, monthly_salaryUncheckedUpdateManyInput>
    /**
     * Filter which monthly_salaries to update
     */
    where?: monthly_salaryWhereInput
    /**
     * Limit how many monthly_salaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_salaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * monthly_salary upsert
   */
  export type monthly_salaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_salary
     */
    select?: monthly_salarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_salary
     */
    omit?: monthly_salaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_salaryInclude<ExtArgs> | null
    /**
     * The filter to search for the monthly_salary to update in case it exists.
     */
    where: monthly_salaryWhereUniqueInput
    /**
     * In case the monthly_salary found by the `where` argument doesn't exist, create a new monthly_salary with this data.
     */
    create: XOR<monthly_salaryCreateInput, monthly_salaryUncheckedCreateInput>
    /**
     * In case the monthly_salary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<monthly_salaryUpdateInput, monthly_salaryUncheckedUpdateInput>
  }

  /**
   * monthly_salary delete
   */
  export type monthly_salaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_salary
     */
    select?: monthly_salarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_salary
     */
    omit?: monthly_salaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_salaryInclude<ExtArgs> | null
    /**
     * Filter which monthly_salary to delete.
     */
    where: monthly_salaryWhereUniqueInput
  }

  /**
   * monthly_salary deleteMany
   */
  export type monthly_salaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monthly_salaries to delete
     */
    where?: monthly_salaryWhereInput
    /**
     * Limit how many monthly_salaries to delete.
     */
    limit?: number
  }

  /**
   * monthly_salary.profiles
   */
  export type monthly_salary$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    where?: profilesWhereInput
  }

  /**
   * monthly_salary without action
   */
  export type monthly_salaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_salary
     */
    select?: monthly_salarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_salary
     */
    omit?: monthly_salaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_salaryInclude<ExtArgs> | null
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


  export const Default_hoursScalarFieldEnum: {
    id: 'id',
    startHour: 'startHour',
    startMin: 'startMin',
    endHour: 'endHour',
    endMin: 'endMin',
    type_shift: 'type_shift',
    start_time: 'start_time',
    end_time: 'end_time'
  };

  export type Default_hoursScalarFieldEnum = (typeof Default_hoursScalarFieldEnum)[keyof typeof Default_hoursScalarFieldEnum]


  export const Hours_worked_daysScalarFieldEnum: {
    id: 'id',
    worked_day_id: 'worked_day_id',
    hours: 'hours',
    type_hours_id: 'type_hours_id'
  };

  export type Hours_worked_daysScalarFieldEnum = (typeof Hours_worked_daysScalarFieldEnum)[keyof typeof Hours_worked_daysScalarFieldEnum]


  export const Profile_worked_daysScalarFieldEnum: {
    id: 'id',
    worked_day_id: 'worked_day_id',
    profile_id: 'profile_id'
  };

  export type Profile_worked_daysScalarFieldEnum = (typeof Profile_worked_daysScalarFieldEnum)[keyof typeof Profile_worked_daysScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const Type_hoursScalarFieldEnum: {
    id: 'id',
    price: 'price',
    type: 'type'
  };

  export type Type_hoursScalarFieldEnum = (typeof Type_hoursScalarFieldEnum)[keyof typeof Type_hoursScalarFieldEnum]


  export const Worked_daysScalarFieldEnum: {
    id: 'id',
    date: 'date',
    startHour: 'startHour',
    startMin: 'startMin',
    endHour: 'endHour',
    endMin: 'endMin',
    break: 'break',
    sunday: 'sunday',
    holiday: 'holiday'
  };

  export type Worked_daysScalarFieldEnum = (typeof Worked_daysScalarFieldEnum)[keyof typeof Worked_daysScalarFieldEnum]


  export const Monthly_salaryScalarFieldEnum: {
    id: 'id',
    profile_id: 'profile_id',
    base_salary: 'base_salary',
    month: 'month',
    month_tips: 'month_tips',
    month_salary: 'month_salary',
    total_hours: 'total_hours'
  };

  export type Monthly_salaryScalarFieldEnum = (typeof Monthly_salaryScalarFieldEnum)[keyof typeof Monthly_salaryScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    
  /**
   * Deep Input Types
   */


  export type default_hoursWhereInput = {
    AND?: default_hoursWhereInput | default_hoursWhereInput[]
    OR?: default_hoursWhereInput[]
    NOT?: default_hoursWhereInput | default_hoursWhereInput[]
    id?: IntFilter<"default_hours"> | number
    startHour?: StringNullableFilter<"default_hours"> | string | null
    startMin?: StringNullableFilter<"default_hours"> | string | null
    endHour?: StringNullableFilter<"default_hours"> | string | null
    endMin?: StringNullableFilter<"default_hours"> | string | null
    type_shift?: StringNullableFilter<"default_hours"> | string | null
    start_time?: DateTimeNullableFilter<"default_hours"> | Date | string | null
    end_time?: DateTimeNullableFilter<"default_hours"> | Date | string | null
  }

  export type default_hoursOrderByWithRelationInput = {
    id?: SortOrder
    startHour?: SortOrderInput | SortOrder
    startMin?: SortOrderInput | SortOrder
    endHour?: SortOrderInput | SortOrder
    endMin?: SortOrderInput | SortOrder
    type_shift?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
  }

  export type default_hoursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: default_hoursWhereInput | default_hoursWhereInput[]
    OR?: default_hoursWhereInput[]
    NOT?: default_hoursWhereInput | default_hoursWhereInput[]
    startHour?: StringNullableFilter<"default_hours"> | string | null
    startMin?: StringNullableFilter<"default_hours"> | string | null
    endHour?: StringNullableFilter<"default_hours"> | string | null
    endMin?: StringNullableFilter<"default_hours"> | string | null
    type_shift?: StringNullableFilter<"default_hours"> | string | null
    start_time?: DateTimeNullableFilter<"default_hours"> | Date | string | null
    end_time?: DateTimeNullableFilter<"default_hours"> | Date | string | null
  }, "id">

  export type default_hoursOrderByWithAggregationInput = {
    id?: SortOrder
    startHour?: SortOrderInput | SortOrder
    startMin?: SortOrderInput | SortOrder
    endHour?: SortOrderInput | SortOrder
    endMin?: SortOrderInput | SortOrder
    type_shift?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    _count?: default_hoursCountOrderByAggregateInput
    _avg?: default_hoursAvgOrderByAggregateInput
    _max?: default_hoursMaxOrderByAggregateInput
    _min?: default_hoursMinOrderByAggregateInput
    _sum?: default_hoursSumOrderByAggregateInput
  }

  export type default_hoursScalarWhereWithAggregatesInput = {
    AND?: default_hoursScalarWhereWithAggregatesInput | default_hoursScalarWhereWithAggregatesInput[]
    OR?: default_hoursScalarWhereWithAggregatesInput[]
    NOT?: default_hoursScalarWhereWithAggregatesInput | default_hoursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"default_hours"> | number
    startHour?: StringNullableWithAggregatesFilter<"default_hours"> | string | null
    startMin?: StringNullableWithAggregatesFilter<"default_hours"> | string | null
    endHour?: StringNullableWithAggregatesFilter<"default_hours"> | string | null
    endMin?: StringNullableWithAggregatesFilter<"default_hours"> | string | null
    type_shift?: StringNullableWithAggregatesFilter<"default_hours"> | string | null
    start_time?: DateTimeNullableWithAggregatesFilter<"default_hours"> | Date | string | null
    end_time?: DateTimeNullableWithAggregatesFilter<"default_hours"> | Date | string | null
  }

  export type hours_worked_daysWhereInput = {
    AND?: hours_worked_daysWhereInput | hours_worked_daysWhereInput[]
    OR?: hours_worked_daysWhereInput[]
    NOT?: hours_worked_daysWhereInput | hours_worked_daysWhereInput[]
    id?: IntFilter<"hours_worked_days"> | number
    worked_day_id?: IntNullableFilter<"hours_worked_days"> | number | null
    hours?: FloatNullableFilter<"hours_worked_days"> | number | null
    type_hours_id?: IntNullableFilter<"hours_worked_days"> | number | null
    type_hours?: XOR<Type_hoursNullableScalarRelationFilter, type_hoursWhereInput> | null
    worked_days?: XOR<Worked_daysNullableScalarRelationFilter, worked_daysWhereInput> | null
  }

  export type hours_worked_daysOrderByWithRelationInput = {
    id?: SortOrder
    worked_day_id?: SortOrderInput | SortOrder
    hours?: SortOrderInput | SortOrder
    type_hours_id?: SortOrderInput | SortOrder
    type_hours?: type_hoursOrderByWithRelationInput
    worked_days?: worked_daysOrderByWithRelationInput
  }

  export type hours_worked_daysWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hours_worked_daysWhereInput | hours_worked_daysWhereInput[]
    OR?: hours_worked_daysWhereInput[]
    NOT?: hours_worked_daysWhereInput | hours_worked_daysWhereInput[]
    worked_day_id?: IntNullableFilter<"hours_worked_days"> | number | null
    hours?: FloatNullableFilter<"hours_worked_days"> | number | null
    type_hours_id?: IntNullableFilter<"hours_worked_days"> | number | null
    type_hours?: XOR<Type_hoursNullableScalarRelationFilter, type_hoursWhereInput> | null
    worked_days?: XOR<Worked_daysNullableScalarRelationFilter, worked_daysWhereInput> | null
  }, "id">

  export type hours_worked_daysOrderByWithAggregationInput = {
    id?: SortOrder
    worked_day_id?: SortOrderInput | SortOrder
    hours?: SortOrderInput | SortOrder
    type_hours_id?: SortOrderInput | SortOrder
    _count?: hours_worked_daysCountOrderByAggregateInput
    _avg?: hours_worked_daysAvgOrderByAggregateInput
    _max?: hours_worked_daysMaxOrderByAggregateInput
    _min?: hours_worked_daysMinOrderByAggregateInput
    _sum?: hours_worked_daysSumOrderByAggregateInput
  }

  export type hours_worked_daysScalarWhereWithAggregatesInput = {
    AND?: hours_worked_daysScalarWhereWithAggregatesInput | hours_worked_daysScalarWhereWithAggregatesInput[]
    OR?: hours_worked_daysScalarWhereWithAggregatesInput[]
    NOT?: hours_worked_daysScalarWhereWithAggregatesInput | hours_worked_daysScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hours_worked_days"> | number
    worked_day_id?: IntNullableWithAggregatesFilter<"hours_worked_days"> | number | null
    hours?: FloatNullableWithAggregatesFilter<"hours_worked_days"> | number | null
    type_hours_id?: IntNullableWithAggregatesFilter<"hours_worked_days"> | number | null
  }

  export type profile_worked_daysWhereInput = {
    AND?: profile_worked_daysWhereInput | profile_worked_daysWhereInput[]
    OR?: profile_worked_daysWhereInput[]
    NOT?: profile_worked_daysWhereInput | profile_worked_daysWhereInput[]
    id?: IntFilter<"profile_worked_days"> | number
    worked_day_id?: IntNullableFilter<"profile_worked_days"> | number | null
    profile_id?: IntNullableFilter<"profile_worked_days"> | number | null
    profiles?: XOR<ProfilesNullableScalarRelationFilter, profilesWhereInput> | null
    worked_days?: XOR<Worked_daysNullableScalarRelationFilter, worked_daysWhereInput> | null
  }

  export type profile_worked_daysOrderByWithRelationInput = {
    id?: SortOrder
    worked_day_id?: SortOrderInput | SortOrder
    profile_id?: SortOrderInput | SortOrder
    profiles?: profilesOrderByWithRelationInput
    worked_days?: worked_daysOrderByWithRelationInput
  }

  export type profile_worked_daysWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: profile_worked_daysWhereInput | profile_worked_daysWhereInput[]
    OR?: profile_worked_daysWhereInput[]
    NOT?: profile_worked_daysWhereInput | profile_worked_daysWhereInput[]
    worked_day_id?: IntNullableFilter<"profile_worked_days"> | number | null
    profile_id?: IntNullableFilter<"profile_worked_days"> | number | null
    profiles?: XOR<ProfilesNullableScalarRelationFilter, profilesWhereInput> | null
    worked_days?: XOR<Worked_daysNullableScalarRelationFilter, worked_daysWhereInput> | null
  }, "id">

  export type profile_worked_daysOrderByWithAggregationInput = {
    id?: SortOrder
    worked_day_id?: SortOrderInput | SortOrder
    profile_id?: SortOrderInput | SortOrder
    _count?: profile_worked_daysCountOrderByAggregateInput
    _avg?: profile_worked_daysAvgOrderByAggregateInput
    _max?: profile_worked_daysMaxOrderByAggregateInput
    _min?: profile_worked_daysMinOrderByAggregateInput
    _sum?: profile_worked_daysSumOrderByAggregateInput
  }

  export type profile_worked_daysScalarWhereWithAggregatesInput = {
    AND?: profile_worked_daysScalarWhereWithAggregatesInput | profile_worked_daysScalarWhereWithAggregatesInput[]
    OR?: profile_worked_daysScalarWhereWithAggregatesInput[]
    NOT?: profile_worked_daysScalarWhereWithAggregatesInput | profile_worked_daysScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"profile_worked_days"> | number
    worked_day_id?: IntNullableWithAggregatesFilter<"profile_worked_days"> | number | null
    profile_id?: IntNullableWithAggregatesFilter<"profile_worked_days"> | number | null
  }

  export type profilesWhereInput = {
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    id?: IntFilter<"profiles"> | number
    name?: StringNullableFilter<"profiles"> | string | null
    monthly_salary?: Monthly_salaryListRelationFilter
    profile_worked_days?: Profile_worked_daysListRelationFilter
  }

  export type profilesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    monthly_salary?: monthly_salaryOrderByRelationAggregateInput
    profile_worked_days?: profile_worked_daysOrderByRelationAggregateInput
  }

  export type profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    name?: StringNullableFilter<"profiles"> | string | null
    monthly_salary?: Monthly_salaryListRelationFilter
    profile_worked_days?: Profile_worked_daysListRelationFilter
  }, "id">

  export type profilesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: profilesCountOrderByAggregateInput
    _avg?: profilesAvgOrderByAggregateInput
    _max?: profilesMaxOrderByAggregateInput
    _min?: profilesMinOrderByAggregateInput
    _sum?: profilesSumOrderByAggregateInput
  }

  export type profilesScalarWhereWithAggregatesInput = {
    AND?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    OR?: profilesScalarWhereWithAggregatesInput[]
    NOT?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"profiles"> | number
    name?: StringNullableWithAggregatesFilter<"profiles"> | string | null
  }

  export type type_hoursWhereInput = {
    AND?: type_hoursWhereInput | type_hoursWhereInput[]
    OR?: type_hoursWhereInput[]
    NOT?: type_hoursWhereInput | type_hoursWhereInput[]
    id?: IntFilter<"type_hours"> | number
    price?: DecimalNullableFilter<"type_hours"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableFilter<"type_hours"> | string | null
    hours_worked_days?: Hours_worked_daysListRelationFilter
  }

  export type type_hoursOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    hours_worked_days?: hours_worked_daysOrderByRelationAggregateInput
  }

  export type type_hoursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: type_hoursWhereInput | type_hoursWhereInput[]
    OR?: type_hoursWhereInput[]
    NOT?: type_hoursWhereInput | type_hoursWhereInput[]
    price?: DecimalNullableFilter<"type_hours"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableFilter<"type_hours"> | string | null
    hours_worked_days?: Hours_worked_daysListRelationFilter
  }, "id">

  export type type_hoursOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _count?: type_hoursCountOrderByAggregateInput
    _avg?: type_hoursAvgOrderByAggregateInput
    _max?: type_hoursMaxOrderByAggregateInput
    _min?: type_hoursMinOrderByAggregateInput
    _sum?: type_hoursSumOrderByAggregateInput
  }

  export type type_hoursScalarWhereWithAggregatesInput = {
    AND?: type_hoursScalarWhereWithAggregatesInput | type_hoursScalarWhereWithAggregatesInput[]
    OR?: type_hoursScalarWhereWithAggregatesInput[]
    NOT?: type_hoursScalarWhereWithAggregatesInput | type_hoursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"type_hours"> | number
    price?: DecimalNullableWithAggregatesFilter<"type_hours"> | Decimal | DecimalJsLike | number | string | null
    type?: StringNullableWithAggregatesFilter<"type_hours"> | string | null
  }

  export type worked_daysWhereInput = {
    AND?: worked_daysWhereInput | worked_daysWhereInput[]
    OR?: worked_daysWhereInput[]
    NOT?: worked_daysWhereInput | worked_daysWhereInput[]
    id?: IntFilter<"worked_days"> | number
    date?: DateTimeNullableFilter<"worked_days"> | Date | string | null
    startHour?: StringNullableFilter<"worked_days"> | string | null
    startMin?: StringNullableFilter<"worked_days"> | string | null
    endHour?: StringNullableFilter<"worked_days"> | string | null
    endMin?: StringNullableFilter<"worked_days"> | string | null
    break?: IntNullableFilter<"worked_days"> | number | null
    sunday?: IntNullableFilter<"worked_days"> | number | null
    holiday?: IntNullableFilter<"worked_days"> | number | null
    hours_worked_days?: Hours_worked_daysListRelationFilter
    profile_worked_days?: Profile_worked_daysListRelationFilter
  }

  export type worked_daysOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrderInput | SortOrder
    startHour?: SortOrderInput | SortOrder
    startMin?: SortOrderInput | SortOrder
    endHour?: SortOrderInput | SortOrder
    endMin?: SortOrderInput | SortOrder
    break?: SortOrderInput | SortOrder
    sunday?: SortOrderInput | SortOrder
    holiday?: SortOrderInput | SortOrder
    hours_worked_days?: hours_worked_daysOrderByRelationAggregateInput
    profile_worked_days?: profile_worked_daysOrderByRelationAggregateInput
  }

  export type worked_daysWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: worked_daysWhereInput | worked_daysWhereInput[]
    OR?: worked_daysWhereInput[]
    NOT?: worked_daysWhereInput | worked_daysWhereInput[]
    date?: DateTimeNullableFilter<"worked_days"> | Date | string | null
    startHour?: StringNullableFilter<"worked_days"> | string | null
    startMin?: StringNullableFilter<"worked_days"> | string | null
    endHour?: StringNullableFilter<"worked_days"> | string | null
    endMin?: StringNullableFilter<"worked_days"> | string | null
    break?: IntNullableFilter<"worked_days"> | number | null
    sunday?: IntNullableFilter<"worked_days"> | number | null
    holiday?: IntNullableFilter<"worked_days"> | number | null
    hours_worked_days?: Hours_worked_daysListRelationFilter
    profile_worked_days?: Profile_worked_daysListRelationFilter
  }, "id">

  export type worked_daysOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrderInput | SortOrder
    startHour?: SortOrderInput | SortOrder
    startMin?: SortOrderInput | SortOrder
    endHour?: SortOrderInput | SortOrder
    endMin?: SortOrderInput | SortOrder
    break?: SortOrderInput | SortOrder
    sunday?: SortOrderInput | SortOrder
    holiday?: SortOrderInput | SortOrder
    _count?: worked_daysCountOrderByAggregateInput
    _avg?: worked_daysAvgOrderByAggregateInput
    _max?: worked_daysMaxOrderByAggregateInput
    _min?: worked_daysMinOrderByAggregateInput
    _sum?: worked_daysSumOrderByAggregateInput
  }

  export type worked_daysScalarWhereWithAggregatesInput = {
    AND?: worked_daysScalarWhereWithAggregatesInput | worked_daysScalarWhereWithAggregatesInput[]
    OR?: worked_daysScalarWhereWithAggregatesInput[]
    NOT?: worked_daysScalarWhereWithAggregatesInput | worked_daysScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"worked_days"> | number
    date?: DateTimeNullableWithAggregatesFilter<"worked_days"> | Date | string | null
    startHour?: StringNullableWithAggregatesFilter<"worked_days"> | string | null
    startMin?: StringNullableWithAggregatesFilter<"worked_days"> | string | null
    endHour?: StringNullableWithAggregatesFilter<"worked_days"> | string | null
    endMin?: StringNullableWithAggregatesFilter<"worked_days"> | string | null
    break?: IntNullableWithAggregatesFilter<"worked_days"> | number | null
    sunday?: IntNullableWithAggregatesFilter<"worked_days"> | number | null
    holiday?: IntNullableWithAggregatesFilter<"worked_days"> | number | null
  }

  export type monthly_salaryWhereInput = {
    AND?: monthly_salaryWhereInput | monthly_salaryWhereInput[]
    OR?: monthly_salaryWhereInput[]
    NOT?: monthly_salaryWhereInput | monthly_salaryWhereInput[]
    id?: IntFilter<"monthly_salary"> | number
    profile_id?: IntNullableFilter<"monthly_salary"> | number | null
    base_salary?: FloatNullableFilter<"monthly_salary"> | number | null
    month?: IntNullableFilter<"monthly_salary"> | number | null
    month_tips?: FloatNullableFilter<"monthly_salary"> | number | null
    month_salary?: FloatNullableFilter<"monthly_salary"> | number | null
    total_hours?: FloatNullableFilter<"monthly_salary"> | number | null
    profiles?: XOR<ProfilesNullableScalarRelationFilter, profilesWhereInput> | null
  }

  export type monthly_salaryOrderByWithRelationInput = {
    id?: SortOrder
    profile_id?: SortOrderInput | SortOrder
    base_salary?: SortOrderInput | SortOrder
    month?: SortOrderInput | SortOrder
    month_tips?: SortOrderInput | SortOrder
    month_salary?: SortOrderInput | SortOrder
    total_hours?: SortOrderInput | SortOrder
    profiles?: profilesOrderByWithRelationInput
  }

  export type monthly_salaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: monthly_salaryWhereInput | monthly_salaryWhereInput[]
    OR?: monthly_salaryWhereInput[]
    NOT?: monthly_salaryWhereInput | monthly_salaryWhereInput[]
    profile_id?: IntNullableFilter<"monthly_salary"> | number | null
    base_salary?: FloatNullableFilter<"monthly_salary"> | number | null
    month?: IntNullableFilter<"monthly_salary"> | number | null
    month_tips?: FloatNullableFilter<"monthly_salary"> | number | null
    month_salary?: FloatNullableFilter<"monthly_salary"> | number | null
    total_hours?: FloatNullableFilter<"monthly_salary"> | number | null
    profiles?: XOR<ProfilesNullableScalarRelationFilter, profilesWhereInput> | null
  }, "id">

  export type monthly_salaryOrderByWithAggregationInput = {
    id?: SortOrder
    profile_id?: SortOrderInput | SortOrder
    base_salary?: SortOrderInput | SortOrder
    month?: SortOrderInput | SortOrder
    month_tips?: SortOrderInput | SortOrder
    month_salary?: SortOrderInput | SortOrder
    total_hours?: SortOrderInput | SortOrder
    _count?: monthly_salaryCountOrderByAggregateInput
    _avg?: monthly_salaryAvgOrderByAggregateInput
    _max?: monthly_salaryMaxOrderByAggregateInput
    _min?: monthly_salaryMinOrderByAggregateInput
    _sum?: monthly_salarySumOrderByAggregateInput
  }

  export type monthly_salaryScalarWhereWithAggregatesInput = {
    AND?: monthly_salaryScalarWhereWithAggregatesInput | monthly_salaryScalarWhereWithAggregatesInput[]
    OR?: monthly_salaryScalarWhereWithAggregatesInput[]
    NOT?: monthly_salaryScalarWhereWithAggregatesInput | monthly_salaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"monthly_salary"> | number
    profile_id?: IntNullableWithAggregatesFilter<"monthly_salary"> | number | null
    base_salary?: FloatNullableWithAggregatesFilter<"monthly_salary"> | number | null
    month?: IntNullableWithAggregatesFilter<"monthly_salary"> | number | null
    month_tips?: FloatNullableWithAggregatesFilter<"monthly_salary"> | number | null
    month_salary?: FloatNullableWithAggregatesFilter<"monthly_salary"> | number | null
    total_hours?: FloatNullableWithAggregatesFilter<"monthly_salary"> | number | null
  }

  export type default_hoursCreateInput = {
    startHour?: string | null
    startMin?: string | null
    endHour?: string | null
    endMin?: string | null
    type_shift?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
  }

  export type default_hoursUncheckedCreateInput = {
    id?: number
    startHour?: string | null
    startMin?: string | null
    endHour?: string | null
    endMin?: string | null
    type_shift?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
  }

  export type default_hoursUpdateInput = {
    startHour?: NullableStringFieldUpdateOperationsInput | string | null
    startMin?: NullableStringFieldUpdateOperationsInput | string | null
    endHour?: NullableStringFieldUpdateOperationsInput | string | null
    endMin?: NullableStringFieldUpdateOperationsInput | string | null
    type_shift?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type default_hoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startHour?: NullableStringFieldUpdateOperationsInput | string | null
    startMin?: NullableStringFieldUpdateOperationsInput | string | null
    endHour?: NullableStringFieldUpdateOperationsInput | string | null
    endMin?: NullableStringFieldUpdateOperationsInput | string | null
    type_shift?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type default_hoursCreateManyInput = {
    id?: number
    startHour?: string | null
    startMin?: string | null
    endHour?: string | null
    endMin?: string | null
    type_shift?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
  }

  export type default_hoursUpdateManyMutationInput = {
    startHour?: NullableStringFieldUpdateOperationsInput | string | null
    startMin?: NullableStringFieldUpdateOperationsInput | string | null
    endHour?: NullableStringFieldUpdateOperationsInput | string | null
    endMin?: NullableStringFieldUpdateOperationsInput | string | null
    type_shift?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type default_hoursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startHour?: NullableStringFieldUpdateOperationsInput | string | null
    startMin?: NullableStringFieldUpdateOperationsInput | string | null
    endHour?: NullableStringFieldUpdateOperationsInput | string | null
    endMin?: NullableStringFieldUpdateOperationsInput | string | null
    type_shift?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type hours_worked_daysCreateInput = {
    hours?: number | null
    type_hours?: type_hoursCreateNestedOneWithoutHours_worked_daysInput
    worked_days?: worked_daysCreateNestedOneWithoutHours_worked_daysInput
  }

  export type hours_worked_daysUncheckedCreateInput = {
    id?: number
    worked_day_id?: number | null
    hours?: number | null
    type_hours_id?: number | null
  }

  export type hours_worked_daysUpdateInput = {
    hours?: NullableFloatFieldUpdateOperationsInput | number | null
    type_hours?: type_hoursUpdateOneWithoutHours_worked_daysNestedInput
    worked_days?: worked_daysUpdateOneWithoutHours_worked_daysNestedInput
  }

  export type hours_worked_daysUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    worked_day_id?: NullableIntFieldUpdateOperationsInput | number | null
    hours?: NullableFloatFieldUpdateOperationsInput | number | null
    type_hours_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type hours_worked_daysCreateManyInput = {
    id?: number
    worked_day_id?: number | null
    hours?: number | null
    type_hours_id?: number | null
  }

  export type hours_worked_daysUpdateManyMutationInput = {
    hours?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type hours_worked_daysUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    worked_day_id?: NullableIntFieldUpdateOperationsInput | number | null
    hours?: NullableFloatFieldUpdateOperationsInput | number | null
    type_hours_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type profile_worked_daysCreateInput = {
    profiles?: profilesCreateNestedOneWithoutProfile_worked_daysInput
    worked_days?: worked_daysCreateNestedOneWithoutProfile_worked_daysInput
  }

  export type profile_worked_daysUncheckedCreateInput = {
    id?: number
    worked_day_id?: number | null
    profile_id?: number | null
  }

  export type profile_worked_daysUpdateInput = {
    profiles?: profilesUpdateOneWithoutProfile_worked_daysNestedInput
    worked_days?: worked_daysUpdateOneWithoutProfile_worked_daysNestedInput
  }

  export type profile_worked_daysUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    worked_day_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type profile_worked_daysCreateManyInput = {
    id?: number
    worked_day_id?: number | null
    profile_id?: number | null
  }

  export type profile_worked_daysUpdateManyMutationInput = {

  }

  export type profile_worked_daysUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    worked_day_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type profilesCreateInput = {
    name?: string | null
    monthly_salary?: monthly_salaryCreateNestedManyWithoutProfilesInput
    profile_worked_days?: profile_worked_daysCreateNestedManyWithoutProfilesInput
  }

  export type profilesUncheckedCreateInput = {
    id?: number
    name?: string | null
    monthly_salary?: monthly_salaryUncheckedCreateNestedManyWithoutProfilesInput
    profile_worked_days?: profile_worked_daysUncheckedCreateNestedManyWithoutProfilesInput
  }

  export type profilesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_salary?: monthly_salaryUpdateManyWithoutProfilesNestedInput
    profile_worked_days?: profile_worked_daysUpdateManyWithoutProfilesNestedInput
  }

  export type profilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_salary?: monthly_salaryUncheckedUpdateManyWithoutProfilesNestedInput
    profile_worked_days?: profile_worked_daysUncheckedUpdateManyWithoutProfilesNestedInput
  }

  export type profilesCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type profilesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type type_hoursCreateInput = {
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    hours_worked_days?: hours_worked_daysCreateNestedManyWithoutType_hoursInput
  }

  export type type_hoursUncheckedCreateInput = {
    id?: number
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
    hours_worked_days?: hours_worked_daysUncheckedCreateNestedManyWithoutType_hoursInput
  }

  export type type_hoursUpdateInput = {
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    hours_worked_days?: hours_worked_daysUpdateManyWithoutType_hoursNestedInput
  }

  export type type_hoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    hours_worked_days?: hours_worked_daysUncheckedUpdateManyWithoutType_hoursNestedInput
  }

  export type type_hoursCreateManyInput = {
    id?: number
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
  }

  export type type_hoursUpdateManyMutationInput = {
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type type_hoursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type worked_daysCreateInput = {
    date?: Date | string | null
    startHour?: string | null
    startMin?: string | null
    endHour?: string | null
    endMin?: string | null
    break?: number | null
    sunday?: number | null
    holiday?: number | null
    hours_worked_days?: hours_worked_daysCreateNestedManyWithoutWorked_daysInput
    profile_worked_days?: profile_worked_daysCreateNestedManyWithoutWorked_daysInput
  }

  export type worked_daysUncheckedCreateInput = {
    id?: number
    date?: Date | string | null
    startHour?: string | null
    startMin?: string | null
    endHour?: string | null
    endMin?: string | null
    break?: number | null
    sunday?: number | null
    holiday?: number | null
    hours_worked_days?: hours_worked_daysUncheckedCreateNestedManyWithoutWorked_daysInput
    profile_worked_days?: profile_worked_daysUncheckedCreateNestedManyWithoutWorked_daysInput
  }

  export type worked_daysUpdateInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startHour?: NullableStringFieldUpdateOperationsInput | string | null
    startMin?: NullableStringFieldUpdateOperationsInput | string | null
    endHour?: NullableStringFieldUpdateOperationsInput | string | null
    endMin?: NullableStringFieldUpdateOperationsInput | string | null
    break?: NullableIntFieldUpdateOperationsInput | number | null
    sunday?: NullableIntFieldUpdateOperationsInput | number | null
    holiday?: NullableIntFieldUpdateOperationsInput | number | null
    hours_worked_days?: hours_worked_daysUpdateManyWithoutWorked_daysNestedInput
    profile_worked_days?: profile_worked_daysUpdateManyWithoutWorked_daysNestedInput
  }

  export type worked_daysUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startHour?: NullableStringFieldUpdateOperationsInput | string | null
    startMin?: NullableStringFieldUpdateOperationsInput | string | null
    endHour?: NullableStringFieldUpdateOperationsInput | string | null
    endMin?: NullableStringFieldUpdateOperationsInput | string | null
    break?: NullableIntFieldUpdateOperationsInput | number | null
    sunday?: NullableIntFieldUpdateOperationsInput | number | null
    holiday?: NullableIntFieldUpdateOperationsInput | number | null
    hours_worked_days?: hours_worked_daysUncheckedUpdateManyWithoutWorked_daysNestedInput
    profile_worked_days?: profile_worked_daysUncheckedUpdateManyWithoutWorked_daysNestedInput
  }

  export type worked_daysCreateManyInput = {
    id?: number
    date?: Date | string | null
    startHour?: string | null
    startMin?: string | null
    endHour?: string | null
    endMin?: string | null
    break?: number | null
    sunday?: number | null
    holiday?: number | null
  }

  export type worked_daysUpdateManyMutationInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startHour?: NullableStringFieldUpdateOperationsInput | string | null
    startMin?: NullableStringFieldUpdateOperationsInput | string | null
    endHour?: NullableStringFieldUpdateOperationsInput | string | null
    endMin?: NullableStringFieldUpdateOperationsInput | string | null
    break?: NullableIntFieldUpdateOperationsInput | number | null
    sunday?: NullableIntFieldUpdateOperationsInput | number | null
    holiday?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type worked_daysUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startHour?: NullableStringFieldUpdateOperationsInput | string | null
    startMin?: NullableStringFieldUpdateOperationsInput | string | null
    endHour?: NullableStringFieldUpdateOperationsInput | string | null
    endMin?: NullableStringFieldUpdateOperationsInput | string | null
    break?: NullableIntFieldUpdateOperationsInput | number | null
    sunday?: NullableIntFieldUpdateOperationsInput | number | null
    holiday?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type monthly_salaryCreateInput = {
    base_salary?: number | null
    month?: number | null
    month_tips?: number | null
    month_salary?: number | null
    total_hours?: number | null
    profiles?: profilesCreateNestedOneWithoutMonthly_salaryInput
  }

  export type monthly_salaryUncheckedCreateInput = {
    id?: number
    profile_id?: number | null
    base_salary?: number | null
    month?: number | null
    month_tips?: number | null
    month_salary?: number | null
    total_hours?: number | null
  }

  export type monthly_salaryUpdateInput = {
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    month?: NullableIntFieldUpdateOperationsInput | number | null
    month_tips?: NullableFloatFieldUpdateOperationsInput | number | null
    month_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    total_hours?: NullableFloatFieldUpdateOperationsInput | number | null
    profiles?: profilesUpdateOneWithoutMonthly_salaryNestedInput
  }

  export type monthly_salaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    month?: NullableIntFieldUpdateOperationsInput | number | null
    month_tips?: NullableFloatFieldUpdateOperationsInput | number | null
    month_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    total_hours?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type monthly_salaryCreateManyInput = {
    id?: number
    profile_id?: number | null
    base_salary?: number | null
    month?: number | null
    month_tips?: number | null
    month_salary?: number | null
    total_hours?: number | null
  }

  export type monthly_salaryUpdateManyMutationInput = {
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    month?: NullableIntFieldUpdateOperationsInput | number | null
    month_tips?: NullableFloatFieldUpdateOperationsInput | number | null
    month_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    total_hours?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type monthly_salaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    month?: NullableIntFieldUpdateOperationsInput | number | null
    month_tips?: NullableFloatFieldUpdateOperationsInput | number | null
    month_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    total_hours?: NullableFloatFieldUpdateOperationsInput | number | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type default_hoursCountOrderByAggregateInput = {
    id?: SortOrder
    startHour?: SortOrder
    startMin?: SortOrder
    endHour?: SortOrder
    endMin?: SortOrder
    type_shift?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type default_hoursAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type default_hoursMaxOrderByAggregateInput = {
    id?: SortOrder
    startHour?: SortOrder
    startMin?: SortOrder
    endHour?: SortOrder
    endMin?: SortOrder
    type_shift?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type default_hoursMinOrderByAggregateInput = {
    id?: SortOrder
    startHour?: SortOrder
    startMin?: SortOrder
    endHour?: SortOrder
    endMin?: SortOrder
    type_shift?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type default_hoursSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Type_hoursNullableScalarRelationFilter = {
    is?: type_hoursWhereInput | null
    isNot?: type_hoursWhereInput | null
  }

  export type Worked_daysNullableScalarRelationFilter = {
    is?: worked_daysWhereInput | null
    isNot?: worked_daysWhereInput | null
  }

  export type hours_worked_daysCountOrderByAggregateInput = {
    id?: SortOrder
    worked_day_id?: SortOrder
    hours?: SortOrder
    type_hours_id?: SortOrder
  }

  export type hours_worked_daysAvgOrderByAggregateInput = {
    id?: SortOrder
    worked_day_id?: SortOrder
    hours?: SortOrder
    type_hours_id?: SortOrder
  }

  export type hours_worked_daysMaxOrderByAggregateInput = {
    id?: SortOrder
    worked_day_id?: SortOrder
    hours?: SortOrder
    type_hours_id?: SortOrder
  }

  export type hours_worked_daysMinOrderByAggregateInput = {
    id?: SortOrder
    worked_day_id?: SortOrder
    hours?: SortOrder
    type_hours_id?: SortOrder
  }

  export type hours_worked_daysSumOrderByAggregateInput = {
    id?: SortOrder
    worked_day_id?: SortOrder
    hours?: SortOrder
    type_hours_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProfilesNullableScalarRelationFilter = {
    is?: profilesWhereInput | null
    isNot?: profilesWhereInput | null
  }

  export type profile_worked_daysCountOrderByAggregateInput = {
    id?: SortOrder
    worked_day_id?: SortOrder
    profile_id?: SortOrder
  }

  export type profile_worked_daysAvgOrderByAggregateInput = {
    id?: SortOrder
    worked_day_id?: SortOrder
    profile_id?: SortOrder
  }

  export type profile_worked_daysMaxOrderByAggregateInput = {
    id?: SortOrder
    worked_day_id?: SortOrder
    profile_id?: SortOrder
  }

  export type profile_worked_daysMinOrderByAggregateInput = {
    id?: SortOrder
    worked_day_id?: SortOrder
    profile_id?: SortOrder
  }

  export type profile_worked_daysSumOrderByAggregateInput = {
    id?: SortOrder
    worked_day_id?: SortOrder
    profile_id?: SortOrder
  }

  export type Monthly_salaryListRelationFilter = {
    every?: monthly_salaryWhereInput
    some?: monthly_salaryWhereInput
    none?: monthly_salaryWhereInput
  }

  export type Profile_worked_daysListRelationFilter = {
    every?: profile_worked_daysWhereInput
    some?: profile_worked_daysWhereInput
    none?: profile_worked_daysWhereInput
  }

  export type monthly_salaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profile_worked_daysOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profilesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type profilesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type profilesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type profilesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type profilesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Hours_worked_daysListRelationFilter = {
    every?: hours_worked_daysWhereInput
    some?: hours_worked_daysWhereInput
    none?: hours_worked_daysWhereInput
  }

  export type hours_worked_daysOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type type_hoursCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    type?: SortOrder
  }

  export type type_hoursAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type type_hoursMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    type?: SortOrder
  }

  export type type_hoursMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    type?: SortOrder
  }

  export type type_hoursSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type worked_daysCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startHour?: SortOrder
    startMin?: SortOrder
    endHour?: SortOrder
    endMin?: SortOrder
    break?: SortOrder
    sunday?: SortOrder
    holiday?: SortOrder
  }

  export type worked_daysAvgOrderByAggregateInput = {
    id?: SortOrder
    break?: SortOrder
    sunday?: SortOrder
    holiday?: SortOrder
  }

  export type worked_daysMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startHour?: SortOrder
    startMin?: SortOrder
    endHour?: SortOrder
    endMin?: SortOrder
    break?: SortOrder
    sunday?: SortOrder
    holiday?: SortOrder
  }

  export type worked_daysMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startHour?: SortOrder
    startMin?: SortOrder
    endHour?: SortOrder
    endMin?: SortOrder
    break?: SortOrder
    sunday?: SortOrder
    holiday?: SortOrder
  }

  export type worked_daysSumOrderByAggregateInput = {
    id?: SortOrder
    break?: SortOrder
    sunday?: SortOrder
    holiday?: SortOrder
  }

  export type monthly_salaryCountOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    base_salary?: SortOrder
    month?: SortOrder
    month_tips?: SortOrder
    month_salary?: SortOrder
    total_hours?: SortOrder
  }

  export type monthly_salaryAvgOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    base_salary?: SortOrder
    month?: SortOrder
    month_tips?: SortOrder
    month_salary?: SortOrder
    total_hours?: SortOrder
  }

  export type monthly_salaryMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    base_salary?: SortOrder
    month?: SortOrder
    month_tips?: SortOrder
    month_salary?: SortOrder
    total_hours?: SortOrder
  }

  export type monthly_salaryMinOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    base_salary?: SortOrder
    month?: SortOrder
    month_tips?: SortOrder
    month_salary?: SortOrder
    total_hours?: SortOrder
  }

  export type monthly_salarySumOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    base_salary?: SortOrder
    month?: SortOrder
    month_tips?: SortOrder
    month_salary?: SortOrder
    total_hours?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type type_hoursCreateNestedOneWithoutHours_worked_daysInput = {
    create?: XOR<type_hoursCreateWithoutHours_worked_daysInput, type_hoursUncheckedCreateWithoutHours_worked_daysInput>
    connectOrCreate?: type_hoursCreateOrConnectWithoutHours_worked_daysInput
    connect?: type_hoursWhereUniqueInput
  }

  export type worked_daysCreateNestedOneWithoutHours_worked_daysInput = {
    create?: XOR<worked_daysCreateWithoutHours_worked_daysInput, worked_daysUncheckedCreateWithoutHours_worked_daysInput>
    connectOrCreate?: worked_daysCreateOrConnectWithoutHours_worked_daysInput
    connect?: worked_daysWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type type_hoursUpdateOneWithoutHours_worked_daysNestedInput = {
    create?: XOR<type_hoursCreateWithoutHours_worked_daysInput, type_hoursUncheckedCreateWithoutHours_worked_daysInput>
    connectOrCreate?: type_hoursCreateOrConnectWithoutHours_worked_daysInput
    upsert?: type_hoursUpsertWithoutHours_worked_daysInput
    disconnect?: type_hoursWhereInput | boolean
    delete?: type_hoursWhereInput | boolean
    connect?: type_hoursWhereUniqueInput
    update?: XOR<XOR<type_hoursUpdateToOneWithWhereWithoutHours_worked_daysInput, type_hoursUpdateWithoutHours_worked_daysInput>, type_hoursUncheckedUpdateWithoutHours_worked_daysInput>
  }

  export type worked_daysUpdateOneWithoutHours_worked_daysNestedInput = {
    create?: XOR<worked_daysCreateWithoutHours_worked_daysInput, worked_daysUncheckedCreateWithoutHours_worked_daysInput>
    connectOrCreate?: worked_daysCreateOrConnectWithoutHours_worked_daysInput
    upsert?: worked_daysUpsertWithoutHours_worked_daysInput
    disconnect?: worked_daysWhereInput | boolean
    delete?: worked_daysWhereInput | boolean
    connect?: worked_daysWhereUniqueInput
    update?: XOR<XOR<worked_daysUpdateToOneWithWhereWithoutHours_worked_daysInput, worked_daysUpdateWithoutHours_worked_daysInput>, worked_daysUncheckedUpdateWithoutHours_worked_daysInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type profilesCreateNestedOneWithoutProfile_worked_daysInput = {
    create?: XOR<profilesCreateWithoutProfile_worked_daysInput, profilesUncheckedCreateWithoutProfile_worked_daysInput>
    connectOrCreate?: profilesCreateOrConnectWithoutProfile_worked_daysInput
    connect?: profilesWhereUniqueInput
  }

  export type worked_daysCreateNestedOneWithoutProfile_worked_daysInput = {
    create?: XOR<worked_daysCreateWithoutProfile_worked_daysInput, worked_daysUncheckedCreateWithoutProfile_worked_daysInput>
    connectOrCreate?: worked_daysCreateOrConnectWithoutProfile_worked_daysInput
    connect?: worked_daysWhereUniqueInput
  }

  export type profilesUpdateOneWithoutProfile_worked_daysNestedInput = {
    create?: XOR<profilesCreateWithoutProfile_worked_daysInput, profilesUncheckedCreateWithoutProfile_worked_daysInput>
    connectOrCreate?: profilesCreateOrConnectWithoutProfile_worked_daysInput
    upsert?: profilesUpsertWithoutProfile_worked_daysInput
    disconnect?: profilesWhereInput | boolean
    delete?: profilesWhereInput | boolean
    connect?: profilesWhereUniqueInput
    update?: XOR<XOR<profilesUpdateToOneWithWhereWithoutProfile_worked_daysInput, profilesUpdateWithoutProfile_worked_daysInput>, profilesUncheckedUpdateWithoutProfile_worked_daysInput>
  }

  export type worked_daysUpdateOneWithoutProfile_worked_daysNestedInput = {
    create?: XOR<worked_daysCreateWithoutProfile_worked_daysInput, worked_daysUncheckedCreateWithoutProfile_worked_daysInput>
    connectOrCreate?: worked_daysCreateOrConnectWithoutProfile_worked_daysInput
    upsert?: worked_daysUpsertWithoutProfile_worked_daysInput
    disconnect?: worked_daysWhereInput | boolean
    delete?: worked_daysWhereInput | boolean
    connect?: worked_daysWhereUniqueInput
    update?: XOR<XOR<worked_daysUpdateToOneWithWhereWithoutProfile_worked_daysInput, worked_daysUpdateWithoutProfile_worked_daysInput>, worked_daysUncheckedUpdateWithoutProfile_worked_daysInput>
  }

  export type monthly_salaryCreateNestedManyWithoutProfilesInput = {
    create?: XOR<monthly_salaryCreateWithoutProfilesInput, monthly_salaryUncheckedCreateWithoutProfilesInput> | monthly_salaryCreateWithoutProfilesInput[] | monthly_salaryUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: monthly_salaryCreateOrConnectWithoutProfilesInput | monthly_salaryCreateOrConnectWithoutProfilesInput[]
    createMany?: monthly_salaryCreateManyProfilesInputEnvelope
    connect?: monthly_salaryWhereUniqueInput | monthly_salaryWhereUniqueInput[]
  }

  export type profile_worked_daysCreateNestedManyWithoutProfilesInput = {
    create?: XOR<profile_worked_daysCreateWithoutProfilesInput, profile_worked_daysUncheckedCreateWithoutProfilesInput> | profile_worked_daysCreateWithoutProfilesInput[] | profile_worked_daysUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: profile_worked_daysCreateOrConnectWithoutProfilesInput | profile_worked_daysCreateOrConnectWithoutProfilesInput[]
    createMany?: profile_worked_daysCreateManyProfilesInputEnvelope
    connect?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
  }

  export type monthly_salaryUncheckedCreateNestedManyWithoutProfilesInput = {
    create?: XOR<monthly_salaryCreateWithoutProfilesInput, monthly_salaryUncheckedCreateWithoutProfilesInput> | monthly_salaryCreateWithoutProfilesInput[] | monthly_salaryUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: monthly_salaryCreateOrConnectWithoutProfilesInput | monthly_salaryCreateOrConnectWithoutProfilesInput[]
    createMany?: monthly_salaryCreateManyProfilesInputEnvelope
    connect?: monthly_salaryWhereUniqueInput | monthly_salaryWhereUniqueInput[]
  }

  export type profile_worked_daysUncheckedCreateNestedManyWithoutProfilesInput = {
    create?: XOR<profile_worked_daysCreateWithoutProfilesInput, profile_worked_daysUncheckedCreateWithoutProfilesInput> | profile_worked_daysCreateWithoutProfilesInput[] | profile_worked_daysUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: profile_worked_daysCreateOrConnectWithoutProfilesInput | profile_worked_daysCreateOrConnectWithoutProfilesInput[]
    createMany?: profile_worked_daysCreateManyProfilesInputEnvelope
    connect?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
  }

  export type monthly_salaryUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<monthly_salaryCreateWithoutProfilesInput, monthly_salaryUncheckedCreateWithoutProfilesInput> | monthly_salaryCreateWithoutProfilesInput[] | monthly_salaryUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: monthly_salaryCreateOrConnectWithoutProfilesInput | monthly_salaryCreateOrConnectWithoutProfilesInput[]
    upsert?: monthly_salaryUpsertWithWhereUniqueWithoutProfilesInput | monthly_salaryUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: monthly_salaryCreateManyProfilesInputEnvelope
    set?: monthly_salaryWhereUniqueInput | monthly_salaryWhereUniqueInput[]
    disconnect?: monthly_salaryWhereUniqueInput | monthly_salaryWhereUniqueInput[]
    delete?: monthly_salaryWhereUniqueInput | monthly_salaryWhereUniqueInput[]
    connect?: monthly_salaryWhereUniqueInput | monthly_salaryWhereUniqueInput[]
    update?: monthly_salaryUpdateWithWhereUniqueWithoutProfilesInput | monthly_salaryUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: monthly_salaryUpdateManyWithWhereWithoutProfilesInput | monthly_salaryUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: monthly_salaryScalarWhereInput | monthly_salaryScalarWhereInput[]
  }

  export type profile_worked_daysUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<profile_worked_daysCreateWithoutProfilesInput, profile_worked_daysUncheckedCreateWithoutProfilesInput> | profile_worked_daysCreateWithoutProfilesInput[] | profile_worked_daysUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: profile_worked_daysCreateOrConnectWithoutProfilesInput | profile_worked_daysCreateOrConnectWithoutProfilesInput[]
    upsert?: profile_worked_daysUpsertWithWhereUniqueWithoutProfilesInput | profile_worked_daysUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: profile_worked_daysCreateManyProfilesInputEnvelope
    set?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    disconnect?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    delete?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    connect?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    update?: profile_worked_daysUpdateWithWhereUniqueWithoutProfilesInput | profile_worked_daysUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: profile_worked_daysUpdateManyWithWhereWithoutProfilesInput | profile_worked_daysUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: profile_worked_daysScalarWhereInput | profile_worked_daysScalarWhereInput[]
  }

  export type monthly_salaryUncheckedUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<monthly_salaryCreateWithoutProfilesInput, monthly_salaryUncheckedCreateWithoutProfilesInput> | monthly_salaryCreateWithoutProfilesInput[] | monthly_salaryUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: monthly_salaryCreateOrConnectWithoutProfilesInput | monthly_salaryCreateOrConnectWithoutProfilesInput[]
    upsert?: monthly_salaryUpsertWithWhereUniqueWithoutProfilesInput | monthly_salaryUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: monthly_salaryCreateManyProfilesInputEnvelope
    set?: monthly_salaryWhereUniqueInput | monthly_salaryWhereUniqueInput[]
    disconnect?: monthly_salaryWhereUniqueInput | monthly_salaryWhereUniqueInput[]
    delete?: monthly_salaryWhereUniqueInput | monthly_salaryWhereUniqueInput[]
    connect?: monthly_salaryWhereUniqueInput | monthly_salaryWhereUniqueInput[]
    update?: monthly_salaryUpdateWithWhereUniqueWithoutProfilesInput | monthly_salaryUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: monthly_salaryUpdateManyWithWhereWithoutProfilesInput | monthly_salaryUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: monthly_salaryScalarWhereInput | monthly_salaryScalarWhereInput[]
  }

  export type profile_worked_daysUncheckedUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<profile_worked_daysCreateWithoutProfilesInput, profile_worked_daysUncheckedCreateWithoutProfilesInput> | profile_worked_daysCreateWithoutProfilesInput[] | profile_worked_daysUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: profile_worked_daysCreateOrConnectWithoutProfilesInput | profile_worked_daysCreateOrConnectWithoutProfilesInput[]
    upsert?: profile_worked_daysUpsertWithWhereUniqueWithoutProfilesInput | profile_worked_daysUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: profile_worked_daysCreateManyProfilesInputEnvelope
    set?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    disconnect?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    delete?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    connect?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    update?: profile_worked_daysUpdateWithWhereUniqueWithoutProfilesInput | profile_worked_daysUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: profile_worked_daysUpdateManyWithWhereWithoutProfilesInput | profile_worked_daysUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: profile_worked_daysScalarWhereInput | profile_worked_daysScalarWhereInput[]
  }

  export type hours_worked_daysCreateNestedManyWithoutType_hoursInput = {
    create?: XOR<hours_worked_daysCreateWithoutType_hoursInput, hours_worked_daysUncheckedCreateWithoutType_hoursInput> | hours_worked_daysCreateWithoutType_hoursInput[] | hours_worked_daysUncheckedCreateWithoutType_hoursInput[]
    connectOrCreate?: hours_worked_daysCreateOrConnectWithoutType_hoursInput | hours_worked_daysCreateOrConnectWithoutType_hoursInput[]
    createMany?: hours_worked_daysCreateManyType_hoursInputEnvelope
    connect?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
  }

  export type hours_worked_daysUncheckedCreateNestedManyWithoutType_hoursInput = {
    create?: XOR<hours_worked_daysCreateWithoutType_hoursInput, hours_worked_daysUncheckedCreateWithoutType_hoursInput> | hours_worked_daysCreateWithoutType_hoursInput[] | hours_worked_daysUncheckedCreateWithoutType_hoursInput[]
    connectOrCreate?: hours_worked_daysCreateOrConnectWithoutType_hoursInput | hours_worked_daysCreateOrConnectWithoutType_hoursInput[]
    createMany?: hours_worked_daysCreateManyType_hoursInputEnvelope
    connect?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type hours_worked_daysUpdateManyWithoutType_hoursNestedInput = {
    create?: XOR<hours_worked_daysCreateWithoutType_hoursInput, hours_worked_daysUncheckedCreateWithoutType_hoursInput> | hours_worked_daysCreateWithoutType_hoursInput[] | hours_worked_daysUncheckedCreateWithoutType_hoursInput[]
    connectOrCreate?: hours_worked_daysCreateOrConnectWithoutType_hoursInput | hours_worked_daysCreateOrConnectWithoutType_hoursInput[]
    upsert?: hours_worked_daysUpsertWithWhereUniqueWithoutType_hoursInput | hours_worked_daysUpsertWithWhereUniqueWithoutType_hoursInput[]
    createMany?: hours_worked_daysCreateManyType_hoursInputEnvelope
    set?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    disconnect?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    delete?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    connect?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    update?: hours_worked_daysUpdateWithWhereUniqueWithoutType_hoursInput | hours_worked_daysUpdateWithWhereUniqueWithoutType_hoursInput[]
    updateMany?: hours_worked_daysUpdateManyWithWhereWithoutType_hoursInput | hours_worked_daysUpdateManyWithWhereWithoutType_hoursInput[]
    deleteMany?: hours_worked_daysScalarWhereInput | hours_worked_daysScalarWhereInput[]
  }

  export type hours_worked_daysUncheckedUpdateManyWithoutType_hoursNestedInput = {
    create?: XOR<hours_worked_daysCreateWithoutType_hoursInput, hours_worked_daysUncheckedCreateWithoutType_hoursInput> | hours_worked_daysCreateWithoutType_hoursInput[] | hours_worked_daysUncheckedCreateWithoutType_hoursInput[]
    connectOrCreate?: hours_worked_daysCreateOrConnectWithoutType_hoursInput | hours_worked_daysCreateOrConnectWithoutType_hoursInput[]
    upsert?: hours_worked_daysUpsertWithWhereUniqueWithoutType_hoursInput | hours_worked_daysUpsertWithWhereUniqueWithoutType_hoursInput[]
    createMany?: hours_worked_daysCreateManyType_hoursInputEnvelope
    set?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    disconnect?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    delete?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    connect?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    update?: hours_worked_daysUpdateWithWhereUniqueWithoutType_hoursInput | hours_worked_daysUpdateWithWhereUniqueWithoutType_hoursInput[]
    updateMany?: hours_worked_daysUpdateManyWithWhereWithoutType_hoursInput | hours_worked_daysUpdateManyWithWhereWithoutType_hoursInput[]
    deleteMany?: hours_worked_daysScalarWhereInput | hours_worked_daysScalarWhereInput[]
  }

  export type hours_worked_daysCreateNestedManyWithoutWorked_daysInput = {
    create?: XOR<hours_worked_daysCreateWithoutWorked_daysInput, hours_worked_daysUncheckedCreateWithoutWorked_daysInput> | hours_worked_daysCreateWithoutWorked_daysInput[] | hours_worked_daysUncheckedCreateWithoutWorked_daysInput[]
    connectOrCreate?: hours_worked_daysCreateOrConnectWithoutWorked_daysInput | hours_worked_daysCreateOrConnectWithoutWorked_daysInput[]
    createMany?: hours_worked_daysCreateManyWorked_daysInputEnvelope
    connect?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
  }

  export type profile_worked_daysCreateNestedManyWithoutWorked_daysInput = {
    create?: XOR<profile_worked_daysCreateWithoutWorked_daysInput, profile_worked_daysUncheckedCreateWithoutWorked_daysInput> | profile_worked_daysCreateWithoutWorked_daysInput[] | profile_worked_daysUncheckedCreateWithoutWorked_daysInput[]
    connectOrCreate?: profile_worked_daysCreateOrConnectWithoutWorked_daysInput | profile_worked_daysCreateOrConnectWithoutWorked_daysInput[]
    createMany?: profile_worked_daysCreateManyWorked_daysInputEnvelope
    connect?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
  }

  export type hours_worked_daysUncheckedCreateNestedManyWithoutWorked_daysInput = {
    create?: XOR<hours_worked_daysCreateWithoutWorked_daysInput, hours_worked_daysUncheckedCreateWithoutWorked_daysInput> | hours_worked_daysCreateWithoutWorked_daysInput[] | hours_worked_daysUncheckedCreateWithoutWorked_daysInput[]
    connectOrCreate?: hours_worked_daysCreateOrConnectWithoutWorked_daysInput | hours_worked_daysCreateOrConnectWithoutWorked_daysInput[]
    createMany?: hours_worked_daysCreateManyWorked_daysInputEnvelope
    connect?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
  }

  export type profile_worked_daysUncheckedCreateNestedManyWithoutWorked_daysInput = {
    create?: XOR<profile_worked_daysCreateWithoutWorked_daysInput, profile_worked_daysUncheckedCreateWithoutWorked_daysInput> | profile_worked_daysCreateWithoutWorked_daysInput[] | profile_worked_daysUncheckedCreateWithoutWorked_daysInput[]
    connectOrCreate?: profile_worked_daysCreateOrConnectWithoutWorked_daysInput | profile_worked_daysCreateOrConnectWithoutWorked_daysInput[]
    createMany?: profile_worked_daysCreateManyWorked_daysInputEnvelope
    connect?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
  }

  export type hours_worked_daysUpdateManyWithoutWorked_daysNestedInput = {
    create?: XOR<hours_worked_daysCreateWithoutWorked_daysInput, hours_worked_daysUncheckedCreateWithoutWorked_daysInput> | hours_worked_daysCreateWithoutWorked_daysInput[] | hours_worked_daysUncheckedCreateWithoutWorked_daysInput[]
    connectOrCreate?: hours_worked_daysCreateOrConnectWithoutWorked_daysInput | hours_worked_daysCreateOrConnectWithoutWorked_daysInput[]
    upsert?: hours_worked_daysUpsertWithWhereUniqueWithoutWorked_daysInput | hours_worked_daysUpsertWithWhereUniqueWithoutWorked_daysInput[]
    createMany?: hours_worked_daysCreateManyWorked_daysInputEnvelope
    set?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    disconnect?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    delete?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    connect?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    update?: hours_worked_daysUpdateWithWhereUniqueWithoutWorked_daysInput | hours_worked_daysUpdateWithWhereUniqueWithoutWorked_daysInput[]
    updateMany?: hours_worked_daysUpdateManyWithWhereWithoutWorked_daysInput | hours_worked_daysUpdateManyWithWhereWithoutWorked_daysInput[]
    deleteMany?: hours_worked_daysScalarWhereInput | hours_worked_daysScalarWhereInput[]
  }

  export type profile_worked_daysUpdateManyWithoutWorked_daysNestedInput = {
    create?: XOR<profile_worked_daysCreateWithoutWorked_daysInput, profile_worked_daysUncheckedCreateWithoutWorked_daysInput> | profile_worked_daysCreateWithoutWorked_daysInput[] | profile_worked_daysUncheckedCreateWithoutWorked_daysInput[]
    connectOrCreate?: profile_worked_daysCreateOrConnectWithoutWorked_daysInput | profile_worked_daysCreateOrConnectWithoutWorked_daysInput[]
    upsert?: profile_worked_daysUpsertWithWhereUniqueWithoutWorked_daysInput | profile_worked_daysUpsertWithWhereUniqueWithoutWorked_daysInput[]
    createMany?: profile_worked_daysCreateManyWorked_daysInputEnvelope
    set?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    disconnect?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    delete?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    connect?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    update?: profile_worked_daysUpdateWithWhereUniqueWithoutWorked_daysInput | profile_worked_daysUpdateWithWhereUniqueWithoutWorked_daysInput[]
    updateMany?: profile_worked_daysUpdateManyWithWhereWithoutWorked_daysInput | profile_worked_daysUpdateManyWithWhereWithoutWorked_daysInput[]
    deleteMany?: profile_worked_daysScalarWhereInput | profile_worked_daysScalarWhereInput[]
  }

  export type hours_worked_daysUncheckedUpdateManyWithoutWorked_daysNestedInput = {
    create?: XOR<hours_worked_daysCreateWithoutWorked_daysInput, hours_worked_daysUncheckedCreateWithoutWorked_daysInput> | hours_worked_daysCreateWithoutWorked_daysInput[] | hours_worked_daysUncheckedCreateWithoutWorked_daysInput[]
    connectOrCreate?: hours_worked_daysCreateOrConnectWithoutWorked_daysInput | hours_worked_daysCreateOrConnectWithoutWorked_daysInput[]
    upsert?: hours_worked_daysUpsertWithWhereUniqueWithoutWorked_daysInput | hours_worked_daysUpsertWithWhereUniqueWithoutWorked_daysInput[]
    createMany?: hours_worked_daysCreateManyWorked_daysInputEnvelope
    set?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    disconnect?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    delete?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    connect?: hours_worked_daysWhereUniqueInput | hours_worked_daysWhereUniqueInput[]
    update?: hours_worked_daysUpdateWithWhereUniqueWithoutWorked_daysInput | hours_worked_daysUpdateWithWhereUniqueWithoutWorked_daysInput[]
    updateMany?: hours_worked_daysUpdateManyWithWhereWithoutWorked_daysInput | hours_worked_daysUpdateManyWithWhereWithoutWorked_daysInput[]
    deleteMany?: hours_worked_daysScalarWhereInput | hours_worked_daysScalarWhereInput[]
  }

  export type profile_worked_daysUncheckedUpdateManyWithoutWorked_daysNestedInput = {
    create?: XOR<profile_worked_daysCreateWithoutWorked_daysInput, profile_worked_daysUncheckedCreateWithoutWorked_daysInput> | profile_worked_daysCreateWithoutWorked_daysInput[] | profile_worked_daysUncheckedCreateWithoutWorked_daysInput[]
    connectOrCreate?: profile_worked_daysCreateOrConnectWithoutWorked_daysInput | profile_worked_daysCreateOrConnectWithoutWorked_daysInput[]
    upsert?: profile_worked_daysUpsertWithWhereUniqueWithoutWorked_daysInput | profile_worked_daysUpsertWithWhereUniqueWithoutWorked_daysInput[]
    createMany?: profile_worked_daysCreateManyWorked_daysInputEnvelope
    set?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    disconnect?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    delete?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    connect?: profile_worked_daysWhereUniqueInput | profile_worked_daysWhereUniqueInput[]
    update?: profile_worked_daysUpdateWithWhereUniqueWithoutWorked_daysInput | profile_worked_daysUpdateWithWhereUniqueWithoutWorked_daysInput[]
    updateMany?: profile_worked_daysUpdateManyWithWhereWithoutWorked_daysInput | profile_worked_daysUpdateManyWithWhereWithoutWorked_daysInput[]
    deleteMany?: profile_worked_daysScalarWhereInput | profile_worked_daysScalarWhereInput[]
  }

  export type profilesCreateNestedOneWithoutMonthly_salaryInput = {
    create?: XOR<profilesCreateWithoutMonthly_salaryInput, profilesUncheckedCreateWithoutMonthly_salaryInput>
    connectOrCreate?: profilesCreateOrConnectWithoutMonthly_salaryInput
    connect?: profilesWhereUniqueInput
  }

  export type profilesUpdateOneWithoutMonthly_salaryNestedInput = {
    create?: XOR<profilesCreateWithoutMonthly_salaryInput, profilesUncheckedCreateWithoutMonthly_salaryInput>
    connectOrCreate?: profilesCreateOrConnectWithoutMonthly_salaryInput
    upsert?: profilesUpsertWithoutMonthly_salaryInput
    disconnect?: profilesWhereInput | boolean
    delete?: profilesWhereInput | boolean
    connect?: profilesWhereUniqueInput
    update?: XOR<XOR<profilesUpdateToOneWithWhereWithoutMonthly_salaryInput, profilesUpdateWithoutMonthly_salaryInput>, profilesUncheckedUpdateWithoutMonthly_salaryInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type type_hoursCreateWithoutHours_worked_daysInput = {
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
  }

  export type type_hoursUncheckedCreateWithoutHours_worked_daysInput = {
    id?: number
    price?: Decimal | DecimalJsLike | number | string | null
    type?: string | null
  }

  export type type_hoursCreateOrConnectWithoutHours_worked_daysInput = {
    where: type_hoursWhereUniqueInput
    create: XOR<type_hoursCreateWithoutHours_worked_daysInput, type_hoursUncheckedCreateWithoutHours_worked_daysInput>
  }

  export type worked_daysCreateWithoutHours_worked_daysInput = {
    date?: Date | string | null
    startHour?: string | null
    startMin?: string | null
    endHour?: string | null
    endMin?: string | null
    break?: number | null
    sunday?: number | null
    holiday?: number | null
    profile_worked_days?: profile_worked_daysCreateNestedManyWithoutWorked_daysInput
  }

  export type worked_daysUncheckedCreateWithoutHours_worked_daysInput = {
    id?: number
    date?: Date | string | null
    startHour?: string | null
    startMin?: string | null
    endHour?: string | null
    endMin?: string | null
    break?: number | null
    sunday?: number | null
    holiday?: number | null
    profile_worked_days?: profile_worked_daysUncheckedCreateNestedManyWithoutWorked_daysInput
  }

  export type worked_daysCreateOrConnectWithoutHours_worked_daysInput = {
    where: worked_daysWhereUniqueInput
    create: XOR<worked_daysCreateWithoutHours_worked_daysInput, worked_daysUncheckedCreateWithoutHours_worked_daysInput>
  }

  export type type_hoursUpsertWithoutHours_worked_daysInput = {
    update: XOR<type_hoursUpdateWithoutHours_worked_daysInput, type_hoursUncheckedUpdateWithoutHours_worked_daysInput>
    create: XOR<type_hoursCreateWithoutHours_worked_daysInput, type_hoursUncheckedCreateWithoutHours_worked_daysInput>
    where?: type_hoursWhereInput
  }

  export type type_hoursUpdateToOneWithWhereWithoutHours_worked_daysInput = {
    where?: type_hoursWhereInput
    data: XOR<type_hoursUpdateWithoutHours_worked_daysInput, type_hoursUncheckedUpdateWithoutHours_worked_daysInput>
  }

  export type type_hoursUpdateWithoutHours_worked_daysInput = {
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type type_hoursUncheckedUpdateWithoutHours_worked_daysInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type worked_daysUpsertWithoutHours_worked_daysInput = {
    update: XOR<worked_daysUpdateWithoutHours_worked_daysInput, worked_daysUncheckedUpdateWithoutHours_worked_daysInput>
    create: XOR<worked_daysCreateWithoutHours_worked_daysInput, worked_daysUncheckedCreateWithoutHours_worked_daysInput>
    where?: worked_daysWhereInput
  }

  export type worked_daysUpdateToOneWithWhereWithoutHours_worked_daysInput = {
    where?: worked_daysWhereInput
    data: XOR<worked_daysUpdateWithoutHours_worked_daysInput, worked_daysUncheckedUpdateWithoutHours_worked_daysInput>
  }

  export type worked_daysUpdateWithoutHours_worked_daysInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startHour?: NullableStringFieldUpdateOperationsInput | string | null
    startMin?: NullableStringFieldUpdateOperationsInput | string | null
    endHour?: NullableStringFieldUpdateOperationsInput | string | null
    endMin?: NullableStringFieldUpdateOperationsInput | string | null
    break?: NullableIntFieldUpdateOperationsInput | number | null
    sunday?: NullableIntFieldUpdateOperationsInput | number | null
    holiday?: NullableIntFieldUpdateOperationsInput | number | null
    profile_worked_days?: profile_worked_daysUpdateManyWithoutWorked_daysNestedInput
  }

  export type worked_daysUncheckedUpdateWithoutHours_worked_daysInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startHour?: NullableStringFieldUpdateOperationsInput | string | null
    startMin?: NullableStringFieldUpdateOperationsInput | string | null
    endHour?: NullableStringFieldUpdateOperationsInput | string | null
    endMin?: NullableStringFieldUpdateOperationsInput | string | null
    break?: NullableIntFieldUpdateOperationsInput | number | null
    sunday?: NullableIntFieldUpdateOperationsInput | number | null
    holiday?: NullableIntFieldUpdateOperationsInput | number | null
    profile_worked_days?: profile_worked_daysUncheckedUpdateManyWithoutWorked_daysNestedInput
  }

  export type profilesCreateWithoutProfile_worked_daysInput = {
    name?: string | null
    monthly_salary?: monthly_salaryCreateNestedManyWithoutProfilesInput
  }

  export type profilesUncheckedCreateWithoutProfile_worked_daysInput = {
    id?: number
    name?: string | null
    monthly_salary?: monthly_salaryUncheckedCreateNestedManyWithoutProfilesInput
  }

  export type profilesCreateOrConnectWithoutProfile_worked_daysInput = {
    where: profilesWhereUniqueInput
    create: XOR<profilesCreateWithoutProfile_worked_daysInput, profilesUncheckedCreateWithoutProfile_worked_daysInput>
  }

  export type worked_daysCreateWithoutProfile_worked_daysInput = {
    date?: Date | string | null
    startHour?: string | null
    startMin?: string | null
    endHour?: string | null
    endMin?: string | null
    break?: number | null
    sunday?: number | null
    holiday?: number | null
    hours_worked_days?: hours_worked_daysCreateNestedManyWithoutWorked_daysInput
  }

  export type worked_daysUncheckedCreateWithoutProfile_worked_daysInput = {
    id?: number
    date?: Date | string | null
    startHour?: string | null
    startMin?: string | null
    endHour?: string | null
    endMin?: string | null
    break?: number | null
    sunday?: number | null
    holiday?: number | null
    hours_worked_days?: hours_worked_daysUncheckedCreateNestedManyWithoutWorked_daysInput
  }

  export type worked_daysCreateOrConnectWithoutProfile_worked_daysInput = {
    where: worked_daysWhereUniqueInput
    create: XOR<worked_daysCreateWithoutProfile_worked_daysInput, worked_daysUncheckedCreateWithoutProfile_worked_daysInput>
  }

  export type profilesUpsertWithoutProfile_worked_daysInput = {
    update: XOR<profilesUpdateWithoutProfile_worked_daysInput, profilesUncheckedUpdateWithoutProfile_worked_daysInput>
    create: XOR<profilesCreateWithoutProfile_worked_daysInput, profilesUncheckedCreateWithoutProfile_worked_daysInput>
    where?: profilesWhereInput
  }

  export type profilesUpdateToOneWithWhereWithoutProfile_worked_daysInput = {
    where?: profilesWhereInput
    data: XOR<profilesUpdateWithoutProfile_worked_daysInput, profilesUncheckedUpdateWithoutProfile_worked_daysInput>
  }

  export type profilesUpdateWithoutProfile_worked_daysInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_salary?: monthly_salaryUpdateManyWithoutProfilesNestedInput
  }

  export type profilesUncheckedUpdateWithoutProfile_worked_daysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    monthly_salary?: monthly_salaryUncheckedUpdateManyWithoutProfilesNestedInput
  }

  export type worked_daysUpsertWithoutProfile_worked_daysInput = {
    update: XOR<worked_daysUpdateWithoutProfile_worked_daysInput, worked_daysUncheckedUpdateWithoutProfile_worked_daysInput>
    create: XOR<worked_daysCreateWithoutProfile_worked_daysInput, worked_daysUncheckedCreateWithoutProfile_worked_daysInput>
    where?: worked_daysWhereInput
  }

  export type worked_daysUpdateToOneWithWhereWithoutProfile_worked_daysInput = {
    where?: worked_daysWhereInput
    data: XOR<worked_daysUpdateWithoutProfile_worked_daysInput, worked_daysUncheckedUpdateWithoutProfile_worked_daysInput>
  }

  export type worked_daysUpdateWithoutProfile_worked_daysInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startHour?: NullableStringFieldUpdateOperationsInput | string | null
    startMin?: NullableStringFieldUpdateOperationsInput | string | null
    endHour?: NullableStringFieldUpdateOperationsInput | string | null
    endMin?: NullableStringFieldUpdateOperationsInput | string | null
    break?: NullableIntFieldUpdateOperationsInput | number | null
    sunday?: NullableIntFieldUpdateOperationsInput | number | null
    holiday?: NullableIntFieldUpdateOperationsInput | number | null
    hours_worked_days?: hours_worked_daysUpdateManyWithoutWorked_daysNestedInput
  }

  export type worked_daysUncheckedUpdateWithoutProfile_worked_daysInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startHour?: NullableStringFieldUpdateOperationsInput | string | null
    startMin?: NullableStringFieldUpdateOperationsInput | string | null
    endHour?: NullableStringFieldUpdateOperationsInput | string | null
    endMin?: NullableStringFieldUpdateOperationsInput | string | null
    break?: NullableIntFieldUpdateOperationsInput | number | null
    sunday?: NullableIntFieldUpdateOperationsInput | number | null
    holiday?: NullableIntFieldUpdateOperationsInput | number | null
    hours_worked_days?: hours_worked_daysUncheckedUpdateManyWithoutWorked_daysNestedInput
  }

  export type monthly_salaryCreateWithoutProfilesInput = {
    base_salary?: number | null
    month?: number | null
    month_tips?: number | null
    month_salary?: number | null
    total_hours?: number | null
  }

  export type monthly_salaryUncheckedCreateWithoutProfilesInput = {
    id?: number
    base_salary?: number | null
    month?: number | null
    month_tips?: number | null
    month_salary?: number | null
    total_hours?: number | null
  }

  export type monthly_salaryCreateOrConnectWithoutProfilesInput = {
    where: monthly_salaryWhereUniqueInput
    create: XOR<monthly_salaryCreateWithoutProfilesInput, monthly_salaryUncheckedCreateWithoutProfilesInput>
  }

  export type monthly_salaryCreateManyProfilesInputEnvelope = {
    data: monthly_salaryCreateManyProfilesInput | monthly_salaryCreateManyProfilesInput[]
    skipDuplicates?: boolean
  }

  export type profile_worked_daysCreateWithoutProfilesInput = {
    worked_days?: worked_daysCreateNestedOneWithoutProfile_worked_daysInput
  }

  export type profile_worked_daysUncheckedCreateWithoutProfilesInput = {
    id?: number
    worked_day_id?: number | null
  }

  export type profile_worked_daysCreateOrConnectWithoutProfilesInput = {
    where: profile_worked_daysWhereUniqueInput
    create: XOR<profile_worked_daysCreateWithoutProfilesInput, profile_worked_daysUncheckedCreateWithoutProfilesInput>
  }

  export type profile_worked_daysCreateManyProfilesInputEnvelope = {
    data: profile_worked_daysCreateManyProfilesInput | profile_worked_daysCreateManyProfilesInput[]
    skipDuplicates?: boolean
  }

  export type monthly_salaryUpsertWithWhereUniqueWithoutProfilesInput = {
    where: monthly_salaryWhereUniqueInput
    update: XOR<monthly_salaryUpdateWithoutProfilesInput, monthly_salaryUncheckedUpdateWithoutProfilesInput>
    create: XOR<monthly_salaryCreateWithoutProfilesInput, monthly_salaryUncheckedCreateWithoutProfilesInput>
  }

  export type monthly_salaryUpdateWithWhereUniqueWithoutProfilesInput = {
    where: monthly_salaryWhereUniqueInput
    data: XOR<monthly_salaryUpdateWithoutProfilesInput, monthly_salaryUncheckedUpdateWithoutProfilesInput>
  }

  export type monthly_salaryUpdateManyWithWhereWithoutProfilesInput = {
    where: monthly_salaryScalarWhereInput
    data: XOR<monthly_salaryUpdateManyMutationInput, monthly_salaryUncheckedUpdateManyWithoutProfilesInput>
  }

  export type monthly_salaryScalarWhereInput = {
    AND?: monthly_salaryScalarWhereInput | monthly_salaryScalarWhereInput[]
    OR?: monthly_salaryScalarWhereInput[]
    NOT?: monthly_salaryScalarWhereInput | monthly_salaryScalarWhereInput[]
    id?: IntFilter<"monthly_salary"> | number
    profile_id?: IntNullableFilter<"monthly_salary"> | number | null
    base_salary?: FloatNullableFilter<"monthly_salary"> | number | null
    month?: IntNullableFilter<"monthly_salary"> | number | null
    month_tips?: FloatNullableFilter<"monthly_salary"> | number | null
    month_salary?: FloatNullableFilter<"monthly_salary"> | number | null
    total_hours?: FloatNullableFilter<"monthly_salary"> | number | null
  }

  export type profile_worked_daysUpsertWithWhereUniqueWithoutProfilesInput = {
    where: profile_worked_daysWhereUniqueInput
    update: XOR<profile_worked_daysUpdateWithoutProfilesInput, profile_worked_daysUncheckedUpdateWithoutProfilesInput>
    create: XOR<profile_worked_daysCreateWithoutProfilesInput, profile_worked_daysUncheckedCreateWithoutProfilesInput>
  }

  export type profile_worked_daysUpdateWithWhereUniqueWithoutProfilesInput = {
    where: profile_worked_daysWhereUniqueInput
    data: XOR<profile_worked_daysUpdateWithoutProfilesInput, profile_worked_daysUncheckedUpdateWithoutProfilesInput>
  }

  export type profile_worked_daysUpdateManyWithWhereWithoutProfilesInput = {
    where: profile_worked_daysScalarWhereInput
    data: XOR<profile_worked_daysUpdateManyMutationInput, profile_worked_daysUncheckedUpdateManyWithoutProfilesInput>
  }

  export type profile_worked_daysScalarWhereInput = {
    AND?: profile_worked_daysScalarWhereInput | profile_worked_daysScalarWhereInput[]
    OR?: profile_worked_daysScalarWhereInput[]
    NOT?: profile_worked_daysScalarWhereInput | profile_worked_daysScalarWhereInput[]
    id?: IntFilter<"profile_worked_days"> | number
    worked_day_id?: IntNullableFilter<"profile_worked_days"> | number | null
    profile_id?: IntNullableFilter<"profile_worked_days"> | number | null
  }

  export type hours_worked_daysCreateWithoutType_hoursInput = {
    hours?: number | null
    worked_days?: worked_daysCreateNestedOneWithoutHours_worked_daysInput
  }

  export type hours_worked_daysUncheckedCreateWithoutType_hoursInput = {
    id?: number
    worked_day_id?: number | null
    hours?: number | null
  }

  export type hours_worked_daysCreateOrConnectWithoutType_hoursInput = {
    where: hours_worked_daysWhereUniqueInput
    create: XOR<hours_worked_daysCreateWithoutType_hoursInput, hours_worked_daysUncheckedCreateWithoutType_hoursInput>
  }

  export type hours_worked_daysCreateManyType_hoursInputEnvelope = {
    data: hours_worked_daysCreateManyType_hoursInput | hours_worked_daysCreateManyType_hoursInput[]
    skipDuplicates?: boolean
  }

  export type hours_worked_daysUpsertWithWhereUniqueWithoutType_hoursInput = {
    where: hours_worked_daysWhereUniqueInput
    update: XOR<hours_worked_daysUpdateWithoutType_hoursInput, hours_worked_daysUncheckedUpdateWithoutType_hoursInput>
    create: XOR<hours_worked_daysCreateWithoutType_hoursInput, hours_worked_daysUncheckedCreateWithoutType_hoursInput>
  }

  export type hours_worked_daysUpdateWithWhereUniqueWithoutType_hoursInput = {
    where: hours_worked_daysWhereUniqueInput
    data: XOR<hours_worked_daysUpdateWithoutType_hoursInput, hours_worked_daysUncheckedUpdateWithoutType_hoursInput>
  }

  export type hours_worked_daysUpdateManyWithWhereWithoutType_hoursInput = {
    where: hours_worked_daysScalarWhereInput
    data: XOR<hours_worked_daysUpdateManyMutationInput, hours_worked_daysUncheckedUpdateManyWithoutType_hoursInput>
  }

  export type hours_worked_daysScalarWhereInput = {
    AND?: hours_worked_daysScalarWhereInput | hours_worked_daysScalarWhereInput[]
    OR?: hours_worked_daysScalarWhereInput[]
    NOT?: hours_worked_daysScalarWhereInput | hours_worked_daysScalarWhereInput[]
    id?: IntFilter<"hours_worked_days"> | number
    worked_day_id?: IntNullableFilter<"hours_worked_days"> | number | null
    hours?: FloatNullableFilter<"hours_worked_days"> | number | null
    type_hours_id?: IntNullableFilter<"hours_worked_days"> | number | null
  }

  export type hours_worked_daysCreateWithoutWorked_daysInput = {
    hours?: number | null
    type_hours?: type_hoursCreateNestedOneWithoutHours_worked_daysInput
  }

  export type hours_worked_daysUncheckedCreateWithoutWorked_daysInput = {
    id?: number
    hours?: number | null
    type_hours_id?: number | null
  }

  export type hours_worked_daysCreateOrConnectWithoutWorked_daysInput = {
    where: hours_worked_daysWhereUniqueInput
    create: XOR<hours_worked_daysCreateWithoutWorked_daysInput, hours_worked_daysUncheckedCreateWithoutWorked_daysInput>
  }

  export type hours_worked_daysCreateManyWorked_daysInputEnvelope = {
    data: hours_worked_daysCreateManyWorked_daysInput | hours_worked_daysCreateManyWorked_daysInput[]
    skipDuplicates?: boolean
  }

  export type profile_worked_daysCreateWithoutWorked_daysInput = {
    profiles?: profilesCreateNestedOneWithoutProfile_worked_daysInput
  }

  export type profile_worked_daysUncheckedCreateWithoutWorked_daysInput = {
    id?: number
    profile_id?: number | null
  }

  export type profile_worked_daysCreateOrConnectWithoutWorked_daysInput = {
    where: profile_worked_daysWhereUniqueInput
    create: XOR<profile_worked_daysCreateWithoutWorked_daysInput, profile_worked_daysUncheckedCreateWithoutWorked_daysInput>
  }

  export type profile_worked_daysCreateManyWorked_daysInputEnvelope = {
    data: profile_worked_daysCreateManyWorked_daysInput | profile_worked_daysCreateManyWorked_daysInput[]
    skipDuplicates?: boolean
  }

  export type hours_worked_daysUpsertWithWhereUniqueWithoutWorked_daysInput = {
    where: hours_worked_daysWhereUniqueInput
    update: XOR<hours_worked_daysUpdateWithoutWorked_daysInput, hours_worked_daysUncheckedUpdateWithoutWorked_daysInput>
    create: XOR<hours_worked_daysCreateWithoutWorked_daysInput, hours_worked_daysUncheckedCreateWithoutWorked_daysInput>
  }

  export type hours_worked_daysUpdateWithWhereUniqueWithoutWorked_daysInput = {
    where: hours_worked_daysWhereUniqueInput
    data: XOR<hours_worked_daysUpdateWithoutWorked_daysInput, hours_worked_daysUncheckedUpdateWithoutWorked_daysInput>
  }

  export type hours_worked_daysUpdateManyWithWhereWithoutWorked_daysInput = {
    where: hours_worked_daysScalarWhereInput
    data: XOR<hours_worked_daysUpdateManyMutationInput, hours_worked_daysUncheckedUpdateManyWithoutWorked_daysInput>
  }

  export type profile_worked_daysUpsertWithWhereUniqueWithoutWorked_daysInput = {
    where: profile_worked_daysWhereUniqueInput
    update: XOR<profile_worked_daysUpdateWithoutWorked_daysInput, profile_worked_daysUncheckedUpdateWithoutWorked_daysInput>
    create: XOR<profile_worked_daysCreateWithoutWorked_daysInput, profile_worked_daysUncheckedCreateWithoutWorked_daysInput>
  }

  export type profile_worked_daysUpdateWithWhereUniqueWithoutWorked_daysInput = {
    where: profile_worked_daysWhereUniqueInput
    data: XOR<profile_worked_daysUpdateWithoutWorked_daysInput, profile_worked_daysUncheckedUpdateWithoutWorked_daysInput>
  }

  export type profile_worked_daysUpdateManyWithWhereWithoutWorked_daysInput = {
    where: profile_worked_daysScalarWhereInput
    data: XOR<profile_worked_daysUpdateManyMutationInput, profile_worked_daysUncheckedUpdateManyWithoutWorked_daysInput>
  }

  export type profilesCreateWithoutMonthly_salaryInput = {
    name?: string | null
    profile_worked_days?: profile_worked_daysCreateNestedManyWithoutProfilesInput
  }

  export type profilesUncheckedCreateWithoutMonthly_salaryInput = {
    id?: number
    name?: string | null
    profile_worked_days?: profile_worked_daysUncheckedCreateNestedManyWithoutProfilesInput
  }

  export type profilesCreateOrConnectWithoutMonthly_salaryInput = {
    where: profilesWhereUniqueInput
    create: XOR<profilesCreateWithoutMonthly_salaryInput, profilesUncheckedCreateWithoutMonthly_salaryInput>
  }

  export type profilesUpsertWithoutMonthly_salaryInput = {
    update: XOR<profilesUpdateWithoutMonthly_salaryInput, profilesUncheckedUpdateWithoutMonthly_salaryInput>
    create: XOR<profilesCreateWithoutMonthly_salaryInput, profilesUncheckedCreateWithoutMonthly_salaryInput>
    where?: profilesWhereInput
  }

  export type profilesUpdateToOneWithWhereWithoutMonthly_salaryInput = {
    where?: profilesWhereInput
    data: XOR<profilesUpdateWithoutMonthly_salaryInput, profilesUncheckedUpdateWithoutMonthly_salaryInput>
  }

  export type profilesUpdateWithoutMonthly_salaryInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profile_worked_days?: profile_worked_daysUpdateManyWithoutProfilesNestedInput
  }

  export type profilesUncheckedUpdateWithoutMonthly_salaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profile_worked_days?: profile_worked_daysUncheckedUpdateManyWithoutProfilesNestedInput
  }

  export type monthly_salaryCreateManyProfilesInput = {
    id?: number
    base_salary?: number | null
    month?: number | null
    month_tips?: number | null
    month_salary?: number | null
    total_hours?: number | null
  }

  export type profile_worked_daysCreateManyProfilesInput = {
    id?: number
    worked_day_id?: number | null
  }

  export type monthly_salaryUpdateWithoutProfilesInput = {
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    month?: NullableIntFieldUpdateOperationsInput | number | null
    month_tips?: NullableFloatFieldUpdateOperationsInput | number | null
    month_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    total_hours?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type monthly_salaryUncheckedUpdateWithoutProfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    month?: NullableIntFieldUpdateOperationsInput | number | null
    month_tips?: NullableFloatFieldUpdateOperationsInput | number | null
    month_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    total_hours?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type monthly_salaryUncheckedUpdateManyWithoutProfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    base_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    month?: NullableIntFieldUpdateOperationsInput | number | null
    month_tips?: NullableFloatFieldUpdateOperationsInput | number | null
    month_salary?: NullableFloatFieldUpdateOperationsInput | number | null
    total_hours?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type profile_worked_daysUpdateWithoutProfilesInput = {
    worked_days?: worked_daysUpdateOneWithoutProfile_worked_daysNestedInput
  }

  export type profile_worked_daysUncheckedUpdateWithoutProfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    worked_day_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type profile_worked_daysUncheckedUpdateManyWithoutProfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    worked_day_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type hours_worked_daysCreateManyType_hoursInput = {
    id?: number
    worked_day_id?: number | null
    hours?: number | null
  }

  export type hours_worked_daysUpdateWithoutType_hoursInput = {
    hours?: NullableFloatFieldUpdateOperationsInput | number | null
    worked_days?: worked_daysUpdateOneWithoutHours_worked_daysNestedInput
  }

  export type hours_worked_daysUncheckedUpdateWithoutType_hoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    worked_day_id?: NullableIntFieldUpdateOperationsInput | number | null
    hours?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type hours_worked_daysUncheckedUpdateManyWithoutType_hoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    worked_day_id?: NullableIntFieldUpdateOperationsInput | number | null
    hours?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type hours_worked_daysCreateManyWorked_daysInput = {
    id?: number
    hours?: number | null
    type_hours_id?: number | null
  }

  export type profile_worked_daysCreateManyWorked_daysInput = {
    id?: number
    profile_id?: number | null
  }

  export type hours_worked_daysUpdateWithoutWorked_daysInput = {
    hours?: NullableFloatFieldUpdateOperationsInput | number | null
    type_hours?: type_hoursUpdateOneWithoutHours_worked_daysNestedInput
  }

  export type hours_worked_daysUncheckedUpdateWithoutWorked_daysInput = {
    id?: IntFieldUpdateOperationsInput | number
    hours?: NullableFloatFieldUpdateOperationsInput | number | null
    type_hours_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type hours_worked_daysUncheckedUpdateManyWithoutWorked_daysInput = {
    id?: IntFieldUpdateOperationsInput | number
    hours?: NullableFloatFieldUpdateOperationsInput | number | null
    type_hours_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type profile_worked_daysUpdateWithoutWorked_daysInput = {
    profiles?: profilesUpdateOneWithoutProfile_worked_daysNestedInput
  }

  export type profile_worked_daysUncheckedUpdateWithoutWorked_daysInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type profile_worked_daysUncheckedUpdateManyWithoutWorked_daysInput = {
    id?: IntFieldUpdateOperationsInput | number
    profile_id?: NullableIntFieldUpdateOperationsInput | number | null
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