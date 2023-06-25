import React, { useEffect, useState } from "react";

interface ResizerProps {
  elementRef: React.RefObject<HTMLDivElement>;
  isOnStart: boolean;
}

const Resizer: React.FC<ResizerProps> = ({
  elementRef,
  isOnStart,
}: ResizerProps) => {
  const [isResizing, setIsResizing] = useState<boolean>(false);

  const resizerOnMouseDown = () => {
    setIsResizing(true);
  };

  useEffect(() => {
    const resizerMouseMove = (event: MouseEvent) => {
      if (isResizing) {
        const element = elementRef.current;
        if (element) {
          element.style.width = `${window.innerWidth - event.clientX + 3}px`;
          element.style.userSelect = "none";
        }
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    document.addEventListener('mousemove', resizerMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', resizerMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <>
      <div
        className="resizer"
        onMouseDown={resizerOnMouseDown}
      ></div>
    </>
  );
};

export default Resizer;
