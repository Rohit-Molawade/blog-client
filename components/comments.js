import getPostComments from "utils/getPostComments";
import Add_comment from "./add_comment";

export default async function Comments(props) {
  const comments = await getPostComments(props.postId);
  return (
    <>
      <Add_comment postId={props.postId} />
      {comments.length !== 0 ? (
        comments.map((comment) => {
          return (
            <>
              <div
                key={comment.post}
                className="flex flex-col bg-white gap-5 p-8 mt-6"
              >
                <div className="flex gap-4 font-public_sans justify-between">
                  <p className=" font-extrabold">{comment.name}</p>
                  <p className=" opacity-70 ">{comment.date}</p>
                </div>
                <p className="text-lg font-bold font-public_sans">
                  {comment.content}
                </p>
              </div>
            </>
          );
        })
      ) : (
        <div>
          <p className=" text-red-600 font-ibm_plex text-2xl">
            No comments yet!
          </p>
        </div>
      )}
    </>
  );
}
