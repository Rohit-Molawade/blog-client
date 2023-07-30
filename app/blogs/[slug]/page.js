import getPost from "utils/getpost";
import Blog from "@/components/blog";

export default async function Page({ params }) {
  const blog = await getPost(params.slug);
  return <Blog blog={blog} />;
}
