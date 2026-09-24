# Kendini Tanıtma Kartı (Profile Card)

Web geliştirmeye yeni başlayanlar için hazırlanmış; **HTML5**, **CSS3** ve **JavaScript** temellerini pekiştiren etkileşimli bir "Kendini Tanıtma Kartı" projesidir.

---

## Proje Hakkında

Bu proje, canlı eğitimlerde web geliştirmenin üç ana ayağını uygulamalı olarak göstermek amacıyla hazırlanmıştır:
- **HTML:** Sayfanın iskeletini ve içerik hiyerarşisini kurar.
- **CSS:** Görsel tasarım, modern hizalama (Flexbox & Grid), renkler ve gölgelendirmeleri yönetir.
- **JavaScript:** Sayfaya dinamiklik ve buton tıklama etkileşimi kazandırır.

---

## Özellikler

-  **Dikey & Yatay Ortalama:** CSS Flexbox ile ekranın tam ortasına yerleştirilmiş kart tasarımı.
-  **Responsive & Temiz Görünüm:** Mobil ve masaüstü uyumlu modern kart tasarımı.
-  **CSS Grid Düzeni:** Hobiler ve ilgi alanlarını 2 sütunlu düzenli bir ızgarada gösterme.
-  **Dinamik Etkileşim:** Butona tıklandığında sayfayı yenilemeden DOM manipülasyonu ile tebrik mesajı yazdırma.
-  **Eğitim Dostu:** Tüm kodlar, derste öğrencilere aktarımı kolaylaştıran ayrıntılı Türkçe açıklamalar ve yorum satırları içerir.

---

## 📁 Proje Dosya Yapısı

```bash
kendini-tanitma-karti/
│
├── index.html    # Sayfanın yapısı, metinleri, başlıkları ve bileşenleri
├── style.css     # Renkler, yazı tipleri, Flexbox & Grid yerleşim stilleri
├── script.js     # Buton tıklama olayı ve ekrana mesaj yazdırma mantığı
└── README.md     # Proje tanıtımı ve kullanım rehberi
```

---

##  Nasıl Çalıştırılır?

Projeyi çalıştırmak için herhangi bir paket yüklemesine veya sunucu kurulumuna gerek yoktur:

1. Proje klasörünü bilgisayarınıza indirin veya klonlayın:
   ```bash
   git clone https://github.com/kullanici-adi/kendini-tanitma-karti.git
   ```
2. Klasörün içindeki `index.html` dosyasına çift tıklayarak herhangi bir web tarayıcısında (Chrome, Safari, Edge vb.) açın.
3. Ya da VS Code kullanıyorsanız **Live Server** eklentisi ile `Go Live` butonuna basarak anlık olarak görüntüleyin.

---

##  Derste Öğrenilecek Temel Kavramlar

### 1. HTML (`index.html`)
- `<!doctype html>`, `<html>`, `<head>`, `<body>` temel doküman yapısı
- Karakter seti (`UTF-8`) ve mobil uyumluluk (`viewport`)
- Başlık hiyerarşisi (`<h1>`, `<h2>`) ve paragraflar (`<p>`)
- Gruplama elemanları (`<div>`, `<span>`)
- Etkileşim elemanı (`<button>`) ve `onclick` özelliği

### 2. CSS (`style.css`)
- `margin: 0` ile varsayılan tarayıcı boşluklarını sıfırlama
- `display: flex`, `justify-content: center`, `align-items: center` ile içerik ortalama
- `border-radius` (köşe yuvarlama) ve `box-shadow` (kutu gölgesi)
- `display: grid` ve `grid-template-columns: 1fr 1fr` ile çoklu sütun oluşturma
- `:hover` pseudo-class (fare üzerine geldiğinde renk değişimi)

### 3. JavaScript (`script.js`)
- Fonksiyon tanımlama (`function showMessage()`)
- DOM Elemanı Seçme (`document.getElementById("message")`)
- Metin İçeriğini Güncelleme (`.textContent`)
