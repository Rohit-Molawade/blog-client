"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function Add_comment(props) {
  const [commentInfo, setCommentInfo] = useState({ content: "", name: "" });

  //Toast Notification
  const successT = () => {
    toast.success("Comment Added successfullt");
  };

  const errorT = (error) => {
    if (error) {
      toast.error(error[0].msg);
    } else {
      toast.error("Unknown error Occurred");
    }
  };

  //Event Handlers
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCommentInfo({ ...commentInfo, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (commentInfo.content === "" || commentInfo.name === "") {
        //Add Toast Message
      alert("User name or Comment empty");
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/posts/${props.postId}/comments`,
        {
          cache: "no-store",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentInfo),
        }
      );

      const data = await response.json();

      if (data.error.errors) {
        errorT(data.error.errors);
      }

      if (response.ok) {
        successT();
      }
    } catch (error) {
      errorT();
      return error;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="font-mono text-lg font-semibold" htmlFor="comment">
        Add your Comment
      </label>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Username"
          onChange={handleChange}
          value={commentInfo.name}
          required
          className=" w-full mb-4"
        />
        <textarea
          id="comment"
          name="content"
          className="w-full h-28 p-2"
          onChange={handleChange}
          value={commentInfo.content}
          placeholder="Your comment goes here"
        />
        <button
          type="submit"
          onClick={handleClick}
          className=" bg-black text-white p-2 w-full mt-4"
        >
          ADD COMMENT
        </button>
      </form>
    </div>
  );
}
