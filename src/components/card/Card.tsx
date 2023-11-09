import { FC, ReactElement, useEffect, useState } from 'react';
import { useIsHintedContext } from '../../context';
import styles from './Card.module.scss';
import Info from '../info/Info';
import Form from '../form/Form';
import cn from 'classnames';

const Card: FC = () => {
	const { isHinted } = useIsHintedContext();
	const [content, setContent] = useState<ReactElement>(<Form />);

	useEffect(() => {
		let timer: NodeJS.Timeout;

		if (isHinted) {
			timer = setTimeout(() => {
				setContent(<Info />);
			}, 300);
		} else {
			timer = setTimeout(() => {
				setContent(<Form />);
			}, 300);
		}

		return () => clearTimeout(timer);
	}, [isHinted]);

	return (
		<div
			className={cn({
				[styles.card]: true,
				[styles.rotateOn]: isHinted,
				[styles.rotateOff]: !isHinted,
			})}
		>
			{content}
		</div>
	);
};

export default Card;
