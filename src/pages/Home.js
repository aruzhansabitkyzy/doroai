import Items from "../components/Items";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Modal from "../components/ui/Modal";
import { React, useState } from "react";
import AddItem from "../components/AddItem";
import { useModal } from "../context/ModalContext";
import { useMessage } from "../context/MessageContext";
import { MessageProvider } from "../context/MessageContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const data = useSelector((state) => state.user);
  const { modalOpen, openModal } = useModal();
  const navigate = useNavigate();

  function createItem() {
    if (data.loggedIn != null) openModal();
    else navigate("/auth");
  }
  return (
    <>
      {modalOpen && (
        <Modal>
          <AddItem />
        </Modal>
      )}
      <div className={`w-full p-10 ${modalOpen ? "blur-sm" : ""}`}>
        <Header data={data} createPost={createItem} />
        <Items data={data} type={"general"} />
      </div>
    </>
  );
};

export default Home;
