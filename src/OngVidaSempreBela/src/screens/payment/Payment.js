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

        <View>
          <Text style={styles.textFormaPagamento}> Forma de pagamento:</Text>
        </View>

        <View style={styles.containerRadio}>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'Pix' ? 'checked' : 'unchecked'}
              color={'#CCCCFF'}
              onPress={() => setTipo('Pix')}
            />
            <Text>Pix</Text>
          </View>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="second"
              status={tipo === 'Boleto' ? 'checked' : 'unchecked'}
              color={'#CCCCFF'}
              onPress={() => setTipo('Boleto')}
            />
            <Text>Boleto</Text>
          </View>
        </View>

        <View >
          <Text style={styles.textResumo}>Resumo da doação</Text>
        </View>

        <Card>
          <Card.Content>
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
  },
  button: {
    marginBottom: 15,
    marginTop: 15
  },
  textFormaPagamento: {
    margin: 5,
  },
  textResumo: {
    marginTop: 10,
    marginBottom: 3,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    color: 'black'
  },
  textDialog: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white'
  },
  paragraph: {
    marginBottom: 10
  }
});

export default Payment;