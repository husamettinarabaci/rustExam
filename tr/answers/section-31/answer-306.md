## 📘 Bölüm: Enumlar, Varyantlar ve Cebirsel Veri Tipleri  
### 🔹 Kategori: Durum Makineleri ve Geçişler için Enumlar  
#### ✅ Cevap 306: Durum makineleri ve geçişler için enum kullanımı

Bu örnekte, bir trafik ışığı durum makinesi bir enum ile modellenmiştir. Her varyant bir durumu temsil eder ve `next` metodu ile bir sonraki duruma geçiş yapılır. `main` fonksiyonunda, durumlar sırayla ekrana yazdırılır.

```rust
enum TrafficLight {
    Red,
    Yellow,
    Green,
}

impl TrafficLight {
    fn next(&self) -> TrafficLight {
        match self {
            TrafficLight::Red => TrafficLight::Green,
            TrafficLight::Green => TrafficLight::Yellow,
            TrafficLight::Yellow => TrafficLight::Red,
        }
    }
}

fn main() {
    let mut light = TrafficLight::Red;
    for _ in 0..5 {
        println!("Durum: {:?}", light);
        light = light.next();
    }
}
```
