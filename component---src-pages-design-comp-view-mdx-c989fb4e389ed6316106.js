(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{XlPt:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return o})),n.d(a,"default",(function(){return s}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var t=n("7ljp"),c=n("013z");n("qKvR");function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var o={},r={_frontmatter:o},l=c.a;function s(e){var a=e.components,n=function(e,a){if(null==e)return{};var n,t,c={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,["components"]);return Object(t.b)(l,i({},r,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"From a design point of view it is intersting to apply the top 2 or 3 diagrams from the C4 models. We use the container as components view for the level of elements that are deployable as a standalone service / docker container."),Object(t.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(t.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.51388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAABF0lEQVQY011Q20rDQBTMd/opPii++CKI+BGC0Fp9UFQiVBEU6w2bFINUXUsuJO1mm83uZrM3NwlF8LAMw+wMhzmOaUdr3aFUuuNKSn+GQAKzNL0OUIwqxsX9tJhj0TqblGPdXUyb/7PnRrcfhSWjL5yTGpZ84xhMU/YXXm1uMEb8bJxjQhmlVtg+nV1NcqNF/xkGcWlk7YWEy3aZMXarM7jxSkLBnC1KEUTlzkW4LCmvKKv45gk4H0PrHDylnympauFOUJIzo+WSyt3L0FnbOlhA1HucD9/z74zsuxGppK3Ma9EbpS8/uOmvlUXMxOFDliBuhSQn60fAgQVVq75KNSYAgO/7HW+P0VxRtc8Kdx7oD9/s7yvAv6NZTZ5DppshAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(t.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"vaccine comp view",title:"vaccine comp view",src:"/vaccine-cold-chain/vaccine-cold-chain-main/static/c22b1647290986a04d24972fc9c263b3/3cbba/vaccine-comp-view.png",srcSet:["/vaccine-cold-chain/vaccine-cold-chain-main/static/c22b1647290986a04d24972fc9c263b3/7fc1e/vaccine-comp-view.png 288w","/vaccine-cold-chain/vaccine-cold-chain-main/static/c22b1647290986a04d24972fc9c263b3/a5df1/vaccine-comp-view.png 576w","/vaccine-cold-chain/vaccine-cold-chain-main/static/c22b1647290986a04d24972fc9c263b3/3cbba/vaccine-comp-view.png 1152w","/vaccine-cold-chain/vaccine-cold-chain-main/static/c22b1647290986a04d24972fc9c263b3/0b124/vaccine-comp-view.png 1728w","/vaccine-cold-chain/vaccine-cold-chain-main/static/c22b1647290986a04d24972fc9c263b3/4ea69/vaccine-comp-view.png 2304w","/vaccine-cold-chain/vaccine-cold-chain-main/static/c22b1647290986a04d24972fc9c263b3/f9369/vaccine-comp-view.png 2985w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(t.b)("p",null,"The components we want to consider for the MVP:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Vaccine manager service: responsibles of managing the vaccine as an entity, and support CRUD operations on the vaccine lots."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",i({parentName:"li"},{href:"../../solution/orderms/"}),"Order management service"),": support the operations to manage a Vaccine Shipping Order"),Object(t.b)("li",{parentName:"ul"},"Reefer manager service: to manage the refrigerator container life cycle."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",i({parentName:"li"},{href:"../voro/"}),"Vaccine Order & Reefer Optimization"),": to manage an optimized delivery plan for each vaccine order"),Object(t.b)("li",{parentName:"ul"},"Refrigerator container ",Object(t.b)("a",i({parentName:"li"},{href:"../../solution/reefer-iot/"}),"IoT as a simulator")," to help for the demonstration"),Object(t.b)("li",{parentName:"ul"},"Kafka event backbone and event store using IBM Event Streams as part of Cloud Pak for Integration"),Object(t.b)("li",{parentName:"ul"},"Cold chain monitoring agent: subscribe to telemetry events to assess cold chain violation and detect refrigerator anomalies"),Object(t.b)("li",{parentName:"ul"},"Anomaly detection scoring: Deployed as a Watson ML service, this is the scoring for predicting a reefer failure."),Object(t.b)("li",{parentName:"ul"},"BPM maintenance process to dispatch field engineers to do the maintenance of the reefer when anomaly was detected."),Object(t.b)("li",{parentName:"ul"},"Watson OpenScale to monitor model bias in real time.")),Object(t.b)("p",null,"Future component for MVP:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Vaccine Portal app: user interface to enter an order, view the reefer assignment…")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-design-comp-view-mdx-c989fb4e389ed6316106.js.map