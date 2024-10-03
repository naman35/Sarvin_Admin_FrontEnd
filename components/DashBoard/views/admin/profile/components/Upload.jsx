import { MdFileUpload } from "react-icons/md";
import Card from "../../../../components/card";
import React from "react";

const Upload = () => {
  return (
    <Card className="grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500   2xl:grid-cols-11">
      <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary  2xl:col-span-6">
        <button className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3  lg:pb-0">
          <MdFileUpload className="text-[80px] text-gray-500 " />
          <h4 className="text-xl font-bold text-gray-500 ">Upload Files</h4>
          <p className="mt-2 text-sm font-medium text-gray-600">
            PNG, JPG and GIF files are allowed
          </p>
        </button>
      </div>

      <div className="col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 ">
        <h5 className="text-left text-xl font-bold leading-9 text-gray-700 ">
          Complete Your Profile
        </h5>
        <p className="leading-1 mt-2 text-base font-normal text-gray-600">
          Stay on the pulse of distributed projects with an anline whiteboard to
          plan, coordinate and discuss
        </p>
        <button
          href=" "
          className="linear mt-4 flex items-center justify-center rounded-xl bg-gray-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-gray-600 active:bg-gray-700 dark:bg-gray-400  dark:hover:bg-gray-300 dark:active:bg-gray-200"
        >
          Publish now
        </button>
      </div>
    </Card>
  );
};

export default Upload;
