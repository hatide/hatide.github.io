(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{301:function(t,n,a){"use strict";a.r(n);var i=a(14),e=Object(i.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("hr"),t._v(" "),n("p",[t._v("title: SystemC_Simulation_Kernel\ncategory: systemc\ncreatedAt: 2024"),n("em",[t._v("3")]),t._v("12\nlang: 'vi*VN'\ndescription: SystemC_Simulation_Kernel\nmeta:")]),t._v(" "),n("ul",[n("li",[t._v("name: description\ncontent: SystemC_Simulation_Kernel")]),t._v(" "),n("li",[t._v("name: keywords\ncontent: SystemC_Simulation_Kernel")])]),t._v(" "),n("p",[t._v("prev: false\nnext: false")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("Trình mô phỏng SystemC có 3 giai đoạn (phase) hoạt động chính: elaboration (xây dựng), execution (thực thi) và cleanup.")]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/systemc/2_components_images/2_1_systemc_simulation_kernal.png",alt:"image_1"}})]),t._v(" "),n("p",[t._v("Hình: SystemC simulation kernel tham khảo "),n("a",{attrs:{href:"https://raw.githubusercontent.com/SingularityKChen/PicUpload/master/img/20200612215332.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://raw.githubusercontent.com/SingularityKChen/PicUpload/master/img/20200612215332.png"),n("OutboundLink")],1)]),t._v(" "),n("h4",{attrs:{id:"cac-phase-se-dien-ra-theo-trinh-tu-sau"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cac-phase-se-dien-ra-theo-trinh-tu-sau"}},[t._v("#")]),t._v(" Các phase sẽ diễn ra theo trình tự sau:")]),t._v(" "),n("p",[t._v("a. Elaboration — gọi hàm Construction của các module")]),t._v(" "),n("p",[t._v("b. Elaboration — Callbacks đến hàm before_end_of_elaboration")]),t._v(" "),n("p",[t._v("c. Elaboration — Callbacks đến hàm end_of_elaboration")]),t._v(" "),n("p",[t._v("d. Simulation — Callbacks đến hàm start_of_simulation")]),t._v(" "),n("p",[t._v("e. Simulation — Initialization phase")]),t._v(" "),n("p",[t._v("f. Simulation — Evaluation, update, delta notification, and timed notification phases (repeated)")]),t._v(" "),n("p",[t._v("g. Simulation — Callbacks đến hàm end_of_simulation")]),t._v(" "),n("p",[t._v("h. Simulation — gọi hàm Destruction của các module")]),t._v(" "),n("p",[t._v("Chi tiết các phase của trình mô phỏng.")]),t._v(" "),n("h4",{attrs:{id:"_1-elaboration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-elaboration"}},[t._v("#")]),t._v(" 1. Elaboration")]),t._v(" "),n("p",[t._v("Các câu lệnh thực thi trước khi chương trình gọi hàm sc_start() được gọi là Elaboration phase (Gia đoạn xây dựng).\nMục đích chính của giai đoạn này là tạo ra các cấu trúc dữ liệu nội bộ để hỗ trợ ngữ nghĩa của mô phỏng.\nTrong giai đoạn elaboration, các phần của cấu trúc module (module, port, primitive channel và process) được tạo ra, và các port và export được liên kết với các channel.\nĐây được xem là giai đoạn chuẩn bị cho Execution phase.")]),t._v(" "),n("h4",{attrs:{id:"_2-execution"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-execution"}},[t._v("#")]),t._v(" 2. Execution")]),t._v(" "),n("p",[t._v("2.1 Initialization")]),t._v(" "),n("p",[t._v("Tạo quy trình (process) và gán giá trị ban đầu cho các biến (value) và tín hiệu (signal).")]),t._v(" "),n("p",[t._v("2.2 Evaluate")]),t._v(" "),n("ul",[n("li",[t._v("Thực hiện việc chạy tuần tự các quy trình (process).")]),t._v(" "),n("li",[t._v("Trình mô phỏng sẽ tạm dừng (suspends) tại câu lệnh wait() hoặc chấm dứt process khi kết thúc hàm.")])]),t._v(" "),n("p",[t._v("2.3 Update")]),t._v(" "),n("ul",[n("li",[t._v("Sau khi evaluating process, giai đoạn cập nhật (Update phase) sẽ thực thi việc cập nhật các tính hiệu (signals)\ndựa trên các process đã thực thi.")]),t._v(" "),n("li",[t._v("Nếu có process mới cần được kích hoạt, chúng sẽ được đưa vào hàng đợi queue cho việc thực thi sau này.")])]),t._v(" "),n("p",[t._v("2.4 Advance Time")]),t._v(" "),n("ul",[n("li",[t._v("Nếu không có process nào được bổ sung hoặc cần được đánh giá tại thời điểm đó (do cập nhật (Update)), trình mô phỏng sẽ chuyển sang giai đoạn tăng thời gian (Advance time).")]),t._v(" "),n("li",[t._v("Thời gian mô phỏng sẽ di chuyển đến thời điểm gần nhất với sự kiện đã lên lịch. Các tiến trình chờ đợi thời gian cụ thể đó sẽ có thể được kích hoạt chạy.")])]),t._v(" "),n("p",[t._v("2.5 Delta Notification")]),t._v(" "),n("ul",[n("li",[t._v("một process thực thi *> đánh giá Evaluate *> và cập nhật Update trong cùng thời gian mô phỏng gọi là một chu trình delta (a delta cycle).")])]),t._v(" "),n("h4",{attrs:{id:"_3-cleanup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-cleanup"}},[t._v("#")]),t._v(" 3. Cleanup")]),t._v(" "),n("ul",[n("li",[t._v("Destroy các object đã được khởi tạo.")]),t._v(" "),n("li",[t._v("Giải phóng bộ nhớ.")]),t._v(" "),n("li",[t._v("Đóng các file đã được mở ...")])]),t._v(" "),n("h2",{attrs:{id:"systemc-home"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#systemc-home"}},[t._v("#")]),t._v(" "),n("RouterLink",{attrs:{to:"/danh*muc/systemc.html"}},[t._v("SystemC Home")])],1)])}),[],!1,null,null,null);n.default=e.exports}}]);