import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export default function PostsRoute() {
  let { posts } = useLoaderData() as LoaderData;
  console.log("posts", posts);

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

type Post = {
  slug: string;
  title: string;
};

type LoaderData = {
  posts: Array<Post>;
};

export async function loader() {
  return json<LoaderData>({
    posts: await getPosts(),
  });
}
