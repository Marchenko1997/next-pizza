"use client";
import { FormProvider, useForm } from "react-hook-form";
import { useCart } from "@/shared/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    CheckoutSidebar, Container, Title,
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
} from "@/shared/components";
import {
  checkoutFormSchema,
  CheckoutFormValues,
} from "@/shared/constants";

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  };

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity =
      type === "plus" ? quantity + 1 : Math.max(quantity - 1, 1);
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* Левая часть */}
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                items={items}
              />
              <CheckoutPersonalForm />
              <CheckoutAddressForm />
            </div>
            {/* Правая часть */}
            <div className="w-[450px]">
              <CheckoutSidebar totalAmount={totalAmount} loading={loading} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
