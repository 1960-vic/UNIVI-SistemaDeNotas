var alunos = document.querySelectorAll('.aluno')

for (i = 0; i < alunos.length; i++) {
  var aluno = alunos[i]

  var tdnota1 = aluno.querySelector('.info-nota1')
  var tdnota2 = aluno.querySelector('.info-nota2')
  var tdnota3 = aluno.querySelector('.info-nota3')
  var tdnota4 = aluno.querySelector('.info-nota4')
  var tdmedia = aluno.querySelector('.info-media')
  var tdsituacao = aluno.querySelector('.info-situação')

  var nota1 = parseFloat(tdnota1.textContent)

  var nota2 = parseFloat(tdnota2.textContent)

  var nota3 = parseFloat(tdnota3.textContent)

  var nota4 = parseFloat(tdnota4.textContent)

  var resultadoMedia = calculaMedia(nota1, nota2, nota3, nota4)
  tdmedia.textContent = resultadoMedia

  var validaAprovacao = validaMedia(resultadoMedia)

  if (validaAprovacao) {
    validaAprovacao = false
    tdsituacao.textContent = 'Aprovado'
    tdsituacao.style.fontWeight = 'bold'
    tdsituacao.style.color = 'green'
  } else {
    validaAprovacao = true
    tdsituacao.textContent = 'Reprovado'
    tdsituacao.style.fontWeight = 'bold'
    tdsituacao.style.color = 'red'
  }
}

function calculaMedia(nota1, nota2, nota3, nota4) {
  var media

  media = (nota1 + nota2 + nota3 + nota4) / 4

  return media.toFixed(2)
}

function validaMedia(media) {
  if (media >= 5) {
    return true
  } else {
    return false
  }
}
