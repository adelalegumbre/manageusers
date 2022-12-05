  import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { UserList } from '../components/UserList'
import { AppContext } from '../context/AppContext';
  
  export const SearchUsers = () => {
    const [usersList, setUsersList] = useState();
    const { getUsers, deleteUser } = useContext(AppContext); 
    const setList = async () => {
      const list = await getUsers() 
      setUsersList(list)
    };

    const handleDelete = async (id)=>{
      deleteUser(id)
      const newUserList = usersList.filter(e=>{
        return e.id !== id
      })
      setUsersList(newUserList)
    }
  
    useEffect(()=>{
      setList()
    },[])
    return (
      <UserList usersList={usersList} handleDelete={handleDelete}/>
    )
  }
  