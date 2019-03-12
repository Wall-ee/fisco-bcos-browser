webpackJsonp([3],{"6M1K":function(t,r,e){"use strict";var _=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"search-main",staticStyle:{color:"#fff"}},[e("div",{staticClass:"container"},[e("h1",{staticStyle:{width:"100%","text-align":"center"}},[t._v("FISCO-BCOS 2.0区块链浏览器帮助文档")]),t._v(" "),e("h2",[t._v("一、描述")]),t._v(" "),e("h3",[t._v("1.1、基本描述")]),t._v(" "),t._m(0),t._v(" "),e("p",[e("img",{attrs:{src:t.overview,alt:"",referrerPolicy:"no-referrer"}})]),t._v(" "),e("p",[t._v(" ")]),t._v(" "),e("h4",[t._v("1.2、主要功能模块")]),t._v(" "),e("p",[t._v("本小节概要介绍浏览器的各个模块，方便大家对浏览器有一个整体的认识。区块链浏览器主要的功能模块有：群组切换模块，配置模块，区块链信息展示模块。")]),t._v(" "),e("h5",[t._v("1.2.1、群组切换模块")]),t._v(" "),e("p",[t._v("群组切换主要用于在多群组场景中切换到不同群组，进行区块链信息浏览。")]),t._v(" "),e("p",[e("img",{attrs:{src:t.switchGroup,alt:"switch_group",referrerPolicy:"no-referrer"}})]),t._v(" "),e("h5",[t._v("1.2.2、配置模块")]),t._v(" "),e("p",[t._v("主要包括群组配置，节点配置，合约配置。")]),t._v(" "),e("p",[e("img",{attrs:{src:t.groupConfig,alt:"group_config",referrerPolicy:"no-referrer"}})]),t._v(" "),e("h5",[t._v("1.2.3、区块链信息展示模块")]),t._v(" "),e("p",[t._v("区块链浏览器主要展示了链上群组的具体信息，这些信息包括：概览信息，区块信息，交易信息。")]),t._v(" "),e("p",[e("img",{attrs:{src:t.show,alt:"show.jpg",referrerPolicy:"no-referrer"}})]),t._v(" "),e("h2",[t._v("二、使用前提")]),t._v(" "),e("h3",[t._v("2.1、群组搭建")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("两者的主要区别在于build_chain为了使体验更好，搭建速度更快，辅助生成了群组内各个节点的私钥；但企业部署工具出于安全的考虑不辅助生成私钥，需要用户自己生成并设置。")]),t._v(" "),e("h3",[t._v("2.2、区块链浏览器搭建")]),t._v(" "),e("p",[t._v("区块链浏览器分为两个部分：后台服务fisco-bcos-browser、前端web页面fisco-bcos-browser-front。")]),t._v(" "),e("h4",[t._v("2.2.1、后台服务搭建")]),t._v(" "),t._m(3),t._v(" "),e("h4",[t._v("2.2.2、前端web页面服务搭建")]),t._v(" "),t._m(4),t._v(" "),e("h2",[t._v("三、初始化环境")]),t._v(" "),e("h3",[t._v("3.1、添加群组")]),t._v(" "),e("p",[e("img",{attrs:{src:t.createGroup,alt:"create_group",referrerPolicy:"no-referrer"}})]),t._v(" "),e("p",[t._v("服务搭建成功后，可使用网页浏览器访问nginx配置的前端IP和前端端口，进入到浏览器页面。未初始化群组的浏览器页面会引导大家到新建群组配置页面，新建群组需要配置群组ID，群组名称，描述。")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("群组名称是为群组ID取的一个有意义，便于理解的名字。")]),t._v(" "),e("p",[t._v("描述字段是对名称的进一步说明。")]),t._v(" "),e("h3",[t._v("3.2、添加节点")]),t._v(" "),e("p",[e("img",{attrs:{src:t.addNode,alt:"add_node",referrerPolicy:"no-referrer"}})]),t._v(" "),t._m(6),t._v(" "),e("h3",[t._v("3.3、添加合约")]),t._v(" "),e("p",[e("img",{attrs:{src:t.contract,alt:"contract",referrerPolicy:"no-referrer"}})]),t._v(" "),e("p",[t._v("本浏览器版本提供合约解析的功能。此功能需要用户把本群组使用的所有合约进行导入。")]),t._v(" "),e("p",[t._v("导入步骤：")]),t._v(" "),e("h4",[t._v("3.3.1 上传合约")]),t._v(" "),e("h4",[t._v("3.3.2 编译合约")]),t._v(" "),e("h2",[t._v("四、功能介绍")]),t._v(" "),e("h3",[t._v("4.1、概览")]),t._v(" "),e("h4",[t._v("4.1.1 概览信息")]),t._v(" "),e("p",[t._v("主要包括当前群组的块高，交易总量，正在处理的交易数，PBFT视图。")]),t._v(" "),e("h4",[t._v("4.1.2 最近15天的交易量")]),t._v(" "),e("p",[t._v("用折线图的形式展示了当前群组15内的交易情况。")]),t._v(" "),e("h4",[t._v("4.1.3 节点概览")]),t._v(" "),e("p",[t._v("节点概览展示了当前群组内各个节点的ID，当前快高，pbftView，和节点状态。")]),t._v(" "),e("h4",[t._v("4.1.4  区块概览")]),t._v(" "),e("p",[t._v("区块概览展示了最近4个区块的信息，包括每个区块的块高，出块者，块产生的时间及块上的交易总量。")]),t._v(" "),e("h4",[t._v("4.1.5  交易概览")]),t._v(" "),e("p",[t._v("交易概览展示了最近四个交易，包括交易hash，交易时间，交易的发送者、交易的接收者，如果是正确导入了交易相关的合约还能展出交易调用的接口信息。")]),t._v(" "),e("p",[e("img",{attrs:{src:t.overview,alt:"overview",referrerPolicy:"no-referrer"}})]),t._v(" "),e("h3",[t._v("4.2、区块信息浏览")]),t._v(" "),e("p",[t._v("区块信息浏览主要包括区块列表页面和区块详情页面。")]),t._v(" "),e("h3",[t._v("4.3、交易浏览")]),t._v(" "),e("p",[t._v("交易信息浏览主要包括交易列表页面和交易详情页面。")]),t._v(" "),e("h4",[t._v("4.3.1、交易解析")]),t._v(" "),t._m(7),t._v(" "),e("p",[e("img",{attrs:{src:t.transaction,alt:"transaction",referrerPolicy:"no-referrer"}})]),t._v(" "),e("h4",[t._v("4.3.2、事件解析")]),t._v(" "),e("p",[t._v("合约成功上传并编译后，区块链浏览器能够解析出此合约相关交易回执中的事件方法名和参数。")]),t._v(" "),e("p",[e("img",{attrs:{src:t.receipt,alt:"receipt",referrerPolicy:"no-referrer"}})])])])},a=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("区块链浏览器将区块链中的数据可视化，并进行实时展示。方便用户以Web页面的方式，获取当前区块链中的信息。本浏览器版本适配"),e("strong",[e("a",{attrs:{href:"https://github.com/FISCO-BCOS/FISCO-BCOS/tree/release-2.0.1"}},[t._v("FISCO-BCOS 2.0")])]),t._v("，关于2.0版本的特性可以参考此"),e("a",{attrs:{href:"https://fisco-bcos-documentation.readthedocs.io/zh_CN/release-2.0/docs/introduction.html"}},[t._v("链接")]),t._v("。在使用本浏览器之前需要先理解2.0版本的群组特性，详情可以参考此"),e("a",{attrs:{href:"https://fisco-bcos-documentation.readthedocs.io/zh_CN/release-2.0/docs/what_is_new.html#id2"}},[t._v("链接")]),t._v("。")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("区块链浏览器展示的数据是从区块链上同步下来的。为了同步数据需要初始化配置（添加群组信息和节点信息），故在同步数据展示前需要用户先搭建好区块链群组。"),e("strong",[e("a",{attrs:{href:"https://github.com/FISCO-BCOS/FISCO-BCOS/tree/release-2.0.1"}},[t._v("FISCO-BCOS 2.0")])]),t._v("提供了多种便捷的群组搭建方式。")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ol",[e("li",[t._v("如果是开发者进行开发调试，建议使用"),e("a",{attrs:{href:"https://fisco-bcos-documentation.readthedocs.io/zh_CN/release-2.0/docs/installation.html"}},[t._v("build_chain")]),t._v("。")]),t._v(" "),e("li",[t._v("如果是开发企业级应用，建议使用企业部署工具"),e("a",{attrs:{href:"https://fisco-bcos-documentation.readthedocs.io/zh_CN/release-2.0/docs/tutorial/enterprise_quick_start.html"}},[t._v("FISCO-BCOS generator")]),t._v("。")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("区块链浏览器后台服务使用Spring Boot的JAVA后台服务，具体搭建流程参见"),e("a",{attrs:{href:"http://xxxx/fisco-bcos-browser/blob/master/README.md"}},[t._v("文档")]),t._v("。")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("区块链浏览器前端web页面使用框架vue-cli，具体搭建流程参见"),e("a",{attrs:{href:"http://xxxx/fisco-bcos-browser-front/blob/master/README.md"}},[t._v("文档")]),t._v("。")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[e("strong",[t._v("群组ID需要和区块链群组ID保持一致。")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("添加群组所在的节点信息，用于区块链浏览器连接拉取相关展示信息。节点的rpc端口信息和p2p端口信息可以从节点的 "),e("strong",[t._v("config.ini")]),t._v("配置文件中获取。")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[t._v("合约成功上传并编译后，区块链浏览器能够解析出此合约相关交易的方法名和参数。浏览器的解析建立在合约的准确导入的基础上，故提醒用户在使用java和js等语言调用合约时，请"),e("strong",[t._v("注意保存合约的正确版本。")])])}],v={render:_,staticRenderFns:a};r.a=v},"7V5A":function(t,r,e){t.exports=e.p+"static/img/switch_group.a55e8b6.jpg"},"956I":function(t,r,e){t.exports=e.p+"static/img/add_node.1de6182.png"},"9kwk":function(t,r,e){"use strict";function _(t){e("us+r")}Object.defineProperty(r,"__esModule",{value:!0});var a=e("FMKa"),v=e("6M1K"),o=e("VU/8"),c=_,n=o(a.a,v.a,!1,c,"data-v-3ac45eb0",null);r.default=n.exports},FMKa:function(t,r,e){"use strict";var _=e("Bko/"),a=(e.n(_),e("RFxO")),v=(e.n(a),e("GlMl")),o=e.n(v),c=e("7V5A"),n=e.n(c),i=e("XN+r"),s=e.n(i),p=e("uBEm"),f=e.n(p),h=e("TVam"),l=e.n(h),u=e("956I"),d=e.n(u),m=e("bIuP"),g=e.n(m),b=e("MSYD"),w=e.n(b),x=e("omI3"),C=e.n(x);r.a={name:"help",data:function(){return{overview:o.a,switchGroup:n.a,groupConfig:s.a,show:f.a,createGroup:l.a,addNode:d.a,contract:g.a,transaction:w.a,receipt:C.a}}}},GlMl:function(t,r,e){t.exports=e.p+"static/img/overview.108873b.png"},MSYD:function(t,r,e){t.exports=e.p+"static/img/transaction.03b0314.png"},TVam:function(t,r,e){t.exports=e.p+"static/img/create_group.024ede5.png"},"XN+r":function(t,r,e){t.exports=e.p+"static/img/group_config.4980d50.png"},bIuP:function(t,r,e){t.exports=e.p+"static/img/contract.989c3d5.png"},nxXR:function(t,r,e){r=t.exports=e("FZ+f")(!1),r.push([t.i,"img[data-v-3ac45eb0]{width:100%}a[data-v-3ac45eb0]{color:#3498db;text-decoration:none}a[data-v-3ac45eb0]:active,a[data-v-3ac45eb0]:hover,a[data-v-3ac45eb0]:link,a[data-v-3ac45eb0]:visited{color:#3498db}",""])},omI3:function(t,r,e){t.exports=e.p+"static/img/receipt.a1fcec0.png"},uBEm:function(t,r,e){t.exports=e.p+"static/img/show.84f6cea.jpg"},"us+r":function(t,r,e){var _=e("nxXR");"string"==typeof _&&(_=[[t.i,_,""]]),_.locals&&(t.exports=_.locals);e("rjj0")("92a77b56",_,!0,{})}});