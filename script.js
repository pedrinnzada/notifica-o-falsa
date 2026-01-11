async function notificar() {
  if (!("Notification" in window)) {
    alert("Este navegador não suporta notificações");
    return;
  }

  const titulo = document.getElementById("nome").value || "Notificação";
  const valor = document.getElementById("valor").value || "R$ 0,00";

  const mensagemFinal = `Você recebeu uma transferência de R$${valor} de PAY BROKERS eFX FACILITADORA D.`;

  const permissao = await Notification.requestPermission();

  if (permissao === "granted") {

    // ⏳ ATRASO DE 5 SEGUNDOS
    setTimeout(() => {
      navigator.serviceWorker.ready.then(registro => {
        registro.showNotification(titulo, {
          body: mensagemFinal,
          icon: "icons/nubank.png"
        });
      });
    }, 3000);

  }
}
