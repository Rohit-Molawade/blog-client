import Image from "next/image";
import Comments_section from "@/components/comments_section";

export default async function Blog({ blog }) {
  return (
    <>
      <div className="flex flex-col items-center px-20 pt-20">
        <div className="max-w-3xl w-1/2">
          <div>
            <Image
              src={blog.v_banner_image_url}
              alt={`Banner Iamge for ${blog.title}`}
              width={800}
              height={400}
            ></Image>
          </div>
          <div className="py-8">
            <p className="text-5xl font-ibm_plex">{blog.title}</p>
          </div>
          <div className="flex my-2">
            <Image
              src={blog.admin_pp_url}
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
            <p> {blog.content}</p>
          </div>
        </div>
      </div>
      <Comments_section postId={blog._id} />
    </>
  );
}
