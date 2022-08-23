import { createContext } from "react";

export const contextData = createContext({})


function DataProvider({children}){
    
    function handleState(item){
        switch(item){
            case "AC" : return "Acre";
            case "AL" : return "Alagoas";
            case "AP" : return "Amapá";
            case "AM" : return "Amazonas";
            case "BA" : return "Bahia";
            case "CE" : return "Ceará";
            case "DF" : return "Distrito Federal";
            case "ES" : return "Espirito Santo";
            case "GO" : return "Goiás";
            case "MA" : return "Maranhão";
            case "MT" : return "Mato Grosso";
            case "MS" : return "Mato Grosso do Sul";
            case "MG" : return "Minas Gerais";
            case "PA" : return "Pará";
            case "PB" : return "Paraíba";
            case "PR" : return "Paraná";
            case "PE" : return "Pernambuco";
            case "PI" : return "Piauí";
            case "RJ" : return "Rio de Janeiro";
            case "RN" : return "Rio Grande do Norte";
            case "RS" : return "Rio Grande do Sul";
            case "RO" : return "Rondônia";
            case "RR" : return "Roraima";
            case "SC" : return "Santa Catarina";
            case "SP" : return "São Paulo";
            case "SE" : return "Sergipe";
            case "TO" : return "Tocantins";
            default: return "Sem estado!"
             
        }
    }

    return(
        <contextData.Provider value={{handleState}}>
            {children}
        </contextData.Provider>
    )
}

export default DataProvider;