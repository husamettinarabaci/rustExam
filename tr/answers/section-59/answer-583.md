## 📘 Bölüm: Frontend Framework Derinlemesine  
### 🔹 Kategori: Sanal DOM ve Uzlaştırma Algoritmaları  
#### ✅ Cevap 583: Sanal DOM ve uzlaştırma algoritmaları

Sanal DOM, gerçek DOM'un hafif bir kopyasıdır ve UI değişiklikleri önce burada hesaplanır. Uzlaştırma algoritması, eski ve yeni sanal DOM'u karşılaştırarak sadece değişen kısımları gerçek DOM'a uygular. Bu, performansı artırır.

```rust
// Yew'de bir state değişikliği örneği:
let value = use_state(|| 0);
let onclick = {
    let value = value.clone();
    Callback::from(move |_| value.set(*value + 1))
};
// Butona tıklanınca sadece ilgili <p> güncellenir.
```
