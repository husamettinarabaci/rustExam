## 📘 Bölüm: İleri Async Desenleri  
### 🔹 Kategori: select! ile birden fazla eşzamanlı future için seçim  
#### ❓ Soru 552: Birden fazla eşzamanlı future için `select!` kullanımı

Aşağıdakileri yapan bir Rust programı yazın:

- İki farklı async işlemi (örneğin iki farklı `tokio::time::sleep`) başlatın.
- `tokio::select!` makrosunu kullanarak hangisi önce tamamlarsa onun sonucunu yazdırın.

🔧 **Görev:** `tokio::select!` ile birden fazla future arasında seçim yaparak ilk tamamlanan işlemin sonucunu asenkron olarak yazdırın.
