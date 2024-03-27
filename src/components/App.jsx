import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ToDoList from "./ToDoList";
import Form from "./Form";

function App() {
  const [toDoItems, setToDoItems] = useState(["Çamaşır Yıka", "Bulaşık Yıka"]);

  function deleteItem(id) {
    setToDoItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function editItem(id, newValue) {
    setToDoItems((prevItems) => {
      return prevItems.map((item, index) => {
        if (index === id) {
          return newValue;
        }
        return item;
      });
    });
  }

  return (
    <div className="container">
      <Header />
      <div className="box">
        <ul>
          {toDoItems.map((value, index) => (
            <ToDoList
              item={toDoItems}
              onEdit={editItem}
              onDelete={deleteItem}
              value={value}
              key={index}
              id={index}
            />
          ))}
        </ul>
        <Form onAdd={setToDoItems} />
      </div>
      <Footer />
    </div>
  );
}
export default App;
