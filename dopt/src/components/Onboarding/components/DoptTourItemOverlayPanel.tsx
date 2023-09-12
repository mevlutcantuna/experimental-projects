import { useTourItem } from "@dopt/react-tour";

interface DoptTourItemOverlayPanelProps {
  blockId: string;
}

const DoptTourItemOverlayPanel = ({
  blockId
}: DoptTourItemOverlayPanelProps) => {
  const tourItem = useTourItem(blockId);
  console.log(tourItem.active);
  return <div>{tourItem.active}</div>;
};

export default DoptTourItemOverlayPanel;
