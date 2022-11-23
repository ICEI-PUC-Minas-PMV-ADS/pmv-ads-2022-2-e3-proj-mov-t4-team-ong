import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native';

import {
    Text,
    RadioButton,
    TextInput,
    Button,
    Dialog,
    Paragraph,
    Portal,
    Card,
    Title,
    Provider,
    Avatar,
} from 'react-native-paper';

import Header from '../../components/paymentComponent/Header';
import Container from '../../components/paymentComponent/Container';
import Body from '../../components/paymentComponent/Body';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: 1,
        projeto: 'Castração do Joel',
        descricao: 'Olá! Resgatamos o Joel na Avenida Brasil e ele precisa de ajuda para cadastração.',
        metaArrecadacao: 200,
        img: 'https://static1.patasdacasa.com.br/articles/2/37/52/@/15124-cachorro-de-rua-pode-ficar-agressivo-com-articles_media_mobile-2.jpg'
    },
    {
        id: 2,
        projeto: 'Cirurgia da Francisca',
        descricao: 'A Francisca está precisando de cirurgia de catarata, podem ajudar?',
        metaArrecadacao: 580,
        img: 'https://t1.ea.ltmcdn.com/pt/posts/7/3/6/sintomas_das_cataratas_nos_gatos_20637_0_600.jpg'
    }
];

const Ong = () => {
    const navigation = useNavigation();
    const [ong, setOng] = useState('Aconchego dos bichos');
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    const renderItem = ({ item }) => (
        <Card style={{ marginBottom: 12 }}>
            <Card.Content >
                <Title style={styles.textResumo}>{item.projeto}</Title>
                <Title>Meta de Arrecadação: R${item.metaArrecadacao}</Title>
                <Paragraph >{item.descricao}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: item.img }} />
            <Card.Actions>
                <Button onPress={() => navigation.navigate('Payment', {item})}>Doar</Button>
                <Button>fotos</Button>
            </Card.Actions>
        </Card>
    )

    return (
        <Container>
            <Header title={ong} goBack={() => navigation.goBack()}></Header>
            <Body>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </Body>

        </Container>
    )
}

const styles = StyleSheet.create({
    textResumo: {
        marginTop: -3,
        marginBottom: 7,
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        color: 'black'
    },
});

export default Ong;