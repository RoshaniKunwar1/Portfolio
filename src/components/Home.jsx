import React from 'react'
import Hero from './Hero'
import About from './About'
import Technologies from './Technologies'
import Education from './Education'
import Projects from './Projects'

const Home = () => {
	return (
		<div>
			<Hero/>
			<About />
			<Technologies />
			<Education />
			<Projects />
		</div>
	)
}

export default Home