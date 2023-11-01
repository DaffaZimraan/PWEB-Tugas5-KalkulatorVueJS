const app = Vue.createApp({
    data(){
        return{
            listBuku: [
                {judul: 'Pemrograman Web', pengarang: 'Ridho Rahman H', isToggle: false},
                {judul: 'Sistem Deteksi Intrusi', pengarang: 'Hatma Surotrisongko', isToggle: false},
                {judul: 'Smart City', pengarang: 'M Husni', isToggle: false},
                {judul: 'Internet of Things', pengarang: 'M Husni', isToggle: false}
            ]
        }
    },
    methods: {
        toggleBuku(buku){
            buku.isToggle = !buku.isToggle
        }
    }
})

app.mount('#app')