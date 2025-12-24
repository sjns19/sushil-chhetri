type ExtendableButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

export default interface ButtonProps extends ExtendableButtonProps {
	variant?: 'primary' | 'secondary' | 'tertiary',
	size?: 'sm' | 'md' | 'lg' | 'xl',
	children?: React.ReactNode,
	link?: string,
	className?: string,
	disabled?: boolean
};