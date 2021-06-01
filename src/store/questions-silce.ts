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
    updateAnswer(state, action: { payload: { indexQuestion: number; answer: string } }) {
      const { indexQuestion, answer } = action.payload;
      state[indexQuestion].answer = answer;
    },
  },
});

export const questionActions = questionsSlice.actions;

export default questionsSlice;
