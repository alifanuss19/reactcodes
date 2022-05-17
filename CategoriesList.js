import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const CategoriesList = () => {
    const [Categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        const apiUrl = "https://jsonplaceholder.typicode.com/albums";
        fetch(apiUrl)
            .then(response => response.json())
            .then(
                (Categoriesdata) => {
                    setCategories(Categoriesdata);
                    setIsLoading(false);
                },
                (error) => {
                    setIsLoading(false);
                    alert("error in get Categories data");
                },
                // () =>{ //finally
            );
    };

    return (
        <div>
            <div>album lists</div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? <Spinner/> : Categories.map(item =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CategoriesList;
