import React from "react";
import { BasicCard } from "../../BasicCard";

const TITLECARDS = [
  "A aposta esse ano custa R$ 120,00\ne deve ser paga antes de acabar o\ncampeonato",
  "Você concorre com a some dos\npontos dos quatro clubes do seu\nconjunto",
  "O saldo de gols dos conjuntos é o\núnico critério de desempate. Caso\npermaneça empatado, o prêmio\nserá dividido",
  "1° lugar recebe R$ 2000\n2° lugar recebe R$ 650\n3° lugar recebe R$ 350\n30° lugar recebe R$ 120",
  "Com os R$ 580 restantes, será feita nossa aposta de 9 dezenas na Mega\nsena da virada, e o que sobrar ainda pode ficar como custos do bolão ou\npodemos resolver outra coisa qualquer",
];

export default function Rules() {
  return (
    <>
      <p className="regrasStyle">Regras</p>
      <div className="rulesContainer">
        <BasicCard title={TITLECARDS[0]} index={1} />
        <BasicCard title={TITLECARDS[1]} index={2} />
        <BasicCard title={TITLECARDS[2]} index={3} />
        <BasicCard title={TITLECARDS[3]} index={4} />
        <BasicCard title={TITLECARDS[4]} isFifthCard index={5} />
      </div>
    </>
  );
}
