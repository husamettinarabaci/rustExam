## 📘 Bölüm: Thread Yönetimi ve Zamanlama  
### 🔹 Kategori: Thread Zamanlaması ve İşletim Sistemi  
#### ✅ Cevap 1162: İşletim sistemi thread zamanlamasını anlama

Rust'ta thread'ler genellikle işletim sistemi (OS) thread'leriyle eşleştirilir. Thread zamanlaması, thread'lerin CPU üzerinde ne zaman ve ne kadar süreyle çalışacağını belirler. Rust'ın `std::thread` API'si ile oluşturulan thread'ler, OS zamanlayıcısı tarafından yönetilir. Thread önceliği, bir thread'in diğerlerine göre ne kadar öncelikli çalışacağını belirlerken, zaman dilimi (time slice), bir thread'in CPU'da kesintisiz çalışabileceği maksimum süredir. Rust doğrudan thread önceliği veya zaman dilimi ayarlamaz; bu, genellikle OS tarafından kontrol edilir.
