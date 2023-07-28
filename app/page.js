import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="py-40 bg-black text-white">
        <div className="flex flex-col justify-center items-center gap-10">
          <p className="text-8xl font-merriweather">
            The <strong>BLOG</strong>
          </p>
          <p className="text-4xl p-2">Where Ideas Take Flight!</p>
          <button className="bg-white text-black py-4 rounded-full px-6 text-lg font-bold font-public_sans">
            <Link href={"/"}>START READING</Link>
          </button>
        </div>
      </main>
      <section>
        <p className="flex justify-center text-black pt-12 text-4xl font-public_sans font-extrabold">
          Latest Blogs
        </p>
      </section>
    </>
  );
}
