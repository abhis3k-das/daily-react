import type { ComponentProps } from "react";
import './Button.css'
type ButtonProps = ComponentProps<'button'> & {
    tone : 'primary' | 'danger';
    loading? : boolean;
}
const Button = ({tone , loading = false , type="button",  ...buttonProps} : ButtonProps) => {

    const color = tone === 'danger' ? 'red' : 'blue';
    const customClass = ['button' , buttonProps.className ].filter(Boolean).join(' ');

    return <button 
            {...buttonProps}
            type={type}
            style={{...buttonProps.style , color}}
            aria-disabled={ loading || buttonProps.disabled}
            className={customClass}
            disabled={loading || buttonProps.disabled}
        >
            {buttonProps.children}
        </button>
}

export default Button