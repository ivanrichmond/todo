import { createContext, ReactNode, useContext, useState } from "react";

// This next line is confusing.  The Notice contructor has a type of type TypeOfNotice.
// The type for the entire Notice itself is NoticeType.  TODO: Redo these type declarations in class?
import Notice, {Message, NoticeType, TypeOfNotice} from '../classes/Notice'

export type NoticeContextType = {
    notice: NoticeType;
    createNotice: (message: Message, type?: TypeOfNotice) => void; 
    deleteNotice: () => void;
}

export const NoticeContext = createContext<NoticeContextType>({
    notice: {message: '', sendToConsole: () => {}, type: ''}, 
    createNotice: () => {}, 
    deleteNotice: () => {}
});

type NoticeProviderProps = {
    children?: ReactNode
}

export const NoticeProvider = ({ children }: NoticeProviderProps) => {
    const defaultNotice = {message: '', type: '', sendToConsole: () => {}}
    const [notice, setNotice] = useState<NoticeType>({message: '', sendToConsole: () => {}, type: ''})

    const createNotice = (message: Message = '', type: TypeOfNotice = 'info') => {
        const newNotice: NoticeType = new Notice(message, type)
        newNotice.sendToConsole()
        setNotice(newNotice)
    }

    const deleteNotice = () => {
        setNotice(defaultNotice)
    }

    const value = {notice, createNotice, deleteNotice}
    return <NoticeContext.Provider value={value}>{children}</NoticeContext.Provider>;
};

export const useNotice = () => {
  return useContext(NoticeContext);
};