import { BsSearch } from 'react-icons/bs';

import { useState, KeyboardEvent } from 'react';

import classes from './Search.module.css';

interface SearchProps {
  loadUser: (userName: string) => Promise<void>
}

const Search = ({ loadUser }: SearchProps) => {
	const [userName, setUserName] = useState(null);
	const handleKeyDown = (e: KeyboardEvent) => {
		if(e.key === 'Enter') {
			loadUser(userName);
		}
	};
	return (
		<div className={classes.search}>
			<h2>Search for an user</h2>
			<p>Discover the best repositories</p>
			<div className={classes.search_container}>
				<input
					onChange={(e) => setUserName(e.target.value)}
					onKeyDown={handleKeyDown}
					type="text"
					placeholder='Type the username'
				/>
				<button onClick={() => loadUser(userName)}>
					<BsSearch />
				</button>
			</div>
		</div>
	);
};

export default Search;
