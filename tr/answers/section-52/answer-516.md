## 📘 Bölüm: Gömülü Rust Temelleri  
### 🔹 Kategori: Başlangıç ve Öznitelikler  
#### ✅ Cevap 516: `#[entry]`, `#[interrupt]` ve başlangıç kodu

- `#[entry]` gömülü programlar için ana giriş noktasını belirtir (`main` yerine).
- `#[interrupt]` bir kesme fonksiyonunu işaretler.
- Başlangıç kodu (`cortex-m-rt` tarafından sağlanır) vektör tablosunu ve reset handler'ı kurar, belleği başlatır ve giriş noktasını çağırır.

Bu öznitelikler ve başlangıç kodu, gömülü programların doğru çalışması için gereklidir.
