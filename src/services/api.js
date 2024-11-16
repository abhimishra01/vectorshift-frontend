import axios from "axios";

export const parsePipeline = async (payload) => {
  try {
    console.log("PAYLOAD");
    console.log(payload);
    const response = await axios.post(
      "http://127.0.0.1:8000/pipelines/parse",
      payload
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
};
