"use client";

import { useGetPostByIdQuery } from "@/app/feature/api/apiSlice";
import { useParams } from "next/navigation";

export default function PostDetails() {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPostByIdQuery(id as string);

  if (isLoading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{post?.title}</h1>
      <p className="text-gray-700">{post?.content}</p>
    </div>
  );
}
