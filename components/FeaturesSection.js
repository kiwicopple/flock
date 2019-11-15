import React from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Features from './Features'
import './FeaturesSection.scss'

function FeaturesSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader title={props.title} subtitle={props.subtitle} centered={true} size={3} />
        <div className="FeaturesSection__box box">
          <Features
            columns={2}
            items={[
              {
                title: 'Single point of entry',
                body:
                  'Use your favourite RESTful library, rather than instally many third-party libraries.',
                image: 'https://uploads.divjoy.com/undraw-directions_x53j.svg',
              },
              {
                title: 'Extended features',
                body:
                  'Convenience functions for extending some services (for example, bulk sending of messages).',
                image: 'https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg',
              },
              {
                title: 'Mocks and Tests',
                body:
                  'Mock & test responses for testing your code without triggering expensive services',
                image: 'https://uploads.divjoy.com/undraw-personal_settings_kihd.svg',
              },
              {
                title: 'Well documented',
                body: 'Standardized interface for communicating with many services.',
                image: 'https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg',
              },
            ]}
          />
        </div>
      </div>
    </Section>
  )
}

export default FeaturesSection
