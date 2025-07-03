import React from "react";
import { FaUser } from "react-icons/fa"

const userData = [
  {
    title: "Finally, a creator platform that doesn’t treat fans like numbers.",
    description:
      "Luna, Content Creator",
    icon: (
                <FaUser className="text-9xl text-primary" />
            ),
    duration: "500",
  },
  {
    title: "I used $VIBE to vote on a merch drop. Two weeks later, I was wearing it.",
    description:
      "Dex, DAO Member",
    icon: (
                <FaUser className="text-9xl text-primary" />
            ),
    duration: "600",
  },
  {
    title: "I get paid for just being present and helpful. That’s real community.",
    description:
      "Eze, Contributor",
    icon: (
                <FaUser className="text-9xl text-primary" />
            ),
    duration: "700",
  },  

];

const UserReview = () => {
    return (
        <div className="bg-black rounded-[16px] min-w-[335px] max-w-[335px] flex flex-col gap-[32px] p-[32px] border border-grayborder">
            <p className="text-gray5">
                “Finally, a creator platform that doesn’t treat fans like numbers.”
            </p>
            <div className="flex items-center gap-4">
                <FaUser />
                <div className="flex flex-col">
                    <span className="text-white text-sm">Luna</span>
                    <span className="text-gray2 text-[12px]">Content Creator</span>
                </div>
            </div>
        </div>
    )
}

export default UserReview