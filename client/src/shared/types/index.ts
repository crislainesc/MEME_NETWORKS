import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export type ButtonProps = ButtonHTMLAttributes<any> & {
  width: number;
  height: number;
  backgroundColor: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export type ListMemesProps = {
  memes: Array<any>;
  createMeme: (name: string, id: string) => void;
  viewGeneratedMemes: (name: string, character: string, id: string) => void;
  showViewGeneratedMemes: boolean;
};
