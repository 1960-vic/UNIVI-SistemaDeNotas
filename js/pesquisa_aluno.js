var pesquisaAluno = document.querySelector('#filtrar-alunos')

pesquisaAluno.addEventListener('input', function () {
  var alunos = document.querySelectorAll('.aluno')

  if (this.value.length > 0) {
    for (var i = 0; i < alunos.length; i++) {
      var aluno = alunos[i]
      var nome = aluno.querySelector('.info-nome')
      var nomeAluno = nome.textContent
      var expressao = new RegExp(this.value, 'i')

      if (!expressao.test(nomeAluno)) {
        aluno.classList.add('hidden')
      } else {
        aluno.classList.remove('hidden')
      }
    }
  } else {
    for (var i = 0; i < alunos.length; i++) {
      var aluno = alunos[i]
      aluno.classList.remove('hidden')
    }
  }
})
