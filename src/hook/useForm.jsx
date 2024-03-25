import { useState } from 'react';

export function useForm(initialState = {}){
	const [data, setData] = useState(initialState);

	const onChange = (target) => {
		setData(prevState => ({
			...prevState,
			[target.name]: target.value
		}))
	}

	return [
		data,
		onChange,
		setData
	]
}