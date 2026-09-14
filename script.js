// HTML tarafında butona tıklandığında (onclick="showMessage()") tetiklenen ana fonksiyonumuz
function showMessage() {
  // 1. document: Sayfamızdaki HTML dokümanını temsil eder.
  // 2. getElementById("message"): HTML'deki id değeri "message" olan boş <p> etiketini bulur ve yakalar.
  // 3. .textContent = ... : Yakalanan bu etiketin içine ekranda görünecek tebrik metnini yazar.
  document.getElementById("message").textContent =
    "Tebrikler! İlk web sayfanı yaptın! 🎉";
}
