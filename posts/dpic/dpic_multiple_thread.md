---
title: Multiple thread từ systemverilog đến C/C++
category: dpi-c
createdAt: 2021-12-18T01:30:00.000Z
lang: 'vi-VN'
description: Multiple thread từ systemverilog đến C/C++
meta:
  - name: description
    content: Multiple thread từ systemverilog đến C/C++
  - name: keywords
    content: dpi-c

prev: false
next: false
---

System verilog hổ trợ tạo ra nhiều tiến trình chạy song song. 
Tham khảo: <https://www.chipverify.com/systemverilog/systemverilog-threads>

```
module main;
    import "DPI-C" task c_main(int argc, input string argv[]);
  
    initial begin
      for (int i = 0; i< 3;i++) begin
        fork
          automatic int index = i;
          main(index);
        join_none;
      end

      wait fork;
    end
    task main(int i);
       automatic string value [2];
       $sformat(value[0], "%0d", i);
       #i;
       $sformat(value[1], "%0d", $time);
       c_main(2,value);
    endtask;
endmodule
```


```
#include <svdpi.h>
#include <iostream>
#include <stdlib.h>

extern "C" void c_main(int argc, svOpenArrayHandle argv) {
    const char** argv_ptr = static_cast<const char**>(svGetArrayPtr(argv));
	std::cout <<"time: " << argv_ptr[1]  << " - thread id: " << argv_ptr[0] << std::endl;
}
```

Kết quả:
```
time: 0 - thread id: 0
time: 1 - thread id: 1
time: 2 - thread id: 2
```