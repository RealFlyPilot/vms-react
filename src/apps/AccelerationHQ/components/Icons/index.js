import React from 'react'

export const CheckMark = props => (
	<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M7 14L10.2929 17.2929C10.6834 17.6834 11.3166 17.6834 11.7071 17.2929L20 9" stroke="#607D8B" />
	</svg>
)

const Dot = () => {
	return (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="13.5" cy="13.5" r="3.5" fill="#D89E6D" />
		</svg>
	)
}

export const Edit = () => {
	return (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15 8L19 12M6.92535 16.224L5.15811 21.5257C5.09297 21.7211 5.2789 21.907 5.47434 21.8419L10.776 20.0747C10.9233 20.0256 11.0572 19.9428 11.1669 19.8331L20.5858 10.4142C21.3668 9.63316 21.3668 8.36684 20.5858 7.58579L19.4142 6.41421C18.6332 5.63317 17.3668 5.63317 16.5858 6.41421L7.16693 15.8331C7.05715 15.9428 6.97444 16.0767 6.92535 16.224Z"
				stroke="#607D8B"
			/>
		</svg>
	)
}

export const Error = () => {
	return (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M21 13.5C21 17.6421 17.6421 21 13.5 21C9.35786 21 6 17.6421 6 13.5C6 9.35786 9.35786 6 13.5 6C17.6421 6 21 9.35786 21 13.5ZM12.75 10.25C12.75 10.1119 12.8619 10 13 10H14C14.1381 10 14.25 10.1119 14.25 10.25V14.75C14.25 14.8881 14.1381 15 14 15H13C12.8619 15 12.75 14.8881 12.75 14.75V10.25ZM13 15.75C12.8619 15.75 12.75 15.8619 12.75 16V17C12.75 17.1381 12.8619 17.25 13 17.25H14C14.1381 17.25 14.25 17.1381 14.25 17V16C14.25 15.8619 14.1381 15.75 14 15.75H13Z"
				fill="#E08174"
			/>
		</svg>
	)
}

export const FPO = () => {
	return (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="13.5" cy="13.5" r="7" stroke="#607D8B" />
		</svg>
	)
}

export const Menu = () => {
	return (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3 18.5H24" stroke="#607D8B" />
			<path d="M3 13.5H24" stroke="#607D8B" />
			<path d="M3 8.5H24" stroke="#607D8B" />
		</svg>
	)
}

export const More = () => {
	return (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="19.5" cy="13.5" r="1.5" fill="#607D8B" />
			<circle cx="13.5" cy="13.5" r="1.5" fill="#607D8B" />
			<circle cx="7.5" cy="13.5" r="1.5" fill="#607D8B" />
		</svg>
	)
}

