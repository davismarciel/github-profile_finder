import { type UserProps } from '../types/user';

import Search from '../components/Search';

import { useState } from 'react';

const Home = () => {
	const [user, setUser] = useState<UserProps | null>(null);

	const loadUser = async (userName: string) => {
		const res = await fetch(`https://api.github.com/users/${userName}`);

		const data = await res.json();

		console.log(data);
		const { avatar_url, login, location, followers, following } = data;

		const userData: UserProps = {
			avatar_url,
			login,
			location,
			followers,
			following
		};

		setUser(userData);
	};


	return (
		<div>
			<Search loadUser={loadUser} />
			{user && <p>{user.login}</p>}
		</div>
	);
};

export default Home;
