import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

const ToDoList = () => {
    return (
        <ScrollView>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>Do laundry</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task]}>
                    <Text style={styles.taskText}>Go to gym</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>Walk dog</Text>
                </View>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    task: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#999',
    },
    completed: {
        backgroundColor: '#f0f0f0',
    },
    taskText: {
        fontSize: 18,
        color: '#333',
    },
});

export default ToDoList;
