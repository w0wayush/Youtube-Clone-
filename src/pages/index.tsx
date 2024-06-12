import { useState } from "react";
import { Appbar } from "@/components/Appbar";
import { LeftBar } from "@/components/LeftBar";
import { VideoGrid } from "@/components/VideoGrid";

export default function Home() {
  const [isLeftBarVisible, setLeftBarVisible] = useState(false);

  const handleMenuClick = () => {
    setLeftBarVisible(!isLeftBarVisible);
  };

  return (
    <div className="flex flex-col h-screen">
      <Appbar onMenuClick={handleMenuClick} />
      <div className="flex flex-1 overflow-hidden">
        <LeftBar visible={isLeftBarVisible} />
        <div className="flex-1 overflow-auto">
          <VideoGrid />
        </div>
      </div>
    </div>
  );
}
