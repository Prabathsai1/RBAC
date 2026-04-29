import { useState, useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axiosInstance from './components/axios/axios.js'

function App() {
  const [data, setData] = useState([])
  const [team, setTeam] = useState([])
  const [getAllRoles, setGetAllRoles] = useState([])
  const [userId, setUserId] = useState("");
const [teamId, setTeamId] = useState("");
const [roleId, setRoleId] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitting data:', { userId, teamId, roleId });
    axiosInstance.post('/assignRole', {
    userId,
    teamId,
    roleId
    })
      .then(response => {
        console.log('Response data:', response.data);
      })
      .catch(error => {
        console.error('Error submitting data:', error);
      });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/users');
        console.log('Response data:', response.data);
        setData(response.data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axiosInstance.get('/teams');
        console.log('Response data:', response.data);
        setTeam(response.data.data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, []);

  useEffect(() => {
    const fetchAssignRoleData = async () => {
      try {
        const response = await axiosInstance.get('/getAllRoles');
        console.log('Response data:', response.data.data);
        setGetAllRoles(response.data.data);
      } catch (error) {
        console.error('Error fetching assign role data:', error);
      }
    };

    fetchAssignRoleData();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select value={userId} onChange={(e) => setUserId(e.target.value)}>
          <option value="">Select a user</option>
          {data.map((user) => (
            <option key={user._id} value={user._id}>
              {user.UserName}
            </option>
          ))}
        </select>
       <select value={teamId} onChange={(e) => setTeamId(e.target.value)}>
          <option value="">Select a team</option>
          {team.map((team) => (
            <option key={team._id} value={team._id}>
              {team.name}
            </option>
          ))}
        </select>
        <select value={roleId} onChange={(e) => setRoleId(e.target.value)}>
          <option value="">Select a role</option>
          {getAllRoles.map((role) => (
            <option key={role._id} value={role._id}>
              {role.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
