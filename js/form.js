var botaoAdicionar = document.querySelector('#adiciona-aluno')

botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()

  var form = document.querySelector('#form-adiciona')
  var criandoAluno = aluno(form)

  var erro = validacaoNovoAluno(criandoAluno)

  if (erro.length > 0) {
    exibeErros(erro)
    return
  }

  adicionaNovoAlunoNaTabela(criandoAluno)

  form.reset()

  var mensagensErro = document.querySelector('#mensagens-de-erros')
  mensagensErro.innerHTML = ''

  var novoAluno = document.querySelectorAll('.aluno')

  for (i = 0; i < novoAluno.length; i++) {
    var novos = novoAluno[i]
    var mediaNovoAluno = novos.querySelector('.info-media')
    var mediaAlunoNovo = mediaNovoAluno.textContent
    var situacaoNovoAluno = novos.querySelector('.info-situação')

    if (mediaAlunoNovo >= 5) {
      console.log('Aprovado')
      situacaoNovoAluno.textContent = 'Aprovado'
      situacaoNovoAluno.style.fontWeight = 'bold'
      situacaoNovoAluno.style.color = 'green'
    } else {
      console.log('Reprovado')
      situacaoNovoAluno.textContent = 'Reprovado'
      situacaoNovoAluno.style.fontWeight = 'bold'
      situacaoNovoAluno.style.color = 'red'
    }
  }
})

function aluno(form) {
  var aluno = {
    nome: form.nome.value,
    nota1: form.nota1.value,
    nota2: form.nota2.value,
    nota3: form.nota3.value,
    nota4: form.nota4.value,
    media: calculaMedia(
      parseFloat(form.nota1.value),
      parseFloat(form.nota2.value),
      parseFloat(form.nota3.value),
      parseFloat(form.nota4.value)
    )
  }

  return aluno
}

function montaTr(criandoAluno) {
  var alunoTr = document.createElement('tr')
  alunoTr.classList.add('aluno')

  alunoTr.appendChild(montaTd(criandoAluno.nome, 'info-nome'))
  alunoTr.appendChild(montaTd(criandoAluno.nota1, 'info-nota1'))
  alunoTr.appendChild(montaTd(criandoAluno.nota2, 'info-nota2'))
  alunoTr.appendChild(montaTd(criandoAluno.nota3, 'info-nota3'))
  alunoTr.appendChild(montaTd(criandoAluno.nota4, 'info-nota4'))
  alunoTr.appendChild(montaTd(criandoAluno.media, 'info-media'))
  alunoTr.appendChild(montaTd(criandoAluno.situacao, 'info-situação'))

  return alunoTr
}

function montaTd(dado, classe) {
  var alunoTd = document.createElement('td')
  alunoTd.classList.add(classe)
  alunoTd.textContent = dado

  return alunoTd
}

function adicionaNovoAlunoNaTabela(aluno) {
  var criarTr = montaTr(aluno)
  var tabela = document.querySelector('#tabelaDeNotas')
  tabela.appendChild(criarTr)
}

//Seção Erros - possiveis erros ao incluir um novo aluno

function validacaoNovoAluno(criandoAluno) {
  var erros = []

  if (
    criandoAluno.nome.length == 0 &&
    criandoAluno.nota1.length == 0 &&
    criandoAluno.nota2.length == 0 &&
    criandoAluno.nota3.length == 0 &&
    criandoAluno.nota4.length == 0
  ) {
    erros.push('Os campos estão vazios!')
    document.querySelector('#nome').focus()
  } else if (criandoAluno.nome.length == 0) {
    erros.push('Ops! Está faltando o nome')
    document.querySelector('#nome').focus()
  } else if (
    criandoAluno.nota1 > 10 ||
    criandoAluno.nota1.length == 0 ||
    criandoAluno.nota2 > 10 ||
    criandoAluno.nota2.length == 0 ||
    criandoAluno.nota3 > 10 ||
    criandoAluno.nota3.length == 0 ||
    criandoAluno.nota4 > 10 ||
    criandoAluno.nota4.length == 0
  ) {
    erros.push('Hum, há uma nota em branco ou incorreta!')

    if (criandoAluno.nota1 > 10 || criandoAluno.nota1.length == 0) {
      document.querySelector('#nota1').focus()
    } else if (criandoAluno.nota2 > 10 || criandoAluno.nota2.length == 0) {
      document.querySelector('#nota2').focus()
    } else if (criandoAluno.nota3 > 10 || criandoAluno.nota3.length == 0) {
      document.querySelector('#nota3').focus()
    } else if (criandoAluno.nota4 > 10 || criandoAluno.nota4.length == 0) {
      document.querySelector('#nota4').focus()
    }
  }

  return erros
}

function exibeErros(erros) {
  var ul = document.querySelector('#mensagens-de-erros')
  ul.innerHTML = ''

  erros.forEach(function (erro) {
    var li = document.createElement('li')
    li.textContent = erro
    ul.appendChild(li)
  })
}
