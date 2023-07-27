import { useState } from "react";
import * as S from "../../styles/styles";

export default function TemperatureCard() {
  const [temperature, setTemperature] = useState(0);

  const increaseTemperature = () => {
    setTemperature(temperature + 1);
  };

  const decreaseTemperature = () => {
    setTemperature(temperature - 1);
  };

  return (
    <S.TempCard>
      <S.TempValue>{temperature} °C</S.TempValue>
      <S.BtnGroup>
        <S.DecreaseButton
          onClick={() => {
            decreaseTemperature();
          }}
        >
          -
        </S.DecreaseButton>
        <S.IncreaseButton
          onClick={() => {
            increaseTemperature();
          }}
        >
          +
        </S.IncreaseButton>
      </S.BtnGroup>
    </S.TempCard>
  );
}
