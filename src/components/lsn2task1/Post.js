import React from 'react';
const Post = ({value}) => {

    return (
        <div>
            {
                <p>
                    id - {value.id} <br/>
                    {/*postId - {value.postId} <br/>*/}
                    userId - {value.userId} <br/>
                    title - {value.title} <br/>
                    email - {value.email} <br/>
                    <button onClick={()=> {
                        // lift(value);
                    }}>details</button>

                </p>
            }


        </div>
    );
};

export default Post;
