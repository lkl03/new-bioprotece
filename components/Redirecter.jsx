import React from 'react'
import Link from 'next/dist/client/link'


const Redirecter = (props) => {
  return (
    <>
        <ul className='redirecter'>
            <li className='redirecter-second'>
                Productos /
            </li>
            <Link href='./'>
                <a className='redirecter-third'>{props.category} /</a>
            </Link>
            <Link href=''>
                <a className='redirecter-fourth'>{props.product}</a>
            </Link>
        </ul>
    </>
  )
}

export default Redirecter