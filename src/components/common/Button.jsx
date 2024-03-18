import classnames from 'classnames';

export default function Button({children, onClick, disabled = false, width, bg, hover}) {
	const classNames = classnames(
		['px-4', 'py-2', 'rounded', 'text-white'],
		width,
		bg,
		disabled ? 'opacity-25' : `opacity-100 ${hover}`,
	)

	return (
		<button disabled={disabled} className={classNames} onClick={onClick}>
			{children}
		</button>
	)
}