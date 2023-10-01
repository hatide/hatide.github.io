(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{317:function(t,e,i){"use strict";i.r(e);var r=i(14),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"thiet-lap-moi-truong-tren-vscode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thiet-lap-moi-truong-tren-vscode"}},[t._v("#")]),t._v(" Thiết lập môi trường trên vscode")]),t._v(" "),e("p",[t._v("Môi trường chạy SystemC được hổ trợ trên hầu hết các EDA phổ biến như ModelSim, Vcs, QuestaSim.\nVề mặt kiến trúc như đã đề cập ở phần Giới thiệu, căn bản chúng ta có thể chạy SystemC trên bất kỳ\nDevelopment Tool nào hổ trợ C++.\nMình xin chia sẽ môi trường trên WSL và Vscode như sau:")]),t._v(" "),e("h2",{attrs:{id:"yeu-cau"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yeu-cau"}},[t._v("#")]),t._v(" Yêu cầu:")]),t._v(" "),e("ul",[e("li",[t._v("Hệ điều hành: win_10 hoặc win_11")]),t._v(" "),e("li",[t._v("Cài đặt WSL (Tham khảo: "),e("a",{attrs:{href:"https://windowsloop.com/enable-wsl-windows-10-home/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://windowsloop.com/enable-wsl-windows-10-home/"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("li",[t._v("Cài đặt Vscode (Tham khảo: "),e("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.visualstudio.com/"),e("OutboundLink")],1),t._v(" )")]),t._v(" "),e("li",[t._v("Tải về SystemC library (Tham khảo: "),e("a",{attrs:{href:"https://www.accellera.org/images/downloads/standards/systemc/systemc-2.3.3.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.accellera.org/images/downloads/standards/systemc/systemc-2.3.3.zip"),e("OutboundLink")],1),t._v(")")])]),t._v(" "),e("h2",{attrs:{id:"compile-va-cai-đat-systemc-library-tren-wsl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile-va-cai-đat-systemc-library-tren-wsl"}},[t._v("#")]),t._v(" Compile và cài đặt SystemC library trên WSL:")]),t._v(" "),e("ol",[e("li",[t._v("Cài đặt  C++ compiler và Gdb cho WSL.\nTham khảo: Bước 4,5,6 "),e("a",{attrs:{href:"https://code.visualstudio.com/docs/cpp/config-wsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://code.visualstudio.com/docs/cpp/config-wsl"),e("OutboundLink")],1)])]),t._v(" "),e("ul",[e("li",[t._v("Tại wsl terminal, cài đặt compiler:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    sudo apt-get update\n    sudo apt-get install build-essential gdb\n    whereis g++\n    whereis gdb\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Giải nén SystemC library. Truy cập đến SystemC library bằng wsl. Tham khảo cài đặt tại file INSTALL hoặc có thể thực hiện các bước sau:\n"),e("img",{attrs:{src:"/img/systemc/3_moi_truong_images/Picture1.jpg",alt:"Picture1"}})]),t._v(" "),e("li",[t._v("Tạo thư mục objdir: mkdir objdir")]),t._v(" "),e("li",[t._v("Di chuyển đến objdir: cd objdir")]),t._v(" "),e("li",[t._v("Chọn g++ compiter: "),e("code",[t._v("export CXX=g++")])]),t._v(" "),e("li",[t._v("Tiến hành thiết lập cài đặt bằng lệnh: "),e("code",[t._v("../configure --prefix=/usr/local/systemc-2.3.3 --enable-debug")]),t._v(" "),e("img",{attrs:{src:"/img/systemc/3_moi_truong_images/Picture2.png",alt:"Picture2"}})]),t._v(" "),e("li",[t._v("Tiến hành compile bằng lệnh: make\n"),e("img",{attrs:{src:"/img/systemc/3_moi_truong_images/Picture3.png",alt:"Picture3"}})]),t._v(" "),e("li",[t._v("Cài đặt : make install\n"),e("img",{attrs:{src:"/img/systemc/3_moi_truong_images/Picture4.png",alt:"Picture4"}})])]),t._v(" "),e("h2",{attrs:{id:"chay-example-tren-vscode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chay-example-tren-vscode"}},[t._v("#")]),t._v(" Chạy example trên vscode:")]),t._v(" "),e("ol",[e("li",[t._v("Cài đặt C/C++ extension  "),e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Tải hello example code tại: "),e("a",{attrs:{href:"https://github.com/HaTiDe/SystemC_Example",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/HaTiDe/SystemC_Example"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Mở vscode -> File -> Open Folder -> chọn hello . Tiến hành kết nối vscode với WSL\n"),e("img",{attrs:{src:"/img/systemc/3_moi_truong_images/Picture5.png",alt:"Picture5"}})]),t._v(" "),e("li",[t._v("Compile và chạy chương trình mẫu:")])]),t._v(" "),e("p",[t._v("kết quả: "),e("code",[t._v("Hello World")]),t._v(" "),e("img",{attrs:{src:"/img/systemc/3_moi_truong_images/Picture6.png",alt:"Picture6"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);