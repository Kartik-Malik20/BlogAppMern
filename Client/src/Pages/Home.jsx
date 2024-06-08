import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import CallToAction from '../Components/CallToAction'
import PostCard from '../Components/PostCard'

export default function Home() {
  const [posts,setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async() => {
      const res = await fetch('/api/post/getPosts')
      const data = await res.json()
      setPosts(data.posts) 
    }
    fetchPosts()
  },[])
  return (
    <div>
      <div className='flex flex-col gap-6 px-4 p-28 max-w-6xl mx-auto'>
        <h1 className='text-3xl sm:text-6xl font-bold'>Welcome to PostArena</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>Welcome to PostArena, your ultimate destination for insightful articles, engaging discussions, and diverse perspectives on a wide range of topics. Whether you're looking to stay updated on the latest trends, dive deep into thought-provoking analysis, or connect with a vibrant community of thinkers and creators, PostArena offers a dynamic platform to explore, share, and grow. Join us in fostering an environment where ideas flourish and conversations matter.</p>
      <Link to='/search' className='text-xs sm:text-sm text-teal-500 font-bold underline'>View All Posts</Link>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {
          posts && posts.length>0 && (
            <div className=''>
              <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
              <div className='flex flex-wrap gap-4 justify-center'>
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
              <Link to={'/search'} className='text-lg text-teal-500 hover:underline text-center'>View All Posts</Link>
            </div>
          )
        }
      </div>
    </div>
  )
}
