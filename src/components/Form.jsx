import { useState, useEffect } from "react";

function Form({ addOrUpdateItem, itemToEdit }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (itemToEdit) {
      setInputValue(itemToEdit.value);
      setError("");
    } else {
      setInputValue("");
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setError("No puedes agregar un elemento vacío.");
      return;
    }

    setError("");
    addOrUpdateItem(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          className="input-texto"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe un elemento"
        />
        <button className="btn-agregar" type="submit">
          {itemToEdit ? "Actualizar" : "Agregar"}
        </button>
      </form>

      {error && <p className="mensaje-error">{error}</p>}
    </>
  );
}

export default Form;