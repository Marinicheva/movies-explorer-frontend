import { createContext } from "react";
import {defaultCurrentUserData} from "../utils/constants";

export const CurrentUserContext = createContext(defaultCurrentUserData);