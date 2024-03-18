import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useUser} from '@/hook/useUser';
import UserCard from '@ui/UserCard'
import Spinner from '@common/Spinner'

export default function SingleUser(){
	const {id} = useParams();
	const {getUserById} = useUser();
	const user = getUserById(id)


	return user ? <UserCard user={user}/> : <Spinner />
}