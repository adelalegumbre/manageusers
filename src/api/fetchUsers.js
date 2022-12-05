import axios from 'axios'
import React from 'react'

export const fetchUsers = async () => {
  const resp = await axios.get("http://localhost:3001/users")
  return resp.data
}
