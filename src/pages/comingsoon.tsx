import Head from "next/head";
import React from "react";
import Layout from "@/components/layout/Layout";

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Raih masa depanmu bersama RPL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Layout>
        <main className="overflox-x-hidden space-y-20">
          <section id='linktree' className="layout flex min-h-screen items-center justify-center my-5">
            <div>
            <h1 className="typewriter p-3 font-semibold text-gray-900 dark:text-white text-xl sm:text-2xl md:text-4xl lg:text-6xl">Tunggu, masih dibikin...</h1>
            </div>
        </section>
        </main>
      </Layout>
    </>
  );
}
