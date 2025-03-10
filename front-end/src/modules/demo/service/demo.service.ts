import { api } from "../../../config/api.config";
import { DemoDetailsResponse, DemoResponse } from "../types/demoResponse.types";

const demoService = () => {
  const getListDemos = async (): Promise<DemoResponse[]> => {
    try {
      const { data } = await api.get("/v1/demo");
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getDemoById = async (id: string): Promise<DemoDetailsResponse> => {
    try {
      const { data } = await api.get(`/v1/demo/${id}`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { getListDemos, getDemoById };
};

export default demoService;
