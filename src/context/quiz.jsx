import { createContext } from "react";

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = {name: "quiz"};

    return <QuizProvider value={value}>{children}</QuizProvider>
};