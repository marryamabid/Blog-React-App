import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import { Container, PostCard } from "../components/index";
import { useSelector } from "react-redux"; // Import useSelector to get user state

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const user = useSelector((state) => state.auth.userData); // Get user data from Redux store

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await service.getPosts();
                if (response?.documents) {
                    setPosts(response.documents);
                } else {
                    setError("No posts found.");
                }
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError("Failed to load posts.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <h1 className="text-2xl font-bold text-gray-600">
                        Loading posts...
                    </h1>
                </Container>
            </div>
        );
    }

    if (error || posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <h1 className="text-2xl font-bold text-gray-500">
                        {user ? "Go to all Posts" : "Login to add blogs"}
                    </h1>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;