import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'
import DashSidebar from '../Components/DashSidebar';
import DashProfile from '../Components/DashProfile';
import DashPosts from '../Components/DashPosts';
import DashUsers from '../Components/DashUsers';
import DashComments from '../Components/DashComments';
import DashboardComponent from '../Components/DashboardComponent';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('')
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  }, [location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* sidebar */}
        <DashSidebar />
      </div>
      {/* profile */}
      {tab === 'profile' && <DashProfile/>}
      {/* posts */}
      {tab === 'posts' && <DashPosts/>}
      {/* Users */}
      {tab === 'users' && <DashUsers/>}
      {/* Comments */}
      {tab === 'comments' && <DashComments/>}
      {/* dashboard component */}
      {tab === 'dash' && <DashboardComponent/>}
    </div>
  )
}
