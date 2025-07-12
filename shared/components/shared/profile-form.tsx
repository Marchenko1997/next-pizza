import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { formRegisterSchema, TFormRegisterValues } from './modals/forms/schemas';
import { User } from '@prisma/client';
import toast from 'react-hot-toast';


interface Props {
  data: User;
}

export const ProfileForm: React.FC<Props> = ({ data }) => {

    const form = useForm({
      resolver: zodResolver(formRegisterSchema),
      defaultValues: {
        fullName: data.fullName,
        email: data.email,
        password: "",
        confirmPassword: "",
      },
    });
    
    const onSubmit = async (data: TFormRegisterValues) => {
      try {
        await updateUserInfo({
          email: data.email,
          fullName: data.fullName,
          password: data.password,
        });

        toast.error("Данные обновлены 📝", {
          icon: "✅",
        });
      } catch (error) {
        return toast.error("Ошибка при обновлении данных", {
          icon: "❌",
        });
      }
    };

  return (
    <div className={className}></div>
  );
};