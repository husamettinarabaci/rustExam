## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Fonksiyon parametrelerinde tuple parçalara ayırma  
#### ✅ Cevap 168: Fonksiyon parametrelerinde tuple parçalara ayırma

Bu örnekte, bir tuple'ın doğrudan fonksiyon parametre listesinde nasıl parçalanacağı gösterilmektedir. Bu sayede tuple'ın elemanlarına fonksiyon içinde isimleriyle erişebilirsiniz.

```rust
fn koordinat_yazdir((x, y): (i32, i32)) {
    println!("x: {}, y: {}", x, y);
}

fn main() {
    let nokta = (10, 20);
    koordinat_yazdir(nokta);
}
```
