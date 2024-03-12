import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View, Image } from "react-native"


function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const handleInputText = (text) => {
        setEnteredGoalText(text);
    }

    const handleSubmit = () => {
        props.handleSubmit(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput placeholder="Enter Task" value={enteredGoalText} style={styles.inputElement} onChangeText={handleInputText} />
                <View style={styles.btnContainer}>
                    <View style={styles.inputBtn}>
                        <Button title="Cancel" onPress={props.closeModal} color="firebrick" />
                    </View>
                    <View style={styles.inputBtn}>
                        <Button title="Add Task" onPress={handleSubmit} color="indigo" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        // flexDirection: "row",
        justifyContent: "center",
        // marginVertical: 20,
        // borderBottomWidth: 1,
        // borderBottomColor: "#ccc",
        alignItems: "center",
        flex: 1,
        padding: 20,
        backgroundColor: "#a466e2"
    },
    inputElement: {
        width: '100%',
        borderColor: "#ccc",
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: "#eee",
        // marginRight: 5
    },
    btnContainer: {
        flexDirection: "row",
        marginTop: 16
    },
    inputBtn: {
        // flex: 1,
        // width: "30%",
        marginHorizontal: 8,
        // backgroundColor: "#f00",
        // color: "#f00"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
        marginBottom: 50
    }
})