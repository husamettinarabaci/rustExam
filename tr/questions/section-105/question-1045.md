## 📘 Bölüm: Future'lar ve Async Primitifler
### 🔹 Kategori: Async görev uyandırma için Waker kullanımı
#### ❓ Soru 1045: Async görev uyandırma için `Waker` kullanımı

Aşağıdakileri yapan bir Rust kodu yazın:

- Kendi `Future` implementasyonunuzda `Waker` kullanarak bir görevi manuel olarak uyandırın.
- Bir görev askıya alındıktan sonra başka bir görev tarafından uyandırıldığını gösterin.
- `std::task::Waker` ve `Context` kullanımını örnekleyin.

🔧 **Görev:** Kendi future'ınızda `Waker` ile görev uyandırmayı örnekleyin.
