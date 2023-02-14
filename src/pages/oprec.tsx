import Head from "next/head";
import React from "react";
import Layout from "@/components/layout/Layout";
import { AChangeImage } from "@/container/AChangeImage";
import { BannerText } from "@/container/BannerText";
import Faq from "@/container/faq";
import OprecAnnouncement from "@/container/OprecAnnouncement";
import clsx from "clsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Open Recruitment</title>
        <meta name="description" content="Raih masa depanmu bersama RPL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Layout>
        <main className="overflox-x-hidden space-y-20">
          <section id='linktree' className="layout flex min-h-screen items-center justify-center">
            <div className={clsx(
              "flex flex-col items-center justify-center",
              "w-[512px] bg-gray-900 p-10 rounded shadow-lg",
            )}>
              <div className="layout flex flex-col items-center justify-center">
                <p className="text-gray-400 text-xs">Kumpulan Link Penting</p>
                <p className={clsx(
                  "text-white font-semibold text-2xl text-center"
                )}>Open Recruitment RPL 2023</p>
              </div>
              <div className={clsx(
                "p-10 mt-5 w-11/12 rounded bg-gray-500"
              )}>
                <div>
                  <a href="">
                    <div className={clsx(
                      "flex justify-between",
                      "py-3 px-5 rounded-full text-white  bg-gray-700",
                      "transition duration-500",
                      "hover:bg-gray-600 hover:scale-95"
                    )}>
                      <p className="font-medium">Modul 1</p>
                      <p>ICON</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
