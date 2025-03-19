interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className='button'
    >
      {children}
    </button>
  )
}
