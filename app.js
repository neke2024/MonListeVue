const { createApp } = Vue;

createApp({
  data() {
    return {
      nouvelArticle: '',
      liste: []
    }
  },
  mounted() {
    // Charger depuis localStorage au démarrage
    const saved = localStorage.getItem('liste');
    if (saved) {
      this.liste = JSON.parse(saved);
    }
  },
  methods: {
    saveData() {
      localStorage.setItem('liste', JSON.stringify(this.liste));
    },
    ajouterArticle() {
      const nom = this.nouvelArticle.trim();
      if (nom) {
        this.liste.push({ nom: nom, fait: false });
        this.nouvelArticle = '';
        this.saveData(); // ⬅️ ici, après avoir modifié
      }
    },
    supprimerArticle(index) {
      this.liste.splice(index, 1);
      this.saveData(); // ⬅️ ici aussi
    },
    toggleFait(index) {
      this.liste[index].fait = !this.liste[index].fait;
      this.saveData(); // ⬅️ et ici aussi
    }
  }
}).mount('#app');
