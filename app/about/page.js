import Image from "next/image";
import emailImg from "../../public/images/mail.png";
import getAuthor from "utils/getauthor";

export default async function Page() {
  const author = await getAuthor();
  return (
    <div className="flex justify-center items-center m-14">
      <div className="flex flex-col w-2/4">
        <div className="w-full flex justify-center">
          <Image
            src={author.v_profile_picture_url}
            alt="Profile Picture"
            width={200}
            height={200}
          />
        </div>
        <div className="flex gap-5 p-4 items-center justify-between">
          <span className=" font-ibm_plex text-2xl font-bold">
            {author.username}
          </span>
          <div className="flex items-center gap-2">
            <Image src={emailImg}></Image>
            <p>{author.email}</p>
          </div>
        </div>
        <p className="font-public_sans p-10 text-slate-700">{author.about}</p>
      </div>
    </div>
  );
}
