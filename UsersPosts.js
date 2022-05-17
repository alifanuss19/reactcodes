import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import PostsInfo from './PostsInfo';

const UsersPosts = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
        fetch(apiUrl)
            .then(response => response.json())
            .then(
                (usersdata) => {
                    setUsers(usersdata);
                },
                (error) => {
                    alert("error in get users data");
                });
    };

    const chUser = (event) => {
        setIsLoading(true);
        const userId = event.target.value;
        const apiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(
                (userposts) => {
                    setPosts(userposts);
                    setIsLoading(false);
                }, (error) => {
                    setIsLoading(false);
                    alert("error in get user posts");
                });
    };

    return (
        <div>
            <div>لیست پست های کاربران</div>
            <label>کاربر مورد نظر : </label>
            <select onChange={(event) => chUser(event)}>
                <option>انتخاب کنید</option>
                {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
            </select>
            <div>
                {isLoading ? <Spinner /> : posts.map(item => <PostsInfo key={item.id} postsinfo={item} />)}
            </div>
        </div>
    );
};

export default UsersPosts;
