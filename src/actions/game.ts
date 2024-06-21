"use server"
import prisma from "@/lib/prisma/db"

export const submitScore = async (formData: FormData) => {
  const userId = parseInt(formData.get("userId") as string, 10);
  const score = parseInt(formData.get("score") as string, 10);

  // ユーザーが存在するか確認
  // const existingUser = await prisma.user.findUnique({
  //   where: { id: userId }
  // });

  // if (!existingUser) {
  //   throw new Error("ユーザーが存在しません");
  // }

  // Prismaでゲームスコアを投稿
  const gameEntry = await prisma.games.create({
    data: {
      score: score,
      techs: [], // techsフィールドが必須なので、空の配列を設定しています。必要に応じて適切なデータを追加してください。
      userId: 123
    }
  });

  return gameEntry;
};