type Props = {
    texto: string;
}

export function Boton({texto}: Props) {
  return (
    <button>{texto}</button>
  )
}


export default Boton