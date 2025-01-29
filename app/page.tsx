import ContentPart from "@/components/content/page";
import Details from "@/components/deitels/page";
import DynamicTable from "@/components/table/page";
import imgUrl from "@/public/assets/imgUrl.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center ">
      <div className="relative border">
        <Image
          src={imgUrl || imgUrl}
          alt="A4 Image"
          priority={false}
          placeholder="blur"
          className="w-full h-auto"
        />
        <div className=" absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-12">
            {/* check the component file */}
            <Details />
            <DynamicTable />
            <ContentPart />
          </div>
        </div>
      </div>
    </div>
  );
}
