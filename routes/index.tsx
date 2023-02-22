import { Head } from "$fresh/runtime.ts";
import { tw } from "twind";
import Terminal from "../islands/Terminal.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kong | Home</title>
      </Head>
      <div
        class={tw`h-screen bg-gray-900 w-screen flex justify-center items-center`}
      >
        <Terminal />
      </div>
    </>
  );
}
