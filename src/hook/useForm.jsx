import { useState } from 'react';

export function useForm(initialState = {}){
	const [data, setData] = useState(initialState);

	const handleChange = (event) => {
		event.preventDefault();

		setData(prevState => ({
			...prevState,
			[event.target.name]: event.target.value
		}))
	}

	return [
		data,
		handleChange,
		setData
	]
}