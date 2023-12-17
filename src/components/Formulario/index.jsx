import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState('');
    const [imc, setImc] = useState(0);


    const calcularIMC = () => {
        const result = Number((peso / (altura * altura)).toFixed(2));
        setImc(result)

        if (result < 18.5) {
            setResultado('Abaixo do peso');
        } else if (result >= 18.5 && result < 24.9) {
            setResultado('Peso normal');
        } else if (result >= 25 && result < 29.9) {
            setResultado('Sobrepeso');
        } else if (result >= 30 && result < 39.9) {
            setResultado('Obesidade');
        } else {
            setResultado('Obesidade Grave');
        }
    }

    return (
        <div className="container">
            <h1 className={styles.formTitulo}>Calculadora de IMC</h1>
            <div className={styles.form}>
                <div>
                    <label className={styles.formItem}>Altura (m):</label>
                    <input className={styles.formItemInput} type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
                </div>
                <div>
                    <label className={styles.formItem}>Peso (kg):</label>
                    <input className={styles.formItemInput} type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
                </div>
                <button className={styles.formBotao} onClick={calcularIMC}>Calcular IMC</button>
                <p className={styles.formItem}>IMC: {imc}</p>
                <p className={styles.formItem}>Classificação: {resultado}</p>
            </div>
        </div>
    )
}

export default Formulario