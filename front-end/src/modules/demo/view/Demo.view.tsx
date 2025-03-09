import { useNavigate } from "react-router";
import useDemo from "../hooks/useDemo";
import Button from "../../../components/ui/Button";
import Title from "../../../components/ui/Title";
import Text from "../../../components/ui/Text";

const DemoView: React.FC = () => {
  const navigate = useNavigate();
  const { listDemos } = useDemo();

  return (
    <div className="w-full flex gap-5 flex-col">
      <Title text="Lista de Demos" />
      <div className="w-full flex flex-row gap-4 flex-wrap">
        {listDemos.map((item) => (
          <div
            className="p-[1rem] rounded-[8px] border-[1px] border-[#646cff] border-solid w-fit flex flex-col gap-2.5"
            key={item.id}
          >
            <Text text={item.name} />
            <Button
              text="Visualizar"
              handlerClick={() => navigate(`/demo/${item.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoView;
