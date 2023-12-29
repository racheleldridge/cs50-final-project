import { useEffect, useState } from "react"

const Profile = (props) => {
    
    const [user, setUser] = useState()
    
    useEffect(() => {
        if (!props.user) return;
        setUser(props.user)
    }, [props.user])
  
    return (
        <article>
            {user && user?.picture && <img className="rounded-circle profilepic" src={user && user.picture} alt={user && user?.name} />}
            {user && user?.name}
        </article>
    )
  }
export default Profile