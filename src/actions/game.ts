"use server"
import prisma from "@/lib/prisma/db"

export const submitScore = async (formData: FormData) => {
  const userId =  1;
  const score = parseInt(formData.get("score") as string, 10);
  const techs = (formData.get("techs") as string).split(","); // techsフィールドを取得

  // ユーザーが存在するか確認
  const existingUser = await prisma.user.findUnique({
    where: { id: userId }
  });

  if (!existingUser) {
    throw new Error("ユーザーが存在しません");
  }

  // Prismaでゲームスコアを投稿
  const gameEntry = await prisma.games.create({
    data: {
      score: score,
      techs: techs, // 取得したtechsを設定
      userId: userId
    }
  });

  // 新しいスコアがハイスコアかどうかをチェックし、更新
  if (score > existingUser.HighScore) {
    await prisma.user.update({
      data: { HighScore: score },
      where: { id: userId }
    });
  }

  return gameEntry;
};