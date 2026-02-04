import React from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}