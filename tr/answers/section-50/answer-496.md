## 📘 Bölüm: Proje Tasarımı ve Refaktörizasyon  
### 🔹 Kategori: Tip Güvenliği ve Enum Kullanımı  
#### ✅ Cevap 496: Geçersiz durumları ortadan kaldırmak için tip ve enum kullanımı

Enum ve tip güvenliği kullanarak geçersiz durumlar derleme zamanında engellenebilir. Her durum bir enum ile modellenir ve yalnızca geçerli durumlarda işlem yapılır.

```rust
enum State {
    Started,
    Stopped,
}

fn start(state: State) -> State {
    match state {
        State::Stopped => State::Started,
        State::Started => State::Started, // Zaten başladıysa değişmez
    }
}

fn main() {
    let state = State::Stopped;
    let state = start(state);
}
```
