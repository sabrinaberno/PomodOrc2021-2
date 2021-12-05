import {useState} from 'react';
import { ReactComponent as Icon } from '../../Assets/Images/Add_files-bro.svg';
import './styles.css';
import SidebarList from '../../Components/SidebarList';
import ListModal from '../../Components/Modal/ListModal/ListCreateModal';
import TaskModal from '../../Components/Modal/TaskModal/TaskCreateModal/TaskCreateModal';
const ListPage = () => {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        
        <div className="home-container">
            <SidebarList openList ={setModalIsOpen} />
            <ListModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
            <section className="no-lists-container">
            
                <div className="homeMainText">
                    Selecione uma lista ou crie uma nova
                </div>
                
                <div className="img-container">
                    <Icon className="img" />
              </div>
            </section>
        </div>
    
    )

}

export default ListPage;

