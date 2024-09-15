(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{312:function(c,n,h){"use strict";h.r(n);var t=h(14),i=Object(t.a)({},(function(){var c=this,n=c._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[n("p",[c._v("T.B.D")]),c._v(" "),n("p",[c._v("Các kiểu dữ liệu cố định của SystemC giải quyết nhu cầu về các kiểu dữ liệu không phải số nguyên khi mô hình hóa các ứng dụng DSP mà không thể sử dụng phần cứng số thực. Các mô hình DSP ban đầu nên được phát triển bằng các kiểu dữ liệu số thực của C++ gốc do tốc độ mô phỏng cao hơn nhiều. Khi thiết kế phát triển, các kiểu dữ liệu cố định có thể cung cấp mô hình hóa tín hiệu chính xác hơn và có thể được sử dụng để tạo ra một thiết kế có thể tổng hợp được.")]),c._v(" "),n("p",[c._v("SystemC cung cấp nhiều kiểu dữ liệu cố định: có dấu và không dấu, cấu hình thời gian biên dịch (dùng mẫu) và cấu hình thời gian chạy, và các phiên bản có độ chính xác cố định và độ chính xác giới hạn (_fast).")]),c._v(" "),n("p",[c._v("Các kiểu dữ liệu cố định của SystemC được đặc trưng bởi độ dài từ (tổng số bit) và độ dài phần số nguyên của chúng. Các tham số tùy chọn cung cấp kiểm soát chế độ tràn và lượng tử hóa.")]),c._v(" "),n("p",[c._v("Không giống như các kiểu dữ liệu khác của SystemC, các kiểu dữ liệu cố định có thể được cấu hình tại thời gian biên dịch, sử dụng các tham số mẫu hoặc tại thời gian chạy sử dụng các tham số khởi tạo. Bất kể cách một đối tượng dữ liệu cố định được tạo ra như thế nào, nó không thể bị thay đổi sau đó trong quá trình thực thi chương trình.")]),c._v(" "),n("p",[c._v("| sc_fixed<WL,IWL[,QUANT[,OVFLW[,NBITS]> NAME;\n| sc_ufixed<WL,IWL[,QUANT[,OVFLW[,NBITS]> NAME;\n| sc_fixed_fast<WL,IWL[,QUANT[,OVFLW[,NBITS]> NAME;\n| sc_ufixed_fast<WL,IWL[,QUANT[,OVFLW[,NBITS]> NAME;\n| sc_fix NAME(WL,IWL[,QUANT[,OVFLW[,NBITS]);\n| sc_ufix NAME(WL,IWL[,QUANT[,OVFLW[,NBITS]);\n| sc_fix_fast NAME(WL,IWL[,QUANT[,OVFLW[,NBITS]);\n| sc_ufix_fast NAME(WL,IWL[,QUANT[,OVFLW[,NBITS]);")]),c._v(" "),n("p",[c._v("| // to enable fixed-point data types\n| #define SC_INCLUDE_FX\n| #include "),n("systemc",[c._v("\n| // fixed-point data types are now enabled\n| sc_fixed<5,3> compass // 5-bit fixed-point word\nví dụ về fixed-point")])],1),c._v(" "),n("p",[c._v("** Do chi phí thời gian biên dịch, các kiểu dữ liệu cố định bị loại bỏ khỏi tệp bao gồm mặc định của SystemC. Để kích hoạt các kiểu dữ liệu cố định, SC_INCLUDE_FX phải được định nghĩa trước khi bao gồm tệp tiêu đề SystemC.")]),c._v(" "),n("p",[c._v("Các kiểu dữ liệu cố định có một số điểm dễ nhớ.")]),c._v(" "),n("ol",[n("li",[n("p",[c._v("Thứ nhất, các kiểu dữ liệu kết thúc bằng fast nhanh hơn các kiểu khác, vì độ chính xác của chúng bị giới hạn ở 53 bit nội bộ; các kiểu fast được triển khai bằng C++ double1.")])]),c._v(" "),n("li",[n("p",[c._v("Thứ hai, tiền tố sc_ufix chỉ ra không dấu giống như uint chỉ ra số nguyên không dấu.")])]),c._v(" "),n("li",[n("p",[c._v("Thứ ba, hậu tố quá khứ ed của fix chỉ ra một kiểu dữ liệu mẫu phải có các tham số tĩnh được định nghĩa bằng các hằng số thời gian biên dịch.")])])]),c._v(" "),n("p",[c._v("Hãy nhớ rằng fixed là thì quá khứ (tức là đã được cố định), và nó không thể thay đổi sau khi biên dịch. Tại thời gian chạy, bạn có thể tạo và sử dụng các đối tượng mới của các kiểu dữ liệu không mẫu (phiên bản fix) thay đổi cấu hình khi cần thiết.")]),c._v(" "),n("p",[c._v("Mặc dù sc_fix, sc_ufix, sc_fix_fast và sc_ufix_fast có thể cấu hình thời gian chạy, một khi một đối tượng của các kiểu này được tạo ra, cấu hình của nó không thể thay đổi.")]),c._v(" "),n("p",[c._v("Các tham số cần thiết cho các kiểu dữ liệu cố định là độ dài từ (WL), độ dài từ số nguyên (IWL), chế độ lượng tử hóa (QUANT), chế độ tràn (OVFLW) và số bit bão hòa (NBITS). Độ dài từ (WL) và độ dài từ số nguyên (IWL) không có giá trị mặc định và phải được thiết lập.")]),c._v(" "),n("p",[c._v("Độ dài từ xác định tổng số bit đại diện cho kiểu dữ liệu. Độ dài từ số nguyên chỉ ra vị trí đặt điểm nhị phân và có thể là dương hoặc âm. Hình dưới đây cho thấy cách hoạt động này.")]),c._v(" "),n("p",[c._v('| const sc_ufixed<19,3> PI("3.141592654");\n| sc_fix oil_temp(20,17,SC_RND_INF,SC_SAT);\n| sc_fixed_fast<7,1> valve_opening;')]),c._v(" "),n("p",[c._v("Chỉ có độ dài từ và độ dài từ nguyên là các tham số bắt buộc. Nếu không được chỉ định, tràn mặc định là SC_WRAP, lượng tử hóa mặc định là SC_TRN, và các bit bão hòa mặc định là một.")]),c._v(" "),n("p",[c._v("Một lưu ý đặc biệt áp dụng nếu bạn dự định thiết lập các mảng của các kiểu _fix. Vì cần có một hàm tạo, nhưng cú pháp C++ không cho phép các đối số cho tình huống này, nên cần sử dụng loại sc_fxtype_context để thiết lập các giá trị mặc định.")]),c._v(" "),n("h2",{attrs:{id:"systemc-home"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#systemc-home"}},[c._v("#")]),c._v(" "),n("RouterLink",{attrs:{to:"/danh-muc/systemc.html"}},[c._v("SystemC Home")])],1)])}),[],!1,null,null,null);n.default=i.exports}}]);