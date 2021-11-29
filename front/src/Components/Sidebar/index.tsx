import "./styles.css";
import { ReactComponent as CloseIcon } from "../../Assets/Icons/close_black_24dp.svg";
import { ReactComponent as ListIcon } from "../../Assets/Icons/sort_black_24dp.svg";
import { ReactComponent as HelperIcon } from "../../Assets/Icons/help_outline_black_24dp.svg";

const Sidebar = () => {
  return (
    <div className="container-sidebar">
      <div className="container-sidebar-icons">
        <div className="sidebar-icons">
          <ListIcon className="list-icon" />
          <p className="list-text">Listas</p>
        </div>
        <div className="sidebar-icons">
          <HelperIcon className="help-icon" />
          <p className="about-text">Sobre</p>
        </div>
        <section className="border-sidebar"></section>
      </div>
    </div>
  );
};
export default Sidebar;
