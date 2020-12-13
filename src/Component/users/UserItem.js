import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user: { login, avatar_url, html_url }, getUser, getUserRepos}) => {

    const getDetails=()=>{
        console.log(login);
        getUser(login)
        getUserRepos(login)

    }
        return (
            <div className='card text-center'>
                <img src={avatar_url} alt='img' className='round-img' style={{width:'60px'}} />
                <h3>{login}</h3>

                <div>
                    <button  className='btn btn-dark btn-sm my-1' onClick={getDetails}>
                        More
                    </button>
                </div>
            </div>
            
        )
    }

    UserItem.propTypes = {
        user : PropTypes.object.isRequired
    }

export default UserItem
