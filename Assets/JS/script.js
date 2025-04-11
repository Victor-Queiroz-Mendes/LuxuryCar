// Exemplo de interatividade com JS: alerta ao clicar em “Ver detalhes”
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Em breve você verá os detalhes deste carro de luxo!');
    });
  });
  