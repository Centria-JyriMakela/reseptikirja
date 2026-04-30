import Register from "./components/register";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold text-center text-gray-900 dark:text-white">
          Tervetuloa Reseptikirjaan!
        </h1>
        <p className="mt-3 text-2xl text-center text-gray-500 dark:text-gray-300">
          Tallenna ja jaa suosikkireseptisi helposti.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start">
          <Register />
        </div>
      </main>
      <Footer />
    </div>
  );
}