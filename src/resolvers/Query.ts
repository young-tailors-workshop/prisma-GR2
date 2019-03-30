import { IContext } from '../types/Context'
import { getUserByToken } from '../ultis'
import { Args } from 'prisma-client-lib/dist/types'

async function getUsers(_: ParentNode, __: Args, { prisma }: IContext) {
	const user = await prisma.users()
	return user
}

async function me(_: ParentNode, __: Args, context: IContext) {
	const user = await getUserByToken(context)
	return user
}


export default {
	getUsers,
	me,
}
