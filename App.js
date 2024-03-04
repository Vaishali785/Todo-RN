import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [goals, setGoals] = useState([]);
    const [showModal, setShowModal] = useState(false);


    const handleSubmit = (enteredGoalText) => {
        setGoals(prevGoals => [...prevGoals, { text: enteredGoalText, id: Math.random().toString() }]);
        closeModal();
    }

    const deleteGoalHandler = (id) => {
        setGoals(currentGoals => currentGoals.filter(goal => goal.id != id))
    }
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <View style={styles.appContainer}>
            <Button title="Add New Goal" color="indigo" onPress={() => setShowModal(true)} />

            <GoalInput visible={showModal} handleSubmit={handleSubmit} closeModal={closeModal} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={goals}
                    renderItem={(itemData) => {
                        return <GoalItem text={itemData.item.text} onDelete={deleteGoalHandler} id={itemData.item.id} />
                    }}
                    keyExtractor={(item, index) => {
                        return item.id
                    }}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 15,
        flex: 1
    },

    goalsContainer: {
        flex: 5,
        marginTop: 8
    },

});
