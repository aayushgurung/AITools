// // Given array of file names
// const fileNames = ['MidDefense(1).pdf', 'Toyota Strategic plan.docx.pdf', 'MBA6101 Presentation schedule.pdf', 'receipt_Toyota Strategic plan.docx.pdf', 'Dialnet-WhollyOwnedSubsidiariesVersusJointVentures-2317284.pdf'];

// // Given array of File objects
// const pdfFiles = [
//   { name: 'MidDefense(1).pdf', /* other properties */ },
//   { name: 'MBA6101 Presentation schedule.pdf', /* other properties */ },
//   { name: 'Toyota Strategic plan.docx.pdf', /* other properties */ },
//   { name: 'receipt_Toyota Strategic plan.docx.pdf', /* other properties */ },
//   { name: 'Dialnet-WhollyOwnedSubsidiariesVersusJointVentures-2317284.pdf', /* other properties */ }
// ];

// // Create a mapping of file names to their corresponding File objects
// const fileMap = pdfFiles.reduce((map, file) => {
//   map[file.name] = file;
//   return map;
// }, {});

// // Sort the pdfFiles array based on the order of file names
// pdfFiles.sort((a, b) => {
//   const nameA = a.name;
//   const nameB = b.name;
//   return fileNames.indexOf(nameA) - fileNames.indexOf(nameB);
// });

// // pdfFiles array is now sorted based on the order of file names
// console.log(pdfFiles);

// 'use client'
// import React, { useState } from 'react';
// import { DndContext } from '@dnd-kit/core';

// import Droppable from './Droppable';
// import Draggable from './Draggable';
// const App: React.FC = () => {
//   const containers = ['A', 'B', 'C'];
//   const [parent, setParent] = useState<string | null>(null);
//   const draggableMarkup = (
//     <Draggable id="draggable">Drag me</Draggable>
//   );

//   function handleDragEnd(event: any) {
//     const { over } = event;

//     // If the item is dropped over a container, set it as the parent
//     // otherwise reset the parent to `null`
//     setParent(over ? over.id : null);
//   }

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       {parent === null ? draggableMarkup : null}

//       {containers.map((id) => (
//         <Droppable key={id} id={id}>
//           {parent === id ? draggableMarkup : 'Drop here'}
//         </Droppable>
//       ))}
//     </DndContext>
//   );
// };

// export default App;
"use client";

type ayush = {
  id?: number,
  name?: string
}


import React, { FC, useState, useCallback, useRef } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor, 
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Grid from "./Grid";
import SortableItem from "./SortableItem";
import Item from "./Item";

const App: FC = () => {
  // const [items, setItems] = useState<string[]>([]);
  const [items, setItems] = useState<Array<{ id: number; name: string }>>([]);
  const [idCounter, setIdCounter] = useState(0);
  const [pdfFiles, setPdfFiles] = useState<FileList | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const fileInputRef = useRef<HTMLInputElement>(null);
  console.log(items);

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((currentItems) => {
        // const oldIndex = currentItems.indexOf(active.id as string);
        // const newIndex = currentItems.indexOf(over!.id as string);
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over!.id);

        return arrayMove(currentItems, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const newItems = [...items];
    if (fileInput.files) {
      const newFiles = Array.from(fileInput.files);
      console.log("NEW FILES UPLOADED", newFiles)
      for(let i=0;i<fileInput.files.length;i++){
        const file =fileInput.files[i]
        setIdCounter(idCounter+1)
        newItems.push({id:idCounter,name:file.name})
      }
      setItems(newItems);
      setPdfFiles(fileInput.files);
    }
  };
  console.log("PDF FILES STORED", pdfFiles);
  const handleChooseMoreFiles = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the selected files
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
        ref={fileInputRef}
        style={{ display: "none" }}
        multiple // Allow multiple file selection
      />
      <button onClick={handleChooseMoreFiles}>Choose More Files</button>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <Grid columns={5}>
            {items.map((item) => (
              <SortableItem key={item.id} id ={item} />
            ))}
          </Grid>
        </SortableContext>
        <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
          {activeId ? <Item id={activeId} isDragging /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default App;

// import React, { CSSProperties, useState } from "react";
// import { DndContext } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   useSortable,
//   rectSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import Grid from "./Grid";

// function SortableItem({ item }: any) {
//   const { id, name } = item;
//   const {
//     isDragging,
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//   } = useSortable({ id: id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };
//   const inlineStyles: CSSProperties = {
//     transformOrigin: "50% 5%",
//     height: "140px",
//     width: "140px",
//     borderRadius: "10px",
//     backgroundColor: "#ffffff",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     boxShadow: isDragging
//     ? "rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px"
//     : "rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px",
//     zIndex:isDragging?"10":"0",
//     ...style,
//   };
//   return (
//     <li
//       ref={setNodeRef}
//       style={inlineStyles}
//       {...attributes}
//       {...listeners}
//       draggable
//     >
//       Movement for {name}
//     </li>
//   );
// }

// export default function App() {
//   // const [items, setItems] = useState<Array<{ id: number; name: string }>>([]);
//   const [items, setItems] = useState([
//     { id: 1, name: "Items One" },
//     { id: 2, name: "Item 2" },
//     { id: 3, name: "Items 3" }
//   ]);
//   const [idCounter, setIdCounter] = useState(1);
//   const handleDragEnd = (event: any) => {
//     console.log(event);
//     const { active, over } = event;

//     if (active.id !== over.id) {
//       setItems((items) => {
//         console.log(items);
//         const oldIndex = items.findIndex((item) => item.id === active.id);
//         const newIndex = items.findIndex((item) => item.id === over.id);
//         const newItemsArray = arrayMove(items, oldIndex, newIndex);
//         return newItemsArray;
//       });
//     }
//   };
//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newItems = [...items];
//     const files = event.target.files;

//     if (files) {
//       for (let i = 0; i < files.length; i++) {
//         const file = files[i];
//         setIdCounter(idCounter + 1);

//         newItems.push({ id: idCounter, name: file.name });
//       }

//       setItems(newItems);
//     }
//   };
//   console.log(items);

//   return (
//     <div className="App">
//       <h1>Sorting Example</h1>
//       <input type="file" multiple onChange={handleFileUpload} />
//       <DndContext onDragEnd={handleDragEnd}>
//         <SortableContext items={items} strategy={rectSortingStrategy}>
//           <Grid columns={5}>
//             {items.map((item) => (
//               <SortableItem key={item.id} item={item} />
//             ))}
//           </Grid>
//         </SortableContext>
//       </DndContext>
//     </div>
//   );
// }
