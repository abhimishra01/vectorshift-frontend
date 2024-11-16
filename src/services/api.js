import axios from "axios";

export const parsePipeline = async (payload) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/pipelines/parse",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
