import React from 'react'
import { Toolbar, Desktop } from '@components'
import styles from './MacOS.module.scss'

const MacOS = () => {
	return (
		<div className={styles.container}>
			<Toolbar />
			<Desktop />
		</div>
	)
}

export default MacOS
