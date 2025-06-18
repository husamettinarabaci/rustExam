## 📘 Bölüm: Trait Nesneleri ve VTable Mekanikleri
### 🔹 Kategori: Birden Fazla Trait Bound ile `dyn Trait` Kullanımı
#### ❓ Soru 734: Birden fazla trait bound ile `dyn Trait` kullanımı

Bir trait nesnesini (`dyn Trait`) birden fazla trait bound ile nasıl kullanabileceğinizi gösteren bir Rust örneği yazın.

- İki trait ve her ikisini de uygulayan bir struct tanımlayın.
- Birden fazla trait bound içeren bir trait nesnesi kabul eden bir fonksiyon yazın (ör. `dyn TraitA + TraitB`).
- Bu fonksiyonu struct'ınız ile nasıl kullanacağınızı gösterin.

🔧 **Görev:** Rust'ta birden fazla trait bound gerektiren trait nesneleriyle nasıl çalışılacağını gösterin.
