async function notificar() {
  if (!("Notification" in window)) {
    alert("Este navegador não suporta notificações");
    return;
  }

  const titulo = document.getElementById("titulo").value || "Notificação";
  const valor = document.getElementById("mensagem").value || "R$ 0,00";

  // 👉 FRASE FIXA AQUI
  const mensagemFinal = `Você recebeu um depósito no valor de ${valor}.`;

  const permissao = await Notification.requestPermission();

  if (permissao === "granted") {
    navigator.serviceWorker.ready.then(registro => {
      registro.showNotification(titulo, {
        body: mensagemFinal,
        icon: "icons/nubank.png"
      });
    });
  }
}
