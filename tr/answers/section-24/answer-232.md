## 📘 Bölüm: Kapanışlar ve İteratör Temelleri  
### 🔹 Kategori: Kapanış Parametresi Geçme  
#### ✅ Cevap 232: Fonksiyona kapanış parametresi geçme

Kapanışlar, generics ve `Fn` trait'leriyle parametre olarak geçirilebilir.

```rust
fn uygula<F: Fn(i32) -> i32>(f: F, x: i32) -> i32 {
    f(x)
}

let iki_kat = |n| n * 2;
let sonuc = uygula(iki_kat, 5);
```
