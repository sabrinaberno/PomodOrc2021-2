import './styles.css'

const TaskModal = ({modalIsOpen, setModalIsOpen} : {modalIsOpen:Boolean, setModalIsOpen:Function}) => {

    return (
        (modalIsOpen) && 
        (<div className="backgroundContainer">
               
            <div className="modalContainer">
                <div className="newListTitle">
                    <h1>Nova tarefa</h1>
                </div>
                
                <div className="textModal">
                    <p>Insira o nome da tarefa abaixo</p>
                </div>
                <input className="input-text" type="text" placeholder="Digite aqui..."/>
                <section className="footerButton">
                    <button id="confirm-btn" 
                        // funçao para confirmar a criaçao
                    >
                        Confirmar
                    </button>
                    <button id="cancel-btn" 
                    onClick={() => {
                        setModalIsOpen(false)
                      }}
                        // funçao para cancelar a criaçao
                    >
                        Cancelar
                    </button>
                </section>
            </div>
        </div>)
        
    );

}

export default TaskModal;
