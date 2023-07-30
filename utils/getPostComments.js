export default async function getPostComments(postId) {
  const response = await fetch(
    `http://localhost:3001/api/posts/${postId}/comments`,
    { cache: "no-store" }
  );
  const comments = await response.json();
  return comments.comments;
}
