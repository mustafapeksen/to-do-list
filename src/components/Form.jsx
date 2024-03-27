import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";

function Form(props) {
  // Yeni öğenin değerini tutacak state
  const [newItem, setNewItem] = useState("");

  // Yeni öğe ekleme işlevi
  function handleClick(event) {
    event.preventDefault();
    // Üst bileşene yeni öğe ekler
    props.onAdd((prevItems) => [...prevItems, newItem]);
    // Yeni öğe ekledikten sonra input alanını temizler
    setNewItem("");
  }

  // Input alanındaki değeri güncellemek için işlev
  function handleChange(event) {
    const { value } = event.target;
    // Input alanının değerini günceller
    setNewItem(value);
  }

  return (
    <form>
      {/* Form elemanı submit olduğunda handleClick fonksiyonunu çağırır */}
      <input
        type="text"
        name="newItem"
        placeholder="New To-Do"
        autoComplete="off"
        autoFocus={true}
        value={newItem} // Input alanının değerini newItem state'ine bağlar
        onChange={handleChange}
      />
      <AddBoxIcon fontSize="large" className="add" onClick={handleClick} />
      {/* onClick yerine onSubmit kullanır */}
    </form>
  );
}

export default Form;
