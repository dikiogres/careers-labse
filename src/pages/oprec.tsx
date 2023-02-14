import Head from "next/head";
import React from "react";
import Layout from "@/components/layout/Layout";
import clsx from "clsx";
import CardLink from "@/components/CardLink";

import { CardLinkData } from "@/data/cardLink.data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Open Recruitment</title>
        <meta name="description" content="Raih masa depanmu bersama RPL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/mera.jpg" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Layout>
        <main className="overflox-x-hidden space-y-20">
          <section id='linktree' className="layout flex min-h-screen items-center justify-center my-5">
            <div className={clsx(
              "flex flex-col items-center justify-center",
              "w-[512px] bg-gray-900 p-10 rounded shadow-xl",
              "dark:bg-gray-200"
            )}>
              <div className="layout flex flex-col items-center justify-center">
                <p className="text-gray-400 dark:text-gray-500 text-xs">Kumpulan Link Penting</p>
                <p className={clsx(
                  "text-white font-semibold text-2xl text-center",
                  "dark:text-gray-900"
                )}>Open Recruitment RPL 2023</p>
              </div>
              <div className={clsx(
                "p-10 mt-5 w-11/12 rounded bg-gray-500"
              )}>
                {CardLinkData?.map((item) => (
                  <div key={item.id} className='py-2'>
                    <CardLink product={item} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
