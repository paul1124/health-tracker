import { useState } from "react";


export const BMICalculator = () => {
    const [heightFt, setFt] = useState<number | undefined>();
    const [heightIn, setIn] = useState<number | undefined>();
    const [weightLb, setLb] = useState<number | undefined>();

    const [bmi, setBmi] = useState<number | undefined>();

    const calculate = () => {
        if (!heightFt || !heightIn || !weightLb) {
            return;
        }

        const totalHeight = (12 * heightFt) + heightIn;

        setBmi(Math.round(weightLb / (totalHeight * totalHeight) * 703 * 100) / 100);
    }

    return (
        <div className="common-component bmi-calculator">
            <h2>BMI Calculator</h2>

            <span>
                <p>Height (in)</p>
                <div style={{ display: 'flex' }}>
                    <input
                        type="number"
                        value={heightFt}
                        onChange={e => setFt(Number(e.target.value))}
                        style={{ textAlign: 'right' }}
                        placeholder="ft"
                    />
                    <input
                        type="number"
                        value={heightIn}
                        onChange={e => setIn(Number(e.target.value))}
                        style={{ textAlign: 'right' }}
                        placeholder="in"
                    />
                </div>
            </span>
            <span>
                <p>Weight (lb)</p>
                <input
                    type="number"
                    value={weightLb}
                    onChange={e => setLb(Number(e.target.value))}
                    style={{ textAlign: 'right' }}
                    placeholder="lb"
                />
            </span>
            <button type="button" onClick={calculate}>Calculate</button>
            <h4>Your Body Mass Index: {bmi}</h4>

            <div style={{ margin: '8px 0', background: '#f0f0f0', padding: '6px', fontWeight: 'bold' }}>
                BMI Categories: <br />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', textAlign: 'left' }}>
                    <span>Underweight</span>
                    <span>&lt; 18.5</span>
                    <span>Normal weight</span>
                    <span>18.5–24.9</span>
                    <span>Overweight</span>
                    <span>25–29.9</span>
                    <span>Obesity</span>
                    <span>BMI of 30 or greater</span>

                </div>
                {/* Underweight = under 18.5 <br />
                Normal weight = 18.5–24.9 <br />
                Overweight = 25–29.9 <br />
                Obesity = BMI of 30 or greater <br /> */}
            </div>
        </div>
    )
}