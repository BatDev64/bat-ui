import React from 'react'

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export const Slot = ({ children, ...props }: SlotProps) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, props)
  }

  return <>{children}</>
}
