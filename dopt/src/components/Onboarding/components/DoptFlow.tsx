import { useFlow } from "@dopt/react";
import type { Block } from "@dopt/react";
import DoptCustomMeta from "./DoptCustomMeta";
import DoptTourItemDialog from "./DoptTourItemDialog";
import DoptTourItemOverlayPanel from "./DoptTourItemOverlayPanel";

interface DoptFlowProps {
  flowId: string;
}

const DoptFlow = ({ flowId }: DoptFlowProps) => {
  const [flow] = useFlow(flowId);

  return (
    <>
      {flow.blocks.map((block) => {
        if (block.type === "custom" && block.sid === `${flowId}.meta`) {
          return renderMeta(block);
        }

        if (block.type === "tourItem") {
          return renderTourItem(block);
        }

        return null;
      })}
    </>
  );

  function renderMeta(block: Block) {
    return <DoptCustomMeta blockId={block.sid} key={block.sid} />;
  }

  function renderTourItem(block: Block) {
    const title = block.field("title");
    const blockType =
      typeof title === "string" && title.split(" ").splice(-1)[0];

    if (blockType === "--dialog") {
      return <DoptTourItemDialog blockId={block.sid} key={block.sid} />;
    } else {
      return <DoptTourItemOverlayPanel blockId={block.sid} key={block.sid} />;
    }
  }
};

export default DoptFlow;
