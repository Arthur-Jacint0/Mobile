import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={PrimeVideoLogo} style={styles.primeLogoImg}></Image>
        <Image source={AmazonLogo} style={styles.amazonLogoImg}></Image>
      </View>
      <View style={styles.category}>
        <View>
          <TouchableOpacity>
            <Text  style={styles.categoryText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text  style={styles.categoryText}>TV Shows</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text  style={styles.categoryText}>Movies</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text  style={styles.categoryText}>Kids</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232f3e",
  },
  header: {
    width: "100%", //Largura do cabeçalho
    paddingTop: 80, //Padding parte de cima
    alignItems: "center", //Alinhando no centro
    justifyContent: "center", //Justificando no centro
  },
  amazonLogoImg: {
    marginTop: -32, //Diminui a margem da imagem de cima aporximando as duas
    marginLeft: 30, //Joguei a imagem levemente para a esquerda
  },
  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 700,
    color: "white",
  },
});
