import {Dimensions} from "react-native";
const width = Dimensions.get('window').width;
export const center = `
    justify-content: center;
    align-items: center;
`;

export const absolute_full = `
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
`;
export const absolute_left = `
    position: absolute;
    left: 0px;
    top:0px;
    right: 0px;
    bottom: 0px;
`;
export const absolute_top = `
    position: absolute;
    left: 0px;
    top: 0px;
`;

export const background_image = `
    ${absolute_full}
    width: 100%;
    height: 100%;
`;
