import { ReactComponent as MoreIcon} from "../../Assets/Icons/more_vert_black_24dp.svg"

function SideBarItem() {
    return (
        <div className="containerEditIcon" >
          <div className="container-new-list">
            <MoreIcon className="more-icon"
            onClick={() => {
            
            }}
            />
            <p className="list-text">Lista 1</p>
          </div> 
        </div>
    )
}

export default SideBarItem
