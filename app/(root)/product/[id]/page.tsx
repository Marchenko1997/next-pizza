import { Container, ProductForm } from "@/shared/components/shared";

import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";



export default async function ProductPage(props: unknown) {
  const { params } = props as { params: { id: string } };
  const product = await prisma.product.findFirst({
    where: { id: Number(params.id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <ProductForm product={product} />
    </Container>
  );
}
