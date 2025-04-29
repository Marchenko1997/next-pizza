import React from "react";
import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useSet } from "react-use";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIngredients: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (values: string[] = []): ReturnProps => {


  const [selectedIds, { toggle }] = useSet(new Set<string>([values]));

  return {
    ingredients,
    loading,
    onAddId: toggle,
    selectedIngredients: selectedIds,
  };
};
