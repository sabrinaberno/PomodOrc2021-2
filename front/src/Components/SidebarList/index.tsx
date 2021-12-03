import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../Assets/Images/arrow_back_ios_black_24dp.svg";
import { ReactComponent as AddIcon } from "../../Assets/Images/add_black_24dp.svg";
import SideBarItems from "../SidebarList/SideBarItem";
import api from "../../services/api";

// interfaces
interface ITask {
  name: string;
  checked: boolean;
}
interface IList {
  name: string;
  tasks: ITask[];
}

const SidebarList = ({ openList }: { openList: Function }) => {
  const [lists, setLists] = useState<IList[]>();

  const getLists = async () => {
    try {
      const response = await api.get("/getAllList");
      setLists(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createLists = async (name: string) => {
    try {
      await api.post("/postList", { name: name });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <section className="sideBarContainer">
      <Link className="back-button" to="/">
        <BackIcon className="back-icon" />
      </Link>
      {/* create list container */}
      <div
        className="container-addIcon"
        onClick={() => {
          openList(true);
        }}
      >
        <div className="container-new-list">
          <AddIcon className="add-icon" />
          <p className="list-text">Criar Lista</p>
        </div>
      </div>

      {/* created lists container */}
      {/* <SideBarItems />
      <SideBarItems />
      <SideBarItems />
      <SideBarItems />
      <SideBarItems />
      <SideBarItems />
      <SideBarItems /> */}
      {lists?.map((list) => {
        return <SideBarItems name={list.name} />;
      })}
    </section>
  );
};

export default SidebarList;
