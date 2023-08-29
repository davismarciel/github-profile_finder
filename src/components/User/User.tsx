import { type UserProps } from '../../types/user';

import { MdLocationPin } from 'react-icons/md';

import { Link } from 'react-router-dom';

import classes from './User.module.css';

const User = ({login, avatar_url, followers, following, location, html_url}: UserProps) => {
	return (
		<div className={classes.user}>
			<img src={avatar_url} alt={`Photo of ${login}`} />
			<h2>{login}</h2>
			{location && (
				<p className={classes.location}>
					<MdLocationPin />
					<span>{location}</span>
				</p>
			)}
			<div className={classes.stats}>
				<div>
					<p>Followers:</p>
					<p className={classes.number}>{followers}</p>
				</div>
				<div>
					<p>Following:</p>
					<p className={classes.number}>{following}</p>
				</div>
			</div>
			<Link to={`${html_url}`} target='_blank'>Show full profile on GitHub</Link>
		</div>
	);
};

export default User;