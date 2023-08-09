export default async function getPosts() {
  const response = await fetch("http://localhost:3001/api/posts/", {
    cache: "no-store",
  });
  const blog_data = await response.json();
  return blog_data.posts;
}
