async function notificar() {
  if (!("Notification" in window)) {
    alert("Este navegador não suporta notificações");
    return;
  }

  const valor = document.getElementById("valor").value || "Você";

  const titulo = document.getElementById("titulo").value || "Notificação";
  const mensagem = `Você recebeu um presente, parabéns ${valor}! 🎉`;

  const permissao = await Notification.requestPermission();

  if (permissao === "granted") {
    navigator.serviceWorker.ready.then(registro => {
      registro.showNotification(titulo, {
        body: mensagem,
        icon: "icons/nubank.png"
      });
    });
  }
}
