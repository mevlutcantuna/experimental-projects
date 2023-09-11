interface DoptTourItemProps {
  blockId: string;
}
const DoptTourItemDialog = ({ blockId }: DoptTourItemProps) => {
  return <div className="w-screen h-screen relative">{blockId}</div>;
};

export default DoptTourItemDialog;
