import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const gitInfo = useLoaderData()

    // const [gitInfo, setGitInfo] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/MuhammadNaeemRaza2916")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setGitInfo(data)
    //         })
    // }, [])


    return (
        <div className='bg-gray-700 text-white p-4 text-center w-[78rem] flex flex-col mx-auto'>
            <h1 className='text-3xl'>Github: {gitInfo.followers}</h1>
            <img src={gitInfo.avatar_url} alt="git picture" width={300} />
        </div>
    )
}

export default Github

export const GithubInformation = async () => {
    const response = await fetch("https://api.github.com/users/MuhammadNaeemRaza2916")
    return response.json()
}
