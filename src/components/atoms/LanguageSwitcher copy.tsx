'use client'

import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { withTranslationInit } from '@utils'
import { useStore } from '@store'
import styles from './LanguageSwitcher.module.scss'

const LanguageSwitcher = () => {
	const { i18n } = useTranslation('common')
	const { setLanguage } = useStore()

	useEffect(() => {
		const savedLanguage = localStorage.getItem('lng') || 'en'
		i18n.changeLanguage(savedLanguage)
		setLanguage(savedLanguage)
	}, [i18n, setLanguage])

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
		setLanguage(lng)
		localStorage.setItem('lng', lng)
	}

	return (
		<div className={styles.container}>
			<button onClick={() => changeLanguage('en')}>EN</button>
			<button onClick={() => changeLanguage('fr')}>FR</button>
		</div>
	)
}

export default withTranslationInit(LanguageSwitcher)
