'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { withTranslationInit } from '@utils'
import styles from './LanguageSwitcher.module.scss'

const LanguageSwitcher = () => {
	const { i18n } = useTranslation('common')
	const [showDropdown, setShowDropdown] = useState(false)

	useEffect(() => {
		const savedLanguage = localStorage.getItem('lng') || 'en'
		i18n.changeLanguage(savedLanguage)
	}, [i18n])

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
		localStorage.setItem('lng', lng)
		setShowDropdown(false)
	}

	const toggleDropdown = () => {
		setShowDropdown(prev => !prev)
	}

	return (
		<div className={styles.container}>
			<button className={styles.dropdownButton} onClick={toggleDropdown}>
				{i18n.language.toUpperCase()}
			</button>

			{showDropdown && (
				<div className={styles.dropdownContent}>
					<button onClick={() => changeLanguage('en')}>EN</button>
					<button onClick={() => changeLanguage('fr')}>FR</button>
				</div>
			)}
		</div>
	)
}

export default withTranslationInit(LanguageSwitcher)
