type Props = {
  text?: string;
  className?: React.HTMLProps<HTMLElement>["className"];
};
const Text: React.FC<Props> = ({ text = "", className }) => {
  return (
    <text className={`font-sans text-lg text-center ${className}`}>{text}</text>
  );
};

export default Text;
