import React, { createContext, useState, ReactNode, useContext } from "react";

type Feedback = {
  name: string;
  email: string;
  rating: number;
  feedback: string;
};

type FeedbackContextType = {
  feedback: Feedback;
  setFeedback: React.Dispatch<React.SetStateAction<Feedback>>;
};

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [feedback, setFeedback] = useState<Feedback>({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  });

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }
  return context;
};
