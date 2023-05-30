import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import ColorBlock from "../ColorBlock";
import "./style.css";
import { colord, extend } from "colord";
import harmoniesPlugin from "colord/plugins/harmonies";

extend([harmoniesPlugin]);

export default function PalletCard(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editColor, setEditColor] = useState(props.colors[0]?.color || "");
  const [editName, setEditName] = useState(props.name);
  const [editHarmonies, setEditHarmonies] = useState([]);
  useEffect(() => {
    const harmonies = colord(editColor)
      .harmonies("tetradic")
      .map((cl) => {
        return {
          color: cl.toHex(),
          isDark: cl.isDark(),
        };
      });
    setEditHarmonies(harmonies);
  }, [editColor]);

  const onDelClick = (idToDel) => {
    API.deletePallet(idToDel, props.token)
      .then((data) => {
        console.log(data);
        props.fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onEditSaveClick = (idToEdit)=>{
    API.updatePallet(idToEdit,{
      name:editName,
      seedColor:editColor
    },props.token).then(data=>{
      props.fetchData();
      setIsEditing(false)
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className="PalletCard">
      <h3>
        {isEditing ? (
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        ) : (
          <span>{props.name}</span>
        )}{" "}
        by {props.author}
      </h3>
      {isEditing ? (
        <div style={{ display: "flex" }}>
        <input
          type="color"
          value={editColor}
          onChange={(e) => setEditColor(e.target.value)}
        />
        {editHarmonies.map((har, i) => (
          <ColorBlock key={i} color={har.color} isDark={har.isDark} />
        ))}
        <div style={{
          display:"flex",
          flexDirection:"column"
        }}>
          <button onClick = {()=>onEditSaveClick(props.id)}>Save</button>
          <button onClick={()=>setIsEditing(false)}>Cancel</button>
        </div>
      </div>
      ) : (
        <Link to={`/pallet/${props.id}`}>
          <div style={{ display: "flex" }}>
            {props.colors.map((har, i) => (
              <ColorBlock key={i} color={har.color} isDark={har.isDark} />
            ))}
          </div>
        </Link>
      )}
      {props.canEdit ? (
        <div>
        {!isEditing?(
          <div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelClick(props.id)}>Delete</button>
          </div>
        ):null}
      </div>
      ) : null}
    </div>
  );
}
