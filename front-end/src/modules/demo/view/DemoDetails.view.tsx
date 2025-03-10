import { useParams } from "react-router";
import { useEffect } from "react";
import { formatDate } from "../../../shared/utils/formatDate";
import useDemo from "../hooks/useDemo";
import useFrame from "../../frame/hooks/useFrame";
import Title from "../../../components/ui/Title";
import Button from "../../../components/ui/Button";
import Text from "../../../components/ui/Text";

const DemoDetailsView: React.FC = () => {
  const { id } = useParams();
  const { demo, getDemoDetails } = useDemo();
  const { updateFrame } = useFrame();
  const { htmlContentView, viewFrame, injectListener, removeListener, frame } =
    useFrame();

  useEffect(() => {
    if (!id) return;
    getDemoDetails(id);
    injectListener();

    return () => {
      removeListener();
    };
  }, []);

  return (
    <div className="flex flex-row w-full gap-6 pt-3 pr-3 pl-3">
      <div className="flex gap-2.5 flex-col">
        <Title text={demo?.name} />
        <div className="flex gap-1.5 flex-col">
          <Text text={"Data da Criação: "} className="font-medium" />
          <Text text={formatDate(demo?.createdAt)} />
        </div>
        <div className="flex gap-1.5 flex-col">
          <Text text={"Frames: "} className="font-medium" />
          <Text text={demo?.frames.length.toString()} />
        </div>
        <div className="flex flex-wrap flex-col gap-2.5">
          {demo?.frames.map((item) => (
            <Button
              key={item.id}
              handlerClick={() => viewFrame(item)}
              text={`Visualizar ${item.order}`}
            />
          ))}

          <Button
            type="success"
            text="Salvar"
            className="mt-5"
            disabled={!frame}
            handlerClick={() =>
              updateFrame(frame!.id!, demo!.id!, htmlContentView)
            }
          />
        </div>
      </div>
      <div className="w-full flex flex-row gap-4 h-screen">
        {htmlContentView && (
          <iframe
            style={{ width: "100%", height: "100%", border: "none" }}
            id="meuIframe"
            srcDoc={htmlContentView}
            sandbox="allow-scripts"
            title="Embedded Content"
          />
        )}
      </div>
    </div>
  );
};

export default DemoDetailsView;
