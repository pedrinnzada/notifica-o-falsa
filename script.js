async function notificar() {
  if (!("Notification" in window)) {
    alert("Este navegador não suporta notificações");
    return;
  }

  // 🔹 TÍTULO vem do input
  const titulo = document.getElementById("nome").value || "Notificação";

  // 🔹 VALOR vem do campo mensagem
  const valor = document.getElementById("valor").value || "R$ 0,00";

  // 🔹 FRASE FIXA
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
