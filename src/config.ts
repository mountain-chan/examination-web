export const BASE_URL = "http://sv2.vn.boot.ai:5000";

export const app = {
  secretKey: "secure-chat",
  timeout: 2000,
};

export const rest = {
  login: () => "/api/v1/auth",
  getQuestions: () => "/api/v1/questions",
  finishExam: () => "/api/v1/exams/finish",
  getAllUsers: () => "/api/v1/users",
  getUserById: (userId: string) => `/api/v1/users/${userId}`,
};
