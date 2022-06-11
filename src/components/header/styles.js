import { StyleSheet } from "react-native";
import theme from "../../../constans/theme";


export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 150,
        paddingTop:50,
        backgroundColor: theme.colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    titulo:{
        color: theme.colors.textColor,
        fontSize:20,
        fontWeight:'bold',
        textTransform:'uppercase',
        fontFamily:'open-sans'
    }
});
