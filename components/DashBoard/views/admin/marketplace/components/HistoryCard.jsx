import React from "react";
import Image from "next/image";
import Nft2 from "../../../../assets/img/nfts/Nft2.png";
import Nft1 from "../../../../assets/img/nfts/Nft1.png";
import Nft3 from "../../../../assets/img/nfts/Nft3.png";
import Nft4 from "../../../../assets/img/nfts/Nft4.png";
import Nft5 from "../../../../assets/img/nfts/Nft5.png";
import Nft6 from "../../../../assets/img/nfts/Nft6.png";

import { FaInstagram } from "react-icons/fa";
import Card from "../../../../components/card";

const HistoryCard = () => {
  const HistoryData = [
    {
      image: Nft1,
      title: "@sanphire15",
      owner: "Naman Agarwal",
      price: 2098,
      time: "30s",
    },
    {
      image: Nft2,
      title: "@adisrivastava",
      owner: "Aditya Srivastva",
      price: 2456,
      time: "50m",
    },
    {
      image: Nft3,
      title: "@famboyzz",
      owner: "Shivam Gupta",
      price: 3265,
      time: "20s",
    },
    {
      image: Nft4,
      title: "@sarvinCreator",
      owner: "Mayank Gupta",
      price: 756,
      time: "4h",
    },
  ];

  return (
    <Card extra={"mt-3 !z-5 overflow-hidden"}>
      {/* HistoryCard Header */}
      <div className="flex items-center justify-between rounded-t-3xl p-3">
        <div className="text-lg font-bold text-red-500 ">
          Latest Influencer Add
        </div>
        <button className="linear rounded-[20px] bg-gray-200 px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200">
          See all
        </button>
      </div>

      {/* History CardData */}

      {HistoryData.map((data, index) => (
        <div className="flex h-full w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700">
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center">
              <Image
                className="h-full w-full rounded-xl"
                src={data.image}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-base font-bold text-navy-700 ">
                {" "}
                {data.title}
              </h5>
              <p className="mt-1 text-sm font-normal text-gray-600">
                {" "}
                {data.owner}{" "}
              </p>
            </div>
          </div>

          <div className="mt-1 flex items-center justify-center text-navy-700 ">
            <div>
              <FaInstagram />
            </div>
            <div className="ml-1 flex items-center text-sm font-bold text-navy-700 ">
              <p> {} </p>
              {data.price} <p className="ml-1">Followers</p>
            </div>
            <div className="ml-2 flex items-center text-sm font-normal text-gray-600 ">
              <p>{data.time}</p>
              <p className="ml-1">ago</p>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default HistoryCard;
