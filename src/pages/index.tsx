import Head from "next/head";
import React from "react";
import Layout from "@/components/layout/Layout";
import { AChangeImage } from "@/container/AChangeImage";
import { BannerText } from "@/container/BannerText";
import Faq from "@/container/faq";
import OprecAnnouncement from "@/container/OprecAnnouncement";

export default function Home() {
  return (
    <>
      <Head>
        <title>Labse Careers</title>
        <meta name="description" content="Raih masa depanmu bersama RPL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Layout>
        <main className="overflox-x-hidden space-y-20">
          <section className=" ">
            <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen sm:min-h-[80vh]">
              <div className="place-self-center mx-auto ">
                <BannerText />
              </div>
              <div className="lg:mt-0 lg:col-span-5 sm:flex order-first sm:order-last mx-auto sm:pr-16 mb-16">
                <AChangeImage />
              </div>
            </div>
          </section>
          <p className="relative">
            <span id="announcement" className="absolute bottom-40"></span>
          </p>
          <OprecAnnouncement />
          <p className="relative">
            <span id="faq" className="absolute bottom-40"></span>
          </p>
          <Faq />
        </main>
      </Layout>
    </>
  );
}
