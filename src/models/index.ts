export type UserModel = {
  email: string;
  name: string;
  imageUrl: string;
  point: number;
  timeSpend: number;
};

export type TimerModel = {
  seconds: number;
  isFinished: boolean;
  isRunning: boolean;
};

export type QuestionModel = {
  id: string;
  question: string;
  code: string;
  options: string[];
  correctAnswer: string[];
  answers: string[];
  marked: boolean;
  multiAnswers: boolean;
};
