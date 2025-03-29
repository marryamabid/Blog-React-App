import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className="block group">
            <div className="w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
                <div className="w-full h-52 overflow-hidden rounded-t-xl">
                    <img
                        src={service.getFilePreview(featuredImage)}
                        alt={title}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;