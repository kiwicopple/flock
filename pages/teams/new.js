import React from 'react'
import Section from '~/components/Section'
import NewTeam from '~/components/Dashboard/NewTeam'
import SignIn from '~/components/SignIn'
import { useRouter } from 'next/router'

function NewTeamPage(props) {
  const router = useRouter()

  // Go to page after signin
  const onSignin = () => {
    router.push('/dashboard')
  }

  return (
    <Section color="white" size="large" backgroundImage="" backgroundImageOpacity={1}>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-6">
            <div className="box">
              <h3 className="title is-3">Create a new team.</h3>
              <NewTeam buttonText={'Sign in'} parentColor={'white'} onSignin={onSignin} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default NewTeamPage
