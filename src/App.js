import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeForm from './components/RecipeForm';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Redeem from './components/Redeem';
import Profile from './components/Profile';
import { useEffect, useState } from 'react';
import Issues from './components/Issues';
import IssuesBoard from './components/IssuesBoard';
import Leaderboard from './components/Leaderboard';
import axios from 'axios'
import CentralIssues from './components/CentralIssues';


function App() {

  const [profile, setProfile] = useState({
    id: 0,
    level: 12,
    exp: 200,
    pointScore: 121,
    githubLink: "",
    name: "David Franke"
  })

  const [issues, setIssues] = useState([
    {
        id: 1,
        title: 'Index file not found if user is not logged in',
        status: 'in progress',
        description: 'There has been some issue with the index file, always when...',
        points: '420'
    },
    {
        id: 2,
        title: 'Nothing happens when button x is clicked',
        status: 'pending',
        description: 'On path /home/nope the submit button doesnt do anything...',
        points: '69'
    }
  ])

  useEffect(() => {
    const url = 'https://davidfranke.youtrack.cloud/api/issues?fields=id,summary,project(name)';
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer perm:cm9vdA==.NDgtMA==.TKJ7CvgnSsSAxxl0FB2eTHtlgaclrG',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': true,
    };

    axios.get(url, { headers })
      .then(response => {
        console.log(response.data); // Handle the response data here
    })
      .catch(error => {
        console.error('Error making request:', error);
    });
  }, [])




  const [curIssues, setCurIssues] = useState([
      {
          id: 3,
          title: 'Index file not found if user is not logged in',
          status: 'in progress',
          description: 'There has been some issue with the index file, always when...',
          points: '420'
      },
      {
          id:4,
          title: 'Nothing happens when button x is clicked',
          status: 'pending',
          description: 'On path /home/nope the submit button doesnt do anything...',
          points: '69'
      } 
  ])


  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path='' element={<Dashboard profile={profile} />} />
          <Route path='/leaderboard' element={<Leaderboard profile={profile} />} />
          <Route path='/issues' element={<CentralIssues setIssues={setIssues} setCurIssues={setCurIssues} issues={issues} profile={profile} />} />
          <Route path='/claimed-issues' element={<CentralIssues setIssues={setIssues} setCurIssues={setCurIssues} issues={issues} profile={profile} />} />
          <Route path='/redeem' element={<Redeem />} />
          <Route path='/profile' element={<Dashboard profile={profile} />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
