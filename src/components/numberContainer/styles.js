import { StyleSheet } from "react-native";
import theme from "../../../constans/theme";


export const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor: theme.colors.primary,
        padding: 10,
        borderRadius:10,
        marginVertical:10,
        justifyContent: 'center',
        alignItems:'center'
    },
    number:{
        fontSize:22,
        color: theme.colors.textColor,
    }
});
