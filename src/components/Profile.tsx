'use client';

import { useSession } from 'next-auth/react';

const Profile = () => {
	const session = useSession();

	if (session.data?.user) {
		return 'from Client: Signed In';
	}
	return 'from Client: Signed Out';
};
export default Profile;
