import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || [];
  });

  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(
        items.map((item) =>
          item.id === itemToEdit.id ? { ...item, value } : item
        )
      );
      setItemToEdit(null);
    } else {
      setItems([...items, { id: Date.now(), value }]);
    }
  };

  const deleteItem = (id) => {
    const confirmar = window.confirm("¿Seguro que deseas eliminar este elemento?");
    if (confirmar) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="app">
      <h1 className="titulo">CRUD con LocalStorage</h1>
      <p className="contador">Total: {items.length}</p>

      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />

      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default App;