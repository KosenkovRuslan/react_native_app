import { View, StyleSheet, Dimensions, Text, Image, Alert, ToastAndroid, Platform } from 'react-native'
import { Input } from '@/shared/Input/Input'
import { Button } from '@/shared/Button/Button'
import { Colors, Gaps } from '@/shared/tokens'
export default function HomeScreen() {
	const width = Dimensions.get('window').width

	const alert = () => {
		// Alert
		/*Alert.alert('Ошибка', 'Неверный логин или пароль', [{
			text: 'Хорошо',
			onPress: () => {},
			style: 'cancel'
		}])*/
		if (Platform.OS === 'android') { // Специфичное решение для android
			ToastAndroid.showWithGravity(
				'Неверный логин или пароль',
				ToastAndroid.SHORT,
				ToastAndroid.CENTER,
			);
		}
	}

	return (
		<View
			style={styles.container}
		>
			<View style={styles.content}>
				<Image
					style={styles.logo}
					source={require('@/assets/images/logo.jpeg')}
					resizeMode='contain'
				/>
				<View style={styles.form}>
					<Input placeholder='Email' />
					<Input isPassword placeholder='Password' />
					<Button text='Sign in' onPress={alert} />
				</View>
				<Text style={styles.text}>Recovery password</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		padding: 55,
		flex: 1,
		backgroundColor: Colors.black
	},
	logo: {
		width: 170,
		height: 50
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g50
	},
	form: {
		alignSelf: 'stretch',
		gap: Gaps.g16

	},
	text: {
		color: 'black'
	}
});
