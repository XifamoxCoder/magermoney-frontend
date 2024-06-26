import { isArray, isObject, isString } from '../helpers';

export function classNames(...args: any[]): any {
	const classes = [];
	for (let i = 0; i < args.length; i++) {
		const value: Record<string, any> = args[i];

		if (!value) continue;

		if (isString(value)) {
			classes.push(value);
		} else if (isArray(value)) {
			for (let i = 0; i < value.length; i++) {
				const inner = classNames(value[i]);

				if (inner) {
					classes.push(inner);
				}
			}
		} else if (isObject(value)) {
			for (const name in value) {
				if (value[name]) {
					classes.push(name);
				}
			}
		}
	}
	return classes.join(' ');
}
