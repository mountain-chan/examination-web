export type UserModel = {
  id: string;
  username: string;
  displayName: string;
  point: number;
};

export type QuestionModel = {
  id: string;
  question: string;
  code: string;
  options: string[];
  correctAnswer: string;
  answer: string;
};
