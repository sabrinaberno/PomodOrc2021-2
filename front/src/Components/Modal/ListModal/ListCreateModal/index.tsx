import { useState } from "react";
import api from "../../../../services/api";
import "./styles.css";

const ListModal = ({
  modalIsOpen,
  setModalIsOpen,
}: {
  modalIsOpen: Boolean;
  setModalIsOpen: Function;
}) => {
  const [listName, setListName] = useState<string>('');
  const createLists = async (name: string) => {
    try {
      await api.post("/postList", { name: name });
    } catch (error) {
      console.log(error);
    }
  };

  document.addEventListener('keydown', function(e) {
    if(e.key == "Enter"){
      document.getElementById("confirm-btn")?.click();
    }
});

document.addEventListener('keydown', function(e) {
    if(e.key == "Escape"){
      document.getElementById("cancel-btn")?.click();
    }
});

  return (
    modalIsOpen && (
      <div className="backgroundContainer">
        <div className="modalContainer">
          <div className="newListTitle">
            <h1>Nova lista</h1>          </div>

          <div className="textModal">
            <p>Insira o nome da lista abaixo</p>
          </div>
          <input
            className="input-text"
            type="text"
            placeholder="Digite aqui..."
            onChange={(event) => {setListName(event.target.value)}}
          />

          <section className="footerButton">
            <button
              id="confirm-btn"
              // funçao para confirmar a criaçao
              onClick={() => {
                  createLists(listName);
                  setModalIsOpen(false);
                  window.location.reload();
              }}
            >
              Confirmar
            </button>
            <button
              id="cancel-btn"
              onClick={() => {
                  
                setModalIsOpen(false);
              }}
              // funçao para cancelar a criaçao
            >
              Cancelar
            </button>
          </section>
        </div>
      </div>
    )
  );
};

export default ListModal;
