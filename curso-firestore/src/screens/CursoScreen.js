async function carregar() {
    setCarregando(true);
    setErro(null);
   
    try {
      const dados = await buscarCurso();
      setCurso(dados);
    } catch (e) {
      setErro(e.message);
    } finally {
      // roda no sucesso E no erro
      setCarregando(false);
    }
  }
   
  useEffect(() => {
    carregar();
  }, []);   // [] = uma única vez, quando a tela abre
  if (carregando) {
    return (
      <View style={estilos.centro}>
        <ActivityIndicator size="large" />
        <Text>Carregando...</Text>
      </View>
    );
  }
   
  if (erro) {
    return (
      <View style={estilos.centro}>
        <Text>{erro}</Text>
        <Pressable onPress={carregar}>
          <Text>Tentar novamente</Text>
        </Pressable>
      </View>
    );
  }
// A partir daqui, curso existe
const disciplinas = curso.disciplinas ?? [];
 
return (
  <ScrollView>
    <View style={estilos.cabecalho}>
      <Text>{curso.modalidade}</Text>
      <Text>{curso.nome}</Text>
    </View>
    <Secao titulo="Perfil do egresso">
      <Text>{curso.perfilEgresso}</Text>
    </Secao>
    <Secao titulo="Disciplinas">
      {disciplinas.map((d, i) => (
        <DisciplinaItem key={i} disciplina={d} />
      ))}
    </Secao>
  </ScrollView>
);
import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import DisciplinaItem from "../components/DisciplinaItem";
import Secao from "../components/Secao";
import { buscarCurso } from "../services/cursoService";

const CursoScreen = () => {
  const [curso, setCurso] = useState(null); // sucesso
  const [carregando, setCarregando] = useState(true); // começa carregando
  const [erro, setErro] = useState(null); // erro
  async function carregar() {
    setCarregando(true);
    setErro(null);
    try {
      const dados = await buscarCurso();
      setCurso(dados);
    } catch (e) {
      setErro(e.message);
    } finally {
      // roda no sucesso E no erro
      setCarregando(false);
    }
  }
  useEffect(() => {
    carregar();
  }, []); // [] = uma única vez, quando a tela abre
  if (carregando) {
    return (
      <View style={estilos.centro}>
        <ActivityIndicator size="large" />
        <Text>Carregando...</Text>
      </View>
    );
  }
// A partir daqui, curso existe
const disciplinas = curso.disciplinas ?? [];

return (
  <View>
    <View style={estilos.cabecalho}>
      <Text style={estilos.modalidade}>{curso.modalidade}</Text>
      <Text style={estilos.titulo}>{curso.nome}</Text>
    </View>
    <Secao titulo="Perfil do egresso">
      <Text>{curso.perfilEgresso}</Text>
    </Secao>
    <Secao titulo="Disciplinas">
      <FlatList
        data={disciplinas}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => <DisciplinaItem disciplina={item} />}
      />
    </Secao>
  </View>
);
};


export default CursoScreen;
const estilos = StyleSheet.create({
    centro: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      gap: 8,
    },
    cabecalho: {
      padding: 24,
      marginBottom: 20,
      backgroundColor: "#1d4ed8",
    },
    modalidade: {
      marginBottom: 6,
      color: "#dbeafe",
      fontSize: 14,
    },
    titulo: {
        color: "#ffffff",
        fontSize: 28,
        fontWeight: "700",
      },
      textoErro: {
        color: "#b91c1c",
        textAlign: "center",
      },
      botao: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: "#1d4ed8",
      },
      textoBotao: {
        color: "#ffffff",
        fontWeight: "600",
      },
    });
    
      
