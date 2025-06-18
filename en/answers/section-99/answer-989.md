## 📘 Section: Language Interoperability  
### 🔹 Category: Build Automation for Multi-language Projects  
#### ✅ Answer 989: Automating build processes for multi-language projects

For projects containing Rust and C/C++, you can use a `Makefile` for build automation.

Example Makefile:
```
all: librustlib.a main

librustlib.a:
	cargo build --release
	cp target/release/librustlib.a .

main: main.c librustlib.a
	gcc main.c -L. -lrustlib -o main
```

This Makefile first builds the Rust library, then links the C file with the Rust library.
