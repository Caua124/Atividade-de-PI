import Saudacao from "./components/Saudacao";
import Perfil from "./components/Perfil";
import Contador from "./components/Contador";
import Interruptor from "./components/Interruptor";
import "./App.css";

function App() {

    return (
        <div>

            <Saudacao />

            <hr />

            <Perfil nome="Maria" />
            <Perfil nome="João" />

            <hr />

            <Contador />

            <hr />

            <Interruptor />

        </div>
    );

}

export default App;