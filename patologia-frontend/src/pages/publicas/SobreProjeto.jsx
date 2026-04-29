import BotaoVoltar from '../../components/BotaoVoltar';

export default function SobreProjeto() {
  return (
    <div className="container-sobre">
      <BotaoVoltar />

      <div className="card">
        <h1 className="titulosobreoprojeto text-center" style={{ textAlign: 'center' }}>
          Sobre o Projeto
        </h1>
        <p className="explicacaosobreoprojeto">
          Plataforma educacional voltada para estudantes e professores da área da saúde, com foco em exames de imagem médica, questões de múltipla escolha e apoio de Inteligência Artificial para diagnósticos.
        </p>
      </div>
    </div>
  );
}