import { Text, View, FlatList } from 'react-native';

export default function ListaAlunos() {
    const alunos = ["Rodrigo", "Juliana", "Paty", "Bruno", "Carlos", "Pedro", "João", "Maria", "Joana"];

    return (
        <View style={{ backgroundColor: '#ffffffff', minHeight: 200 }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 15,
                textAlign: 'center',
                color: '#ffffffff',
                backgroundColor: '#ff0000ff',
                width: '100%',
                padding: 20
            }}>
                📋 Lista de Usuários
            </Text>

            <FlatList style={{ paddingLeft: 10, paddingRight: 10 }}
                data={alunos}
                keyExtractor={(index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{
                        borderWidth: 1,
                        borderColor: 'red',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#DDE6ED',
                        padding: 10,
                        marginVertical: 6,
                        borderRadius: 20,
                        elevation: 3,
                        shadowColor: '#ff0000ff',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 5
                    }}>
                        {/* Avatar redondo com a inicial */}
                        <View style={{
                            width: 40,
                            height: 40,
                            borderRadius: 30,
                            backgroundColor: '#E62727',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 12
                        }}>
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
                                {item[0]}
                            </Text>
                        </View>

                        <Text style={{ fontSize: 16 }}>{item}</Text>
                    </View>
                )}
            />
        </View>
    );
}