import React from 'react'
import aboutImg from '../assets/me.webp'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'motion/react'

const About = () => {
	return (
		<div className='border-b border-neutral-900 pb-4'>
			<h1 className='my-20 text-center text-4xl'>About <span className="text-neutral-500">Me</span></h1>
			<div className="flex flex-wrap">
				<motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{duration:0.5}} className="w-full lg:w-1/2 lg:px-8 lg:py-2">
					<div className="flex item-center justify-center">
						<img src={aboutImg} alt="aout" className='w-[400px] h-[350px] rounded-lg shadow-lg filter brightness-90'/>
					</div>
				</motion.div>
				<motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0, x:100}} transition={{duration:0.5}} className="w-full lg:w-1/2">
					<div className="flex justify-center lg:justify-start">
						<p className='my-2 max-w-xl py-10 text-[18px]'>{ABOUT_TEXT}</p>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default About