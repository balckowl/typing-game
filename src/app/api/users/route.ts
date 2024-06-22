import { NextRequest, NextResponse } from 'next/server';

import prisma from "@/lib/prisma/db"; // ここは適切なパスに置き換えてください

export async function GET(req: NextRequest) {
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
        grade: calculateGrade(user.highScore), // 適切なグレードを計算する関数を定義する必要があります
        rank: index + 1,
        score: user.highScore,
        techs: Array.from(new Set(techs)) // 重複を削除
      }
    }).sort((a, b) => b.score - a.score);

    return NextResponse.json(rankingData);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// 適切なグレードを計算するための関数
const calculateGrade = (score: number) => {
  if (score >= 24000) return 'S';
  if (score >= 21000) return 'A';
  if (score >= 20000) return 'B';
  return 'C';
}
