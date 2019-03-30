import { IContext } from '../types/Context'
import { Args } from 'prisma-client-lib/dist/types'

async function ticket(parent: any, args: Args, { prisma }: IContext) {
	return prisma.user({ id: parent.id }).ticket()
}

export default {
	ticket,
}
