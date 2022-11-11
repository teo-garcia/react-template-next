import type { NextApiRequest, NextApiResponse } from 'next'
import packageInfo from '../../../package.json'

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ title: `NextJS Template @${packageInfo.version} ⚡️` })
}
