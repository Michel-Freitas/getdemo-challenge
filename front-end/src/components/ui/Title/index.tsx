type Props = {
  text?: string;
  className?: React.HTMLProps<HTMLElement>["className"];
};
const Title: React.FC<Props> = ({ text = "", className }) => {
  return (
    <h1 className={`font-sans text-4xl font-medium ${className}`}>{text}</h1>
  );
};

export default Title;
