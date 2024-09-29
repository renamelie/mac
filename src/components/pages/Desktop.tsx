import Image from 'next/image'
import React from 'react'
import styles from './Desktop.module.scss'

const Desktop = () => {
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src={'/images/folder.png'} alt="Folder" width={70} height={70} />
					</div>
					<div className={styles.label}>A</div>
				</div>
				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src={'/images/folder.png'} alt="Folder" width={70} height={70} />
					</div>
					<div className={styles.label}>B</div>
				</div>
				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src={'/images/folder.png'} alt="Folder" width={70} height={70} />
					</div>
					<div className={styles.label}>C</div>
				</div>
				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src={'/images/folder.png'} alt="Folder" width={70} height={70} />
					</div>
					<div className={styles.label}>D</div>
				</div>
				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src={'/images/folder.png'} alt="Folder" width={70} height={70} />
					</div>
					<div className={styles.label}>E</div>
				</div>
				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src={'/images/folder.png'} alt="Folder" width={70} height={70} />
					</div>
					<div className={styles.label}>F</div>
				</div>
				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src={'/images/folder.png'} alt="Folder" width={70} height={70} />
					</div>
					<div className={styles.label}>G</div>
				</div>
				<div className={styles.item}>
					<div className={styles.icon}>
						<Image src={'/images/folder.png'} alt="Folder" width={70} height={70} />
					</div>
					<div className={styles.label}>H</div>
				</div>
			</div>
		</div>
	)
}

export default Desktop
