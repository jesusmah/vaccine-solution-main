(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Zddk:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return p}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var n=t("7ljp"),i=t("013z");t("qKvR");function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o,s={},r=(o="InlineNotification",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),l={_frontmatter:s},d=i.a;function p(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.b)(d,c({},l,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"In this section we go over how to apply ",Object(n.b)("a",c({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/methodology/domain-driven-design/"}),"Domain Driven Design")," for the vaccine solution…"),Object(n.b)("h2",null,"From event storming to microservice"),Object(n.b)("p",null,"After the event discovery we have events organized over time as a process flow. We have events grouped into domain, with commands, data and business rules. The next step is to start designing the solution and apply domain driven design. "),Object(n.b)("h3",null,"Domain - sub domains"),Object(n.b)("p",null,"We could spend more time to do analysis of the relationship between domain. Starting from this diagram:"),Object(n.b)("p",null," ",Object(n.b)("span",c({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1071px"}}),"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.58333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACFElEQVQ4y32Tu2qqQRSF/+cQQUQCItgYbMw7aBuMtcRGizSCkGewtBHUNGJhFFMqATsxBCXxUsQLiMTghXhN1OgKa8OIx8M5GzYzbPasWfPNjLbZbLBer/Hz84PBYIBWq4Vut4ter4d2uy3zt7c3vL+/Y7fb4Ti2262spYZKjQVV/Pr6wmw2w3w+x2q1wmKxkJxOp/j+/sZwOEQmk8H9/T0eHh4wmUzEyLGopiYsckc2cKTgcrkUISajVCpBp9PBZDLh7OwM9Xpd6uxlDzU0TligOzpjFAoFOJ1OXF1dSRIFo9Pp4ObmBqFQCLe3t+j3+38goBltv98fCopROp2GxWKB3W6Hw+EQforXcT9r3IROmePxGFqz2UQikcDd3Z2w4fE/Pz+l4eXlBa+vr+KcbEejkYxEwRORLU/Cjc1ms2hosVgMer1euNhsNlmg3NLBaRARBYmJvYFAAG63Gy6XC7lcDtrz8zPC4TAikQji8bhw4AI2U7BcLiObzQqGSqUiG50+FbpVl6pxV8JtNBqoVquo1WrSwOdCXrwUg8Egt0s3DCWghCl0eDZsuL6+htFolIV+v/8AnJFMJhEMBiVTqdTh2ErwNEUwGo3C6/VKEizh5/N5PD4+4unpSTAw6Pj0uKepHT8FNZKZ1WrF+fk5Li4u8PHxIaJ0pj7Bv4Q11aAeOKNYLOLy8hIejwc+n++vL/Y/wV9/xon1YwAvsQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/vaccine-cold-chain/vaccine-cold-chain-main/static/c8c47a275cdd083aa9909232094230f7/52c28/es-domains.png",srcSet:["/vaccine-cold-chain/vaccine-cold-chain-main/static/c8c47a275cdd083aa9909232094230f7/7fc1e/es-domains.png 288w","/vaccine-cold-chain/vaccine-cold-chain-main/static/c8c47a275cdd083aa9909232094230f7/a5df1/es-domains.png 576w","/vaccine-cold-chain/vaccine-cold-chain-main/static/c8c47a275cdd083aa9909232094230f7/52c28/es-domains.png 1071w"],sizes:"(max-width: 1071px) 100vw, 1071px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",null,"We can focus on the domain we want to address during a MVP: order, reefer, cold chain monitoring."),Object(n.b)("p",null,"The marketing to order relation represents leads generation."),Object(n.b)("p",null,"The order needs reefers that are allocaded via an optimum scheduling to maximize refrigerator container usage,  and reduce shipping cost."),Object(n.b)("p",null,"The vaccine lots produced by the different manufacturers are allocated to an order."),Object(n.b)("p",null,"Domains help to address contexts. But we also need to look at data via the entities and value objects."),Object(n.b)("h3",null,"Entities"),Object(n.b)("p",null,"Looking from an order domain point of view we can derive the following entity diagram. Order will ship lots that includes vaccines. The container to ship lots is one to many Reefers. A reefer includes one to many lots. "),Object(n.b)("p",null," ",Object(n.b)("span",c({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"658px"}}),"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.65277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADXElEQVQ4y5WU209cVRTG50/1xWrEQi+ZQuuDD8aYaqtpGhtNYzFqJS0KJKViQUFb7EXKMJWhM1Bw6kA5ZWaY25k5c/blnJ9777nYEEzoSVb25ez9rW+t9a2d8DyPbC7L5uYmnreLEAIhhRulkG4upTyyJcrlMltbWw6w8E+hA2R+9IAt6GsBaq2J45je1wOTUrwyfw3AvL7DKl/ysHKF+cJnpNpX3XpfPkMLDGDYYSuO5iDxpD3KXDDEbC3J7eIJ5lvD/BKcYE8/IVaGsRIoJft5daP8//wmHpW+4rvMm0zlTzOZP8mPz4zlB9gJlqmWm5TLJRp1HyW1MynUf2CH5DfxVF9nojDAWOZdbuSOcyM7yK+tJC/ay8gA2sKA1jy80jaBrNOWfj8Fh6UhkYvHmA+S3MwNMb4xyO0XSf7gnAn5LxMvFNUqj/mYJX2Bpfg8Gf11Nw3q0DQk1vS33GOYWzunGMu+w0LzLItm7ckVUxHw1DJ3o2Gzf44FkWQluozfbOD7TQMmDbDuh25BE3W5Q1nl2G6k8VoZ9tUGJZmjJStEBvClSrMYvceMN2IKNkI6ukKtXqVaq7BX2qXuVwhly6nBMdQyxqypeAFRiAszFh09ascwxb34DA953zFPRZeITPUL8TwpPiWlLrPCJUfCnk9oEbNn8rTcuMaD3VFW29+zre/2q2mZlkwEZblhbJ2K/NtdzKkf+Lk+yGx1mLnmKZPzdAfQhvVczzGvhph+eZI7zeNk4mtY5lYm9pBlrLumDAFtolhXE/y0P8TM3hlm66cpmiL2AQvRb/wuR5jaSrLQOktGfUO5WGVT3TJF+Jx1PW4qG7p2DEXbXdzS0/zJBybsC2b8kKLMdACt97yaY7r6NtfX3mLSO8ZaPErLD1msfcJE8Q3uBx9Rqe4TtAMnGSsVq0lfFI2V8GXRFaZTFANYkllWmzd56k+R8cfZlvfRKmZDT/I4ukg2GiMIWuwX64hWJ2SbYyWivtm1k431Zjds3/bMXrD7oWkV6zkUgevnksiRbzygpp93AcK+qPvC7gnS6ijsmtOUbSXRM21armlCP8907Rip8Asi2X2JDjwQiYPNffA1sSzsPDSAj9oXmWkMkBZXjw54mIPOA9CmpNfw4iXXTZZ13/kr5/8FI13PeZu4CK4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/vaccine-cold-chain/vaccine-cold-chain-main/static/e81f2c9099841486e755565e694fb180/5f832/ddd-entities-1.png",srcSet:["/vaccine-cold-chain/vaccine-cold-chain-main/static/e81f2c9099841486e755565e694fb180/7fc1e/ddd-entities-1.png 288w","/vaccine-cold-chain/vaccine-cold-chain-main/static/e81f2c9099841486e755565e694fb180/a5df1/ddd-entities-1.png 576w","/vaccine-cold-chain/vaccine-cold-chain-main/static/e81f2c9099841486e755565e694fb180/5f832/ddd-entities-1.png 658w"],sizes:"(max-width: 658px) 100vw, 658px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",null,"From a reefer monitoring point of view we are interested by sensors and telemetries and lots inside the refrigerator."),Object(n.b)("p",null,"When doing the order fulfillment planning, we are interested by transportation characteristics, lot inventory, order and reefer inventory."),Object(n.b)("p",null," ",Object(n.b)("span",c({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"599px"}}),"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"90.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAADH0lEQVQ4y4WU61NTRxjGz9/amQ7FogZF0ss4/eDYmbZTp3zQ8QM6bae0FhkJEInUULWOIxgEK5chkBgQDA2Se0LOXnJ+3d1cGlrbfnjO5d19n33e23pCCqSQCOkbNHrwf3bzlvIf8DqLTcEJKNF0dm3//Ta69ga+8NtouEMtmRACr3Pijo6TbN4mFUTYbP5MQb5yZLvNONtMkGaKLW47O8YeaKANu8+SOYXuQyiWgxGmDvuYyHxIXJzmQCcIJCz6XzOT72eudI57lQH29RNScpZEaZTnxe9YKo+SUfd7FJqHVppE7Ro/vOzn1uogU/shDuSKI1wR1xnfOs1PL0PESx/zRj9lUXzFZLaPaC5EJNfHC3XdEKrekBUvGGG2corJvQEecpasSricrfANv6qz3K+e5zfOs6cfsyyvEj0YJJIZYjobYj34tlWoLqGR+1o9IqWnyAQxtnWEotw1uQla9ua0s6fUDEcqyZK6wq2tDxhbPcXETj/r3DRkbUKrzsKqCdoVDnqq3Ft5a/flMcvNEWJ/hInufcRcfpiN4Pu/CH1Z51hUDMocyxINWWv33rv60Heoy4LZVzXkNXxl9ivfibI+XlrHWOJLfucqieALdtUDp8Y5mxPtpl5YR6sy7c+xUZ9ko2rarBGhqnImKo2XbI4T90PMlz/hgRokraPd0DqKOopbhJpjVeRR7TPuFgaIvj3DXDlEQacNIXjbwR1+qZxj5nWY+cYQr5oxp9AqsQ1rC6Pdv3aEVkVdFF1XxHJhpneHWQguUVQZsxbgbepxHnOBZ1wybTFkKt1SWJL7bioKcse967LoctpROF+8yFjyPX5Mvs/d/BnyMuUO9qzjoVznrdzkUK1RlllX4VV9g6dcJMFlngSf8kYtdEfMFi5Zn2WtOtHKY/0OFZlzfp59tEJrwbWLUbIW3CR2NMhsNsxDESarF1uE9iIw64HiBE5Myt+Tbx1Wg1HuFUMmT8OG8IIZuYUuofNp3zaig7af13uXdStpvjf0mAn3czN6V1gMLptRXDpJKN/VUv9GaBZsk9fEkUGemsybvNX/82Lt4E8lyTCnsPg0GwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"3",title:"3",src:"/vaccine-cold-chain/vaccine-cold-chain-main/static/ee9f94c79cb3ddbc81a17a0ed217a739/747eb/ddd-entities-2.png",srcSet:["/vaccine-cold-chain/vaccine-cold-chain-main/static/ee9f94c79cb3ddbc81a17a0ed217a739/7fc1e/ddd-entities-2.png 288w","/vaccine-cold-chain/vaccine-cold-chain-main/static/ee9f94c79cb3ddbc81a17a0ed217a739/a5df1/ddd-entities-2.png 576w","/vaccine-cold-chain/vaccine-cold-chain-main/static/ee9f94c79cb3ddbc81a17a0ed217a739/747eb/ddd-entities-2.png 599w"],sizes:"(max-width: 599px) 100vw, 599px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("h3",null,"Bounded context"),Object(n.b)("p",null,"We have done just enough entity modeling, to start considering the order entity, as part of the ",Object(n.b)("em",{parentName:"p"},"order domain"),", to become an aggregate which is an important concept to define bounded context."),Object(n.b)("p",null,"Defining bounded context within a domain is not an easy exercise, using aggregate is a good approach and apply a good separation of concern practice."),Object(n.b)("p",null," ",Object(n.b)("span",c({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"892px"}}),"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.2361111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACxElEQVQ4y3WTzW8bRRjG99/h4wiCPwAOIFWCA5zgwLEB0eZAEJV6RapA7aUSHBBSVThU3IoEbaGmF5JGjeuGCDt2HBMnxYkd7+fM7uzM2Pnx7jq0AsRKj97Z0cwzz8zzvIHWU5K0RV60UOpP0rQQKBlrtF7AFIoiV+T5ompdIaurUgrnHN77ugbGdIAVouQ95vMGi88KnCyY4Z0c0P0C3f+K8vF3qN5V5nmfo0dXSPrXKU1BlGkOwxhtSoLhcMI3327w2ed3+eHHITduWK5d0+ztGeYnQlpq4t8vk3WvogbXGbc+Za66HG9eIut/jTGGx5OQdrdHpAuC1VXNc89rXnix5P0Pcl56OeKZZyN+aZS11lJOdeEDfNzEJVvY6Tq+mGDDdVz8mzxBTlqUjJRBGUuQJJr9/ZyDA8N4XLI7EPQd02xKNBvItSMOVj9m3LzIePMy2z8tMUu36DXOMWpeqhUey5X3h3tM5O2DdluxvJyytJRx/76pNMEJ/GF/5ub0LJHvUox+RR/eQx+tEw/v4PIR8eAmanRPDBOFueEwK4hFabC5qXjn3Zi33k5pNIqa0Eo5dC1a7ktSt8883sInLXzakas/wJkUP4eZIJcrhypnNJ4wlRp0OoqPVlLOnX+qcCYid/O7fH/8IZFtE21cIHr0CWr7CuO1szi1h3VznC1rwljMGI6O5Jk0wcOHijNnYl55NeH27aKOjDUnRG7Arr2DtmN8uIGLxBgxxYer4nwihIvcVYRlKcbNZoscNpuKN96Mee31hFu3ijp/hTjr7QmSmjqLdiZVYD31uCKz1v6T0Mm/zNWmrKxknF/WrK1VUREC2em9ZNDbeqO15hTlabVPCKtOWhC6ei6o2qksM+kITVHoupX+brkK1cL/Q9VuTxWeEoahpLzdYXu7R7fbrbGzs0Ov16Pf7//ngH8jy7Inaqv6F1/4uEP8oxxJAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"4",title:"4",src:"/vaccine-cold-chain/vaccine-cold-chain-main/static/64eb3346f6d7d391a8b376092ca823d0/b3dc6/es-order-ctx.png",srcSet:["/vaccine-cold-chain/vaccine-cold-chain-main/static/64eb3346f6d7d391a8b376092ca823d0/7fc1e/es-order-ctx.png 288w","/vaccine-cold-chain/vaccine-cold-chain-main/static/64eb3346f6d7d391a8b376092ca823d0/a5df1/es-order-ctx.png 576w","/vaccine-cold-chain/vaccine-cold-chain-main/static/64eb3346f6d7d391a8b376092ca823d0/b3dc6/es-order-ctx.png 892w"],sizes:"(max-width: 892px) 100vw, 892px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",null,"Doing the same from a reefer domain, we get:"),Object(n.b)("p",null," ",Object(n.b)("span",c({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"839px"}}),"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.83333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACwklEQVQ4y12US09TQRTH+US61M+BghqJEdnIkpXGVyIs3KpBZWV0oSBKuhEfiWIU0wQVUUhNi4TS0ktLub193LnzvJe/Z+a2gt7kdGbOzPn1vGb6OOdgLEQURSTSCWNWxw4J7dEZHrVp7EBEHTd3e2TXO2cZfRYmhIZUO4jEFIScpPknSJmQCBIOqQHlL0HkJ6Brr9HKTyJcvwct2rSv3TmlFMIwRF8UMVokJNsQagI/V0ex52dgP6UktJUY0I0vYLlxKAKy3/cRbTyAUSE0bWqtYIxJPbQ/XEgy11hfVxg81cTAQAszM5HTCa6gDcGbq5DFKQJnYaoZmMoT8rAJRUDrndbahe2AogvM5yUGB9vo72/j6bQFKgo3gk4A5i2g8vE8WGkOQe426stXEYs6AZM0kgMgIyAnY4lCQeDsUMt5+WI2RhULeOffQKC3kUS7SJqfYcIN7PtvgHqGPAwIqLtAkwIZE+DcpYxCjjE83MbQuRYycxb4Ae8bNxGoIuWI/pJyGRuNYO0WGivXEEsKmXSKYKmHlEMpdylHXwm3hFKpjIujDBdG2ph9noasjEwNKF+GlWD4LqSXgSg/Q9z5hbi14nTaJKmHnpfFWm6IcjWCzeI8Tp+ROHEywKPHvaJIl0NeW0RlcRTcewuyRbwPdDansbM4DLmXdTrbgn2NRhV+4wcZ51CpVHHpMsPYWAfz8zwFCuGM66Usqt/Gof0shZe4Yth5vP0Qul1wreWA1oCq7r58QePY8QBHjga4czd0QM7TlrDNa7SguUyLQADuvYL//TpUQGH3gLbKxigk+zGNMSlTkVSBJEkQxwd9plRPUmC0/ZKAVyD85cPACLVarStVBMEe6nVKg1+n9S7N63+B9kakYyrW4/2YO6/tTem2DaPqllAsFrvjFjY3i/A8j9ZbKJfL/z0U/z4aITt4HOxd/gPbngpUmNRQlwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"5",title:"5",src:"/vaccine-cold-chain/vaccine-cold-chain-main/static/2b0b4545cc0c3e880f4744050be96bb4/b6bf4/es-reefer-ctx.png",srcSet:["/vaccine-cold-chain/vaccine-cold-chain-main/static/2b0b4545cc0c3e880f4744050be96bb4/7fc1e/es-reefer-ctx.png 288w","/vaccine-cold-chain/vaccine-cold-chain-main/static/2b0b4545cc0c3e880f4744050be96bb4/a5df1/es-reefer-ctx.png 576w","/vaccine-cold-chain/vaccine-cold-chain-main/static/2b0b4545cc0c3e880f4744050be96bb4/b6bf4/es-reefer-ctx.png 839w"],sizes:"(max-width: 839px) 100vw, 839px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",null,"Those two things mean we want to have two separate services to manage order and reefer."),Object(n.b)("p",null,"Now the vision statement and the deeper analysis of the order domain, have lead the architect to think about an optimization component to compute the  ",Object(n.b)("strong",{parentName:"p"},"Order fulfillment plan")," taking into consideration lot inventory, order, reefer inventory, transportation constraints… Now the bounded context is becoming functional and team oriented. We need to engage Operational Research specialist, and bundle the developed mathematical model as a function or service exposed via APIs and consumable by the order management service. We can see from the second entity diagram that the aggregage is becoming the  ",Object(n.b)("strong",{parentName:"p"},"Order fulfillment plan"),", so a new service for that makes a lot of sense."),Object(n.b)("h3",null,"Commands to APIs"),Object(n.b)("p",null,"For the order bounded context we have identified a set of commands that can lead to a development of an open APIs specifications. "),Object(n.b)("p",null," ",Object(n.b)("span",c({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"344px"}}),"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"146.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdCAYAAACqhkzFAAAACXBIWXMAAAsSAAALEgHS3X78AAADWklEQVRIx5VVyU4bQRD1P0REgrCYLew7ZkcQwmrALIFbyCUkX5REgMG5OAg4cmIzF8QmBThwSA4IiSsw3eMIPLYFvFRNe2I7QcRzeOqmaL+p6lf12vHjp46NDQOB7RACgb9AsfX1EK6uIjg/D2ON9tuPnSNsbYVwfR2BY3ZWQ45TorxCoKQ0GRzLytawv2/A673Bi0zt0XOlZQJFxQJHRwYc3nkNhS8lGpskXC6JekJDowLvCwoFDg8N+Hw3yMsX5jmOu2LnXA0StXUSFZUCx8dEOE+EBYUSXV0SIyMSg4MS/QMSo2M6OjqkSZJI2NsnMeyRGHCrc2PjOlpaVYXHJ0ZyyZw6wyqDY9k54k/JmVla8rnYWlYuUFwSK3lxUUPnqyCGhnW4B5PBsY5OiRP68tLSrZmJ262jrz+OfsaAjp4eHaenRLi8wmUEzdRHRnWMjqqVwTE+vH9g4OEhaqooZQRCJEDGQHvDIJVnZpQo9S6B6hqByiq11tYJ87L53jY2QwCiiEajuLt7HPf36v+OGbrD5hbKZkwJ4iZ4POri3XTxNbUCmzHCUCiCSORpOLxejbKQqKoW9GOlXk+vaoPqGknZC2wFFCGXxFk8BbNtiopVyVwikzJ4z/3G6gXsEK6QKAPuICYmdYy/SQbHWG1um5QJ5+Y05OZJUwzuMUZZbOUYi8JzmnrJCxrdl0RbuyRxaJxolLjfmpoVmNhWyT6fhtY23VTVUpmFGRqWZk/yh2xlyKOXnSPN8bHcg4Ww3CbHGW+blAj9fsqwlcdIopvGh9HTq0apt0+n7CV2duwStqm5NIkSwDEu2Rah5TbcyJbTcPmWizhzbZbs+6qR78VFGRxSgvDfbBDtLIodldmxS0rjjm05Na/cPpypLUJubGduvLG5TGvla8i129hnZ0Hs7YVxQJ73D8j6d3cNXF5GTHtiN/kv4eqqwNupX/jwMYjp6SDeJ4BjU++C+H4Um+VwCoRfvmhIz1Al8lPIsJTmNT1DM99mW6IUl9C40QvmGVGv2CS5zMSEbr5w/AF+8FMmXFhQhGz5PMNsW0PUOq+7lSeyytt2CD991vAsTSC/QM1ttlM9nbzPo1jacw1razYIT050+L+FsLx8i6UYlhNWv/8WFxdh89ULpyDKbw3UK0Ii32NvAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"6",title:"6",src:"/vaccine-cold-chain/vaccine-cold-chain-main/static/2417028633f3be6b5b2d7fbec11d5be5/6050f/ddd-order-commands.png",srcSet:["/vaccine-cold-chain/vaccine-cold-chain-main/static/2417028633f3be6b5b2d7fbec11d5be5/7fc1e/ddd-order-commands.png 288w","/vaccine-cold-chain/vaccine-cold-chain-main/static/2417028633f3be6b5b2d7fbec11d5be5/6050f/ddd-order-commands.png 344w"],sizes:"(max-width: 344px) 100vw, 344px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("h3",null,"Event Driven?"),Object(n.b)("p",null,"Well, event storming helps to focus on events. Also a lot of the processing is asynchronous and some of the operation could be long running. Adopting an event driven implementation of the above services (order and reefer) will make a lot of sense. Also using the event sourcing pattern may help to have an audit trail of what happen to an order, a reefer and the vaccine lots. "),Object(n.b)("p",null,"So now the ",Object(n.b)("a",c({parentName:"p"},{href:"/vaccine-cold-chain/vaccine-cold-chain-main/design/syst-ctx/"}),"system context")," may look as described in this note, and the ",Object(n.b)("a",c({parentName:"p"},{href:"/vaccine-cold-chain/vaccine-cold-chain-main/design/comp-view/"}),"component view as here.")),Object(n.b)(r,{kind:"warning",mdxType:"InlineNotification"},"Once again we do not pretend to cover the full coverage of a domain driven design approach. We focused on a very minimal viable product to get us started."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-design-ddd-mdx-cd08a02c2085531f4de3.js.map