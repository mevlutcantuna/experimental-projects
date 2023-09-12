import { useTourItem } from "@dopt/react-tour";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import RichText from "@dopt/react-rich-text";

interface DoptTourItemProps {
  blockId: string;
}
const DoptTourItemDialog = ({ blockId }: DoptTourItemProps) => {
  const tourItem = useTourItem(blockId);

  return (
    <Dialog
      footer={
        <>
          {tourItem.backLabel && tourItem.index !== 0 && (
            <Button
              label="Back"
              onClick={() => tourItem.back()}
              severity="secondary"
              type="button"
            />
          )}
          {tourItem.nextLabel && (
            <Button
              label="Next"
              onClick={() => tourItem.next()}
              severity="secondary"
              type="button"
            />
          )}
        </>
      }
      header={tourItem.title}
      onHide={() => tourItem.tour.dismiss()}
      visible={tourItem.active}
    >
      <RichText>{tourItem.body}</RichText>
    </Dialog>
  );
};

export default DoptTourItemDialog;
