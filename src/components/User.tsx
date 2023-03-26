import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypecSelector";
import {useTypedDispatch} from "../hooks/useTypedDispatch";
import {fetchUsers} from "../store/ActionCreators/user";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
const User = () => {
    const {users, loading, error} = useTypedSelector(state => state.users)

    const {fetchUsers} = useTypedDispatch()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h3> <AiOutlineLoading3Quarters/></h3>
    }
    if (error) {
        return <p>{error}</p>
    }
    return (
        <div className='user'>
            {
                users.map((el) => (
                    <>
                        <h1>{el.name}</h1>
                        <h2>{el.email}</h2>
                    </>
                ))
            }
        </div>

    );
};

export default User;