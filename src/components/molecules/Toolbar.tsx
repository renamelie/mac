'use client'

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@components'
import styles from './Toolbar.module.scss'

const getFormattedDate = (language: string): string => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		day: 'numeric',
		month: 'short',
		// hour: '2-digit',
		// minute: '2-digit',
		// second: '2-digit',
	}

	const now = new Date()
	let formattedDate = new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-EN', options).format(now)
	formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)

	return formattedDate
}

const getFormattedHour = (language: string): string => {
	const options: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		// second: '2-digit',
	}

	const now = new Date()
	return new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-EN', options).format(now)
}

const Toolbar = () => {
	const { i18n } = useTranslation()
	const [currentDateTime, setCurrentDateTime] = useState<string>(getFormattedDate(i18n.language))
	const [currentHour, setCurrentHour] = useState<string>(getFormattedHour(i18n.language))

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentDateTime(getFormattedDate(i18n.language))
			setCurrentHour(getFormattedHour(i18n.language))
		}, 60000)

		return () => clearInterval(intervalId)
	}, [i18n.language])

	useEffect(() => {
		setCurrentDateTime(getFormattedDate(i18n.language))
		setCurrentHour(getFormattedHour(i18n.language))
	}, [i18n.language])

	return (
		<div className={styles.toolbar}>
			<h1>Amélie Ren</h1>
			<div className={styles.left}>
				<LanguageSwitcher />
				<div className={styles.time}>
					<span>{currentDateTime}</span>
					<span>{currentHour}</span>
				</div>
			</div>
		</div>
	)
}

export default Toolbar
