import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import { Colors, Radius } from '@/shared/tokens'
import { useState } from 'react'
import EyeShowedIcon from '@/assets/icons/eye-showed'
import EyeClosedIcon from '@/assets/icons/eye-closed'

export function Input({ isPassword, ...props }: TextInputProps & { isPassword?: boolean }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

	return (
		<View>
			<TextInput
				style={styles.input}
				secureTextEntry={isPassword && !isPasswordVisible}
				placeholderTextColor={Colors.gray}
				{...props}
			/>
			{isPassword && (
				<Pressable
					onPress={() => setIsPasswordVisible((state) => !state)}
					style={styles.eyeIcon}
				>
					{isPasswordVisible ? <EyeShowedIcon /> : <EyeClosedIcon />}
				</Pressable>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		height: 58,
		backgroundColor: Colors.violetDark,
		paddingHorizontal: 24,
		paddingVertical: 0,
		borderRadius: Radius.r10,
		fontSize: 16,
		color: Colors.gray,
	},
	eyeIcon: {
		position: 'absolute',
		right: 0,
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
})
