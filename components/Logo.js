import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import { useLocale } from '../contexts/localeProvider';

const useStyles = makeStyles((theme) => ({
	root: {
	},
	logo: {
		display: 'flex',
		whiteSpace: 'pre-wrap',
		alignItems: 'center',
	},
	logoImg: {
		width: '30px',
	},
	logoLabel: {
		color: theme.palette.color.richBlack,
		marginLeft: '3px',
		paddingTop: '3px',
		fontFamily: '"Yanone Kaffeesatz", sans-serif',
		fontSize: '28px',
		lineHeight: 1,
	},
	logoLabelCity: {
		color: theme.palette.color.tiffanyBlue,
	},
}))

const Logo = ({variant = 'text', hasCityName = true}) => {
	const classes = useStyles()
	const { cityName } = useLocale()

	return (
		<Link href={'/'} as={'/'} passHref>
			<ButtonBase className={classes.root}>
				<span className={classes.logo}>
					<img src="/images/logo.svg" className={classes.logoImg} title='Example' alt='Example' />
					{(variant == 'text' || variant == 'shorttext') && (
						<span className={classes.logoLabel}>
							{variant == 'text' && <span>Example</span>}
							{hasCityName && cityName && <span className={classes.logoLabelCity}> { cityName }</span>}
						</span>
					)}
				</span>
			</ButtonBase>
		</Link>
	)
}

export default Logo