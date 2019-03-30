import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import Mutation from './resolvers/Mutation'
import Query from './resolvers/Query'
import User from './resolvers/User'
import Ticket from './resolvers/Ticket'

async function main() {
	const resolvers = {
		Mutation,
		Query,
		User,
		Ticket,
	}
	const server = new GraphQLServer({
		typeDefs: './src/schema.graphql',
		resolvers,
		context: ({ request }) => ({
			prisma,
			request,
		}),
	})
	server.start().then(() => {
		console.log('Server is running in http://localhost:4000')
	})
}

main()
