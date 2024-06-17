import { useRouter } from "next/router";
import { Line } from "./Line";

export function VideoCard(props: any) {
  const router = useRouter();
  return (
    <div
      className="p-3 cursor-pointer"
      onClick={() => {
        router.push("/video/1");
      }}
    >
      <div className="relative">
        <img
          src={props.image}
          className="rounded-lg w-full h-full object-cover"
          alt="Main Image"
        />
        {/*         <div className="absolute top-2 right-2 bg-gray-800 rounded-full p-1">
          <img
            src={props.thumbImage}
            className="rounded-full w-10 h-10 object-cover"
            alt="Thumbnail"
          />
        </div> */}
      </div>
      <Line progress={10} />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <div className="w-15 md:w-10 h-15 md:h-10">
            <img
              src={props.thumbImage}
              className="rounded-full w-full h-full object-cover"
              alt="Thumbnail"
            />
          </div>
        </div>
        <div className="col-span-11 pl-6">
          <div>{props.title}</div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.author}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
