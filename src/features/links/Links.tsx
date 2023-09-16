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
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
export default function Links() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: any) => state.user);
  const UserLinks = user?.links
  const [selectedOption, setSelectedOption] = useState("GitHub");
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
        <DndProvider backend={HTML5Backend}>
          {UserLinks.map(
            (link: { url: string; origin: string }, i: number) => (
              <div className="Links__linkContainer">
                <div className="Links__linkContainer__headerblock">
                  <p className="Links__linkContainer__title">
                    <DraggIcon />
                    Link #{i + 1}
                  </p>
                  <p
                    className="remove"
                    onClick={() => dispatch(removeUserLink(link.origin))}
                  >
                    Remove
                  </p>
                </div>
                <LinkInput label={"link"} value={link.url} />
                <Select
                  selectedOption={link.origin}
                  setSelectedOption={setSelectedOption}
                />
              </div>
            )
          )}
        </DndProvider>
      </div>
    </div>
  );
}
