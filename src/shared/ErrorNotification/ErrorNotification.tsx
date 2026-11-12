import { Text, StyleSheet, Dimensions, Animated } from 'react-native'
import { ErrorNotificationProps } from './ErrorNotification.props'
import { useEffect, useState } from 'react'
import { Colors, Fonts } from '../tokens'

export function ErrorNotification({ error }: ErrorNotificationProps) {
	const [isShown, setIsShown] = useState<boolean>(false)

	const animatedValue = new Animated.Value(-100)

	const onEnter = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start()
	}

	useEffect(() => {
		if (!error) return
		// setIsShown(true)
		const showTimer = setTimeout(() => {
			//   setIsShown(true)
		}, 0)
		const hideTimer = setTimeout(() => {
			setIsShown(false)
		}, 3000)

		return () => {
			clearTimeout(showTimer)
			clearTimeout(hideTimer)
		}
	}, [error])

	if (!isShown) {
		return <></>
	}

	return (
		<Animated.View
			style={{ ...styles.error, transform: [{ translateY: animatedValue }] }}
			onLayout={onEnter}
		>
			<Text style={styles.errorText}>{error}</Text>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		width: Dimensions.get('screen').width,
		backgroundColor: Colors.red,
		padding: 15,
		top: 50,
	},
	errorText: {
		fontSize: Fonts.fs16,
		color: Colors.white,
		textAlign: 'center',
	},
})
