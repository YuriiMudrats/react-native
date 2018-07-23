import { createAction } from "redux-actions";

export const inputChange = createAction("ONCHANGE_INPUT", text => text);
