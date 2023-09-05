export class BlockFramework {
    constructor() {
        this.componentNames = new Map();
    }

    componentNames: Map<string, React.FC>;

    addComponentName(componentName: string, component: React.FC) {
        if (!this.componentNames.get(componentName)) {
            this.componentNames.set(componentName, component);
        }
    }

    removeComponentName(componentName: string) {
        this.componentNames.delete(componentName);
    }
}

export const CommonBlockFramework = new BlockFramework();