
import React, { useState } from "react"
import { TextInput, View, Text, TouchableOpacity } from "react-native"
import ResultImc from "../ResultImc/"
import styles from "./style"

export default function(){
    
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if (height !== null && weight !== null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual a:")
            setTextButton("Calcular Novamente")
            return
        }

        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input} placeholder="Ex: 1.70" keyboardType="numeric" onChangeText={setHeight} value={height}/>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input} placeholder="Ex: 75.354" keyboardType="numeric" onChangeText={setWeight} value={weight}/>
                <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationImc()}>
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View> 

            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}