import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterCountriesByContinent, orderByName, filterByPopulation, getActivities, filterByActivities } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
//  import Cards from "../Cards/Cards";
import "./home.css";
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer";

export default function Home() {
  const dispatch = useDispatch(); //es para utilizar esa constante e ir despachando mis acciones (actions)
  const allCountries = useSelector((state) => state.countries);
  
  const [currentPage, setCurrentPage] = useState(1); //currentPage => pagina actual setCuPage => la fn que actualiza ese primer estado, que generara, un nuevo state.
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const [orden, setOrden] = useState("");
  const activities = useSelector((state) => state.activities)
  console.log(activities)
  const indexOfLastCountries = currentPage * countriesPerPage; //para saber el ultimo indice de la receta de la pag. 1 = 9 recetas, 2 pag = 18 recetas.
  const indexOfFirstCountries = indexOfLastCountries - countriesPerPage; //indice de tu primer receta en la 2da pagina, seria 9.
  const currentCountries = allCountries.slice(indexOfFirstCountries,indexOfLastCountries);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  console.log(allCountries);

  function handleClick(e) {
          e.preventDefault();
          dispatch(getCountries());
      }

    function handleFilterContinent(e) {
        dispatch(filterCountriesByContinent(e.target.value));                                                       //va a tomar como payload el valor de cada uno de los value de las option del select
        setCurrentPage(1)
    }

    function handleFilterActivity(e){
      console.log(e.target.value)
      dispatch(filterByActivities(e.target.value));
    }

    function handleFilterStatus(e) {
        dispatch()
    }

    function handleSort (e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1); // cuando hago el ordenamiento lo hago desde la pagina 1, 
        setOrden(`Ordenado ${e.target.value}`) // setOrden es un estado local que en un inicio va a estar vacio, para cuando seteo en la pagina 1, me modifica el estado local y renderiza
    };

    function handleSortPop (e) {
        e.preventDefault();
        dispatch(filterByPopulation(e.target.value));
        setCurrentPage(1); // cuando hago el ordenamiento lo hago desde la pagina 1, 
        setOrden(`Ordenado ${e.target.value}`) // setOrden es un estado local que en un inicio va a estar vacio, para cuando seteo en la pagina 1, me modifica el estado local y renderiza
    };
    let a = []

  return (
    <>
    <div className="home-contain">
      <div>
        <div className="centradoPage">
            <div>
             <div className="titulo">   
            <h1> ¿A DÓNDE QUERÉS VIAJAR? </h1>
            </div>
          <select onChange={e => {handleSort(e)}}
            value="alfabetico" className="form-select" name="existing" defaultValue="existing"
          >
            <option value="alfabetico" disabled hidden>
              Orden alfabético
            </option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
          <select onChange={e => {handleSortPop(e)}}
            value="poblacion" className="form-select" name="existing" defaultValue="existing"
          >
            <option value="poblacion" disabled hidden>
              Población
            </option>
            <option value="ascpop">Población Ascendente</option>
            <option value="descpop">Población Descendente</option>
          </select>
          <select onChange={e => handleFilterContinent(e) }
            value="all" className="form-select" name="existing" defaultValue="existing">
            <option value="all" disabled hidden> Continentes </option>
            <option value="Africa">África</option>
            <option value="America">América</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceania</option>
          </select>
          <select onChange={e => handleFilterActivity(e)}
            className="form-select" name="existing" defaultValue="filtro-actividad"
          >
            <option value="filtro-actividad" hidden>Filtrar por actividad</option>
            {
              activities && activities.map((e,i) => {
                console.log(a)
                if (!a.includes(e.name)) {                  
                  a.push(e.name)
                  return <option value={e.name} key={i}>{e.name}</option>
                }
              })
            }
          </select>
          <button onClick={(e)=> {handleClick(e)}} className="clean-filters"> Limpiar filtros </button>
          </div>
          <div>
            <Link to="/form" className="add-activity"> Añadir actividad turística </Link>
          </div>
          <SearchBar setCurrentPage={setCurrentPage}/>
          <Paginado
            setCurrentPage ={setCurrentPage}
            currentPage ={currentPage}
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            paginado={paginado}
          />
        </div>
        {/* {  <Cards allCountries ={allCountries}></Cards> } */}
        <div className="estilo-cards">
         {currentCountries?.map((e) => {
          return (
            <div key={e.id}>
              <Card
                id={e.id}
                name={e.name}
                continents={e.continents}
                image={e.flag}

              />
            </div>
          );
        })} 
        </div>
      </div>
    </div>
    <div>
    <Footer />
  </div>
  </>
  );
}
