import { IContext } from '../types/Context'
import * as Bcryptjs from 'bcryptjs'
import { SECRET_JWT, signToken, getUserByToken } from '../ultis'
import { Args } from 'prisma-client-lib/dist/types'

async function signUp(_: any, args: Args, { prisma }: IContext) {
	try {
		const { name, email, password } = args
		const hashPassword = await Bcryptjs.hash(password, 10)
		const user = await prisma.createUser({
			name,
			email,
			password: hashPassword,
			count: 0,
			checkHadTicket: false,
		})

		const token = signToken(user.id)
		return {
			user,
			token,
		}
	} catch (e) {
		throw e
	}
}

async function login(_: any, args: Args, { prisma }: IContext) {
	try {
		const { email, password } = args
		const user = await prisma.user({
			email,
		})
		if (!user) {
			throw 'User not exists'
		}
		const verify = await Bcryptjs.compare(password, user.password)
		if (!verify) {
			throw 'Wrong password'
		}
		const token = signToken(user.id)
		return {
			user,
			token,
		}
	} catch (e) {
		throw e
	}
}

async function createTicket(
	parent: any,
	args: Args,
	{ prisma, request }: IContext,
) {
	try {
		const user = await getUserByToken({ prisma, request })
		const { title } = args
		const ticket = await prisma.createTicket({
			title,
			owner: {
				connect: {
					id: user.id,
				},
			},
		})
		return ticket
	} catch (error) {
		throw error
	}
}

export default {
	signUp,
	login,
	createTicket,
}
