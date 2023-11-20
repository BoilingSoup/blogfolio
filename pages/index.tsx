import { BlogPreview } from "@/components/BlogPreview";
import { Carousel } from "@/components/Carousel";
import TechStackPreview from "@/components/TechStackPreview";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>BoilingSoup</title>
      </Head>
      <MainContainer>
        <>
          <TechStackPreview />
          <div className="lg:flex">
            <ProjectsPreview />
            <BlogPreview />
          </div>
          <TechStackPreview />
        </>
      </MainContainer>
    </>
  );
}

type Props = {
  children: JSX.Element;
};

const MainContainer = (props: Props) => {
  return <main className="flex h-[calc(100%_-_theme(space.14))] flex-col justify-center sm:h-auto">{props.children}</main>;
};

const ProjectsPreview = () => {
  return (
    <>
      <section className="mx-8 hidden h-[calc(180px_-_theme(space.14))] flex-col items-center justify-center transition ease-in-out dark:text-white sm:mt-[calc((500px_-_theme(space.14))_*_0.05)] sm:flex sm:h-[calc(500px_-_theme(space.14))] lg:mt-0 lg:h-[calc(100vh_-_theme(space.14))] lg:w-7/12">
        <div className="flex h-[90%] w-full flex-col items-center justify-center rounded-xl bg-gray-400 transition ease-in-out dark:bg-slate-800">
          <Carousel />
          {/* <p class='text-2xl sm:hidden sm:text-5xl lg:text-5xl text-center'> */}
          {/*   Coming Soon ... */}
          {/* </p> */}
        </div>
      </section>
      <Link
        href="/projects"
        className="mx-8 flex h-[calc(180px_-_theme(space.14))] flex-col items-center justify-center transition ease-in-out dark:text-white xs:h-[calc(200px_-_theme(space.14))] sm:hidden"
      >
        <div className="flex h-[90%] w-full flex-col items-center justify-center rounded-xl border-2 border-gray-400 transition ease-in-out dark:border-slate-800">
          projects
        </div>
      </Link>
    </>
  );
};
