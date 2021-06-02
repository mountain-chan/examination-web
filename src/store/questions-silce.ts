import { createSlice } from "@reduxjs/toolkit";
import { QuestionModel } from "../models";
import { QUESTIONS } from "../utils";

const initQuestions: QuestionModel[] = QUESTIONS;

const questionsSlice = createSlice({
  name: "questions",
  initialState: initQuestions,
  reducers: {
    updateQuestions(state, action: { payload: QuestionModel[] }) {
      const questions = action.payload;
      state = questions;
    },
    updateOneAnswer(state, action: { payload: { indexQuestion: number; answer: string } }) {
      const { indexQuestion, answer } = action.payload;
      state[indexQuestion].answers = [answer];
    },
    updateMultiAnswers(state, action: { payload: { indexQuestion: number; option: string; checked: boolean } }) {
      const { indexQuestion, option, checked } = action.payload;
      if (checked) {
        state[indexQuestion].answers.push(option);
      } else {
        state[indexQuestion].answers = state[indexQuestion].answers.filter((item) => item !== option);
      }
    },
  },
});

export const questionActions = questionsSlice.actions;

export default questionsSlice;
