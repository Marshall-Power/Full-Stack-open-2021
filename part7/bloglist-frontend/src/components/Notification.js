import React from 'react'
<<<<<<< HEAD
import { useSelector } from 'react-redux'

const Notification = () => {
    const notification = useSelector(state => state.notifications)
    if (notification === '') {
=======

const Notification = ({ message }) => {
    if (message === null) {
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8
        return null
    }

    return (
        <div className="error">
<<<<<<< HEAD
            {notification}
=======
            {message}
>>>>>>> 734f0812f77045fe1fb8cd831cc3219d1d856eb8
        </div>
    )
}

export default Notification