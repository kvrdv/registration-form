import { createContext, useContext } from 'react';

export type IsHinted = {
	isHinted: boolean;
	setIsHinted: (element: boolean) => void;
};

export const IsHintedContext = createContext<IsHinted>({
	isHinted: false,
	setIsHinted: () => {},
});

export const useIsHintedContext = () => useContext(IsHintedContext);
