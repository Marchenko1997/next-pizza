"use client";

import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="76f028a991e1aae83693ddcb8ee1a6b2bd6a5494"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
