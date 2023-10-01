---
title: Thành phần cơ bản trong SystemC
category: systemc
createdAt: 2023-8-12
lang: 'vi-VN'
description: Thành phần cơ bản trong SystemC
meta:
  - name: description
    content: Thành phần cơ bản trong SystemC
  - name: keywords
    content: systemc

prev: false
next: false
---

## Tổng quan về thành phần trong SystemC

## Modules và hỉerachy.
Chia nhỏ các thành phần hệ thống giúp giảm độ phức tạp. Mỗi cấp của hệ thống được biểu hiện bởi một khối (block). 
Một thành phần của thiết kế được đóng gói như “modules”. Modules là một class được kế thừa từ sc_module (base class).
	Modules có thể chứa đựng nhiều sub-module, processes, channel và ports.
## SystemC threads và method.
sc_method và sc_thread và hai đơn vị thực thi cơ bản. Chí có thể được gọi thông qua simulation kernel.
Vì vậy user không thể gọi trược tiếp mà chỉ có thể gián tiếp thông qua events, sensitivity, and notification.
### sc_method:
 * Một thành phần của sc_module.
 * Xem như một function của C++.
 * Có thể được gọi nhiều lần trong suốt quá trình mô phỏng. 
 * Không thể suspend.
 * Không có input argument và không có giá trị trả về. 
 * Chỉ được gọi bởi simulation kernel. 
### sc_thread:
 * Một thành phần của sc_module.
 * Chỉ được goi một lần trong suốt quá trình mô phỏng. 
 * Có thể suspend và có khả năng cho phép thời gian mô phỏng trôi qua. 
 * sc_thread gần giống như một thread trong software. 
## Events, sensitivity và notification
### Event
 * Class sc_event và sc_event_queue
 * Được kích hoạt thông qua hàm notify
 * sc_method hoặc sc_thread sẽ được gọi khi chúng sensitive với một event mà event đó được kích hoạt. 
### Sensitivity
 * Static sensitivity: bằng cách gọi sensitive command trong một sc_method hoặc sc_thread tại thời điểm elaboration.
 * Dynamic sensitivity: được gọi on the fly. 
 * sc_method sử dụng next_trigger(arg) command
 * sc_thread sử dụng wait(arg) command.
 * sc_thread và sc_method đề có thể chuyển đổi static và dynamic sensitivity trong suốt thời gian mô phỏng.
### SystemC data types.
SystemC được xây dựng trên nền tảng C++. Mọi kiểu dử liệu C++ đều khả dụng trên SystemC (bool, int, long …) 
Tham khảo thêm tại:  <https://www.geeksforgeeks.org/c-data-types/>
Ngoài ra SystemC hổ trợ thêm kiểu data types như:
 * `sc_fixed<T>, sc_int<T>` hỗ trợ tính toán phức tạp DSP.
 * `sc_logic, sc_lv<T>` hỗ trợ  mô hình hóa phần cứng với 4-state logic (0,1,x,z)
### Ports, Interfaces, và channels.
Các module có thể kết nối với nhau thông qua channels và ports.
SystemC sử dụng cấu trúc `sc_port<T>, sc_export<T>` , base class sc_interface, và sc_channel để thực hiện quá trình kết nối.
Ngoài ra SystemC cung cấp các tiêu chuẩn như:
 * Dồng bộ hóa: `sc_mutex, sc_semaphore`
 * Communication channels: `sc_fifo<T>, sc_signal<T>`
Các interface tương ứng: `sc_mutex_if, sc_semaphore_if, sc_fifo_in_if<T>, sc_fifo_out_if<T>, sc_signal_in_if<T>, và sc_signal_inout_if<T>`
## Tổng hợp.

![image_1](/img/systemc/2_components_images/image_1.png)

Qua việc sơ lược được các thành phần có trong SystemC. Hi vọng các bạn có thể hình dung được phần nào về ngôn ngữ này.