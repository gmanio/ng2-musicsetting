export enum API_METHOD {
  POST,
  GET,
  PUT,
  DELETE
}

export const API_CMD = {
  TEST_CMD: { url: '/api/test/${ID}/cmd', method: API_METHOD.POST }
};
