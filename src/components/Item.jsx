function Item({ item, deleteItem, editItem }) {
  return (
    <li className="item">
      <span className="texto-item">{item.value}</span>

      <div className="acciones">
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