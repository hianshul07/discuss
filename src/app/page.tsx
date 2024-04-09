import { Button } from '@nextui-org/react';
import * as actions from '@/actions';
import { auth } from '@/auth';
import Profile from '@/components/Profile';

const HomePage = async () => {
	const session = await auth();

	return (
		<div>
			<form action={actions.signIn}>
				<Button type='submit' color='primary'>
					Sign In
				</Button>
			</form>

			<form action={actions.signOut}>
				<Button type='submit' color='default'>
					Sign Out
				</Button>
			</form>

			{session?.user ? (
				<div>{JSON.stringify(session.user)}</div>
			) : (
				<div>Signed Out</div>
			)}

			<Profile />
		</div>
	);
};
export default HomePage;

