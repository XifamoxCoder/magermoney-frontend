import { AppState, IFetchState } from './Domain';

export const fetchStateInitialState: IFetchState = {
	isLoading: false,
	error: null
};

export const appInitialState: AppState = {
	header: {
		title: '',
		textLeft: '',
		textRight: '',
		isHidden: false,
		isVisible: true,
		isLeftArrow: false,
		isLeftDisabled: false,
		isRightDisabled: false,
		actions: null,
		onSelectAction: () => {},
		onClickLeft: () => {},
		onClickRight: () => {}
	},
	nav: {
		isHidden: false
	}
};
