import getPosts from "utils/getPosts";
import Image from "next/image";
import Link from "next/link";
import { sanitize } from "isomorphic-dompurify";

export default async function Page() {
  //Display All posts
  const posts = await getPosts();
  return (
    <>
      <div className="flex flex-col items-center my-20 max-w-full gap-14">
        {posts.map((post) => {
          return (
            <div className="flex w-3/5 justify-between hover:shadow-2xl">
              <Link href={`/blogs/${post._id}`}>
                <div className="flex gap-2 flex-col p-4 pr-20">
                  <span className=" font-public_sans text-xl font-semibold">
                    {post.title}
                  </span>
                  <span className=" text-slate-400 font-light text-sm">
                    {post.date}
                  </span>{" "}
                  <br />
                  <div
                    className=" wrap-para"
                    dangerouslySetInnerHTML={{
                      __html: sanitize(post.v_content),
                    }}
                  />
                </div>
              </Link>
              <Image
                src={post.v_banner_image_url}
                alt="Post_banner"
                width={300}
                height={100}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
