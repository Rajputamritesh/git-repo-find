import React, {Fragment} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import User from "./User";

const Users = ({ loading , users, user, getUser, getUserRepos, repos}) => {
console.log(user)
            if (loading){
            return <Spinner />
            }else{
                return (
                    <div className={(user && user.login)? "wrappedContainer":null}>
                <div style={(user && user.login)?userStyleDisplaySec:userStyle}   className="cards-display">
                {users.map(user => (
                <UserItem key={user.id} user={user} getUser={getUser} getUserRepos={getUserRepos} />
                ))}

                </div>

                {(user && user.login)?
                    <div className={details} style={{marginLeft:"auto"}} >   <User  getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={loading} /> </div>
                    :''
                }
                </div>
                )
            }
    };

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}
const details ={
    marginLeft: 'auto',

}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(18rem, 1fr) )',
    gridGap: '1rem',
}
const userStyleDisplaySec = {
    display: 'list',
    gridTemplateColumns: 'repeat(auto-fit,minmax(18rem, 1fr) )',
    gridGap: '1rem',
    overflow: 'scroll',
    maxHeight: '725px',
    overflowAnchor: 'auto',
    overflowX: 'hidden',
    width: '350px',
    marginTop:'3%'
}
export default Users
