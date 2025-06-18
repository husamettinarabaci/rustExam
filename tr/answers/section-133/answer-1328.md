## 📘 Bölüm: Derleme Zamanı Programlama Desenleri  
### 🔹 Kategori: Derleme Zamanında Durum Makineleri Implementasyonu  
#### ✅ Cevap 1328: Derleme zamanında durum makineleri implementasyonu

Tiplerle durum makinesi modellemek, yalnızca geçerli geçişlere izin verir. Aşağıda, bir kapı için durum makinesi örneği verilmiştir.

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
    // door.close(); // Derleme zamanı hatası: Kapı zaten kapalı
}
```
Bu örnekte, yalnızca geçerli geçişler derlenebilir.
