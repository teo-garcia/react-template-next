import type { NextApiRequest, NextApiResponse } from 'next'
import type { BannerProps } from '@lib/types/client'
import packageInfo from '../../../package.json'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<BannerProps>
) {
  res
    .status(200)
    .json({ title: `NextJS Template @${packageInfo.version}.} ⚡️` })
}
