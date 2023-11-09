import { FC } from 'react';
import styles from './CheckBox.module.scss';

const CheckBox: FC = () => {
	return (
		<div className={styles.formCheckbox}>
			<label htmlFor="check">
				cогласен на обработку моих
				<span className={styles.color}> персональных данных</span>
				<input type="checkbox" className={styles.checkbox} id="check" required/>
				<span className={styles.checked}></span>
			</label>
		</div>
	);
};

export default CheckBox;
