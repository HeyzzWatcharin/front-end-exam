import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../src/components/layout";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=6").then((res) => {
      // console.log(res.data.re);
      setPokemon(res.data.results);
    });
  }, []);
  console.log(pokemon);
  return (
    <Layout>
      <div class="container p-5">
        <div class="row">
          {pokemon.map((p, i) => {
            return (
              <div key={i} class="col">
                <div className="card text-center p-3">
                  {/* <img src={pokemon && pokemon.sprites.front_default} alt="" /> */}
                  <p>{p.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Pokemon;
