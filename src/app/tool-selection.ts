
export class ToolSelection {

    constructor(
        public link: string,
        public branch: string,
        public useCheckstyle: boolean,
        public styleguide: string,
        public excludeTestFiles: string,
        public usePMD: boolean,
        public useSimian: boolean,
    ){}
}
