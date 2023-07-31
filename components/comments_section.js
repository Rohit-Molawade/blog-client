import Comments from "@/components/comments";

export default async function Comments_section(props) {
  return (
    <div className="flex flex-col items-center px-20 bg-slate-100">
      <div className=" w-1/2 max-w-3xl">
        <div className="py-8">
          <p className="text-3xl font-extrabold">Comments</p>
        </div>
        <div className="flex flex-col gap-10 mb-16">
          <Comments postId={props.postId} />
        </div>
      </div>
    </div>
  );
}
