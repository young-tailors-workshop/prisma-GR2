import { IContext } from '../types/Context'
import { getUserByToken } from '../ultis'
import { Args } from 'prisma-client-lib/dist/types'

async function feed(_: ParentNode, args: Args, { prisma }: IContext) {
	const { skip, first } = args
	const posts = await prisma.tickets({
		skip,
		first,
	})
	return {
		posts,
	}
}

async function me(_: ParentNode, __: Args, context: IContext) {
	const user = await getUserByToken(context)
	return user
}

export default {
	feed,
	me,
}
