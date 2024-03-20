import Service from "@/components/Service";
import Image from "next/image";
const doctor = "/image7.png"

export default function Home() {
  return (
    <main className=" ">
      <div className="home_container flex items-center gap-10 sm:gap-0 sm:justify-around border flex-col sm:flex-row py-28 sm:py-36">
        <div className="flex w-2/5 flex-col gap-8 items-start">
        <h1 class="text-xl sm:text-3xl lg:text-5xl text-white font-bold whitespace-normal">
          Connecting sdf ds sd  jsdcsf
        </h1>

          <p className=" text-xl text-white">
            efbckwjfcn
          </p>
          <button className=" border-black px-5 py-2 rounded-[1rem] bg-black text-white transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none">
            Login/Signup
          </button>

        </div>
        <div>
          <Image src={doctor} width={350} height={300}/>
        </div>
      </div>
      <Service/>
    </main>
  );
}
