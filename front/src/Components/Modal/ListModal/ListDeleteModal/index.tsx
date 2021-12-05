import './styles.css'

const ListDeleteModal = () => {

    return (
        
            // (modalIsOpen) && 
        (<div className="backgroundContainer">
               
            <div className="modalContainer">t
                <div className="newListTitle">
                    <h1>Deletar lista</h1>
                </div>
                
                <div className="textModal">
                    <p>Realmente deseja deletar esta lista?</p>
                </div>
                {/* <input className="input-text" type="text" placeholder="Digite aqui..."/> */}
                <section className="footerButton">
                    <button id="confirm-btn" 
                        // funçao para confirmar a criaçao
                    >
                        Confirmar
                    </button>
                    <button id="cancel-btn" 
                    // onClick={() => {
                    //     setModalIsOpen(false)
                    //   }}
                        // funçao para cancelar a criaçao
                    >
                        Cancelar
                    </button>
                </section>
            </div>
        </div>)
        
    );

}

export default ListDeleteModal;
