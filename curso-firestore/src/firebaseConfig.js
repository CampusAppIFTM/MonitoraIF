import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
 
// Cole aqui o objeto que o console mostrou na etapa 1
const firebaseConfig = {
    apiKey: "AIzaSyAokrhMMDfvGgx2HWQRdZllgnkovBJT14s",
    authDomain: "aula-firestore-416e1.firebaseapp.com",
    projectId: "aula-firestore-416e1",
    storageBucket: "aula-firestore-416e1.firebasestorage.app",
    messagingSenderId: "795126477976",
    appId: "1:795126477976:web:adf624383e631662d10ced"
  }
 
const app = initializeApp(firebaseConfig);
const [curso, setCurso] = useState(null);         // sucesso
const [carregando, setCarregando] = useState(true); // começa carregando
const [erro, setErro] = useState(null);           // erro
 
// A "porta de entrada" do banco.
// Todo acesso ao Firestore passa por ela.
export const db = getFirestore(app);
doc(db, 'cursos', 'bdmonitoraif')
doc(db, 'cursos', 'sistemas-para-internet')
 