import type { NextApiRequest, NextApiResponse } from 'next';
import type { BannerProps } from '@utils/types/client';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<BannerProps>
) {
  res.status(200).json({ title: 'NextJS Template @1.0.0 ⚡️' });
}
