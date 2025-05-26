
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
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Auth
 * 
 */
export type Auth = $Result.DefaultSelection<Prisma.$AuthPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model QRCode
 * 
 */
export type QRCode = $Result.DefaultSelection<Prisma.$QRCodePayload>
/**
 * Model LeaveRequest
 * 
 */
export type LeaveRequest = $Result.DefaultSelection<Prisma.$LeaveRequestPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Position
 * 
 */
export type Position = $Result.DefaultSelection<Prisma.$PositionPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model AuthLog
 * 
 */
export type AuthLog = $Result.DefaultSelection<Prisma.$AuthLogPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Employeeinfo
 * 
 */
export type Employeeinfo = $Result.DefaultSelection<Prisma.$EmployeeinfoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LeaveType: {
  annual: 'annual',
  sick: 'sick',
  maternity: 'maternity',
  paternity: 'paternity',
  unpaid: 'unpaid',
  other: 'other'
};

export type LeaveType = (typeof LeaveType)[keyof typeof LeaveType]


export const LeaveStatus: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected',
  cancelled: 'cancelled'
};

export type LeaveStatus = (typeof LeaveStatus)[keyof typeof LeaveStatus]


export const CheckStatus: {
  checkin: 'checkin',
  checkout: 'checkout',
  absent: 'absent'
};

export type CheckStatus = (typeof CheckStatus)[keyof typeof CheckStatus]


export const ScanMethod: {
  phone: 'phone',
  biometric: 'biometric'
};

export type ScanMethod = (typeof ScanMethod)[keyof typeof ScanMethod]


export const Status: {
  active: 'active',
  inactive: 'inactive',
  deleted: 'deleted'
};

export type Status = (typeof Status)[keyof typeof Status]


export const AccountStatus: {
  active: 'active',
  inactive: 'inactive',
  suspended: 'suspended',
  deleted: 'deleted'
};

export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus]


export const Gender: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type LeaveType = $Enums.LeaveType

export const LeaveType: typeof $Enums.LeaveType

export type LeaveStatus = $Enums.LeaveStatus

export const LeaveStatus: typeof $Enums.LeaveStatus

export type CheckStatus = $Enums.CheckStatus

export const CheckStatus: typeof $Enums.CheckStatus

export type ScanMethod = $Enums.ScanMethod

export const ScanMethod: typeof $Enums.ScanMethod

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type AccountStatus = $Enums.AccountStatus

