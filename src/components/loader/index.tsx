import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './loader.module.scss';

const Loader = () => {
	return (
		<div className={styles.loader}>
			<LoadingOutlined/>
			<div>&lt;Loading/&gt;</div>
		</div>
	)
}

export default Loader;