async function notificar() {
  if (!("Notification" in window)) {
    alert("Este navegador não suporta notificações");
    return;
  }

  const titulo = document.getElementById("titulo").value || "Notificação";
  const mensagem = document.getElementById("mensagem").value || "Mensagem padrão";

  const permissao = await Notification.requestPermission();

  if (permissao === "granted") {
    navigator.serviceWorker.ready.then(registro => {
      registro.showNotification(titulo, {
        body: mensagem,
        icon: "icons/nubank.png"
      });
    });
  } else {
    alert("Permissão negada");
  }
}
