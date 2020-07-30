import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
        //chave: nome, descricao, senha, etc...
        setValues({
            ...values,
            [chave]: valor, //nome: 'valor'
        })
    }
    //função genérica para pegar todos os valores
    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }
    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,  /*Os ... é uma forma de adicionar valores novos sem deletar os antigos */
                    values
                ]);
                setValues(valoresIniciais)
            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição:"
                    type="????"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
                {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

                <button>
                    Cadastrar
            </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>


            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault >
    )
}

export default CadastroCategoria;

// {categorias.map((categoria, indice) => {   indice serve quando se precisa duplicar uma informação de forma correta, 
//                                            sem aparecer erros no console, cada key passa a ser diferente
//     return (
//         <li key={`${categoria}${indice}`}> 
//             {categoria}
//         </li>
//     )
// })}