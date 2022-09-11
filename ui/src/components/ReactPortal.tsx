import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

interface Props {
  children: React.ReactNode;
  wrapperId: string;
}

const ReactPortal: React.FC<Props> = ({ children, wrapperId = "react-portal-wrapper" }) => {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);


    useLayoutEffect(() => {
        let systemCreated = false;
        let element = document.getElementById(wrapperId);

        if (!element) {
          element = createWrapperAndAppendToBody(wrapperId);
          systemCreated = true;
        }
        setWrapperElement(element);

        return () => {
            if (systemCreated && element?.parentNode) {
              element.parentNode.removeChild(element);
            }
          }
      }, [wrapperId]);

      if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement as Element);
};

export default ReactPortal;
