import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

const secret = process.env.SECRET;

export const checkToken = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req, secret });

  if (!token || !token.accessToken) {
    res.status(401).json({ error: 'Invalid token' });
    return false;
  }
  return true;
};
