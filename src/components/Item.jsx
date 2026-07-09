function Item({ item, deleteItem, editItem, toggleComplete }) {
  return (
    <li className="item">
      <span className={item.completed ? "texto-item completado" : "texto-item"}>
        {item.value}
      </span>

      <div className="acciones">
        <button className="btn-completar" onClick={() => toggleComplete(item.id)}>
          {item.completed ? "Desmarcar" : "Completar"}
        </button>
        <button className="btn-editar" onClick={() => editItem(item)}>
          Editar
        </button>
        <button className="btn-eliminar" onClick={() => deleteItem(item.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default Item;