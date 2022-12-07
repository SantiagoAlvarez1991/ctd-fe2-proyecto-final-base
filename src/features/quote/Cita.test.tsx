import { render } from '../../test-utils'
import userEvent from '@testing-library/user-event'
import { act } from "react-dom/test-utils"
import { waitForElementToBeRemoved, screen } from '@testing-library/react';

import Cita from './Cita'


describe("Testting <Cita /> component",()=>{
    
    test("Presionar boton 'Obtener cita aleatoria' y traer una cita aleatoria", async() => {
        const user = userEvent.setup();
        render(<Cita/>);
        const searchButton = screen.getByRole("button", {name : "Obtener cita aleatoria"});        
        await user.click(searchButton);
        await waitForElementToBeRemoved( () => screen.queryByText("CARGANDO..."));           
        expect(await screen.findByText("Ah, be creative. Instead of making sandwhiches with bread, use Pop-Tarts. Instead of chewing gum, chew bacon.")).toBeInTheDocument();
    })

    test("Escribir el nombre de un personaje y recibir una cita", async() => {
        const user = userEvent.setup();
        render(<Cita/>);
        const inputSearch = screen.getByPlaceholderText("Ingresa el nombre del autor");
        await user.type(inputSearch, "Marge Simpson");      
        expect(inputSearch).toHaveValue("Marge Simpson");
        await user.click(await screen.findByLabelText("Obtener Cita"));
        expect(await screen.findByText("I don't want to sound like a killjoy.")).toBeInTheDocument();        
    })

    test("Escribir un numero en el input y recibir mensaje de error", async() => {
        const user = userEvent.setup();
        render(<Cita/>);
        const inputSearch = screen.getByPlaceholderText("Ingresa el nombre del autor");
        await user.type(inputSearch, "1");       
        expect(inputSearch).toHaveValue("1");
        await user.click(await screen.findByLabelText("Obtener Cita"));
        expect(await screen.findByText("Por favor ingrese un nombre válido")).toBeInTheDocument();
    })

    test("Obtener cita aletoria y hacer click en boton 'Borrar' para borrar informacion recibida", async()=> {
        const user = userEvent.setup()
        render(<Cita/>)
        const searchButton = screen.getByRole("button", {name : "Obtener cita aleatoria"});
        const clearButton = screen.getByRole("button", {name : "Borrar"});
        await user.click(searchButton);
        expect(await screen.findByText("Dr. Nick")).toBeInTheDocument();        
        await user.click(clearButton);
        expect(screen.queryByText("Dr. Nick")).not.toBeInTheDocument()
    })
})