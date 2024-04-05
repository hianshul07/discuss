import { Button } from '@nextui-org/react';
import * as actions from '@/actions';

const HomePage = () => {
	return (
		<div>
			<form action={actions.signIn}>
				<Button color='primary'>Sign In</Button>
			</form>

			<form action={actions.signOut}>
				<Button color='default'>Sign Out</Button>
			</form>
		</div>
	);
};
export default HomePage;

