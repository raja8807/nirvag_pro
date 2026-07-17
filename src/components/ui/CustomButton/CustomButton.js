import React from 'react';
import Link from 'next/link';
import styles from './CustomButton.module.scss';

export default function CustomButton({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '', 
  type = 'button',
  ...props 
}) {
  const buttonClass = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass} {...props}>
      {children}
    </button>
  );
}
