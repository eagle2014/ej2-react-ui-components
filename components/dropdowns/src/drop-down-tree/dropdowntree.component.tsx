import * as React from 'react';
import { DropDownTree, DropDownTreeModel } from '@syncfusion/ej2-dropdowns';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface DropDownTreeTypecast {
    footerTemplate?: string | Function | any;
    headerTemplate?: string | Function | any;
    itemTemplate?: string | Function | any;
}
/**
 *The DropDownTree component contains a list of predefined values from which you can choose a single or multiple values.
 * ```
 * <DropDownTreeComponent/>
 * ```
 */
export class DropDownTreeComponent extends DropDownTree {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<DropDownTreeModel & DefaultHtmlAttributes| DropDownTreeTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    private immediateRender: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<DropDownTreeModel & DefaultHtmlAttributes| DropDownTreeTypecast>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
    }

    public render(): any {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('input', this.getDefaultAttributes());
        }

    }
}

applyMixins(DropDownTreeComponent, [ComponentBase, React.PureComponent]);