export const AccountStatus: typeof $Enums.AccountStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Attendances
 * const attendances = await prisma.attendance.findMany()
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
   * // Fetch zero or more Attendances
   * const attendances = await prisma.attendance.findMany()
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
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auth`: Exposes CRUD operations for the **Auth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auths
    * const auths = await prisma.auth.findMany()
    * ```
    */
  get auth(): Prisma.AuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qRCode`: Exposes CRUD operations for the **QRCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QRCodes
    * const qRCodes = await prisma.qRCode.findMany()
    * ```
    */
  get qRCode(): Prisma.QRCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveRequest`: Exposes CRUD operations for the **LeaveRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveRequests
    * const leaveRequests = await prisma.leaveRequest.findMany()
    * ```
    */
  get leaveRequest(): Prisma.LeaveRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authLog`: Exposes CRUD operations for the **AuthLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthLogs
    * const authLogs = await prisma.authLog.findMany()
    * ```
    */
  get authLog(): Prisma.AuthLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeinfo`: Exposes CRUD operations for the **Employeeinfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employeeinfos
    * const employeeinfos = await prisma.employeeinfo.findMany()
    * ```
    */
  get employeeinfo(): Prisma.EmployeeinfoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Attendance: 'Attendance',
    Auth: 'Auth',
    Employee: 'Employee',
    Event: 'Event',
    QRCode: 'QRCode',
    LeaveRequest: 'LeaveRequest',
    Role: 'Role',
    Department: 'Department',
    Position: 'Position',
    Address: 'Address',
    Token: 'Token',
    AuthLog: 'AuthLog',
    Notification: 'Notification',
    Customer: 'Customer',
    Employeeinfo: 'Employeeinfo'
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
      modelProps: "attendance" | "auth" | "employee" | "event" | "qRCode" | "leaveRequest" | "role" | "department" | "position" | "address" | "token" | "authLog" | "notification" | "customer" | "employeeinfo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Auth: {
        payload: Prisma.$AuthPayload<ExtArgs>
        fields: Prisma.AuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          findFirst: {
            args: Prisma.AuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          findMany: {
            args: Prisma.AuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          create: {
            args: Prisma.AuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          createMany: {
            args: Prisma.AuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          delete: {
            args: Prisma.AuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          update: {
            args: Prisma.AuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          deleteMany: {
            args: Prisma.AuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          upsert: {
            args: Prisma.AuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          aggregate: {
            args: Prisma.AuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth>
          }
          groupBy: {
            args: Prisma.AuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthCountArgs<ExtArgs>
            result: $Utils.Optional<AuthCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      QRCode: {
        payload: Prisma.$QRCodePayload<ExtArgs>
        fields: Prisma.QRCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QRCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QRCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findFirst: {
            args: Prisma.QRCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QRCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findMany: {
            args: Prisma.QRCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>[]
          }
          create: {
            args: Prisma.QRCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          createMany: {
            args: Prisma.QRCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QRCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>[]
          }
          delete: {
            args: Prisma.QRCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          update: {
            args: Prisma.QRCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          deleteMany: {
            args: Prisma.QRCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QRCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QRCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>[]
          }
          upsert: {
            args: Prisma.QRCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          aggregate: {
            args: Prisma.QRCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQRCode>
          }
          groupBy: {
            args: Prisma.QRCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<QRCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QRCodeCountArgs<ExtArgs>
            result: $Utils.Optional<QRCodeCountAggregateOutputType> | number
          }
        }
      }
      LeaveRequest: {
        payload: Prisma.$LeaveRequestPayload<ExtArgs>
        fields: Prisma.LeaveRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          findFirst: {
            args: Prisma.LeaveRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          findMany: {
            args: Prisma.LeaveRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          create: {
            args: Prisma.LeaveRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          createMany: {
            args: Prisma.LeaveRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          delete: {
            args: Prisma.LeaveRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          update: {
            args: Prisma.LeaveRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          deleteMany: {
            args: Prisma.LeaveRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          upsert: {
            args: Prisma.LeaveRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          aggregate: {
            args: Prisma.LeaveRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveRequest>
          }
          groupBy: {
            args: Prisma.LeaveRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveRequestCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveRequestCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Position: {
        payload: Prisma.$PositionPayload<ExtArgs>
        fields: Prisma.PositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findFirst: {
            args: Prisma.PositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findMany: {
            args: Prisma.PositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          create: {
            args: Prisma.PositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          createMany: {
            args: Prisma.PositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          delete: {
            args: Prisma.PositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          update: {
            args: Prisma.PositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          deleteMany: {
            args: Prisma.PositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          upsert: {
            args: Prisma.PositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.PositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionCountArgs<ExtArgs>
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      AuthLog: {
        payload: Prisma.$AuthLogPayload<ExtArgs>
        fields: Prisma.AuthLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthLogPayload>
          }
          findFirst: {
            args: Prisma.AuthLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthLogPayload>
          }
          findMany: {
            args: Prisma.AuthLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthLogPayload>[]
          }
          create: {
            args: Prisma.AuthLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthLogPayload>
          }
          createMany: {
            args: Prisma.AuthLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthLogPayload>[]
          }
          delete: {
            args: Prisma.AuthLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthLogPayload>
          }
          update: {
            args: Prisma.AuthLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthLogPayload>
          }
          deleteMany: {
            args: Prisma.AuthLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthLogPayload>[]
          }
          upsert: {
            args: Prisma.AuthLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthLogPayload>
          }
          aggregate: {
            args: Prisma.AuthLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthLog>
          }
          groupBy: {
            args: Prisma.AuthLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuthLogCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Employeeinfo: {
        payload: Prisma.$EmployeeinfoPayload<ExtArgs>
        fields: Prisma.EmployeeinfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeinfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeinfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeinfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeinfoPayload>
          }
          findFirst: {
            args: Prisma.EmployeeinfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeinfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeinfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeinfoPayload>
          }
          findMany: {
            args: Prisma.EmployeeinfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeinfoPayload>[]
          }
          create: {
            args: Prisma.EmployeeinfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeinfoPayload>
          }
          createMany: {
            args: Prisma.EmployeeinfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeinfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeinfoPayload>[]
          }
          delete: {
            args: Prisma.EmployeeinfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeinfoPayload>
          }
          update: {
            args: Prisma.EmployeeinfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeinfoPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeinfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeinfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeinfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeinfoPayload>[]
          }
          upsert: {
            args: Prisma.EmployeeinfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeinfoPayload>
          }
          aggregate: {
            args: Prisma.EmployeeinfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeinfo>
          }
          groupBy: {
            args: Prisma.EmployeeinfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeinfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeinfoCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeinfoCountAggregateOutputType> | number
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
    attendance?: AttendanceOmit
    auth?: AuthOmit
    employee?: EmployeeOmit
    event?: EventOmit
    qRCode?: QRCodeOmit
    leaveRequest?: LeaveRequestOmit
    role?: RoleOmit
    department?: DepartmentOmit
    position?: PositionOmit
    address?: AddressOmit
    token?: TokenOmit
    authLog?: AuthLogOmit
    notification?: NotificationOmit
    customer?: CustomerOmit
    employeeinfo?: EmployeeinfoOmit
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
   * Count Type AuthCountOutputType
   */

  export type AuthCountOutputType = {
    token: number
    logs: number
    notification: number
  }

  export type AuthCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | AuthCountOutputTypeCountTokenArgs
    logs?: boolean | AuthCountOutputTypeCountLogsArgs
    notification?: boolean | AuthCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * AuthCountOutputType without action
   */
  export type AuthCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthCountOutputType
     */
    select?: AuthCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthCountOutputType without action
   */
  export type AuthCountOutputTypeCountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * AuthCountOutputType without action
   */
  export type AuthCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthLogWhereInput
  }

  /**
   * AuthCountOutputType without action
   */
  export type AuthCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    attendances: number
    customer: number
    approvedLeaves: number
    leaveRequests: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | EmployeeCountOutputTypeCountAttendancesArgs
    customer?: boolean | EmployeeCountOutputTypeCountCustomerArgs
    approvedLeaves?: boolean | EmployeeCountOutputTypeCountApprovedLeavesArgs
    leaveRequests?: boolean | EmployeeCountOutputTypeCountLeaveRequestsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountApprovedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountLeaveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    attendance: number
    qrCode: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | EventCountOutputTypeCountAttendanceArgs
    qrCode?: boolean | EventCountOutputTypeCountQrCodeArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountQrCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRCodeWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    auths: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auths?: boolean | RoleCountOutputTypeCountAuthsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountAuthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    employees: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | DepartmentCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type PositionCountOutputType
   */

  export type PositionCountOutputType = {
    employees: number
  }

  export type PositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | PositionCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionCountOutputType
     */
    select?: PositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    attendanceId: string | null
    employeeId: string | null
    eventId: string | null
    datetime: Date | null
    method: $Enums.ScanMethod | null
    status: $Enums.Status | null
    checkIn: Date | null
    checkOut: Date | null
    note: string | null
    createdAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    attendanceId: string | null
    employeeId: string | null
    eventId: string | null
    datetime: Date | null
    method: $Enums.ScanMethod | null
    status: $Enums.Status | null
    checkIn: Date | null
    checkOut: Date | null
    note: string | null
    createdAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    attendanceId: number
    employeeId: number
    eventId: number
    datetime: number
    method: number
    status: number
    checkIn: number
    checkOut: number
    note: number
    createdAt: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    attendanceId?: true
    employeeId?: true
    eventId?: true
    datetime?: true
    method?: true
    status?: true
    checkIn?: true
    checkOut?: true
    note?: true
    createdAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    attendanceId?: true
    employeeId?: true
    eventId?: true
    datetime?: true
    method?: true
    status?: true
    checkIn?: true
    checkOut?: true
    note?: true
    createdAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    attendanceId?: true
    employeeId?: true
    eventId?: true
    datetime?: true
    method?: true
    status?: true
    checkIn?: true
    checkOut?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    attendanceId: string
    employeeId: string
    eventId: string
    datetime: Date
    method: $Enums.ScanMethod | null
    status: $Enums.Status
    checkIn: Date
    checkOut: Date | null
    note: string | null
    createdAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attendanceId?: boolean
    employeeId?: boolean
    eventId?: boolean
    datetime?: boolean
    method?: boolean
    status?: boolean
    checkIn?: boolean
    checkOut?: boolean
    note?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attendanceId?: boolean
    employeeId?: boolean
    eventId?: boolean
    datetime?: boolean
    method?: boolean
    status?: boolean
    checkIn?: boolean
    checkOut?: boolean
    note?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attendanceId?: boolean
    employeeId?: boolean
    eventId?: boolean
    datetime?: boolean
    method?: boolean
    status?: boolean
    checkIn?: boolean
    checkOut?: boolean
    note?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    attendanceId?: boolean
    employeeId?: boolean
    eventId?: boolean
    datetime?: boolean
    method?: boolean
    status?: boolean
    checkIn?: boolean
    checkOut?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"attendanceId" | "employeeId" | "eventId" | "datetime" | "method" | "status" | "checkIn" | "checkOut" | "note" | "createdAt", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      attendanceId: string
      employeeId: string
      eventId: string
      datetime: Date
      method: $Enums.ScanMethod | null
      status: $Enums.Status
      checkIn: Date
      checkOut: Date | null
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `attendanceId`
     * const attendanceWithAttendanceIdOnly = await prisma.attendance.findMany({ select: { attendanceId: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `attendanceId`
     * const attendanceWithAttendanceIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { attendanceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `attendanceId`
     * const attendanceWithAttendanceIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { attendanceId: true },
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
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly attendanceId: FieldRef<"Attendance", 'String'>
    readonly employeeId: FieldRef<"Attendance", 'String'>
    readonly eventId: FieldRef<"Attendance", 'String'>
    readonly datetime: FieldRef<"Attendance", 'DateTime'>
    readonly method: FieldRef<"Attendance", 'ScanMethod'>
    readonly status: FieldRef<"Attendance", 'Status'>
    readonly checkIn: FieldRef<"Attendance", 'DateTime'>
    readonly checkOut: FieldRef<"Attendance", 'DateTime'>
    readonly note: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Auth
   */

  export type AggregateAuth = {
    _count: AuthCountAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  export type AuthMinAggregateOutputType = {
    authId: string | null
    email: string | null
    password: string | null
    roleId: string | null
    employeeId: string | null
    status: $Enums.AccountStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type AuthMaxAggregateOutputType = {
    authId: string | null
    email: string | null
    password: string | null
    roleId: string | null
    employeeId: string | null
    status: $Enums.AccountStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLoginAt: Date | null
  }

  export type AuthCountAggregateOutputType = {
    authId: number
    email: number
    password: number
    roleId: number
    employeeId: number
    status: number
    createdAt: number
    updatedAt: number
    lastLoginAt: number
    _all: number
  }


  export type AuthMinAggregateInputType = {
    authId?: true
    email?: true
    password?: true
    roleId?: true
    employeeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type AuthMaxAggregateInputType = {
    authId?: true
    email?: true
    password?: true
    roleId?: true
    employeeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
  }

  export type AuthCountAggregateInputType = {
    authId?: true
    email?: true
    password?: true
    roleId?: true
    employeeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLoginAt?: true
    _all?: true
  }

  export type AuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auth to aggregate.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auths
    **/
    _count?: true | AuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthMaxAggregateInputType
  }

  export type GetAuthAggregateType<T extends AuthAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth[P]>
      : GetScalarType<T[P], AggregateAuth[P]>
  }




  export type AuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthWhereInput
    orderBy?: AuthOrderByWithAggregationInput | AuthOrderByWithAggregationInput[]
    by: AuthScalarFieldEnum[] | AuthScalarFieldEnum
    having?: AuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthCountAggregateInputType | true
    _min?: AuthMinAggregateInputType
    _max?: AuthMaxAggregateInputType
  }

  export type AuthGroupByOutputType = {
    authId: string
    email: string
    password: string
    roleId: string
    employeeId: string | null
    status: $Enums.AccountStatus
    createdAt: Date
    updatedAt: Date
    lastLoginAt: Date | null
    _count: AuthCountAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  type GetAuthGroupByPayload<T extends AuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthGroupByOutputType[P]>
            : GetScalarType<T[P], AuthGroupByOutputType[P]>
        }
      >
    >


  export type AuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authId?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    employeeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    token?: boolean | Auth$tokenArgs<ExtArgs>
    logs?: boolean | Auth$logsArgs<ExtArgs>
    notification?: boolean | Auth$notificationArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    employee?: boolean | Auth$employeeArgs<ExtArgs>
    _count?: boolean | AuthCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authId?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    employeeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    employee?: boolean | Auth$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authId?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    employeeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    employee?: boolean | Auth$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectScalar = {
    authId?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    employeeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLoginAt?: boolean
  }

  export type AuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"authId" | "email" | "password" | "roleId" | "employeeId" | "status" | "createdAt" | "updatedAt" | "lastLoginAt", ExtArgs["result"]["auth"]>
  export type AuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | Auth$tokenArgs<ExtArgs>
    logs?: boolean | Auth$logsArgs<ExtArgs>
    notification?: boolean | Auth$notificationArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    employee?: boolean | Auth$employeeArgs<ExtArgs>
    _count?: boolean | AuthCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    employee?: boolean | Auth$employeeArgs<ExtArgs>
  }
  export type AuthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    employee?: boolean | Auth$employeeArgs<ExtArgs>
  }

  export type $AuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auth"
    objects: {
      token: Prisma.$TokenPayload<ExtArgs>[]
      logs: Prisma.$AuthLogPayload<ExtArgs>[]
      notification: Prisma.$NotificationPayload<ExtArgs>[]
      role: Prisma.$RolePayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      authId: string
      email: string
      password: string
      roleId: string
      employeeId: string | null
      status: $Enums.AccountStatus
      createdAt: Date
      updatedAt: Date
      lastLoginAt: Date | null
    }, ExtArgs["result"]["auth"]>
    composites: {}
  }

  type AuthGetPayload<S extends boolean | null | undefined | AuthDefaultArgs> = $Result.GetResult<Prisma.$AuthPayload, S>

  type AuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthCountAggregateInputType | true
    }

  export interface AuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auth'], meta: { name: 'Auth' } }
    /**
     * Find zero or one Auth that matches the filter.
     * @param {AuthFindUniqueArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthFindUniqueArgs>(args: SelectSubset<T, AuthFindUniqueArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthFindUniqueOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthFindFirstArgs>(args?: SelectSubset<T, AuthFindFirstArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auths
     * const auths = await prisma.auth.findMany()
     * 
     * // Get first 10 Auths
     * const auths = await prisma.auth.findMany({ take: 10 })
     * 
     * // Only select the `authId`
     * const authWithAuthIdOnly = await prisma.auth.findMany({ select: { authId: true } })
     * 
     */
    findMany<T extends AuthFindManyArgs>(args?: SelectSubset<T, AuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth.
     * @param {AuthCreateArgs} args - Arguments to create a Auth.
     * @example
     * // Create one Auth
     * const Auth = await prisma.auth.create({
     *   data: {
     *     // ... data to create a Auth
     *   }
     * })
     * 
     */
    create<T extends AuthCreateArgs>(args: SelectSubset<T, AuthCreateArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auths.
     * @param {AuthCreateManyArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthCreateManyArgs>(args?: SelectSubset<T, AuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auths and returns the data saved in the database.
     * @param {AuthCreateManyAndReturnArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auths and only return the `authId`
     * const authWithAuthIdOnly = await prisma.auth.createManyAndReturn({
     *   select: { authId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth.
     * @param {AuthDeleteArgs} args - Arguments to delete one Auth.
     * @example
     * // Delete one Auth
     * const Auth = await prisma.auth.delete({
     *   where: {
     *     // ... filter to delete one Auth
     *   }
     * })
     * 
     */
    delete<T extends AuthDeleteArgs>(args: SelectSubset<T, AuthDeleteArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth.
     * @param {AuthUpdateArgs} args - Arguments to update one Auth.
     * @example
     * // Update one Auth
     * const auth = await prisma.auth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthUpdateArgs>(args: SelectSubset<T, AuthUpdateArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auths.
     * @param {AuthDeleteManyArgs} args - Arguments to filter Auths to delete.
     * @example
     * // Delete a few Auths
     * const { count } = await prisma.auth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthDeleteManyArgs>(args?: SelectSubset<T, AuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthUpdateManyArgs>(args: SelectSubset<T, AuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths and returns the data updated in the database.
     * @param {AuthUpdateManyAndReturnArgs} args - Arguments to update many Auths.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auths and only return the `authId`
     * const authWithAuthIdOnly = await prisma.auth.updateManyAndReturn({
     *   select: { authId: true },
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
    updateManyAndReturn<T extends AuthUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth.
     * @param {AuthUpsertArgs} args - Arguments to update or create a Auth.
     * @example
     * // Update or create a Auth
     * const auth = await prisma.auth.upsert({
     *   create: {
     *     // ... data to create a Auth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth we want to update
     *   }
     * })
     */
    upsert<T extends AuthUpsertArgs>(args: SelectSubset<T, AuthUpsertArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCountArgs} args - Arguments to filter Auths to count.
     * @example
     * // Count the number of Auths
     * const count = await prisma.auth.count({
     *   where: {
     *     // ... the filter for the Auths we want to count
     *   }
     * })
    **/
    count<T extends AuthCountArgs>(
      args?: Subset<T, AuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthAggregateArgs>(args: Subset<T, AuthAggregateArgs>): Prisma.PrismaPromise<GetAuthAggregateType<T>>

    /**
     * Group by Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthGroupByArgs} args - Group by arguments.
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
      T extends AuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthGroupByArgs['orderBy'] }
        : { orderBy?: AuthGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auth model
   */
  readonly fields: AuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends Auth$tokenArgs<ExtArgs> = {}>(args?: Subset<T, Auth$tokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Auth$logsArgs<ExtArgs> = {}>(args?: Subset<T, Auth$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notification<T extends Auth$notificationArgs<ExtArgs> = {}>(args?: Subset<T, Auth$notificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends Auth$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Auth$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Auth model
   */
  interface AuthFieldRefs {
    readonly authId: FieldRef<"Auth", 'String'>
    readonly email: FieldRef<"Auth", 'String'>
    readonly password: FieldRef<"Auth", 'String'>
    readonly roleId: FieldRef<"Auth", 'String'>
    readonly employeeId: FieldRef<"Auth", 'String'>
    readonly status: FieldRef<"Auth", 'AccountStatus'>
    readonly createdAt: FieldRef<"Auth", 'DateTime'>
    readonly updatedAt: FieldRef<"Auth", 'DateTime'>
    readonly lastLoginAt: FieldRef<"Auth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Auth findUnique
   */
  export type AuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth findUniqueOrThrow
   */
  export type AuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth findFirst
   */
  export type AuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth findFirstOrThrow
   */
  export type AuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth findMany
   */
  export type AuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auths to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth create
   */
  export type AuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * The data needed to create a Auth.
     */
    data: XOR<AuthCreateInput, AuthUncheckedCreateInput>
  }

  /**
   * Auth createMany
   */
  export type AuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auths.
     */
    data: AuthCreateManyInput | AuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auth createManyAndReturn
   */
  export type AuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data used to create many Auths.
     */
    data: AuthCreateManyInput | AuthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auth update
   */
  export type AuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * The data needed to update a Auth.
     */
    data: XOR<AuthUpdateInput, AuthUncheckedUpdateInput>
    /**
     * Choose, which Auth to update.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth updateMany
   */
  export type AuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auths.
     */
    data: XOR<AuthUpdateManyMutationInput, AuthUncheckedUpdateManyInput>
    /**
     * Filter which Auths to update
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to update.
     */
    limit?: number
  }

  /**
   * Auth updateManyAndReturn
   */
  export type AuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data used to update Auths.
     */
    data: XOR<AuthUpdateManyMutationInput, AuthUncheckedUpdateManyInput>
    /**
     * Filter which Auths to update
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auth upsert
   */
  export type AuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * The filter to search for the Auth to update in case it exists.
     */
    where: AuthWhereUniqueInput
    /**
     * In case the Auth found by the `where` argument doesn't exist, create a new Auth with this data.
     */
    create: XOR<AuthCreateInput, AuthUncheckedCreateInput>
    /**
     * In case the Auth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthUpdateInput, AuthUncheckedUpdateInput>
  }

  /**
   * Auth delete
   */
  export type AuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter which Auth to delete.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth deleteMany
   */
  export type AuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auths to delete
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to delete.
     */
    limit?: number
  }

  /**
   * Auth.token
   */
  export type Auth$tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Auth.logs
   */
  export type Auth$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthLog
     */
    select?: AuthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthLog
     */
    omit?: AuthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthLogInclude<ExtArgs> | null
    where?: AuthLogWhereInput
    orderBy?: AuthLogOrderByWithRelationInput | AuthLogOrderByWithRelationInput[]
    cursor?: AuthLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthLogScalarFieldEnum | AuthLogScalarFieldEnum[]
  }

  /**
   * Auth.notification
   */
  export type Auth$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Auth.employee
   */
  export type Auth$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Auth without action
   */
  export type AuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    salary: Decimal | null
  }

  export type EmployeeSumAggregateOutputType = {
    salary: Decimal | null
  }

  export type EmployeeMinAggregateOutputType = {
    employeeId: string | null
    employeeCode: string | null
    firstName: string | null
    lastName: string | null
    gender: $Enums.Gender | null
    dob: Date | null
    phone: string | null
    positionId: string | null
    departmentId: string | null
    salary: Decimal | null
    hiredDate: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    employeeId: string | null
    employeeCode: string | null
    firstName: string | null
    lastName: string | null
    gender: $Enums.Gender | null
    dob: Date | null
    phone: string | null
    positionId: string | null
    departmentId: string | null
    salary: Decimal | null
    hiredDate: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    employeeId: number
    employeeCode: number
    firstName: number
    lastName: number
    gender: number
    dob: number
    phone: number
    positionId: number
    departmentId: number
    salary: number
    hiredDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    salary?: true
  }

  export type EmployeeSumAggregateInputType = {
    salary?: true
  }

  export type EmployeeMinAggregateInputType = {
    employeeId?: true
    employeeCode?: true
    firstName?: true
    lastName?: true
    gender?: true
    dob?: true
    phone?: true
    positionId?: true
    departmentId?: true
    salary?: true
    hiredDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    employeeId?: true
    employeeCode?: true
    firstName?: true
    lastName?: true
    gender?: true
    dob?: true
    phone?: true
    positionId?: true
    departmentId?: true
    salary?: true
    hiredDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    employeeId?: true
    employeeCode?: true
    firstName?: true
    lastName?: true
    gender?: true
    dob?: true
    phone?: true
    positionId?: true
    departmentId?: true
    salary?: true
    hiredDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    employeeId: string
    employeeCode: string | null
    firstName: string
    lastName: string
    gender: $Enums.Gender
    dob: Date | null
    phone: string | null
    positionId: string
    departmentId: string
    salary: Decimal
    hiredDate: Date | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    employeeCode?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    dob?: boolean
    phone?: boolean
    positionId?: boolean
    departmentId?: boolean
    salary?: boolean
    hiredDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean | Employee$addressArgs<ExtArgs>
    attendances?: boolean | Employee$attendancesArgs<ExtArgs>
    auth?: boolean | Employee$authArgs<ExtArgs>
    customer?: boolean | Employee$customerArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    info?: boolean | Employee$infoArgs<ExtArgs>
    approvedLeaves?: boolean | Employee$approvedLeavesArgs<ExtArgs>
    leaveRequests?: boolean | Employee$leaveRequestsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    employeeCode?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    dob?: boolean
    phone?: boolean
    positionId?: boolean
    departmentId?: boolean
    salary?: boolean
    hiredDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    employeeCode?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    dob?: boolean
    phone?: boolean
    positionId?: boolean
    departmentId?: boolean
    salary?: boolean
    hiredDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    employeeId?: boolean
    employeeCode?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    dob?: boolean
    phone?: boolean
    positionId?: boolean
    departmentId?: boolean
    salary?: boolean
    hiredDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employeeId" | "employeeCode" | "firstName" | "lastName" | "gender" | "dob" | "phone" | "positionId" | "departmentId" | "salary" | "hiredDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Employee$addressArgs<ExtArgs>
    attendances?: boolean | Employee$attendancesArgs<ExtArgs>
    auth?: boolean | Employee$authArgs<ExtArgs>
    customer?: boolean | Employee$customerArgs<ExtArgs>
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
    info?: boolean | Employee$infoArgs<ExtArgs>
    approvedLeaves?: boolean | Employee$approvedLeavesArgs<ExtArgs>
    leaveRequests?: boolean | Employee$leaveRequestsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    position?: boolean | PositionDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs> | null
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      auth: Prisma.$AuthPayload<ExtArgs> | null
      customer: Prisma.$CustomerPayload<ExtArgs>[]
      department: Prisma.$DepartmentPayload<ExtArgs>
      position: Prisma.$PositionPayload<ExtArgs>
      info: Prisma.$EmployeeinfoPayload<ExtArgs> | null
      approvedLeaves: Prisma.$LeaveRequestPayload<ExtArgs>[]
      leaveRequests: Prisma.$LeaveRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      employeeId: string
      employeeCode: string | null
      firstName: string
      lastName: string
      gender: $Enums.Gender
      dob: Date | null
      phone: string | null
      positionId: string
      departmentId: string
      salary: Prisma.Decimal
      hiredDate: Date | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `employeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.findMany({ select: { employeeId: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `employeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { employeeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `employeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { employeeId: true },
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends Employee$addressArgs<ExtArgs> = {}>(args?: Subset<T, Employee$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    attendances<T extends Employee$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auth<T extends Employee$authArgs<ExtArgs> = {}>(args?: Subset<T, Employee$authArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customer<T extends Employee$customerArgs<ExtArgs> = {}>(args?: Subset<T, Employee$customerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    position<T extends PositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PositionDefaultArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    info<T extends Employee$infoArgs<ExtArgs> = {}>(args?: Subset<T, Employee$infoArgs<ExtArgs>>): Prisma__EmployeeinfoClient<$Result.GetResult<Prisma.$EmployeeinfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    approvedLeaves<T extends Employee$approvedLeavesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$approvedLeavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaveRequests<T extends Employee$leaveRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$leaveRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly employeeId: FieldRef<"Employee", 'String'>
    readonly employeeCode: FieldRef<"Employee", 'String'>
    readonly firstName: FieldRef<"Employee", 'String'>
    readonly lastName: FieldRef<"Employee", 'String'>
    readonly gender: FieldRef<"Employee", 'Gender'>
    readonly dob: FieldRef<"Employee", 'DateTime'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly positionId: FieldRef<"Employee", 'String'>
    readonly departmentId: FieldRef<"Employee", 'String'>
    readonly salary: FieldRef<"Employee", 'Decimal'>
    readonly hiredDate: FieldRef<"Employee", 'DateTime'>
    readonly status: FieldRef<"Employee", 'Status'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.address
   */
  export type Employee$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Employee.attendances
   */
  export type Employee$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Employee.auth
   */
  export type Employee$authArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    where?: AuthWhereInput
  }

  /**
   * Employee.customer
   */
  export type Employee$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Employee.info
   */
  export type Employee$infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employeeinfo
     */
    select?: EmployeeinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employeeinfo
     */
    omit?: EmployeeinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeinfoInclude<ExtArgs> | null
    where?: EmployeeinfoWhereInput
  }

  /**
   * Employee.approvedLeaves
   */
  export type Employee$approvedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    cursor?: LeaveRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * Employee.leaveRequests
   */
  export type Employee$leaveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    cursor?: LeaveRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    eventId: string | null
    eventName: string | null
    memo: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    eventId: string | null
    eventName: string | null
    memo: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    eventId: number
    eventName: number
    memo: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    eventId?: true
    eventName?: true
    memo?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    eventId?: true
    eventName?: true
    memo?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    eventId?: true
    eventName?: true
    memo?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    eventId: string
    eventName: string
    memo: string | null
    startDate: Date
    endDate: Date
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    eventName?: boolean
    memo?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean | Event$addressArgs<ExtArgs>
    attendance?: boolean | Event$attendanceArgs<ExtArgs>
    qrCode?: boolean | Event$qrCodeArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    eventName?: boolean
    memo?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    eventName?: boolean
    memo?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    eventId?: boolean
    eventName?: boolean
    memo?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "eventName" | "memo" | "startDate" | "endDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Event$addressArgs<ExtArgs>
    attendance?: boolean | Event$attendanceArgs<ExtArgs>
    qrCode?: boolean | Event$qrCodeArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs> | null
      attendance: Prisma.$AttendancePayload<ExtArgs>[]
      qrCode: Prisma.$QRCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      eventId: string
      eventName: string
      memo: string | null
      startDate: Date
      endDate: Date
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const eventWithEventIdOnly = await prisma.event.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `eventId`
     * const eventWithEventIdOnly = await prisma.event.createManyAndReturn({
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `eventId`
     * const eventWithEventIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { eventId: true },
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends Event$addressArgs<ExtArgs> = {}>(args?: Subset<T, Event$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    attendance<T extends Event$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, Event$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qrCode<T extends Event$qrCodeArgs<ExtArgs> = {}>(args?: Subset<T, Event$qrCodeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly eventId: FieldRef<"Event", 'String'>
    readonly eventName: FieldRef<"Event", 'String'>
    readonly memo: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly status: FieldRef<"Event", 'Status'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.address
   */
  export type Event$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Event.attendance
   */
  export type Event$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Event.qrCode
   */
  export type Event$qrCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    where?: QRCodeWhereInput
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    cursor?: QRCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model QRCode
   */

  export type AggregateQRCode = {
    _count: QRCodeCountAggregateOutputType | null
    _avg: QRCodeAvgAggregateOutputType | null
    _sum: QRCodeSumAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  export type QRCodeAvgAggregateOutputType = {
    scans: number | null
  }

  export type QRCodeSumAggregateOutputType = {
    scans: number | null
  }

  export type QRCodeMinAggregateOutputType = {
    qrId: string | null
    token: string | null
    eventId: string | null
    eventName: string | null
    qrCode: string | null
    expiresAt: Date | null
    oneTimeUse: boolean | null
    isActive: boolean | null
    scans: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QRCodeMaxAggregateOutputType = {
    qrId: string | null
    token: string | null
    eventId: string | null
    eventName: string | null
    qrCode: string | null
    expiresAt: Date | null
    oneTimeUse: boolean | null
    isActive: boolean | null
    scans: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QRCodeCountAggregateOutputType = {
    qrId: number
    token: number
    eventId: number
    eventName: number
    qrCode: number
    expiresAt: number
    oneTimeUse: number
    isActive: number
    scans: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QRCodeAvgAggregateInputType = {
    scans?: true
  }

  export type QRCodeSumAggregateInputType = {
    scans?: true
  }

  export type QRCodeMinAggregateInputType = {
    qrId?: true
    token?: true
    eventId?: true
    eventName?: true
    qrCode?: true
    expiresAt?: true
    oneTimeUse?: true
    isActive?: true
    scans?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QRCodeMaxAggregateInputType = {
    qrId?: true
    token?: true
    eventId?: true
    eventName?: true
    qrCode?: true
    expiresAt?: true
    oneTimeUse?: true
    isActive?: true
    scans?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QRCodeCountAggregateInputType = {
    qrId?: true
    token?: true
    eventId?: true
    eventName?: true
    qrCode?: true
    expiresAt?: true
    oneTimeUse?: true
    isActive?: true
    scans?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QRCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCode to aggregate.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QRCodes
    **/
    _count?: true | QRCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QRCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QRCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QRCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QRCodeMaxAggregateInputType
  }

  export type GetQRCodeAggregateType<T extends QRCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateQRCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQRCode[P]>
      : GetScalarType<T[P], AggregateQRCode[P]>
  }




  export type QRCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRCodeWhereInput
    orderBy?: QRCodeOrderByWithAggregationInput | QRCodeOrderByWithAggregationInput[]
    by: QRCodeScalarFieldEnum[] | QRCodeScalarFieldEnum
    having?: QRCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QRCodeCountAggregateInputType | true
    _avg?: QRCodeAvgAggregateInputType
    _sum?: QRCodeSumAggregateInputType
    _min?: QRCodeMinAggregateInputType
    _max?: QRCodeMaxAggregateInputType
  }

  export type QRCodeGroupByOutputType = {
    qrId: string
    token: string
    eventId: string
    eventName: string
    qrCode: string
    expiresAt: Date
    oneTimeUse: boolean
    isActive: boolean
    scans: number
    createdAt: Date
    updatedAt: Date
    _count: QRCodeCountAggregateOutputType | null
    _avg: QRCodeAvgAggregateOutputType | null
    _sum: QRCodeSumAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  type GetQRCodeGroupByPayload<T extends QRCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QRCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QRCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
            : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
        }
      >
    >


  export type QRCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    qrId?: boolean
    token?: boolean
    eventId?: boolean
    eventName?: boolean
    qrCode?: boolean
    expiresAt?: boolean
    oneTimeUse?: boolean
    isActive?: boolean
    scans?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRCode"]>

  export type QRCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    qrId?: boolean
    token?: boolean
    eventId?: boolean
    eventName?: boolean
    qrCode?: boolean
    expiresAt?: boolean
    oneTimeUse?: boolean
    isActive?: boolean
    scans?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRCode"]>

  export type QRCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    qrId?: boolean
    token?: boolean
    eventId?: boolean
    eventName?: boolean
    qrCode?: boolean
    expiresAt?: boolean
    oneTimeUse?: boolean
    isActive?: boolean
    scans?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRCode"]>

  export type QRCodeSelectScalar = {
    qrId?: boolean
    token?: boolean
    eventId?: boolean
    eventName?: boolean
    qrCode?: boolean
    expiresAt?: boolean
    oneTimeUse?: boolean
    isActive?: boolean
    scans?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QRCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"qrId" | "token" | "eventId" | "eventName" | "qrCode" | "expiresAt" | "oneTimeUse" | "isActive" | "scans" | "createdAt" | "updatedAt", ExtArgs["result"]["qRCode"]>
  export type QRCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type QRCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type QRCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $QRCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QRCode"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      qrId: string
      token: string
      eventId: string
      eventName: string
      qrCode: string
      expiresAt: Date
      oneTimeUse: boolean
      isActive: boolean
      scans: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["qRCode"]>
    composites: {}
  }

  type QRCodeGetPayload<S extends boolean | null | undefined | QRCodeDefaultArgs> = $Result.GetResult<Prisma.$QRCodePayload, S>

  type QRCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QRCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QRCodeCountAggregateInputType | true
    }

  export interface QRCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QRCode'], meta: { name: 'QRCode' } }
    /**
     * Find zero or one QRCode that matches the filter.
     * @param {QRCodeFindUniqueArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QRCodeFindUniqueArgs>(args: SelectSubset<T, QRCodeFindUniqueArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QRCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QRCodeFindUniqueOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QRCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, QRCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QRCodeFindFirstArgs>(args?: SelectSubset<T, QRCodeFindFirstArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QRCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, QRCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QRCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QRCodes
     * const qRCodes = await prisma.qRCode.findMany()
     * 
     * // Get first 10 QRCodes
     * const qRCodes = await prisma.qRCode.findMany({ take: 10 })
     * 
     * // Only select the `qrId`
     * const qRCodeWithQrIdOnly = await prisma.qRCode.findMany({ select: { qrId: true } })
     * 
     */
    findMany<T extends QRCodeFindManyArgs>(args?: SelectSubset<T, QRCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QRCode.
     * @param {QRCodeCreateArgs} args - Arguments to create a QRCode.
     * @example
     * // Create one QRCode
     * const QRCode = await prisma.qRCode.create({
     *   data: {
     *     // ... data to create a QRCode
     *   }
     * })
     * 
     */
    create<T extends QRCodeCreateArgs>(args: SelectSubset<T, QRCodeCreateArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QRCodes.
     * @param {QRCodeCreateManyArgs} args - Arguments to create many QRCodes.
     * @example
     * // Create many QRCodes
     * const qRCode = await prisma.qRCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QRCodeCreateManyArgs>(args?: SelectSubset<T, QRCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QRCodes and returns the data saved in the database.
     * @param {QRCodeCreateManyAndReturnArgs} args - Arguments to create many QRCodes.
     * @example
     * // Create many QRCodes
     * const qRCode = await prisma.qRCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QRCodes and only return the `qrId`
     * const qRCodeWithQrIdOnly = await prisma.qRCode.createManyAndReturn({
     *   select: { qrId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QRCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, QRCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QRCode.
     * @param {QRCodeDeleteArgs} args - Arguments to delete one QRCode.
     * @example
     * // Delete one QRCode
     * const QRCode = await prisma.qRCode.delete({
     *   where: {
     *     // ... filter to delete one QRCode
     *   }
     * })
     * 
     */
    delete<T extends QRCodeDeleteArgs>(args: SelectSubset<T, QRCodeDeleteArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QRCode.
     * @param {QRCodeUpdateArgs} args - Arguments to update one QRCode.
     * @example
     * // Update one QRCode
     * const qRCode = await prisma.qRCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QRCodeUpdateArgs>(args: SelectSubset<T, QRCodeUpdateArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QRCodes.
     * @param {QRCodeDeleteManyArgs} args - Arguments to filter QRCodes to delete.
     * @example
     * // Delete a few QRCodes
     * const { count } = await prisma.qRCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QRCodeDeleteManyArgs>(args?: SelectSubset<T, QRCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QRCodes
     * const qRCode = await prisma.qRCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QRCodeUpdateManyArgs>(args: SelectSubset<T, QRCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRCodes and returns the data updated in the database.
     * @param {QRCodeUpdateManyAndReturnArgs} args - Arguments to update many QRCodes.
     * @example
     * // Update many QRCodes
     * const qRCode = await prisma.qRCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QRCodes and only return the `qrId`
     * const qRCodeWithQrIdOnly = await prisma.qRCode.updateManyAndReturn({
     *   select: { qrId: true },
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
    updateManyAndReturn<T extends QRCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, QRCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QRCode.
     * @param {QRCodeUpsertArgs} args - Arguments to update or create a QRCode.
     * @example
     * // Update or create a QRCode
     * const qRCode = await prisma.qRCode.upsert({
     *   create: {
     *     // ... data to create a QRCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QRCode we want to update
     *   }
     * })
     */
    upsert<T extends QRCodeUpsertArgs>(args: SelectSubset<T, QRCodeUpsertArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeCountArgs} args - Arguments to filter QRCodes to count.
     * @example
     * // Count the number of QRCodes
     * const count = await prisma.qRCode.count({
     *   where: {
     *     // ... the filter for the QRCodes we want to count
     *   }
     * })
    **/
    count<T extends QRCodeCountArgs>(
      args?: Subset<T, QRCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QRCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QRCodeAggregateArgs>(args: Subset<T, QRCodeAggregateArgs>): Prisma.PrismaPromise<GetQRCodeAggregateType<T>>

    /**
     * Group by QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeGroupByArgs} args - Group by arguments.
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
      T extends QRCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QRCodeGroupByArgs['orderBy'] }
        : { orderBy?: QRCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QRCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQRCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QRCode model
   */
  readonly fields: QRCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QRCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QRCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QRCode model
   */
  interface QRCodeFieldRefs {
    readonly qrId: FieldRef<"QRCode", 'String'>
    readonly token: FieldRef<"QRCode", 'String'>
    readonly eventId: FieldRef<"QRCode", 'String'>
    readonly eventName: FieldRef<"QRCode", 'String'>
    readonly qrCode: FieldRef<"QRCode", 'String'>
    readonly expiresAt: FieldRef<"QRCode", 'DateTime'>
    readonly oneTimeUse: FieldRef<"QRCode", 'Boolean'>
    readonly isActive: FieldRef<"QRCode", 'Boolean'>
    readonly scans: FieldRef<"QRCode", 'Int'>
    readonly createdAt: FieldRef<"QRCode", 'DateTime'>
    readonly updatedAt: FieldRef<"QRCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QRCode findUnique
   */
  export type QRCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode findUniqueOrThrow
   */
  export type QRCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode findFirst
   */
  export type QRCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode findFirstOrThrow
   */
  export type QRCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode findMany
   */
  export type QRCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCodes to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }

  /**
   * QRCode create
   */
  export type QRCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a QRCode.
     */
    data: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
  }

  /**
   * QRCode createMany
   */
  export type QRCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QRCodes.
     */
    data: QRCodeCreateManyInput | QRCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QRCode createManyAndReturn
   */
  export type QRCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * The data used to create many QRCodes.
     */
    data: QRCodeCreateManyInput | QRCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QRCode update
   */
  export type QRCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a QRCode.
     */
    data: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
    /**
     * Choose, which QRCode to update.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode updateMany
   */
  export type QRCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QRCodes.
     */
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyInput>
    /**
     * Filter which QRCodes to update
     */
    where?: QRCodeWhereInput
    /**
     * Limit how many QRCodes to update.
     */
    limit?: number
  }

  /**
   * QRCode updateManyAndReturn
   */
  export type QRCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * The data used to update QRCodes.
     */
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyInput>
    /**
     * Filter which QRCodes to update
     */
    where?: QRCodeWhereInput
    /**
     * Limit how many QRCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QRCode upsert
   */
  export type QRCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the QRCode to update in case it exists.
     */
    where: QRCodeWhereUniqueInput
    /**
     * In case the QRCode found by the `where` argument doesn't exist, create a new QRCode with this data.
     */
    create: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
    /**
     * In case the QRCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
  }

  /**
   * QRCode delete
   */
  export type QRCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter which QRCode to delete.
     */
    where: QRCodeWhereUniqueInput
  }

  /**
   * QRCode deleteMany
   */
  export type QRCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCodes to delete
     */
    where?: QRCodeWhereInput
    /**
     * Limit how many QRCodes to delete.
     */
    limit?: number
  }

  /**
   * QRCode without action
   */
  export type QRCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRCode
     */
    omit?: QRCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRCodeInclude<ExtArgs> | null
  }


  /**
   * Model LeaveRequest
   */

  export type AggregateLeaveRequest = {
    _count: LeaveRequestCountAggregateOutputType | null
    _min: LeaveRequestMinAggregateOutputType | null
    _max: LeaveRequestMaxAggregateOutputType | null
  }

  export type LeaveRequestMinAggregateOutputType = {
    leaveId: string | null
    employeeId: string | null
    leaveType: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    reason: string | null
    status: $Enums.LeaveStatus | null
    approvedById: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaveRequestMaxAggregateOutputType = {
    leaveId: string | null
    employeeId: string | null
    leaveType: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    reason: string | null
    status: $Enums.LeaveStatus | null
    approvedById: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaveRequestCountAggregateOutputType = {
    leaveId: number
    employeeId: number
    leaveType: number
    startDate: number
    endDate: number
    reason: number
    status: number
    approvedById: number
    approvedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaveRequestMinAggregateInputType = {
    leaveId?: true
    employeeId?: true
    leaveType?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    approvedById?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaveRequestMaxAggregateInputType = {
    leaveId?: true
    employeeId?: true
    leaveType?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    approvedById?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaveRequestCountAggregateInputType = {
    leaveId?: true
    employeeId?: true
    leaveType?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    approvedById?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaveRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveRequest to aggregate.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveRequests
    **/
    _count?: true | LeaveRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveRequestMaxAggregateInputType
  }

  export type GetLeaveRequestAggregateType<T extends LeaveRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveRequest[P]>
      : GetScalarType<T[P], AggregateLeaveRequest[P]>
  }




  export type LeaveRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithAggregationInput | LeaveRequestOrderByWithAggregationInput[]
    by: LeaveRequestScalarFieldEnum[] | LeaveRequestScalarFieldEnum
    having?: LeaveRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveRequestCountAggregateInputType | true
    _min?: LeaveRequestMinAggregateInputType
    _max?: LeaveRequestMaxAggregateInputType
  }

  export type LeaveRequestGroupByOutputType = {
    leaveId: string
    employeeId: string
    leaveType: $Enums.LeaveType
    startDate: Date
    endDate: Date
    reason: string | null
    status: $Enums.LeaveStatus
    approvedById: string | null
    approvedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: LeaveRequestCountAggregateOutputType | null
    _min: LeaveRequestMinAggregateOutputType | null
    _max: LeaveRequestMaxAggregateOutputType | null
  }

  type GetLeaveRequestGroupByPayload<T extends LeaveRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveRequestGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveRequestGroupByOutputType[P]>
        }
      >
    >


  export type LeaveRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leaveId?: boolean
    employeeId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    approvedBy?: boolean | LeaveRequest$approvedByArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leaveId?: boolean
    employeeId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    approvedBy?: boolean | LeaveRequest$approvedByArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leaveId?: boolean
    employeeId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    approvedBy?: boolean | LeaveRequest$approvedByArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectScalar = {
    leaveId?: boolean
    employeeId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaveRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"leaveId" | "employeeId" | "leaveType" | "startDate" | "endDate" | "reason" | "status" | "approvedById" | "approvedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["leaveRequest"]>
  export type LeaveRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvedBy?: boolean | LeaveRequest$approvedByArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type LeaveRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvedBy?: boolean | LeaveRequest$approvedByArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type LeaveRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvedBy?: boolean | LeaveRequest$approvedByArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $LeaveRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveRequest"
    objects: {
      approvedBy: Prisma.$EmployeePayload<ExtArgs> | null
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      leaveId: string
      employeeId: string
      leaveType: $Enums.LeaveType
      startDate: Date
      endDate: Date
      reason: string | null
      status: $Enums.LeaveStatus
      approvedById: string | null
      approvedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leaveRequest"]>
    composites: {}
  }

  type LeaveRequestGetPayload<S extends boolean | null | undefined | LeaveRequestDefaultArgs> = $Result.GetResult<Prisma.$LeaveRequestPayload, S>

  type LeaveRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveRequestCountAggregateInputType | true
    }

  export interface LeaveRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveRequest'], meta: { name: 'LeaveRequest' } }
    /**
     * Find zero or one LeaveRequest that matches the filter.
     * @param {LeaveRequestFindUniqueArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveRequestFindUniqueArgs>(args: SelectSubset<T, LeaveRequestFindUniqueArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveRequestFindUniqueOrThrowArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindFirstArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveRequestFindFirstArgs>(args?: SelectSubset<T, LeaveRequestFindFirstArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindFirstOrThrowArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveRequests
     * const leaveRequests = await prisma.leaveRequest.findMany()
     * 
     * // Get first 10 LeaveRequests
     * const leaveRequests = await prisma.leaveRequest.findMany({ take: 10 })
     * 
     * // Only select the `leaveId`
     * const leaveRequestWithLeaveIdOnly = await prisma.leaveRequest.findMany({ select: { leaveId: true } })
     * 
     */
    findMany<T extends LeaveRequestFindManyArgs>(args?: SelectSubset<T, LeaveRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveRequest.
     * @param {LeaveRequestCreateArgs} args - Arguments to create a LeaveRequest.
     * @example
     * // Create one LeaveRequest
     * const LeaveRequest = await prisma.leaveRequest.create({
     *   data: {
     *     // ... data to create a LeaveRequest
     *   }
     * })
     * 
     */
    create<T extends LeaveRequestCreateArgs>(args: SelectSubset<T, LeaveRequestCreateArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveRequests.
     * @param {LeaveRequestCreateManyArgs} args - Arguments to create many LeaveRequests.
     * @example
     * // Create many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveRequestCreateManyArgs>(args?: SelectSubset<T, LeaveRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveRequests and returns the data saved in the database.
     * @param {LeaveRequestCreateManyAndReturnArgs} args - Arguments to create many LeaveRequests.
     * @example
     * // Create many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveRequests and only return the `leaveId`
     * const leaveRequestWithLeaveIdOnly = await prisma.leaveRequest.createManyAndReturn({
     *   select: { leaveId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveRequest.
     * @param {LeaveRequestDeleteArgs} args - Arguments to delete one LeaveRequest.
     * @example
     * // Delete one LeaveRequest
     * const LeaveRequest = await prisma.leaveRequest.delete({
     *   where: {
     *     // ... filter to delete one LeaveRequest
     *   }
     * })
     * 
     */
    delete<T extends LeaveRequestDeleteArgs>(args: SelectSubset<T, LeaveRequestDeleteArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveRequest.
     * @param {LeaveRequestUpdateArgs} args - Arguments to update one LeaveRequest.
     * @example
     * // Update one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveRequestUpdateArgs>(args: SelectSubset<T, LeaveRequestUpdateArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveRequests.
     * @param {LeaveRequestDeleteManyArgs} args - Arguments to filter LeaveRequests to delete.
     * @example
     * // Delete a few LeaveRequests
     * const { count } = await prisma.leaveRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveRequestDeleteManyArgs>(args?: SelectSubset<T, LeaveRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveRequestUpdateManyArgs>(args: SelectSubset<T, LeaveRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveRequests and returns the data updated in the database.
     * @param {LeaveRequestUpdateManyAndReturnArgs} args - Arguments to update many LeaveRequests.
     * @example
     * // Update many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveRequests and only return the `leaveId`
     * const leaveRequestWithLeaveIdOnly = await prisma.leaveRequest.updateManyAndReturn({
     *   select: { leaveId: true },
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
    updateManyAndReturn<T extends LeaveRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveRequest.
     * @param {LeaveRequestUpsertArgs} args - Arguments to update or create a LeaveRequest.
     * @example
     * // Update or create a LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.upsert({
     *   create: {
     *     // ... data to create a LeaveRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveRequest we want to update
     *   }
     * })
     */
    upsert<T extends LeaveRequestUpsertArgs>(args: SelectSubset<T, LeaveRequestUpsertArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestCountArgs} args - Arguments to filter LeaveRequests to count.
     * @example
     * // Count the number of LeaveRequests
     * const count = await prisma.leaveRequest.count({
     *   where: {
     *     // ... the filter for the LeaveRequests we want to count
     *   }
     * })
    **/
    count<T extends LeaveRequestCountArgs>(
      args?: Subset<T, LeaveRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveRequestAggregateArgs>(args: Subset<T, LeaveRequestAggregateArgs>): Prisma.PrismaPromise<GetLeaveRequestAggregateType<T>>

    /**
     * Group by LeaveRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestGroupByArgs} args - Group by arguments.
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
      T extends LeaveRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveRequestGroupByArgs['orderBy'] }
        : { orderBy?: LeaveRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveRequest model
   */
  readonly fields: LeaveRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    approvedBy<T extends LeaveRequest$approvedByArgs<ExtArgs> = {}>(args?: Subset<T, LeaveRequest$approvedByArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LeaveRequest model
   */
  interface LeaveRequestFieldRefs {
    readonly leaveId: FieldRef<"LeaveRequest", 'String'>
    readonly employeeId: FieldRef<"LeaveRequest", 'String'>
    readonly leaveType: FieldRef<"LeaveRequest", 'LeaveType'>
    readonly startDate: FieldRef<"LeaveRequest", 'DateTime'>
    readonly endDate: FieldRef<"LeaveRequest", 'DateTime'>
    readonly reason: FieldRef<"LeaveRequest", 'String'>
    readonly status: FieldRef<"LeaveRequest", 'LeaveStatus'>
    readonly approvedById: FieldRef<"LeaveRequest", 'String'>
    readonly approvedAt: FieldRef<"LeaveRequest", 'DateTime'>
    readonly createdAt: FieldRef<"LeaveRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"LeaveRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaveRequest findUnique
   */
  export type LeaveRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest findUniqueOrThrow
   */
  export type LeaveRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest findFirst
   */
  export type LeaveRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveRequests.
     */
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest findFirstOrThrow
   */
  export type LeaveRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveRequests.
     */
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest findMany
   */
  export type LeaveRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequests to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest create
   */
  export type LeaveRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveRequest.
     */
    data: XOR<LeaveRequestCreateInput, LeaveRequestUncheckedCreateInput>
  }

  /**
   * LeaveRequest createMany
   */
  export type LeaveRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveRequests.
     */
    data: LeaveRequestCreateManyInput | LeaveRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveRequest createManyAndReturn
   */
  export type LeaveRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveRequests.
     */
    data: LeaveRequestCreateManyInput | LeaveRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveRequest update
   */
  export type LeaveRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveRequest.
     */
    data: XOR<LeaveRequestUpdateInput, LeaveRequestUncheckedUpdateInput>
    /**
     * Choose, which LeaveRequest to update.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest updateMany
   */
  export type LeaveRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveRequests.
     */
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyInput>
    /**
     * Filter which LeaveRequests to update
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to update.
     */
    limit?: number
  }

  /**
   * LeaveRequest updateManyAndReturn
   */
  export type LeaveRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * The data used to update LeaveRequests.
     */
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyInput>
    /**
     * Filter which LeaveRequests to update
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveRequest upsert
   */
  export type LeaveRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveRequest to update in case it exists.
     */
    where: LeaveRequestWhereUniqueInput
    /**
     * In case the LeaveRequest found by the `where` argument doesn't exist, create a new LeaveRequest with this data.
     */
    create: XOR<LeaveRequestCreateInput, LeaveRequestUncheckedCreateInput>
    /**
     * In case the LeaveRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveRequestUpdateInput, LeaveRequestUncheckedUpdateInput>
  }

  /**
   * LeaveRequest delete
   */
  export type LeaveRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter which LeaveRequest to delete.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest deleteMany
   */
  export type LeaveRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveRequests to delete
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to delete.
     */
    limit?: number
  }

  /**
   * LeaveRequest.approvedBy
   */
  export type LeaveRequest$approvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * LeaveRequest without action
   */
  export type LeaveRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    roleId: string | null
    roleName: string | null
  }

  export type RoleMaxAggregateOutputType = {
    roleId: string | null
    roleName: string | null
  }

  export type RoleCountAggregateOutputType = {
    roleId: number
    roleName: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    roleId?: true
    roleName?: true
  }

  export type RoleMaxAggregateInputType = {
    roleId?: true
    roleName?: true
  }

  export type RoleCountAggregateInputType = {
    roleId?: true
    roleName?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    roleId: string
    roleName: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleName?: boolean
    auths?: boolean | Role$authsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleName?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleName?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    roleId?: boolean
    roleName?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "roleName", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auths?: boolean | Role$authsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      auths: Prisma.$AuthPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: string
      roleName: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.createManyAndReturn({
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { roleId: true },
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auths<T extends Role$authsArgs<ExtArgs> = {}>(args?: Subset<T, Role$authsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly roleId: FieldRef<"Role", 'String'>
    readonly roleName: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.auths
   */
  export type Role$authsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    where?: AuthWhereInput
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    cursor?: AuthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    departmentId: string | null
    departmentName: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    departmentId: string | null
    departmentName: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    departmentId: number
    departmentName: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    departmentId?: true
    departmentName?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    departmentId?: true
    departmentName?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    departmentId?: true
    departmentName?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    departmentId: string
    departmentName: string
    description: string | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentId?: boolean
    departmentName?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | Department$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentId?: boolean
    departmentName?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentId?: boolean
    departmentName?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    departmentId?: boolean
    departmentName?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"departmentId" | "departmentName" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Department$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      departmentId: string
      departmentName: string
      description: string | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `departmentId`
     * const departmentWithDepartmentIdOnly = await prisma.department.findMany({ select: { departmentId: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `departmentId`
     * const departmentWithDepartmentIdOnly = await prisma.department.createManyAndReturn({
     *   select: { departmentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `departmentId`
     * const departmentWithDepartmentIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { departmentId: true },
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
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Department$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Department$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly departmentId: FieldRef<"Department", 'String'>
    readonly departmentName: FieldRef<"Department", 'String'>
    readonly description: FieldRef<"Department", 'String'>
    readonly status: FieldRef<"Department", 'Status'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.employees
   */
  export type Department$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionMinAggregateOutputType = {
    positionId: string | null
    positionName: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PositionMaxAggregateOutputType = {
    positionId: string | null
    positionName: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PositionCountAggregateOutputType = {
    positionId: number
    positionName: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PositionMinAggregateInputType = {
    positionId?: true
    positionName?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PositionMaxAggregateInputType = {
    positionId?: true
    positionName?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PositionCountAggregateInputType = {
    positionId?: true
    positionName?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Position to aggregate.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithAggregationInput | PositionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    positionId: string
    positionName: string
    description: string | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: PositionCountAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    positionId?: boolean
    positionName?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employees?: boolean | Position$employeesArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    positionId?: boolean
    positionName?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["position"]>

  export type PositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    positionId?: boolean
    positionName?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["position"]>

  export type PositionSelectScalar = {
    positionId?: boolean
    positionName?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"positionId" | "positionName" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["position"]>
  export type PositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Position$employeesArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Position"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      positionId: string
      positionName: string
      description: string | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["position"]>
    composites: {}
  }

  type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = $Result.GetResult<Prisma.$PositionPayload, S>

  type PositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface PositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Position'], meta: { name: 'Position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionFindUniqueArgs>(args: SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Position that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionFindFirstArgs>(args?: SelectSubset<T, PositionFindFirstArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `positionId`
     * const positionWithPositionIdOnly = await prisma.position.findMany({ select: { positionId: true } })
     * 
     */
    findMany<T extends PositionFindManyArgs>(args?: SelectSubset<T, PositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
     */
    create<T extends PositionCreateArgs>(args: SelectSubset<T, PositionCreateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Positions.
     * @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionCreateManyArgs>(args?: SelectSubset<T, PositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {PositionCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `positionId`
     * const positionWithPositionIdOnly = await prisma.position.createManyAndReturn({
     *   select: { positionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
     */
    delete<T extends PositionDeleteArgs>(args: SelectSubset<T, PositionDeleteArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionUpdateArgs>(args: SelectSubset<T, PositionUpdateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionDeleteManyArgs>(args?: SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionUpdateManyArgs>(args: SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {PositionUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Positions and only return the `positionId`
     * const positionWithPositionIdOnly = await prisma.position.updateManyAndReturn({
     *   select: { positionId: true },
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
    updateManyAndReturn<T extends PositionUpdateManyAndReturnArgs>(args: SelectSubset<T, PositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
     */
    upsert<T extends PositionUpsertArgs>(args: SelectSubset<T, PositionUpsertArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
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
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Position model
   */
  readonly fields: PositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Position$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Position$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Position model
   */
  interface PositionFieldRefs {
    readonly positionId: FieldRef<"Position", 'String'>
    readonly positionName: FieldRef<"Position", 'String'>
    readonly description: FieldRef<"Position", 'String'>
    readonly status: FieldRef<"Position", 'Status'>
    readonly createdAt: FieldRef<"Position", 'DateTime'>
    readonly updatedAt: FieldRef<"Position", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Position findUnique
   */
  export type PositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findFirst
   */
  export type PositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findMany
   */
  export type PositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position create
   */
  export type PositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to create a Position.
     */
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }

  /**
   * Position createMany
   */
  export type PositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position createManyAndReturn
   */
  export type PositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position update
   */
  export type PositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to update a Position.
     */
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position updateManyAndReturn
   */
  export type PositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position upsert
   */
  export type PositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The filter to search for the Position to update in case it exists.
     */
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     */
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }

  /**
   * Position delete
   */
  export type PositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter which Position to delete.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to delete.
     */
    limit?: number
  }

  /**
   * Position.employees
   */
  export type Position$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Position without action
   */
  export type PositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    addressId: string | null
    street: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    employeeId: string | null
    eventId: string | null
  }

  export type AddressMaxAggregateOutputType = {
    addressId: string | null
    street: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    employeeId: string | null
    eventId: string | null
  }

  export type AddressCountAggregateOutputType = {
    addressId: number
    street: number
    city: number
    state: number
    zipCode: number
    country: number
    employeeId: number
    eventId: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    addressId?: true
    street?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    employeeId?: true
    eventId?: true
  }

  export type AddressMaxAggregateInputType = {
    addressId?: true
    street?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    employeeId?: true
    eventId?: true
  }

  export type AddressCountAggregateInputType = {
    addressId?: true
    street?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    employeeId?: true
    eventId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    addressId: string
    street: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    employeeId: string | null
    eventId: string | null
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    addressId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    employeeId?: boolean
    eventId?: boolean
    employee?: boolean | Address$employeeArgs<ExtArgs>
    event?: boolean | Address$eventArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    addressId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    employeeId?: boolean
    eventId?: boolean
    employee?: boolean | Address$employeeArgs<ExtArgs>
    event?: boolean | Address$eventArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    addressId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    employeeId?: boolean
    eventId?: boolean
    employee?: boolean | Address$employeeArgs<ExtArgs>
    event?: boolean | Address$eventArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    addressId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    employeeId?: boolean
    eventId?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"addressId" | "street" | "city" | "state" | "zipCode" | "country" | "employeeId" | "eventId", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | Address$employeeArgs<ExtArgs>
    event?: boolean | Address$eventArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | Address$employeeArgs<ExtArgs>
    event?: boolean | Address$eventArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | Address$employeeArgs<ExtArgs>
    event?: boolean | Address$eventArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs> | null
      event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      addressId: string
      street: string | null
      city: string | null
      state: string | null
      zipCode: string | null
      country: string | null
      employeeId: string | null
      eventId: string | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `addressId`
     * const addressWithAddressIdOnly = await prisma.address.findMany({ select: { addressId: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `addressId`
     * const addressWithAddressIdOnly = await prisma.address.createManyAndReturn({
     *   select: { addressId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `addressId`
     * const addressWithAddressIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { addressId: true },
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends Address$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Address$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    event<T extends Address$eventArgs<ExtArgs> = {}>(args?: Subset<T, Address$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly addressId: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly zipCode: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly employeeId: FieldRef<"Address", 'String'>
    readonly eventId: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data?: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.employee
   */
  export type Address$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Address.event
   */
  export type Address$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    tokenId: string | null
    authId: string | null
  }

  export type TokenMaxAggregateOutputType = {
    tokenId: string | null
    authId: string | null
  }

  export type TokenCountAggregateOutputType = {
    tokenId: number
    authId: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    tokenId?: true
    authId?: true
  }

  export type TokenMaxAggregateInputType = {
    tokenId?: true
    authId?: true
  }

  export type TokenCountAggregateInputType = {
    tokenId?: true
    authId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    tokenId: string
    authId: string
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenId?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenId?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenId?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    tokenId?: boolean
    authId?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tokenId" | "authId", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      auth: Prisma.$AuthPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tokenId: string
      authId: string
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `tokenId`
     * const tokenWithTokenIdOnly = await prisma.token.findMany({ select: { tokenId: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `tokenId`
     * const tokenWithTokenIdOnly = await prisma.token.createManyAndReturn({
     *   select: { tokenId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `tokenId`
     * const tokenWithTokenIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { tokenId: true },
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth<T extends AuthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthDefaultArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly tokenId: FieldRef<"Token", 'String'>
    readonly authId: FieldRef<"Token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model AuthLog
   */

  export type AggregateAuthLog = {
    _count: AuthLogCountAggregateOutputType | null
    _min: AuthLogMinAggregateOutputType | null
    _max: AuthLogMaxAggregateOutputType | null
  }

  export type AuthLogMinAggregateOutputType = {
    logId: string | null
    authId: string | null
  }

  export type AuthLogMaxAggregateOutputType = {
    logId: string | null
    authId: string | null
  }

  export type AuthLogCountAggregateOutputType = {
    logId: number
    authId: number
    _all: number
  }


  export type AuthLogMinAggregateInputType = {
    logId?: true
    authId?: true
  }

  export type AuthLogMaxAggregateInputType = {
    logId?: true
    authId?: true
  }

  export type AuthLogCountAggregateInputType = {
    logId?: true
    authId?: true
    _all?: true
  }

  export type AuthLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthLog to aggregate.
     */
    where?: AuthLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthLogs to fetch.
     */
    orderBy?: AuthLogOrderByWithRelationInput | AuthLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthLogs
    **/
    _count?: true | AuthLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthLogMaxAggregateInputType
  }

  export type GetAuthLogAggregateType<T extends AuthLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthLog[P]>
      : GetScalarType<T[P], AggregateAuthLog[P]>
  }




  export type AuthLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthLogWhereInput
    orderBy?: AuthLogOrderByWithAggregationInput | AuthLogOrderByWithAggregationInput[]
    by: AuthLogScalarFieldEnum[] | AuthLogScalarFieldEnum
    having?: AuthLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthLogCountAggregateInputType | true
    _min?: AuthLogMinAggregateInputType
    _max?: AuthLogMaxAggregateInputType
  }

  export type AuthLogGroupByOutputType = {
    logId: string
    authId: string
    _count: AuthLogCountAggregateOutputType | null
    _min: AuthLogMinAggregateOutputType | null
    _max: AuthLogMaxAggregateOutputType | null
  }

  type GetAuthLogGroupByPayload<T extends AuthLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuthLogGroupByOutputType[P]>
        }
      >
    >


  export type AuthLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logId?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authLog"]>

  export type AuthLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logId?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authLog"]>

  export type AuthLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logId?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authLog"]>

  export type AuthLogSelectScalar = {
    logId?: boolean
    authId?: boolean
  }

  export type AuthLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"logId" | "authId", ExtArgs["result"]["authLog"]>
  export type AuthLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }
  export type AuthLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }
  export type AuthLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }

  export type $AuthLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthLog"
    objects: {
      auth: Prisma.$AuthPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      logId: string
      authId: string
    }, ExtArgs["result"]["authLog"]>
    composites: {}
  }

  type AuthLogGetPayload<S extends boolean | null | undefined | AuthLogDefaultArgs> = $Result.GetResult<Prisma.$AuthLogPayload, S>

  type AuthLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthLogCountAggregateInputType | true
    }

  export interface AuthLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthLog'], meta: { name: 'AuthLog' } }
    /**
     * Find zero or one AuthLog that matches the filter.
     * @param {AuthLogFindUniqueArgs} args - Arguments to find a AuthLog
     * @example
     * // Get one AuthLog
     * const authLog = await prisma.authLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthLogFindUniqueArgs>(args: SelectSubset<T, AuthLogFindUniqueArgs<ExtArgs>>): Prisma__AuthLogClient<$Result.GetResult<Prisma.$AuthLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthLogFindUniqueOrThrowArgs} args - Arguments to find a AuthLog
     * @example
     * // Get one AuthLog
     * const authLog = await prisma.authLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthLogClient<$Result.GetResult<Prisma.$AuthLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthLogFindFirstArgs} args - Arguments to find a AuthLog
     * @example
     * // Get one AuthLog
     * const authLog = await prisma.authLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthLogFindFirstArgs>(args?: SelectSubset<T, AuthLogFindFirstArgs<ExtArgs>>): Prisma__AuthLogClient<$Result.GetResult<Prisma.$AuthLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthLogFindFirstOrThrowArgs} args - Arguments to find a AuthLog
     * @example
     * // Get one AuthLog
     * const authLog = await prisma.authLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthLogClient<$Result.GetResult<Prisma.$AuthLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthLogs
     * const authLogs = await prisma.authLog.findMany()
     * 
     * // Get first 10 AuthLogs
     * const authLogs = await prisma.authLog.findMany({ take: 10 })
     * 
     * // Only select the `logId`
     * const authLogWithLogIdOnly = await prisma.authLog.findMany({ select: { logId: true } })
     * 
     */
    findMany<T extends AuthLogFindManyArgs>(args?: SelectSubset<T, AuthLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthLog.
     * @param {AuthLogCreateArgs} args - Arguments to create a AuthLog.
     * @example
     * // Create one AuthLog
     * const AuthLog = await prisma.authLog.create({
     *   data: {
     *     // ... data to create a AuthLog
     *   }
     * })
     * 
     */
    create<T extends AuthLogCreateArgs>(args: SelectSubset<T, AuthLogCreateArgs<ExtArgs>>): Prisma__AuthLogClient<$Result.GetResult<Prisma.$AuthLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthLogs.
     * @param {AuthLogCreateManyArgs} args - Arguments to create many AuthLogs.
     * @example
     * // Create many AuthLogs
     * const authLog = await prisma.authLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthLogCreateManyArgs>(args?: SelectSubset<T, AuthLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthLogs and returns the data saved in the database.
     * @param {AuthLogCreateManyAndReturnArgs} args - Arguments to create many AuthLogs.
     * @example
     * // Create many AuthLogs
     * const authLog = await prisma.authLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthLogs and only return the `logId`
     * const authLogWithLogIdOnly = await prisma.authLog.createManyAndReturn({
     *   select: { logId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthLog.
     * @param {AuthLogDeleteArgs} args - Arguments to delete one AuthLog.
     * @example
     * // Delete one AuthLog
     * const AuthLog = await prisma.authLog.delete({
     *   where: {
     *     // ... filter to delete one AuthLog
     *   }
     * })
     * 
     */
    delete<T extends AuthLogDeleteArgs>(args: SelectSubset<T, AuthLogDeleteArgs<ExtArgs>>): Prisma__AuthLogClient<$Result.GetResult<Prisma.$AuthLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthLog.
     * @param {AuthLogUpdateArgs} args - Arguments to update one AuthLog.
     * @example
     * // Update one AuthLog
     * const authLog = await prisma.authLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthLogUpdateArgs>(args: SelectSubset<T, AuthLogUpdateArgs<ExtArgs>>): Prisma__AuthLogClient<$Result.GetResult<Prisma.$AuthLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthLogs.
     * @param {AuthLogDeleteManyArgs} args - Arguments to filter AuthLogs to delete.
     * @example
     * // Delete a few AuthLogs
     * const { count } = await prisma.authLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthLogDeleteManyArgs>(args?: SelectSubset<T, AuthLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthLogs
     * const authLog = await prisma.authLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthLogUpdateManyArgs>(args: SelectSubset<T, AuthLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthLogs and returns the data updated in the database.
     * @param {AuthLogUpdateManyAndReturnArgs} args - Arguments to update many AuthLogs.
     * @example
     * // Update many AuthLogs
     * const authLog = await prisma.authLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthLogs and only return the `logId`
     * const authLogWithLogIdOnly = await prisma.authLog.updateManyAndReturn({
     *   select: { logId: true },
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
    updateManyAndReturn<T extends AuthLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthLog.
     * @param {AuthLogUpsertArgs} args - Arguments to update or create a AuthLog.
     * @example
     * // Update or create a AuthLog
     * const authLog = await prisma.authLog.upsert({
     *   create: {
     *     // ... data to create a AuthLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthLog we want to update
     *   }
     * })
     */
    upsert<T extends AuthLogUpsertArgs>(args: SelectSubset<T, AuthLogUpsertArgs<ExtArgs>>): Prisma__AuthLogClient<$Result.GetResult<Prisma.$AuthLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthLogCountArgs} args - Arguments to filter AuthLogs to count.
     * @example
     * // Count the number of AuthLogs
     * const count = await prisma.authLog.count({
     *   where: {
     *     // ... the filter for the AuthLogs we want to count
     *   }
     * })
    **/
    count<T extends AuthLogCountArgs>(
      args?: Subset<T, AuthLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthLogAggregateArgs>(args: Subset<T, AuthLogAggregateArgs>): Prisma.PrismaPromise<GetAuthLogAggregateType<T>>

    /**
     * Group by AuthLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthLogGroupByArgs} args - Group by arguments.
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
      T extends AuthLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthLogGroupByArgs['orderBy'] }
        : { orderBy?: AuthLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthLog model
   */
  readonly fields: AuthLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth<T extends AuthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthDefaultArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuthLog model
   */
  interface AuthLogFieldRefs {
    readonly logId: FieldRef<"AuthLog", 'String'>
    readonly authId: FieldRef<"AuthLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuthLog findUnique
   */
  export type AuthLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthLog
     */
    select?: AuthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthLog
     */
    omit?: AuthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthLogInclude<ExtArgs> | null
    /**
     * Filter, which AuthLog to fetch.
     */
    where: AuthLogWhereUniqueInput
  }

  /**
   * AuthLog findUniqueOrThrow
   */
  export type AuthLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthLog
     */
    select?: AuthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthLog
     */
    omit?: AuthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthLogInclude<ExtArgs> | null
    /**
     * Filter, which AuthLog to fetch.
     */
    where: AuthLogWhereUniqueInput
  }

  /**
   * AuthLog findFirst
   */
  export type AuthLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthLog
     */
    select?: AuthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthLog
     */
    omit?: AuthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthLogInclude<ExtArgs> | null
    /**
     * Filter, which AuthLog to fetch.
     */
    where?: AuthLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthLogs to fetch.
     */
    orderBy?: AuthLogOrderByWithRelationInput | AuthLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthLogs.
     */
    cursor?: AuthLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthLogs.
     */
    distinct?: AuthLogScalarFieldEnum | AuthLogScalarFieldEnum[]
  }

  /**
   * AuthLog findFirstOrThrow
   */
  export type AuthLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthLog
     */
    select?: AuthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthLog
     */
    omit?: AuthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthLogInclude<ExtArgs> | null
    /**
     * Filter, which AuthLog to fetch.
     */
    where?: AuthLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthLogs to fetch.
     */
    orderBy?: AuthLogOrderByWithRelationInput | AuthLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthLogs.
     */
    cursor?: AuthLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthLogs.
     */
    distinct?: AuthLogScalarFieldEnum | AuthLogScalarFieldEnum[]
  }

  /**
   * AuthLog findMany
   */
  export type AuthLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthLog
     */
    select?: AuthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthLog
     */
    omit?: AuthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthLogInclude<ExtArgs> | null
    /**
     * Filter, which AuthLogs to fetch.
     */
    where?: AuthLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthLogs to fetch.
     */
    orderBy?: AuthLogOrderByWithRelationInput | AuthLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthLogs.
     */
    cursor?: AuthLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthLogs.
     */
    skip?: number
    distinct?: AuthLogScalarFieldEnum | AuthLogScalarFieldEnum[]
  }

  /**
   * AuthLog create
   */
  export type AuthLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthLog
     */
    select?: AuthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthLog
     */
    omit?: AuthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthLog.
     */
    data: XOR<AuthLogCreateInput, AuthLogUncheckedCreateInput>
  }

  /**
   * AuthLog createMany
   */
  export type AuthLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthLogs.
     */
    data: AuthLogCreateManyInput | AuthLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthLog createManyAndReturn
   */
  export type AuthLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthLog
     */
    select?: AuthLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthLog
     */
    omit?: AuthLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuthLogs.
     */
    data: AuthLogCreateManyInput | AuthLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthLog update
   */
  export type AuthLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthLog
     */
    select?: AuthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthLog
     */
    omit?: AuthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthLog.
     */
    data: XOR<AuthLogUpdateInput, AuthLogUncheckedUpdateInput>
    /**
     * Choose, which AuthLog to update.
     */
    where: AuthLogWhereUniqueInput
  }

  /**
   * AuthLog updateMany
   */
  export type AuthLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthLogs.
     */
    data: XOR<AuthLogUpdateManyMutationInput, AuthLogUncheckedUpdateManyInput>
    /**
     * Filter which AuthLogs to update
     */
    where?: AuthLogWhereInput
    /**
     * Limit how many AuthLogs to update.
     */
    limit?: number
  }

  /**
   * AuthLog updateManyAndReturn
   */
  export type AuthLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthLog
     */
    select?: AuthLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthLog
     */
    omit?: AuthLogOmit<ExtArgs> | null
    /**
     * The data used to update AuthLogs.
     */
    data: XOR<AuthLogUpdateManyMutationInput, AuthLogUncheckedUpdateManyInput>
    /**
     * Filter which AuthLogs to update
     */
    where?: AuthLogWhereInput
    /**
     * Limit how many AuthLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthLog upsert
   */
  export type AuthLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthLog
     */
    select?: AuthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthLog
     */
    omit?: AuthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthLog to update in case it exists.
     */
    where: AuthLogWhereUniqueInput
    /**
     * In case the AuthLog found by the `where` argument doesn't exist, create a new AuthLog with this data.
     */
    create: XOR<AuthLogCreateInput, AuthLogUncheckedCreateInput>
    /**
     * In case the AuthLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthLogUpdateInput, AuthLogUncheckedUpdateInput>
  }

  /**
   * AuthLog delete
   */
  export type AuthLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthLog
     */
    select?: AuthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthLog
     */
    omit?: AuthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthLogInclude<ExtArgs> | null
    /**
     * Filter which AuthLog to delete.
     */
    where: AuthLogWhereUniqueInput
  }

  /**
   * AuthLog deleteMany
   */
  export type AuthLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthLogs to delete
     */
    where?: AuthLogWhereInput
    /**
     * Limit how many AuthLogs to delete.
     */
    limit?: number
  }

  /**
   * AuthLog without action
   */
  export type AuthLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthLog
     */
    select?: AuthLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthLog
     */
    omit?: AuthLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthLogInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    notificationId: string | null
    authId: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    notificationId: string | null
    authId: string | null
  }

  export type NotificationCountAggregateOutputType = {
    notificationId: number
    authId: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    notificationId?: true
    authId?: true
  }

  export type NotificationMaxAggregateInputType = {
    notificationId?: true
    authId?: true
  }

  export type NotificationCountAggregateInputType = {
    notificationId?: true
    authId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    notificationId: string
    authId: string
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    authId?: boolean
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    notificationId?: boolean
    authId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notificationId" | "authId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | AuthDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      auth: Prisma.$AuthPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      notificationId: string
      authId: string
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `notificationId`
     * const notificationWithNotificationIdOnly = await prisma.notification.findMany({ select: { notificationId: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `notificationId`
     * const notificationWithNotificationIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { notificationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `notificationId`
     * const notificationWithNotificationIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { notificationId: true },
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth<T extends AuthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthDefaultArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly notificationId: FieldRef<"Notification", 'String'>
    readonly authId: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    customerId: string | null
    employeeId: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    customerId: string | null
    employeeId: string | null
  }

  export type CustomerCountAggregateOutputType = {
    customerId: number
    employeeId: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    customerId?: true
    employeeId?: true
  }

  export type CustomerMaxAggregateInputType = {
    customerId?: true
    employeeId?: true
  }

  export type CustomerCountAggregateInputType = {
    customerId?: true
    employeeId?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    customerId: string
    employeeId: string
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    employeeId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    employeeId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    employeeId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    customerId?: boolean
    employeeId?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customerId" | "employeeId", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      customerId: string
      employeeId: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const customerWithCustomerIdOnly = await prisma.customer.findMany({ select: { customerId: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customerId`
     * const customerWithCustomerIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { customerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `customerId`
     * const customerWithCustomerIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { customerId: true },
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly customerId: FieldRef<"Customer", 'String'>
    readonly employeeId: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Employeeinfo
   */

  export type AggregateEmployeeinfo = {
    _count: EmployeeinfoCountAggregateOutputType | null
    _min: EmployeeinfoMinAggregateOutputType | null
    _max: EmployeeinfoMaxAggregateOutputType | null
  }

  export type EmployeeinfoMinAggregateOutputType = {
    infoId: string | null
    employeeId: string | null
  }

  export type EmployeeinfoMaxAggregateOutputType = {
    infoId: string | null
    employeeId: string | null
  }

  export type EmployeeinfoCountAggregateOutputType = {
    infoId: number
    employeeId: number
    _all: number
  }


  export type EmployeeinfoMinAggregateInputType = {
    infoId?: true
    employeeId?: true
  }

  export type EmployeeinfoMaxAggregateInputType = {
    infoId?: true
    employeeId?: true
  }

  export type EmployeeinfoCountAggregateInputType = {
    infoId?: true
    employeeId?: true
    _all?: true
  }

  export type EmployeeinfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employeeinfo to aggregate.
     */
    where?: EmployeeinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employeeinfos to fetch.
     */
    orderBy?: EmployeeinfoOrderByWithRelationInput | EmployeeinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employeeinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employeeinfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employeeinfos
    **/
    _count?: true | EmployeeinfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeinfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeinfoMaxAggregateInputType
  }

  export type GetEmployeeinfoAggregateType<T extends EmployeeinfoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeinfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeinfo[P]>
      : GetScalarType<T[P], AggregateEmployeeinfo[P]>
  }




  export type EmployeeinfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeinfoWhereInput
    orderBy?: EmployeeinfoOrderByWithAggregationInput | EmployeeinfoOrderByWithAggregationInput[]
    by: EmployeeinfoScalarFieldEnum[] | EmployeeinfoScalarFieldEnum
    having?: EmployeeinfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeinfoCountAggregateInputType | true
    _min?: EmployeeinfoMinAggregateInputType
    _max?: EmployeeinfoMaxAggregateInputType
  }

  export type EmployeeinfoGroupByOutputType = {
    infoId: string
    employeeId: string
    _count: EmployeeinfoCountAggregateOutputType | null
    _min: EmployeeinfoMinAggregateOutputType | null
    _max: EmployeeinfoMaxAggregateOutputType | null
  }

  type GetEmployeeinfoGroupByPayload<T extends EmployeeinfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeinfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeinfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeinfoGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeinfoGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeinfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    infoId?: boolean
    employeeId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeinfo"]>

  export type EmployeeinfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    infoId?: boolean
    employeeId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeinfo"]>

  export type EmployeeinfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    infoId?: boolean
    employeeId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeinfo"]>

  export type EmployeeinfoSelectScalar = {
    infoId?: boolean
    employeeId?: boolean
  }

  export type EmployeeinfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"infoId" | "employeeId", ExtArgs["result"]["employeeinfo"]>
  export type EmployeeinfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EmployeeinfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type EmployeeinfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $EmployeeinfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employeeinfo"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      infoId: string
      employeeId: string
    }, ExtArgs["result"]["employeeinfo"]>
    composites: {}
  }

  type EmployeeinfoGetPayload<S extends boolean | null | undefined | EmployeeinfoDefaultArgs> = $Result.GetResult<Prisma.$EmployeeinfoPayload, S>

  type EmployeeinfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeinfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeinfoCountAggregateInputType | true
    }

  export interface EmployeeinfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employeeinfo'], meta: { name: 'Employeeinfo' } }
    /**
     * Find zero or one Employeeinfo that matches the filter.
     * @param {EmployeeinfoFindUniqueArgs} args - Arguments to find a Employeeinfo
     * @example
     * // Get one Employeeinfo
     * const employeeinfo = await prisma.employeeinfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeinfoFindUniqueArgs>(args: SelectSubset<T, EmployeeinfoFindUniqueArgs<ExtArgs>>): Prisma__EmployeeinfoClient<$Result.GetResult<Prisma.$EmployeeinfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employeeinfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeinfoFindUniqueOrThrowArgs} args - Arguments to find a Employeeinfo
     * @example
     * // Get one Employeeinfo
     * const employeeinfo = await prisma.employeeinfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeinfoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeinfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeinfoClient<$Result.GetResult<Prisma.$EmployeeinfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employeeinfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeinfoFindFirstArgs} args - Arguments to find a Employeeinfo
     * @example
     * // Get one Employeeinfo
     * const employeeinfo = await prisma.employeeinfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeinfoFindFirstArgs>(args?: SelectSubset<T, EmployeeinfoFindFirstArgs<ExtArgs>>): Prisma__EmployeeinfoClient<$Result.GetResult<Prisma.$EmployeeinfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employeeinfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeinfoFindFirstOrThrowArgs} args - Arguments to find a Employeeinfo
     * @example
     * // Get one Employeeinfo
     * const employeeinfo = await prisma.employeeinfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeinfoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeinfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeinfoClient<$Result.GetResult<Prisma.$EmployeeinfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employeeinfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeinfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employeeinfos
     * const employeeinfos = await prisma.employeeinfo.findMany()
     * 
     * // Get first 10 Employeeinfos
     * const employeeinfos = await prisma.employeeinfo.findMany({ take: 10 })
     * 
     * // Only select the `infoId`
     * const employeeinfoWithInfoIdOnly = await prisma.employeeinfo.findMany({ select: { infoId: true } })
     * 
     */
    findMany<T extends EmployeeinfoFindManyArgs>(args?: SelectSubset<T, EmployeeinfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeinfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employeeinfo.
     * @param {EmployeeinfoCreateArgs} args - Arguments to create a Employeeinfo.
     * @example
     * // Create one Employeeinfo
     * const Employeeinfo = await prisma.employeeinfo.create({
     *   data: {
     *     // ... data to create a Employeeinfo
     *   }
     * })
     * 
     */
    create<T extends EmployeeinfoCreateArgs>(args: SelectSubset<T, EmployeeinfoCreateArgs<ExtArgs>>): Prisma__EmployeeinfoClient<$Result.GetResult<Prisma.$EmployeeinfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employeeinfos.
     * @param {EmployeeinfoCreateManyArgs} args - Arguments to create many Employeeinfos.
     * @example
     * // Create many Employeeinfos
     * const employeeinfo = await prisma.employeeinfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeinfoCreateManyArgs>(args?: SelectSubset<T, EmployeeinfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employeeinfos and returns the data saved in the database.
     * @param {EmployeeinfoCreateManyAndReturnArgs} args - Arguments to create many Employeeinfos.
     * @example
     * // Create many Employeeinfos
     * const employeeinfo = await prisma.employeeinfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employeeinfos and only return the `infoId`
     * const employeeinfoWithInfoIdOnly = await prisma.employeeinfo.createManyAndReturn({
     *   select: { infoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeinfoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeinfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeinfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employeeinfo.
     * @param {EmployeeinfoDeleteArgs} args - Arguments to delete one Employeeinfo.
     * @example
     * // Delete one Employeeinfo
     * const Employeeinfo = await prisma.employeeinfo.delete({
     *   where: {
     *     // ... filter to delete one Employeeinfo
     *   }
     * })
     * 
     */
    delete<T extends EmployeeinfoDeleteArgs>(args: SelectSubset<T, EmployeeinfoDeleteArgs<ExtArgs>>): Prisma__EmployeeinfoClient<$Result.GetResult<Prisma.$EmployeeinfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employeeinfo.
     * @param {EmployeeinfoUpdateArgs} args - Arguments to update one Employeeinfo.
     * @example
     * // Update one Employeeinfo
     * const employeeinfo = await prisma.employeeinfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeinfoUpdateArgs>(args: SelectSubset<T, EmployeeinfoUpdateArgs<ExtArgs>>): Prisma__EmployeeinfoClient<$Result.GetResult<Prisma.$EmployeeinfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employeeinfos.
     * @param {EmployeeinfoDeleteManyArgs} args - Arguments to filter Employeeinfos to delete.
     * @example
     * // Delete a few Employeeinfos
     * const { count } = await prisma.employeeinfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeinfoDeleteManyArgs>(args?: SelectSubset<T, EmployeeinfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employeeinfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeinfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employeeinfos
     * const employeeinfo = await prisma.employeeinfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeinfoUpdateManyArgs>(args: SelectSubset<T, EmployeeinfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employeeinfos and returns the data updated in the database.
     * @param {EmployeeinfoUpdateManyAndReturnArgs} args - Arguments to update many Employeeinfos.
     * @example
     * // Update many Employeeinfos
     * const employeeinfo = await prisma.employeeinfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employeeinfos and only return the `infoId`
     * const employeeinfoWithInfoIdOnly = await prisma.employeeinfo.updateManyAndReturn({
     *   select: { infoId: true },
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
    updateManyAndReturn<T extends EmployeeinfoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeinfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeinfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employeeinfo.
     * @param {EmployeeinfoUpsertArgs} args - Arguments to update or create a Employeeinfo.
     * @example
     * // Update or create a Employeeinfo
     * const employeeinfo = await prisma.employeeinfo.upsert({
     *   create: {
     *     // ... data to create a Employeeinfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employeeinfo we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeinfoUpsertArgs>(args: SelectSubset<T, EmployeeinfoUpsertArgs<ExtArgs>>): Prisma__EmployeeinfoClient<$Result.GetResult<Prisma.$EmployeeinfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employeeinfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeinfoCountArgs} args - Arguments to filter Employeeinfos to count.
     * @example
     * // Count the number of Employeeinfos
     * const count = await prisma.employeeinfo.count({
     *   where: {
     *     // ... the filter for the Employeeinfos we want to count
     *   }
     * })
    **/
    count<T extends EmployeeinfoCountArgs>(
      args?: Subset<T, EmployeeinfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeinfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employeeinfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeinfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeinfoAggregateArgs>(args: Subset<T, EmployeeinfoAggregateArgs>): Prisma.PrismaPromise<GetEmployeeinfoAggregateType<T>>

    /**
     * Group by Employeeinfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeinfoGroupByArgs} args - Group by arguments.
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
      T extends EmployeeinfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeinfoGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeinfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeinfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeinfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employeeinfo model
   */
  readonly fields: EmployeeinfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employeeinfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeinfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Employeeinfo model
   */
  interface EmployeeinfoFieldRefs {
    readonly infoId: FieldRef<"Employeeinfo", 'String'>
    readonly employeeId: FieldRef<"Employeeinfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employeeinfo findUnique
   */
  export type EmployeeinfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employeeinfo
     */
    select?: EmployeeinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employeeinfo
     */
    omit?: EmployeeinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeinfoInclude<ExtArgs> | null
    /**
     * Filter, which Employeeinfo to fetch.
     */
    where: EmployeeinfoWhereUniqueInput
  }

  /**
   * Employeeinfo findUniqueOrThrow
   */
  export type EmployeeinfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employeeinfo
     */
    select?: EmployeeinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employeeinfo
     */
    omit?: EmployeeinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeinfoInclude<ExtArgs> | null
    /**
     * Filter, which Employeeinfo to fetch.
     */
    where: EmployeeinfoWhereUniqueInput
  }

  /**
   * Employeeinfo findFirst
   */
  export type EmployeeinfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employeeinfo
     */
    select?: EmployeeinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employeeinfo
     */
    omit?: EmployeeinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeinfoInclude<ExtArgs> | null
    /**
     * Filter, which Employeeinfo to fetch.
     */
    where?: EmployeeinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employeeinfos to fetch.
     */
    orderBy?: EmployeeinfoOrderByWithRelationInput | EmployeeinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employeeinfos.
     */
    cursor?: EmployeeinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employeeinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employeeinfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employeeinfos.
     */
    distinct?: EmployeeinfoScalarFieldEnum | EmployeeinfoScalarFieldEnum[]
  }

  /**
   * Employeeinfo findFirstOrThrow
   */
  export type EmployeeinfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employeeinfo
     */
    select?: EmployeeinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employeeinfo
     */
    omit?: EmployeeinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeinfoInclude<ExtArgs> | null
    /**
     * Filter, which Employeeinfo to fetch.
     */
    where?: EmployeeinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employeeinfos to fetch.
     */
    orderBy?: EmployeeinfoOrderByWithRelationInput | EmployeeinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employeeinfos.
     */
    cursor?: EmployeeinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employeeinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employeeinfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employeeinfos.
     */
    distinct?: EmployeeinfoScalarFieldEnum | EmployeeinfoScalarFieldEnum[]
  }

  /**
   * Employeeinfo findMany
   */
  export type EmployeeinfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employeeinfo
     */
    select?: EmployeeinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employeeinfo
     */
    omit?: EmployeeinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeinfoInclude<ExtArgs> | null
    /**
     * Filter, which Employeeinfos to fetch.
     */
    where?: EmployeeinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employeeinfos to fetch.
     */
    orderBy?: EmployeeinfoOrderByWithRelationInput | EmployeeinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employeeinfos.
     */
    cursor?: EmployeeinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employeeinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employeeinfos.
     */
    skip?: number
    distinct?: EmployeeinfoScalarFieldEnum | EmployeeinfoScalarFieldEnum[]
  }

  /**
   * Employeeinfo create
   */
  export type EmployeeinfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employeeinfo
     */
    select?: EmployeeinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employeeinfo
     */
    omit?: EmployeeinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeinfoInclude<ExtArgs> | null
    /**
     * The data needed to create a Employeeinfo.
     */
    data: XOR<EmployeeinfoCreateInput, EmployeeinfoUncheckedCreateInput>
  }

  /**
   * Employeeinfo createMany
   */
  export type EmployeeinfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employeeinfos.
     */
    data: EmployeeinfoCreateManyInput | EmployeeinfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employeeinfo createManyAndReturn
   */
  export type EmployeeinfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employeeinfo
     */
    select?: EmployeeinfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employeeinfo
     */
    omit?: EmployeeinfoOmit<ExtArgs> | null
    /**
     * The data used to create many Employeeinfos.
     */
    data: EmployeeinfoCreateManyInput | EmployeeinfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeinfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employeeinfo update
   */
  export type EmployeeinfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employeeinfo
     */
    select?: EmployeeinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employeeinfo
     */
    omit?: EmployeeinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeinfoInclude<ExtArgs> | null
    /**
     * The data needed to update a Employeeinfo.
     */
    data: XOR<EmployeeinfoUpdateInput, EmployeeinfoUncheckedUpdateInput>
    /**
     * Choose, which Employeeinfo to update.
     */
    where: EmployeeinfoWhereUniqueInput
  }

  /**
   * Employeeinfo updateMany
   */
  export type EmployeeinfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employeeinfos.
     */
    data: XOR<EmployeeinfoUpdateManyMutationInput, EmployeeinfoUncheckedUpdateManyInput>
    /**
     * Filter which Employeeinfos to update
     */
    where?: EmployeeinfoWhereInput
    /**
     * Limit how many Employeeinfos to update.
     */
    limit?: number
  }

  /**
   * Employeeinfo updateManyAndReturn
   */
  export type EmployeeinfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employeeinfo
     */
    select?: EmployeeinfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employeeinfo
     */
    omit?: EmployeeinfoOmit<ExtArgs> | null
    /**
     * The data used to update Employeeinfos.
     */
    data: XOR<EmployeeinfoUpdateManyMutationInput, EmployeeinfoUncheckedUpdateManyInput>
    /**
     * Filter which Employeeinfos to update
     */
    where?: EmployeeinfoWhereInput
    /**
     * Limit how many Employeeinfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeinfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employeeinfo upsert
   */
  export type EmployeeinfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employeeinfo
     */
    select?: EmployeeinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employeeinfo
     */
    omit?: EmployeeinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeinfoInclude<ExtArgs> | null
    /**
     * The filter to search for the Employeeinfo to update in case it exists.
     */
    where: EmployeeinfoWhereUniqueInput
    /**
     * In case the Employeeinfo found by the `where` argument doesn't exist, create a new Employeeinfo with this data.
     */
    create: XOR<EmployeeinfoCreateInput, EmployeeinfoUncheckedCreateInput>
    /**
     * In case the Employeeinfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeinfoUpdateInput, EmployeeinfoUncheckedUpdateInput>
  }

  /**
   * Employeeinfo delete
   */
  export type EmployeeinfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employeeinfo
     */
    select?: EmployeeinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employeeinfo
     */
    omit?: EmployeeinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeinfoInclude<ExtArgs> | null
    /**
     * Filter which Employeeinfo to delete.
     */
    where: EmployeeinfoWhereUniqueInput
  }

  /**
   * Employeeinfo deleteMany
   */
  export type EmployeeinfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employeeinfos to delete
     */
    where?: EmployeeinfoWhereInput
    /**
     * Limit how many Employeeinfos to delete.
     */
    limit?: number
  }

  /**
   * Employeeinfo without action
   */
  export type EmployeeinfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employeeinfo
     */
    select?: EmployeeinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employeeinfo
     */
    omit?: EmployeeinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeinfoInclude<ExtArgs> | null
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


  export const AttendanceScalarFieldEnum: {
    attendanceId: 'attendanceId',
    employeeId: 'employeeId',
    eventId: 'eventId',
    datetime: 'datetime',
    method: 'method',
    status: 'status',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const AuthScalarFieldEnum: {
    authId: 'authId',
    email: 'email',
    password: 'password',
    roleId: 'roleId',
    employeeId: 'employeeId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLoginAt: 'lastLoginAt'
  };

  export type AuthScalarFieldEnum = (typeof AuthScalarFieldEnum)[keyof typeof AuthScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    employeeId: 'employeeId',
    employeeCode: 'employeeCode',
    firstName: 'firstName',
    lastName: 'lastName',
    gender: 'gender',
    dob: 'dob',
    phone: 'phone',
    positionId: 'positionId',
    departmentId: 'departmentId',
    salary: 'salary',
    hiredDate: 'hiredDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const EventScalarFieldEnum: {
    eventId: 'eventId',
    eventName: 'eventName',
    memo: 'memo',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const QRCodeScalarFieldEnum: {
    qrId: 'qrId',
    token: 'token',
    eventId: 'eventId',
    eventName: 'eventName',
    qrCode: 'qrCode',
    expiresAt: 'expiresAt',
    oneTimeUse: 'oneTimeUse',
    isActive: 'isActive',
    scans: 'scans',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QRCodeScalarFieldEnum = (typeof QRCodeScalarFieldEnum)[keyof typeof QRCodeScalarFieldEnum]


  export const LeaveRequestScalarFieldEnum: {
    leaveId: 'leaveId',
    employeeId: 'employeeId',
    leaveType: 'leaveType',
    startDate: 'startDate',
    endDate: 'endDate',
    reason: 'reason',
    status: 'status',
    approvedById: 'approvedById',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaveRequestScalarFieldEnum = (typeof LeaveRequestScalarFieldEnum)[keyof typeof LeaveRequestScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    roleId: 'roleId',
    roleName: 'roleName'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    departmentId: 'departmentId',
    departmentName: 'departmentName',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    positionId: 'positionId',
    positionName: 'positionName',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    addressId: 'addressId',
    street: 'street',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    country: 'country',
    employeeId: 'employeeId',
    eventId: 'eventId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    tokenId: 'tokenId',
    authId: 'authId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const AuthLogScalarFieldEnum: {
    logId: 'logId',
    authId: 'authId'
  };

  export type AuthLogScalarFieldEnum = (typeof AuthLogScalarFieldEnum)[keyof typeof AuthLogScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    notificationId: 'notificationId',
    authId: 'authId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    customerId: 'customerId',
    employeeId: 'employeeId'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const EmployeeinfoScalarFieldEnum: {
    infoId: 'infoId',
    employeeId: 'employeeId'
  };

  export type EmployeeinfoScalarFieldEnum = (typeof EmployeeinfoScalarFieldEnum)[keyof typeof EmployeeinfoScalarFieldEnum]


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
   * Reference to a field of type 'ScanMethod'
   */
  export type EnumScanMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScanMethod'>
    


  /**
   * Reference to a field of type 'ScanMethod[]'
   */
  export type ListEnumScanMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScanMethod[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'AccountStatus'
   */
  export type EnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus'>
    


  /**
   * Reference to a field of type 'AccountStatus[]'
   */
  export type ListEnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'LeaveType'
   */
  export type EnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType'>
    


  /**
   * Reference to a field of type 'LeaveType[]'
   */
  export type ListEnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType[]'>
    


  /**
   * Reference to a field of type 'LeaveStatus'
   */
  export type EnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus'>
    


  /**
   * Reference to a field of type 'LeaveStatus[]'
   */
  export type ListEnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus[]'>
    


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


  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    attendanceId?: UuidFilter<"Attendance"> | string
    employeeId?: UuidFilter<"Attendance"> | string
    eventId?: UuidFilter<"Attendance"> | string
    datetime?: DateTimeFilter<"Attendance"> | Date | string
    method?: EnumScanMethodNullableFilter<"Attendance"> | $Enums.ScanMethod | null
    status?: EnumStatusFilter<"Attendance"> | $Enums.Status
    checkIn?: DateTimeFilter<"Attendance"> | Date | string
    checkOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    note?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    attendanceId?: SortOrder
    employeeId?: SortOrder
    eventId?: SortOrder
    datetime?: SortOrder
    method?: SortOrderInput | SortOrder
    status?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    attendanceId?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    employeeId?: UuidFilter<"Attendance"> | string
    eventId?: UuidFilter<"Attendance"> | string
    datetime?: DateTimeFilter<"Attendance"> | Date | string
    method?: EnumScanMethodNullableFilter<"Attendance"> | $Enums.ScanMethod | null
    status?: EnumStatusFilter<"Attendance"> | $Enums.Status
    checkIn?: DateTimeFilter<"Attendance"> | Date | string
    checkOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    note?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "attendanceId">

  export type AttendanceOrderByWithAggregationInput = {
    attendanceId?: SortOrder
    employeeId?: SortOrder
    eventId?: SortOrder
    datetime?: SortOrder
    method?: SortOrderInput | SortOrder
    status?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    attendanceId?: UuidWithAggregatesFilter<"Attendance"> | string
    employeeId?: UuidWithAggregatesFilter<"Attendance"> | string
    eventId?: UuidWithAggregatesFilter<"Attendance"> | string
    datetime?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    method?: EnumScanMethodNullableWithAggregatesFilter<"Attendance"> | $Enums.ScanMethod | null
    status?: EnumStatusWithAggregatesFilter<"Attendance"> | $Enums.Status
    checkIn?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    checkOut?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    note?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type AuthWhereInput = {
    AND?: AuthWhereInput | AuthWhereInput[]
    OR?: AuthWhereInput[]
    NOT?: AuthWhereInput | AuthWhereInput[]
    authId?: UuidFilter<"Auth"> | string
    email?: StringFilter<"Auth"> | string
    password?: StringFilter<"Auth"> | string
    roleId?: UuidFilter<"Auth"> | string
    employeeId?: UuidNullableFilter<"Auth"> | string | null
    status?: EnumAccountStatusFilter<"Auth"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"Auth"> | Date | string
    updatedAt?: DateTimeFilter<"Auth"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"Auth"> | Date | string | null
    token?: TokenListRelationFilter
    logs?: AuthLogListRelationFilter
    notification?: NotificationListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type AuthOrderByWithRelationInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    token?: TokenOrderByRelationAggregateInput
    logs?: AuthLogOrderByRelationAggregateInput
    notification?: NotificationOrderByRelationAggregateInput
    role?: RoleOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type AuthWhereUniqueInput = Prisma.AtLeast<{
    authId?: string
    email?: string
    employeeId?: string
    AND?: AuthWhereInput | AuthWhereInput[]
    OR?: AuthWhereInput[]
    NOT?: AuthWhereInput | AuthWhereInput[]
    password?: StringFilter<"Auth"> | string
    roleId?: UuidFilter<"Auth"> | string
    status?: EnumAccountStatusFilter<"Auth"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"Auth"> | Date | string
    updatedAt?: DateTimeFilter<"Auth"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"Auth"> | Date | string | null
    token?: TokenListRelationFilter
    logs?: AuthLogListRelationFilter
    notification?: NotificationListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "authId" | "email" | "employeeId">

  export type AuthOrderByWithAggregationInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    _count?: AuthCountOrderByAggregateInput
    _max?: AuthMaxOrderByAggregateInput
    _min?: AuthMinOrderByAggregateInput
  }

  export type AuthScalarWhereWithAggregatesInput = {
    AND?: AuthScalarWhereWithAggregatesInput | AuthScalarWhereWithAggregatesInput[]
    OR?: AuthScalarWhereWithAggregatesInput[]
    NOT?: AuthScalarWhereWithAggregatesInput | AuthScalarWhereWithAggregatesInput[]
    authId?: UuidWithAggregatesFilter<"Auth"> | string
    email?: StringWithAggregatesFilter<"Auth"> | string
    password?: StringWithAggregatesFilter<"Auth"> | string
    roleId?: UuidWithAggregatesFilter<"Auth"> | string
    employeeId?: UuidNullableWithAggregatesFilter<"Auth"> | string | null
    status?: EnumAccountStatusWithAggregatesFilter<"Auth"> | $Enums.AccountStatus
    createdAt?: DateTimeWithAggregatesFilter<"Auth"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Auth"> | Date | string
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"Auth"> | Date | string | null
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    employeeId?: UuidFilter<"Employee"> | string
    employeeCode?: StringNullableFilter<"Employee"> | string | null
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    gender?: EnumGenderFilter<"Employee"> | $Enums.Gender
    dob?: DateTimeNullableFilter<"Employee"> | Date | string | null
    phone?: StringNullableFilter<"Employee"> | string | null
    positionId?: UuidFilter<"Employee"> | string
    departmentId?: UuidFilter<"Employee"> | string
    salary?: DecimalFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    hiredDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    status?: EnumStatusFilter<"Employee"> | $Enums.Status
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    attendances?: AttendanceListRelationFilter
    auth?: XOR<AuthNullableScalarRelationFilter, AuthWhereInput> | null
    customer?: CustomerListRelationFilter
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    info?: XOR<EmployeeinfoNullableScalarRelationFilter, EmployeeinfoWhereInput> | null
    approvedLeaves?: LeaveRequestListRelationFilter
    leaveRequests?: LeaveRequestListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    employeeId?: SortOrder
    employeeCode?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dob?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    positionId?: SortOrder
    departmentId?: SortOrder
    salary?: SortOrder
    hiredDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: AddressOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
    auth?: AuthOrderByWithRelationInput
    customer?: CustomerOrderByRelationAggregateInput
    department?: DepartmentOrderByWithRelationInput
    position?: PositionOrderByWithRelationInput
    info?: EmployeeinfoOrderByWithRelationInput
    approvedLeaves?: LeaveRequestOrderByRelationAggregateInput
    leaveRequests?: LeaveRequestOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    employeeId?: string
    employeeCode?: string
    phone?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    gender?: EnumGenderFilter<"Employee"> | $Enums.Gender
    dob?: DateTimeNullableFilter<"Employee"> | Date | string | null
    positionId?: UuidFilter<"Employee"> | string
    departmentId?: UuidFilter<"Employee"> | string
    salary?: DecimalFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    hiredDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    status?: EnumStatusFilter<"Employee"> | $Enums.Status
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    attendances?: AttendanceListRelationFilter
    auth?: XOR<AuthNullableScalarRelationFilter, AuthWhereInput> | null
    customer?: CustomerListRelationFilter
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    info?: XOR<EmployeeinfoNullableScalarRelationFilter, EmployeeinfoWhereInput> | null
    approvedLeaves?: LeaveRequestListRelationFilter
    leaveRequests?: LeaveRequestListRelationFilter
  }, "employeeId" | "employeeCode" | "phone">

  export type EmployeeOrderByWithAggregationInput = {
    employeeId?: SortOrder
    employeeCode?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dob?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    positionId?: SortOrder
    departmentId?: SortOrder
    salary?: SortOrder
    hiredDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    employeeId?: UuidWithAggregatesFilter<"Employee"> | string
    employeeCode?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    firstName?: StringWithAggregatesFilter<"Employee"> | string
    lastName?: StringWithAggregatesFilter<"Employee"> | string
    gender?: EnumGenderWithAggregatesFilter<"Employee"> | $Enums.Gender
    dob?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    phone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    positionId?: UuidWithAggregatesFilter<"Employee"> | string
    departmentId?: UuidWithAggregatesFilter<"Employee"> | string
    salary?: DecimalWithAggregatesFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    hiredDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    status?: EnumStatusWithAggregatesFilter<"Employee"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    eventId?: UuidFilter<"Event"> | string
    eventName?: StringFilter<"Event"> | string
    memo?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    status?: EnumStatusFilter<"Event"> | $Enums.Status
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    attendance?: AttendanceListRelationFilter
    qrCode?: QRCodeListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    eventId?: SortOrder
    eventName?: SortOrder
    memo?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: AddressOrderByWithRelationInput
    attendance?: AttendanceOrderByRelationAggregateInput
    qrCode?: QRCodeOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    eventId?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    eventName?: StringFilter<"Event"> | string
    memo?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    status?: EnumStatusFilter<"Event"> | $Enums.Status
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    attendance?: AttendanceListRelationFilter
    qrCode?: QRCodeListRelationFilter
  }, "eventId">

  export type EventOrderByWithAggregationInput = {
    eventId?: SortOrder
    eventName?: SortOrder
    memo?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    eventId?: UuidWithAggregatesFilter<"Event"> | string
    eventName?: StringWithAggregatesFilter<"Event"> | string
    memo?: StringNullableWithAggregatesFilter<"Event"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Event"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type QRCodeWhereInput = {
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    qrId?: UuidFilter<"QRCode"> | string
    token?: StringFilter<"QRCode"> | string
    eventId?: UuidFilter<"QRCode"> | string
    eventName?: StringFilter<"QRCode"> | string
    qrCode?: StringFilter<"QRCode"> | string
    expiresAt?: DateTimeFilter<"QRCode"> | Date | string
    oneTimeUse?: BoolFilter<"QRCode"> | boolean
    isActive?: BoolFilter<"QRCode"> | boolean
    scans?: IntFilter<"QRCode"> | number
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type QRCodeOrderByWithRelationInput = {
    qrId?: SortOrder
    token?: SortOrder
    eventId?: SortOrder
    eventName?: SortOrder
    qrCode?: SortOrder
    expiresAt?: SortOrder
    oneTimeUse?: SortOrder
    isActive?: SortOrder
    scans?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type QRCodeWhereUniqueInput = Prisma.AtLeast<{
    qrId?: string
    token?: string
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    eventId?: UuidFilter<"QRCode"> | string
    eventName?: StringFilter<"QRCode"> | string
    qrCode?: StringFilter<"QRCode"> | string
    expiresAt?: DateTimeFilter<"QRCode"> | Date | string
    oneTimeUse?: BoolFilter<"QRCode"> | boolean
    isActive?: BoolFilter<"QRCode"> | boolean
    scans?: IntFilter<"QRCode"> | number
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "qrId" | "token">

  export type QRCodeOrderByWithAggregationInput = {
    qrId?: SortOrder
    token?: SortOrder
    eventId?: SortOrder
    eventName?: SortOrder
    qrCode?: SortOrder
    expiresAt?: SortOrder
    oneTimeUse?: SortOrder
    isActive?: SortOrder
    scans?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QRCodeCountOrderByAggregateInput
    _avg?: QRCodeAvgOrderByAggregateInput
    _max?: QRCodeMaxOrderByAggregateInput
    _min?: QRCodeMinOrderByAggregateInput
    _sum?: QRCodeSumOrderByAggregateInput
  }

  export type QRCodeScalarWhereWithAggregatesInput = {
    AND?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    OR?: QRCodeScalarWhereWithAggregatesInput[]
    NOT?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    qrId?: UuidWithAggregatesFilter<"QRCode"> | string
    token?: StringWithAggregatesFilter<"QRCode"> | string
    eventId?: UuidWithAggregatesFilter<"QRCode"> | string
    eventName?: StringWithAggregatesFilter<"QRCode"> | string
    qrCode?: StringWithAggregatesFilter<"QRCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"QRCode"> | Date | string
    oneTimeUse?: BoolWithAggregatesFilter<"QRCode"> | boolean
    isActive?: BoolWithAggregatesFilter<"QRCode"> | boolean
    scans?: IntWithAggregatesFilter<"QRCode"> | number
    createdAt?: DateTimeWithAggregatesFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QRCode"> | Date | string
  }

  export type LeaveRequestWhereInput = {
    AND?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    OR?: LeaveRequestWhereInput[]
    NOT?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    leaveId?: UuidFilter<"LeaveRequest"> | string
    employeeId?: UuidFilter<"LeaveRequest"> | string
    leaveType?: EnumLeaveTypeFilter<"LeaveRequest"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"LeaveRequest"> | Date | string
    endDate?: DateTimeFilter<"LeaveRequest"> | Date | string
    reason?: StringNullableFilter<"LeaveRequest"> | string | null
    status?: EnumLeaveStatusFilter<"LeaveRequest"> | $Enums.LeaveStatus
    approvedById?: UuidNullableFilter<"LeaveRequest"> | string | null
    approvedAt?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    approvedBy?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type LeaveRequestOrderByWithRelationInput = {
    leaveId?: SortOrder
    employeeId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    approvedBy?: EmployeeOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type LeaveRequestWhereUniqueInput = Prisma.AtLeast<{
    leaveId?: string
    AND?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    OR?: LeaveRequestWhereInput[]
    NOT?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    employeeId?: UuidFilter<"LeaveRequest"> | string
    leaveType?: EnumLeaveTypeFilter<"LeaveRequest"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"LeaveRequest"> | Date | string
    endDate?: DateTimeFilter<"LeaveRequest"> | Date | string
    reason?: StringNullableFilter<"LeaveRequest"> | string | null
    status?: EnumLeaveStatusFilter<"LeaveRequest"> | $Enums.LeaveStatus
    approvedById?: UuidNullableFilter<"LeaveRequest"> | string | null
    approvedAt?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    approvedBy?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "leaveId">

  export type LeaveRequestOrderByWithAggregationInput = {
    leaveId?: SortOrder
    employeeId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaveRequestCountOrderByAggregateInput
    _max?: LeaveRequestMaxOrderByAggregateInput
    _min?: LeaveRequestMinOrderByAggregateInput
  }

  export type LeaveRequestScalarWhereWithAggregatesInput = {
    AND?: LeaveRequestScalarWhereWithAggregatesInput | LeaveRequestScalarWhereWithAggregatesInput[]
    OR?: LeaveRequestScalarWhereWithAggregatesInput[]
    NOT?: LeaveRequestScalarWhereWithAggregatesInput | LeaveRequestScalarWhereWithAggregatesInput[]
    leaveId?: UuidWithAggregatesFilter<"LeaveRequest"> | string
    employeeId?: UuidWithAggregatesFilter<"LeaveRequest"> | string
    leaveType?: EnumLeaveTypeWithAggregatesFilter<"LeaveRequest"> | $Enums.LeaveType
    startDate?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null
    status?: EnumLeaveStatusWithAggregatesFilter<"LeaveRequest"> | $Enums.LeaveStatus
    approvedById?: UuidNullableWithAggregatesFilter<"LeaveRequest"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"LeaveRequest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    roleId?: UuidFilter<"Role"> | string
    roleName?: StringFilter<"Role"> | string
    auths?: AuthListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    auths?: AuthOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    roleId?: string
    roleName?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    auths?: AuthListRelationFilter
  }, "roleId" | "roleName">

  export type RoleOrderByWithAggregationInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    roleId?: UuidWithAggregatesFilter<"Role"> | string
    roleName?: StringWithAggregatesFilter<"Role"> | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    departmentId?: UuidFilter<"Department"> | string
    departmentName?: StringFilter<"Department"> | string
    description?: StringNullableFilter<"Department"> | string | null
    status?: EnumStatusFilter<"Department"> | $Enums.Status
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    employees?: EmployeeListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    departmentId?: string
    departmentName?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    description?: StringNullableFilter<"Department"> | string | null
    status?: EnumStatusFilter<"Department"> | $Enums.Status
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    employees?: EmployeeListRelationFilter
  }, "departmentId" | "departmentName">

  export type DepartmentOrderByWithAggregationInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    departmentId?: UuidWithAggregatesFilter<"Department"> | string
    departmentName?: StringWithAggregatesFilter<"Department"> | string
    description?: StringNullableWithAggregatesFilter<"Department"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Department"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type PositionWhereInput = {
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    positionId?: UuidFilter<"Position"> | string
    positionName?: StringFilter<"Position"> | string
    description?: StringNullableFilter<"Position"> | string | null
    status?: EnumStatusFilter<"Position"> | $Enums.Status
    createdAt?: DateTimeFilter<"Position"> | Date | string
    updatedAt?: DateTimeFilter<"Position"> | Date | string
    employees?: EmployeeListRelationFilter
  }

  export type PositionOrderByWithRelationInput = {
    positionId?: SortOrder
    positionName?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type PositionWhereUniqueInput = Prisma.AtLeast<{
    positionId?: string
    positionName?: string
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    description?: StringNullableFilter<"Position"> | string | null
    status?: EnumStatusFilter<"Position"> | $Enums.Status
    createdAt?: DateTimeFilter<"Position"> | Date | string
    updatedAt?: DateTimeFilter<"Position"> | Date | string
    employees?: EmployeeListRelationFilter
  }, "positionId" | "positionName">

  export type PositionOrderByWithAggregationInput = {
    positionId?: SortOrder
    positionName?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    OR?: PositionScalarWhereWithAggregatesInput[]
    NOT?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    positionId?: UuidWithAggregatesFilter<"Position"> | string
    positionName?: StringWithAggregatesFilter<"Position"> | string
    description?: StringNullableWithAggregatesFilter<"Position"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Position"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Position"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Position"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    addressId?: UuidFilter<"Address"> | string
    street?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    zipCode?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    employeeId?: UuidNullableFilter<"Address"> | string | null
    eventId?: UuidNullableFilter<"Address"> | string | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    addressId?: SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    addressId?: string
    employeeId?: string
    eventId?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    zipCode?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "addressId" | "employeeId" | "eventId">

  export type AddressOrderByWithAggregationInput = {
    addressId?: SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    addressId?: UuidWithAggregatesFilter<"Address"> | string
    street?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringNullableWithAggregatesFilter<"Address"> | string | null
    state?: StringNullableWithAggregatesFilter<"Address"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"Address"> | string | null
    country?: StringNullableWithAggregatesFilter<"Address"> | string | null
    employeeId?: UuidNullableWithAggregatesFilter<"Address"> | string | null
    eventId?: UuidNullableWithAggregatesFilter<"Address"> | string | null
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    tokenId?: UuidFilter<"Token"> | string
    authId?: UuidFilter<"Token"> | string
    auth?: XOR<AuthScalarRelationFilter, AuthWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    tokenId?: SortOrder
    authId?: SortOrder
    auth?: AuthOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    tokenId?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    authId?: UuidFilter<"Token"> | string
    auth?: XOR<AuthScalarRelationFilter, AuthWhereInput>
  }, "tokenId">

  export type TokenOrderByWithAggregationInput = {
    tokenId?: SortOrder
    authId?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    tokenId?: UuidWithAggregatesFilter<"Token"> | string
    authId?: UuidWithAggregatesFilter<"Token"> | string
  }

  export type AuthLogWhereInput = {
    AND?: AuthLogWhereInput | AuthLogWhereInput[]
    OR?: AuthLogWhereInput[]
    NOT?: AuthLogWhereInput | AuthLogWhereInput[]
    logId?: UuidFilter<"AuthLog"> | string
    authId?: UuidFilter<"AuthLog"> | string
    auth?: XOR<AuthScalarRelationFilter, AuthWhereInput>
  }

  export type AuthLogOrderByWithRelationInput = {
    logId?: SortOrder
    authId?: SortOrder
    auth?: AuthOrderByWithRelationInput
  }

  export type AuthLogWhereUniqueInput = Prisma.AtLeast<{
    logId?: string
    AND?: AuthLogWhereInput | AuthLogWhereInput[]
    OR?: AuthLogWhereInput[]
    NOT?: AuthLogWhereInput | AuthLogWhereInput[]
    authId?: UuidFilter<"AuthLog"> | string
    auth?: XOR<AuthScalarRelationFilter, AuthWhereInput>
  }, "logId">

  export type AuthLogOrderByWithAggregationInput = {
    logId?: SortOrder
    authId?: SortOrder
    _count?: AuthLogCountOrderByAggregateInput
    _max?: AuthLogMaxOrderByAggregateInput
    _min?: AuthLogMinOrderByAggregateInput
  }

  export type AuthLogScalarWhereWithAggregatesInput = {
    AND?: AuthLogScalarWhereWithAggregatesInput | AuthLogScalarWhereWithAggregatesInput[]
    OR?: AuthLogScalarWhereWithAggregatesInput[]
    NOT?: AuthLogScalarWhereWithAggregatesInput | AuthLogScalarWhereWithAggregatesInput[]
    logId?: UuidWithAggregatesFilter<"AuthLog"> | string
    authId?: UuidWithAggregatesFilter<"AuthLog"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    notificationId?: UuidFilter<"Notification"> | string
    authId?: UuidFilter<"Notification"> | string
    auth?: XOR<AuthScalarRelationFilter, AuthWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    notificationId?: SortOrder
    authId?: SortOrder
    auth?: AuthOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    notificationId?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    authId?: UuidFilter<"Notification"> | string
    auth?: XOR<AuthScalarRelationFilter, AuthWhereInput>
  }, "notificationId">

  export type NotificationOrderByWithAggregationInput = {
    notificationId?: SortOrder
    authId?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    notificationId?: UuidWithAggregatesFilter<"Notification"> | string
    authId?: UuidWithAggregatesFilter<"Notification"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customerId?: UuidFilter<"Customer"> | string
    employeeId?: UuidFilter<"Customer"> | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type CustomerOrderByWithRelationInput = {
    customerId?: SortOrder
    employeeId?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    customerId?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    employeeId?: UuidFilter<"Customer"> | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "customerId">

  export type CustomerOrderByWithAggregationInput = {
    customerId?: SortOrder
    employeeId?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    customerId?: UuidWithAggregatesFilter<"Customer"> | string
    employeeId?: UuidWithAggregatesFilter<"Customer"> | string
  }

  export type EmployeeinfoWhereInput = {
    AND?: EmployeeinfoWhereInput | EmployeeinfoWhereInput[]
    OR?: EmployeeinfoWhereInput[]
    NOT?: EmployeeinfoWhereInput | EmployeeinfoWhereInput[]
    infoId?: UuidFilter<"Employeeinfo"> | string
    employeeId?: UuidFilter<"Employeeinfo"> | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type EmployeeinfoOrderByWithRelationInput = {
    infoId?: SortOrder
    employeeId?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type EmployeeinfoWhereUniqueInput = Prisma.AtLeast<{
    infoId?: string
    employeeId?: string
    AND?: EmployeeinfoWhereInput | EmployeeinfoWhereInput[]
    OR?: EmployeeinfoWhereInput[]
    NOT?: EmployeeinfoWhereInput | EmployeeinfoWhereInput[]
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "infoId" | "employeeId">

  export type EmployeeinfoOrderByWithAggregationInput = {
    infoId?: SortOrder
    employeeId?: SortOrder
    _count?: EmployeeinfoCountOrderByAggregateInput
    _max?: EmployeeinfoMaxOrderByAggregateInput
    _min?: EmployeeinfoMinOrderByAggregateInput
  }

  export type EmployeeinfoScalarWhereWithAggregatesInput = {
    AND?: EmployeeinfoScalarWhereWithAggregatesInput | EmployeeinfoScalarWhereWithAggregatesInput[]
    OR?: EmployeeinfoScalarWhereWithAggregatesInput[]
    NOT?: EmployeeinfoScalarWhereWithAggregatesInput | EmployeeinfoScalarWhereWithAggregatesInput[]
    infoId?: UuidWithAggregatesFilter<"Employeeinfo"> | string
    employeeId?: UuidWithAggregatesFilter<"Employeeinfo"> | string
  }

  export type AttendanceCreateInput = {
    attendanceId?: string
    datetime?: Date | string
    method?: $Enums.ScanMethod | null
    status?: $Enums.Status
    checkIn?: Date | string
    checkOut?: Date | string | null
    note?: string | null
    createdAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutAttendancesInput
    event: EventCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    attendanceId?: string
    employeeId: string
    eventId: string
    datetime?: Date | string
    method?: $Enums.ScanMethod | null
    status?: $Enums.Status
    checkIn?: Date | string
    checkOut?: Date | string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    attendanceId?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumScanMethodFieldUpdateOperationsInput | $Enums.ScanMethod | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutAttendancesNestedInput
    event?: EventUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    attendanceId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumScanMethodFieldUpdateOperationsInput | $Enums.ScanMethod | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    attendanceId?: string
    employeeId: string
    eventId: string
    datetime?: Date | string
    method?: $Enums.ScanMethod | null
    status?: $Enums.Status
    checkIn?: Date | string
    checkOut?: Date | string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    attendanceId?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumScanMethodFieldUpdateOperationsInput | $Enums.ScanMethod | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    attendanceId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumScanMethodFieldUpdateOperationsInput | $Enums.ScanMethod | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCreateInput = {
    authId?: string
    email: string
    password: string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    token?: TokenCreateNestedManyWithoutAuthInput
    logs?: AuthLogCreateNestedManyWithoutAuthInput
    notification?: NotificationCreateNestedManyWithoutAuthInput
    role: RoleCreateNestedOneWithoutAuthsInput
    employee?: EmployeeCreateNestedOneWithoutAuthInput
  }

  export type AuthUncheckedCreateInput = {
    authId?: string
    email: string
    password: string
    roleId: string
    employeeId?: string | null
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    token?: TokenUncheckedCreateNestedManyWithoutAuthInput
    logs?: AuthLogUncheckedCreateNestedManyWithoutAuthInput
    notification?: NotificationUncheckedCreateNestedManyWithoutAuthInput
  }

  export type AuthUpdateInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: TokenUpdateManyWithoutAuthNestedInput
    logs?: AuthLogUpdateManyWithoutAuthNestedInput
    notification?: NotificationUpdateManyWithoutAuthNestedInput
    role?: RoleUpdateOneRequiredWithoutAuthsNestedInput
    employee?: EmployeeUpdateOneWithoutAuthNestedInput
  }

  export type AuthUncheckedUpdateInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: TokenUncheckedUpdateManyWithoutAuthNestedInput
    logs?: AuthLogUncheckedUpdateManyWithoutAuthNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutAuthNestedInput
  }

  export type AuthCreateManyInput = {
    authId?: string
    email: string
    password: string
    roleId: string
    employeeId?: string | null
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type AuthUpdateManyMutationInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthUncheckedUpdateManyInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeCreateInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    auth?: AuthCreateNestedOneWithoutEmployeeInput
    customer?: CustomerCreateNestedManyWithoutEmployeeInput
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    info?: EmployeeinfoCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    positionId: string
    departmentId: string
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    auth?: AuthUncheckedCreateNestedOneWithoutEmployeeInput
    customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    info?: EmployeeinfoUncheckedCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    info?: EmployeeinfoUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUncheckedUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    info?: EmployeeinfoUncheckedUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    positionId: string
    departmentId: string
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    eventId?: string
    eventName: string
    memo?: string | null
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutEventInput
    attendance?: AttendanceCreateNestedManyWithoutEventInput
    qrCode?: QRCodeCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    eventId?: string
    eventName: string
    memo?: string | null
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutEventInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutEventInput
    qrCode?: QRCodeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutEventNestedInput
    attendance?: AttendanceUpdateManyWithoutEventNestedInput
    qrCode?: QRCodeUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutEventNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutEventNestedInput
    qrCode?: QRCodeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    eventId?: string
    eventName: string
    memo?: string | null
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRCodeCreateInput = {
    qrId?: string
    token: string
    eventName: string
    qrCode: string
    expiresAt: Date | string
    oneTimeUse?: boolean
    isActive?: boolean
    scans?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutQrCodeInput
  }

  export type QRCodeUncheckedCreateInput = {
    qrId?: string
    token: string
    eventId: string
    eventName: string
    qrCode: string
    expiresAt: Date | string
    oneTimeUse?: boolean
    isActive?: boolean
    scans?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QRCodeUpdateInput = {
    qrId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oneTimeUse?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    scans?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutQrCodeNestedInput
  }

  export type QRCodeUncheckedUpdateInput = {
    qrId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oneTimeUse?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    scans?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRCodeCreateManyInput = {
    qrId?: string
    token: string
    eventId: string
    eventName: string
    qrCode: string
    expiresAt: Date | string
    oneTimeUse?: boolean
    isActive?: boolean
    scans?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QRCodeUpdateManyMutationInput = {
    qrId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oneTimeUse?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    scans?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRCodeUncheckedUpdateManyInput = {
    qrId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oneTimeUse?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    scans?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestCreateInput = {
    leaveId?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedBy?: EmployeeCreateNestedOneWithoutApprovedLeavesInput
    employee: EmployeeCreateNestedOneWithoutLeaveRequestsInput
  }

  export type LeaveRequestUncheckedCreateInput = {
    leaveId?: string
    employeeId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestUpdateInput = {
    leaveId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedBy?: EmployeeUpdateOneWithoutApprovedLeavesNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutLeaveRequestsNestedInput
  }

  export type LeaveRequestUncheckedUpdateInput = {
    leaveId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestCreateManyInput = {
    leaveId?: string
    employeeId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestUpdateManyMutationInput = {
    leaveId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUncheckedUpdateManyInput = {
    leaveId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    roleId?: string
    roleName: string
    auths?: AuthCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    roleId?: string
    roleName: string
    auths?: AuthUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    auths?: AuthUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    auths?: AuthUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    roleId?: string
    roleName: string
  }

  export type RoleUpdateManyMutationInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentCreateInput = {
    departmentId?: string
    departmentName: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    departmentId?: string
    departmentName: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    departmentId?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    departmentId?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    departmentId?: string
    departmentName: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    departmentId?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    departmentId?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionCreateInput = {
    positionId?: string
    positionName: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateInput = {
    positionId?: string
    positionName: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionUpdateInput = {
    positionId?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    positionId?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionCreateManyInput = {
    positionId?: string
    positionName: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PositionUpdateManyMutationInput = {
    positionId?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUncheckedUpdateManyInput = {
    positionId?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    addressId?: string
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    employee?: EmployeeCreateNestedOneWithoutAddressInput
    event?: EventCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    addressId?: string
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    employeeId?: string | null
    eventId?: string | null
  }

  export type AddressUpdateInput = {
    addressId?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneWithoutAddressNestedInput
    event?: EventUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    addressId?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateManyInput = {
    addressId?: string
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    employeeId?: string | null
    eventId?: string | null
  }

  export type AddressUpdateManyMutationInput = {
    addressId?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    addressId?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenCreateInput = {
    tokenId?: string
    auth: AuthCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    tokenId?: string
    authId: string
  }

  export type TokenUpdateInput = {
    tokenId?: StringFieldUpdateOperationsInput | string
    auth?: AuthUpdateOneRequiredWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    tokenId?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenCreateManyInput = {
    tokenId?: string
    authId: string
  }

  export type TokenUpdateManyMutationInput = {
    tokenId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenUncheckedUpdateManyInput = {
    tokenId?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthLogCreateInput = {
    logId?: string
    auth: AuthCreateNestedOneWithoutLogsInput
  }

  export type AuthLogUncheckedCreateInput = {
    logId?: string
    authId: string
  }

  export type AuthLogUpdateInput = {
    logId?: StringFieldUpdateOperationsInput | string
    auth?: AuthUpdateOneRequiredWithoutLogsNestedInput
  }

  export type AuthLogUncheckedUpdateInput = {
    logId?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthLogCreateManyInput = {
    logId?: string
    authId: string
  }

  export type AuthLogUpdateManyMutationInput = {
    logId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthLogUncheckedUpdateManyInput = {
    logId?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    notificationId?: string
    auth: AuthCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    notificationId?: string
    authId: string
  }

  export type NotificationUpdateInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    auth?: AuthUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateManyInput = {
    notificationId?: string
    authId: string
  }

  export type NotificationUpdateManyMutationInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    customerId?: string
    employee: EmployeeCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    customerId?: string
    employeeId: string
  }

  export type CustomerUpdateInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateManyInput = {
    customerId?: string
    employeeId: string
  }

  export type CustomerUpdateManyMutationInput = {
    customerId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeinfoCreateInput = {
    infoId?: string
    employee: EmployeeCreateNestedOneWithoutInfoInput
  }

  export type EmployeeinfoUncheckedCreateInput = {
    infoId?: string
    employeeId: string
  }

  export type EmployeeinfoUpdateInput = {
    infoId?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneRequiredWithoutInfoNestedInput
  }

  export type EmployeeinfoUncheckedUpdateInput = {
    infoId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeinfoCreateManyInput = {
    infoId?: string
    employeeId: string
  }

  export type EmployeeinfoUpdateManyMutationInput = {
    infoId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeinfoUncheckedUpdateManyInput = {
    infoId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type EnumScanMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ScanMethod | EnumScanMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.ScanMethod[] | ListEnumScanMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ScanMethod[] | ListEnumScanMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumScanMethodNullableFilter<$PrismaModel> | $Enums.ScanMethod | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttendanceCountOrderByAggregateInput = {
    attendanceId?: SortOrder
    employeeId?: SortOrder
    eventId?: SortOrder
    datetime?: SortOrder
    method?: SortOrder
    status?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    attendanceId?: SortOrder
    employeeId?: SortOrder
    eventId?: SortOrder
    datetime?: SortOrder
    method?: SortOrder
    status?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    attendanceId?: SortOrder
    employeeId?: SortOrder
    eventId?: SortOrder
    datetime?: SortOrder
    method?: SortOrder
    status?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type EnumScanMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScanMethod | EnumScanMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.ScanMethod[] | ListEnumScanMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ScanMethod[] | ListEnumScanMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumScanMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.ScanMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumScanMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumScanMethodNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type AuthLogListRelationFilter = {
    every?: AuthLogWhereInput
    some?: AuthLogWhereInput
    none?: AuthLogWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthCountOrderByAggregateInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type AuthMaxOrderByAggregateInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
  }

  export type AuthMinOrderByAggregateInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    employeeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLoginAt?: SortOrder
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type AuthNullableScalarRelationFilter = {
    is?: AuthWhereInput | null
    isNot?: AuthWhereInput | null
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type PositionScalarRelationFilter = {
    is?: PositionWhereInput
    isNot?: PositionWhereInput
  }

  export type EmployeeinfoNullableScalarRelationFilter = {
    is?: EmployeeinfoWhereInput | null
    isNot?: EmployeeinfoWhereInput | null
  }

  export type LeaveRequestListRelationFilter = {
    every?: LeaveRequestWhereInput
    some?: LeaveRequestWhereInput
    none?: LeaveRequestWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaveRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    employeeId?: SortOrder
    employeeCode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    phone?: SortOrder
    positionId?: SortOrder
    departmentId?: SortOrder
    salary?: SortOrder
    hiredDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    employeeId?: SortOrder
    employeeCode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    phone?: SortOrder
    positionId?: SortOrder
    departmentId?: SortOrder
    salary?: SortOrder
    hiredDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    employeeId?: SortOrder
    employeeCode?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    phone?: SortOrder
    positionId?: SortOrder
    departmentId?: SortOrder
    salary?: SortOrder
    hiredDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type QRCodeListRelationFilter = {
    every?: QRCodeWhereInput
    some?: QRCodeWhereInput
    none?: QRCodeWhereInput
  }

  export type QRCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    eventId?: SortOrder
    eventName?: SortOrder
    memo?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    eventId?: SortOrder
    eventName?: SortOrder
    memo?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    eventId?: SortOrder
    eventName?: SortOrder
    memo?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type QRCodeCountOrderByAggregateInput = {
    qrId?: SortOrder
    token?: SortOrder
    eventId?: SortOrder
    eventName?: SortOrder
    qrCode?: SortOrder
    expiresAt?: SortOrder
    oneTimeUse?: SortOrder
    isActive?: SortOrder
    scans?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QRCodeAvgOrderByAggregateInput = {
    scans?: SortOrder
  }

  export type QRCodeMaxOrderByAggregateInput = {
    qrId?: SortOrder
    token?: SortOrder
    eventId?: SortOrder
    eventName?: SortOrder
    qrCode?: SortOrder
    expiresAt?: SortOrder
    oneTimeUse?: SortOrder
    isActive?: SortOrder
    scans?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QRCodeMinOrderByAggregateInput = {
    qrId?: SortOrder
    token?: SortOrder
    eventId?: SortOrder
    eventName?: SortOrder
    qrCode?: SortOrder
    expiresAt?: SortOrder
    oneTimeUse?: SortOrder
    isActive?: SortOrder
    scans?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QRCodeSumOrderByAggregateInput = {
    scans?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type EnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type LeaveRequestCountOrderByAggregateInput = {
    leaveId?: SortOrder
    employeeId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveRequestMaxOrderByAggregateInput = {
    leaveId?: SortOrder
    employeeId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveRequestMinOrderByAggregateInput = {
    leaveId?: SortOrder
    employeeId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type EnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type AuthListRelationFilter = {
    every?: AuthWhereInput
    some?: AuthWhereInput
    none?: AuthWhereInput
  }

  export type AuthOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PositionCountOrderByAggregateInput = {
    positionId?: SortOrder
    positionName?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    positionId?: SortOrder
    positionName?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    positionId?: SortOrder
    positionName?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type AddressCountOrderByAggregateInput = {
    addressId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    employeeId?: SortOrder
    eventId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    addressId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    employeeId?: SortOrder
    eventId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    addressId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    employeeId?: SortOrder
    eventId?: SortOrder
  }

  export type AuthScalarRelationFilter = {
    is?: AuthWhereInput
    isNot?: AuthWhereInput
  }

  export type TokenCountOrderByAggregateInput = {
    tokenId?: SortOrder
    authId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    tokenId?: SortOrder
    authId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    tokenId?: SortOrder
    authId?: SortOrder
  }

  export type AuthLogCountOrderByAggregateInput = {
    logId?: SortOrder
    authId?: SortOrder
  }

  export type AuthLogMaxOrderByAggregateInput = {
    logId?: SortOrder
    authId?: SortOrder
  }

  export type AuthLogMinOrderByAggregateInput = {
    logId?: SortOrder
    authId?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    notificationId?: SortOrder
    authId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    notificationId?: SortOrder
    authId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    notificationId?: SortOrder
    authId?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    customerId?: SortOrder
    employeeId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    customerId?: SortOrder
    employeeId?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    customerId?: SortOrder
    employeeId?: SortOrder
  }

  export type EmployeeinfoCountOrderByAggregateInput = {
    infoId?: SortOrder
    employeeId?: SortOrder
  }

  export type EmployeeinfoMaxOrderByAggregateInput = {
    infoId?: SortOrder
    employeeId?: SortOrder
  }

  export type EmployeeinfoMinOrderByAggregateInput = {
    infoId?: SortOrder
    employeeId?: SortOrder
  }

  export type EmployeeCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<EmployeeCreateWithoutAttendancesInput, EmployeeUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAttendancesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<EventCreateWithoutAttendanceInput, EventUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendanceInput
    connect?: EventWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumScanMethodFieldUpdateOperationsInput = {
    set?: $Enums.ScanMethod | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EmployeeUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<EmployeeCreateWithoutAttendancesInput, EmployeeUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAttendancesInput
    upsert?: EmployeeUpsertWithoutAttendancesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAttendancesInput, EmployeeUpdateWithoutAttendancesInput>, EmployeeUncheckedUpdateWithoutAttendancesInput>
  }

  export type EventUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<EventCreateWithoutAttendanceInput, EventUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendanceInput
    upsert?: EventUpsertWithoutAttendanceInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutAttendanceInput, EventUpdateWithoutAttendanceInput>, EventUncheckedUpdateWithoutAttendanceInput>
  }

  export type TokenCreateNestedManyWithoutAuthInput = {
    create?: XOR<TokenCreateWithoutAuthInput, TokenUncheckedCreateWithoutAuthInput> | TokenCreateWithoutAuthInput[] | TokenUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutAuthInput | TokenCreateOrConnectWithoutAuthInput[]
    createMany?: TokenCreateManyAuthInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type AuthLogCreateNestedManyWithoutAuthInput = {
    create?: XOR<AuthLogCreateWithoutAuthInput, AuthLogUncheckedCreateWithoutAuthInput> | AuthLogCreateWithoutAuthInput[] | AuthLogUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: AuthLogCreateOrConnectWithoutAuthInput | AuthLogCreateOrConnectWithoutAuthInput[]
    createMany?: AuthLogCreateManyAuthInputEnvelope
    connect?: AuthLogWhereUniqueInput | AuthLogWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutAuthInput = {
    create?: XOR<NotificationCreateWithoutAuthInput, NotificationUncheckedCreateWithoutAuthInput> | NotificationCreateWithoutAuthInput[] | NotificationUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAuthInput | NotificationCreateOrConnectWithoutAuthInput[]
    createMany?: NotificationCreateManyAuthInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type RoleCreateNestedOneWithoutAuthsInput = {
    create?: XOR<RoleCreateWithoutAuthsInput, RoleUncheckedCreateWithoutAuthsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutAuthsInput
    connect?: RoleWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutAuthInput = {
    create?: XOR<EmployeeCreateWithoutAuthInput, EmployeeUncheckedCreateWithoutAuthInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthInput
    connect?: EmployeeWhereUniqueInput
  }

  export type TokenUncheckedCreateNestedManyWithoutAuthInput = {
    create?: XOR<TokenCreateWithoutAuthInput, TokenUncheckedCreateWithoutAuthInput> | TokenCreateWithoutAuthInput[] | TokenUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutAuthInput | TokenCreateOrConnectWithoutAuthInput[]
    createMany?: TokenCreateManyAuthInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type AuthLogUncheckedCreateNestedManyWithoutAuthInput = {
    create?: XOR<AuthLogCreateWithoutAuthInput, AuthLogUncheckedCreateWithoutAuthInput> | AuthLogCreateWithoutAuthInput[] | AuthLogUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: AuthLogCreateOrConnectWithoutAuthInput | AuthLogCreateOrConnectWithoutAuthInput[]
    createMany?: AuthLogCreateManyAuthInputEnvelope
    connect?: AuthLogWhereUniqueInput | AuthLogWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutAuthInput = {
    create?: XOR<NotificationCreateWithoutAuthInput, NotificationUncheckedCreateWithoutAuthInput> | NotificationCreateWithoutAuthInput[] | NotificationUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAuthInput | NotificationCreateOrConnectWithoutAuthInput[]
    createMany?: NotificationCreateManyAuthInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccountStatus
  }

  export type TokenUpdateManyWithoutAuthNestedInput = {
    create?: XOR<TokenCreateWithoutAuthInput, TokenUncheckedCreateWithoutAuthInput> | TokenCreateWithoutAuthInput[] | TokenUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutAuthInput | TokenCreateOrConnectWithoutAuthInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutAuthInput | TokenUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: TokenCreateManyAuthInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutAuthInput | TokenUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutAuthInput | TokenUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type AuthLogUpdateManyWithoutAuthNestedInput = {
    create?: XOR<AuthLogCreateWithoutAuthInput, AuthLogUncheckedCreateWithoutAuthInput> | AuthLogCreateWithoutAuthInput[] | AuthLogUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: AuthLogCreateOrConnectWithoutAuthInput | AuthLogCreateOrConnectWithoutAuthInput[]
    upsert?: AuthLogUpsertWithWhereUniqueWithoutAuthInput | AuthLogUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: AuthLogCreateManyAuthInputEnvelope
    set?: AuthLogWhereUniqueInput | AuthLogWhereUniqueInput[]
    disconnect?: AuthLogWhereUniqueInput | AuthLogWhereUniqueInput[]
    delete?: AuthLogWhereUniqueInput | AuthLogWhereUniqueInput[]
    connect?: AuthLogWhereUniqueInput | AuthLogWhereUniqueInput[]
    update?: AuthLogUpdateWithWhereUniqueWithoutAuthInput | AuthLogUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: AuthLogUpdateManyWithWhereWithoutAuthInput | AuthLogUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: AuthLogScalarWhereInput | AuthLogScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutAuthNestedInput = {
    create?: XOR<NotificationCreateWithoutAuthInput, NotificationUncheckedCreateWithoutAuthInput> | NotificationCreateWithoutAuthInput[] | NotificationUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAuthInput | NotificationCreateOrConnectWithoutAuthInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAuthInput | NotificationUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: NotificationCreateManyAuthInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAuthInput | NotificationUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAuthInput | NotificationUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type RoleUpdateOneRequiredWithoutAuthsNestedInput = {
    create?: XOR<RoleCreateWithoutAuthsInput, RoleUncheckedCreateWithoutAuthsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutAuthsInput
    upsert?: RoleUpsertWithoutAuthsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutAuthsInput, RoleUpdateWithoutAuthsInput>, RoleUncheckedUpdateWithoutAuthsInput>
  }

  export type EmployeeUpdateOneWithoutAuthNestedInput = {
    create?: XOR<EmployeeCreateWithoutAuthInput, EmployeeUncheckedCreateWithoutAuthInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAuthInput
    upsert?: EmployeeUpsertWithoutAuthInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAuthInput, EmployeeUpdateWithoutAuthInput>, EmployeeUncheckedUpdateWithoutAuthInput>
  }

  export type TokenUncheckedUpdateManyWithoutAuthNestedInput = {
    create?: XOR<TokenCreateWithoutAuthInput, TokenUncheckedCreateWithoutAuthInput> | TokenCreateWithoutAuthInput[] | TokenUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutAuthInput | TokenCreateOrConnectWithoutAuthInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutAuthInput | TokenUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: TokenCreateManyAuthInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutAuthInput | TokenUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutAuthInput | TokenUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type AuthLogUncheckedUpdateManyWithoutAuthNestedInput = {
    create?: XOR<AuthLogCreateWithoutAuthInput, AuthLogUncheckedCreateWithoutAuthInput> | AuthLogCreateWithoutAuthInput[] | AuthLogUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: AuthLogCreateOrConnectWithoutAuthInput | AuthLogCreateOrConnectWithoutAuthInput[]
    upsert?: AuthLogUpsertWithWhereUniqueWithoutAuthInput | AuthLogUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: AuthLogCreateManyAuthInputEnvelope
    set?: AuthLogWhereUniqueInput | AuthLogWhereUniqueInput[]
    disconnect?: AuthLogWhereUniqueInput | AuthLogWhereUniqueInput[]
    delete?: AuthLogWhereUniqueInput | AuthLogWhereUniqueInput[]
    connect?: AuthLogWhereUniqueInput | AuthLogWhereUniqueInput[]
    update?: AuthLogUpdateWithWhereUniqueWithoutAuthInput | AuthLogUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: AuthLogUpdateManyWithWhereWithoutAuthInput | AuthLogUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: AuthLogScalarWhereInput | AuthLogScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutAuthNestedInput = {
    create?: XOR<NotificationCreateWithoutAuthInput, NotificationUncheckedCreateWithoutAuthInput> | NotificationCreateWithoutAuthInput[] | NotificationUncheckedCreateWithoutAuthInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAuthInput | NotificationCreateOrConnectWithoutAuthInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAuthInput | NotificationUpsertWithWhereUniqueWithoutAuthInput[]
    createMany?: NotificationCreateManyAuthInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAuthInput | NotificationUpdateWithWhereUniqueWithoutAuthInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAuthInput | NotificationUpdateManyWithWhereWithoutAuthInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEmployeeInput
    connect?: AddressWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AuthCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<AuthCreateWithoutEmployeeInput, AuthUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AuthCreateOrConnectWithoutEmployeeInput
    connect?: AuthWhereUniqueInput
  }

  export type CustomerCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type DepartmentCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type PositionCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<PositionCreateWithoutEmployeesInput, PositionUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: PositionCreateOrConnectWithoutEmployeesInput
    connect?: PositionWhereUniqueInput
  }

  export type EmployeeinfoCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<EmployeeinfoCreateWithoutEmployeeInput, EmployeeinfoUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: EmployeeinfoCreateOrConnectWithoutEmployeeInput
    connect?: EmployeeinfoWhereUniqueInput
  }

  export type LeaveRequestCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<LeaveRequestCreateWithoutApprovedByInput, LeaveRequestUncheckedCreateWithoutApprovedByInput> | LeaveRequestCreateWithoutApprovedByInput[] | LeaveRequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutApprovedByInput | LeaveRequestCreateOrConnectWithoutApprovedByInput[]
    createMany?: LeaveRequestCreateManyApprovedByInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type LeaveRequestCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput> | LeaveRequestCreateWithoutEmployeeInput[] | LeaveRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutEmployeeInput | LeaveRequestCreateOrConnectWithoutEmployeeInput[]
    createMany?: LeaveRequestCreateManyEmployeeInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEmployeeInput
    connect?: AddressWhereUniqueInput
  }

  export type AttendanceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AuthUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<AuthCreateWithoutEmployeeInput, AuthUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AuthCreateOrConnectWithoutEmployeeInput
    connect?: AuthWhereUniqueInput
  }

  export type CustomerUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type EmployeeinfoUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<EmployeeinfoCreateWithoutEmployeeInput, EmployeeinfoUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: EmployeeinfoCreateOrConnectWithoutEmployeeInput
    connect?: EmployeeinfoWhereUniqueInput
  }

  export type LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<LeaveRequestCreateWithoutApprovedByInput, LeaveRequestUncheckedCreateWithoutApprovedByInput> | LeaveRequestCreateWithoutApprovedByInput[] | LeaveRequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutApprovedByInput | LeaveRequestCreateOrConnectWithoutApprovedByInput[]
    createMany?: LeaveRequestCreateManyApprovedByInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput> | LeaveRequestCreateWithoutEmployeeInput[] | LeaveRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutEmployeeInput | LeaveRequestCreateOrConnectWithoutEmployeeInput[]
    createMany?: LeaveRequestCreateManyEmployeeInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AddressUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEmployeeInput
    upsert?: AddressUpsertWithoutEmployeeInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutEmployeeInput, AddressUpdateWithoutEmployeeInput>, AddressUncheckedUpdateWithoutEmployeeInput>
  }

  export type AttendanceUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutEmployeeInput | AttendanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutEmployeeInput | AttendanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutEmployeeInput | AttendanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AuthUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<AuthCreateWithoutEmployeeInput, AuthUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AuthCreateOrConnectWithoutEmployeeInput
    upsert?: AuthUpsertWithoutEmployeeInput
    disconnect?: AuthWhereInput | boolean
    delete?: AuthWhereInput | boolean
    connect?: AuthWhereUniqueInput
    update?: XOR<XOR<AuthUpdateToOneWithWhereWithoutEmployeeInput, AuthUpdateWithoutEmployeeInput>, AuthUncheckedUpdateWithoutEmployeeInput>
  }

  export type CustomerUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutEmployeeInput | CustomerUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutEmployeeInput | CustomerUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutEmployeeInput | CustomerUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type DepartmentUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeesInput
    upsert?: DepartmentUpsertWithoutEmployeesInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutEmployeesInput, DepartmentUpdateWithoutEmployeesInput>, DepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type PositionUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<PositionCreateWithoutEmployeesInput, PositionUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: PositionCreateOrConnectWithoutEmployeesInput
    upsert?: PositionUpsertWithoutEmployeesInput
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutEmployeesInput, PositionUpdateWithoutEmployeesInput>, PositionUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeinfoUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeinfoCreateWithoutEmployeeInput, EmployeeinfoUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: EmployeeinfoCreateOrConnectWithoutEmployeeInput
    upsert?: EmployeeinfoUpsertWithoutEmployeeInput
    disconnect?: EmployeeinfoWhereInput | boolean
    delete?: EmployeeinfoWhereInput | boolean
    connect?: EmployeeinfoWhereUniqueInput
    update?: XOR<XOR<EmployeeinfoUpdateToOneWithWhereWithoutEmployeeInput, EmployeeinfoUpdateWithoutEmployeeInput>, EmployeeinfoUncheckedUpdateWithoutEmployeeInput>
  }

  export type LeaveRequestUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutApprovedByInput, LeaveRequestUncheckedCreateWithoutApprovedByInput> | LeaveRequestCreateWithoutApprovedByInput[] | LeaveRequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutApprovedByInput | LeaveRequestCreateOrConnectWithoutApprovedByInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput | LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: LeaveRequestCreateManyApprovedByInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput | LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutApprovedByInput | LeaveRequestUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type LeaveRequestUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput> | LeaveRequestCreateWithoutEmployeeInput[] | LeaveRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutEmployeeInput | LeaveRequestCreateOrConnectWithoutEmployeeInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput | LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LeaveRequestCreateManyEmployeeInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput | LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutEmployeeInput | LeaveRequestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type AddressUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEmployeeInput
    upsert?: AddressUpsertWithoutEmployeeInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutEmployeeInput, AddressUpdateWithoutEmployeeInput>, AddressUncheckedUpdateWithoutEmployeeInput>
  }

  export type AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput> | AttendanceCreateWithoutEmployeeInput[] | AttendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEmployeeInput | AttendanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutEmployeeInput | AttendanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AttendanceCreateManyEmployeeInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutEmployeeInput | AttendanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutEmployeeInput | AttendanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AuthUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<AuthCreateWithoutEmployeeInput, AuthUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AuthCreateOrConnectWithoutEmployeeInput
    upsert?: AuthUpsertWithoutEmployeeInput
    disconnect?: AuthWhereInput | boolean
    delete?: AuthWhereInput | boolean
    connect?: AuthWhereUniqueInput
    update?: XOR<XOR<AuthUpdateToOneWithWhereWithoutEmployeeInput, AuthUpdateWithoutEmployeeInput>, AuthUncheckedUpdateWithoutEmployeeInput>
  }

  export type CustomerUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutEmployeeInput | CustomerUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutEmployeeInput | CustomerUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutEmployeeInput | CustomerUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type EmployeeinfoUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeinfoCreateWithoutEmployeeInput, EmployeeinfoUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: EmployeeinfoCreateOrConnectWithoutEmployeeInput
    upsert?: EmployeeinfoUpsertWithoutEmployeeInput
    disconnect?: EmployeeinfoWhereInput | boolean
    delete?: EmployeeinfoWhereInput | boolean
    connect?: EmployeeinfoWhereUniqueInput
    update?: XOR<XOR<EmployeeinfoUpdateToOneWithWhereWithoutEmployeeInput, EmployeeinfoUpdateWithoutEmployeeInput>, EmployeeinfoUncheckedUpdateWithoutEmployeeInput>
  }

  export type LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutApprovedByInput, LeaveRequestUncheckedCreateWithoutApprovedByInput> | LeaveRequestCreateWithoutApprovedByInput[] | LeaveRequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutApprovedByInput | LeaveRequestCreateOrConnectWithoutApprovedByInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput | LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: LeaveRequestCreateManyApprovedByInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput | LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutApprovedByInput | LeaveRequestUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput> | LeaveRequestCreateWithoutEmployeeInput[] | LeaveRequestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutEmployeeInput | LeaveRequestCreateOrConnectWithoutEmployeeInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput | LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LeaveRequestCreateManyEmployeeInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput | LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutEmployeeInput | LeaveRequestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutEventInput = {
    create?: XOR<AddressCreateWithoutEventInput, AddressUncheckedCreateWithoutEventInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEventInput
    connect?: AddressWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutEventInput = {
    create?: XOR<AttendanceCreateWithoutEventInput, AttendanceUncheckedCreateWithoutEventInput> | AttendanceCreateWithoutEventInput[] | AttendanceUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEventInput | AttendanceCreateOrConnectWithoutEventInput[]
    createMany?: AttendanceCreateManyEventInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type QRCodeCreateNestedManyWithoutEventInput = {
    create?: XOR<QRCodeCreateWithoutEventInput, QRCodeUncheckedCreateWithoutEventInput> | QRCodeCreateWithoutEventInput[] | QRCodeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutEventInput | QRCodeCreateOrConnectWithoutEventInput[]
    createMany?: QRCodeCreateManyEventInputEnvelope
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<AddressCreateWithoutEventInput, AddressUncheckedCreateWithoutEventInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEventInput
    connect?: AddressWhereUniqueInput
  }

  export type AttendanceUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<AttendanceCreateWithoutEventInput, AttendanceUncheckedCreateWithoutEventInput> | AttendanceCreateWithoutEventInput[] | AttendanceUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEventInput | AttendanceCreateOrConnectWithoutEventInput[]
    createMany?: AttendanceCreateManyEventInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type QRCodeUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<QRCodeCreateWithoutEventInput, QRCodeUncheckedCreateWithoutEventInput> | QRCodeCreateWithoutEventInput[] | QRCodeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutEventInput | QRCodeCreateOrConnectWithoutEventInput[]
    createMany?: QRCodeCreateManyEventInputEnvelope
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
  }

  export type AddressUpdateOneWithoutEventNestedInput = {
    create?: XOR<AddressCreateWithoutEventInput, AddressUncheckedCreateWithoutEventInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEventInput
    upsert?: AddressUpsertWithoutEventInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutEventInput, AddressUpdateWithoutEventInput>, AddressUncheckedUpdateWithoutEventInput>
  }

  export type AttendanceUpdateManyWithoutEventNestedInput = {
    create?: XOR<AttendanceCreateWithoutEventInput, AttendanceUncheckedCreateWithoutEventInput> | AttendanceCreateWithoutEventInput[] | AttendanceUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEventInput | AttendanceCreateOrConnectWithoutEventInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutEventInput | AttendanceUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: AttendanceCreateManyEventInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutEventInput | AttendanceUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutEventInput | AttendanceUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type QRCodeUpdateManyWithoutEventNestedInput = {
    create?: XOR<QRCodeCreateWithoutEventInput, QRCodeUncheckedCreateWithoutEventInput> | QRCodeCreateWithoutEventInput[] | QRCodeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutEventInput | QRCodeCreateOrConnectWithoutEventInput[]
    upsert?: QRCodeUpsertWithWhereUniqueWithoutEventInput | QRCodeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: QRCodeCreateManyEventInputEnvelope
    set?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    disconnect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    delete?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    update?: QRCodeUpdateWithWhereUniqueWithoutEventInput | QRCodeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: QRCodeUpdateManyWithWhereWithoutEventInput | QRCodeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
  }

  export type AddressUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<AddressCreateWithoutEventInput, AddressUncheckedCreateWithoutEventInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEventInput
    upsert?: AddressUpsertWithoutEventInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutEventInput, AddressUpdateWithoutEventInput>, AddressUncheckedUpdateWithoutEventInput>
  }

  export type AttendanceUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<AttendanceCreateWithoutEventInput, AttendanceUncheckedCreateWithoutEventInput> | AttendanceCreateWithoutEventInput[] | AttendanceUncheckedCreateWithoutEventInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutEventInput | AttendanceCreateOrConnectWithoutEventInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutEventInput | AttendanceUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: AttendanceCreateManyEventInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutEventInput | AttendanceUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutEventInput | AttendanceUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type QRCodeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<QRCodeCreateWithoutEventInput, QRCodeUncheckedCreateWithoutEventInput> | QRCodeCreateWithoutEventInput[] | QRCodeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: QRCodeCreateOrConnectWithoutEventInput | QRCodeCreateOrConnectWithoutEventInput[]
    upsert?: QRCodeUpsertWithWhereUniqueWithoutEventInput | QRCodeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: QRCodeCreateManyEventInputEnvelope
    set?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    disconnect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    delete?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    connect?: QRCodeWhereUniqueInput | QRCodeWhereUniqueInput[]
    update?: QRCodeUpdateWithWhereUniqueWithoutEventInput | QRCodeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: QRCodeUpdateManyWithWhereWithoutEventInput | QRCodeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutQrCodeInput = {
    create?: XOR<EventCreateWithoutQrCodeInput, EventUncheckedCreateWithoutQrCodeInput>
    connectOrCreate?: EventCreateOrConnectWithoutQrCodeInput
    connect?: EventWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateOneRequiredWithoutQrCodeNestedInput = {
    create?: XOR<EventCreateWithoutQrCodeInput, EventUncheckedCreateWithoutQrCodeInput>
    connectOrCreate?: EventCreateOrConnectWithoutQrCodeInput
    upsert?: EventUpsertWithoutQrCodeInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutQrCodeInput, EventUpdateWithoutQrCodeInput>, EventUncheckedUpdateWithoutQrCodeInput>
  }

  export type EmployeeCreateNestedOneWithoutApprovedLeavesInput = {
    create?: XOR<EmployeeCreateWithoutApprovedLeavesInput, EmployeeUncheckedCreateWithoutApprovedLeavesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutApprovedLeavesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutLeaveRequestsInput = {
    create?: XOR<EmployeeCreateWithoutLeaveRequestsInput, EmployeeUncheckedCreateWithoutLeaveRequestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLeaveRequestsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumLeaveTypeFieldUpdateOperationsInput = {
    set?: $Enums.LeaveType
  }

  export type EnumLeaveStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeaveStatus
  }

  export type EmployeeUpdateOneWithoutApprovedLeavesNestedInput = {
    create?: XOR<EmployeeCreateWithoutApprovedLeavesInput, EmployeeUncheckedCreateWithoutApprovedLeavesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutApprovedLeavesInput
    upsert?: EmployeeUpsertWithoutApprovedLeavesInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutApprovedLeavesInput, EmployeeUpdateWithoutApprovedLeavesInput>, EmployeeUncheckedUpdateWithoutApprovedLeavesInput>
  }

  export type EmployeeUpdateOneRequiredWithoutLeaveRequestsNestedInput = {
    create?: XOR<EmployeeCreateWithoutLeaveRequestsInput, EmployeeUncheckedCreateWithoutLeaveRequestsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLeaveRequestsInput
    upsert?: EmployeeUpsertWithoutLeaveRequestsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutLeaveRequestsInput, EmployeeUpdateWithoutLeaveRequestsInput>, EmployeeUncheckedUpdateWithoutLeaveRequestsInput>
  }

  export type AuthCreateNestedManyWithoutRoleInput = {
    create?: XOR<AuthCreateWithoutRoleInput, AuthUncheckedCreateWithoutRoleInput> | AuthCreateWithoutRoleInput[] | AuthUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AuthCreateOrConnectWithoutRoleInput | AuthCreateOrConnectWithoutRoleInput[]
    createMany?: AuthCreateManyRoleInputEnvelope
    connect?: AuthWhereUniqueInput | AuthWhereUniqueInput[]
  }

  export type AuthUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<AuthCreateWithoutRoleInput, AuthUncheckedCreateWithoutRoleInput> | AuthCreateWithoutRoleInput[] | AuthUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AuthCreateOrConnectWithoutRoleInput | AuthCreateOrConnectWithoutRoleInput[]
    createMany?: AuthCreateManyRoleInputEnvelope
    connect?: AuthWhereUniqueInput | AuthWhereUniqueInput[]
  }

  export type AuthUpdateManyWithoutRoleNestedInput = {
    create?: XOR<AuthCreateWithoutRoleInput, AuthUncheckedCreateWithoutRoleInput> | AuthCreateWithoutRoleInput[] | AuthUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AuthCreateOrConnectWithoutRoleInput | AuthCreateOrConnectWithoutRoleInput[]
    upsert?: AuthUpsertWithWhereUniqueWithoutRoleInput | AuthUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: AuthCreateManyRoleInputEnvelope
    set?: AuthWhereUniqueInput | AuthWhereUniqueInput[]
    disconnect?: AuthWhereUniqueInput | AuthWhereUniqueInput[]
    delete?: AuthWhereUniqueInput | AuthWhereUniqueInput[]
    connect?: AuthWhereUniqueInput | AuthWhereUniqueInput[]
    update?: AuthUpdateWithWhereUniqueWithoutRoleInput | AuthUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: AuthUpdateManyWithWhereWithoutRoleInput | AuthUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: AuthScalarWhereInput | AuthScalarWhereInput[]
  }

  export type AuthUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<AuthCreateWithoutRoleInput, AuthUncheckedCreateWithoutRoleInput> | AuthCreateWithoutRoleInput[] | AuthUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: AuthCreateOrConnectWithoutRoleInput | AuthCreateOrConnectWithoutRoleInput[]
    upsert?: AuthUpsertWithWhereUniqueWithoutRoleInput | AuthUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: AuthCreateManyRoleInputEnvelope
    set?: AuthWhereUniqueInput | AuthWhereUniqueInput[]
    disconnect?: AuthWhereUniqueInput | AuthWhereUniqueInput[]
    delete?: AuthWhereUniqueInput | AuthWhereUniqueInput[]
    connect?: AuthWhereUniqueInput | AuthWhereUniqueInput[]
    update?: AuthUpdateWithWhereUniqueWithoutRoleInput | AuthUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: AuthUpdateManyWithWhereWithoutRoleInput | AuthUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: AuthScalarWhereInput | AuthScalarWhereInput[]
  }

  export type EmployeeCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeCreateNestedManyWithoutPositionInput = {
    create?: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput> | EmployeeCreateWithoutPositionInput[] | EmployeeUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPositionInput | EmployeeCreateOrConnectWithoutPositionInput[]
    createMany?: EmployeeCreateManyPositionInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput> | EmployeeCreateWithoutPositionInput[] | EmployeeUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPositionInput | EmployeeCreateOrConnectWithoutPositionInput[]
    createMany?: EmployeeCreateManyPositionInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutPositionNestedInput = {
    create?: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput> | EmployeeCreateWithoutPositionInput[] | EmployeeUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPositionInput | EmployeeCreateOrConnectWithoutPositionInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutPositionInput | EmployeeUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: EmployeeCreateManyPositionInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutPositionInput | EmployeeUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutPositionInput | EmployeeUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput> | EmployeeCreateWithoutPositionInput[] | EmployeeUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutPositionInput | EmployeeCreateOrConnectWithoutPositionInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutPositionInput | EmployeeUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: EmployeeCreateManyPositionInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutPositionInput | EmployeeUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutPositionInput | EmployeeUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutAddressInput = {
    create?: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAddressInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutAddressInput = {
    create?: XOR<EventCreateWithoutAddressInput, EventUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EventCreateOrConnectWithoutAddressInput
    connect?: EventWhereUniqueInput
  }

  export type EmployeeUpdateOneWithoutAddressNestedInput = {
    create?: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAddressInput
    upsert?: EmployeeUpsertWithoutAddressInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAddressInput, EmployeeUpdateWithoutAddressInput>, EmployeeUncheckedUpdateWithoutAddressInput>
  }

  export type EventUpdateOneWithoutAddressNestedInput = {
    create?: XOR<EventCreateWithoutAddressInput, EventUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EventCreateOrConnectWithoutAddressInput
    upsert?: EventUpsertWithoutAddressInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutAddressInput, EventUpdateWithoutAddressInput>, EventUncheckedUpdateWithoutAddressInput>
  }

  export type AuthCreateNestedOneWithoutTokenInput = {
    create?: XOR<AuthCreateWithoutTokenInput, AuthUncheckedCreateWithoutTokenInput>
    connectOrCreate?: AuthCreateOrConnectWithoutTokenInput
    connect?: AuthWhereUniqueInput
  }

  export type AuthUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<AuthCreateWithoutTokenInput, AuthUncheckedCreateWithoutTokenInput>
    connectOrCreate?: AuthCreateOrConnectWithoutTokenInput
    upsert?: AuthUpsertWithoutTokenInput
    connect?: AuthWhereUniqueInput
    update?: XOR<XOR<AuthUpdateToOneWithWhereWithoutTokenInput, AuthUpdateWithoutTokenInput>, AuthUncheckedUpdateWithoutTokenInput>
  }

  export type AuthCreateNestedOneWithoutLogsInput = {
    create?: XOR<AuthCreateWithoutLogsInput, AuthUncheckedCreateWithoutLogsInput>
    connectOrCreate?: AuthCreateOrConnectWithoutLogsInput
    connect?: AuthWhereUniqueInput
  }

  export type AuthUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<AuthCreateWithoutLogsInput, AuthUncheckedCreateWithoutLogsInput>
    connectOrCreate?: AuthCreateOrConnectWithoutLogsInput
    upsert?: AuthUpsertWithoutLogsInput
    connect?: AuthWhereUniqueInput
    update?: XOR<XOR<AuthUpdateToOneWithWhereWithoutLogsInput, AuthUpdateWithoutLogsInput>, AuthUncheckedUpdateWithoutLogsInput>
  }

  export type AuthCreateNestedOneWithoutNotificationInput = {
    create?: XOR<AuthCreateWithoutNotificationInput, AuthUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: AuthCreateOrConnectWithoutNotificationInput
    connect?: AuthWhereUniqueInput
  }

  export type AuthUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<AuthCreateWithoutNotificationInput, AuthUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: AuthCreateOrConnectWithoutNotificationInput
    upsert?: AuthUpsertWithoutNotificationInput
    connect?: AuthWhereUniqueInput
    update?: XOR<XOR<AuthUpdateToOneWithWhereWithoutNotificationInput, AuthUpdateWithoutNotificationInput>, AuthUncheckedUpdateWithoutNotificationInput>
  }

  export type EmployeeCreateNestedOneWithoutCustomerInput = {
    create?: XOR<EmployeeCreateWithoutCustomerInput, EmployeeUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutCustomerInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<EmployeeCreateWithoutCustomerInput, EmployeeUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutCustomerInput
    upsert?: EmployeeUpsertWithoutCustomerInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutCustomerInput, EmployeeUpdateWithoutCustomerInput>, EmployeeUncheckedUpdateWithoutCustomerInput>
  }

  export type EmployeeCreateNestedOneWithoutInfoInput = {
    create?: XOR<EmployeeCreateWithoutInfoInput, EmployeeUncheckedCreateWithoutInfoInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutInfoInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutInfoNestedInput = {
    create?: XOR<EmployeeCreateWithoutInfoInput, EmployeeUncheckedCreateWithoutInfoInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutInfoInput
    upsert?: EmployeeUpsertWithoutInfoInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutInfoInput, EmployeeUpdateWithoutInfoInput>, EmployeeUncheckedUpdateWithoutInfoInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumScanMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ScanMethod | EnumScanMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.ScanMethod[] | ListEnumScanMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ScanMethod[] | ListEnumScanMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumScanMethodNullableFilter<$PrismaModel> | $Enums.ScanMethod | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedEnumScanMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScanMethod | EnumScanMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.ScanMethod[] | ListEnumScanMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ScanMethod[] | ListEnumScanMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumScanMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.ScanMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumScanMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumScanMethodNullableFilter<$PrismaModel>
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type NestedEnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type EmployeeCreateWithoutAttendancesInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutEmployeeInput
    auth?: AuthCreateNestedOneWithoutEmployeeInput
    customer?: CustomerCreateNestedManyWithoutEmployeeInput
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    info?: EmployeeinfoCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutAttendancesInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    positionId: string
    departmentId: string
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutEmployeeInput
    auth?: AuthUncheckedCreateNestedOneWithoutEmployeeInput
    customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    info?: EmployeeinfoUncheckedCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutAttendancesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAttendancesInput, EmployeeUncheckedCreateWithoutAttendancesInput>
  }

  export type EventCreateWithoutAttendanceInput = {
    eventId?: string
    eventName: string
    memo?: string | null
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutEventInput
    qrCode?: QRCodeCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutAttendanceInput = {
    eventId?: string
    eventName: string
    memo?: string | null
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutEventInput
    qrCode?: QRCodeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutAttendanceInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutAttendanceInput, EventUncheckedCreateWithoutAttendanceInput>
  }

  export type EmployeeUpsertWithoutAttendancesInput = {
    update: XOR<EmployeeUpdateWithoutAttendancesInput, EmployeeUncheckedUpdateWithoutAttendancesInput>
    create: XOR<EmployeeCreateWithoutAttendancesInput, EmployeeUncheckedCreateWithoutAttendancesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAttendancesInput, EmployeeUncheckedUpdateWithoutAttendancesInput>
  }

  export type EmployeeUpdateWithoutAttendancesInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutEmployeeNestedInput
    auth?: AuthUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    info?: EmployeeinfoUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAttendancesInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutEmployeeNestedInput
    auth?: AuthUncheckedUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    info?: EmployeeinfoUncheckedUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EventUpsertWithoutAttendanceInput = {
    update: XOR<EventUpdateWithoutAttendanceInput, EventUncheckedUpdateWithoutAttendanceInput>
    create: XOR<EventCreateWithoutAttendanceInput, EventUncheckedCreateWithoutAttendanceInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutAttendanceInput, EventUncheckedUpdateWithoutAttendanceInput>
  }

  export type EventUpdateWithoutAttendanceInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutEventNestedInput
    qrCode?: QRCodeUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutAttendanceInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutEventNestedInput
    qrCode?: QRCodeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TokenCreateWithoutAuthInput = {
    tokenId?: string
  }

  export type TokenUncheckedCreateWithoutAuthInput = {
    tokenId?: string
  }

  export type TokenCreateOrConnectWithoutAuthInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutAuthInput, TokenUncheckedCreateWithoutAuthInput>
  }

  export type TokenCreateManyAuthInputEnvelope = {
    data: TokenCreateManyAuthInput | TokenCreateManyAuthInput[]
    skipDuplicates?: boolean
  }

  export type AuthLogCreateWithoutAuthInput = {
    logId?: string
  }

  export type AuthLogUncheckedCreateWithoutAuthInput = {
    logId?: string
  }

  export type AuthLogCreateOrConnectWithoutAuthInput = {
    where: AuthLogWhereUniqueInput
    create: XOR<AuthLogCreateWithoutAuthInput, AuthLogUncheckedCreateWithoutAuthInput>
  }

  export type AuthLogCreateManyAuthInputEnvelope = {
    data: AuthLogCreateManyAuthInput | AuthLogCreateManyAuthInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutAuthInput = {
    notificationId?: string
  }

  export type NotificationUncheckedCreateWithoutAuthInput = {
    notificationId?: string
  }

  export type NotificationCreateOrConnectWithoutAuthInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutAuthInput, NotificationUncheckedCreateWithoutAuthInput>
  }

  export type NotificationCreateManyAuthInputEnvelope = {
    data: NotificationCreateManyAuthInput | NotificationCreateManyAuthInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutAuthsInput = {
    roleId?: string
    roleName: string
  }

  export type RoleUncheckedCreateWithoutAuthsInput = {
    roleId?: string
    roleName: string
  }

  export type RoleCreateOrConnectWithoutAuthsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutAuthsInput, RoleUncheckedCreateWithoutAuthsInput>
  }

  export type EmployeeCreateWithoutAuthInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    customer?: CustomerCreateNestedManyWithoutEmployeeInput
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    info?: EmployeeinfoCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutAuthInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    positionId: string
    departmentId: string
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    info?: EmployeeinfoUncheckedCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutAuthInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAuthInput, EmployeeUncheckedCreateWithoutAuthInput>
  }

  export type TokenUpsertWithWhereUniqueWithoutAuthInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutAuthInput, TokenUncheckedUpdateWithoutAuthInput>
    create: XOR<TokenCreateWithoutAuthInput, TokenUncheckedCreateWithoutAuthInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutAuthInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutAuthInput, TokenUncheckedUpdateWithoutAuthInput>
  }

  export type TokenUpdateManyWithWhereWithoutAuthInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutAuthInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    tokenId?: UuidFilter<"Token"> | string
    authId?: UuidFilter<"Token"> | string
  }

  export type AuthLogUpsertWithWhereUniqueWithoutAuthInput = {
    where: AuthLogWhereUniqueInput
    update: XOR<AuthLogUpdateWithoutAuthInput, AuthLogUncheckedUpdateWithoutAuthInput>
    create: XOR<AuthLogCreateWithoutAuthInput, AuthLogUncheckedCreateWithoutAuthInput>
  }

  export type AuthLogUpdateWithWhereUniqueWithoutAuthInput = {
    where: AuthLogWhereUniqueInput
    data: XOR<AuthLogUpdateWithoutAuthInput, AuthLogUncheckedUpdateWithoutAuthInput>
  }

  export type AuthLogUpdateManyWithWhereWithoutAuthInput = {
    where: AuthLogScalarWhereInput
    data: XOR<AuthLogUpdateManyMutationInput, AuthLogUncheckedUpdateManyWithoutAuthInput>
  }

  export type AuthLogScalarWhereInput = {
    AND?: AuthLogScalarWhereInput | AuthLogScalarWhereInput[]
    OR?: AuthLogScalarWhereInput[]
    NOT?: AuthLogScalarWhereInput | AuthLogScalarWhereInput[]
    logId?: UuidFilter<"AuthLog"> | string
    authId?: UuidFilter<"AuthLog"> | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutAuthInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutAuthInput, NotificationUncheckedUpdateWithoutAuthInput>
    create: XOR<NotificationCreateWithoutAuthInput, NotificationUncheckedCreateWithoutAuthInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutAuthInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutAuthInput, NotificationUncheckedUpdateWithoutAuthInput>
  }

  export type NotificationUpdateManyWithWhereWithoutAuthInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutAuthInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    notificationId?: UuidFilter<"Notification"> | string
    authId?: UuidFilter<"Notification"> | string
  }

  export type RoleUpsertWithoutAuthsInput = {
    update: XOR<RoleUpdateWithoutAuthsInput, RoleUncheckedUpdateWithoutAuthsInput>
    create: XOR<RoleCreateWithoutAuthsInput, RoleUncheckedCreateWithoutAuthsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutAuthsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutAuthsInput, RoleUncheckedUpdateWithoutAuthsInput>
  }

  export type RoleUpdateWithoutAuthsInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutAuthsInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUpsertWithoutAuthInput = {
    update: XOR<EmployeeUpdateWithoutAuthInput, EmployeeUncheckedUpdateWithoutAuthInput>
    create: XOR<EmployeeCreateWithoutAuthInput, EmployeeUncheckedCreateWithoutAuthInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAuthInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAuthInput, EmployeeUncheckedUpdateWithoutAuthInput>
  }

  export type EmployeeUpdateWithoutAuthInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    info?: EmployeeinfoUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAuthInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    info?: EmployeeinfoUncheckedUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type AddressCreateWithoutEmployeeInput = {
    addressId?: string
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    event?: EventCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutEmployeeInput = {
    addressId?: string
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    eventId?: string | null
  }

  export type AddressCreateOrConnectWithoutEmployeeInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
  }

  export type AttendanceCreateWithoutEmployeeInput = {
    attendanceId?: string
    datetime?: Date | string
    method?: $Enums.ScanMethod | null
    status?: $Enums.Status
    checkIn?: Date | string
    checkOut?: Date | string | null
    note?: string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutEmployeeInput = {
    attendanceId?: string
    eventId: string
    datetime?: Date | string
    method?: $Enums.ScanMethod | null
    status?: $Enums.Status
    checkIn?: Date | string
    checkOut?: Date | string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutEmployeeInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput>
  }

  export type AttendanceCreateManyEmployeeInputEnvelope = {
    data: AttendanceCreateManyEmployeeInput | AttendanceCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type AuthCreateWithoutEmployeeInput = {
    authId?: string
    email: string
    password: string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    token?: TokenCreateNestedManyWithoutAuthInput
    logs?: AuthLogCreateNestedManyWithoutAuthInput
    notification?: NotificationCreateNestedManyWithoutAuthInput
    role: RoleCreateNestedOneWithoutAuthsInput
  }

  export type AuthUncheckedCreateWithoutEmployeeInput = {
    authId?: string
    email: string
    password: string
    roleId: string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    token?: TokenUncheckedCreateNestedManyWithoutAuthInput
    logs?: AuthLogUncheckedCreateNestedManyWithoutAuthInput
    notification?: NotificationUncheckedCreateNestedManyWithoutAuthInput
  }

  export type AuthCreateOrConnectWithoutEmployeeInput = {
    where: AuthWhereUniqueInput
    create: XOR<AuthCreateWithoutEmployeeInput, AuthUncheckedCreateWithoutEmployeeInput>
  }

  export type CustomerCreateWithoutEmployeeInput = {
    customerId?: string
  }

  export type CustomerUncheckedCreateWithoutEmployeeInput = {
    customerId?: string
  }

  export type CustomerCreateOrConnectWithoutEmployeeInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput>
  }

  export type CustomerCreateManyEmployeeInputEnvelope = {
    data: CustomerCreateManyEmployeeInput | CustomerCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutEmployeesInput = {
    departmentId?: string
    departmentName: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUncheckedCreateWithoutEmployeesInput = {
    departmentId?: string
    departmentName: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutEmployeesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
  }

  export type PositionCreateWithoutEmployeesInput = {
    positionId?: string
    positionName: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PositionUncheckedCreateWithoutEmployeesInput = {
    positionId?: string
    positionName: string
    description?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PositionCreateOrConnectWithoutEmployeesInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutEmployeesInput, PositionUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeinfoCreateWithoutEmployeeInput = {
    infoId?: string
  }

  export type EmployeeinfoUncheckedCreateWithoutEmployeeInput = {
    infoId?: string
  }

  export type EmployeeinfoCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeinfoWhereUniqueInput
    create: XOR<EmployeeinfoCreateWithoutEmployeeInput, EmployeeinfoUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveRequestCreateWithoutApprovedByInput = {
    leaveId?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutLeaveRequestsInput
  }

  export type LeaveRequestUncheckedCreateWithoutApprovedByInput = {
    leaveId?: string
    employeeId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestCreateOrConnectWithoutApprovedByInput = {
    where: LeaveRequestWhereUniqueInput
    create: XOR<LeaveRequestCreateWithoutApprovedByInput, LeaveRequestUncheckedCreateWithoutApprovedByInput>
  }

  export type LeaveRequestCreateManyApprovedByInputEnvelope = {
    data: LeaveRequestCreateManyApprovedByInput | LeaveRequestCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type LeaveRequestCreateWithoutEmployeeInput = {
    leaveId?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approvedBy?: EmployeeCreateNestedOneWithoutApprovedLeavesInput
  }

  export type LeaveRequestUncheckedCreateWithoutEmployeeInput = {
    leaveId?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestCreateOrConnectWithoutEmployeeInput = {
    where: LeaveRequestWhereUniqueInput
    create: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveRequestCreateManyEmployeeInputEnvelope = {
    data: LeaveRequestCreateManyEmployeeInput | LeaveRequestCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutEmployeeInput = {
    update: XOR<AddressUpdateWithoutEmployeeInput, AddressUncheckedUpdateWithoutEmployeeInput>
    create: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutEmployeeInput, AddressUncheckedUpdateWithoutEmployeeInput>
  }

  export type AddressUpdateWithoutEmployeeInput = {
    addressId?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutEmployeeInput = {
    addressId?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutEmployeeInput, AttendanceUncheckedUpdateWithoutEmployeeInput>
    create: XOR<AttendanceCreateWithoutEmployeeInput, AttendanceUncheckedCreateWithoutEmployeeInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutEmployeeInput, AttendanceUncheckedUpdateWithoutEmployeeInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutEmployeeInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    attendanceId?: UuidFilter<"Attendance"> | string
    employeeId?: UuidFilter<"Attendance"> | string
    eventId?: UuidFilter<"Attendance"> | string
    datetime?: DateTimeFilter<"Attendance"> | Date | string
    method?: EnumScanMethodNullableFilter<"Attendance"> | $Enums.ScanMethod | null
    status?: EnumStatusFilter<"Attendance"> | $Enums.Status
    checkIn?: DateTimeFilter<"Attendance"> | Date | string
    checkOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    note?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type AuthUpsertWithoutEmployeeInput = {
    update: XOR<AuthUpdateWithoutEmployeeInput, AuthUncheckedUpdateWithoutEmployeeInput>
    create: XOR<AuthCreateWithoutEmployeeInput, AuthUncheckedCreateWithoutEmployeeInput>
    where?: AuthWhereInput
  }

  export type AuthUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: AuthWhereInput
    data: XOR<AuthUpdateWithoutEmployeeInput, AuthUncheckedUpdateWithoutEmployeeInput>
  }

  export type AuthUpdateWithoutEmployeeInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: TokenUpdateManyWithoutAuthNestedInput
    logs?: AuthLogUpdateManyWithoutAuthNestedInput
    notification?: NotificationUpdateManyWithoutAuthNestedInput
    role?: RoleUpdateOneRequiredWithoutAuthsNestedInput
  }

  export type AuthUncheckedUpdateWithoutEmployeeInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: TokenUncheckedUpdateManyWithoutAuthNestedInput
    logs?: AuthLogUncheckedUpdateManyWithoutAuthNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutAuthNestedInput
  }

  export type CustomerUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutEmployeeInput, CustomerUncheckedUpdateWithoutEmployeeInput>
    create: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutEmployeeInput, CustomerUncheckedUpdateWithoutEmployeeInput>
  }

  export type CustomerUpdateManyWithWhereWithoutEmployeeInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    customerId?: UuidFilter<"Customer"> | string
    employeeId?: UuidFilter<"Customer"> | string
  }

  export type DepartmentUpsertWithoutEmployeesInput = {
    update: XOR<DepartmentUpdateWithoutEmployeesInput, DepartmentUncheckedUpdateWithoutEmployeesInput>
    create: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutEmployeesInput, DepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type DepartmentUpdateWithoutEmployeesInput = {
    departmentId?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateWithoutEmployeesInput = {
    departmentId?: StringFieldUpdateOperationsInput | string
    departmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUpsertWithoutEmployeesInput = {
    update: XOR<PositionUpdateWithoutEmployeesInput, PositionUncheckedUpdateWithoutEmployeesInput>
    create: XOR<PositionCreateWithoutEmployeesInput, PositionUncheckedCreateWithoutEmployeesInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutEmployeesInput, PositionUncheckedUpdateWithoutEmployeesInput>
  }

  export type PositionUpdateWithoutEmployeesInput = {
    positionId?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUncheckedUpdateWithoutEmployeesInput = {
    positionId?: StringFieldUpdateOperationsInput | string
    positionName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeinfoUpsertWithoutEmployeeInput = {
    update: XOR<EmployeeinfoUpdateWithoutEmployeeInput, EmployeeinfoUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeinfoCreateWithoutEmployeeInput, EmployeeinfoUncheckedCreateWithoutEmployeeInput>
    where?: EmployeeinfoWhereInput
  }

  export type EmployeeinfoUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: EmployeeinfoWhereInput
    data: XOR<EmployeeinfoUpdateWithoutEmployeeInput, EmployeeinfoUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeinfoUpdateWithoutEmployeeInput = {
    infoId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeinfoUncheckedUpdateWithoutEmployeeInput = {
    infoId?: StringFieldUpdateOperationsInput | string
  }

  export type LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: LeaveRequestWhereUniqueInput
    update: XOR<LeaveRequestUpdateWithoutApprovedByInput, LeaveRequestUncheckedUpdateWithoutApprovedByInput>
    create: XOR<LeaveRequestCreateWithoutApprovedByInput, LeaveRequestUncheckedCreateWithoutApprovedByInput>
  }

  export type LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: LeaveRequestWhereUniqueInput
    data: XOR<LeaveRequestUpdateWithoutApprovedByInput, LeaveRequestUncheckedUpdateWithoutApprovedByInput>
  }

  export type LeaveRequestUpdateManyWithWhereWithoutApprovedByInput = {
    where: LeaveRequestScalarWhereInput
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type LeaveRequestScalarWhereInput = {
    AND?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
    OR?: LeaveRequestScalarWhereInput[]
    NOT?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
    leaveId?: UuidFilter<"LeaveRequest"> | string
    employeeId?: UuidFilter<"LeaveRequest"> | string
    leaveType?: EnumLeaveTypeFilter<"LeaveRequest"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"LeaveRequest"> | Date | string
    endDate?: DateTimeFilter<"LeaveRequest"> | Date | string
    reason?: StringNullableFilter<"LeaveRequest"> | string | null
    status?: EnumLeaveStatusFilter<"LeaveRequest"> | $Enums.LeaveStatus
    approvedById?: UuidNullableFilter<"LeaveRequest"> | string | null
    approvedAt?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveRequest"> | Date | string
  }

  export type LeaveRequestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: LeaveRequestWhereUniqueInput
    update: XOR<LeaveRequestUpdateWithoutEmployeeInput, LeaveRequestUncheckedUpdateWithoutEmployeeInput>
    create: XOR<LeaveRequestCreateWithoutEmployeeInput, LeaveRequestUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveRequestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: LeaveRequestWhereUniqueInput
    data: XOR<LeaveRequestUpdateWithoutEmployeeInput, LeaveRequestUncheckedUpdateWithoutEmployeeInput>
  }

  export type LeaveRequestUpdateManyWithWhereWithoutEmployeeInput = {
    where: LeaveRequestScalarWhereInput
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type AddressCreateWithoutEventInput = {
    addressId?: string
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    employee?: EmployeeCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutEventInput = {
    addressId?: string
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    country?: string | null
    employeeId?: string | null
  }

  export type AddressCreateOrConnectWithoutEventInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutEventInput, AddressUncheckedCreateWithoutEventInput>
  }

  export type AttendanceCreateWithoutEventInput = {
    attendanceId?: string
    datetime?: Date | string
    method?: $Enums.ScanMethod | null
    status?: $Enums.Status
    checkIn?: Date | string
    checkOut?: Date | string | null
    note?: string | null
    createdAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutEventInput = {
    attendanceId?: string
    employeeId: string
    datetime?: Date | string
    method?: $Enums.ScanMethod | null
    status?: $Enums.Status
    checkIn?: Date | string
    checkOut?: Date | string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutEventInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutEventInput, AttendanceUncheckedCreateWithoutEventInput>
  }

  export type AttendanceCreateManyEventInputEnvelope = {
    data: AttendanceCreateManyEventInput | AttendanceCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type QRCodeCreateWithoutEventInput = {
    qrId?: string
    token: string
    eventName: string
    qrCode: string
    expiresAt: Date | string
    oneTimeUse?: boolean
    isActive?: boolean
    scans?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QRCodeUncheckedCreateWithoutEventInput = {
    qrId?: string
    token: string
    eventName: string
    qrCode: string
    expiresAt: Date | string
    oneTimeUse?: boolean
    isActive?: boolean
    scans?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QRCodeCreateOrConnectWithoutEventInput = {
    where: QRCodeWhereUniqueInput
    create: XOR<QRCodeCreateWithoutEventInput, QRCodeUncheckedCreateWithoutEventInput>
  }

  export type QRCodeCreateManyEventInputEnvelope = {
    data: QRCodeCreateManyEventInput | QRCodeCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutEventInput = {
    update: XOR<AddressUpdateWithoutEventInput, AddressUncheckedUpdateWithoutEventInput>
    create: XOR<AddressCreateWithoutEventInput, AddressUncheckedCreateWithoutEventInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutEventInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutEventInput, AddressUncheckedUpdateWithoutEventInput>
  }

  export type AddressUpdateWithoutEventInput = {
    addressId?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutEventInput = {
    addressId?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUpsertWithWhereUniqueWithoutEventInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutEventInput, AttendanceUncheckedUpdateWithoutEventInput>
    create: XOR<AttendanceCreateWithoutEventInput, AttendanceUncheckedCreateWithoutEventInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutEventInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutEventInput, AttendanceUncheckedUpdateWithoutEventInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutEventInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutEventInput>
  }

  export type QRCodeUpsertWithWhereUniqueWithoutEventInput = {
    where: QRCodeWhereUniqueInput
    update: XOR<QRCodeUpdateWithoutEventInput, QRCodeUncheckedUpdateWithoutEventInput>
    create: XOR<QRCodeCreateWithoutEventInput, QRCodeUncheckedCreateWithoutEventInput>
  }

  export type QRCodeUpdateWithWhereUniqueWithoutEventInput = {
    where: QRCodeWhereUniqueInput
    data: XOR<QRCodeUpdateWithoutEventInput, QRCodeUncheckedUpdateWithoutEventInput>
  }

  export type QRCodeUpdateManyWithWhereWithoutEventInput = {
    where: QRCodeScalarWhereInput
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyWithoutEventInput>
  }

  export type QRCodeScalarWhereInput = {
    AND?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
    OR?: QRCodeScalarWhereInput[]
    NOT?: QRCodeScalarWhereInput | QRCodeScalarWhereInput[]
    qrId?: UuidFilter<"QRCode"> | string
    token?: StringFilter<"QRCode"> | string
    eventId?: UuidFilter<"QRCode"> | string
    eventName?: StringFilter<"QRCode"> | string
    qrCode?: StringFilter<"QRCode"> | string
    expiresAt?: DateTimeFilter<"QRCode"> | Date | string
    oneTimeUse?: BoolFilter<"QRCode"> | boolean
    isActive?: BoolFilter<"QRCode"> | boolean
    scans?: IntFilter<"QRCode"> | number
    createdAt?: DateTimeFilter<"QRCode"> | Date | string
    updatedAt?: DateTimeFilter<"QRCode"> | Date | string
  }

  export type EventCreateWithoutQrCodeInput = {
    eventId?: string
    eventName: string
    memo?: string | null
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutEventInput
    attendance?: AttendanceCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutQrCodeInput = {
    eventId?: string
    eventName: string
    memo?: string | null
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutEventInput
    attendance?: AttendanceUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutQrCodeInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutQrCodeInput, EventUncheckedCreateWithoutQrCodeInput>
  }

  export type EventUpsertWithoutQrCodeInput = {
    update: XOR<EventUpdateWithoutQrCodeInput, EventUncheckedUpdateWithoutQrCodeInput>
    create: XOR<EventCreateWithoutQrCodeInput, EventUncheckedCreateWithoutQrCodeInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutQrCodeInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutQrCodeInput, EventUncheckedUpdateWithoutQrCodeInput>
  }

  export type EventUpdateWithoutQrCodeInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutEventNestedInput
    attendance?: AttendanceUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutQrCodeInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutEventNestedInput
    attendance?: AttendanceUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EmployeeCreateWithoutApprovedLeavesInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    auth?: AuthCreateNestedOneWithoutEmployeeInput
    customer?: CustomerCreateNestedManyWithoutEmployeeInput
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    info?: EmployeeinfoCreateNestedOneWithoutEmployeeInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutApprovedLeavesInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    positionId: string
    departmentId: string
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    auth?: AuthUncheckedCreateNestedOneWithoutEmployeeInput
    customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    info?: EmployeeinfoUncheckedCreateNestedOneWithoutEmployeeInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutApprovedLeavesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutApprovedLeavesInput, EmployeeUncheckedCreateWithoutApprovedLeavesInput>
  }

  export type EmployeeCreateWithoutLeaveRequestsInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    auth?: AuthCreateNestedOneWithoutEmployeeInput
    customer?: CustomerCreateNestedManyWithoutEmployeeInput
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    info?: EmployeeinfoCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
  }

  export type EmployeeUncheckedCreateWithoutLeaveRequestsInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    positionId: string
    departmentId: string
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    auth?: AuthUncheckedCreateNestedOneWithoutEmployeeInput
    customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    info?: EmployeeinfoUncheckedCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
  }

  export type EmployeeCreateOrConnectWithoutLeaveRequestsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutLeaveRequestsInput, EmployeeUncheckedCreateWithoutLeaveRequestsInput>
  }

  export type EmployeeUpsertWithoutApprovedLeavesInput = {
    update: XOR<EmployeeUpdateWithoutApprovedLeavesInput, EmployeeUncheckedUpdateWithoutApprovedLeavesInput>
    create: XOR<EmployeeCreateWithoutApprovedLeavesInput, EmployeeUncheckedCreateWithoutApprovedLeavesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutApprovedLeavesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutApprovedLeavesInput, EmployeeUncheckedUpdateWithoutApprovedLeavesInput>
  }

  export type EmployeeUpdateWithoutApprovedLeavesInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    info?: EmployeeinfoUpdateOneWithoutEmployeeNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutApprovedLeavesInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUncheckedUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    info?: EmployeeinfoUncheckedUpdateOneWithoutEmployeeNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUpsertWithoutLeaveRequestsInput = {
    update: XOR<EmployeeUpdateWithoutLeaveRequestsInput, EmployeeUncheckedUpdateWithoutLeaveRequestsInput>
    create: XOR<EmployeeCreateWithoutLeaveRequestsInput, EmployeeUncheckedCreateWithoutLeaveRequestsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutLeaveRequestsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutLeaveRequestsInput, EmployeeUncheckedUpdateWithoutLeaveRequestsInput>
  }

  export type EmployeeUpdateWithoutLeaveRequestsInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    info?: EmployeeinfoUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutLeaveRequestsInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUncheckedUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    info?: EmployeeinfoUncheckedUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
  }

  export type AuthCreateWithoutRoleInput = {
    authId?: string
    email: string
    password: string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    token?: TokenCreateNestedManyWithoutAuthInput
    logs?: AuthLogCreateNestedManyWithoutAuthInput
    notification?: NotificationCreateNestedManyWithoutAuthInput
    employee?: EmployeeCreateNestedOneWithoutAuthInput
  }

  export type AuthUncheckedCreateWithoutRoleInput = {
    authId?: string
    email: string
    password: string
    employeeId?: string | null
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    token?: TokenUncheckedCreateNestedManyWithoutAuthInput
    logs?: AuthLogUncheckedCreateNestedManyWithoutAuthInput
    notification?: NotificationUncheckedCreateNestedManyWithoutAuthInput
  }

  export type AuthCreateOrConnectWithoutRoleInput = {
    where: AuthWhereUniqueInput
    create: XOR<AuthCreateWithoutRoleInput, AuthUncheckedCreateWithoutRoleInput>
  }

  export type AuthCreateManyRoleInputEnvelope = {
    data: AuthCreateManyRoleInput | AuthCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type AuthUpsertWithWhereUniqueWithoutRoleInput = {
    where: AuthWhereUniqueInput
    update: XOR<AuthUpdateWithoutRoleInput, AuthUncheckedUpdateWithoutRoleInput>
    create: XOR<AuthCreateWithoutRoleInput, AuthUncheckedCreateWithoutRoleInput>
  }

  export type AuthUpdateWithWhereUniqueWithoutRoleInput = {
    where: AuthWhereUniqueInput
    data: XOR<AuthUpdateWithoutRoleInput, AuthUncheckedUpdateWithoutRoleInput>
  }

  export type AuthUpdateManyWithWhereWithoutRoleInput = {
    where: AuthScalarWhereInput
    data: XOR<AuthUpdateManyMutationInput, AuthUncheckedUpdateManyWithoutRoleInput>
  }

  export type AuthScalarWhereInput = {
    AND?: AuthScalarWhereInput | AuthScalarWhereInput[]
    OR?: AuthScalarWhereInput[]
    NOT?: AuthScalarWhereInput | AuthScalarWhereInput[]
    authId?: UuidFilter<"Auth"> | string
    email?: StringFilter<"Auth"> | string
    password?: StringFilter<"Auth"> | string
    roleId?: UuidFilter<"Auth"> | string
    employeeId?: UuidNullableFilter<"Auth"> | string | null
    status?: EnumAccountStatusFilter<"Auth"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"Auth"> | Date | string
    updatedAt?: DateTimeFilter<"Auth"> | Date | string
    lastLoginAt?: DateTimeNullableFilter<"Auth"> | Date | string | null
  }

  export type EmployeeCreateWithoutDepartmentInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    auth?: AuthCreateNestedOneWithoutEmployeeInput
    customer?: CustomerCreateNestedManyWithoutEmployeeInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    info?: EmployeeinfoCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutDepartmentInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    positionId: string
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    auth?: AuthUncheckedCreateNestedOneWithoutEmployeeInput
    customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    info?: EmployeeinfoUncheckedCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeCreateManyDepartmentInputEnvelope = {
    data: EmployeeCreateManyDepartmentInput | EmployeeCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutDepartmentInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    employeeId?: UuidFilter<"Employee"> | string
    employeeCode?: StringNullableFilter<"Employee"> | string | null
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    gender?: EnumGenderFilter<"Employee"> | $Enums.Gender
    dob?: DateTimeNullableFilter<"Employee"> | Date | string | null
    phone?: StringNullableFilter<"Employee"> | string | null
    positionId?: UuidFilter<"Employee"> | string
    departmentId?: UuidFilter<"Employee"> | string
    salary?: DecimalFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    hiredDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    status?: EnumStatusFilter<"Employee"> | $Enums.Status
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type EmployeeCreateWithoutPositionInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    auth?: AuthCreateNestedOneWithoutEmployeeInput
    customer?: CustomerCreateNestedManyWithoutEmployeeInput
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    info?: EmployeeinfoCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutPositionInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    departmentId: string
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    auth?: AuthUncheckedCreateNestedOneWithoutEmployeeInput
    customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    info?: EmployeeinfoUncheckedCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutPositionInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput>
  }

  export type EmployeeCreateManyPositionInputEnvelope = {
    data: EmployeeCreateManyPositionInput | EmployeeCreateManyPositionInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutPositionInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutPositionInput, EmployeeUncheckedUpdateWithoutPositionInput>
    create: XOR<EmployeeCreateWithoutPositionInput, EmployeeUncheckedCreateWithoutPositionInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutPositionInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutPositionInput, EmployeeUncheckedUpdateWithoutPositionInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutPositionInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutPositionInput>
  }

  export type EmployeeCreateWithoutAddressInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    auth?: AuthCreateNestedOneWithoutEmployeeInput
    customer?: CustomerCreateNestedManyWithoutEmployeeInput
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    info?: EmployeeinfoCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutAddressInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    positionId: string
    departmentId: string
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    auth?: AuthUncheckedCreateNestedOneWithoutEmployeeInput
    customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    info?: EmployeeinfoUncheckedCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutAddressInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
  }

  export type EventCreateWithoutAddressInput = {
    eventId?: string
    eventName: string
    memo?: string | null
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    attendance?: AttendanceCreateNestedManyWithoutEventInput
    qrCode?: QRCodeCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutAddressInput = {
    eventId?: string
    eventName: string
    memo?: string | null
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    attendance?: AttendanceUncheckedCreateNestedManyWithoutEventInput
    qrCode?: QRCodeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutAddressInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutAddressInput, EventUncheckedCreateWithoutAddressInput>
  }

  export type EmployeeUpsertWithoutAddressInput = {
    update: XOR<EmployeeUpdateWithoutAddressInput, EmployeeUncheckedUpdateWithoutAddressInput>
    create: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAddressInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAddressInput, EmployeeUncheckedUpdateWithoutAddressInput>
  }

  export type EmployeeUpdateWithoutAddressInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    info?: EmployeeinfoUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAddressInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUncheckedUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    info?: EmployeeinfoUncheckedUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EventUpsertWithoutAddressInput = {
    update: XOR<EventUpdateWithoutAddressInput, EventUncheckedUpdateWithoutAddressInput>
    create: XOR<EventCreateWithoutAddressInput, EventUncheckedCreateWithoutAddressInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutAddressInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutAddressInput, EventUncheckedUpdateWithoutAddressInput>
  }

  export type EventUpdateWithoutAddressInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: AttendanceUpdateManyWithoutEventNestedInput
    qrCode?: QRCodeUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutAddressInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: AttendanceUncheckedUpdateManyWithoutEventNestedInput
    qrCode?: QRCodeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type AuthCreateWithoutTokenInput = {
    authId?: string
    email: string
    password: string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    logs?: AuthLogCreateNestedManyWithoutAuthInput
    notification?: NotificationCreateNestedManyWithoutAuthInput
    role: RoleCreateNestedOneWithoutAuthsInput
    employee?: EmployeeCreateNestedOneWithoutAuthInput
  }

  export type AuthUncheckedCreateWithoutTokenInput = {
    authId?: string
    email: string
    password: string
    roleId: string
    employeeId?: string | null
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    logs?: AuthLogUncheckedCreateNestedManyWithoutAuthInput
    notification?: NotificationUncheckedCreateNestedManyWithoutAuthInput
  }

  export type AuthCreateOrConnectWithoutTokenInput = {
    where: AuthWhereUniqueInput
    create: XOR<AuthCreateWithoutTokenInput, AuthUncheckedCreateWithoutTokenInput>
  }

  export type AuthUpsertWithoutTokenInput = {
    update: XOR<AuthUpdateWithoutTokenInput, AuthUncheckedUpdateWithoutTokenInput>
    create: XOR<AuthCreateWithoutTokenInput, AuthUncheckedCreateWithoutTokenInput>
    where?: AuthWhereInput
  }

  export type AuthUpdateToOneWithWhereWithoutTokenInput = {
    where?: AuthWhereInput
    data: XOR<AuthUpdateWithoutTokenInput, AuthUncheckedUpdateWithoutTokenInput>
  }

  export type AuthUpdateWithoutTokenInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logs?: AuthLogUpdateManyWithoutAuthNestedInput
    notification?: NotificationUpdateManyWithoutAuthNestedInput
    role?: RoleUpdateOneRequiredWithoutAuthsNestedInput
    employee?: EmployeeUpdateOneWithoutAuthNestedInput
  }

  export type AuthUncheckedUpdateWithoutTokenInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logs?: AuthLogUncheckedUpdateManyWithoutAuthNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutAuthNestedInput
  }

  export type AuthCreateWithoutLogsInput = {
    authId?: string
    email: string
    password: string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    token?: TokenCreateNestedManyWithoutAuthInput
    notification?: NotificationCreateNestedManyWithoutAuthInput
    role: RoleCreateNestedOneWithoutAuthsInput
    employee?: EmployeeCreateNestedOneWithoutAuthInput
  }

  export type AuthUncheckedCreateWithoutLogsInput = {
    authId?: string
    email: string
    password: string
    roleId: string
    employeeId?: string | null
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    token?: TokenUncheckedCreateNestedManyWithoutAuthInput
    notification?: NotificationUncheckedCreateNestedManyWithoutAuthInput
  }

  export type AuthCreateOrConnectWithoutLogsInput = {
    where: AuthWhereUniqueInput
    create: XOR<AuthCreateWithoutLogsInput, AuthUncheckedCreateWithoutLogsInput>
  }

  export type AuthUpsertWithoutLogsInput = {
    update: XOR<AuthUpdateWithoutLogsInput, AuthUncheckedUpdateWithoutLogsInput>
    create: XOR<AuthCreateWithoutLogsInput, AuthUncheckedCreateWithoutLogsInput>
    where?: AuthWhereInput
  }

  export type AuthUpdateToOneWithWhereWithoutLogsInput = {
    where?: AuthWhereInput
    data: XOR<AuthUpdateWithoutLogsInput, AuthUncheckedUpdateWithoutLogsInput>
  }

  export type AuthUpdateWithoutLogsInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: TokenUpdateManyWithoutAuthNestedInput
    notification?: NotificationUpdateManyWithoutAuthNestedInput
    role?: RoleUpdateOneRequiredWithoutAuthsNestedInput
    employee?: EmployeeUpdateOneWithoutAuthNestedInput
  }

  export type AuthUncheckedUpdateWithoutLogsInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: TokenUncheckedUpdateManyWithoutAuthNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutAuthNestedInput
  }

  export type AuthCreateWithoutNotificationInput = {
    authId?: string
    email: string
    password: string
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    token?: TokenCreateNestedManyWithoutAuthInput
    logs?: AuthLogCreateNestedManyWithoutAuthInput
    role: RoleCreateNestedOneWithoutAuthsInput
    employee?: EmployeeCreateNestedOneWithoutAuthInput
  }

  export type AuthUncheckedCreateWithoutNotificationInput = {
    authId?: string
    email: string
    password: string
    roleId: string
    employeeId?: string | null
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
    token?: TokenUncheckedCreateNestedManyWithoutAuthInput
    logs?: AuthLogUncheckedCreateNestedManyWithoutAuthInput
  }

  export type AuthCreateOrConnectWithoutNotificationInput = {
    where: AuthWhereUniqueInput
    create: XOR<AuthCreateWithoutNotificationInput, AuthUncheckedCreateWithoutNotificationInput>
  }

  export type AuthUpsertWithoutNotificationInput = {
    update: XOR<AuthUpdateWithoutNotificationInput, AuthUncheckedUpdateWithoutNotificationInput>
    create: XOR<AuthCreateWithoutNotificationInput, AuthUncheckedCreateWithoutNotificationInput>
    where?: AuthWhereInput
  }

  export type AuthUpdateToOneWithWhereWithoutNotificationInput = {
    where?: AuthWhereInput
    data: XOR<AuthUpdateWithoutNotificationInput, AuthUncheckedUpdateWithoutNotificationInput>
  }

  export type AuthUpdateWithoutNotificationInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: TokenUpdateManyWithoutAuthNestedInput
    logs?: AuthLogUpdateManyWithoutAuthNestedInput
    role?: RoleUpdateOneRequiredWithoutAuthsNestedInput
    employee?: EmployeeUpdateOneWithoutAuthNestedInput
  }

  export type AuthUncheckedUpdateWithoutNotificationInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: TokenUncheckedUpdateManyWithoutAuthNestedInput
    logs?: AuthLogUncheckedUpdateManyWithoutAuthNestedInput
  }

  export type EmployeeCreateWithoutCustomerInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    auth?: AuthCreateNestedOneWithoutEmployeeInput
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    info?: EmployeeinfoCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutCustomerInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    positionId: string
    departmentId: string
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    auth?: AuthUncheckedCreateNestedOneWithoutEmployeeInput
    info?: EmployeeinfoUncheckedCreateNestedOneWithoutEmployeeInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutCustomerInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutCustomerInput, EmployeeUncheckedCreateWithoutCustomerInput>
  }

  export type EmployeeUpsertWithoutCustomerInput = {
    update: XOR<EmployeeUpdateWithoutCustomerInput, EmployeeUncheckedUpdateWithoutCustomerInput>
    create: XOR<EmployeeCreateWithoutCustomerInput, EmployeeUncheckedCreateWithoutCustomerInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutCustomerInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutCustomerInput, EmployeeUncheckedUpdateWithoutCustomerInput>
  }

  export type EmployeeUpdateWithoutCustomerInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUpdateOneWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    info?: EmployeeinfoUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutCustomerInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUncheckedUpdateOneWithoutEmployeeNestedInput
    info?: EmployeeinfoUncheckedUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutInfoInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceCreateNestedManyWithoutEmployeeInput
    auth?: AuthCreateNestedOneWithoutEmployeeInput
    customer?: CustomerCreateNestedManyWithoutEmployeeInput
    department: DepartmentCreateNestedOneWithoutEmployeesInput
    position: PositionCreateNestedOneWithoutEmployeesInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutInfoInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    positionId: string
    departmentId: string
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutEmployeeInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutEmployeeInput
    auth?: AuthUncheckedCreateNestedOneWithoutEmployeeInput
    customer?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutInfoInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutInfoInput, EmployeeUncheckedCreateWithoutInfoInput>
  }

  export type EmployeeUpsertWithoutInfoInput = {
    update: XOR<EmployeeUpdateWithoutInfoInput, EmployeeUncheckedUpdateWithoutInfoInput>
    create: XOR<EmployeeCreateWithoutInfoInput, EmployeeUncheckedCreateWithoutInfoInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutInfoInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutInfoInput, EmployeeUncheckedUpdateWithoutInfoInput>
  }

  export type EmployeeUpdateWithoutInfoInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutInfoInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUncheckedUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type TokenCreateManyAuthInput = {
    tokenId?: string
  }

  export type AuthLogCreateManyAuthInput = {
    logId?: string
  }

  export type NotificationCreateManyAuthInput = {
    notificationId?: string
  }

  export type TokenUpdateWithoutAuthInput = {
    tokenId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenUncheckedUpdateWithoutAuthInput = {
    tokenId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenUncheckedUpdateManyWithoutAuthInput = {
    tokenId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthLogUpdateWithoutAuthInput = {
    logId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthLogUncheckedUpdateWithoutAuthInput = {
    logId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthLogUncheckedUpdateManyWithoutAuthInput = {
    logId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutAuthInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateWithoutAuthInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyWithoutAuthInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateManyEmployeeInput = {
    attendanceId?: string
    eventId: string
    datetime?: Date | string
    method?: $Enums.ScanMethod | null
    status?: $Enums.Status
    checkIn?: Date | string
    checkOut?: Date | string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type CustomerCreateManyEmployeeInput = {
    customerId?: string
  }

  export type LeaveRequestCreateManyApprovedByInput = {
    leaveId?: string
    employeeId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestCreateManyEmployeeInput = {
    leaveId?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason?: string | null
    status?: $Enums.LeaveStatus
    approvedById?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateWithoutEmployeeInput = {
    attendanceId?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumScanMethodFieldUpdateOperationsInput | $Enums.ScanMethod | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutEmployeeInput = {
    attendanceId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumScanMethodFieldUpdateOperationsInput | $Enums.ScanMethod | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutEmployeeInput = {
    attendanceId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumScanMethodFieldUpdateOperationsInput | $Enums.ScanMethod | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUpdateWithoutEmployeeInput = {
    customerId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateWithoutEmployeeInput = {
    customerId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyWithoutEmployeeInput = {
    customerId?: StringFieldUpdateOperationsInput | string
  }

  export type LeaveRequestUpdateWithoutApprovedByInput = {
    leaveId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutLeaveRequestsNestedInput
  }

  export type LeaveRequestUncheckedUpdateWithoutApprovedByInput = {
    leaveId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUncheckedUpdateManyWithoutApprovedByInput = {
    leaveId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUpdateWithoutEmployeeInput = {
    leaveId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedBy?: EmployeeUpdateOneWithoutApprovedLeavesNestedInput
  }

  export type LeaveRequestUncheckedUpdateWithoutEmployeeInput = {
    leaveId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUncheckedUpdateManyWithoutEmployeeInput = {
    leaveId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyEventInput = {
    attendanceId?: string
    employeeId: string
    datetime?: Date | string
    method?: $Enums.ScanMethod | null
    status?: $Enums.Status
    checkIn?: Date | string
    checkOut?: Date | string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type QRCodeCreateManyEventInput = {
    qrId?: string
    token: string
    eventName: string
    qrCode: string
    expiresAt: Date | string
    oneTimeUse?: boolean
    isActive?: boolean
    scans?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateWithoutEventInput = {
    attendanceId?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumScanMethodFieldUpdateOperationsInput | $Enums.ScanMethod | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutEventInput = {
    attendanceId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumScanMethodFieldUpdateOperationsInput | $Enums.ScanMethod | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutEventInput = {
    attendanceId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: NullableEnumScanMethodFieldUpdateOperationsInput | $Enums.ScanMethod | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRCodeUpdateWithoutEventInput = {
    qrId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oneTimeUse?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    scans?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRCodeUncheckedUpdateWithoutEventInput = {
    qrId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oneTimeUse?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    scans?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRCodeUncheckedUpdateManyWithoutEventInput = {
    qrId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oneTimeUse?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    scans?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCreateManyRoleInput = {
    authId?: string
    email: string
    password: string
    employeeId?: string | null
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLoginAt?: Date | string | null
  }

  export type AuthUpdateWithoutRoleInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: TokenUpdateManyWithoutAuthNestedInput
    logs?: AuthLogUpdateManyWithoutAuthNestedInput
    notification?: NotificationUpdateManyWithoutAuthNestedInput
    employee?: EmployeeUpdateOneWithoutAuthNestedInput
  }

  export type AuthUncheckedUpdateWithoutRoleInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: TokenUncheckedUpdateManyWithoutAuthNestedInput
    logs?: AuthLogUncheckedUpdateManyWithoutAuthNestedInput
    notification?: NotificationUncheckedUpdateManyWithoutAuthNestedInput
  }

  export type AuthUncheckedUpdateManyWithoutRoleInput = {
    authId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeCreateManyDepartmentInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    positionId: string
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutDepartmentInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    position?: PositionUpdateOneRequiredWithoutEmployeesNestedInput
    info?: EmployeeinfoUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDepartmentInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUncheckedUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    info?: EmployeeinfoUncheckedUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    positionId?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyPositionInput = {
    employeeId?: string
    employeeCode?: string | null
    firstName: string
    lastName: string
    gender?: $Enums.Gender
    dob?: Date | string | null
    phone?: string | null
    departmentId: string
    salary: Decimal | DecimalJsLike | number | string
    hiredDate?: Date | string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutPositionInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUpdateManyWithoutEmployeeNestedInput
    department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput
    info?: EmployeeinfoUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPositionInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutEmployeeNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    auth?: AuthUncheckedUpdateOneWithoutEmployeeNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    info?: EmployeeinfoUncheckedUpdateOneWithoutEmployeeNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutPositionInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
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