import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || [];
  });

  const [itemToEdit, setItemToEdit] = useState(null);
  const [search, setSearch] = useState("");

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
      setItems([...items, { id: Date.now(), value, completed: false }]);
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

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const clearAll = () => {
    const confirmar = window.confirm("¿Seguro que deseas borrar todos los elementos?");
    if (confirmar) {
      setItems([]);
      setItemToEdit(null);
    }
  };

  const filteredItems = items.filter((item) =>
    item.value.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1 className="titulo">CRUD con LocalStorage</h1>
      <p className="contador">Total: {items.length}</p>

      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />

      <input
        className="input-buscar"
        type="text"
        placeholder="Buscar elemento..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className="btn-borrar-todo" onClick={clearAll}>
        Borrar todos
      </button>

      <List
        items={filteredItems}
        deleteItem={deleteItem}
        editItem={editItem}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;