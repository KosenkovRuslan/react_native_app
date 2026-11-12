import { Button } from '@/shared/Button/Button'
import { ErrorNotification } from '@/shared/ErrorNotification/ErrorNotification'
import { Input } from '@/shared/Input/Input'
import { Colors, Gaps } from '@/shared/tokens'
import { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
export default function HomeScreen() {
	const [error, setError] = useState<string | undefined>()

	const alert = () => {
		setError('Неверный логин или пароль!')
		setTimeout(() => {
			setError(undefined)
		}, 4000)
	}

	return (
		<View style={styles.container}>
			{error && <ErrorNotification error={error} />}
			<View style={styles.content}>
				<Image
					style={styles.logo}
					source={require('@/assets/images/logo.jpeg')}
					resizeMode="contain"
				/>
				<View style={styles.form}>
					<Input placeholder="Email" />
					<Input isPassword placeholder="Password" />
					<Button text="Sign in" onPress={alert} />
				</View>
				<Text style={styles.text}>Recovery password</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		padding: 55,
		flex: 1,
		backgroundColor: Colors.black,
	},
	logo: {
		width: 170,
		height: 50,
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g50,
	},
	form: {
		alignSelf: 'stretch',
		gap: Gaps.g16,
	},
	text: {
		color: Colors.black,
	},
})
