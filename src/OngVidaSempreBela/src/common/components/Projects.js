import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";

class Projects extends Component {

    render() {

        styles = StyleSheet.create({
            textResumo: {
                marginTop: -3,
                marginBottom: 7,
                fontWeight: 'bold',
                fontSize: 20,
                alignSelf: 'center',
                color: this.props.schema.black
            },
        })
        
        return (
            <Card style={{ marginBottom: 12 }}>
                <Card.Content >
                    <Title style={styles.textResumo}>{this.props.name}</Title>
                    <Title>Meta de Arrecadação: R${this.props.meta}</Title>
                    <Paragraph >{this.props.desc}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://static1.patasdacasa.com.br/articles/2/37/52/@/15124-cachorro-de-rua-pode-ficar-agressivo-com-articles_media_mobile-2.jpg' }} />
                <Card.Actions>
                    <Button onPress={() =>
                        this.props.navigation.navigate('Doações',
                            {
                                ...this.props,
                                nome: this.props.name,
                                projectId: this.props.id,
                                schema: this.props.schema
                            }
                        )}>Doar</Button>
                    <Button>fotos</Button>
                </Card.Actions>
            </Card>
        )
    }
}

export default Projects
