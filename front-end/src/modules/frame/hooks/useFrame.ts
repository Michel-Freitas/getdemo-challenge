import { useState } from "react";
import { FrameResponse } from "../types/frameResponse.types";
import { scriptContentEditableText } from "../../../shared/utils/scriptContentEditableText.utils";
import frameService from "../service/frame.service";
import useDemo from "../../demo/hooks/useDemo";

interface DataMessage {
  oldTag: string;
  newTag: string;
}

const useFrame = () => {
  const [frame, setFrame] = useState<FrameResponse>();
  const [htmlContentView, setHtmlContentView] = useState<string>("");
  const { putFrame } = frameService();
  const { getDemoDetails } = useDemo();

  const viewFrame = (frame: FrameResponse) => {
    setFrame(frame);

    setHtmlContentView(frame.html + scriptContentEditableText);
  };

  const receberMensagem = (evento: MessageEvent<DataMessage>) => {
    const { newTag, oldTag } = evento.data;
    setHtmlContentView((state) => state.replace(oldTag, newTag));
  };

  const updateFrame = async (
    frameId: string,
    demoId: string,
    htmlContentView: string
  ) => {
    await putFrame(frameId, {
      html: htmlContentView.split("-- REMOVED --")[0],
    });
    await getDemoDetails(demoId);
  };

  const injectListener = () =>
    window.addEventListener("message", receberMensagem);

  const removeListener = () =>
    window.removeEventListener("message", receberMensagem);

  return {
    htmlContentView,
    frame,
    viewFrame,
    setHtmlContentView,
    injectListener,
    removeListener,
    updateFrame,
  };
};

export default useFrame;
