import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import styles from './Form.module.scss';
import { useIsHintedContext } from '../../context';
import CheckBox from '../checkbox/CheckBox';
import cn from 'classnames';

const Form: FC = () => {
	const { setIsHinted } = useIsHintedContext();
	const [isLoader, setIsLoader] = useState(true);
	const [isTextArea, setIsTextArea] = useState(true);

	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const fileRef = useRef<HTMLInputElement>(null);

	const onHintClick = () => {
		setIsHinted(true);
	};

	function textChange() {
		if (textAreaRef.current!.value.length > 0) {
			setIsLoader(false);
		} else {
			setIsLoader(true);
		}
	}

	function fileChange() {
		if (fileRef.current!.files!.length > 0) {
			setIsTextArea(false);
		} else {
			setIsTextArea(true);
		}
	}

	const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (isLoader !== isTextArea) {
			alert(
				'Ваш запрос отправлен, мы свяжемся с Вами в ближайшее время, спасибо!'
			);
		} else {
			alert('Напишите текст обащения или прикрепите файл!');
		}
	};

	return (
		<form className={styles.form} onSubmit={handlerSubmit}>
			<fieldset>
				<legend className={styles.formLegend}>
					Cообщение в свободной форме
				</legend>

				<div className={styles.formField}>
					<input
						className={styles.formInput}
						type="text"
						name="name"
						placeholder="Ваше имя"
						required
					/>
					<label className={styles.formLabel} htmlFor="name">
						Ваше имя
					</label>
				</div>
				<div className={styles.formField}>
					<input
						className={styles.formInput}
						type="text"
						name="company"
						placeholder="Компания"
						required
					/>
					<label className={styles.formLabel} htmlFor="company">
						Компания
					</label>
				</div>
				<div className={styles.formField}>
					<input
						className={styles.formInput}
						type="tel"
						name="phone"
						placeholder="Телефон"
						required
					/>
					<label className={styles.formLabel} htmlFor="phone">
						Телефон
					</label>
				</div>
				<div className={styles.formField}>
					<input
						className={styles.formInput}
						type="email"
						placeholder="Почта"
						required
					/>
					<label className={styles.formLabel} htmlFor="email">
						Почта
					</label>
				</div>
				<div className={styles.formField}>
					<textarea
						className={cn({
							[styles.formText]: true,
							[styles.formTextHidden]: !isTextArea,
						})}
						ref={textAreaRef}
						name="text"
						placeholder="Напишите текст обращения"
						rows={5}
						onChange={textChange}
					></textarea>
					<label className={styles.formLabel} htmlFor="text">
						Напишите текст обращения
					</label>
					<button
						className={styles.infoButton}
						type="button"
						onClick={onHintClick}
					>
						?
					</button>
				</div>

				<div
					className={cn({
						[styles.formUpload]: true,
						[styles.hiddenLoad]: !isLoader,
						[styles.notUploaded]: isTextArea,
						[styles.upLoaded]: !isTextArea,
					})}
				>
					<label htmlFor="myfile">или прикрепите файл</label>
					<input
						ref={fileRef}
						type="file"
						id="myfile"
						name="myfile"
						onChange={fileChange}
					/>
				</div>

				<div className={styles.formFooter}>
					<CheckBox />
					<button className={styles.formSubmit} type="submit">
						Отправить
					</button>
				</div>
			</fieldset>
		</form>
	);
};

export default Form;
