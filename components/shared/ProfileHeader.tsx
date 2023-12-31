import Image from "next/image";

interface Props {
    accountId: string;
    authUserId: string;
    name: string;
    username: string;
    imgUrl: string;
    bio: string;
}

const ProfileHeader = ({
    accountId,
    authUserId,
    name,
    username,
    imgUrl,
    bio
}: Props) => {
    return (
        <div className="flex w-full flex-col justify-start">
           <div className="items-center flex justify-between">
            <div className="items-center flex gap-3">
                <div className="relative h-20 w-20 object-cover">
                    <Image
                    src={imgUrl}
                    alt="Profile Image"
                    fill
                    className="rounded-full object-cover shadow-2xl"
                    />
                </div>
                
                <div className="flex-1">
                    <h2 className="text-left text-heading3-bold text-[#A367B1]">
                        {name}
                    </h2>
                    <p className="text-base-medium text-slate-500">@{username}</p>
                </div>
           </div>
           </div>
           
                {/*TODO:Community */}
                <p className="mt-6 max-w-lg text-base-regular text-dark-2">
                    {bio}
                </p>
                <div className="mt-12 h-0.5 w-full bg-[#A367B1]"/>

        </div>
    )
}
export default ProfileHeader;