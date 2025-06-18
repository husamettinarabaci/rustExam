## 📘 Bölüm: Dil Arası Çalışabilirlik  
### 🔹 Kategori: Çoklu Dil Projeleri için Derleme Otomasyonu  
#### ✅ Cevap 989: Çoklu dil projeleri için derleme süreçlerini otomatikleştirme

Rust ve C/C++ içeren projelerde derleme otomasyonu için `Makefile` kullanılabilir.

Örnek Makefile:
```
all: librustlib.a main

librustlib.a:
	cargo build --release
	cp target/release/librustlib.a .

main: main.c librustlib.a
	gcc main.c -L. -lrustlib -o main
```

Bu Makefile, önce Rust kütüphanesini derler, ardından C dosyasını Rust kütüphanesiyle bağlar.
