import { Session } from 'next-auth'
import React from 'react'

const Profile = ({ session }: { session: Session | null }) => {
  return (
    <div>
      <h2>Profile</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}

export default Profile