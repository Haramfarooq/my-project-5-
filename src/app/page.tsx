import Image from "next/image";


export default function Home(){
  return(
    <div className="h-screen">
      
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col items-start pl-[189px]">
          <h1 className="font-bold text-4xl mt-20  text-[40px] font-weight-[700] leading-[65.8px] tracking-[2.5%]
          text-[#000000] md:text-4xl lg:text-5xl font-libre-bodoni">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
         </h1>
         <p className="mt-4 font-semibold text-sm 
         text-[#787054] text-lg md:text-xl lg:text-2xl font-libre-bodoni">
          An example of intricate workmanship and detail, 
         elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <div className="mt-10">
              <button className=" text-white bg-[#A29875] w-[288px]
              h-[54px] rounded-lg font-libre-bodoni"
            >  Explore Now
               </button>
          </div>
          </div>
          <div 
          className="w-1/2 flex justify-center items-center">
          <Image
          src={"/image/heroimg.png"}
          alt="pic"
          width={311}
          height={647}
          />
          </div>
        </div>
      </div>
  )
}


