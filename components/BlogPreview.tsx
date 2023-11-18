import { blogData } from "@/data/blogs";
import Link from "next/link";

type BlogLinkProps = {
  /**border top*/
  bt: boolean;
  /**rounded top*/
  rt: boolean;
  icon: any;
  date: string;
  title: string;
  href: string;
};

const BlogLink = (props: BlogLinkProps) => {
  const topRadius = () => (props.rt ? " rounded-t-xl" : "");
  const topBorder = () => (props.rt ? " border-t" : "");

  return (
    <Link href={props.href}>
      <div
        className={
          "flex h-[150px] w-full border-b border-l border-r border-gray-400 bg-slate-50 hover:bg-slate-400 dark:border-slate-500 dark:bg-slate-700 hover:dark:bg-slate-500" +
          topRadius() +
          topBorder()
        }
      >
        <div className="flex h-[150px] w-[150px] items-center justify-center">
          <img className="m-auto w-[50%] animate-fade-in-up" src={props.icon.src} width="80" height="80" />
        </div>
        <div className="flex w-full animate-fade-in-up flex-col justify-center">
          <p>{props.date}</p>
          <h2 className="text-2xl">{props.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export const BlogPreview = () => {
  const recentBlogPosts = (JSON.parse(JSON.stringify(blogData)) as typeof blogData).reverse();

  return (
    <>
      <section className="mx-8 hidden h-[calc(180px_-_theme(space.14))] flex-col items-center justify-center transition ease-in-out dark:text-white dark:ease-in-out sm:flex sm:h-[calc(500px_-_theme(space.14))] lg:ml-0 lg:h-[calc(100vh_-_theme(space.14))] lg:w-5/12">
        <div className="flex h-[90%] w-full flex-col rounded-xl bg-gray-300 transition ease-in-out dark:bg-slate-800">
          {recentBlogPosts.map((post, i) => (
            <BlogLink bt={i === 0} rt={i === 0} date={post.date} icon={post.icon} title={post.title} href={`/blog/${post.slug}`} />
          ))}
          <p className="text-center text-2xl sm:hidden sm:text-5xl lg:text-5xl">Blog ... Coming soon first ...</p>
        </div>
      </section>
      <Link
        href="/articles"
        className="mx-8 flex h-[calc(180px_-_theme(space.14))] flex-col items-center justify-center transition ease-in-out dark:text-white xs:h-[calc(200px_-_theme(space.14))] sm:hidden"
      >
        <div className="flex h-[90%] w-full flex-col items-center justify-center rounded-xl border-2 border-gray-400 transition ease-in-out dark:border-slate-800">
          blog
        </div>
      </Link>
    </>
  );
};
