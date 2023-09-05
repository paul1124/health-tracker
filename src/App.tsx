import { useState, createElement } from 'react';
import './App.css'
import { CommonBlockFramework } from './blockFramework';
import { useRegisterComponentNames } from './hooks';

function App() {
    const [componentNames, setComponents] = useState<string[]>([]);
    const [displayComponents, setDisplay] = useState<string[]>([]);

    useRegisterComponentNames(setComponents);

    const toggleDisplay = (name: string) => {
        if(displayComponents.includes(name)) {
            setDisplay(displayComponents.filter(val => val !== name));
        } else {
            setDisplay(displayComponents.concat(name));
        }
    }

    return (
        <>
            {componentNames.map(name => (
                <button
                    className={displayComponents.includes(name) ? 'reverted-color' : ''}
                    style={{ marginRight: '8px' }}
                    key={name}
                    type="button"
                    onClick={() => toggleDisplay(name)}
                >
                    {name}
                </button>
            ))}
            <span style={{ display:'block', marginBottom: '8px' }}></span>
            {displayComponents.map(name => (
                CommonBlockFramework.componentNames.get(name) && createElement(CommonBlockFramework.componentNames.get(name) as any)
            ))}
        </>
    )
}

export default App
