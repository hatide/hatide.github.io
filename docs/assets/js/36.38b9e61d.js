(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{315:function(t,n,s){"use strict";s.r(n);var e=s(14),a=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"tong-quan-ve-thanh-phan-trong-systemc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tong-quan-ve-thanh-phan-trong-systemc"}},[t._v("#")]),t._v(" Tổng quan về thành phần trong SystemC")]),t._v(" "),n("h2",{attrs:{id:"modules-va-hierachy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modules-va-hierachy"}},[t._v("#")]),t._v(" Modules và hỉerachy.")]),t._v(" "),n("p",[t._v("Chia nhỏ các thành phần hệ thống giúp giảm độ phức tạp. Mỗi cấp của hệ thống được biểu hiện bởi một khối (block).\nMột thành phần của thiết kế được đóng gói như “modules”. Modules là một class được kế thừa từ sc_module (base class).\nModules có thể chứa đựng nhiều sub-module, processes, channel và ports.")]),t._v(" "),n("h2",{attrs:{id:"systemc-threads-va-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#systemc-threads-va-method"}},[t._v("#")]),t._v(" SystemC threads và method.")]),t._v(" "),n("p",[t._v("sc_method và sc_thread và hai đơn vị thực thi cơ bản. Chí có thể được gọi thông qua simulation kernel.\nVì vậy user không thể gọi trược tiếp mà chỉ có thể gián tiếp thông qua events, sensitivity, and notification.")]),t._v(" "),n("h3",{attrs:{id:"sc-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sc-method"}},[t._v("#")]),t._v(" sc_method:")]),t._v(" "),n("ul",[n("li",[t._v("Một thành phần của sc_module.")]),t._v(" "),n("li",[t._v("Xem như một function của C++.")]),t._v(" "),n("li",[t._v("Có thể được gọi nhiều lần trong suốt quá trình mô phỏng.")]),t._v(" "),n("li",[t._v("Không thể suspend.")]),t._v(" "),n("li",[t._v("Không có input argument và không có giá trị trả về.")]),t._v(" "),n("li",[t._v("Chỉ được gọi bởi simulation kernel.")])]),t._v(" "),n("h3",{attrs:{id:"sc-thread"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sc-thread"}},[t._v("#")]),t._v(" sc_thread:")]),t._v(" "),n("ul",[n("li",[t._v("Một thành phần của sc_module.")]),t._v(" "),n("li",[t._v("Chỉ được goi một lần trong suốt quá trình mô phỏng.")]),t._v(" "),n("li",[t._v("Có thể suspend và có khả năng cho phép thời gian mô phỏng trôi qua.")]),t._v(" "),n("li",[t._v("sc_thread gần giống như một thread trong software.")])]),t._v(" "),n("h2",{attrs:{id:"events-sensitivity-va-notification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events-sensitivity-va-notification"}},[t._v("#")]),t._v(" Events, sensitivity và notification")]),t._v(" "),n("h3",{attrs:{id:"event"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event"}},[t._v("#")]),t._v(" Event")]),t._v(" "),n("ul",[n("li",[t._v("Class sc_event và sc_event_queue")]),t._v(" "),n("li",[t._v("Được kích hoạt thông qua hàm notify")]),t._v(" "),n("li",[t._v("sc_method hoặc sc_thread sẽ được gọi khi chúng sensitive với một event mà event đó được kích hoạt.")])]),t._v(" "),n("h3",{attrs:{id:"sensitivity"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sensitivity"}},[t._v("#")]),t._v(" Sensitivity")]),t._v(" "),n("ul",[n("li",[t._v("Static sensitivity: bằng cách gọi sensitive command trong một sc_method hoặc sc_thread tại thời điểm elaboration.")]),t._v(" "),n("li",[t._v("Dynamic sensitivity: được gọi on the fly.")]),t._v(" "),n("li",[t._v("sc_method sử dụng next_trigger(arg) command")]),t._v(" "),n("li",[t._v("sc_thread sử dụng wait(arg) command.")]),t._v(" "),n("li",[t._v("sc_thread và sc_method đề có thể chuyển đổi static và dynamic sensitivity trong suốt thời gian mô phỏng.")])]),t._v(" "),n("h3",{attrs:{id:"systemc-data-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#systemc-data-types"}},[t._v("#")]),t._v(" SystemC data types.")]),t._v(" "),n("p",[t._v("SystemC được xây dựng trên nền tảng C++. Mọi kiểu dử liệu C++ đều khả dụng trên SystemC (bool, int, long …)\nTham khảo thêm tại:  "),n("a",{attrs:{href:"https://www.geeksforgeeks.org/c-data-types/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.geeksforgeeks.org/c-data-types/"),n("OutboundLink")],1),t._v("\nNgoài ra SystemC hổ trợ thêm kiểu data types như:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("sc_fixed<T>, sc_int<T>")]),t._v(" hỗ trợ tính toán phức tạp DSP.")]),t._v(" "),n("li",[n("code",[t._v("sc_logic, sc_lv<T>")]),t._v(" hỗ trợ  mô hình hóa phần cứng với 4-state logic (0,1,x,z)")])]),t._v(" "),n("h3",{attrs:{id:"ports-interfaces-va-channels"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ports-interfaces-va-channels"}},[t._v("#")]),t._v(" Ports, Interfaces, và channels.")]),t._v(" "),n("p",[t._v("Các module có thể kết nối với nhau thông qua channels và ports.\nSystemC sử dụng cấu trúc "),n("code",[t._v("sc_port<T>, sc_export<T>")]),t._v(" , base class sc_interface, và sc_channel để thực hiện quá trình kết nối.\nNgoài ra SystemC cung cấp các tiêu chuẩn như:")]),t._v(" "),n("ul",[n("li",[t._v("Dồng bộ hóa: "),n("code",[t._v("sc_mutex, sc_semaphore")])]),t._v(" "),n("li",[t._v("Communication channels: "),n("code",[t._v("sc_fifo<T>, sc_signal<T>")]),t._v("\nCác interface tương ứng: "),n("code",[t._v("sc_mutex_if, sc_semaphore_if, sc_fifo_in_if<T>, sc_fifo_out_if<T>, sc_signal_in_if<T>, và sc_signal_inout_if<T>")])])]),t._v(" "),n("h2",{attrs:{id:"tong-hop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tong-hop"}},[t._v("#")]),t._v(" Tổng hợp.")]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/systemc/2_components_images/image_1.png",alt:"image_1"}})]),t._v(" "),n("p",[t._v("Qua việc sơ lược được các thành phần có trong SystemC. Hi vọng các bạn có thể hình dung được phần nào về ngôn ngữ này.")])])}),[],!1,null,null,null);n.default=a.exports}}]);