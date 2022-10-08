import React from 'react'
import User from '../../components/Dashboard'
import Container from '../../components/Dashboard/components/Container'
import Feed from '../../components/Dashboard/components/Feed'
import NewJob from '../../components/Dashboard/components/NewJob'
import ProfileNav from '../../components/Dashboard/components/ProfileNav'
import Protect from '../../components/layouts/Protect'
import { useAuth } from '../../context/AuthUserContext'
function NewJobPage() {
    const { authUser } = useAuth()
    return (
        <Protect>
            <User />
            <Container>
                {/* <Feed /> */}
                <NewJob />
            </Container>
        </Protect>
    )
}

export default NewJobPage