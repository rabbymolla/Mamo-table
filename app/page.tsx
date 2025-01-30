import ContentPart from "@/components/content/page";
import Details from "@/components/deitels/page";
import DynamicTable from "@/components/table/page";
import imgUrl from "@/public/assets/imgUrl.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="relative border w-[1123px] max-w-[90%] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1123px]">
        <Image
          src={imgUrl}
          alt="A4 Image"
          priority={false}
          placeholder="blur"
          className="w-full h-auto"
        />
        {/* Absolute positioned content with dynamic width */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-[90%] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] px-6 sm:px-10 md:px-12 flex flex-wrap items-center h-[85%]">
            {/* Components */}
            <Details />
            <DynamicTable />
            <ContentPart />

            <div className="sm:mt-5 hidden xs:block">
              <p className="xs:mb-10 text-xs md:text-sm text-black font-DmSans font-bold">
                Signetur
              </p>
              <span className="text-xs md:text-sm text-black font-DmSans font-normal">
                your Name
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
