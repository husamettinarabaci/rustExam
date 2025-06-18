## 📘 Bölüm: Eşzamanlı Kodda Test ve Hata Ayıklama  
### 🔹 Kategori: Deadlock ve Yarış Durumlarını Hata Ayıklama  
#### ✅ Cevap 1144: Deadlock ve yarış durumlarını hata ayıklama

Deadlock, iki veya daha fazla thread'in birbirini bekleyerek sonsuza kadar kilitlenmesidir. Yarış durumu ise thread'lerin korumasız veri üzerinde çakışmasıdır. Rust'ta bu sorunları tespit etmek için:
- `std::sync::Mutex` ve `Arc` ile kilit sırasına dikkat edin.
- Thread sanitizer (TSan) ile yarış durumlarını tespit edin.
- `println!` veya log ile kilitlenme noktalarını izleyin.
- `cargo run --target x86_64-unknown-linux-gnu -Z sanitizer=thread` ile TSan kullanın.

Pratikte, kodunuzu küçük parçalara ayırıp, kilit sırasını ve paylaşımı dikkatlice inceleyin.
