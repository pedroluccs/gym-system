import { useRouter } from "next/router";
import {
  PlanosContainer,
  PlanCard,
  PlanTitle,
  PlanPrice,
  SubscribeButton,
  BenefitsList,
} from "./style";

const Planos = () => {
  const router = useRouter();

  const handleMatricula = (plano: string) => {
    const alunoTemp = {
      id: `${Date.now()}`, // ID temporário
      nome: "",
      telefone: "",
      email: "",
      dataNascimento: "",
      plano: plano,
    };

    localStorage.setItem("alunoTemp", JSON.stringify(alunoTemp));
    router.push(`/checkout/${alunoTemp.id}`);
  };

  return (
    <PlanosContainer>
      <h1>Confira Nossos Planos</h1>

      <div className="plan-cards">
        <PlanCard>
          <PlanTitle>Mensal</PlanTitle>
          <PlanPrice>R$ 99,90</PlanPrice>
          <SubscribeButton onClick={() => handleMatricula("mensal")}>
            Matricule-se
          </SubscribeButton>
          <BenefitsList>
            <li>Sem multas ou taxas de cancelamento</li>
            <li>Acesso total à estrutura da academia</li>
            <li>Sem restrição de horários</li>
          </BenefitsList>
        </PlanCard>

        <PlanCard  backgroundImage="url('/images/fundo_combo_plus.png')">
          <PlanTitle>Semestral</PlanTitle>
          <PlanPrice>R$ 499,90</PlanPrice>
          <SubscribeButton onClick={() => handleMatricula("semestral")}>
            Matricule-se
          </SubscribeButton>
          <BenefitsList>
            <li>Sem multas ou taxas de cancelamento</li>
            <li>Acesso total à estrutura da academia</li>
            <li>Sem restrição de horários</li>
          </BenefitsList>
        </PlanCard>

        <PlanCard>
          <PlanTitle>Anual</PlanTitle>
          <PlanPrice>R$ 999,90</PlanPrice>
          <SubscribeButton onClick={() => handleMatricula("anual")}>
            Matricule-se
          </SubscribeButton>
          <BenefitsList>
            <li>Sem multas ou taxas de cancelamento</li>
            <li>Acesso total à estrutura da academia</li>
            <li>Sem restrição de horários</li>
          </BenefitsList>
        </PlanCard>
      </div>
    </PlanosContainer>
  );
};

export default Planos;
