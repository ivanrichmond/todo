import { createContext, ReactNode, useContext, useState } from "react";

// This next line is confusing.  The Notice contructor has a type of type TypeOfNotice.
// The type for the entire Notice itself is NoticeType.  TODO: Redo these type declarations in class?
import Notice, {Message, NoticeType, TypeOfNotice} from '../classes/Notice'

export const NoticeContext = createContext(null);

type NoticeProviderProps = {
    children?: ReactNode
}

export const NoticeProvider = ({ children }: NoticeProviderProps) => {
    const [notice, setNotice] = useState<NoticeType | null>(null)

    const createNotice = (message: Message, type: TypeOfNotice = 'info') => {
        const newNotice: NoticeType = new Notice(message, type)
        newNotice.sendToConsole()
        setNotice(newNotice)
    }

    const deleteNotice = () => {
        setNotice(null)
    }

    const value = {notice, createNotice, deleteNotice}
    //TODO: Fix the following TypeScript error, which occurs without @ts-expect-error.
    // "Type '{ notice: NoticeType | null; createNotice: (message: Message, type?: TypeOfNotice) 
    // => void; deleteNotice: () => void; }' is not assignable to type 'null'."
    // @ts-expect-error
    return <NoticeContext.Provider value={value}>{children}</NoticeContext.Provider>;
};

export const useNotice = () => {
  return useContext(NoticeContext);
};