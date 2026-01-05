function mostrarQuiz() {
    const quiz = document.getElementById("quiz");
    const titulo = document.getElementById("titulo");

    quiz.classList.add("mostrar");
    quiz.classList.remove("escondido");

    titulo.innerHTML = "🎯 Quiz iniciado!";
    titulo.style.cursor = "default";
}

