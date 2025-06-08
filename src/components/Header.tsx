import React from 'react'
type HeadingProps = {title: string}

const Header = ({title}: HeadingProps) => {
  return (
    <div>{title}</div>
  )
}

export default Header