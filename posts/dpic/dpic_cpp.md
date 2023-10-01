---
title: DPI-C và C++
category: dpi-c
createdAt: 2021-12-18T01:30:00.000Z
lang: 'vi-VN'
description: DPI-C và C++
meta:
  - name: description
    content: DPI-C và C++
  - name: keywords
    content: dpi-c,c++

prev: false
next: false
---

# DPI-C và C++

Ví vụ về sử dụng DPI-C để gọi một hàm C++ bên ngoài từ một module System Verilog.

test.sv

```
module main;
    // khai báo một hàm c_main trong DPI-C 
    import "DPI-C" function void c_main(int argc, input string argv[]);
    initial begin
      string argv_str[3] = {"1","2","3"};
      c_main(3, argv_str);
    end
endmodule

```

dpi_exmpale.cpp
```
#include <svdpi.h>
#include <iostream>

// định nghĩa của hàm c_main
extern "C" void c_main(int argc, svOpenArrayHandle argv) {
    const char** argv_ptr = static_cast<const char**>(svGetArrayPtr(argv));
    
    std::cout << "Number of arguments: " << argc << std::endl;

    for (int i = 0; i < argc; ++i) {
        std::cout << "Argument " << i << ": " << argv_ptr[i] << std::endl;
    }
}
```
Hai tham số: argc và argv
* argc (argument count): Đây là số lượng tham số được truyền vào hàm.
* argv (argument vector): Đây là một mảng chứa các con trỏ chuỗi (C-strings) đến các tham số cụ thể truyền vào chương trình từ dòng lệnh. Các tham số này được lưu trữ dưới dạng chuỗi.

Kết quả:

```
Number of arguments: 3
Argument 0: 1
Argument 1: 2
Argument 2: 3
```


