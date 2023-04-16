import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";
import { useUser } from "~/hooks/useUser";
import { MembershipMetadata } from "~/types";

const Home: NextPage = () => {
  const { logoutUser, user } = useUser();
  const { data } =
    useSWR<{ memberships: MembershipMetadata[] }>("/api/memberships");

  const buttonClass =
    "bg-[#603DEB] text-white px-8 text-lg py-2 font-bold rounded hover:opacity-80";

  if (!user?.isLoggedIn) {
    return (
      <div className="max-w-screen-md px-6 pt-24 mx-auto">
        <header className="pb-4 space-y-4 text-center border-b-2">
          <h1 className="text-5xl font-bold">Claim Your Digital Membership Card!</h1>
          <h1 className="text-2xl font-bold">Alpha Access</h1>
          <p className="text-xl text-gray-700">
            Thank you for choosing BSS. Verify or
            claim your membership card by using the button below.
          </p>
        </header>
        <div className="pt-8">
          <div className="flex justify-center">
            <button className={buttonClass}>
              <Link href="/api/login">Claim/login</Link>{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-screen-md px-6 pt-24 mx-auto">
      <header className="pb-4 space-y-4 text-center border-b-2">
        <h1 className="text-5xl font-bold"> You're a Registered BSS member!</h1>
        <h1 className="text-2xl font-bold">Alpha Access</h1>
        <p className="text-xl text-gray-700">
          Below you should see your digital membership card and any other cards that you may claim/receive in the future.
        </p>
        <div className="flex justify-end gap-8">
          <button className={buttonClass} onClick={() => logoutUser()}>
            Logout
          </button>
        </div>
      </header>
      <div className="grid pt-8 sm:grid-cols-2">
        {data?.memberships.map((membership) => {
          const expiration = new Date(membership.expiration * 1000);
          return (
            <div className="p-6 bg-white rounded shadow" key={membership.id}>
              <div>
                <img
                  alt={membership.name}
                  className="w-24 rounded"
                  src={membership.image}
                />
              </div>
              <div className="pt-4 space-y-4">
                <h3 className="text-xl font-semibold"> {membership.name}</h3>
                <p className="text-gray-700"> {membership.description}</p>
                <p className="text-gray-500">
                  Valid until{" "}
                  <time dateTime={expiration.toLocaleDateString()}>
                    {expiration.toLocaleDateString()}
                  </time>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
