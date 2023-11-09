import { FC, useState } from 'react';
import styles from './App.module.scss';
import { IsHintedContext } from '../../context';
import Card from '../card/Card';


const App: FC = () => {
	const [isHinted, setIsHinted] = useState<boolean>(false);

	return (
		<IsHintedContext.Provider value={{ isHinted, setIsHinted }}>
			<div className={styles.app}>
				{/* {isHinted ? <Info /> : <Form />} */}

				<Card />

				<svg
					className={styles.bg}
					viewBox="0 0 1728 1080"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M838.836 1080L781 887L385.5 887L318 1080H0L54.5 941.5L1728 0L1728 579.5L838.836 1080Z"
						fill="#0CB673"
						fillOpacity="0.3"
					/>
					<path
						d="M742.453 0L1157.07 1080H838.875L781.022 887.143H385.69L318.194 1080H0L424.259 0H742.453Z"
						fill="#0CB673"
						fillOpacity="0.3"
					/>
				</svg>
			</div>
		</IsHintedContext.Provider>
	);
};

export default App;
