import React, { useEffect } from 'react'
import { useAuth, addConfig } from './../util/auth.js'
import { useRouter } from 'next/router'
import { get } from 'lodash'
import Section from '../components/Section'
import Link from 'next/link'

function DashboardPage(props) {
  const auth = useAuth()
  const router = useRouter()
  const userId = get(auth, 'user.id', null)

  // Redirect to /signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push('/signin')
    }
  }, [auth, router])

  return (
    <Section>
      <div className="container">
        <div className="level is-mobile">
          <div className="level-left">
            <h2 className="title is-3">Teams</h2>
          </div>
          <div className="level-right">
            <h2 className="title is-3">
              <Link href="/teams/new">
                <a className="button is-primary" onClick={() => addConfig(userId)}>
                  New
                </a>
              </Link>
            </h2>
          </div>
        </div>

        <Link href="/teams/id">
          <a className="box">
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p className="heading">project-id</p>
                  <p className="subtitle">Project Name</p>
                </div>
              </div>
            </article>
          </a>
        </Link>

        <h2 className="title is-5">New Team</h2>
        <div class="field">
          <label class="label">Team ID</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text ID" />
          </div>
          <p class="help">Must be alphanumeric number</p>
        </div>
        <div class="field">
          <label class="label">Team Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text name" />
            <p class="help">You can always change the name later.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default DashboardPage
