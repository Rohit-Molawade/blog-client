export default async function getPost(postId) {
  const response = await fetch(`http://localhost:3001/api/posts/${postId}`, {
    cache: "no-store",
  });
  const blog_data = await response.json();
  return blog_data.post;
}
