const button = document.getElementById('validade-button');

function showSucess() {
  document.getElementById('sucess').style.display = 'flex';
}

function showError() {
  document.getElementById('error').style.display = 'flex';
}

function validateBlock(block, verifierDigit) {
  verifierDigit = Number(verifierDigit)
  const blockSize = block.length + 1;
  const count = block.reduce((total, digit, index) => {
    const multiplier = blockSize - index;
    const value = parseInt(digit);
    return total + (multiplier * value);
  }, 0);
  return count * 10 % 11 === verifierDigit;
}

function validateCPF() {
  let cpf = document.getElementById('input-cpf').value;
  document.getElementById('sucess').style.display = 'none';
  document.getElementById('error').style.display = 'none';
  if (cpf.length != 11 || cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999") {
    return showError()
  }
  const block1 = [...cpf.slice(0, 9)];
  const block2 = [...cpf.slice(0, 10)];
  const verifierDigit1 = Number(cpf[9]);
  const verifierDigit2 = Number(cpf[10]);
  const isBlock1Valid = validateBlock(block1, verifierDigit1);
  const isBlock2Valid = validateBlock(block2, verifierDigit2);

  if ([isBlock1Valid, isBlock2Valid].some(valid => !valid)) {
    return showError()
  }
  return showSucess()
}

