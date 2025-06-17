## 📘 Bölüm: Bevy ile Oyun Geliştirme  
### 🔹 Kategori: Oyun döngüsü ve zaman yönetimi  
#### ✅ Cevap 530: Sabit zaman adımı ile basit bir oyun döngüsü kurma

Bevy'de sabit zaman adımı ile çalışan bir oyun döngüsü için `FixedTime` veya `run_criteria` kullanılabilir. Aşağıda, her 0.5 saniyede bir sayaç artıran bir sistem örneği verilmiştir.

```rust
use bevy::prelude::*;

struct Counter(u32);

fn increment_counter(mut counter: ResMut<Counter>) {
    counter.0 += 1;
    println!("Counter: {}", counter.0);
}

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .insert_resource(Counter(0))
        .add_system(
            increment_counter
                .run_if(time::in_fixed_steps(Duration::from_secs_f32(0.5)))
        )
        .run();
}
```