export const Pending = () => {
	return (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="13.5" cy="13.5" r="6.5" stroke="#607D8B" />
			<path d="M13.5 9.5V14.5L16 12" stroke="#607D8B" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

export const Schedule = () => {
	return (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="7.5" y="7.5" width="12" height="12" rx="1.5" stroke="#607D8B" />
			<path d="M7.5 10.5H19.5" stroke="#607D8B" />
			<path d="M9.5 7.5V5.5M17.5 7.5V5.5" stroke="#607D8B" strokeLinecap="round" />
			<path d="M11 15L12.5 16.5L16 13" stroke="#607D8B" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

export const Share = () => {
	return (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6.5 8C6.5 7.17157 7.17157 6.5 8 6.5H13V5.5H8C6.61929 5.5 5.5 6.61929 5.5 8V19C5.5 20.3807 6.61929 21.5 8 21.5H19C20.3807 21.5 21.5 20.3807 21.5 19V14H20.5V19C20.5 19.8284 19.8284 20.5 19 20.5H8C7.17157 20.5 6.5 19.8284 6.5 19V8ZM19.7929 6.5H16V5.5H21H21.5V6V11H20.5V7.20711L10.3536 17.3536L9.64645 16.6464L19.7929 6.5Z"
				fill="#607D8B"
			/>
		</svg>
	)
}

export const CheckBox = ({ checked = false }) => {
	return checked ? (
		'checked'
	) : (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7 9C7 7.89543 7.89543 7 9 7H18C19.1046 7 20 7.89543 20 9V18C20 19.1046 19.1046 20 18 20H9C7.89543 20 7 19.1046 7 18V9Z"
				stroke="#D3DBDF"
			/>
		</svg>
	)
}

export const DropdownArrow = ({ up = false }) => {
	return up ? (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M17.5 15.5L13.5 11.5L9.5 15.5" stroke="#607D8B" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	) : (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M9.5 11.5L13.5 15.5L17.5 11.5" stroke="#607D8B" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

export const Heart = ({ filled = false }) => {
	return filled ? (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7.25 14.25L13.5 20.5L19.75 14.25C21.2688 12.7312 21.2688 10.2688 19.75 8.75C18.2312 7.23122 15.7688 7.23122 14.25 8.75L13.5 9.5L12.75 8.75C11.2312 7.23122 8.76878 7.23122 7.25 8.75C5.73122 10.2688 5.73121 12.7312 7.25 14.25Z"
				fill="#607D8B"
				stroke="#607D8B"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	) : (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7.25 14.25L13.5 20.5L19.75 14.25C21.2688 12.7312 21.2688 10.2688 19.75 8.75C18.2312 7.23122 15.7688 7.23122 14.25 8.75L13.5 9.5L12.75 8.75C11.2312 7.23122 8.76878 7.23122 7.25 8.75C5.73122 10.2688 5.73121 12.7312 7.25 14.25Z"
				stroke="#D3DBDF"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export const RatingStar = ({ size, filled = false }) => {
	return filled ? (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.5079 20.5225L10.1685 15.6918L6.26961 12.9069C5.8738 12.6241 6.07381 12 6.56023 12H11.4375L13.0272 7.37554C13.1818 6.9256 13.8182 6.9256 13.9728 7.37554L15.5625 12H20.4398C20.9262 12 21.1262 12.6241 20.7304 12.9069L16.8315 15.6918L18.4921 20.5225C18.6503 20.9827 18.1246 21.3747 17.7286 21.0919L13.5 18.0714L9.27136 21.0919C8.87538 21.3747 8.34971 20.9827 8.5079 20.5225Z"
				fill="#607D8B"
			/>
		</svg>
	) : (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M13.5 7.5L13.9789 7.35633C13.9155 7.14483 13.7208 7 13.5 7C13.2792 7 13.0845 7.14483 13.0211 7.35633L13.5 7.5ZM12 12.5V13C12.2208 13 12.4155 12.8552 12.4789 12.6437L12 12.5ZM6.5 12.5V12C6.27967 12 6.0853 12.1442 6.02145 12.3551C5.9576 12.566 6.03932 12.7938 6.22265 12.916L6.5 12.5ZM11 15.5L11.4642 15.6857C11.5521 15.4662 11.4741 15.2151 11.2773 15.084L11 15.5ZM9 20.5L8.53576 20.3143C8.45442 20.5177 8.51489 20.7503 8.68496 20.8883C8.85503 21.0263 9.09512 21.0375 9.27735 20.916L9 20.5ZM13.5 17.5L13.7773 17.084C13.6094 16.972 13.3906 16.972 13.2227 17.084L13.5 17.5ZM18 20.5L17.7226 20.916C17.9049 21.0375 18.145 21.0263 18.315 20.8883C18.4851 20.7503 18.5456 20.5177 18.4642 20.3143L18 20.5ZM16 15.5L15.7226 15.084C15.5259 15.2151 15.4479 15.4662 15.5358 15.6857L16 15.5ZM20.5 12.5L20.7774 12.916C20.9607 12.7938 21.0424 12.566 20.9785 12.3551C20.9147 12.1442 20.7203 12 20.5 12V12.5ZM15 12.5L14.5211 12.6437C14.5845 12.8552 14.7792 13 15 13V12.5ZM13.0211 7.35633L11.5211 12.3563L12.4789 12.6437L13.9789 7.64367L13.0211 7.35633ZM12 12H6.5V13H12V12ZM6.22265 12.916L10.7227 15.916L11.2773 15.084L6.77735 12.084L6.22265 12.916ZM10.5358 15.3143L8.53576 20.3143L9.46424 20.6857L11.4642 15.6857L10.5358 15.3143ZM9.27735 20.916L13.7773 17.916L13.2227 17.084L8.72265 20.084L9.27735 20.916ZM13.2227 17.916L17.7226 20.916L18.2774 20.084L13.7773 17.084L13.2227 17.916ZM18.4642 20.3143L16.4642 15.3143L15.5358 15.6857L17.5358 20.6857L18.4642 20.3143ZM16.2774 15.916L20.7774 12.916L20.2226 12.084L15.7226 15.084L16.2774 15.916ZM20.5 12H15V13H20.5V12ZM15.4789 12.3563L13.9789 7.35633L13.0211 7.64367L14.5211 12.6437L15.4789 12.3563Z"
				fill="#D3DBDF"
			/>
		</svg>
	)
}

export const SortArrow = ({ up = false }) => {
	return up ? (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M13.5 9V18" stroke="#607D8B" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M17.5 13L13.5 9L9.5 13" stroke="#607D8B" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	) : (
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M9.5 14L13.5 18L17.5 14" stroke="#607D8B" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M13.5 9V18" stroke="#607D8B" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}
