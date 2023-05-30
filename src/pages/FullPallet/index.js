import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ColorBlock from "../../components/ColorBlock";
import Preview from "../../components/Preview";
import API from "../../utils/API";
import "./style.css";
export default function FullPallet(props) {
  const params = useParams();
  const [pallet, setPallet] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    API.getOnePallet(params.id)
      .then((data) => {
        setPallet(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="FullPallet">
            <h1>{pallet.name} by {pallet.User.username}</h1>
            {/* {props.userId===pallet.UserId?(
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            ):null} */}
            <section className="flexy">

          <aside>
            {pallet.harmonies.map((col) => (
                <ColorBlock color={col.color} isDark={col.isDark} />
                ))}
          </aside>
 
          <Preview colors={pallet.harmonies} />
                </section>
        </div>
      )}
    </div>
  );
}
