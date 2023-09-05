import { useEffect } from "react"
import { CommonBlockFramework } from "../blockFramework"
import { COMPONENT_NAME_UNIT_CONVERTER, UnitConverter } from "../components/UnitConverter"
import { COMPONENT_NAME_BMI_CALCULATOR } from "../components/BMICalculator/constants";
import { BMICalculator } from "../components/BMICalculator";

export const useRegisterComponentNames = (setComponents: any) => {
    useEffect(() => {
        CommonBlockFramework.addComponentName(COMPONENT_NAME_UNIT_CONVERTER, UnitConverter);
        CommonBlockFramework.addComponentName(COMPONENT_NAME_BMI_CALCULATOR, BMICalculator);

        setComponents(Array.from(CommonBlockFramework.componentNames.keys()))
    }, [setComponents]);
}