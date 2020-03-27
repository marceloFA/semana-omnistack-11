import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail(){

    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const formattedValue = Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL'}).format(incident.value);
    const heroMessage = `Olá ${incident.name}, estou entrando em contato para ajudar com a quantia de ${formattedValue} no caso ${incident.description}`;
    
    function navigateBack(){
        navigation.goBack();
    };

    function sendMail(){

        const props = {
            subject: "",
            recipient: [incident.email],
            body: heroMessage
        };

        MailComposer.composeAsync(props);
    };

    function sendWhatsapp(){
        const whatsappURL = `whatsapp://send?phone=${incident.whatsapp}&text=${heroMessage}`;
        Linking.openURL(whatsappURL);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
              <Image source={logoImg} />  
              
              <TouchableOpacity onPress={navigateBack}>
                  <Feather name="arrow-left" size={28} color="#E28041"/>
              </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                    <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG:</Text>
    <Text style={styles.incidentValue}>{incident.name}  ({incident.city}/{incident.uf})</Text>

                    <Text style={styles.incidentProperty}>Caso:</Text>
                    <Text style={styles.incidentValue}>{incident.description}</Text>

                    <Text style={styles.incidentProperty}>Valor:</Text>
                    <Text style={styles.incidentValue}>
                        { formattedValue }
                    </Text>

                    <View style={styles.contactBox}>
                        <Text style={styles.heroTitle}>Salve o dia!</Text>
                        <Text style={styles.heroTitle}>Seja o herói deste caso</Text>
                        <Text style={styles.heroDescription}>
                            Entre em contato
                        </Text>
                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                                <Text style={styles.actionText}>Whatsapp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action} onPress={sendMail}>
                                <Text style={styles.actionText}>E-mail</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        </View>
    );
}