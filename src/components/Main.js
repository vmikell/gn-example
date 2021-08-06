import './Main.scss'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Main = () => {
  const skills = [
    {
      name: 'bootstrap',
      src: './images/bootstrap-logo.png',
    },
    {
      name: 'SaSS',
      src: './images/Sass_logo.png',
    },
    {
      name: 'react',
      src: './images/react-logo-2.png',
    },
    {
      name: 'vue',
      src: './images/vue-logo.png',
    },
    {
      name: 'adobe',
      src: './images/adobe-logo-3.png',
    },
  ]

  let skill
  let skillName
  const [state, setState] = useState(0)

  const nextSkill = () => {
    if (state < skills.length - 1) {
      setState((prevState) => prevState + 1)
    } else if (state == skills.length - 1) {
      setState(0)
    }
  }

  const prevSkill = () => {
    if (state > 0) {
      setState((prevState) => prevState - 1)
    } else {
      setState((prevState) => prevState + skills.length - 1)
    }
  }

  skill = skills[state].src
  skillName = skills[state].name

  return (
    <div className='main'>
      <div className='main--skills-wrapper'>
        <h2>My Skillset</h2>
        <div className='main--img-wrapper'>
          <img src={skill} alt={`${skillName} brand logo image`} />
        </div>
        <button onClick={prevSkill}>prev</button>
        <button onClick={nextSkill}>next</button>
      </div>
    </div>
  )
}

Main.propTypes = {
  skill: PropTypes.string,
  skillName: PropTypes.string,
}

export default Main
