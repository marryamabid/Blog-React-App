import React,{useState,useEffect} from "react";
import { Container,PostCard } from "../components";
import  service from "../appwrite/config";


function AllPosts() {
    const [posts,setPosts]= useState([])
    useEffect(()=>{},[])
    service.getPosts([]).then((posts)=> {
        if (posts) {
            setPosts(posts.documents)
        }
    }).catch(error => {
        console.log("Error fetching posts at all posts:", error);
        setPosts([]); // Handle errors gracefully
    });
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                </Container>
        </div>
      )
}

export default AllPosts

