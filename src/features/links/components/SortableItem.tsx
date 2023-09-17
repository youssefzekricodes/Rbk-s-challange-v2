import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

export function SortableItem({
  id,
  children,
  someoneIsDragging,
}: {
  someoneIsDragging: any;
  id: any;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "100%",

  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}  >
      {children}
    </div>
  );
}
