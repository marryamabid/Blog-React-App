import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <Controller
        name={name || "Content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey='invvmhfkc0eta3uji3kb74i7fqfmxgba3mmsabhkcfa717oj'
            initialValue={defaultValue}
            init={{
              height: 400,
              menubar: true,
              plugins: [
                "advlist", "autolink", "lists", "link", "image", "charmap", "preview",
                "anchor", "searchreplace", "visualblocks", "code", "fullscreen",
                "insertdatetime", "media", "table", "help", "wordcount"
              ],
              toolbar:
                "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | " +
                "bullist numlist outdent indent | link image | removeformat | code help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; padding: 10px; }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
