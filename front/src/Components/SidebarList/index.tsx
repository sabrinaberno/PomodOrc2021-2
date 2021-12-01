import './styles.css'
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from "../../Assets/Images/arrow_back_ios_black_24dp.svg";
import { ReactComponent as AddIcon } from "../../Assets/Images/add_black_24dp.svg"

const SidebarList = () => {
  return (
    <section className="sideBarContainer">
        <Link className="back-button" to="/">
          <BackIcon className="back-icon" />
        </Link>
        <div className="container-addIcon">
          <div className="container-new-list">
            <AddIcon className="add-icon"/>
            <Link className="list-text" to="/list">Criar Lista</Link>
          </div>
        </div>
      <section className="sideBarItemContainer">
        <div className="sideBarItem">
        </div>
      </section>
    </section>
  )

}

export default SidebarList;

