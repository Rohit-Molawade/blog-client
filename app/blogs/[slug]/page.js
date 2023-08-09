import getPost from "utils/getpost";
import Blog from "@/components/blog";

export default async function Page({ params }) {
    //Display blog with particular ID provided in URL
  const blog = await getPost(params.slug);
  return <Blog blog={blog} />;
}
