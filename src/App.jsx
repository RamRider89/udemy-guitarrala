import { useState, useEffect } from "react"
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { db } from "./data/db"

function App() {

    // State
    const [auth, setAuth] = useState(true);
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState([]);
    const [data, setData] = useState(db);


    useEffect(() => {
        console.log("LISTO esuchando auth: " + auth);     
    }, [auth]);

    setTimeout(() => {
        setAuth(false);
    }, 3000);
    
    console.log(data);

    function addToCart(item) {

        const itemExists = cart.findIndex((guitar) => guitar.id === item.id);
        if (itemExists >= 0) { // el item existe
            const updateCart = [...cart];
            updateCart[itemExists].quantity++;
            setCart(updateCart);
            
        }else { // no existe, se agrega
            item.quantity = 1;
            setCart([...cart, item]);
        }
        

    }
    
    

    return (
        <>

        <Header />

        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">

                {
                    data.map((guitar) => {
                        return (
                             <Guitar 
                                key={guitar.id}
                                guitar = {guitar}
                                setCart={setCart}
                                addToCart={addToCart}
                             />
                        )
                    })
                }
               

            </div>
        </main>


        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
            </div>
        </footer>
        </>
    )
}

export default App
