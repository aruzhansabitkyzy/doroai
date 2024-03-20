import close from "../images/Close.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { React, useState } from "react";
import upload from "../images/upload.png";
import { createItem } from "../features/itemSlice";
import { v4 as uuidv4 } from "uuid";
import { useModal } from "../context/ModalContext";
const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState([]);
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  function onSubmit(data) {
    const id = uuidv4();
    dispatch(createItem({ id, ...data, images: images }));
    closeModal();
  }
  function handleChange(e) {
    setImages([...images, URL.createObjectURL(e.target.files[0])]);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 mb-4 overflow-hidden pr-5">
          <label
            class="flex flex-col align-middle justify-center bg-neutralGrey w-20 h-20 rounded-md border-black cursor-pointer"
            onChange={handleChange}
          >
            <input type="file" className="hidden " />
            <img src={upload} className="w-5 h-5 m-auto" />
            <p className="text-sm font-bold text-center text-maine">
              Добавить фото
            </p>
          </label>
          <div className="flex gap-3 overflow-scroll overflow-y-hidden">
            {images &&
              images.map((image, index) => (
                <img src={image} key={index} className="rounded-md w-20 h-20" />
              ))}
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <input
            className="mt-3 mb-3 w-full px-3 py-2 border-none outline-none rounded-md bg-neutralGrey text-newblack"
            placeholder={"Цена"}
            type="text"
            {...register("price")}
          />
          <input
            type="text"
            className="mt-3 mb-3 w-full px-3 py-2 border-none outline-none rounded-md bg-neutralGrey text-newblack"
            placeholder={"Название"}
            {...register("name")}
          />
          <input
            type="text"
            className="mt-3 mb-3 w-full px-3 py-2 border-none outline-none rounded-md bg-neutralGrey text-newblack"
            placeholder={"Краткое описание"}
            {...register("brief_description")}
          />
          <input
            type="text"
            className="mt-3 mb-5 w-full px-3 py-2 border-none outline-none rounded-md bg-neutralGrey text-newblack"
            placeholder={"Полное описание"}
            {...register("detailed_description")}
          />
          <input
            type="submit"
            value={"Добавить"}
            className={
              "font-bold px-5 py-2 rounded-3xl text-white bg-maine w-1/2 h-18 cursor-pointer"
            }
          />
        </div>
      </form>
    </>
  );
};

export default AddItem;
