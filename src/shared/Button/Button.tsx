import { Pressable, StyleSheet, Text, PressableProps, View, Animated, GestureResponderEvent } from "react-native";
import { Colors, Radius, Fonts } from "@/shared/tokens";

export function Button({ text, ...props }: PressableProps & { text: string }) {
    const animatedValue = new Animated.Value(100)
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primaryHover, Colors.primary]
    })

    const fadeIn = (event: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()
        props.onPressIn && props.onPressIn(event) // можно переопределить после анимации, если приходит как пропс
    }

    const fadeOut = (event: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 100,
            duration: 300,
            useNativeDriver: true
        }).start()
        props.onPressOut && props.onPressOut(event) // можно переопределить после анимации, если приходит как пропс
    }

    return (
        <Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
            <Animated.View style={{ ...styles.button, backgroundColor: color }}>
                <Text style={styles.text}>{text}</Text>
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 58,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Radius.r10
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.fs18
    }
})