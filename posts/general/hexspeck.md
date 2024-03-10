---
title: Giới thiệu về Hexspeak
category: general
createdAt: 2024-03-10T01:30:00.000Z
lang: 'vi-VN'
description: Giới thiệu về Hexspeak
meta:
  - name: Giới thiệu về Hexspeak
    content: Giới thiệu về Hexspeak
  - name: keywords
    content: general

prev: false
next: false
---
# Hexspeak

Có thể trong lúc đọc code vô tình bạn đã thấy 1 vài giá trị biến như sau:
0xDEAD, 0xCAFEBABE, 0xCEFAEDFE, 0xDEAD2BAD ...
Nó được gọi là **Hexspeak** . 

**Hexspeak** là việc sử dụng hệ thập lục phân (6 chữ số từ 0 đến 9 và A đến F) 
để tạo ra mã định danh rõ ràng và duy nhất. 

Vì hệ thập lục phân chỉ có các chữ cái ABCDEF nên các từ khác có thể được tạo ra bằng các số như sau:
+ chữ số " 0" có thể biểu thị chữ cái "O".
+ " 1" có thể biểu thị các chữ cái "I" hoặc "L". 
+ " 5" có thể đại diện cho "S". 
+ " 7" đại diện cho "T". 
+ " 12" đại diện cho "R".
+ " 6" hoặc " 9" có thể đại diện cho "G" hoặc "g"

# Ví dụ:

`0xDEADC0DE` 	(" mã chết ") được sử dụng làm điểm đánh dấu trong chương trình cơ sở OpenWrt để biểu thị sự bắt đầu của hệ thống tệp jffs2 sẽ được tạo ở cuối chương trình cơ sở tĩnh.

`0xDEAD2BAD` ("chết quá tệ") được sử dụng để đánh dấu các vùng bộ nhớ được phân bổ chưa được khởi tạo trên hệ thống Sequent Dynix/ptx.

`0xDEADBABE` ("Em bé chết") được IBM Jikes RVM sử dụng để kiểm tra độ chính xác của ngăn xếp của luồng chính.

`0xDEADD00D	` ("anh chàng chết tiệt") được Android sử dụng trong máy ảo Dalvik để biểu thị việc hủy bỏ VM.

`0xABADBABE` ("a bad babe") đã/được Windows 7 của Microsoft sử dụng để kích hoạt điểm dừng của trình gỡ lỗi, có thể là khi gắn thiết bị USB.

Tham khảo: 
+ [Hexspeak_wikipedia](https://en.wikipedia.org/wiki/Hexspeak)