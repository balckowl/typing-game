import prisma from "@/lib/prisma/db"
import { NextApiRequest, NextApiResponse } from 'next';

export const getUser = async (id: string) => {
    const user = await prisma.user.findUnique({
      where: {
        id: id
      }
    })

    return user
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany({
        include: {
          games: true
        }
      });

      // ユーザーのハイスコアでソートし、ランキングを計算
      const rankingData = users.map((user, index) => {
        const techs = user.games.flatMap(game => game.techs);
        return {
          name: user.name,
          rank: index + 1,
          score: user.highScore,
          techs: Array.from(new Set(techs)), // 重複を削除
          grade: calculateGrade(user.highScore) // 適切なグレードを計算する関数を定義する必要があります
        }
      }).sort((a, b) => b.score - a.score);

      res.status(200).json(rankingData);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// 適切なグレードを計算するための関数
const calculateGrade = (score: number) => {
  if (score >= 24000) return 'S';
  if (score >= 21000) return 'A';
  if (score >= 20000) return 'B';
  return 'C';
}

