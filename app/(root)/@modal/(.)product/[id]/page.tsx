import { ChooseProductModal } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductModalPage(props: unknown) {
  const { params } = props as { params: { id: string } };

  const product = await prisma.product.findFirst({
    where: { id: Number(params.id) },
    include: { ingredients: true, items: true },
  });

  if (!product) return notFound();
  return <ChooseProductModal product={product} />;
}
