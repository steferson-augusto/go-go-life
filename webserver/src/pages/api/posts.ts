/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'

type Category = 'messages' | 'news' | 'schedules' | 'taxes'

export interface Post {
  title: string
  category: Category
  content: any
}

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.send({ message: 'Posts' })
}
