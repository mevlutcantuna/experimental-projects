import { useTourItem } from "@dopt/react-tour";
import { OverlayPanel } from "primereact/overlaypanel";
import RichText from "@dopt/react-rich-text";
import { Button } from "primereact/button";
import { useCallback, useEffect, useRef, useState } from "react";

interface DoptTourItemOverlayPanelProps {
  blockId: string;
}

const DoptTourItemOverlayPanel = ({
  blockId
}: DoptTourItemOverlayPanelProps) => {
  const tourItem = useTourItem(blockId);
  const overlayPanel = useRef<OverlayPanel>(null);
  const [targetElement, setTargetElement] = useState<HTMLElement>();
  const placeholder =
    (tourItem.title as string).split(" ").splice(-1)[0] ===
    "--placeholder=right"
      ? "right"
      : "bottom";
  const getTargetElement = useCallback(() => {
    const el = document.querySelector<HTMLElement>(
      `[data-onboarding="${tourItem.id}"]`
    );
    return el;
  }, [tourItem.id]);

  useEffect(() => {
    const check = () => {
      setTargetElement(getTargetElement() as HTMLElement);
    };

    const intervalId = window.setInterval(() => {
      check();
    }, 100);

    check();

    return () => {
      window.clearInterval(intervalId);
    };
  }, [getTargetElement]);

  useEffect(() => {
    if (overlayPanel && targetElement && tourItem.active) {
      const overlayPanelCurrent = overlayPanel.current;
      overlayPanelCurrent?.show(
        { currentTarget: targetElement } as any,
        targetElement
      );

      return () => {
        overlayPanelCurrent?.hide();
      };
    }
  }, [targetElement, tourItem.active]);

  return (
    <OverlayPanel
      ref={overlayPanel}
      transitionOptions={{
        addEndListener: () => undefined,
        onEntering: () => {
          const overlayElement = overlayPanel.current?.getElement();
          const targetElement = getTargetElement();

          if (overlayElement && targetElement) {
            const targetBCR = targetElement.getBoundingClientRect();

            if (placeholder === "right") {
              overlayElement.style.top = `${targetBCR.top}px`;
              overlayElement.style.left = `${targetBCR.right}px`;
            }
          }
        }
      }}
    >
      <h1>{tourItem.title}</h1>
      <RichText>{tourItem.body}</RichText>
      <div className="flex">
        {tourItem.index !== 0 && tourItem.backLabel && (
          <Button
            onClick={() => tourItem.back()}
            type="button"
            label={tourItem.backLabel}
            severity="secondary"
          />
        )}

        {tourItem.nextLabel && (
          <Button
            type="button"
            label={tourItem.nextLabel}
            onClick={() => tourItem.next()}
            severity="secondary"
          />
        )}
      </div>
    </OverlayPanel>
  );
};

export default DoptTourItemOverlayPanel;
