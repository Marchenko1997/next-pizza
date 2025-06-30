// shared/components/shared/adress-input-wrapper.tsx
"use client";

import dynamic from "next/dynamic";
import { ComponentType } from "react";

const AdressInput = dynamic(
  () => import("./adress-input").then((mod) => mod.AdressInput),
  { ssr: false }
) as ComponentType<{ onChange?: (value?: string) => void }>;

export default AdressInput;  