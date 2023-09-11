import { useBlock } from "@dopt/react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface DoptCustomMetaProps {
  blockId: string;
}

const DoptCustomMeta = ({ blockId }: DoptCustomMetaProps) => {
  const location = useLocation();
  const [block] = useBlock<["complete"]>(blockId);
  const started = useRef(false);

  useEffect(() => {
    if (
      location.pathname === block.field("start-expression") &&
      block.state.active &&
      started
    ) {
      block.transition("complete");
      started.current = true;
    }
  }, [block, location.pathname]);

  return null;
};

export default DoptCustomMeta;
