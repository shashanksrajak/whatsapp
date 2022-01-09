import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [mobile, setMobile] = useState(null);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>mitan | whatsapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          Welcome to <span className="text-red-600">mitan</span>{" "}
          <span className="text-green-600">WhatsApp!</span>
        </h1>

        <div className="my-5 bg-slate-100 p-4 w-full md:w-6/12">
          <input
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            type="tel"
            placeholder="enter number here..."
            className="w-full py-1 px-3 rounded-lg border border-green-500"
          />
          <button
            onClick={() => {
              window.open(`https://api.whatsapp.com/send/?phone=91${mobile}`);
            }}
            className="mt-5 bg-green-600 px-5 py-2 font-semibold text-white rounded-full"
          >
            WhatsApp Now
          </button>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Powered by{" "}
        <span className="ml-2 font-semibold text-red-500">
          <a href="https://techmitan.com">techmitan</a>
        </span>
      </footer>
    </div>
  );
}
