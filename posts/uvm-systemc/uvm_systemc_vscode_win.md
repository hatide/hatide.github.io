---
title: Cách tạo môi trường UVM-SystemC trên Vscode-win
category: uvm-systemc
createdAt: 2023-8-12
lang: 'vi-VN'
description: Môi trường Uvm-systemc
meta:
  - name: description
    content: Tạo môi trường UVM-SystemC
  - name: keywords
    content: uvm-systemc

prev: false
next: false
---
Tham khảo bài viết <> để thiết lập các yêu cầu về ngôn ngữ systemc trước nhé. 
Sau khi hoàn thành. 

1. Download thư viện UVM-SYSTEMC tại <https://www.accellera.org/activities/working-groups/systemc-verification>
2. Mở WSL terminal -> `cd <thư mục uvm-systemc>`
3. Tạo thư mục object
        > mkdir objdir
        > cd objdir
        > setenv CXX g++ hoặc export CXX=g++
        > ../configure --with-systemc=/path/to/your/systemc
Xuất hiện các thông tin cấu hình như sau là thành công:

------------------------------------------------------------------------------
Configuration summary of UVM-SystemC 1.0-beta5 for x86_64-unknown-linux-gnu
------------------------------------------------------------------------------

 Directory setup (based on SystemC layout):
   Installation prefix: /mnt/d/SystemC/uvm-systemc-1.0-beta5
   Header files:        /mnt/d/SystemC/uvm-systemc-1.0-beta5/include
   Libraries:           /mnt/d/SystemC/uvm-systemc-1.0-beta5/lib
   Documentation:       /mnt/d/SystemC/uvm-systemc-1.0-beta5/docs
   Examples:            /mnt/d/SystemC/uvm-systemc-1.0-beta5/examples

 Target architecture:   linux64

 Build settings:
   Compiler (flags):    g++

   Preprocessor flags:
   SystemC CFLAGS:      -I/usr/local/systemc-2.3.3/include
   SystemC LIBS:        -L/usr/local/systemc-2.3.3/lib-linux64 -lsystemc
   Additional LIBS:
   Enable compiler optimizations:   yes
   Include debug symbols:           no
   Generate instrumentation calls:  no
   Regular expression library:      POSIX
------------------------------------------------------------------------------

4. Tiến hành compile với lệnh `make`



Tham khảo: 

