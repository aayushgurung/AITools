import React, { ReactNode } from 'react';
import { useDraggable } from '@dnd-kit/core';

interface DraggableProps {
  id: string;
  children: ReactNode;
}

const Draggable: React.FC<DraggableProps> = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const style: React.CSSProperties | undefined = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}

export default Draggable;
