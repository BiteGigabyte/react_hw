// import React, {useEffect, useState} from 'react';
import React, {useEffect} from 'react';
import Post from "./Post";
// import Comment from "../comment/Comment";

// const Comments = ({lift}) => {
const Posts = () => {

    // let [comments, setComments] = useState([]);
    useEffect(() => {
let postsData;
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            // .then(allComments => {
            .then(allPosts => {
                // setComments(allComments);
                // console.log('log');
                postsData = allPosts;
                console.log(postsData);
    return (
        <>
            {
                postsData.map(value =>
                    <Post
                        value={value}
                        // lift={lift}
                        key={value.id}/>
                )
            }
        </>
    );
            });
    }, []);

};

export default Posts;
