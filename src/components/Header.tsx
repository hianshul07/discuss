import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Input,
	Button,
	Avatar,
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '@nextui-org/react';
import { signIn } from '@/actions/sign-in';
import { signOut } from '@/actions/sign-out';
import { ImGithub } from 'react-icons/im';
import { auth } from '@/auth';

const Header = async () => {
	const session = await auth();

	let authContent: React.ReactNode;
	if (session?.user) {
		authContent = (
			<Popover placement='bottom'>
				<PopoverTrigger>
					<Avatar src={session?.user.image || ''} />
				</PopoverTrigger>
				<PopoverContent>
					<div className='p-4'>
						<form action={signOut}>
							<Button type='submit' color='danger'>
								Sign Out
							</Button>
						</form>
					</div>
				</PopoverContent>
			</Popover>
		);
	} else {
		authContent = (
			<>
				<NavbarItem>
					<form action={signIn}>
						<Button type='submit' color='secondary' variant='bordered'>
							Sign In <ImGithub />
						</Button>
					</form>
				</NavbarItem>
				<NavbarItem>
					<form action={signIn}>
						<Button type='submit' color='primary' variant='bordered'>
							Sign Up <ImGithub />
						</Button>
					</form>
				</NavbarItem>
			</>
		);
	}

	return (
		<Navbar className='shadow mb-6'>
			<NavbarBrand className='font-bold'>Discuss</NavbarBrand>
			<NavbarContent justify='center'>
				<NavbarItem>
					<Input />
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				{/* {session?.user ? <div>Signed In</div> : <div>Signed Out</div>} */}
				{authContent}
			</NavbarContent>
		</Navbar>
	);
};
export default Header;
