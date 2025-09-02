// components/DragDropBuilder.tsx
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";

const DragDropBuilder = () => {
  const [workflow, setWorkflow] = useState<string[]>([]);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;
    const items = Array.from(workflow);
    const [moved] = items.splice(source.index, 1);
    items.splice(destination.index, 0, moved);
    setWorkflow(items);
  };

  const actions = ["Buy Token", "Sell Token", "Set Price Trigger"];

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 p-4">
        <div className="w-1/4 bg-gray-100 p-2 rounded">
          <h3 className="text-lg font-bold mb-2">Actions</h3>
          <Droppable droppableId="actions">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {actions.map((action, index) => (
                  <Draggable key={action} draggableId={action} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-2 mb-2 bg-white rounded shadow cursor-move"
                      >
                        {action}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className="w-3/4 bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-bold mb-2">Workflow Canvas</h3>
          <Droppable droppableId="canvas">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="min-h-[400px] border-dashed border-2 border-gray-300 p-4"
              >
                {workflow.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-2 mb-2 bg-blue-100 rounded shadow"
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default DragDropBuilder;