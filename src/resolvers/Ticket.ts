import { IContext } from '../types/Context'
import { Args } from 'prisma-client-lib/dist/types'

async function owner(parent: any, args: Args, { prisma }: IContext) {
	const { id } = parent
	const user = await prisma.ticket({ id }).owner()
	return user
}

export default {
	owner,
}
