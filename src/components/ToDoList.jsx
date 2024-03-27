import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function ToDoList(props) {
  // Düzenlenen öğenin değerini tutacak state
  const [editValue, setEditValue] = useState("");
  // Düzenleme modunun etkin olup olmadığını tutacak state
  const [isEditing, setIsEditing] = useState(false);

  // Görev öğesini silmek için işlev
  function deleteQuest(event) {
    event.preventDefault();
    // Üst bileşene silinecek öğenin id'sini iletir
    props.onDelete(props.id);
  }

  // Düzenleme modunu etkinleştirmek için işlev
  function handleEditClick() {
    // Düzenlenmek üzere öğenin değerini alır
    setEditValue(props.value);
    // Düzenleme modunu etkinleştirir
    setIsEditing(true);
  }

  // Değişiklikleri kaydetmek için işlev
  function handleSaveClick() {
    // Değiştirilmiş değeri üst bileşene ileterek düzenlemeyi tamamlar
    props.onEdit(props.id, editValue);
    // Düzenleme modunu devre dışı bırakır
    setIsEditing(false);
  }

  return (
    <div className="item">
      {isEditing ? (
        // Düzenleme modunda ise, bir input alanı ve kaydet/düzenleme iptal düğmeleri gösterir
        <>
          <input
            type="text"
            value={editValue}
            onChange={(event) => setEditValue(event.target.value)}
          />
          <CheckCircleIcon onClick={handleSaveClick} />
          <CancelIcon id="cancel-icon" onClick={() => setIsEditing(false)} />
        </>
      ) : (
        // Düzenleme modunda değilse, öğeyi gösterir ve düzenle düğmesini gösterir
        <>
          <DeleteIcon onClick={deleteQuest} />
          <li className="item">{props.value}</li>
          <EditIcon onClick={handleEditClick} />
        </>
      )}
    </div>
  );
}

export default ToDoList;
