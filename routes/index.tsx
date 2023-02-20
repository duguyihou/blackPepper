import { Head } from "$fresh/runtime.ts";
import Layout from "../components/layout/Layout.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kong | Home</title>
      </Head>
      <Layout>
        <Counter start={3} />
      </Layout>
    </>
  );
}
