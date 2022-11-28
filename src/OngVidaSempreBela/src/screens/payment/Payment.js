import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  Text,
  RadioButton,
  Button,
  Dialog,
  Paragraph,
  Portal,
  Card,
  Title,
  Provider,
} from 'react-native-paper';

import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';

import moment from 'moment';

import Body from '../../common/components/Body';
import Container from '../../common/components/Container';
import Header from '../../common/components/Header';

import { server, showError } from '../../common/configuration/common';

import BtnOutline from '../../common/components/BtnOutline';
import BtnInput from '../../common/components/BtnInput';

initialState = {
  typePayment: 'Pix',
  valuePayment: 0,
  cpf: '',
  datePayment: '',
  projectId: 0,
  userId: 0,
  visible: false
}
class Payment extends Component {
  state = {
    ...initialState
  }

  componentDidMount = async () => {
    const userData = await AsyncStorage.getItem('userData')
    const savedState = JSON.parse(userData) || initialState
    this.setState({ userId: savedState.id, datePayment: moment(this.state.date).format('DD/MM/YYYY') })
  }

  hideDialog = () => {
    this.setState({ visible: false });
    this.props.navigation.navigate('Principal')
  }

  showDialog = async () => {
    try {
      await axios.post(`${server}/payments`, {
        typePayment: this.state.typePayment,
        valuePayment: this.state.valuePayment,
        cpf: this.state.cpf,
        datePayment: new Date(),
        projectId: this.props.route.params.projectId,
        userId: this.state.userId
      })

      this.setState({ visible: true });

    } catch (e) {
      showError(e)
    }
  }

  render() {
    styles = StyleSheet.create({
      containerRadio: {
        flexDirection: 'row',
        margin: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
      containerRadioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        color: 'white'
      },
      button: {
        marginBottom: 15,
        marginTop: 60,
        height: 43,
        justifyContent: 'space-evenly'
      },
      textFormaPagamento: {
        margin: 5,
        color: 'white',
        fontWeight: 'bold'

      },
      textResumo: {
        marginTop: -3,
        marginBottom: 7,
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        color: 'black'
      },
      textDialog: {
        fontWeight: 'bold',
        fontSize: 17,
      },
      paragraph: {
        marginBottom: 10
      },
      textRadio: {
        color: 'white',
      },
      view: {
        backgroundColor: this.props.schema.grey0,
        marginBottom: 15
      }
    });

    return (
      <ScrollView>
        <Container>
          <Header title={'Doe e faça a diferença!'} goBack={() => this.props.navigation.goBack()}></Header>
          <Body>
            <BtnInput
              label='Quero contribuir com'
              icon='dollar'
              value={this.state.valuePayment}
              onChangeText={(valuePayment) => this.setState({ valuePayment })}
              schema={this.props.schema}
              errorMessage={this.state.valuePayment === 0 ? 'Informe valor para doação' : ''}
              error={(this.state.valuePayment === 0)}
              keyboardType='numeric'
              bg={this.props.schema.white}
            />
            <BtnInput
              label='CPF do doador'
              icon='user-circle'
              value={this.state.cpf}
              onChangeText={(cpf) => this.setState({ cpf })}
              schema={this.props.schema}
              keyboardType='numeric'
              bg={this.props.schema.white}
            />
            <View style={styles.view}>
              <Text style={styles.textFormaPagamento}> Forma de pagamento:</Text>
              <View style={styles.containerRadio}>
                <View style={styles.containerRadioItem}>
                  <RadioButton
                    value="first"
                    status={this.state.typePayment === 'Pix' ? 'checked' : 'unchecked'}
                    color={this.props.schema.primary}
                    uncheckedColor={this.props.schema.white}
                    onPress={() => this.setState({ typePayment: 'Pix' })}
                  />
                  <Text style={styles.textRadio}>Pix</Text>
                </View>
                <View style={styles.containerRadioItem}>
                  <RadioButton style={styles.radio}
                    value="second"
                    status={this.state.typePayment === 'Boleto' ? 'checked' : 'unchecked'}
                    color={this.props.schema.primary}
                    uncheckedColor={this.props.schema.white}
                    onPress={() => this.setState({ typePayment: 'Boleto' })}
                  />
                  <Text style={styles.textRadio}>Boleto</Text>
                </View>
              </View>
            </View>

            <Card style={marginTop = 100}>
              <Card.Content>
                <Title style={styles.textResumo}>Resumo da doação</Title>
                <Title>Valor: {this.state.valuePayment}</Title>
                <Paragraph >Projeto: {this.props.route.params.name}</Paragraph>
                <Paragraph >Forma de pagamento: {this.state.typePayment}</Paragraph>
                <Paragraph style={styles.paragraph}>Data: {this.state.datePayment}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: 'https://static.vakinha.com.br/uploads/vakinha/image/184507/IMG_5230.JPG?ims=700x410' }} />
            </Card>
            <BtnOutline
              icon="hand-heart"
              mode="contained"
              color={'#B0E0E6'}
              style={styles.button}
              onPress={this.showDialog}
              schema={this.props.schema}>
              Finalizar doação
            </BtnOutline>
          </Body>
          <Provider>
            <Portal>
              <Dialog visible={this.state.visible} onDismiss={this.hideDialog}>
                <Dialog.Content>
                  <Paragraph style={styles.textDialog}>Doação finalizada com sucesso!</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={() => this.props.navigation.navigate('Principal')}>Ir para a página inicial</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </Provider>
        </Container>
      </ScrollView>
    )
  }
}

export default Payment;