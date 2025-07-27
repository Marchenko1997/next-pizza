// eslint-disable-next-line @typescript-eslint/no-explicit-any

import { ChooseProductModal } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductModalPage({ params }: any) {
  const product = await prisma.product.findFirst({
    where: { id: Number(params.id) },
    include: { ingredients: true, items: true },
  });

  if (!product) return notFound();
  return <ChooseProductModal product={product} />;
}