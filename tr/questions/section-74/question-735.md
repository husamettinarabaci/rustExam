## 📘 Bölüm: Trait Nesneleri ve VTable Mekanikleri
### 🔹 Kategori: Trait Nesnelerinde Downcasting
#### ❓ Soru 735: `Any` ve `TypeId` ile trait nesnelerinde downcasting

Bir trait nesnesini `Any` trait'i ve `TypeId` kullanarak somut tipine nasıl downcast edebileceğinizi gösteren bir Rust örneği yazın.

- Bir trait ve onu uygulayan bir struct tanımlayın.
- Struct'ı trait nesnesi olarak saklayın (`Box<dyn Trait>`).
- `Any` ve `downcast_ref` veya `downcast_mut` ile orijinal tipe dönüştürmeyi deneyin.

🔧 **Görev:** Rust'ın tip sistemiyle bir trait nesnesini güvenli şekilde orijinal tipine downcast etmeyi gösterin.
