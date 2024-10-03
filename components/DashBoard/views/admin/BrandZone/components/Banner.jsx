import nft1 from "../../../../assets/img/nfts/NftBanner1.png";

const Banner1 = () => {
  return (
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/gradient-dynamic-lines-background_23-2149003685.jpg")`,
      }}
    >
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-2xl font-bold text-white ">
          Add or Edit Brands
        </h4>
        <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          Here, You can add Brands details or edit Brands through Whatsapp
          support and for reduces Brands Efforts.
        </p>

        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
            Add Brands
          </button>
          <button
            href=" "
            className="text-base font-medium text-gray-100 hover:text-lightPrimary 2xl:ml-2"
          >
            Edit Brands
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
