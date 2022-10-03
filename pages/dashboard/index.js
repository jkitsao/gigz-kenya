import React from 'react'
import User from '../../components/Dashboard'
import Container from '../../components/Dashboard/components/Container'
import Feed from '../../components/Dashboard/components/Feed'
import ProfileNav from '../../components/Dashboard/components/ProfileNav'
import Protect from '../../components/layouts/Protect'
import { useAuth } from '../../context/AuthUserContext'
function Dashboard() {
    const { authUser } = useAuth()
    return (
        <Protect>
            <User />
            <Container>
                <Feed />
            </Container>
        </Protect>
    )
}

export default Dashboard