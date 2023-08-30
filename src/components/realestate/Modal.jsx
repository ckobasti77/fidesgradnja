import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  apartment1,
  apartment2,
  apartment3,
  apartment4,
  apartment5,
  apartment6,
} from "../../assets/assets";

const Modal = ({
  img,
  price,
  bedrooms,
  sq2,
  currentApartment,
  showModal,
  setShowModal,
}) => {
  const apartments = [
    {
      id: 1,
      price: 160000,
      bedrooms: 3,
      bath: 2,
      sq2: 74,
      img: apartment1,
    },
    {
      id: 2,
      price: 98000,
      bedrooms: 2,
      bath: 1,
      sq2: 42,
      img: apartment2,
    },
    {
      id: 3,
      price: 114000,
      bedrooms: 3,
      bath: 1,
      sq2: 55,
      img: apartment3,
    },
    {
      id: 4,
      price: 202000,
      bedrooms: 4,
      bath: 2,
      sq2: 84,
      img: apartment4,
    },
    {
      id: 5,
      price: 256000,
      bedrooms: 5,
      bath: 2,
      sq2: 98,
      img: apartment5,
    },
    {
      id: 6,
      price: 55000,
      bedrooms: 1,
      bath: 1,
      sq2: 22,
      img: apartment6,
    },
  ];
  return (
    <div
      className={`${
        showModal ? "grid" : "hidden"
      } modal-bg fixed inset-0 place-items-center z-[999999999]`}
    >
      <div className="outer p-[3px] w-full xl:w-4/6 h-full xl:h-4/6 rounded-none xl:rounded-3xl">
        <div className="modal-container relative bg-fifth w-full h-full flex flex-col xl:flex-row rounded-none xl:rounded-3xl">
          <AiOutlineClose
            onClick={() => setShowModal(false)}
            className="absolute top-3 right-3 cursor-pointer duration-150 transition-all text-third hover:text-primary z-10"
            size={32}
          />
          <img
            src={apartments[currentApartment - 1].img}
            alt="img"
            className="w-full xl:w-3/6 h-3/6 xl:h-full rounded-none xl:rounded-l-[21px]"
          />
          <div className="w-full xl:w-3/6 h-3/6 xl:h-full flex flex-col justify-between p-4 xl:p-12">
            <p>
              Ovaj prostrani stan od sto kvadratnih metara, smešten u centru
              grada, nudi tri komforne spavaće sobe, prostrani i svetli dnevni
              boravak sa staklenim zidovima koji omogućavaju obilje prirodne
              svetlosti, a dekorisan je modernim nameštajem i umetničkim delima.
              Takođe, poseduje potpuno opremljenu kuhinju sa najnovijim
              uređajima, dva elegantna kupatila sa finim keramičkim detaljima, i
              prelepu terasu sa nezaboravnim pogledom na urbanu siluetu grada.
              Stan je idealan za porodice ili za one koji traže luksuz i
              udobnost u urbanom okruženju.
            </p>
            <div className="w-full flex justify-between">
              <span>{apartments[currentApartment - 1].bath} bath</span>
              <span>{apartments[currentApartment - 1].bedrooms} bedrooms</span>
              <span>
                {apartments[currentApartment - 1].sq2} sq<sub>2</sub>
              </span>
            </div>
            <span className="text-2xl text-sixth">{apartments[currentApartment - 1].price} $</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
