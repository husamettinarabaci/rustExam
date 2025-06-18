## 📘 Bölüm: Trait Nesneleri ve VTable Mekanikleri
### 🔹 Kategori: Derleyicinin VTable Üretimini ve Optimizasyonunu Keşfetme
#### ❓ Soru 740: Derleyicinin vtable üretimini ve optimizasyonunu keşfetme

Rust derleyicisinin trait nesneleri için vtable'ları nasıl ürettiğini ve ne gibi optimizasyonlar yaptığını açıklayın. Bir kod örneği verin ve vtable düzenini nasıl inceleyebileceğinizi tartışın.

- Bir trait ve onu uygulayan bir struct yazın.
- Kodda trait nesnesi kullanın.
- Vtable ile ilgili bilgileri nasıl görebileceğinizi açıklayın (ör. `cargo rustc -- --emit=llvm-ir` veya `cargo asm`).

🔧 **Görev:** Rust'ın trait nesneleri için vtable üretimini ve optimizasyonunu nasıl yaptığını açıklayın ve gösterin.
