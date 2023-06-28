import { ReactNode } from "react";

export interface ICard {
    title: string;
    text: string;
    btnText: string;
    image?: string;
    children: ReactNode;
}
