import { BsSearch } from 'react-icons/bs'

import { useState } from 'react'

interface SearchProps {
  loadUser: (userName: string) => Promise<void>
}

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState(null)

  return (
    <div className="container">
      <h2>Search for an user</h2>
      <p>Discover the best repositories</p>
      <div>
        <input onChange={e => { setUserName(e.target.value) }} type="text" name="user" placeholder='Type username' />
        <button><BsSearch /></button>
      </div>
    </div>
  )
}

export default Search
