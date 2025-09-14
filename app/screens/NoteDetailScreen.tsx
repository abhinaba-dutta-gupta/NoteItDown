import { SafeAreaView, Text } from "react-native"

const NoteDetailScreen = ({ title, content }) => {
    return (
        <SafeAreaView>
            <Text>{title}</Text>
            <Text>{content}</Text>
        </SafeAreaView>
    )
}

export default NoteDetailScreen;