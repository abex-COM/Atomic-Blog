import { useState } from "react";
export default function AddPost({ onHandleSubmit }) {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  function handeSubmit(e) {
    e.preventDefault();
    onHandleSubmit({ title: postTitle, body: postBody });
    setPostBody("");
    setPostTitle("");
  }

  return (
    <form
      onSubmit={handeSubmit}
      className="grid grid-cols-2 items-center justify-center justify-items-center gap-2 bg-red-100 py-3 dark:bg-slate-800 sm:flex"
    >
      <input
        type="text"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        placeholder="Post title"
        className="md:w-46 w-max rounded-lg py-2 pl-2 text-xs shadow-md focus:outline-cyan-500 dark:bg-slate-600 dark:text-slate-300 dark:outline-none xs:text-base sm:w-40 sm:py-4 sm:text-sm md:text-lg lg:text-lg xl:w-96"
      />
      <textarea
        onChange={(e) => setPostBody(e.target.value)}
        type="text"
        value={postBody}
        rows="1"
        placeholder="Post body"
        className="max-h-32 min-h-10 w-max rounded-lg border-orange-400 py-2 pl-2 text-sm shadow-md focus:outline-cyan-500 dark:bg-slate-600 dark:text-slate-300 dark:outline-none sm:min-h-14 sm:w-80 sm:py-4 sm:text-sm md:w-[28rem] lg:text-lg xl:w-[46rem]"
      />
      <div className="col-span-2 w-max text-center sm:col-span-1">
        <button className="font-simobold w-max rounded-md bg-blue-600 px-2 py-1 text-xs text-teal-50 dark:bg-blue-800 sm:py-4 sm:text-base">
          ADD POST
        </button>
      </div>
    </form>
  );
}
