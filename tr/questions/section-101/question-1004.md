## 📘 Bölüm: Async Runtime ve Görev Yönetimi  
### 🔹 Kategori: `tokio::select!` ile Eşzamanlı Future'lar  
#### ❓ Soru 1004: `tokio::select!` ile eşzamanlı future'lar

Aşağıdakileri yapan bir Rust programı yazın:

- İki farklı async işlemi (örneğin, zamanlayıcı ve kanal) başlatın.
- `tokio::select!` makrosunu kullanarak bu işlemlerden hangisi önce tamamlarsa onu işleyin.
- Her iki işlemin de tamamlanma durumunu ekrana yazdırın.

🔧 **Görev:** `tokio::select!` ile birden fazla future'ı eşzamanlı beklemeyi gösteren bir örnek oluşturun.
