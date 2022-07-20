import { NavigationContainer } from "@react-navigation/native";


import { Signin } from "../screens/Signin";
import { AppRoutes } from "./apo.routes";

export function Routes(){
    return(
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}