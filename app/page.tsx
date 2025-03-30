import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      {/* <div style={{ height: "3000px" }} /> */}
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* List og goods */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
              <ProductsGroupList title="Комбо" items={[1, 2, 3, 4, 5]} /> */}
              <ProductCard
                id={1}
                name="Пицца"
                price={100}
                imageUrl="https://media.dodostatic.net/image/r:584x584/01953ced168c758399984df8561623a3.avif"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
