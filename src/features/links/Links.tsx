import * as React from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CardHeader from "../../components/CardHeader/CardHeader";
import LinkInput from "../../components/CardInput/Link/Link";
import Select from "../../components/CardInput/Select/Select";
import { ReactComponent as DraggIcon } from "../../assets/icons/draggble.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../data/store/index";
import { showModal } from "../../data/slices/modals";
import { useState } from "react";
import { removeUserLink } from "../../data/slices/user";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./components/SortableItem";
export default function Links() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: any) => state.user);
  const [UserLinks, setUserLinks] = useState(user?.links);
  console.log(UserLinks, "links");
  React.useEffect(() => setUserLinks(user?.links), [user?.links]);
  const [selectedOption, setSelectedOption] = useState("GitHub");
  const [isDragging, setIsDragging] = useState(false);
  const sensors = 
  (useSensor(MouseSensor), useSensor(TouchSensor));
  function handleDragStart(event) {
    event.stopPropagation();
    setIsDragging(true);
  }
  function handleDragEnd(event) {
    setIsDragging(false);
    const { active, over } = event;
    if (active.id !== over.id) {
      setUserLinks((items: any) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
  return (
    <div className="Card__content Links">
      <CardHeader
        title={"Customize your links"}
        subtitle={
          "Add , edit and remove links below and then share all your profiles with the world!"
        }
      />
      <div className="Links__button" onClick={() => dispatch(showModal())}>
        <PlusIcon />
        <p>Add new link</p>
      </div>
      <div className="Links__Container">
        <DndContext
          autoScroll={false}
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}>
          <SortableContext
            items={UserLinks}
            strategy={verticalListSortingStrategy}>
            {UserLinks.map(
              (link: { url: string; origin: string }, i: number) => (
                <SortableItem
                  key={link.origin}
                  id={link}
                  someoneIsDragging={isDragging}>
                  <div className="Links__linkContainer">
                    <div className="Links__linkContainer__headerblock">
                      <p className="Links__linkContainer__title">
                        <DraggIcon />
                        Link #{i + 1}
                      </p>
                      <p
                        className="remove"
                        onClick={() => {
                          console.log("first");
                          dispatch(removeUserLink(link.origin));
                        }}>
                        Remove
                      </p>
                    </div>
                    <LinkInput label={"link"} value={link.url} />
                    <Select
                      selectedOption={link.origin}
                      setSelectedOption={setSelectedOption}
                    />
                  </div>
                </SortableItem>
              )
            )}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
