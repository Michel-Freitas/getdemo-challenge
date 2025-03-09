import { useEffect, useState } from "react";
import { DemoDetailsResponse, DemoResponse } from "../types/demoResponse.types";
import { FrameResponse } from "../../frame/types/frameResponse.types";
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

  const updateFrame = (frame: FrameResponse) => {
    setDemo((state) => {
      return {
        id: state!.id,
        name: state!.name,
        updatedAt: state!.updatedAt,
        createdAt: state!.createdAt,
        frames: state!.frames.map((item) =>
          item.id === frame.id
            ? { ...frame, html: frame.html?.split("-- REMOVED --")[0] }
            : item
        ),
      };
    });
  };

  const getDemoDetails = async (id: string) => {
    const result = await getDemoById(id);
    setDemo(result);
  };

  return { listDemos, demo, getDemoDetails, updateFrame };
};

export default useDemo;
