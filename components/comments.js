import getPostComments from "utils/getPostComments";

export default async function Comments(props) {
  const comments = await getPostComments(props.postId);
  return comments.map((comment) => {
    return (
      <div key={comment.post} className="flex flex-col bg-white gap-5 p-8">
        <div className="flex gap-4 font-public_sans justify-between">
          <p className=" font-extrabold">{comment.name}</p>
          <p className=" opacity-70 ">{comment.date}</p>
        </div>
        <p className="text-lg font-bold font-public_sans">{comment.content}</p>
      </div>
    );
  });
}
