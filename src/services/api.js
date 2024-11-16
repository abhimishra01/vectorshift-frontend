import axios from "axios";

export const parsePipeline = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/pipelines/parse");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
};
