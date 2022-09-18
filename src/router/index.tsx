import { 
    BrowserRouter, 
    Route, 
    Routes 
} from "react-router-dom";
import PokePage from "../pages/Pokepage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    // TODO: replace path with the portfolio component page
                    path="/" 
                    element={<PokePage/>} 
                />
                <Route 
                    path="/pokepage" 
                    element={<PokePage/>} 
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;