function ChargePage() {
  const [ChargeModal, setChargeModal] = useState(false);

  return (
    <div>
      <h2>크레딧 충전하기</h2>
      <div>
        <img src={credit} alt="creditImg" /> 100{" "}
      </div>
      <div>
        <img src={credit} alt="creditImg" /> 500{" "}
      </div>
      <div>
        <img src={credit} alt="creditImg" /> 1000{" "}
      </div>
    </div>
  );
}

export default LackModal;
