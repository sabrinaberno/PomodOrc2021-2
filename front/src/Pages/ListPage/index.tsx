import React from 'react';
import { ReactComponent as Icon } from '../../Assets/Images/Add_files-bro.svg';
import './styles.css';
import SidebarList from '../../Components/SidebarList';


const index = () => {
    
    return (
        
        <div className="home-container">
            <SidebarList />
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

export default index;

