import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons';
import { useAuth } from '../../../context/AuthUserContext';
export default function ProfileMenu() {
    const { signOut, authUser } = useAuth()
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Button>{authUser?.name}</Button>
            </Menu.Target>

            <Menu.Dropdown>
                {/* <Menu.Label>Application</Menu.Label>
                <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
                <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
                <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
                <Menu.Item
                    icon={<IconSearch size={14} />}
                    rightSection={<Text size="xs" color="dimmed">⌘K</Text>}
                >
                    Search
                </Menu.Item>

                <Menu.Divider /> */}

                {/* <Menu.Label>Danger zone</Menu.Label>*/}
                <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Post a Job</Menu.Item>
                <Menu.Item color="red" icon={<IconTrash size={14} />} onClick={signOut}>Signout</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}