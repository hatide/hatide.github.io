(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{315:function(t,n,e){"use strict";e.r(n);var a=e(14),i=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("System verilog hổ trợ tạo ra nhiều tiến trình chạy song song.\nTham khảo: "),n("a",{attrs:{href:"https://www.chipverify.com/systemverilog/systemverilog-threads",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.chipverify.com/systemverilog/systemverilog-threads"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('module main;\n    import "DPI-C" task c_main(int argc, input string argv[]);\n  \n    initial begin\n      for (int i = 0; i< 3;i++) begin\n        fork\n          automatic int index = i;\n          main(index);\n        join_none;\n      end\n\n      wait fork;\n    end\n    task main(int i);\n       automatic string value [2];\n       $sformat(value[0], "%0d", i);\n       #i;\n       $sformat(value[1], "%0d", $time);\n       c_main(2,value);\n    endtask;\nendmodule\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('#include <svdpi.h>\n#include <iostream>\n#include <stdlib.h>\n\nextern "C" void c_main(int argc, svOpenArrayHandle argv) {\n    const char** argv_ptr = static_cast<const char**>(svGetArrayPtr(argv));\n\tstd::cout <<"time: " << argv_ptr[1]  << " - thread id: " << argv_ptr[0] << std::endl;\n}\n')])])]),n("p",[t._v("Kết quả:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("time: 0 - thread id: 0\ntime: 1 - thread id: 1\ntime: 2 - thread id: 2\n")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);