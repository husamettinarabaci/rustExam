## 📘 Bölüm: Enumlar ve Veri Modelleme  
### 🔹 Kategori: Durum ve geçişleri modellemek için enumlar kullanma  
#### ✅ Cevap 423: Durum ve geçişleri modellemek için enumlar kullanma

Enumlar, bir nesnenin veya sistemin durumlarını ve bu durumlar arasındaki geçişleri modellemek için idealdir. Her durum bir enum varyantı olarak tanımlanabilir.

```rust
enum State {
    Start,
    Running,
    Paused,
    Stopped,
}

fn next_state(state: State) -> State {
    match state {
        State::Start => State::Running,
        State::Running => State::Paused,
        State::Paused => State::Stopped,
        State::Stopped => State::Stopped,
    }
}
```
