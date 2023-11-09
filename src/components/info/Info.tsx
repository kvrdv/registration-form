import { FC } from 'react';
import { useIsHintedContext } from '../../context';
import { v4 as uuidv4 } from 'uuid';
import styles from './Info.module.scss';

const Info: FC = () => {
	const { setIsHinted } = useIsHintedContext();

	const data = [
		{
			id: '1',
			orderedItem: 'Чем вы занимаетесь?',
			unOrderedItems: [
				'Расскажите о своей компании.',
				'Как работаете, на чем зарабатываете?',
				'Кто ваши конкуренты?',
				'Чем вы от них отличаетесь?',
			],
		},
		{
			id: '2',
			orderedItem: 'В чем ваша задача?',
			unOrderedItems: [
				'Чего хотите достичь в ближайшем будущем?',
				'Что вам мешает?',
			],
		},
		{
			id: '3',
			orderedItem: 'Каким вы видите решение задачи?',
			unOrderedItems: [
				'Как планируете достичь своих целей?',
				'Какие решения пробовали раньше?',
			],
		},
		{
			id: '4',
			orderedItem: 'Какие у вас ожидания от результата?',
			unOrderedItems: [
				'В каком виде вы хотите видеть решение вашей задачи?',
				'В какой срок?',
				'Почему он важен? На что это должно быть похоже?',
			],
		},
		{
			id: '5',
			orderedItem: 'Сколько денег планируете потратить?',
			unOrderedItems: [
				'Каков ваш бюджет?',
				'Почему вы готовы потратить именно такую сумму?',
			],
		},
	];

	const onHintClick = () => {
		setIsHinted(false);
	};

	return (
		<div className={styles.infoWrapper}>
			<h3 className={styles.header}>
				Что написать в сообщении или файле?
			</h3>

			<ol className={styles.oList}>
				{data.map((item) => {
					return (
						<li key={uuidv4()} className={styles.oListItem}>
							{item.orderedItem}
							<ul className={styles.uList}>
								{item.unOrderedItems.map((element) => {
									return (
										<li
											key={uuidv4()}
											className={styles.uListItem}
										>
											{element}
										</li>
									);
								})}
							</ul>
						</li>
					);
				})}
			</ol>

			<button
				className={styles.button}
				type="button"
				onClick={onHintClick}
			>
				<svg
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.8 14.2V21.6L20.4 21.9C27.8 22.6 33.5 25.6 37.1 29.4C33 28 27.8 27.3 21 27L16.8 26.8V33.9L7.00003 24.1L16.8 14.2ZM19.7 6C19.5434 5.99115 19.3872 6.02342 19.2468 6.09358C19.1065 6.16375 18.9869 6.26938 18.9 6.4L2.40003 23.1C2.15406 23.375 2.01807 23.731 2.01807 24.1C2.01807 24.469 2.15406 24.825 2.40003 25.1L18.9 41.6C18.9869 41.7306 19.1065 41.8362 19.2468 41.9064C19.3872 41.9766 19.5434 42.0088 19.7 42C19.8578 41.9874 20.0116 41.9437 20.1524 41.8714C20.2932 41.7992 20.4183 41.6998 20.5206 41.5789C20.6228 41.4581 20.7002 41.3182 20.7481 41.1674C20.7961 41.0165 20.8137 40.8577 20.8 40.7V31C36.5 31.7 41.9 34.8 44.3 40.2C44.7 41 45.1 41.3 45.4 41.3C45.7 41.3 46 40.9 46 40.3C45.8 29.8 36 19.4 20.8 17.9V7.3C20.8137 7.1423 20.7961 6.98346 20.7481 6.83261C20.7002 6.68176 20.6228 6.54189 20.5206 6.42106C20.4183 6.30022 20.2932 6.20081 20.1524 6.12855C20.0116 6.05628 19.8578 6.01259 19.7 6Z"
						fill="white"
					/>
				</svg>
				Вернуться к заполнению
			</button>
		</div>
	);
};

export default Info;
