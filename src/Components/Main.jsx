export default function Main({ posts }) {
  if (posts)
    return (
      <div className="overflow-auto dark:bg-slate-900">
        <ul className="grid w-full gap-2 p-2 text-xs xs:grid-cols-2 xs:text-base sm:grid-cols-3 md:grid-cols-4 md:text-lg lg:grid-cols-5 lg:text-xl xl:grid-cols-6">
          {posts.map((post, index) => (
            <PostList key={index} post={post} />
          ))}
        </ul>
      </div>
    );
}

function PostList({ post }) {
  return (
    <li className="flex h-32 flex-col rounded-md bg-slate-200 p-1 text-center dark:bg-slate-800 dark:text-slate-300 md:h-auto">
      <h1 className="font-mono font-bold capitalize text-green-600 dark:text-sky-400">
        {post.title}
      </h1>
      <p className="text-pretty text-center normal-case font-serif xs:text-sm md:text-base">
        {post.body}
      </p>
    </li>
  );
}
