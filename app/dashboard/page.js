import Image from "next/image";
import ButtonLogout from "../components/ButtonLogout";

export default function Dashboard() {
  return (
    <main className="p-8 text-center">
      <h1 className="ext-5xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Private Dashboard page
      </h1>
      <br />
      <div>some more info</div>
      <ButtonLogout>Logout</ButtonLogout>
    </main>
  );
}
