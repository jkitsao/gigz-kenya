import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons';
import { useAuth } from '../../../context/AuthUserContext';
import Link from 'next/link'
export default function ProfileMenu() {
    const { signOut, authUser } = useAuth()
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Button>{authUser?.name}</Button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
                    <Link href='/dashboard/new-job-form'>
                        Post a Job
                    </Link>
                </Menu.Item>
                <Menu.Item color="red" icon={<IconTrash size={14} />} onClick={signOut}>Signout</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}