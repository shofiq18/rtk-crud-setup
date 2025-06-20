"use client";

import Link from "next/link";
import { useState } from "react";
import {
  useGetPostsQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
} from "../feature/api/apiSlice";

export default function HomePage() {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();

  const [editingPost, setEditingPost] = useState<any>(null);
  const [formData, setFormData] = useState({ title: "", body: "" });

  const handleDelete = async (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this post?");
    if (confirmed) {
      try {
        await deletePost(id).unwrap();
        alert("Post deleted successfully!");
      } catch (err) {
        alert("Failed to delete post.");
      }
    }
  };

  const handleEdit = (post: any) => {
    setEditingPost(post);
    setFormData({ title: post.title, body: post.body });
  };

  const handleUpdate = async () => {
    try {
      await updatePost({ id: editingPost.id, data: formData }).unwrap();
      setEditingPost(null);
      alert("Post updated successfully!");
    } catch (err) {
      alert("Failed to update post.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Posts</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts?.map((post: any) => (
          <div key={post.id} className="border p-3 mb-3 rounded">
            <h2 className="font-semibold">
              <Link
                href={`/post/${post.id}`}
                className="hover:underline text-blue-600"
              >
                {post.title}
              </Link>
            </h2>
            <p>{post.body}</p>
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => handleEdit(post)}
                className="text-green-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      {/* Update Modal */}
      {editingPost && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-lg font-semibold mb-4">Edit Post</h2>

            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Title"
              className="w-full border p-2 rounded mb-3"
            />
            <textarea
              value={formData.body}
              onChange={(e) =>
                setFormData({ ...formData, body: e.target.value })
              }
              placeholder="Body"
              className="w-full border p-2 rounded mb-3"
            />
            <div className="flex gap-4 mt-2">
              <button onClick={handleUpdate} className="text-green-600">
                Update
              </button>
              <button
                onClick={() => handleDelete(editingPost.id)}
                className="text-red-600"
              >
                Delete
              </button>
              <Link
                href={`/post/${editingPost.id}`}
                className="text-blue-600 underline"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
