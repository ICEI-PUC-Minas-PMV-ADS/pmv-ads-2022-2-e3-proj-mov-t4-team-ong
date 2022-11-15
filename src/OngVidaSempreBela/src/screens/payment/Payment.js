import React, { useState } from 'react';
import {
  View,
  StyleSheet,
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
} from 'react-native-paper';


import Header from '../../components/paymentComponent/Header';
import Container from '../../components/paymentComponent/Container';
import Body from '../../components/paymentComponent/Body';
import Input from '../../components/paymentComponent/Input';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import commonStyles from "../../common/styles/commonStyles";
import { server, showError, showSuccess } from "../../common/configuration/common"

const Payment = ({ route }) => {
  const navigation = useNavigation();

  const [tipo, setTipo] = React.useState('Pix');
  const [valor, setValor] = useState('');
  const [cpf, setCpf] = useState('');
  const [data, setData] = useState(moment(new Date()).format('DD/MM/YYYY'));
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => {
    setVisible(false);
    navigation.navigate('Principal')
  }

  const showDialog = () => setVisible(true);

  return (
    <Container>
      <Header title={'Doe e faça a diferença!'} goBack={() => navigation.goBack()}>
      </Header>

      <Body>

        <Input
          label="Quero contribui com"
          value={valor}
          onChangeText={(text) => setValor(text)}
          left={<TextInput.Icon icon="currency-brl" />}
        />

        <Input
          label="CPF do doador"
          value={cpf}
          onChangeText={(text) => setCpf(text)}
          left={<TextInput.Icon icon="account-box" />}
        />

        <View style={styles.view}>

          <Text style={styles.textFormaPagamento}> Forma de pagamento:</Text>
          <View style={styles.containerRadio}>
            <View style={styles.containerRadioItem}>
              <RadioButton
                value="first"
                status={tipo === 'Pix' ? 'checked' : 'unchecked'}
                color={'#CCCCFF'} 
                uncheckedColor={'white'}
                onPress={() => setTipo('Pix')}
              />
              <Text style={styles.textRadio}>Pix</Text>
            </View>
            <View style={styles.containerRadioItem}>
              <RadioButton style={styles.radio}
                value="second"
                status={tipo === 'Boleto' ? 'checked' : 'unchecked'}
                color={'#CCCCFF'}
                uncheckedColor={'white'}
                onPress={() => setTipo('Boleto')}
              />
              <Text style={styles.textRadio}>Boleto</Text>
            </View>
          </View>
        </View>

        <Card style={marginTop = 100}>
          <Card.Content>
            <Title style={styles.textResumo}>Resumo da doação</Title>
            <Title>Valor: {valor}</Title>
            <Paragraph >Forma de pagamento: {tipo}</Paragraph>
            <Paragraph style={styles.paragraph}>Data: {data}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://static.vakinha.com.br/uploads/vakinha/image/184507/IMG_5230.JPG?ims=700x410' }} />
        </Card>

        <Button
          icon="hand-heart"
          mode="contained"
          color={'#B0E0E6'}
          style={styles.button}
          onPress={showDialog}>
          Finalizar doação
        </Button>
      </Body>

      <Provider>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Content>
              <Paragraph style={styles.textDialog}>Doação finalizada com sucesso!</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => navigation.navigate('Principal')}>Ir para a página inicial</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>

    </Container>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 15,
    height:43,
    justifyContent: 'space-evenly'
  },
  textFormaPagamento: {
    margin: 5,
    color:'white',
    fontWeight:'bold'

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
    backgroundColor: '#363636',
    marginBottom:15
  }
});

export default Payment;