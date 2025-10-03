import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Prime from './src/Telas/Prime';
import ListaAlunos from './src/Components/ListaAlunos';

export default function App() {
  return (
    <>
    <ScrollView>
        <Prime/>
    </ScrollView>
    </>
  );
}