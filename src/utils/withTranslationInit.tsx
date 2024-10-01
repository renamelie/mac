'use client'

import React, { useEffect, useState } from 'react'
import i18n from '../i18n'

export const withTranslationInit = (WrappedComponent: React.ComponentType) => {
	return function WithTranslationInit(props: React.JSX.IntrinsicAttributes) {
		const [isInitialized, setIsInitialized] = useState(false)

		useEffect(() => {
			if (i18n.isInitialized) {
				setIsInitialized(true)
			} else {
				const handleInitialized = () => setIsInitialized(true)
				i18n.on('initialized', handleInitialized)

				return () => {
					i18n.off('initialized', handleInitialized)
				}
			}
		}, [])

		if (!isInitialized) {
			return <div>Loading .. </div>
		}

		return <WrappedComponent {...props} />
	}
}
