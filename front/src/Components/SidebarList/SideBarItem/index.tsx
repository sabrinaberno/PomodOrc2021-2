import { ReactComponent as MoreIcon} from "../../../Assets/Icons/more_vert_black_24dp.svg"
import './styles.css';

function SideBarItems ({name}: {name : String}) {
    return (
        <div className="containerEditIcon" >
          <div className="container-new-list">
            <MoreIcon className="more-icon"
            onClick={() => {
            
            }}
            />
            <p className="ListNameTxt">{name}</p>
          </div> 
        </div>
    )
}

export default SideBarItems
