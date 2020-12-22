/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.send({ message: 'Posts' })
}
