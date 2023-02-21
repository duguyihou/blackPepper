import { Head } from "$fresh/runtime.ts";
import Terminal from "../islands/Terminal.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kong | Home</title>
      </Head>
      <Terminal />
    </>
  );
}
