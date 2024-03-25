export default function CheckBoxField({name, checked, onChange, children}){

	const handleChange = () => {
		onChange({name, value: !checked});
	}

	return (
		<div className="flex items-center gap-1">
			<input
				type="checkbox"
				name={name}
				id={name}
				className="size-5"
				value=""
				checked={checked}
				onChange={handleChange}
			/>
			<label htmlFor={name}>{children}</label>
		</div>
	)
}