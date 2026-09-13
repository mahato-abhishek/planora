import Image from "next/image";
import profile from "@/public/profile.webp";
import { useState } from "react";
import { SignOut } from "../../ui/sign-out";

type Props = {
  size: number;
};
export const Profile = (prop: Props) => {
  return (
    <>
      <Image
        src={profile}
        alt="profile pic"
        height={prop.size}
        className=" rounded-full bg-gray-300 border "
      />
    </>
  );
};
export const Account = ({
  name,
  email,
}: {
  name: string | undefined;
  email: string | undefined;
}) => {
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-left gap-2 h-fit p-2 border-b dark:border-mist-600 border-mist-300 cursor-pointer"
        onClick={() => setProfileOpen(!profileOpen)}
      >
        <Profile size={48} />
        <div>
          <p className=" font-bold">{name}</p>
          <p className="text-xs ">{email?.slice(0, 18) + "..."}</p>
        </div>
      </div>
      <div className="bg-mist-200 dark:bg-mist-900 rounded-lg mt-2">
        <SignOut />
      </div>
    </>
  );
};
