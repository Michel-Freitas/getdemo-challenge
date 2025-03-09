import { useState } from "react";
import { FrameResponse } from "../types/frameResponse.types";
import { scriptContentEditableText } from "../../../shared/utils/scriptContentEditableText.utils";

interface DataMessage {
  oldTag: string;
  newTag: string;
}

const useFrame = () => {
  const [frame, setFrame] = useState<FrameResponse>();
  const [htmlContentView, setHtmlContentView] = useState<string>("");

  const viewFrame = (frame: FrameResponse) => {
    setFrame(frame);

    setHtmlContentView(frame.html + scriptContentEditableText);
  };

  const receberMensagem = (evento: MessageEvent<DataMessage>) => {
    const { newTag, oldTag } = evento.data;
    setHtmlContentView((state) => state.replace(oldTag, newTag));
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
  };
};

export default useFrame;
