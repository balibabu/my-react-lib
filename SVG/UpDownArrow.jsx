import React from 'react'
export default function UpDownArrow({ strokeWidth }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" width='100%' height='100%'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </svg>
    )
}