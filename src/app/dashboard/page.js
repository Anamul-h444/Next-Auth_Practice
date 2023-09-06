"use client";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const logOutHandler = async () => {
    const res = await fetch("/api/login");
    const json = await res.json();

    if (json["status"] === true) {
      console.log(json.message);
      router.replace("/login");
    }
  };
  return (
    <div>
      <h1>Dashboard page</h1>
      <button className="border" onClick={logOutHandler}>
        Log out
      </button>
    </div>
  );
};

export default page;
