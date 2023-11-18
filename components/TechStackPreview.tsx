import Link from "next/link";

const TechStackPreview = () => {
  return (
    <>
      <section className="mx-8 hidden h-[calc(180px_-_theme(space.14))] flex-col items-center justify-center transition ease-in-out dark:text-white sm:flex sm:h-[calc(500px_-_theme(space.14))] lg:h-[calc(100vh_-_theme(space.14))]">
        <div className="flex h-[90%] w-full flex-col items-center justify-center rounded-xl bg-gray-400 transition ease-in-out dark:bg-slate-800">
          <p className="hidden text-center text-2xl sm:block sm:text-5xl lg:text-5xl">Coming Soon ...</p>
          <p className="text-center text-2xl sm:hidden sm:text-5xl lg:text-5xl">Coming Soon ...</p>
        </div>
      </section>
      <Link
        href="/techstack"
        className="mx-8 flex h-[calc(180px_-_theme(space.14))] flex-col items-center justify-center transition ease-in-out dark:text-white xs:h-[calc(200px_-_theme(space.14))] sm:hidden"
      >
        <div className="flex h-[90%] w-full flex-col items-center justify-center rounded-xl border-2 border-gray-400 transition ease-in-out dark:border-slate-800">
          tech stack
        </div>
      </Link>
      <div className="hidden sm:block sm:h-[calc((500px_-_theme(space.14))_*_0.05)] lg:hidden" />
    </>
  );
};

export default TechStackPreview;
