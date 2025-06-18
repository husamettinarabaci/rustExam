## 📘 Bölüm: Derleme Zamanı Programlama Desenleri  
### 🔹 Kategori: Tip Durumlarıyla Derleme Zamanı Garantiler  
#### ✅ Cevap 1322: Tip durumlarıyla derleme zamanı garantiler

Typestate deseni, bir nesnenin yalnızca belirli bir durumda belirli metotları çağırabilmesini sağlar. Bu, derleme zamanında yanlış kullanımı engeller.

```rust
struct Open;
struct Closed;

struct Door<State> {
    state: State,
}

impl Door<Closed> {
    fn open(self) -> Door<Open> {
        Door { state: Open }
    }
}

impl Door<Open> {
    fn close(self) -> Door<Closed> {
        Door { state: Closed }
    }
}

fn main() {
    let door = Door { state: Closed };
    let door = door.open();
    let door = door.close();
    // door.open().close(); // Hatalı kullanım derleme zamanı hatası verir
}
```
Bu örnekte, kapı yalnızca doğru durumda açılıp kapatılabilir.
