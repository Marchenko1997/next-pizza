import React from "react";
import { useForm } from "react-hook-form";
import { TFormLoginValues } from "./schemas";

interface Props {
  onClose?: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
    const form =
      useForm <
      TFormLoginValues>({
        defaultValues: {
          email: "",
          password: "",
        },
      });

  return <div></div>;
};
