// Écoute l'ordre d'afficher une notification (même app fermée)
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'PROGRAMMER_NOTIF') {
        const { id, texte, delai } = event.data;

        setTimeout(() => {
            self.registration.showNotification("Rappel de tâche", {
                body: texte,
                icon: "icon.png", // Optionnel : met le nom de ton icône si tu en as une
                badge: "icon.png",
                tag: id.toString()
            });
        }, delai);
    }
});
