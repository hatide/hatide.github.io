---
title: Thiết lập môi trường trên vscode
category: systemc
createdAt: 2023-8-12
lang: 'vi-VN'
description: Thiết lập môi trường trên vscode
meta:
  - name: description
    content: Thiết lập môi trường trên vscode
  - name: keywords
    content: systemc

prev: false
next: false
---

# Thiết lập môi trường trên vscode
Môi trường chạy SystemC được hổ trợ trên hầu hết các EDA phổ biến như ModelSim, Vcs, QuestaSim.
Về mặt kiến trúc như đã đề cập ở phần Giới thiệu, căn bản chúng ta có thể chạy SystemC trên bất kỳ 
Development Tool nào hổ trợ C++.
Mình xin chia sẽ môi trường trên WSL và Vscode như sau:

## Yêu cầu: 
* Hệ điều hành: win_10 hoặc win_11 
* Cài đặt WSL (Tham khảo: <https://windowsloop.com/enable-wsl-windows-10-home/>)
* Cài đặt Vscode (Tham khảo: <https://code.visualstudio.com/> )
* Tải về SystemC library (Tham khảo: <https://www.accellera.org/images/downloads/standards/systemc/systemc-2.3.3.zip>)

## Compile và cài đặt SystemC library trên WSL:
1.	Cài đặt  C++ compiler và Gdb cho WSL.
 Tham khảo: Bước 4,5,6 <https://code.visualstudio.com/docs/cpp/config-wsl>
 * Tại wsl terminal, cài đặt compiler:
```
    sudo apt-get update
    sudo apt-get install build-essential gdb
    whereis g++
    whereis gdb
```

2.	Giải nén SystemC library. Truy cập đến SystemC library bằng wsl. Tham khảo cài đặt tại file INSTALL hoặc có thể thực hiện các bước sau:
  ![Picture1](/img/systemc/3_moi_truong_images/Picture1.jpg)
3.	Tạo thư mục objdir: mkdir objdir
4.	Di chuyển đến objdir: cd objdir
5.	Chọn g++ compiter: ``export CXX=g++``
6.	Tiến hành thiết lập cài đặt bằng lệnh: ```../configure --prefix=/usr/local/systemc-2.3.3 --enable-debug```
 ![Picture2](/img/systemc/3_moi_truong_images/Picture2.png)
7.	Tiến hành compile bằng lệnh: make
 ![Picture3](/img/systemc/3_moi_truong_images/Picture3.png)
8.	Cài đặt : make install 
 ![Picture4](/img/systemc/3_moi_truong_images/Picture4.png)

## Chạy example trên vscode:
1.	Cài đặt C/C++ extension  <https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools> 
2.	Tải hello example code tại: <https://github.com/HaTiDe/SystemC_Example> 
3.	Mở vscode -> File -> Open Folder -> chọn hello . Tiến hành kết nối vscode với WSL
 ![Picture5](/img/systemc/3_moi_truong_images/Picture5.png)
4.	Compile và chạy chương trình mẫu: 

  kết quả: `Hello World`
 ![Picture6](/img/systemc/3_moi_truong_images/Picture6.png)