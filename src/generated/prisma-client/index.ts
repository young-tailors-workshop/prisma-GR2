// Code generated by Prisma (prisma@1.29.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  ticket: (where?: TicketWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  ticket: (where: TicketWhereUniqueInput) => TicketPromise;
  tickets: (
    args?: {
      where?: TicketWhereInput;
      orderBy?: TicketOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Ticket>;
  ticketsConnection: (
    args?: {
      where?: TicketWhereInput;
      orderBy?: TicketOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => TicketConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createTicket: (data: TicketCreateInput) => TicketPromise;
  updateTicket: (
    args: { data: TicketUpdateInput; where: TicketWhereUniqueInput }
  ) => TicketPromise;
  updateManyTickets: (
    args: { data: TicketUpdateManyMutationInput; where?: TicketWhereInput }
  ) => BatchPayloadPromise;
  upsertTicket: (
    args: {
      where: TicketWhereUniqueInput;
      create: TicketCreateInput;
      update: TicketUpdateInput;
    }
  ) => TicketPromise;
  deleteTicket: (where: TicketWhereUniqueInput) => TicketPromise;
  deleteManyTickets: (where?: TicketWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  ticket: (
    where?: TicketSubscriptionWhereInput
  ) => TicketSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TicketOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "count_ASC"
  | "count_DESC"
  | "checkHadTicket_ASC"
  | "checkHadTicket_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type TicketWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface TicketWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  owner?: UserWhereInput;
  AND?: TicketWhereInput[] | TicketWhereInput;
  OR?: TicketWhereInput[] | TicketWhereInput;
  NOT?: TicketWhereInput[] | TicketWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  count?: Int;
  count_not?: Int;
  count_in?: Int[] | Int;
  count_not_in?: Int[] | Int;
  count_lt?: Int;
  count_lte?: Int;
  count_gt?: Int;
  count_gte?: Int;
  checkHadTicket?: Boolean;
  checkHadTicket_not?: Boolean;
  ticket?: TicketWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface TicketCreateInput {
  title: String;
  owner?: UserCreateOneWithoutTicketInput;
}

export interface UserCreateOneWithoutTicketInput {
  create?: UserCreateWithoutTicketInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutTicketInput {
  name: String;
  email: String;
  password: String;
  count: Int;
  checkHadTicket: Boolean;
}

export interface TicketUpdateInput {
  title?: String;
  owner?: UserUpdateOneWithoutTicketInput;
}

export interface UserUpdateOneWithoutTicketInput {
  create?: UserCreateWithoutTicketInput;
  update?: UserUpdateWithoutTicketDataInput;
  upsert?: UserUpsertWithoutTicketInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutTicketDataInput {
  name?: String;
  email?: String;
  password?: String;
  count?: Int;
  checkHadTicket?: Boolean;
}

export interface UserUpsertWithoutTicketInput {
  update: UserUpdateWithoutTicketDataInput;
  create: UserCreateWithoutTicketInput;
}

export interface TicketUpdateManyMutationInput {
  title?: String;
}

export interface UserCreateInput {
  name: String;
  email: String;
  password: String;
  count: Int;
  checkHadTicket: Boolean;
  ticket?: TicketCreateOneWithoutOwnerInput;
}

export interface TicketCreateOneWithoutOwnerInput {
  create?: TicketCreateWithoutOwnerInput;
  connect?: TicketWhereUniqueInput;
}

export interface TicketCreateWithoutOwnerInput {
  title: String;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
  count?: Int;
  checkHadTicket?: Boolean;
  ticket?: TicketUpdateOneWithoutOwnerInput;
}

export interface TicketUpdateOneWithoutOwnerInput {
  create?: TicketCreateWithoutOwnerInput;
  update?: TicketUpdateWithoutOwnerDataInput;
  upsert?: TicketUpsertWithoutOwnerInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: TicketWhereUniqueInput;
}

export interface TicketUpdateWithoutOwnerDataInput {
  title?: String;
}

export interface TicketUpsertWithoutOwnerInput {
  update: TicketUpdateWithoutOwnerDataInput;
  create: TicketCreateWithoutOwnerInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
  password?: String;
  count?: Int;
  checkHadTicket?: Boolean;
}

export interface TicketSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TicketWhereInput;
  AND?: TicketSubscriptionWhereInput[] | TicketSubscriptionWhereInput;
  OR?: TicketSubscriptionWhereInput[] | TicketSubscriptionWhereInput;
  NOT?: TicketSubscriptionWhereInput[] | TicketSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Ticket {
  id: ID_Output;
  title: String;
}

export interface TicketPromise extends Promise<Ticket>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  owner: <T = UserPromise>() => T;
}

export interface TicketSubscription
  extends Promise<AsyncIterator<Ticket>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  owner: <T = UserSubscription>() => T;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  count: Int;
  checkHadTicket: Boolean;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  count: () => Promise<Int>;
  checkHadTicket: () => Promise<Boolean>;
  ticket: <T = TicketPromise>() => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  count: () => Promise<AsyncIterator<Int>>;
  checkHadTicket: () => Promise<AsyncIterator<Boolean>>;
  ticket: <T = TicketSubscription>() => T;
}

export interface TicketConnection {
  pageInfo: PageInfo;
  edges: TicketEdge[];
}

export interface TicketConnectionPromise
  extends Promise<TicketConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TicketEdge>>() => T;
  aggregate: <T = AggregateTicketPromise>() => T;
}

export interface TicketConnectionSubscription
  extends Promise<AsyncIterator<TicketConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TicketEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTicketSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface TicketEdge {
  node: Ticket;
  cursor: String;
}

export interface TicketEdgePromise extends Promise<TicketEdge>, Fragmentable {
  node: <T = TicketPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TicketEdgeSubscription
  extends Promise<AsyncIterator<TicketEdge>>,
    Fragmentable {
  node: <T = TicketSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTicket {
  count: Int;
}

export interface AggregateTicketPromise
  extends Promise<AggregateTicket>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTicketSubscription
  extends Promise<AsyncIterator<AggregateTicket>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface TicketSubscriptionPayload {
  mutation: MutationType;
  node: Ticket;
  updatedFields: String[];
  previousValues: TicketPreviousValues;
}

export interface TicketSubscriptionPayloadPromise
  extends Promise<TicketSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TicketPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TicketPreviousValuesPromise>() => T;
}

export interface TicketSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TicketSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TicketSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TicketPreviousValuesSubscription>() => T;
}

export interface TicketPreviousValues {
  id: ID_Output;
  title: String;
}

export interface TicketPreviousValuesPromise
  extends Promise<TicketPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
}

export interface TicketPreviousValuesSubscription
  extends Promise<AsyncIterator<TicketPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  count: Int;
  checkHadTicket: Boolean;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  count: () => Promise<Int>;
  checkHadTicket: () => Promise<Boolean>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  count: () => Promise<AsyncIterator<Int>>;
  checkHadTicket: () => Promise<AsyncIterator<Boolean>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Ticket",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/harry-tran-ed3204/prisma-temp/dev`
});
export const prisma = new Prisma();
