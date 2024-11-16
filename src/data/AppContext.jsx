import { createContext } from "react";
//Rozproszona czesc kodu gromadzona w jednym miejscu  zadanie nr 1
const AppContext = createContext(
    {
        items: [],
        dispatch: null
    }
);
export default AppContext;