import {Image, TouchableOpacity } from "react-native"
import { styles } from "./style"

export const MoviesCard = (props) =>{
    return(
        <TouchableOpacity>
            <Image source={props.movieURL} style={styles.Tumbnails}></Image>
        </TouchableOpacity>
    )
}