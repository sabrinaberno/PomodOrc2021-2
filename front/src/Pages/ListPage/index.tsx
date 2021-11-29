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
                    Não há listas criadas ainda... 
                </div>
                    
                <div className="img-container">
                    <Icon className="img" />
              </div>
            </section>
        </div>
    
    )

}

export default index;

