import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Paragraph, Dialog, Portal} from 'react-native-paper';

const AlertBox = props => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  //   const hideDialog = () => setVisible(false);
  const hideDialog = () => props.setShow({...props.show, alert: true});

  return (
    <View>
      <Portal>
        <Dialog visible={showDialog} onDismiss={hideDialog}>
          <Dialog.Title>Alert Message</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{props.show.message}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default AlertBox;
