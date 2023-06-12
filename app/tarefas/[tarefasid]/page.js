export default function tarefaDetalhePage({ params }) {
  const id = params.tarefasid;

  if (id == 0) {
    throw Error("deu ruim :(");
  }

  return (
    <>
      <h1>Tarefa {id}</h1>
    </>
  );
}
