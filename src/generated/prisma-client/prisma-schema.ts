// Code generated by Prisma (prisma@1.29.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateTicket {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createTicket(data: TicketCreateInput!): Ticket!
  updateTicket(data: TicketUpdateInput!, where: TicketWhereUniqueInput!): Ticket
  updateManyTickets(data: TicketUpdateManyMutationInput!, where: TicketWhereInput): BatchPayload!
  upsertTicket(where: TicketWhereUniqueInput!, create: TicketCreateInput!, update: TicketUpdateInput!): Ticket!
  deleteTicket(where: TicketWhereUniqueInput!): Ticket
  deleteManyTickets(where: TicketWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  ticket(where: TicketWhereUniqueInput!): Ticket
  tickets(where: TicketWhereInput, orderBy: TicketOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ticket]!
  ticketsConnection(where: TicketWhereInput, orderBy: TicketOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TicketConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  ticket(where: TicketSubscriptionWhereInput): TicketSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Ticket {
  id: ID!
  title: String!
  owner: User
}

type TicketConnection {
  pageInfo: PageInfo!
  edges: [TicketEdge]!
  aggregate: AggregateTicket!
}

input TicketCreateInput {
  title: String!
  owner: UserCreateOneWithoutTicketInput
}

input TicketCreateOneWithoutOwnerInput {
  create: TicketCreateWithoutOwnerInput
  connect: TicketWhereUniqueInput
}

input TicketCreateWithoutOwnerInput {
  title: String!
}

type TicketEdge {
  node: Ticket!
  cursor: String!
}

enum TicketOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TicketPreviousValues {
  id: ID!
  title: String!
}

type TicketSubscriptionPayload {
  mutation: MutationType!
  node: Ticket
  updatedFields: [String!]
  previousValues: TicketPreviousValues
}

input TicketSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TicketWhereInput
  AND: [TicketSubscriptionWhereInput!]
  OR: [TicketSubscriptionWhereInput!]
  NOT: [TicketSubscriptionWhereInput!]
}

input TicketUpdateInput {
  title: String
  owner: UserUpdateOneWithoutTicketInput
}

input TicketUpdateManyMutationInput {
  title: String
}

input TicketUpdateOneWithoutOwnerInput {
  create: TicketCreateWithoutOwnerInput
  update: TicketUpdateWithoutOwnerDataInput
  upsert: TicketUpsertWithoutOwnerInput
  delete: Boolean
  disconnect: Boolean
  connect: TicketWhereUniqueInput
}

input TicketUpdateWithoutOwnerDataInput {
  title: String
}

input TicketUpsertWithoutOwnerInput {
  update: TicketUpdateWithoutOwnerDataInput!
  create: TicketCreateWithoutOwnerInput!
}

input TicketWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  owner: UserWhereInput
  AND: [TicketWhereInput!]
  OR: [TicketWhereInput!]
  NOT: [TicketWhereInput!]
}

input TicketWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  count: Int!
  checkHadTicket: Boolean!
  ticket: Ticket
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  count: Int!
  checkHadTicket: Boolean!
  ticket: TicketCreateOneWithoutOwnerInput
}

input UserCreateOneWithoutTicketInput {
  create: UserCreateWithoutTicketInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTicketInput {
  name: String!
  email: String!
  password: String!
  count: Int!
  checkHadTicket: Boolean!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  count_ASC
  count_DESC
  checkHadTicket_ASC
  checkHadTicket_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  count: Int!
  checkHadTicket: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  count: Int
  checkHadTicket: Boolean
  ticket: TicketUpdateOneWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  count: Int
  checkHadTicket: Boolean
}

input UserUpdateOneWithoutTicketInput {
  create: UserCreateWithoutTicketInput
  update: UserUpdateWithoutTicketDataInput
  upsert: UserUpsertWithoutTicketInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTicketDataInput {
  name: String
  email: String
  password: String
  count: Int
  checkHadTicket: Boolean
}

input UserUpsertWithoutTicketInput {
  update: UserUpdateWithoutTicketDataInput!
  create: UserCreateWithoutTicketInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  count: Int
  count_not: Int
  count_in: [Int!]
  count_not_in: [Int!]
  count_lt: Int
  count_lte: Int
  count_gt: Int
  count_gte: Int
  checkHadTicket: Boolean
  checkHadTicket_not: Boolean
  ticket: TicketWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`