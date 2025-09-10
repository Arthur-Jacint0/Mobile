import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import { styles } from "./style";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MoviesCard } from "../../components/MoviesCard";
import { MOVIESWATCH } from "../../utils/moviesWatch";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESARRIVED } from "../../utils/moviesJustArrived";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={PrimeVideoLogo} style={styles.primeLogoImg}></Image>
        <Image source={AmazonLogo} style={styles.amazonLogoImg}></Image>
      </View>
      {/* --------Botão Navegação-------- */}
      <View style={styles.category}>
        <View>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Início</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Séries</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Filmes</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Kids</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false}> {/*Habilita poder escrolar a página */}
      {/* ------- Thumbnails ------- */}
      <Text style={styles.continueWatchingText}>Acabaram de chegar</Text>
      <TouchableOpacity style={styles.movieImageThumbnail}>
        <FlatList
        data = {MOVIESARRIVED}
        keyExtractor={(item) => item.id} //Para puxar cada id no "MOVIESWATCHING"
        renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
        horizontal //Deixar a lista na horizontal
        showsHorizontalScrollIndicator={false} //Ao deixar várias imagens da lista na horizontal, ele automaticamente cria uma barra de rolagem embaixo, isso desativa ela
        style={styles.contentList}></FlatList>
      </TouchableOpacity>
      
        <Text style={styles.continueWatchingText}>Continue Assistindo...</Text>
        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id} //Para puxar cada id no "MOVIESWATCHING"
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal //Deixar a lista na horizontal
          showsHorizontalScrollIndicator={false} //Ao deixar várias imagens da lista na horizontal, ele automaticamente cria uma barra de rolagem embaixo, isso desativa ela
          style={styles.contentList}
        />

        <Text style={styles.continueWatchingText}>Idiomas</Text>
        <FlatList
          data={MOVIESWATCH}
          keyExtractor={(item) => item.id} //Para puxar cada id no "MOVIESWATCHING"
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal //Deixar a lista na horizontal
          showsHorizontalScrollIndicator={false} //Ao deixar várias imagens da lista na horizontal, ele automaticamente cria uma barra de rolagem embaixo, isso desativa ela
          style={styles.contentList}
        />

        <Text style={styles.continueWatchingText}>Filmes de suspense</Text>
        <FlatList
          data={MOVIESCRIME}
          keyExtractor={(item) => item.id} //Para puxar cada id no "MOVIESWATCHING"
          renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
          horizontal //Deixar a lista na horizontal
          showsHorizontalScrollIndicator={false} //Ao deixar várias imagens da lista na horizontal, ele automaticamente cria uma barra de rolagem embaixo, isso desativa ela
          style={styles.contentList}
        />
      </ScrollView>
    </View>
  );
};
