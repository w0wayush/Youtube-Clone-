import { Appbar } from "@/components/Appbar";
import { VideoCardHorizontal } from "@/components/VideoCardHorizontal";
import { VIDEOS } from "@/videos";

export default function VideoPage() {
  return (
    <div className="p-4">
      <Appbar />
      <div className="grid gap-4 grid-cols-12 pt-5">
        <div className="col-span-12 md:col-span-9 sm:col-span-8">
          <video
            controls
            src="/videos/solo.mp4"
            width={"100%"}
            height={"720px"}
          />
          <div className="flex">
            <img
              className="w-12 mt-3 h-12 rounded-full "
              src="https://i.pinimg.com/236x/3b/3b/c5/3b3bc5030554a1d366be27322237426e.jpg"
            ></img>
            <div className="ml-3">
              <div className="text-2xl">
                Solo Leveling Anime | New Anime | Top Trending{" "}
              </div>
              <div>
                <div className="text-gray-400">Gojo Saturo</div>
                <div>
                  <div className="text-gray-400 ">40M views • 10 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 sm:col-span-4">
          {VIDEOS.map((video) => (
            <VideoCardHorizontal video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}
