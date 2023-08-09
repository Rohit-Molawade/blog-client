import Image from "next/image";
import Comments_section from "@/components/comments_section";
import { sanitize } from "isomorphic-dompurify";

export default async function Blog({ blog }) {
  return (
    <>
      <div className="flex flex-col items-center px-20 pt-20">
        <div className="max-w-3xl w-1/2">
          <div className="flex justify-center">
            <Image
              src={blog.v_banner_image_url}
              alt={`Banner Iamge for ${blog.title}`}
              height={400}
              width={100}
            ></Image>
          </div>
          <div className="py-8">
            <p className="text-5xl font-ibm_plex">{blog.title}</p>
          </div>
          <div className="flex my-2">
            <Image
              src={blog.author.profile_picture_url}
              alt="Admin Profile Picture"
              width={32}
              height={32}
              className=" rounded-full"
            ></Image>
            <div className="flex flex-col ml-4">
              <span>{blog.date}</span>
              <span>{blog.author.username}</span>
            </div>
          </div>
          <div className="my-12">
            <div
              dangerouslySetInnerHTML={{
                __html: sanitize(blog.v_content),
              }}
            />
          </div>
        </div>
      </div>
      <Comments_section postId={blog._id} />
    </>
  );
}
