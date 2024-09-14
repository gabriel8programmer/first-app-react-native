
import React, { useState } from "react"
import { 
    TextInput, 
    View, 
    Text, 
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard
} from "react-native"
import ResultImc from "../ResultImc/"
import styles from "./style"

export default function(){
    
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator(){
        const heightFormat = height.replace(",",".")
        const weightFormat = weight.replace(",",".")
        return setImc((weightFormat/(heightFormat*heightFormat)).toFixed(2))
    }

    function verificationImc(){
        if (imc == null){
            Vibration.vibrate()
            setErrorMessage("Campo Obrigatório*")
        }
    }

    function validationImc(){
        if (height !== null && weight !== null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual a:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
        } else {
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e altura")
        }
    }

    return (
        
        <View style={styles.formContext}>
            { imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput style={styles.input} placeholder="Ex: 1.70" keyboardType="numeric" onChangeText={setHeight} value={height}/>
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput style={styles.input} placeholder="Ex: 75.354" keyboardType="numeric" onChangeText={setWeight} value={weight}/>
                    <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationImc()}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.exibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                    <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationImc()}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}