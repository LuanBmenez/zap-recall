import { useState } from "react";

function FlashCard(props) {
  const {
    contador,
    setContador,
    iconsAnswers,
    setIconsAnswers,
    questionNumber,
    question,
    answer,
  } = props;

  const [stage, setStage] = useState("questionsList");

  function handleNaoLembreiClick() {
    setContador(contador + 1);
    setStage("answered-nao-lembrei");
    setIconsAnswers([
      ...iconsAnswers,
      <ion-icon
        key={iconsAnswers.length}
        id="nao-lembrei"
        name="close-circle"
      ></ion-icon>,
    ]);
  }

  function handleQuaseLembreiClick() {
    setContador(contador + 1);
    setStage("answered-quase-lembrei");
    setIconsAnswers([
      ...iconsAnswers,
      <ion-icon
        key={iconsAnswers.length}
        id="quase-lembrei"
        name="help-circle"
      ></ion-icon>,
    ]);
  }

  function handleZapClick() {
    setContador(contador + 1);
    setStage("answered-zap");
    setIconsAnswers([
      ...iconsAnswers,
      <ion-icon
        key={iconsAnswers.length}
        id="zap"
        name="checkmark-circle"
      ></ion-icon>,
    ]);
  }

  function renderAnswered(stageClass, iconName) {
    return (
      <div className={`flash-card-answered ${stageClass}`}>
        <p>{`Pergunta ${questionNumber}`}</p>
        <ion-icon name={iconName}></ion-icon>
      </div>
    );
  }

  switch (stage) {
    case "questionsList":
      return (
        <div className="flash-card">
          <p>{`Pergunta ${questionNumber}`}</p>
          <ion-icon
            name="play-outline"
            onClick={() => setStage("question")}
          ></ion-icon>
        </div>
      );

    case "question":
      return (
        <div className="flash-card-question">
          <p>{question}</p>
          <img
            src="assets/imgs/flip-flashcard-icon.png"
            alt="flip-card-icon"
            onClick={() => setStage("answer")}
          />
        </div>
      );

    case "answer":
      return (
        <div className="flash-card-answer">
          <p>{answer}</p>
          <div className="buttons-answer">
            <button className="nao-lembrei" onClick={handleNaoLembreiClick}>
              Não lembrei
            </button>
            <button className="quase-lembrei" onClick={handleQuaseLembreiClick}>
              Quase não lembrei
            </button>
            <button className="zap" onClick={handleZapClick}>
              Zap!
            </button>
          </div>
        </div>
      );

    case "answered-nao-lembrei":
      return renderAnswered("nao-lembrei", "close-circle");

    case "answered-quase-lembrei":
      return renderAnswered("quase-lembrei", "help-circle");

    case "answered-zap":
      return renderAnswered("zap", "checkmark-circle");

    default:
      return null;
  }
}

export default FlashCard;
