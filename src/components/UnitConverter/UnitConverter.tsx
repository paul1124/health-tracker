import { useEffect, useState } from "react";

const CONVERSION_CONSTANT = 2.20462262185;

enum Units {
    Kilogram = 'Kilogram',
    Pound = 'Pound'
}

const KiloConverter = () => {
    const [val, setVal] = useState<number | undefined>();
    const [convertedVal, setConvertedVal] = useState<number | undefined>();
    
    useEffect(() => {
        if(val) {
            setConvertedVal(Math.round(val * CONVERSION_CONSTANT * 100) / 100);
        }
    }, [val]);

    return (
        <>
            <h3>Kilogram to Pound</h3>
            <input
                type="number"
                value={val}
                onChange={e => setVal(Number(e.target.value))}
                onFocus={(e) => e.target.select()}
                placeholder={'kg'}
                style={{ textAlign: 'right' }}
            />

            {convertedVal && <h4>{convertedVal} lbs</h4>}
        </>
    )
}

const PoundConverter = () => {
    const [val, setVal] = useState<number | undefined>();
    const [convertedVal, setConvertedVal] = useState<number | undefined>();
    
    useEffect(() => {
        if(val) {
            setConvertedVal(Math.round(val / CONVERSION_CONSTANT * 100) / 100);
        }
    }, [val]);

    return (
        <>
            <h3>Pound to Kilogram</h3>
            <input
                type="number"
                value={val}
                onChange={e => setVal(Number(e.target.value))}
                onFocus={(e) => e.target.select()}
                placeholder={'lb'}
                style={{ textAlign: 'right' }}
            />

            {convertedVal && <h4>{convertedVal} kg</h4>}
        </>
    )
}

export const UnitConverter = () => {
    const [convUnit, setUnit] = useState<Units>(Units.Kilogram);

    return (
        <div className="common-component unit-converter">
            <h2>Kg - Lb Converter</h2>
            <div className="header">
                {[Units.Kilogram, Units.Pound].map(unit => 
                    <button key={unit} type="button" onClick={() => setUnit(unit)} style={convUnit === unit ? { borderColor: 'red' } : undefined}>{unit}</button>
                )}
            </div>
            {convUnit === Units.Pound ? <PoundConverter /> : <KiloConverter />}
        </div>

    )
}