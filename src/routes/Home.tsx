import { type UserProps } from '../types/user';

import Search from '../components/Search';
import User from '../components/User/User';
import Error from '../components/Error/Error';

import { useState } from 'react';

const Home = () => {
	const [user, setUser] = useState<UserProps | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const loadUser = async (userName: string) => {
		setError(false);
		setUser(null);
		setLoading(true);
		const res = await fetch(`https://api.github.com/users/${userName}`);

		const data = await res.json();

		if(res.status === 404) {
			setError(true);
			setLoading(false);
			return;
		}

		console.log(data);
		const { avatar_url, login, location, followers, following } = data;

		const userData: UserProps = {
			avatar_url,
			login,
			location,
			followers,
			following
		};

		setLoading(false);
		setUser(userData);
	};


	return (
		<div>
			<Search loadUser={loadUser} />
			{user && <User {...user}/> }
			{loading && <div className="custom-loader"></div>}
			{error && <Error />}
		</div>
	);
};

export default Home;
