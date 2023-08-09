export default async function getAuthor() {
  const response = await fetch("http://localhost:3001/api/admin/public", {
    cache: "no-store",
  });
  const author_profile = await response.json();
  return author_profile.profile[0];
}
