import React from "react";

function FormField({ value, onChange }) {
    return (
        <div>
            <label>
                Nome da Categoria:
               <input
                    type="text"
                    value={value}
                    name="nome"
                    onChange={onChange}
                //*Só renderiza na tela quando realmente precisa */
                />
            </label>
        </div>
    )
}

export default FormField;