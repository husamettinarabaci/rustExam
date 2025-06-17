## 📘 Bölüm: Enumlar, Varyantlar ve Cebirsel Veri Tipleri
### 🔹 Kategori: Durum ve Geçiş Modelleme
#### ✅ Cevap 302: Enum ile durum ve geçişleri modelleme

Bu soruda, bir sürecin farklı aşamalarını temsil eden bir enum tanımlanır. Enum, sürecin durumunu modellemek için kullanılır ve her durumda farklı bir mesaj yazdırılır. Rust'ta enumlar, durum makineleri ve geçişler için idealdir.

```rust
// Süreç durumlarını modelleyen bir enum
enum ProcessState {
    Started,
    InProgress(u8),
    Completed,
    Error(String),
}

fn main() {
    let mut state = ProcessState::Started;

    // Durum güncellemeleri ve mesajlar
    match &state {
        ProcessState::Started => println!("Süreç başlatıldı."),
        _ => {}
    }

    state = ProcessState::InProgress(42);
    match &state {
        ProcessState::InProgress(percent) => println!("Devam ediyor: %{}", percent),
        _ => {}
    }

    state = ProcessState::Completed;
    match &state {
        ProcessState::Completed => println!("Süreç tamamlandı!"),
        _ => {}
    }

    state = ProcessState::Error(String::from("Bir hata oluştu."));
    match &state {
        ProcessState::Error(msg) => println!("Hata: {}", msg),
        _ => {}
    }
}
```
