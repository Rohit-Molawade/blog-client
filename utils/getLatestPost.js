export default async function getLatestPosts() {
    const response = await fetch('http://localhost:3001/api/posts/latest', {cache: "no-store"});
    const latest_blog_data = await response.json();
    console.log(latest_blog_data);
    return latest_blog_data.post[0]
}