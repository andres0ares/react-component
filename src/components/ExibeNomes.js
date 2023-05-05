import '../styles/ExibeNotas.css';

export default function ExibeNomes(props) {

    //Obtêm notas
    const { notas } = props;

    //Organiza em ordem alfabética
    notas.sort((a, b) => (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0));

    //Exibe nomes
    const displayNotas = notas
    .map((pessoa) => 
        //se a nota do menor que 50, o nome aparece em vermelho, se a nota for maior ou igual a 50, o nome aparece em verde
        <div key={pessoa.nome} className={pessoa.nota >= 50 ? 'green-text': 'red-text'}>
            <p>{pessoa.nome}</p>
        </div>
    )

    //Exibe Componente
    return (
        <div className='main'>
            {displayNotas}
        </div>       
    )
}