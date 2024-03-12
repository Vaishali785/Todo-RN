import { Pressable, StyleSheet, Text, View } from "react-native"

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "red" }} //for android
                onPress={props.onDelete.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedInput} //for ios
            >
                <Text style={styles.goalItemContent}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: "indigo",
        margin: 5,
        borderRadius: 5
    },
    goalItemContent: {
        padding: 8,
        color: "white",
    },
    pressedInput: {
        backgroundColor: "red"
    }
})