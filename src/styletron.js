import { Client } from 'styletron-engine-atomic';

const styletronClient = new Client();

export const css = (style) => styletronClient.renderStyle(style);
