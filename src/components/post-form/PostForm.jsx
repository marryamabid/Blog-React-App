import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";

function PostForm({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  if (!userData) return <div className="text-center text-gray-500">Loading user data...</div>;

  const submit = async (data) => {
    if (!userData) {
      console.error("User data is not available. Cannot submit post.");
      return;
    }

    try {
      let file = data.image?.[0] ? await service.uploadFile(data.image[0]) : null;

      if (post) {
        if (file) {
          await service.deleteFile(post.featuredImage);
        }

        const updatedPost = await service.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : post.featuredImage,
        });

        if (updatedPost) navigate(`/post/${updatedPost.$id}`);
      } else {
        if (file) {
          const newPost = await service.createPost({
            ...data,
            featuredImage: file.$id,
            userId: userData.$id,
          });

          if (newPost) navigate(`/post/${newPost.$id}`);
        }
      }
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  const slugTransform = useCallback(
    (value) =>
      value
        ? value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-")
        : "",
    []
  );

  useEffect(() => {
    const subscription = watch(({ title }, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap gap-6 bg-white p-6 rounded-lg shadow-lg">
      <div className="w-full md:w-2/3 px-2">
        <Input
          label="Title"
          placeholder="Enter title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug"
          placeholder="Auto-generated slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })}
        />
        <RTE label="Content" name="content" control={control} defaultValue={getValues("content")} />
      </div>

      <div className="w-full md:w-1/3 px-2">
        <label className="text-sm font-medium text-gray-700">Featured Image</label>
        <input
          type="file"
          className="block w-full text-sm border border-gray-300 rounded-lg p-2 mb-4 cursor-pointer bg-gray-50"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />

        {post && (
          <div className="w-full mb-4">
            <img
              src={service.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg shadow-md w-full h-40 object-cover border"
            />
          </div>
        )}

        <Select options={["active", "inactive"]} label="Status" className="mb-4" {...register("status", { required: true })} />

        <Button type="submit" bgColor={post ? "bg-green-500" : "bg-blue-500"} className="w-full hover:opacity-90">
          {post ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
