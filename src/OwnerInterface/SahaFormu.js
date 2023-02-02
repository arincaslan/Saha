import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu, Divider, Provider, useTheme } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

const SahaFormu = () => {
    const theme = useTheme();
    const [text, setText] = React.useState("");
    const [submittedForm, setSubmittedForm] = React.useState({});
    const [email, setEmail] = React.useState("");
    const [isim, setİsim] = React.useState("");
    const [tel, setTel] = React.useState("");
    const [sahaAd, setSahaAd] = React.useState("");
    const [konum, setKonum] = React.useState("");

    const handleSubmit = () => {
        setSubmittedForm({
            Ad: isim,
            Email: email,
            Telefon: tel,
            Saha: sahaAd,
            Konum: konum,
        })
    }
    console.log(submittedForm);

    return (
        <Provider theme={theme}>
            <View style={styles.container}>
                <TextInput
                    style={styles.form}
                    label="İsim - Soyad"
                    value={isim}
                    onChangeText={isim => {setİsim(isim); setText(isim);}}
                />
                <TextInput
                    style={styles.form}
                    label="E-mail"
                    value={email}
                    onChangeText={email => {setEmail(email); setText(email);}}
                />
                <TextInput
                    style={styles.form}
                    label="Telefon"
                    value={tel}
                    onChangeText={tel => {setTel(tel); setText(tel);}}
                />
                <TextInput
                    style={styles.form}
                    label="Saha Adı"
                    value={sahaAd}
                    onChangeText={sahaAd => {setSahaAd(sahaAd); setText(sahaAd);}}
                />
                <TextInput
                    style={styles.form}
                    label="Konum"
                    value={konum}
                    onChangeText={konum => {setKonum(konum); setText(konum);}}
                />
            </View>
            <Button onPress={handleSubmit}>Submit</Button>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        padding: 80,
        backgroundColor: "rgb(255, 255, 255)",
        borderWidth: 25,
        borderColor: "rgb(79, 99, 83)",

    },
});

export default SahaFormu;
