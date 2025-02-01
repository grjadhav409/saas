import React from "react";
import ButtonLogin from "@/app/components/ButtonLogin";
import ListFeatures from "./components/ListFeatures";
import FaqList from "./components/FaqList";
import Image from "next/image";
import appImg from "./assets/appImg.png";
import { auth } from "@/auth";
// import clientPromise from "@/libs/mongo";
//test

export default async function Home() {
  let isLoggedin = true;
  let username = "G R Jadhav";

  const session = await auth();
  // console.log(session);

  let price = 999;
  let features = [
    "Unlimited profile photo generation",
    "High-resolution downloads",
    "Priority support",
    "Access to new features",
  ];

  let faqs = [
    { question: "How does it work?", answer: "It works" },
    { question: "Will i Get Refund?", answer: "Maybe" },
    { question: "Some other question?", answer: "Some other ans" },
  ];
  return (
    <main>
      {/* HEADER */}
      <section>
        <nav className="flex justify-between items-center p-4 bg-grey shadow-md">
          <div className="text-xl font-bold">ProfileAI</div>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-700 hover:text-blue-500 ">
                Home
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-700 hover:text-blue-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-700 hover:text-blue-500">
                FAQ
              </a>
            </li>
            <li>
              <ButtonLogin
                session={session}
                extraStyle=" text-gray-700 hover:text-blue-500"
              ></ButtonLogin>
            </li>
          </ul>
        </nav>
      </section>
      {/* HERO */}
      <section className="px-8 py-32 text-center  max-w-3xl mx-auto">
        <h1 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Generate profile photo from your<br></br>
          </span>{" "}
          Random Selfies
        </h1>
        <Image src={appImg} alt="App Image" />
        {/* <Image src={appImg} alt="App Image" className="w-80 items-center" /> */}
        <div>
          <br />
          <div className="extra-space">As many variations as you want</div>
          <br />
          <ButtonLogin
            isLoggedin={isLoggedin}
            username={username}
            session={session}
          ></ButtonLogin>
        </div>
      </section>
      {/* PRICING */}
      <section className="bg-base-200" id="pricing">
        <div className="px-8 py-32 max-w-3xl mx-auto">
          <div className="text-sm font-medium uppercase font-primary text-center">
            pricing
          </div>
          <h1 className="b-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl mb-12 text-center mx-w-3xl">
            A Pricing that fits for <br></br>
            <span>Everyone</span>
          </h1>

          <div className="p-10 bg-base-100 rounded-3xl ">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">Rs. 999</div>
              <div className="text-sm font-medium opacity-60">/Month</div>
            </div>
            <ul className="mt-4 mb-4 space-y-2">
              {features.map((feature) => {
                return <ListFeatures key={feature} text={feature} />;
              })}
            </ul>
            <ButtonLogin session={session}></ButtonLogin>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-base-300" id="faq">
        <div className="px-8 py-32 max-w-3xl mx-auto">
          <h1 className="b-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl mb-12 text-center mx-w-3xl">
            Frequently Asked Questions
          </h1>
          <ul className="mt-4 mb-4 space-y-2">
            {faqs.map(function getFaQ(faq) {
              return <FaqList key={faq.question} faq={faq} />;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
