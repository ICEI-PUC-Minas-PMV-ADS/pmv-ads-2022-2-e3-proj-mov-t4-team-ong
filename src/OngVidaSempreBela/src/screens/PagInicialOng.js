import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import { Button, List, Avatar, Card, Title, Paragraph, Badge } from 'react-native-paper';

import commonStyles from "../style/commonStyles";

const DATA = [
    {
        id: 1,
        title: 'Projeto castração - Ursa',
        description: 'Boa noite amigos! Arrecadamos quase 300 reais pra ursa. O valor com todas diárias, ficam mais de 2 Mil. Se puderem doar qualquer moedinha, é de pelo coração que recebemos, qualquer moeda ajuda🙏🏻 Ela não merece viver com essa dor, urinando sangue.Estamos com esperança@de toda essa fase passar🙏🏻Sou eternamente grata por ter vocês.    📌Pix de 1 real! Marque seus amigos, vamos ajudar? Compartilhe, comente. Gratidão!',
        meta: 1500,
        status: 300,
        img: 'https://preview.redd.it/6eh3orzc6kw11.jpg?auto=webp&s=1247f4dc4dc0459459869bc6eb782089ab31ccb2'
    },
    {
        id: 2,
        title: 'Popó precisa de ajuda!',
        description: 'Popó foi resgatado ainda bebê junto com seus irmãozinhos, mas foi ficando, ficando.. e agora que cresceu já não atrai mais inúmeros olhares para adoção. Ele já participou de incontáveis feirinhas, já deu vários lambeijos pra ver se conquistava de vez sua família, mas sem sucesso. Quando será que seu dia vai chegar? ',
        meta: 700.00,
        status: 85.00,
        img: 'https://www.cesarsway.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-18-at-1.39.56-PM.png'
    },
    {
        id: 3,
        title: 'Cirurgia de catarata da Ursa',
        description: 'Trouxemos a Ursa no hospital @hospitalvetnovacampinas ela fez ultrassom de emergência e está com uma pedra de 0,7 quase 1 cm, essa pedra está obstruindo a passagem da urina, ela não tem como sair, a não ser cirurgicamente, os rins dela também podem ser afetados, devido a inflamação e ela está c alteração na mucosa. ',
        meta: 1500,
        status: 300,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Random_cat_Picture_696942069.jpg/1200px-Random_cat_Picture_696942069.jpg'
    },
    
];

const PagInicialOng = () => {

    const renderItem = ({ item }) => (
        <View style={styles.item}>
        <Card mode='contained'>
            {/* <Card.Title title={'Meta de arrecadação: R$' + item.meta} subtitle={"Valor arrecadado: R$" + item.status} /> */}
            <Badge>Meta de arrecadação: R${item.meta.toFixed(2)}</Badge>
            <Badge style={styles.arrecadado}>Valor arrecadado: R${item.status.toFixed(2)}</Badge>
            <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph numberOfLines={3}>{item.description}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: item.img }} />
            <Card.Actions>
                <Button textColor='darkred'>Fechar Projeto</Button>
                <Button>Editar</Button>
            </Card.Actions>
        </Card>
    </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Projetos Vinculados</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    titulo: {
        color: commonStyles.modalBackgroundColor,
        fontWeight: 'light',
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: 'Cochin',
        marginTop: 10,
        marginBottom: 10
    },
    item: {
        marginBottom: 15,
    },
    arrecadado:{
        backgroundColor: 'green'
    }
})

export default PagInicialOng;