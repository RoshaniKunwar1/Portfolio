import React from 'react'
import { FaBootstrap, FaGithub } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa6'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMysql } from 'react-icons/si'
import { TbBrandRedux } from 'react-icons/tb'
import { motion } from 'motion/react'


const iconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10], transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});

const Technologies = () => {
	return (
		<div className='border-b border-neutral-800 pb-24'>
			<motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>Technologies</motion.h1>
			<motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
				<motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiReactjsLine className='text-7xl text-cyan-400' />
				</motion.div>
				<motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<TbBrandRedux className='text-7xl text-purple-800' />
				</motion.div>
				<motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiTailwindCssFill className='text-7xl text-blue-500 bg-transparent rounded-2xl' />
				</motion.div>

				<motion.div variants={iconVariants(5.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<FaBootstrap className='text-7xl text-purple-800 bg-white rounded-2xl' />
				</motion.div>
				<motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<FaJava className='text-7xl text-orange-500' />
				</motion.div>
				<motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiMysql className='text-7xl text-blue-400' />
				</motion.div>
				<motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<FaGithub className='text-7xl text-white' />
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Technologies