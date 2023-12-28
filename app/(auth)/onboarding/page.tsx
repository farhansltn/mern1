import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";


async function Page() {
    const user = await currentUser();
    if (!user) return null; // to avoid typescript warnings 

    const userInfo= {};

    const userData = {
        id: user.id,
        objectId: userInfo?._id,
        username: userInfo ? userInfo?.username : user.username,
        name: userInfo ? userInfo?.name : user.firstName ?? "",
        bio: userInfo ? userInfo?.bio : "",
        image: userInfo ? userInfo?.image : user.imageUrl,
    }
    return (
        <main className="mx-auto flex max-w-3xl flex-col
         justify-start px-10 py-10 mt-20 mb-20 bg-[#DBDFEA]">
            <h1 className="head-text text-dark-1">Onboarding</h1>
            <p className="mt-3 text-base-regular text-dark-1">
                Complete your profile now to use threads
            </p>
            <section className="mt-6 p-10">
                <AccountProfile 
                user={userData}
                btnTitle="Continue"/>
            </section>
        </main>
    )
}

export default Page;