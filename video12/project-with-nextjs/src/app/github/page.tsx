'use client'
import React, { useCallback, useEffect, useState } from 'react'

const Github = () => {

    const [gitInfo, setGitInfo] = useState<{ followers: number, avatar_url: string }>()

    const fetchGitHubInfo = useCallback(() => {
        fetch("https://api.github.com/users/MuhammadNaeemRaza2916")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGitInfo(data);
            })
            .catch(error => console.error('Error fetching GitHub info:', error));
    }, []);

    useEffect(() => {
        fetchGitHubInfo();
    }, [fetchGitHubInfo]);


    return (
        <div className='bg-gray-700 text-white p-4 text-center w-[78rem] flex flex-col mx-auto'>
            <h1 className='text-3xl'>Github: {gitInfo?.followers}</h1>
            <img src={gitInfo?.avatar_url} alt="git picture" width={300} />
        </div>
    )
}

export default Github