import { StyleSheet } from "react-native";
import theme from "../../constans/theme";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        padding: 10,
    },
    titulo:{
        color: theme.colors.textColor,
        fontSize:theme.fontSize.large,
        fontWeight:'bold',
        textTransform:'uppercase',
    },
    subtitle:{
        fontSize:16,
    },
    inputContainer:{
        width: 300,
        maxWidth:'80%',
        borderRadius:10,
        alignItems:'center',
        paddingVertical:20,
        marginTop:20,
        backgroundColor:'#f5f5f5'
    },
    btnContainer:{
        flexDirection:'row',
        width: '100%',
        justifyContent:"space-between",
        paddingVertical:15,
        paddingHorizontal:25,
    },
    input:{
        width:40,
        textAlign:'center',
        fontSize: theme.fontSize.medium,
        height: 40,
    }
});
