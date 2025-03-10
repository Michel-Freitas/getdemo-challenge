import { useEffect, useState } from "react";
import { DemoDetailsResponse, DemoResponse } from "../types/demoResponse.types";
import demoService from "../service/demo.service";

const useDemo = () => {
  const [listDemos, setListDemos] = useState<DemoResponse[]>([]);
  const [demo, setDemo] = useState<DemoDetailsResponse>();

  const { getListDemos, getDemoById } = demoService();

  const updateListDemos = async () => {
    const result = await getListDemos();
    setListDemos(result);
  };

  useEffect(() => {
    updateListDemos();
  }, []);

  const getDemoDetails = async (id: string) => {
    const result = await getDemoById(id);
    setDemo(result);
  };

  return { listDemos, demo, getDemoDetails };
};

export default useDemo;
